/**
 * RAJ AI APP BUILDER - Prompt Input Component
 * Built and Developed by RAJ SHAH
 * https://github.com/rajshah9305
 */

'use client';

import { useState, useEffect, useRef } from 'react';
import { PersonalizationEngine, PersonalizationSuggestion } from '@/lib/personalization';

interface PromptInputProps {
  onGenerate: (prompt: string) => void;
  isLoading: boolean;
}

export default function PromptInput({ onGenerate, isLoading }: PromptInputProps) {
  const [prompt, setPrompt] = useState('');
  const [suggestions, setSuggestions] = useState<PersonalizationSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [smartCompletions, setSmartCompletions] = useState<string[]>([]);
  const [showCompletions, setShowCompletions] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const message = PersonalizationEngine.getWelcomeMessage();
    setWelcomeMessage(message);
    
    const personalizedSuggestions = PersonalizationEngine.generateSuggestions();
    setSuggestions(personalizedSuggestions);
  }, []);

  useEffect(() => {
    if (prompt.length > 3) {
      const completions = PersonalizationEngine.getSmartCompletions(prompt);
      setSmartCompletions(completions);
      setShowCompletions(completions.length > 0);
    } else {
      setShowCompletions(false);
    }
  }, [prompt]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;

    PersonalizationEngine.trackAction('generate', {
      prompt,
      category: detectCategory(prompt),
      timestamp: new Date().toISOString(),
    });

    const preferences = PersonalizationEngine.getPreferences();
    PersonalizationEngine.savePreferences({
      generatedCount: preferences.generatedCount + 1,
      recentPrompts: [prompt, ...preferences.recentPrompts.slice(0, 9)],
    });

    onGenerate(prompt);
    setPrompt('');
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion: PersonalizationSuggestion) => {
    setPrompt(suggestion.description);
    setShowSuggestions(false);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey) && !isLoading) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const templates = [
    { 
      icon: '📝', 
      title: 'Todo List', 
      description: 'Task manager with drag & drop, categories, and local storage',
      prompt: 'Create a todo list app with drag and drop functionality, task categories (work, personal, urgent), completion checkboxes, delete buttons, and local storage persistence. Use a modern card-based design with Tailwind CSS.',
      category: 'Productivity' 
    },
    { 
      icon: '🎨', 
      title: 'Portfolio', 
      description: 'Personal portfolio with projects gallery and animations',
      prompt: 'Build a portfolio website with a hero section, about me section, projects gallery with hover effects, skills section with progress bars, and a contact form. Include smooth scroll animations and a modern gradient design.',
      category: 'Creative' 
    },
    { 
      icon: '📊', 
      title: 'Dashboard', 
      description: 'Analytics dashboard with charts and KPI cards',
      prompt: 'Create an analytics dashboard with KPI cards showing metrics, a line chart for trends, bar chart for comparisons, and a data table. Use a clean, professional design with stat cards and responsive layout.',
      category: 'Business' 
    },
    { 
      icon: '🎮', 
      title: 'Memory Game', 
      description: 'Interactive memory card matching game',
      prompt: 'Build a memory card matching game with a 4x4 grid of cards, flip animations, score tracking, timer, and restart button. Cards should flip on click and match when two identical cards are selected. Use colorful, playful design.',
      category: 'Entertainment' 
    },
    { 
      icon: '🛒', 
      title: 'Product Catalog', 
      description: 'E-commerce product listing with filters',
      prompt: 'Create an e-commerce product catalog with product cards (image, name, price, rating), category filters, search bar, sort options (price, rating), and add to cart buttons. Use a grid layout with responsive columns.',
      category: 'Commerce' 
    },
    { 
      icon: '💬', 
      title: 'Chat Interface', 
      description: 'Real-time messaging UI with conversations',
      prompt: 'Build a chat interface with a conversation list sidebar, message thread area, message bubbles (sent/received), typing indicator, timestamp, and message input with send button. Use WhatsApp-inspired design with smooth animations.',
      category: 'Social' 
    },
  ];

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Welcome Message */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-xl p-4 sm:p-6 text-white animate-slide-up">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="relative">
          <h1 className="text-xl sm:text-2xl font-bold mb-1">{welcomeMessage}</h1>
          <p className="text-orange-100 text-sm sm:text-base">Transform your ideas into reality with AI</p>
        </div>
      </div>

      {/* Main Input Form */}
      <form onSubmit={handleSubmit} className="space-y-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <div className="relative">
          <div className="relative">
            <textarea
              ref={textareaRef}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Describe the app you want to build... (e.g., 'Create a modern todo app with dark mode')"
              className="input-premium min-h-[100px] resize-none pr-12 text-sm scrollbar-premium focus-ring-orange"
              disabled={isLoading}
              aria-label="Application description"
            />
            <div className="absolute bottom-2 right-2 flex items-center gap-2">
              <span className="text-xs text-gray-400 hidden sm:block">
                {prompt.length > 0 ? `${prompt.length} chars` : 'Cmd/Ctrl + Enter'}
              </span>
            </div>
          </div>

        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="hidden sm:inline">Be specific for better results</span>
          </div>
          <button
            type="submit"
            disabled={!prompt.trim() || isLoading}
            className="btn-primary px-6 py-2.5 flex items-center gap-2 group text-sm"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Generating...
              </>
            ) : (
              <>
                <span>Generate App</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Template Gallery */}
      <div className="space-y-1.5 animate-slide-up" style={{ animationDelay: '0.3s' }}>
        <h3 className="text-sm font-bold text-black">Quick Templates</h3>
        <div className="flex flex-wrap gap-2">
          {templates.map((template, idx) => (
            <button
              key={idx}
              onClick={() => {
                setPrompt(template.prompt);
                setShowSuggestions(false);
              }}
              disabled={isLoading}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-300 rounded-lg transition-all text-xs font-medium text-gray-700 hover:text-orange-600 group"
            >
              <span className="text-base group-hover:scale-110 transition-transform">{template.icon}</span>
              <span>{template.title}</span>
            </button>
          ))}
        </div>
      </div>


    </div>
  );
}

function detectCategory(prompt: string): string {
  const lower = prompt.toLowerCase();
  if (lower.includes('todo') || lower.includes('task') || lower.includes('note')) return 'Productivity';
  if (lower.includes('game') || lower.includes('quiz') || lower.includes('fun')) return 'Entertainment';
  if (lower.includes('shop') || lower.includes('cart') || lower.includes('product')) return 'Commerce';
  if (lower.includes('chart') || lower.includes('dashboard') || lower.includes('analytics')) return 'Business';
  if (lower.includes('chat') || lower.includes('social') || lower.includes('message')) return 'Social';
  if (lower.includes('portfolio') || lower.includes('gallery') || lower.includes('design')) return 'Creative';
  return 'General';
}
