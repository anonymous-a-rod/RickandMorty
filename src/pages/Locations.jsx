import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Location = () => {
    const [locations, setLocations] = useState([]);
    const [info, setInfo] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch("https://rickandmortyapi.com/api/location");
                const data = await response.json();
                setLocations(data.results)
                setInfo(data.info)
            }catch(error){
                console.log(error);
            }
        }
        fetchData()
    },[])

    async function fetchData(url){
        try{
            const response = await fetch(url);
            const data = await response.json();
            setLocations(data.results)
            setInfo(data.info)
        }catch(error){
            console.log(error);
        }
    }

    console.log(locations)

    return ( 
        <>
            <section className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {locations.map((location) => (
                <div 
                    className="mx-auto w-full bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl" 
                    key={location.id}
                    onClick={()=>navigate(`/location/${location.id}`)}
                >
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    {/* <img className="h-48 w-full object-cover md:h-full md:w-48" src={location.url} alt={location.name} /> */}
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{location.name}</div>
                    <p className="mt-2 text-gray-500">Type: {location.type}</p>
                    <p className="mt-2 text-gray-500">Dimension: {location.dimension}</p>
                    <p className="mt-2 text-gray-500">Residents: {location.residents.length}</p>
                  </div>
                </div>
              </div>
              
            ))}
            </div>
            <div className="w-full flex justify-center my-4">
                {info.prev? (
                    <p 
                        onClick={()=>(fetchData(info.prev))}
                        className="px-2 text-2xl cursor-pointer"
                    >Previous</p>
                ):(
                    <></>
                )}
                {info.next? (
                    <p 
                        onClick={()=>(fetchData(info.next))}
                        className="px-2 text-2xl cursor-pointer"
                    >Next</p>
                ):(
                    <></>
                )}

            </div>

            </section>
        </>
     );
}
 
export default Location;