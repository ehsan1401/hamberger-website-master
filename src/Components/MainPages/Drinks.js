import { Link, useLocation, useParams } from "react-router-dom";
import Data from '../../DB/DB.json';
import Navigation from "../Nav&Foot/Navigation";
import Footer from '../Nav&Foot/Footer';
import { useState } from "react";

const Food = () => {
    const location = useLocation();
    const {id} = useParams();
    const [imgCounter , setImgCounter] = useState(0);
    const [rateComment , setRateComment] = useState(1);

    let count = -1;
    const handleImage = (e) =>{
        setImgCounter(e.target.id);
    }

    return (
        <>
            {
                Data.map((db)=>
                    db.Drinks.map((food)=>{
                        let RateArray = [];
                        for(let i = 0 ; i<=5 ; i++){
                            if(i<food.Rate){
                                RateArray.push(<i class="fa-solid fa-star text-yellow-400"></i>)
                            }else if(i>food.Rate){
                                RateArray.push(<i class="fa-regular fa-star dark:bg-slate-100 dark:bg-clip-text dark:text-transparent"></i>)
                            }
                        }
                        if(food.name.replace(/\s/g , "-") == id){
                            return(
                                <div className="dark:bg-neutral-800 bg-neutral-400">
                                    <Navigation className="absolute top-0 z-100" />
                                    <div className="bg-cover bg-no-repeat bg-center lg:h-screen h-auto w-auto bg-neutral-600 dark:bg-neutral-500 dark:bg-blend-multiply bg-blend-screen" style={{backgroundImage:`url(${food.Images[0]})`}}>
                                        <div className="w-full lg:h-full h-auto lg:px-8 px-0 pb-16 pt-8">
                                            <div className="bg-neutral-50 dark:bg-neutral-600 w-full lg:h-full h-auto rounded-3xl flex lg:flex-row flex-col items-center lg:px-16 px-4 lg:gap-5">
                                                
                                                <div className="gallery lg:inline hidden rounded-3xl bg-transparent overflow-hidden w-full" style={{width:"450px", height:"450px"}}>
                                                    <a href={food.Images[imgCounter]} target="_blank">
                                                        <img src={food.Images[imgCounter]} className="w-full h-full hover:scale-95 cursor-pointer rounded-3xl transition duration-300" />
                                                    </a>
                                                </div>
                                                <div className="gallery lg:hidden rounded-3xl bg-transparent overflow-hidden flex items-center m-auto" style={{width:"300px", height:"300px"}}>
                                                    <a href={food.Images[imgCounter]} target="_blank">
                                                        <img src={food.Images[imgCounter]} className="w-full h-full hover:scale-95 cursor-pointer rounded-3xl transition duration-300" />
                                                    </a>
                                                </div>
                                                <div className="lg:inline hidden border-solid border-neutral-500 dark:border-neutral-300 border-2 w-32 h-full rounded-3xl py-4 pl-3 " style={{height:"450px"}}>
                                                    <div className="overflow-y-auto h-full w-full pr-2" id="test">
                                                        {
                                                            food.Images.map((im)=>{
                                                                count +=1;
                                                                return(
                                                                    <div className="w-full cursor-pointer h-24 rounded-2xl overflow-hidden my-3 border-2 border-neutral-600 dark:border-neutral-300 border-solid transition duration-300 hover:scale-90">
                                                                        <img src={im} id={count} onClick={handleImage} className="w-full h-full"/>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                                <div className="lg:hidden border-solid overflow-x-scroll border-neutral-500 dark:border-neutral-300 border-2 w-full rounded-3xl py-1 pl-3 " style={{height:"130px"}}>
                                                    <div className="overflow-y-hidden h-full w-full pr-2 gap-5 flex" id="test" style={{width:"1000px"}}>
                                                        {
                                                            food.Images.map((im)=>{
                                                                count +=1;
                                                                return(
                                                                    <div className="w-24 cursor-pointer h-24 rounded-2xl overflow-hidden my-3 border-2 border-neutral-600 dark:border-neutral-300 border-solid transition duration-300 hover:scale-90">
                                                                        <img src={im} id={count} onClick={handleImage} className="w-full h-full"/>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                                
                                                
                                                
                                                <div className="lg:w-1/2 w-auto lg:h-full h-auto overflow-y-hidden">
                                                    
                                                    
                                                    
                                                    
                                                    <div className=" w-full lg:h-full h-auto flex lg:mb-0 lg:pt-0 mb-16 pt-5" style={{height:"120px"}}>
                                                        <div className="w-2/3 h-full text-5xl md:text-6xl sm:text-5xl lg:text-6xl lg:p-0 flex justify-center items-center text-neutral-900 dark:text-neutral-100" style={{fontFamily:"Monotype"}}>{food.name}</div>
                                                        <div className="w-1/3 lg:h-auto h-40 gap-3 lg:gap-0 flex lg:grid lg:py-4 ">
                                                            <div className="links grid lg:flex lg:gap-3 lg:justify-center h-full lg:mt-5">
                                                                <p title="Visited" className="w-12 h-12 border-2 rounded-full border-black dark:border-neutral-300 border-solid dark:text-neutral-100 flex flex-col p-1 select-none cursor-default">
                                                                    <i class="fa-solid fa-eye scale-125 pt-1 flex justify-center items-center"></i>
                                                                    <p className="text-xs font-bold flex justify-center items-center">{food.seen}</p>
                                                                </p>
                                                                <Link title="Bookmark" className="w-12 h-12 border-2 rounded-full border-black dark:border-neutral-300 border-solid dark:text-neutral-100 flex flex-col p-3 hover:bg-neutral-100 dark:hover:bg-neutral-500 transition duration-200">
                                                                    <i class="fa-solid fa-bookmark scale-125 pt-1 flex justify-center items-center"></i>
                                                                </Link>
                                                                <Link title="Share" className="w-12 h-12 border-2 rounded-full border-black dark:border-neutral-300 border-solid dark:text-neutral-100 flex flex-col hover:bg-neutral-100 dark:hover:bg-neutral-500 transition duration-200">
                                                                    <i class="fa-solid fa-share-nodes h-full scale-150 flex justify-center items-center"></i>
                                                                </Link>
                                                                
                                                                

                                                            </div>
                                                            <div className="stars grid lg:flex justify-center" title={`${food.Rate}/5`}>
                                                                {
                                                                    RateArray.map((rat)=>{
                                                                        return(
                                                                            <>
                                                                                <p>
                                                                                    {rat}
                                                                                </p>
                                                                            </>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div>
                                                        <div className="w-full h-auto lg:flex grid">
                                                            <div className="lg:w-2/3 w-auto h-full p-2 dark:text-neutral-100">
                                                                <div className="border-2 border-neutral-900 dark:border-neutral-300 border-dashed rounded-3xl lg:h-96 h-auto p-4 pr-1">
                                                                    <div className="w-full h-full overflow-y-auto" id="test">
                                                                            <h1 className="font-bold text-xl pb-2">Recipe</h1>
                                                                        <p className="px-2">
                                                                            {food.recipe}
                                                                        </p>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="lg:w-1/3 w-full lg:h-full h-auto">
                                                                <div className="w-full h-full p-2">
                                                                    <div className="border-2 border-neutral-900 dark:border-neutral-300 border-dashed rounded-3xl lg:h-96 h-auto py-4 px-1">
                                                                        <div className="w-full h-full overflow-y-auto dark:text-neutral-100" id="test">
                                                                            <h1 className="font-bold text-xl pt-2 pb-5 text-center">Ingredients</h1>
                                                                            <div className="gap-2 grid">
                                                                                {
                                                                                    food.ingredientsItems.map((ingItem)=>
                                                                                        Data.map((db)=>
                                                                                            db.Ingredients.map((ing)=>{
                                                                                                if(ingItem === ing.name){
                                                                                                    return(
                                                                                                        <Link className="hover:bg-neutral-100 dark:hover:bg-neutral-500 rounded-xl">
                                                                                                            <div className="w-full h-16 px-2 flex">
                                                                                                                <div className="h-full w-16 overflow-hidden rounded-full">
                                                                                                                    <img src={ing.Images} alt={ing.name} className="h-full w-full"/>
                                                                                                                </div>
                                                                                                                <p className="flex items-center px-2 font-semibold">{ing.name}</p>
                                                                                                            </div>
                                                                                                        </Link>
                                                                                                    )
                                                                                                }
                                                                                            })
                                                                                        )
                                                                                    )
                                                                                }
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="bg-neutral-100 dark:bg-neutral-500 w-auto mx-2 h-10 rounded-2xl px-5 flex justify-center items-center gap-4">
                                                                <Link className="bg-hamberger-900 hover:bg-lime-600 hover:text-neutral-200 py-1 px-5 rounded-2xl text-neutral-700 transition duration-500 font-bold">Order Now</Link>
                                                                <Link className="bg-hamberger-500 hover:bg-lime-600 hover:text-neutral-800 py-1 px-5 rounded-2xl text-neutral-100 transition duration-500 font-bold">Add to Cart</Link>
                                                                <p className="pl-5 uppercase text-hamberger-200 dark:text-neutral-200 dark:hover:text-lime-300 hover:text-lime-600 transition duration-300 cursor-default">Price : {food.Price}{food.Symbol}</p>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className=" xl:h-screen md:h-96 w-full bg-neutral-50 dark:bg-neutral-700 transition duration-300 xl:p-8 p-2">
                                        <div className="bg-neutral-300 dark:bg-neutral-800 w-full h-full rounded-3xl xl:p-5 p-3 transition duration-300 flex flex-col">
                                            <h1 className="px-5 font-bold text-3xl text-neutral-800 dark:text-neutral-100 transition duration-300">
                                                Comments
                                            </h1>
                                            <div className="w-full h-full xl:flex md:grid xl:p-10 p-3 gap-4">
                                                <div className="xl:w-1/4 md:w-full bg-neutral-200 dark:bg-neutral-700 transition duration-300 rounded-2xl py-8 px-2 h-full">
                                                    <form className="px-3 grid gap-3">
                                                        <h1 className="text-2xl font-bold px-3 flex justify-center dark:text-neutral-100 transition duration-300">Write your opinion</h1>
                                                        <input type="text" name="UserName" id="UserName" placeholder="You're User Name" className="w-full rounded-xl px-3 py-1 focus:outline-none text-neutral-700 dark:text-neutral-200 bg-white dark:bg-neutral-900 transition duration-300" style={{fontFamily:"Arial"}} />
                                                        <input type="email" name="email" id="email" placeholder="You're Email" className="w-full rounded-xl px-3 py-1 focus:outline-none text-neutral-700 dark:text-neutral-200 bg-white dark:bg-neutral-900 transition duration-300" style={{fontFamily:"Arial"}}  />
                                                        <textarea name="Opinion" id="Opinion" cols="5" rows="10" placeholder="You're Opinion" className="focus:outline-none p-3 rounded-2xl max-h-64 text-sm text-neutral-700 dark:text-neutral-200 dark:bg-neutral-900 transition duration-300" style={{fontFamily:"Arial"}} ></textarea>
                                                        <div className="flex justify-center">
                                                            <div className="stars px-3 mt-1 flex gap-1">
                                                                {
                                                                    rateComment >= 5 ? (<i class="fa-solid fa-star text-yellow-400 cursor-pointer" onClick={()=>{setRateComment(5)}}></i>) : (<i class="fa-regular fa-star dark:bg-slate-100 dark:bg-clip-text dark:text-transparent cursor-pointer" onClick={()=>{setRateComment(5)}}></i>)
                                                                }
                                                                {
                                                                    rateComment >= 4 ? (<i class="fa-solid fa-star text-yellow-400 cursor-pointer" onClick={()=>{setRateComment(4)}}></i>) : (<i class="fa-regular fa-star dark:bg-slate-100 dark:bg-clip-text dark:text-transparent cursor-pointer" onClick={()=>{setRateComment(4)}}></i>)
                                                                }
                                                                {
                                                                    rateComment >= 3 ? (<i class="fa-solid fa-star text-yellow-400 cursor-pointer" onClick={()=>{setRateComment(3)}}></i>) : (<i class="fa-regular fa-star dark:bg-slate-100 dark:bg-clip-text dark:text-transparent cursor-pointer" onClick={()=>{setRateComment(3)}}></i>)
                                                                }
                                                                {
                                                                    rateComment >= 2 ? (<i class="fa-solid fa-star text-yellow-400 cursor-pointer" onClick={()=>{setRateComment(2)}}></i>) : (<i class="fa-regular fa-star dark:bg-slate-100 dark:bg-clip-text dark:text-transparent cursor-pointer" onClick={()=>{setRateComment(2)}}></i>)
                                                                }
                                                                <i class="fa-solid fa-star text-yellow-400" onClick={()=>{setRateComment(1)}}></i>
                                                            </div>
                                                            <p className="px-3 mb-2 dark:text-neutral-100 transition duration-300" style={{fontFamily:"Arial"}}>{rateComment} / 5</p>
                                                        </div>
                                                        <input type="submit" name="submit" id="submit" value="Confirm" className="bg-red-600 px-5 py-2 rounded-2xl font-bold text-white hover:bg-lime-500 transition duration-300 cursor-pointer" />
                                                        

                                                    </form>
                                                </div>
                                                <div className="xl:w-3/4 md:w-full bg-neutral-200 dark:bg-neutral-700 transition duration-300 h-full rounded-2xl xl:px-8 py-10 overflow-y-scroll">
                                                    {
                                                        Data.map((db)=>
                                                            db.Comments.map((comment)=>
                                                                db.Users.map((user)=>{
                                                                    if(comment.UserName == user.UserName){
                                                                        if(food.name == comment.Food){
                                                                            let RateComment = [];
                                                                            for(let i = 0 ; i<=5 ; i++){
                                                                                if(i<comment.Rate){
                                                                                    RateComment.push(<i class="fa-solid fa-star text-yellow-400"></i>)
                                                                                }else if(i>comment.Rate){
                                                                                    RateComment.push(<i class="fa-regular fa-star dark:bg-slate-100 dark:bg-clip-text dark:text-transparent"></i>)
                                                                                }
                                                                            }
                                                                            return(
                                                                                <div className="w-full h-auto flex p-3 rounded-3xl">
                                                                                    {/* <p className="w-2/12 h-16 bg-contain bg-no-repeat bg-center rounded-full" style={{backgroundImage:`url(${user.UserImageAddress})`}}></p> */}
                                                                                    <img src={user.UserImageAddress} className="w-16 h-16 rounded-full"/>
                                                                                    
                                                                                    <div className="bg-neutral-300 w-full dark:bg-neutral-600 transition duration-300  rounded-2xl p-3 mx-2">
                                                                                        <div className="w-auto h-auto  mx-3">
                                                                                            <div className="pb-2">
                                                                                                <Link className="font-bold text-xl hover:underline text-neutral-700 dark:text-neutral-200 transition duration-300 ">{user.Name}</Link>
                                                                                                <div className="text-xs inline float-right pt-2 dark:text-slate-200 transition duration-300 ">
                                                                                                    <p>
                                                                                                        <span className="px-3">                                                                                                            {
                                                                                                                RateComment.map((rateCom)=>{
                                                                                                                    return(
                                                                                                                        <span className="">
                                                                                                                            {rateCom}
                                                                                                                        </span>
                                                                                                                    )
                                                                                                                })
                                                                                                            }</span> <span>{comment.DateTime.Date}</span>  <span>{comment.DateTime.time}</span> 
                                                                                                    </p>
                                                                                                    

                                                                                                </div>
                                                                                            </div>
                                                                                            <p className="pl-2 dark:text-slate-200 transition duration-300 ">
                                                                                                {
                                                                                                    comment.CommentText
                                                                                                }
                                                                                            </p>
                                                                                            {comment.Replay &&  <div className="bg-neutral-200 dark:bg-neutral-700 rounded-2xl p-5 my-5 w-full h-auto flex transition duration-300">
                                                                                                <img src="/img/UnkownUser.png" className="w-10 opacity-50 h-10 rounded-full border-2 border-solid border-black dark:bg-neutral-300 dark:border-neutral-200 transition duration-300" />
                                                                                                
                                                                                                <div className="grid w-full pl-3">
                                                                                                    <div className="">
                                                                                                        <p className="font-bold text-2xl inline text-neutral-700 dark:text-neutral-200 transition duration-300">{comment.Replay.UserName}</p>
                                                                                                        <p className="text-right text-xs inline float-right py-2 dark:text-neutral-200 transition duration-300"><span>{comment.Replay.ReplayDateTime.Date}</span> , <span>{comment.Replay.ReplayDateTime.time}</span></p>
                                                                                                    </div>
                                                                                                    <p className="py-2 dark:text-neutral-200 transition duration-300">
                                                                                                        {comment.Replay.Text}
                                                                                                    </p>
                                                                                                </div>

                                                                                            </div>}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            )
                                                                        }
                                                                 
                                                                     
                                                                        

                                                                    }
                                                                })

                                                            )
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                )
            }
            <Footer />
        </>
    );
}
 
export default Food;