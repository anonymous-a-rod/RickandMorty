import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCircle } from "react-icons/fa"

const Character = ({resident}) => {
    const navigate = useNavigate();
    const [info, setInfo] = useState(null)

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch(resident);
                const data = await response.json();
                setInfo(data)
            }catch(error){
                console.log(error);
            }
        }
        fetchData()
    },[resident])

    console.log(info)

    return ( 
        <>
        { info &&
        <div 
            className=" mx-auto w-full bg-gray-900 rounded-xl shadow-md overflow-hidden md:max-w-xl cursor-pointer" 
            onClick={()=>navigate(`/character/${info.id}`)}
        >
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-48" src={info.image} alt={info.name} />
                </div>
                <div className="p-8">
                <div className="uppercase tracking-wide text-md mb-4 text-indigo-500 font-semibold">{info.name}</div>
                    <p className="mt-2 text-gray-300">
                        <FaCircle className={`inline text-md p-[3px] mr-1 mb-1 ${info.status.toLowerCase() === "alive"? "text-green-500" : info.status.toLowerCase() === "dead"? "text-red-500" : "text-yellow-500"}`}/> 
                        {info.status} - {info.species}
                    </p>
                    <p className="mt-2 text-gray-300">Last known location: {info.location.name}</p>
                </div>
            </div>
        </div>
        }
        </>
     );
}
 
export default Character;