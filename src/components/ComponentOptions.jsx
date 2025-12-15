import { useTheme } from '../context/ThemeContext';

function ComponentOptions({ fileName, setFileName, regenerateWithNewName, showPreview, setShowPreview }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`mb-6 backdrop-blur-xl ${isDark ? 'bg-indigo-900/20' : 'bg-white/60'} rounded-xl border ${isDark ? 'border-indigo-500/30' : 'border-gray-300'} p-4 sm:p-6 animate-fade-in-up`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Component Name Editor */}
        <div>
          <label className={`block text-sm font-semibold ${isDark ? 'text-purple-200' : 'text-gray-800'} mb-2 flex items-center gap-2`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            Component Name
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              className={`flex-1 px-4 py-2 ${isDark ? 'bg-gray-900/50 text-white border-purple-500/30' : 'bg-white text-gray-900 border-gray-300'} border rounded-lg font-mono text-sm focus:outline-none focus:ring-2 ${isDark ? 'focus:ring-pink-500/50 focus:border-pink-500/50' : 'focus:ring-purple-400 focus:border-purple-400'} transition-all`}
              placeholder="ComponentName"
            />
            <button
              onClick={regenerateWithNewName}
              className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all font-semibold text-sm cursor-pointer"
              title="Regenerate with new name"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
          <p className={`text-xs ${isDark ? 'text-purple-300' : 'text-gray-600'} mt-2`}>
            File: {fileName.replace(/[^a-zA-Z0-9]/g, '') || 'SVGComponent'}.jsx
          </p>
        </div>

        {/* Options */}
        <div>
          <label className={`block text-sm font-semibold ${isDark ? 'text-purple-200' : 'text-gray-800'} mb-3 flex items-center gap-2`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            Options
          </label>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={showPreview}
                onChange={(e) => setShowPreview(e.target.checked)}
                className={`w-5 h-5 rounded ${isDark ? 'border-purple-500/30 bg-gray-900/50' : 'border-gray-300 bg-white'} checked:bg-gradient-to-r checked:from-purple-600 checked:to-pink-600 focus:ring-2 ${isDark ? 'focus:ring-purple-500/50' : 'focus:ring-purple-400'} transition-all`}
              />
              <span className={`text-sm ${isDark ? 'text-purple-200 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900'} transition-colors`}>
                Show SVG Preview
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentOptions;
