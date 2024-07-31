'use client';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <svg
        className="w-8 h-8 text-indigo-600 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" />
        <path d="M4 12a8 8 0 0 1 8-8" />
      </svg>
    </div>
  );
};

export default Loading;
