import Link from "next/link";
import doctors from "../../../../../data/doctors";

export default async function DoctorDetailPage({ params }:{
    params: Promise <{id: string}>
}) {
  const { id } = await params;
  const doctor = doctors.find((doc) => doc.id == parseInt(id));

  // If doctor not found (invalid ID)
  if (!doctor) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-500 mb-4">Doctor Not Found</h1>
          <Link
            href="/doctors"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Back to Doctors List
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* Doctor Image */}
        <div className="flex justify-center mb-6">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-200"
          />
        </div>

        {/* Doctor Info */}
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
          {doctor.name}
        </h1>
        <p className="text-center text-blue-600 text-lg font-medium mb-2">
          {doctor.specialty}
        </p>
        <p className="text-center text-gray-500 mb-6">
          {doctor.experience} experience
        </p>
        <p className="text-gray-700 leading-relaxed text-center mb-6">
          {doctor.description}
        </p>

        {/* Back Button */}
        <div className="text-center">
          <Link
            href="/doctors"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Back to Doctors
          </Link>
        </div>
      </div>
    </main>
  );
}
