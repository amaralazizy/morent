import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-primary-100 px-4 min-h-screen">
      <div className="flex flex-col items-center">
        <svg
          className="w-24 h-24 text-primary-400 mb-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
          />
        </svg>
        <h1 className="text-5xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-8 text-center max-w-md">
          Oops! The page you're looking for doesn't exist or has been moved.
          Let's get you back home.
        </p>
        <Link href="/">
          <span className="inline-block px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg shadow hover:bg-primary-500/90 transition-colors">
            Go to Homepage
          </span>
        </Link>
      </div>
    </div>
  );
}
