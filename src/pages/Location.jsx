import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Resident from "../components/Resident";

const Location = () => {
    const [info, setInfo] = useState(null)
    const [url, setUrl] = useState(null);
    const [number, setNumber] = useState(null);
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




    useEffect(()=>{
        if(info){
        const randomNumber = Math.floor(Math.random() * info.residents?.length)
        setUrl(info.residents[randomNumber])    
        }
        
    },[info])

    useEffect(()=>{
        if(url){
          const number = url.split("/").pop();
        setNumber(number)  
        }
        
    },[url])
    console.log("number")
    console.log(number)
    
    return ( 
        <section>
            <div className="container mx-auto py-10">
            {info && (
                <div className="bg-gray-900 mx-auto w-full rounded-xl shadow-md overflow-hidden md:max-w-2xl" key={info.id}>
                <div className="md:flex">
                <div className="md:flex-shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-48" src={`https://rickandmortyapi.com/api/character/avatar/${number}.jpeg`} alt={info.name} />
                </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-md mb-4 text-indigo-500 font-semibold">{info.name}</div>
                    <p className="mt-2 text-gray-300">Type: {info.type}</p>
                    <p className="mt-2 text-gray-300">Dimension: {info.dimension}</p>
                    <p className="mt-2 text-gray-300">Residents: {info.residents.length}</p>
                  </div>
                </div>
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