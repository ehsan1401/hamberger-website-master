import {Link} from 'react-router-dom';
const Footer = () => {

    const handleSearchSubmit = (e)=>{
        e.preventDefault();
    }
    const handleEmailSubmit = (e)=>{
        e.preventDefault();
    }
    return (
        <div className="md:h-screen h-auto dark:bg-neutral-900 bg-neutral-700 transition duration-500 w-full">
            <div className="h-4/6 w-full flex md:flex-row flex-col justify-center items-center">
                <div className="Logos md:w-1/4 w-full md:pl-10 pt-20">
                    <div className="logo py-2">
                        <ul className="flex gap-2 justify-center"> 
                            <a href='#' className=" bg-gray-700 text-gray-50 w-16 h-16 rounded-2xl flex justify-center items-center hover:bg-gray-300 hover:text-gray-800 transition duration-300"><i class="fa-brands fa-telegram text-4xl"></i></a>
                            <a href='#' className=" bg-gray-700 text-gray-50 w-16 h-16 rounded-2xl flex justify-center items-center hover:bg-gray-300 hover:text-gray-800 transition duration-300"><i class="fa-brands fa-x-twitter text-4xl"></i></a>
                            <a href='#' className=" bg-gray-700 text-gray-50 w-16 h-16 rounded-2xl flex justify-center items-center hover:bg-gray-300 hover:text-gray-800 transition duration-300"><i class="fa-brands fa-facebook-f text-4xl"></i></a>
                            <a href='#' className=" bg-gray-700 text-gray-50 w-16 h-16 rounded-2xl flex justify-center items-center hover:bg-gray-300 hover:text-gray-800 transition duration-300"><i class="fa-brands fa-instagram text-4xl"></i></a>
                        </ul>
                    </div>
                    <div className="discribe w-72 font-light text-center m-auto text-gray-50 cursor-default">
                        <p style={{fontFamily:"perpeta"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est in libero necessitatibus consectetur at cumque tempora ex molestiae quia exercitationem! Praesentium obcaecati unde numquam facilis?</p>
                    </div>
                </div>
                <div className="QuickAccess md:w-3/4 w-full h-full px-5 md:py-20 py-5">
                    <h1 className="font-bold text-5xl text-gray-50 pl-5 py-5 md:py-0 cursor-default">Quick access</h1>
                    <div className="md:flex grid px-14 md:py-12 md:gap-24 gap-9">
                        <div>
                            <h3 style={{fontFamily:"MAIAN"}} className="text-3xl text-gray-50 cursor-default">Restaurant</h3>
                            <ul className="grid px-3 py-3 gap-4 text-lg" style={{fontFamily:"perpeta"}}>
                                <li className="text-gray-50"><Link className='hover:text-gray-400'>Home</Link></li>
                                <li className="text-gray-50"><Link className='hover:text-gray-400'>Menu</Link></li>
                                <li className="text-gray-50"><Link className='hover:text-gray-400'>Drinks</Link></li>
                                <li className="text-gray-50"><Link className='hover:text-gray-400'>Fast Foods</Link></li>
                                <li className="text-gray-50"><Link className='hover:text-gray-400'>Pizza Menu</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 style={{fontFamily:"MAIAN"}} className="text-3xl text-gray-50 cursor-default">Fast Foods</h3>
                            <ul className="grid px-3 py-3 gap-4 text-lg" style={{fontFamily:"perpeta"}}>
                                <li className="text-gray-50"><Link className='hover:text-gray-400'>Cheeseburger</Link></li>
                                <li className="text-gray-50"><Link className='hover:text-gray-400'>Hot dogs</Link></li>
                                <li className="text-gray-50"><Link className='hover:text-gray-400'>Philly cheese steak</Link></li>
                                <li className="text-gray-50"><Link className='hover:text-gray-400'>French Fries</Link></li>
                                <li className="text-gray-50"><Link className='hover:text-gray-400'>Roast Beef Sandwich</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 style={{fontFamily:"MAIAN"}} className="text-3xl text-gray-50 cursor-default">Drinks</h3>
                            <ul className="grid px-3 py-3 gap-4 text-lg" style={{fontFamily:"perpeta"}}>
                                <li className="text-gray-50"><Link className='hover:text-gray-400'>Garnacha tinta</Link></li>
                                <li className="text-gray-50"><Link className='hover:text-gray-400'>Negroni</Link></li>
                                <li className="text-gray-50"><Link className='hover:text-gray-400'>Old Fashioned</Link></li>
                                <li className="text-gray-50"><Link className='hover:text-gray-400'>Margarita</Link></li>
                                <li className="text-gray-50"><Link className='hover:text-gray-400'>Espresso Martini</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 style={{fontFamily:"MAIAN"}} className="text-3xl text-gray-50 cursor-default">Pizza Menu</h3>
                            <ul className="grid px-3 py-3 gap-4 text-lg" style={{fontFamily:"perpeta"}}>
                                <li className="text-gray-50"><Link className='hover:text-gray-400'>Margherita</Link></li>
                                <li className="text-gray-50"><Link className='hover:text-gray-400'>Pepperoni</Link></li>
                                <li className="text-gray-50"><Link className='hover:text-gray-400'>Meat Lover’s</Link></li>
                                <li className="text-gray-50"><Link className='hover:text-gray-400'>Hawaiian</Link></li>
                                <li className="text-gray-50"><Link className='hover:text-gray-400'>BBQ Chicken</Link></li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
  
            <div className="h-2/6 w-full">
                <div className="md:flex grid md:pb-10">
                    <form onSubmit={handleSearchSubmit} className="grid md:w-1/2 w-full md:px-24 px-5 md:py-8 py-4 md:gap-8 gap-4">
                        <label htmlFor="Search" className="md:text-2xl text-lg font-bold pl-3 text-gray-50">Search Box</label>
                        <div className=" bg-white inline overflow-hidden rounded-2xl">
                            <input className="focus:outline-none py-2 pl-5 w-11/12 cursor-pointer" type="text" name="Search" id="Search" placeholder="Search Here ..." />
                            <button className="bg-white w-1/12 h-full hover:bg-gray-100" value="submit"><i class="fa-solid fa-magnifying-glass text-gray-500"></i></button>
                        </div>
                    </form>
                    <form onSubmit={handleEmailSubmit} className="grid md:w-1/2 w-full md:px-24 px-5 md:py-8 py-4 md:gap-8 gap-4">
                        <label htmlFor="Email" className="md:text-2xl text-lg font-bold pl-3 text-gray-50">Information about discounts</label>
                        <div className=" bg-white inline overflow-hidden rounded-2xl">
                            <input className="focus:outline-none py-2 pl-5 w-11/12 cursor-pointer" type="text" name="Email" id="Email" placeholder="Enter Your Email..." />
                            <button className="bg-white w-1/12 h-full hover:bg-gray-100" value="submit"><i class="fa-solid fa-share text-gray-500"></i></button>
                        </div>
                    </form>
                </div>
                <div className="text-center text-white py-2 cursor-default" style={{fontFamily:"Titling"}}>©2023 <span>Ehsan Jangjo</span></div>
            </div>

        </div>
    );
}
 
export default Footer;



