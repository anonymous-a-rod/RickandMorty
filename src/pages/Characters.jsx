import { useEffect, useState } from "react";
import Character from "../components/Character";

const Characters = () => {
    const [characters, setCharacters] = useState(null);
    const [info, setInfo] = useState(null);

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch("https://rickandmortyapi.com/api/character");
                const data = await response.json();
                setCharacters(data.results)
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
            setCharacters(data.results)
            setInfo(data.info)
        }catch(error){
            console.log(error);
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }

    return ( 
        <>
            <section className="w-full my-12 flex flex-col">
            <h2 className="text-center w-full text-gray-200 font-semibold text-4xl mb-10">Characters</h2>
            <div className="w-full grid grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3 gap-4 px-8 mx-auto xl:max-w-[1200px] 3xl:max-w-[1800px]">
            {characters && characters.map((character) => (
                <Character 
                    character={character}
                    key={character.id}
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
 
export default Characters;