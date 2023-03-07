import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa"

const Header = () => {
    const navigate = useNavigate();

    return ( 
        <>
            <nav className="flex shadow-lg items-center justify-center mb-10">
                <div className="w-full max-w-6xl flex flex-row justify-between items-center py-2">
                    <Link to="/">
                        <FaHome className="text-2xl" />
                    </Link>
                    
                    <div className="flex">
                        <p 
                            className="cursor-pointer px-2 font-semibold"
                            onClick={()=>navigate("/characters")}
                        >
                            Characters
                        </p>
                        <p 
                            className="cursor-pointer px-2 font-semibold"
                            onClick={()=>navigate("/episodes")}
                        >
                            Episodes
                        </p>
                        <p 
                            className="cursor-pointer px-2 font-semibold"
                            onClick={()=>navigate("/locations")}
                        >
                            Locations
                        </p>
                    </div>
                </div>
            </nav>
        </>
     );
}
 
export default Header;