import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Resident from "../components/Resident";

const Episode = () => {
    const [episode, setEpisode] = useState(null)

    const param = useParams().episodeId;

    console.log(episode)

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
                <div className="mx-auto w-full bg-gray-900 rounded-xl shadow-md overflow-hidden md:max-w-2xl" key={episode.id}>
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{episode.name}</div>
                    <p className="mt-2 text-gray-500">Air date: {episode.air_date}</p>
                    <p className="mt-2 text-gray-500">Episode: {episode.episode}</p>
                    <p className="mt-2 text-gray-500">Characters: {episode.characters.length}</p>
                  </div>
                </div>
              </div>
              
            )}
            </div>
            {episode && <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
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