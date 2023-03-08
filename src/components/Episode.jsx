import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Episode = ({episode}) => {
    const navigate = useNavigate();
    const [url, setUrl] = useState(null);
    const [number, setNumber] = useState(null);

    useEffect(()=>{
        if(episode){
        const randomNumber = Math.floor(Math.random() * episode.characters?.length)
        setUrl(episode.characters[randomNumber])    
        }
        
    },[episode])

    useEffect(()=>{
        if(url){
          const number = url.split("/").pop();
        setNumber(number)  
        }
        
    },[url])

    return ( 
        <>
        <div 
            className="bg-gray-900 mx-auto w-full rounded-xl shadow-md overflow-hidden md:max-w-xl cursor-pointer" 
            onClick={()=>navigate(`/episode/${episode.id}`)}
        >
            <div className="md:flex">
            <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src={`https://rickandmortyapi.com/api/character/avatar/${number}.jpeg`} alt={episode.name} />
            </div>
            <div className="p-8">
                <div className="uppercase tracking-wide text-md mb-4 text-indigo-500 font-semibold">{episode.name}</div>
                <p className="mt-2 text-gray-300">{episode.air_date}</p>
                <p className="mt-2 text-gray-300">{episode.characters.length} characters</p>
                <p className="mt-2 text-gray-300">Season {episode.episode.substr(1, 2)}, Episode {episode.episode.substr(4)}</p>
            </div>
            </div>
        </div>
        </>
     );
}
 
export default Episode;