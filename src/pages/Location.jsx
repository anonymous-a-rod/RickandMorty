import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Resident from "../components/Resident";

const Location = () => {
    const [info, setInfo] = useState(null)
    const param = useParams().LocationId;

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
            <div className="container mx-auto py-10">
            {info && (
                <div className="bg-gray-900 mx-auto w-full rounded-xl shadow-md overflow-hidden max-w-lg" key={info.id}>
                <div className="flex justify-center">
                  <div className="p-8 flex flex-col justify-center items-center">
                    <div className="uppercase tracking-wide text-xl mb-4 text-indigo-500 font-semibold">{info.name}</div>
                    <p className="mt-2 text-gray-300">Type: {info.type}</p>
                    <p className="mt-2 text-gray-300">Dimension: {info.dimension}</p>
                    <p className="mt-2 text-gray-300">Residents: {info.residents.length}</p>
                  </div>
                </div>
              </div>
              
            )}
            </div>
            {info && <div className="w-full grid grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3 gap-4 px-8 mx-auto xl:max-w-[1200px] 3xl:max-w-[1800px]">
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