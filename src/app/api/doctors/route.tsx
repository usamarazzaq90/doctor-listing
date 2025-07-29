import doctors from "../../../../data/doctors";

export async function GET (){
    return Response.json(doctors);
}