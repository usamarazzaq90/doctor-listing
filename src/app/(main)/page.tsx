import Link from "next/link";

export default function HomePage() {
  console.log('Hi from the home page!');
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center text-center p-6">
      {/* Hero Section */}
      <h1 className="text-5xl font-bold text-blue-900 mb-4">
        Welcome to Our Doctor Listing App
      </h1>
      <p className="text-lg text-gray-700 max-w-xl mb-8">
        Find the best doctors in your city! Browse our list of professionals by specialty and experience.
      </p>

      {/* Main Call-to-Action */}
      <Link
        href="/doctors"
        className="px-6 py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold shadow-lg hover:bg-blue-700 transition"
      >
        View Doctors
      </Link>

      {/* Secondary Links */}
      <div className="flex space-x-6 mt-8">
        <Link
          href="/about"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          About Us
        </Link>
        <Link
          href="/contact"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Contact
        </Link>
      </div>
    </main>
  );
}
