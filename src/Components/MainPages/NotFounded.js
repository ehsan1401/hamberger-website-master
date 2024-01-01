import { useNavigate } from "react-router-dom";
import Footer from "../Nav&Foot/Footer";
import Navigation from "../Nav&Foot/Navigation";
const NotFounded = () => {
    const past = useNavigate();
    return (
        <>
            <div className=" relative h-screen w-full bg-cover bg-no-repeat bg-center bg-blend-screen dark:bg-blend-multiply dark:bg-neutral-800 bg-neutral-300 transition duration-500" style={{backgroundImage:"url(/img/404.jpg)"}}>
                <Navigation className="absolute top-0 z-100" />
                <div className="w-full h-full flex flex-col justify-center items-center text-center px-32 pb-44 cursor-default">
                    <h1 className="dark:drop-shadow-[-6px_5px_5px_rgba(0,0,0,0.9)] transition duration-500 dark:text-gray-50 text-neutral-800 font-bold text-9xl" style={{fontFamily:"Unutterable"}}>404</h1>
                    <p className="dark:text-gray-50 text-neutral-800 text-2xl transition duration-500 " style={{fontFamily:"segoepr"}}>
                        Sorry, we couldn't find the entered address.
                    </p>
                    <button className="rounded-3xl px-5 py-1 my-5 font-bold text-white hover:bg-red-900 bg-red-700" onClick={()=>{past(-1)}}>Back</button>
                </div>

            </div>
            <Footer />
        </>
    );
}
 
export default NotFounded;