import { useNavigate } from "react-router-dom";
import { FaCircle } from "react-icons/fa";

const Character = ({character}) => {
    const navigate = useNavigate();
    return ( 
        <>
        <div 
            className="bg-gray-900 mx-auto w-full bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl cursor-pointer" 
            key={character.id}
            onClick={()=>navigate(`/character/${character.id}`)}
        >
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-48" src={character.image} alt={character.name} />
                </div>
                <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{character.name}</div>
                <p className="mt-2 text-gray-500">
                    <FaCircle className={`inline text-md p-[3px] mr-1 mb-1 ${character.status.toLowerCase() === "alive"? "text-green-500" : character.status.toLowerCase() === "dead"? "text-red-500" : "text-yellow-500"}`}/> 
                    {character.status} - {character.species}
                </p>
                <p className="mt-2 text-gray-500">Last known location: {character.location.name}</p>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Character;