import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return ( 
        <>
            <nav className="flex shadow-md items-center justify-center bg-white text-black px-4" >
                <div className="w-full max-w-6xl flex flex-row justify-between items-center py-2">
                    <Link to="/">   
                        <img src="/assets/logo.png" className="h-10" alt="logo"/>
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