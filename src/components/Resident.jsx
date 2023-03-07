import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
            className="mx-auto w-full bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl" 
            onClick={()=>navigate(`/character/${info.id}`)}
        >
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-48" src={info.image} alt={info.name} />
                </div>
                <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{info.name}</div>
                    <p className="mt-2 text-gray-500">{info.status} - {info.species}</p>
                    <p className="mt-2 text-gray-500">Last known location: {info.location.name}</p>
                </div>
            </div>
        </div>
        }
        </>
     );
}
 
export default Character;