import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Resident from "../components/Resident";

const Location = () => {
    const [info, setInfo] = useState(null)

    const param = useParams().LocationId;

    console.log(info)

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch(`https://rickandmortyapi.com/api/location/${param}`);
                const data = await response.json();
                setInfo(data)
            }catch(error){
                console.log(error);
            }
        }
        fetchData()
    },[param])

    return ( 
        <section>
            hello
            <div className="container mx-auto py-10">
            {info && (
                <div className="mx-auto w-full bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl" key={info.id}>
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{info.name}</div>
                    <p className="mt-2 text-gray-500">Type: {info.type}</p>
                    <p className="mt-2 text-gray-500">Dimension: {info.dimension}</p>
                    <p className="mt-2 text-gray-500">Residents: {info.residents.length}</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-4 mb-2">Additional information:</p>
                <ul className="list-disc ml-8 mb-4">
                  <li>Created: {info.created}</li>
                </ul>
              </div>
              
            )}
            </div>
            {info && <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
              {info.residents?.map((resident) => (
                  <Resident
                    resident={resident}
                    key={resident}
                  />
              ))}
              </div>
            }
        </section>
     );
}
 
export default Location;