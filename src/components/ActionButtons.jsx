function ActionButtons({ loadExample, clearAll, copyToClipboard, downloadJSX, hasOutput }) {
  return (
    <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-6 animate-fade-in">
      <button
        onClick={loadExample}
        className="px-4 cursor-pointer sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 hover:shadow-2xl font-semibold shadow-lg shadow-purple-500/50 active:scale-95 text-sm sm:text-base"
      >
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="hidden sm:inline">Load Example</span>
          <span className="sm:hidden">Example</span>
        </span>
      </button>
      <button
        onClick={clearAll}
        className="px-4 cursor-pointer sm:px-6 py-2 sm:py-3 backdrop-blur-md bg-gray-800/50 text-white rounded-lg hover:bg-gray-700/50 transition-all border border-purple-500/50 font-semibold hover:border-pink-500/50 active:scale-95 text-sm sm:text-base"
      >
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          <span className="hidden sm:inline">Clear All</span>
          <span className="sm:hidden">Clear</span>
        </span>
      </button>
      {hasOutput && (
        <>
          <button
            onClick={copyToClipboard}
            className="px-4 cursor-pointer sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105 hover:shadow-2xl font-semibold shadow-lg shadow-emerald-500/50 animate-slide-in active:scale-95 text-sm sm:text-base"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span className="hidden sm:inline">Copy JSX</span>
              <span className="sm:hidden">Copy</span>
            </span>
          </button>
          <button
            onClick={downloadJSX}
            className="px-4 cursor-pointer sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 hover:shadow-2xl font-semibold shadow-lg shadow-blue-500/50 animate-slide-in active:scale-95 text-sm sm:text-base"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span className="hidden sm:inline">Download</span>
              <span className="sm:hidden">Save</span>
            </span>
          </button>
        </>
      )}
    </div>
  );
}

export default ActionButtons;
