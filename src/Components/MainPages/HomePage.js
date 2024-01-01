import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Nav&Foot/Navigation";
import Footer from "../Nav&Foot/Footer";
import DB from '../../DB/DB.json';



const Home = () => {
    const ImageBackground = '/img/MainWallpeaper.jpg';
    let HealthyFoodArray =[];

    return ( 
        <div className="h-screen relative bg-cover bg-no-repeat dark:bg-neutral-800 bg-neutral-500 transition duration-500 bg-blend-multiply overflow-y-scroll overflow-x-hidden" style={{backgroundImage:`url(${ImageBackground})`}}>
            <Navigation />
            <div className="Scroller h-auto md:px-20 px-2 md:py-20 py-5">
                <div>
                    <div className="h-screen bg-transparent w-full sticky top-44 md:pl-20 px-5 cursor-default">
                        <h1 className="md:text-8xl text-3xl dark:text-gray-300 text-gray-50 pt-40  transition duration-500" style={{fontFamily:"Unutterable"}}>HAMBERGER</h1>
                        <p className="md:text-3xl text-lg pl-4 dark:text-gray-300 text-gray-50 pt-5 font-bold px-5 transition duration-500">Experience the best flavors with us</p>
                    </div>
                    <div className="relative">
                        <div className="lg:h-screen h-auto dark:bg-neutral-800 bg-gray-50 transition duration-500 w-full rounded-t-3xl py-5 md:py-0 ">
                            <h1 className="text-center py-3 text-2xl dark:text-gray-200 text-gray-700  transition duration-500 cursor-default" style={{fontFamily:"segoepr"}}>Wellcome to Hamberger Restrunt</h1>
                            <div className="items md:pl-24 md:pr-16 justify-center flex flex-wrap md:grid grid-flow-row grid-rows-2 grid-cols-4 gap-5">
                                {
                                    DB.map((db)=>
                                        db.Foods.slice(0 , 8).map((food)=>{
                                            let RateArray = [];
                                            for(let i = 0 ; i<=5 ; i++){
                                                if(i<food.Rate){
                                                    RateArray.push(<i class="fa-solid fa-star text-yellow-400"></i>)
                                                }else if(i>food.Rate){
                                                    RateArray.push(<i class="fa-regular fa-star"></i>)
                                                }
                                            }
                                            return(
                                                <Link to={"/Foods/" + food.name.replace(/\s/g , "-")} className="drop-shadow-[-4px_5px_5px_rgba(0,0,0,0.3)]">
                                                    <div className="Card bg-gray-50 w-64 h-80 overflow-hidden rounded-3xl border-2 border-solid border-gray-400">
                                                        <img src={food.Images[0]} className="h-44 w-full transition duration-500 hover:scale-110" />
                                                        <div className="bg-gray-50 dark:bg-gray-400 transition duration-500 h-full px-5 py-3">
                                                            <h3 style={{fontFamily:"Redemtion"}} className="text-xl text-gray-600 dark:text-neutral-950 transition duration-500">{food.name}</h3>
                                                            <p className="text-xs font-light pl-1 dark:text-neutral-950">{food.ingredients}</p>
                                                            <div className="flex">
                                                                <div className="rate">
                                                                    {
                                                                        RateArray.map((rat)=>{
                                                                            return(
                                                                                <>
                                                                                    {rat}
                                                                                </>
                                                                            )
                                                                        })
                                                                        // console.log(RateArray)
                                                                    }
                                                                </div>
                                                                <p className="text-2xl pl-10 text-right text-gray-600 dark:text-neutral-950 transition duration-500 hover:text-lime-600" style={{fontFamily:"Bernard"}}>{food.Price}{food.Symbol}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                    )
                                }
                            </div>
                        </div>
                        <div className="lg:h-screen h-auto dark:bg-neutral-800 w-full cursor-default">
                            {
                                DB.map((db)=>
                                    db.Foods.map((food)=>{
                                        if(food.TodaysOffer){
                                            return(
                                                <div className="w-full h-screen bg-cover bg-no-repeat bg-right" style={{backgroundImage:`url(${food.Images[0]})`}}>
                                                    <div className="md:w-1/2 w-full md:p-14 py-3 px-3 bg-gradient-to-l via-gray-200  from-transparent to-white dark:to-gray-600 dark:via-gray-500 transition duration-500 h-full">
                                                        <h1 className="md:text-5xl text-3xl dark:text-gray-50  transition duration-300 " style={{fontFamily:"segoepr"}}>Today's offer</h1>
                                                        <h3 className=" md:text-4xl text-xl md:py-10 py-3 md:pl-14 text-gray-700  dark:text-gray-50  transition duration-300 " style={{fontFamily:"CENTURY"}}>{food.name}</h3>
                                                        <div className=" md:pr-32 md:pl-16 px-3 h-full dark:text-gray-50  transition duration-300 ">
                                                            <h4 className="uppercase md:text-2xl text-xl" style={{fontFamily:"CENTURY"}}>ingredients</h4>
                                                            <p className="p-5 text-sm md:text-base" style={{fontFamily:"Arial"}}>{food.ingredients}</p>
                                                            <h4 className="uppercase text-2xl" style={{fontFamily:"CENTURY"}}>recipe</h4>
                                                            <p className="p-5 text-sm md:text-base" style={{fontFamily:"Arial"}}>{food.recipe}</p>
                                                            <Link to={"/Foods/" + food.name.replace(/\s/g , "-")} className="flex justify-center border-2 border-gray-900 border-solid text-black items-center m-auto px-3 w-32 h-10 rounded-2xl font-bold my-3 bg-white transition duration-500 hover:bg-neutral-800 hover:text-gray-50">Order Now</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })
                                )
                            }
                        </div>
                        <div style={{
                            backgroundImage:"url(/img/DrinksWallpeaper.jpg)"
                        }} className="md:h-screen h-auto dark:bg-neutral-800 bg-gray-200 w-full bg-cover bg-no-repeat bg-blend-screen dark:bg-blend-multiply bg-opacity-80 px-10 md:py-28 py-5 transition duration-500">
                            
                            <h1 style={{fontFamily:"BlackWizard"}} className="cursor-default md:text-6xl text-4xl md:pb-16 pb-5 md:pl-10 px-5 transition duration-500 text-neutral-900 drop-shadow-[-3px_3px_2px_rgba(256,256,256,0.7)] dark:text-gray-50 dark:drop-shadow-[-3px_3px_2px_rgba(0,0,0,0.7)] ">
                                Cold Weather Cocktails
                            </h1>
                            <div className="flex flex-wrap gap-5 justify-center">
                                {
                                    DB.map((db)=>
                                        db.Drinks.slice(0 , 4).map((drink)=>{
                                            let RateArray = [];
                                            for(let i = 0 ; i<=5 ; i++){
                                                if(i<drink.Rate){
                                                    RateArray.push(<i class="fa-solid fa-star text-yellow-400"></i>)
                                                }else if(i>drink.Rate){
                                                    RateArray.push(<i class="fa-regular fa-star"></i>)
                                                }
                                            }
                                            return(
                                                <Link to={"/Drinks/" + drink.name.replace(/\s/g , "-")} className="drop-shadow-[-4px_5px_5px_rgba(0,0,0,0.3)]">
                                                    <div className="Card bg-gray-50 w-64 h-96 overflow-hidden rounded-3xl border-2 border-solid border-gray-400">
                                                        <img src={drink.Images[0]} className="h-56 w-full transition duration-500 hover:scale-110" />
                                                        <div className="bg-gray-50 dark:bg-gray-400 transition duration-500 h-full px-5 py-3">
                                                            <h3 style={{fontFamily:"Redemtion"}} className="text-xl text-gray-600 dark:text-neutral-950 transition duration-500">{drink.name}</h3>
                                                            <p className="text-xs font-light pl-1 dark:text-neutral-950">{drink.ingredients}</p>
                                                            <div className="flex">
                                                                <div className="rate">
                                                                    {
                                                                        RateArray.map((rat)=>{
                                                                            return(
                                                                                <>
                                                                                    {rat}
                                                                                </>
                                                                            )
                                                                        })
                                                                        // console.log(RateArray)
                                                                    }
                                                                </div>
                                                                <p className="text-2xl pl-10 text-right text-gray-600 dark:text-neutral-950 transition duration-500 hover:text-lime-600" style={{fontFamily:"Bernard"}}>{drink.Price}{drink.Symbol}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                    )
                                }
                            </div>
                        </div>
                        <div className="lg:h-screen h-auto dark:bg-neutral-800 bg-gray-50 w-full relative flex">
                            <div className="w-full h-full bg-contain bg-no-repeat hidden lg:block" style={{backgroundImage:"url(/img/pizzaMenu.jpg)"}}></div>
                            <div className="h-full md:w-2/3 w-full bg-gradient-to-r from-transparent via-white to-gray-50 dark:to-neutral-800 dark:via-neutral-700 transition duration-500  absolute z-10 top-0">
                            </div>
                            <div className="w-full h-full md:relative z-10 right-20 md:p-14 p-7">
                                <h1 className="md:text-6xl text-4xl text-gray-700 dark:text-gray-100 transition duration-300 md:pl-10 pl-4 cursor-default" style={{fontFamily:"WereBeast"}}>Pizza Menu</h1>
                                <div className="flex gap-10 text-2xl p-14" style={{fontFamily:"TwCenMTStd"}}>
                                    <ul className="grid md:grid-cols-2 grid-cols-1 gap-5 text-gray-900 dark:text-gray-100 transition duration-300">
                                        {
                                            DB.map((db)=>
                                                db.Pizza.slice(0 , 20).map((pizza)=>{
                                                    return(
                                                        <li className="hover:underline">
                                                           <Link to={"/Pizza/" + pizza.name.replace(/\s/g , "-")}> -{pizza.name} </Link>
                                                        </li>
                                                    )
                                                })
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="lg:h-screen h-auto dark:bg-neutral-800 bg-lime-200 w-full md:p-10 p-4 transition duration-500" >
                            <h1 className="md:text-6xl text-3xl text-gray-900 pt-8 dark:text-neutral-100 transition duration-500 cursor-default" style={{fontFamily:"perpeta"}}>The Healthiest Meals</h1>
                            <div className="h-full w-full md:flex grid gap-5 justify-center md:pt-24 py-5">
                                {
                                    
                                    DB.map((db)=>
                                        db.Foods.map((food)=>{
                                            if(food.Type === 'Healthy'){
                                                HealthyFoodArray.push(food);
                                            }
                                        })
                                    )
                                }{
                                    HealthyFoodArray.slice(0 , 4).map((food)=>{
                                        let RateArray = [];
                                        for(let i = 0 ; i<=5 ; i++){
                                            if(i<food.Rate){
                                                RateArray.push(<i class="fa-solid fa-star text-yellow-400"></i>)
                                            }else if(i>food.Rate){
                                                RateArray.push(<i class="fa-regular fa-star"></i>)
                                            }
                                        }
                                            return(
                                                <Link to={"/Foods/" + food.name.replace(/\s/g , "-")} className="drop-shadow-[-4px_5px_5px_rgba(0,0,0,0.3)]">
                                                    <div className="Card bg-gray-50 w-64 h-96 overflow-hidden rounded-3xl border-2 border-solid border-gray-400">
                                                        <img src={food.Images[0]} className="h-52 w-full transition duration-500 hover:scale-110" />
                                                        <div className="bg-gray-50 dark:bg-gray-400 transition duration-500 h-full px-5 py-3">
                                                            <h3 style={{fontFamily:"Redemtion"}} className="text-xl text-gray-600 dark:text-neutral-950 transition duration-500">{food.name}</h3>
                                                            <p className="text-xs font-light pl-1 py-2 dark:text-neutral-950">{food.ingredients}</p>
                                                            <div className="flex">
                                                                <div className="rate">
                                                                    {
                                                                        RateArray.map((rat)=>{
                                                                            return(
                                                                                <>
                                                                                    {rat}
                                                                                </>
                                                                            )
                                                                        })
                                                                        // console.log(RateArray)
                                                                    }
                                                                </div>
                                                                <p className="text-2xl pl-10 text-right text-gray-600 dark:text-neutral-950 transition duration-500 hover:text-lime-600" style={{fontFamily:"Bernard"}}>{food.Price}{food.Symbol}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            )
                                    })
                                }
                            </div>
                        </div>
                        <div className="lg:h-screen h-auto md:p-16 py-5 px-7 dark:bg-neutral-800 bg-gray-50 w-full rounded-b-3xl bg-no-repeat bg-cover bg-blend-screen dark:bg-blend-multiply bg-opacity-90 cursor-default" style={{backgroundImage:"url(/img/ReserveBackground.jpg)"}} >
                            <h1 className="md:text-6xl text-4xl text-neutral-800 dark:text-neutral-100 transition duration-500" style={{fontFamily:"Boli"}}>Reserve your dining table</h1>
                            <p className="font-semibold md:text-xl text-base md:px-20 md:py-8 py-5 gap-2 grid dark:text-neutral-100 transition duration-500">
                                <span>
                                    -Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste ut amet at illo a! Iure, ipsum? Rem possimus beatae quia est, reiciendis, reprehenderit perspiciatis accusantium optio debitis, libero placeat laboriosam!
                                    Repellat corporis, quia aperiam fugit dignissimos amet eaque! Tempore, impedit tempora hic nemo culpa dicta? Deserunt commodi quo aspernatur eum, odio omnis assumenda magni. Id repellat delectus nemo facilis accusantium?
                                    Quae sint repellendus, veniam sequi expedita harum dolor vero dolorum pariatur magni quia veritatis dolorem odit illo fuga modi, eveniet vitae mollitia? Laudantium distinctio suscipit praesentium. Reprehenderit temporibus non accusantium!
                                </span>
                                <span>
                                    -Laboriosam facilis quia, reiciendis repudiandae debitis dolorum amet ipsum praesentium excepturi pariatur consectetur fugiat architecto repellat et placeat repellendus, ipsam explicabo. Quasi, impedit cupiditate tempore unde obcaecati nemo molestias quo!
                                </span>
                                <span>
                                    -Dignissimos deserunt soluta quidem quo rerum. Molestiae, vitae placeat. A ab quo explicabo animi voluptas libero? Quidem, eaque, commodi quod sequi labore natus adipisci, nostrum alias cupiditate pariatur illo ullam?
                                    Aliquam iusto consequatur officiis similique perferendis! Officiis molestiae eaque, necessitatibus mollitia itaque ad tempora? Exercitationem quos earum recusandae reprehenderit molestias fugit repudiandae tempore sequi quam sit! Corrupti, magnam nesciunt! Animi?
                                </span>
                            </p>
                            <h3 className="md:text-3xl text-lg md:px-32 dark:text-neutral-100 transition duration-500" style={{fontFamily:"perpeta"}}><Link className="hover:text-blue-600 transition duration-500">We welcome you dearly.</Link></h3>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    );
}
 
export default Home;




