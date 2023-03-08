import { useEffect, useState } from "react";
import Resident from "../components/Resident";

const Home = () => {
    const [randNum, setRandNum] = useState(null)

    useEffect(()=>{
        const randomNumber = Math.floor(Math.random()*100)+1
        setRandNum(randomNumber)
    },[])

    return ( 
        <section className="max-w-8xl mx-auto mb-12">
            <div 
                className="max-w-[2000px] mx-auto bg-cover bg-center h-96 lg:h-[600px] xl:h-[700px] flex items-center justify-center mb-10"
                style={{ backgroundImage: "url('/assets/wallpaper-removebg.png')" }}
            >
            <h1 className="text-center max-w-xs xl:max-w-lg text-white font-bold text-5xl">Rick and Morty</h1>
            </div>
            { randNum && 
            <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 px-8 mx-auto xl:max-w-[1200px] 2xl:max-w-[1800px]">
                <Resident resident={`https://rickandmortyapi.com/api/character/${randNum}`} />
                <Resident resident={`https://rickandmortyapi.com/api/character/${randNum+100}`} />
                <Resident resident={`https://rickandmortyapi.com/api/character/${randNum+200}`} />
                <Resident resident={`https://rickandmortyapi.com/api/character/${randNum+300}`} />
                <Resident resident={`https://rickandmortyapi.com/api/character/${randNum+400}`} />
                <Resident resident={`https://rickandmortyapi.com/api/character/${randNum+500}`} />
            </div>
            }
        </section>
     );
}
 
export default Home;