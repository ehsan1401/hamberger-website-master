import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
    const [theme , setTheme] = useState(localStorage.getItem("Theme"));
    localStorage.setItem("Theme", theme)
    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark")
        }
    }, [theme])
    const handleThemeSwitch = ()=>{
        setTheme(theme === "dark" ? "light" : "dark");
        
    }

    const logo = document.getElementById("ScrollerNavigation");
    const Scroll = document.getElementById("ScrolledNavigationItems");

    const userNavigationScrool = document.getElementById("userNavigationScrool");
    const userIconScrool = document.getElementById("userIconScrool");

    const [translated , setTranslated] = useState(-350);
    if(logo && Scroll){
        logo.addEventListener("mouseenter" , ()=>{
            setTranslated(10)
        })
        logo.addEventListener("mouseleave" , ()=>{
            setTranslated(-350)
        })
        Scroll.addEventListener("mouseenter" , ()=>{
            setTranslated(10)
        })
        Scroll.addEventListener("mouseleave" , ()=>{
            setTranslated(-350)
        })
    }

    if(userIconScrool && userNavigationScrool){
        document.getElementById("userIconScrool").addEventListener("mouseenter", ()=>{
            document.getElementById("userNavigationScrool").style.display = "block";
        })
        // document.getElementById("userIconScrool").addEventListener("mouseleave", ()=>{
        //     document.getElementById("userNavigationScrool").style.display = "none";
        // })
        document.getElementById("userNavigationScrool").addEventListener("mouseleave", ()=>{
            document.getElementById("userNavigationScrool").style.display = "none";
        })
    }




    return (
        <div className="navigation sticky top-0 w-full h-20 z-50  bg-gray-900 transition duration-300 hover:bg-opacity-100 bg-opacity-30">
            <ul className="text-xl text-gray-200 w-auto justify-center flex relative" style={{fontFamily:"Boli"}}>
                <Link to={"/"} className="hidden md:inline">
                    <li className="absolute left-0 flex"><img src="/img/icon.png" className="w-14 h-16 mx-5 mt-2" /> <span className="py-7">HAMBERGER</span></li>
                </Link>
                <Link className="md:hidden bg-blue-300" id="ScrollerNavigation">
                    <li className="absolute left-0 flex"><img src="/img/icon.png" className="w-14 h-16 mx-5 my-2" /></li>
                </Link>
                <ul className="absolute bg-neutral-700 bg-opacity-50 h-auto text-center w-40 top-20 transition duration-500 rounded-b-2xl text-neutral-200" id="ScrolledNavigationItems" style={{left:`${translated}px`}}>
                    <Link to={"/"}><li className="py-1 hover:text-hamberger-700">HOME</li></Link>
                    <Link><li className="py-1 hover:text-hamberger-700">FOODS</li></Link>
                    <Link><li className="py-1 hover:text-hamberger-700">MENU</li></Link>
                    <Link><li className="py-1 hover:text-hamberger-700">FAST FOODS</li></Link>
                    <Link><li className="py-1 hover:text-hamberger-700">DRINKS</li></Link>
                    <Link><li className="py-1 hover:text-hamberger-700">PIZZA MENU</li></Link>
                </ul>
                <ul className=" gap-10 hidden lg:flex">
                    <li className="py-7 hover:scale-105 transition duration-300"> <Link to={"/"}>HOME</Link></li>
                    <li className="py-7 hover:scale-105 transition duration-300"><Link>FOODS</Link></li>
                    <li className="py-7 hover:scale-105 transition duration-300"><Link>MENU</Link></li>
                    <li className="py-7 hover:scale-105 transition duration-300 whitespace-nowrap"><Link>FAST FOODS</Link></li>
                    <li className="py-7 hover:scale-105 transition duration-300"><Link>DRINKS</Link></li>
                    <li className="py-7 hover:scale-105 transition duration-300"><Link>PIZZA MENU</Link></li>
                </ul>
                

                <div className="absolute right-10 top-4 flex">
                    <button onClick={handleThemeSwitch} className="bg-neutral-700 hidden dark:flex pt-4 px-3 md:pt-4 md:px-5 rounded-2xl md:mx-10 mx-2">
                        <p className="px-2 hidden lg:inline">Dark</p>
                        <span class="material-symbols-outlined scale-110">
                            dark_mode
                        </span>
                    </button>
                    <button onClick={handleThemeSwitch} className="bg-neutral-200 text-neutral-800 flex dark:hidden pt-4 px-3 md:pt-4 md:px-5 rounded-2xl md:mx-10 mx-2">
                        <p className="px-2 hidden lg:inline">Light</p>
                        <span class="material-symbols-outlined">
                            light_mode
                        </span>
                    </button>
                    <img src="/img/Admin.jpg" id="userIconScrool" className="rounded-full w-14 h-14 hover:drop-shadow-[0_0_8px_rgba(256,256,256,0.5)] transition duration-300" title="USER" />
                </div>
                <div className="absolute top-20 right-3 text-center" id="userNavigationScrool">
                        <Link to={"/Login"} className="w-32 h-10 flex justify-center items-center dark:hover:bg-opacity-70  dark:hover:text-neutral-800 dark:bg-white bg-neutral-950 hover:bg-opacity-80 bg-opacity-50 dark:bg-opacity-20">Log in</Link>
                        <Link to={"/SignUp"} className="w-32 h-10 flex justify-center items-center  dark:hover:bg-opacity-70  dark:hover:text-neutral-800 dark:bg-white bg-neutral-950 hover:bg-opacity-80 bg-opacity-50 dark:bg-opacity-20 rounded-b-2xl">Sign up</Link>

                </div>
            </ul>

        </div>
    );
}
 
export default Navigation;