import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Location = ({location}) => {
    const navigate = useNavigate();
    const [url, setUrl] = useState(null);
    const [number, setNumber] = useState(null);

    useEffect(()=>{
        if(location){
        const randomNumber = Math.floor(Math.random() * location.residents?.length)
        setUrl(location.residents[randomNumber])    
        }
        
    },[location])

    useEffect(()=>{
        if(url){
          const number = url.split("/").pop();
        setNumber(number)  
        }
        
    },[url])
    console.log("number")
    console.log(number)

    return ( 
        <div 
            className="bg-gray-900 mx-auto w-full bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl cursor-pointer" 
            key={location.id}
            onClick={()=>navigate(`/location/${location.id}`)}
        >
        <div className="md:flex">
            <div className="md:flex-shrink-0 h-full bg-red-300 ">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src={number !== null? `https://rickandmortyapi.com/api/character/avatar/${number}.jpeg` : "assets/no-image-available-icon-6.png"} alt={location.name} />
            </div>
            <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{location.name}</div>
            <p className="mt-2 text-gray-500">Type: {location.type}</p>
            <p className="mt-2 text-gray-500">Dimension: {location.dimension}</p>
            <p className="mt-2 text-gray-500">Residents: {location.residents.length}</p>
            </div>
        </div>
        </div>
     );
}
 
export default Location;