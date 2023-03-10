import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Resident from "../components/Resident";

const Episode = () => {
    const [episode, setEpisode] = useState(null)
    const param = useParams().episodeId;

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch(`https://rickandmortyapi.com/api/episode/${param}`);
                const data = await response.json();
                setEpisode(data)
            }catch(error){
                console.log(error);
            }
        }
        fetchData()
    },[param])

    return ( 
        <section>
            <div className="container mx-auto py-10">
            {episode && (
                <div className="mx-auto w-full bg-gray-900 rounded-xl shadow-md overflow-hidden max-w-lg" key={episode.id}>
                <div className="flex justify-center">
                  <div className="p-8 flex flex-col justify-center items-center">
                    <div className="uppercase tracking-wide text-xl mb-4 text-indigo-500 font-semibold">{episode.name}</div>
                    <p className="mt-2 text-gray-300">Air date: {episode.air_date}</p>
                    <p className="mt-2 text-gray-300">Episode: {episode.episode}</p>
                    <p className="mt-2 text-gray-300">Characters: {episode.characters.length}</p>
                  </div>
                </div>
              </div>
              
            )}
            </div>
            {episode && <div className="w-full grid grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3 gap-4 px-8 mx-auto xl:max-w-[1200px] 3xl:max-w-[1800px]">
              {episode.characters?.map((resident) => (
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
 
export default Episode;