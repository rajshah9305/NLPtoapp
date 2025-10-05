# RAJ AI APP BUILDER - New UI Setup

## ✅ Server Running

Your application is now running at: **http://localhost:3001**

## 🎨 New UI Features

### Clean v0.dev-Inspired Design
- **White background** with **black text** and **orange accents**
- **Inter font** for modern typography
- **Smooth transitions** from single input to split-panel view

### User Flow

1. **Landing Page**
   - Large centered textarea for prompt input
   - Orange "Generate App" button
   - Clean, minimal design

2. **Smooth Transition** (700ms animation)
   - Single view → Two-panel layout
   - Left panel (35%): Shows your prompt
   - Right panel (65%): Real-time code streaming

3. **Generated View**
   - **Code Tab**: View generated React component
   - **Preview Tab**: Live preview (coming soon)
   - **Tests Tab**: Auto-generated test suite
   - **Copy Code** and **Download** buttons

## 🔧 Configuration

### API Key Setup (Optional)

The app works in **DEMO MODE** by default with mock data.

To enable real AI generation:

1. Get your Cerebras API key from: https://cerebras.ai/
2. Update `.env` file:
   ```
   CEREBRAS_API_KEY=your-real-api-key-here
   ```
3. Restart the server

### Current Mode

✅ **DEMO MODE** - Using mock data (no API key required)

## 🚀 Quick Test

1. Open http://localhost:3001
2. Enter a prompt like: "Create a todo list app"
3. Click "Generate App"
4. Watch the smooth transition and code streaming

## 📁 Files Modified

- `src/app/page.tsx` - New v0.dev-inspired UI
- `src/app/globals.css` - Minimal styling
- `src/app/api/generate/route.ts` - Added mock mode
- `.env` - Created with demo key

## 🔄 Restore Original

Backup files saved as:
- `src/app/page.backup.tsx`
- `src/app/globals.backup.css`

To restore: `mv src/app/page.backup.tsx src/app/page.tsx`

## 🎯 Next Steps

1. Test the UI at http://localhost:3001
2. Try different prompts
3. Add your Cerebras API key for real AI generation
4. Customize colors/styling in `globals.css`

---

**Built by Raj Shah** | https://github.com/rajshah9305
