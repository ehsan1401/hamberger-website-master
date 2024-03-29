


import Navigation from "../Nav&Foot/Navigation";
import Footer from "../Nav&Foot/Footer";
import { Link } from "react-router-dom";


const SignUp = () => {
    const ImageBackground = '/img/LoginWallpeaper.jpg';
    return(
        <>
            <div className="bg-neutral-800">
                <Navigation className=""/>
                <div className="bg-neutral-300 dark:bg-neutral-700 h-screen py-14 px-96 bg-cover bg-no-repeat bg-blend-multiply" style={{backgroundImage:`url(${ImageBackground})`}}>
                    <div className="w-full h-full dark:bg-neutral-800 bg-neutral-200 bg-opacity-90 shadow-inner dark:shadow-white  rounded-2xl">
                        <form action="" className="" id="formLogin">
                            <h1 className="font-bold text-5xl pt-16 dark:text-neutral-100 text-neutral-700 flex justify-center">Sign Up</h1>
                            <div className="flex flex-col gap-8 pb-10 pt-16 justify-center items-center">
                                <div className="user bg-transparent flex justify-center gap-10">
                                    <label htmlFor="Username"><i class="fa-solid fa-user text-3xl dark:text-white text-neutral-700"></i></label>
                                    <input type="text" id="Username" className="bg-transparent px-3 font-semibold text-sm dark:text-white text-neutral-700" placeholder="User Name" required autoFocus />
                                </div>
                                <div className="user bg-transparent flex justify-center gap-10">
                                    <label htmlFor="email"><i class="fa-solid fa-user text-3xl dark:text-white text-neutral-700"></i></label>
                                    <input type="email" id="email" className="bg-transparent px-3 font-semibold text-sm dark:text-white text-neutral-700" placeholder="Email" required autoFocus />
                                </div>
                                <div className="password bg-transparent flex justify-center gap-10">
                                    <label htmlFor="pass"><i class="fa-solid fa-lock text-3xl dark:text-white text-neutral-700"></i></label>
                                    <input type="password" id="pass" className="bg-transparent px-3 font-semibold text-sm dark:text-white text-neutral-700" placeholder="Password" required />
                                </div>
                                <div className="Repassword bg-transparent flex justify-center gap-10">
                                    <label htmlFor="Repass"><i class="fa-solid fa-lock text-3xl dark:text-white text-neutral-700"></i></label>
                                    <input type="password" id="Repass" className="bg-transparent px-3 font-semibold text-sm dark:text-white text-neutral-700" placeholder="Repeat Password" required />
                                </div>
                                <button type="submit" className="text-center border-2 w-44 darK:border-white border-neutral-700 border-solid bg-transparent dark:text-white text-neutral-700 rounded-2xl px-5 py-2 font-bold hover:bg-neutral-50 dark:hover:text-neutral-800 hover:text-neutral-800 hover:border-neutral-400 transition duration-500">Sign Up</button>
                                <p className="dark:text-white text-neutral-700">New User? <Link to={"/Login"} className="dark:hover:text-gray-400 hover:text-gray-950 transition duration-300 text-sm">Log in</Link> / <Link href="" className="dark:hover:text-gray-400 hover:text-gray-950 transition duration-300 text-sm">Need Help?</Link></p>
                            </div>
            
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
 
export default SignUp;