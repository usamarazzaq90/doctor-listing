import Link from "next/link"
import doctors from "../../../../data/doctors"  

export default function DoctorsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">
          Meet Our Doctors
        </h1>
        <p className="text-gray-600 mb-12">
          Browse our list of top professionals and click to view more details.
        </p>

        {/* Doctors Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <Link
              key={doctor.id}
              href={`/doctors/${doctor.id}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition transform p-6 flex flex-col items-center text-center"
            >
              {/* Doctor Image */}
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-24 h-24 object-cover rounded-full border-4 border-blue-200 mb-4"
              />

              {/* Doctor Info */}
              <h2 className="text-xl font-semibold text-gray-800">{doctor.name}</h2>
              <p className="text-blue-600 font-medium">{doctor.specialty}</p>
              <p className="text-gray-500 text-sm">{doctor.experience} experience</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}