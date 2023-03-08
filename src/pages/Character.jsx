import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaCircle } from "react-icons/fa";

const Character = () => {
    const [info, setInfo] = useState(null)
    const param = useParams().CharacterId;

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch(`https://rickandmortyapi.com/api/character/${param}`);
                const data = await response.json();
                setInfo(data)
            }catch(error){
                console.log(error);
            }
        }
        fetchData()
    },[param])

    return ( 
        <section>
            <div className="container mx-auto py-10">
            {info && (
                <div className="flex flex-col md:flex-row items-center justify-center space-x-10 ">
                <img
                    className="w-full md:w-1/2 rounded-lg shadow-lg"
                    src={info.image}
                    alt={info.name}
                />
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-bold mb-5">{info.name}</h2>
                    <div className="mb-5">
                    <span className="font-bold">Status:</span> 
                    <FaCircle className={`inline text-md p-[3px] ml-1 mr-1 mb-[2px] ${info.status.toLowerCase() === "alive"? "text-green-500" : info.status.toLowerCase() === "dead"? "text-red-500" : "text-yellow-500"}`}/>
                    {info.status}
                    </div>
                    <div className="mb-5">
                    <span className="font-bold">Species:</span> {info.species}
                    </div>
                    <div className="mb-5">
                    <span className="font-bold">Gender:</span> {info.gender}
                    </div>
                    <div className="mb-5">
                    <span className="font-bold">Location:</span> {info.location.name}
                    </div>
                    <div className="mb-5">
                    <span className="font-bold">Origin:</span> {info.origin.name}
                    </div>
                </div>
                </div>
            )}
            </div>
        </section>
     );
}
 
export default Character;