import { useEffect, useState } from "react";
import Episode from "../components/Episode";

const Episodes = () => {
    const [episodes, setEpisodes] = useState(null);
    const [info, setInfo] = useState(null);

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch("https://rickandmortyapi.com/api/episode");
                const data = await response.json();
                setEpisodes(data.results)
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
            setEpisodes(data.results)
            setInfo(data.info)
        }catch(error){
            console.log(error);
        }
    }

    console.log(episodes)
    console.log(info)

    return ( 
        <>
            <section className="w-full my-12 px-8">
            <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 px-8 mx-auto xl:max-w-[1200px] 2xl:max-w-[1800px]">
            {episodes && episodes.map((episode) => (
                <Episode
                    episode={episode}
                    key={episode.id}
                />
            ))}
            </div>
            { info &&
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
            }

            </section>
        </>
     );
}
 
export default Episodes;