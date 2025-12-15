import { useTheme } from '../context/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <header className={`relative backdrop-blur-md ${isDark ? 'bg-gray-900/80' : 'bg-white/80'} border-b ${isDark ? 'border-purple-500/30' : 'border-gray-200'} shadow-lg ${isDark ? 'shadow-purple-500/20' : 'shadow-gray-200/50'} animate-slide-down transition-all duration-300`}>
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/50 animate-glow-pulse">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                SVG to JSX Converter
              </h1>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-purple-300' : 'text-gray-700'}`}>Transform SVG to React components instantly</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="group relative p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Toggle theme"
            >
              <div className="relative w-5 h-5">
                {/* Sun Icon */}
                <svg
                  className={`absolute inset-0 w-5 h-5 text-purple-400 transition-all duration-500 ${
                    theme === 'light' ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                {/* Moon Icon */}
                <svg
                  className={`absolute inset-0 w-5 h-5 text-purple-400 transition-all duration-500 ${
                    theme === 'dark' ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
            </button>
            
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${isDark ? 'text-purple-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-all hover:scale-110 duration-300 cursor-pointer`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
