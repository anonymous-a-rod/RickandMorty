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
    }

    console.log(characters)
    console.log(info)

    return ( 
        <>
            <section className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
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