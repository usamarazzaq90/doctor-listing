import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      {/* Error Code */}
      <h1 className="text-5xl font-bold text-gray-800 mb-2">404</h1>

      {/* Title */}
      <h2 className="text-xl text-gray-600 mb-4">Page Not Found</h2>

      {/* Description */}
      <p className="text-gray-500 text-center max-w-md mb-6">
        Sorry, the page you’re looking for doesn’t exist. It might have been
        removed or the URL may be incorrect.
      </p>

      {/* Go Home Button */}
      <Link
        href="/"
        className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </main>
  );
}
