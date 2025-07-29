"use client";
import Link from "next/link"
import { useEffect, useState } from "react";
// import doctors from "../../../../data/doctors"  

// Define the type for a doctor
interface Doctor{
  id: number,
  name: string,
  specialty: string,
  experience: string,
  description:string,
  image:string,
}

export default function DoctorsPage() {
  const [doctors, setDoctors]=useState<Doctor[]>([]);   // Holds doctor data
  const [loading, setLoading]=useState<boolean>(true); // Loading state
  const [error, setError]=useState<string|null>(null);     // Error state
  const [specialty,setSpecialty]=useState<string>("All");   //Filter state

  useEffect(()=>{
    const fetchDoctors=async()=>{
      try {
        const response=await fetch("/api/doctors"); //Calling our API route
        if(!response.ok) throw new Error ("Failed to fetch the doctors");

        const data : Doctor[]=await response.json();  //Convert response to json
        setDoctors(data);  //update state with fetched data
      } catch (err) {
        if(err instanceof Error){
          setError(err.message);    //handle error
        } else{
          setError("Unknown Error");
        }
      } finally{
        setLoading(false);   //stop loading
      }
    }

    fetchDoctors();
  },[]) //empty array= run once when the page loads

  //Filtered Doctors
  const filteredDoctors=specialty==="All" ? doctors : doctors.filter((doc)=>doc.specialty===specialty);

  // Extract all unique specialties from doctors (for dropdown)
  const specialties=["All",...(doctors.map((doc)=>doc.specialty))];

  if (loading) return <p className="text-center mt-10"> Loading doctors...</p>
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">
          Meet Our Doctors
        </h1>
        <p className="text-gray-600 mb-12">
          Browse our list of top professionals and click to view more details.
        </p>

         {/* Specialty Filter */}
      <div className="flex justify-center mb-6">
        <label htmlFor="specialty" className="mr-2 text-lg font-medium">
          Filter by Specialty:
        </label>
        <select 
          id="specialty"
          value={specialty}
          onChange={(e)=>setSpecialty(e.target.value)}
          className="border rounded px-3 py-2 text-gray-700"
        >
          {specialties.map((spec)=>(
            <option key={spec} value={spec}>
              {spec}
            </option>
          ))}
        </select>
      </div>


        {/* Doctors Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDoctors.length >0 ? (
            filteredDoctors.map((doctor) => (
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
            ))
          ) : (
            <p className="text-center col-span-3">No doctors found.</p>
          )
          }
        </div>
      </div>
    </main>
  );
}