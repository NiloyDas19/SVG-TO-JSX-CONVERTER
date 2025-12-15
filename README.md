# 🎨 SVG to JSX Converter

Transform your SVG files into production-ready React components instantly. No sign-up required, completely free, and 100% privacy-focused.

![SVG to JSX Converter](https://img.shields.io/badge/React-19.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-38B2AC) ![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ What Problem Does It Solve?

When building React applications, developers often need to use SVG icons and graphics. However, SVG code from design tools or icon libraries isn't React-ready. You face several challenges:

- **❌ Manual Attribute Conversion**: Converting `class` to `className`, `stroke-width` to `strokeWidth`, etc.
- **❌ Style Object Formatting**: Transforming inline styles from strings to JavaScript objects
- **❌ Numeric Values**: Wrapping numeric attributes in curly braces for JSX
- **❌ Component Boilerplate**: Creating proper React component structure with exports
- **❌ Time-Consuming**: Doing this manually for dozens of icons wastes valuable development time

**Our Solution**: Paste your SVG, get a perfectly formatted React component in milliseconds.

---

## 🚀 Key Features

### 🎯 **Instant Conversion**
- Converts SVG markup to JSX in real-time
- No waiting, no server processing - everything runs in your browser
- Live preview of your SVG as you work

### 🎨 **Smart Preview Options**
- **4 Background Modes**: White, Black, Gray, and Checkerboard
- Perfect for viewing both light and dark SVGs
- See exactly how your icon will look in different contexts

### 🌓 **Light & Dark Theme**
- Beautiful, professional interface with theme switching
- Fully accessible with proper contrast ratios
- Smooth animations and transitions

### 📁 **Flexible Input Methods**
- **Drag & Drop**: Simply drop your .svg files
- **File Browser**: Click to select files from your computer
- **Paste Code**: Copy/paste SVG code directly
- **Load Example**: Test with pre-loaded sample SVG

### ⚙️ **Customization Options**
- **Dynamic Component Naming**: Auto-generates names from filenames or customize manually
- **Instant Regeneration**: Update component name and regenerate on the fly
- **Toggle Preview**: Show/hide SVG preview for focused editing

### 📋 **Export Options**
- **Copy to Clipboard**: One-click copy of JSX code
- **Download as .jsx**: Save directly to your project
- **Production-Ready**: Properly formatted with imports and exports

### 🔒 **Privacy-First**
- **100% Client-Side**: All processing happens in your browser
- **No Data Storage**: We don't store or send your files anywhere
- **No Sign-Up Required**: Start using immediately, no registration

### 🎭 **Professional Conversions**

Our converter handles:
- ✅ `class` → `className`
- ✅ `stroke-width` → `strokeWidth` (all kebab-case to camelCase)
- ✅ Inline styles to JavaScript objects
- ✅ Numeric attributes in JSX format
- ✅ Props spread support (`{...props}`)
- ✅ Proper React component structure
- ✅ Named exports for easy imports

---

## 💡 Use Cases

### **For React Developers**
- Quickly convert icon libraries (Font Awesome, Material Icons, etc.)
- Transform design assets from Figma, Sketch, or Adobe XD
- Create reusable icon components for your design system

### **For Design Teams**
- Export SVGs from design tools and make them developer-ready
- Ensure consistent icon usage across React applications
- Bridge the gap between design and development

### **For Freelancers**
- Speed up client projects with instant SVG-to-React conversion
- Maintain code quality with properly formatted components
- Save billable hours on manual conversion work

### **For Students & Learners**
- Understand how SVG translates to JSX
- Learn React component patterns
- Build icon libraries for practice projects

---

## 🎯 How It Works

1. **Upload or Paste**: Drop an SVG file or paste SVG code
2. **Preview**: See your SVG rendered with customizable backgrounds
3. **Customize**: Edit component name if needed
4. **Convert**: Automatic conversion to React-ready JSX
5. **Export**: Copy to clipboard or download as .jsx file
6. **Use**: Import directly into your React project

---

## 🛠️ Technology Stack

- **React 19.2.0** - Modern React with hooks
- **Vite 7.2.4** - Lightning-fast development server
- **Tailwind CSS 4.1.18** - Utility-first styling
- **React Syntax Highlighter** - Beautiful code display
- **Context API** - Theme management

---

## 🌟 What Makes It Special?

### **Intelligent Conversion**
Unlike simple find-and-replace tools, our converter:
- Understands SVG attribute patterns
- Handles complex style transformations
- Preserves SVG structure and attributes
- Adds React best practices automatically

### **Developer Experience**
- **Keyboard Shortcuts**: Quick access to common actions
- **Syntax Highlighting**: Color-coded JSX output
- **Line Numbers**: Easy code navigation
- **Responsive Design**: Works on desktop, tablet, and mobile

### **Visual Feedback**
- **Animated Transitions**: Smooth, professional animations
- **Loading States**: Clear feedback for all actions
- **Success Indicators**: Visual confirmation when files upload
- **Error Handling**: Helpful messages if something goes wrong

---

## 📦 Example Transformation

**Before (SVG):**
```xml
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
  <rect x="10" y="10" width="30" height="30" fill-opacity="0.5" class="my-rect" />
</svg>
```

**After (React JSX):**
```jsx
import * as React from "react";

const SVGComponent = (props) => (
  <svg width={100} height={100} xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={50} cy={50} r={40} stroke="black" strokeWidth={3} fill="red" />
    <rect x={10} y={10} width={30} height={30} fillOpacity={0.5} className="my-rect" />
  </svg>
);

export default SVGComponent;
```

---

## 🎓 Educational Value

Perfect for learning:
- How SVG attributes map to JSX
- React component structure and patterns
- JavaScript object notation for styles
- Modern React development workflow

---

## 🤝 Contributing

This is an open-source project. Contributions, issues, and feature requests are welcome!

---

## 📄 License

MIT License - Feel free to use in personal and commercial projects.

---

## 🔮 Future Enhancements

- TypeScript support
- Multiple component format options
- Batch conversion for multiple files
- SVG optimization before conversion
- Custom attribute mapping rules
- Component preview with live editing

---

## 💬 Feedback

Found a bug? Have a feature request? We'd love to hear from you!

---

**Made with ❤️ for the React community**

*Transform SVGs. Build faster. Ship with confidence.*
