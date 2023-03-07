import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <>
            <footer className="mt-10 w-full flex justify-center">
                <Link className="px-2" to="/About">About</Link>
                <Link className="px-2" to="/FAQ">FAQ</Link>
            </footer>
        </>
     );
}
 
export default Footer;