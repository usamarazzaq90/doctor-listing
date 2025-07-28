export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-xl p-8 text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">About Us</h1>
        <p className="text-gray-700 leading-relaxed text-lg">
          Welcome to <span className="font-semibold">DoctorApp</span> — your trusted
          place to find professional doctors in your city. We aim to make healthcare
          more accessible by helping you connect with the best doctors for your needs.
        </p>
        <p className="text-gray-600 mt-4">
          This is a simple demo project built with Next.js 15 and Tailwind CSS for learning
          purposes, showcasing routing, components, and page layouts.
        </p>
      </div>
    </main>
  );
}
