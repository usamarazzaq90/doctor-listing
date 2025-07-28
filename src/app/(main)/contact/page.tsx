export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-xl p-8 text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Contact Us</h1>
        <p className="text-gray-700 text-lg">
          Have any questions? Reach out to us at:
        </p>
        <p className="mt-4 text-blue-700 font-semibold">support@doctorapp.com</p>
        <p className="text-gray-600">or call us at +92 300 1234567</p>
        <div className="mt-6">
          <p className="text-gray-500">
            (This is just a demo page — not a real contact center.)
          </p>
        </div>
      </div>
    </main>
  );
}
