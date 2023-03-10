import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <>
            <footer className="py-10 w-full flex justify-center absolute bottom-0">
                <Link className="px-2" to="/about">About</Link>
                <Link className="px-2" to="/faq">FAQ</Link>
            </footer>
        </>
     );
}
 
export default Footer;