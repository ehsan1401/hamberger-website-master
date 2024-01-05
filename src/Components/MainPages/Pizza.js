import React from 'react'
import { useParams , Link } from 'react-router-dom'
import DB from './../../DB/DB.json'
import Navigation from "../Nav&Foot/Navigation";
import Footer from "../Nav&Foot/Footer";

function Pizza() {
    
    const {name} = useParams()
    const ImageBackground = '/img/PizzaBackground.jpg';

    
  return (
    <>
        
        {
            DB.map((data)=>
                data.Pizza.map((pizza)=>{
                    if(pizza.name.replace(/\s/g , "-") == name){
                        return(
                            <>
                            
                            <div className='w-full md:h-screen h-auto bg-cover bg-no-repeat bg-center dark:bg-blend-multiply dark:bg-neutral-500' style={{backgroundImage:`url(${ImageBackground})`}}>
                                <Navigation/>
                                <img className='relative top-6 md:left-28 drop-shadow-[-4px_5px_10px_rgba(0,0,0,0.9)] ' src={pizza.Images[0]} alt={pizza.name} style={{width:"550px"}} />

                                <div className='md:absolute md:h-screen top-0 right-0 w-full md:overflow-y-scroll md:overflow-x-hidden'>
                                    <div className='xl:relative h-full xl:float-right px-10 text-neutral-700 dark:text-neutral-200' style={{width:"650px"}}>
                                        <div className='xl:relative top-28 my-5'>
                                                <h1 className='text-7xl underline ' style={{fontFamily:"segoepr"}}>{pizza.name}</h1>
                                                <h1 className='mt-3 text-4xl pt-10' style={{fontFamily:"segoepr"}}>ingredients</h1>
                                                <p className='w-96 py-4 px-3' style={{fontFamily:"Arial"}}>
                                                    {pizza.ingredients}
                                                </p>
                                                <h1 className='mt-3 text-4xl pb-3' style={{fontFamily:"segoepr"}}>Recipe</h1>
                                                <p className='w-96 px-3' style={{fontFamily:"Arial"}}>
                                                    {pizza.recipe}
                                                </p>
                                                <Link to={"/"} className='flex mt-5 bg-neutral-200 bg-opacity-50 text-center p-3 rounded-2xl w-80 mx-5 outline-dashed transition hover:scale-110'>
                                                    <h1 className='text-3xl px-10 pt-1 dark:text-neutral-950' style={{fontFamily:"segoepr"}}>Price</h1>
                                                    <p className='w-full py-1 text-3xl text-lime-800 hover:text-lime-600 transition duration-300 cursor-pointer' style={{fontFamily:"Arial"}}>
                                                        <span className='dark:text-lime-100'>{pizza.Price}</span>
                                                        <span className='dark:text-lime-100'>{pizza.Symbol}</span>
                                                    </p>
                                                </Link>
                                                <p className='h-14'>
                                                
                                                </p>

                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className='h-auto w-full'>
                                <h1 className='pl-10 pt-5 font-bold text-3xl'>Maybe you like it</h1>
                                <div id='More' className='w-full h-96 rounded-md flex gap-5 px-10 pb-8 pt-5'>
                                     {/* <p className='text-white text-7xl text-center'>{(Math.floor(Math.random() * pizzaCounter))+1}</p> */}
                                    {
                                        data.Pizza.slice(0, 5).map((item)=>{
                                            return(
                                                <Link to={"/Pizza/" + item.name.replace(/\s/g , "-")} className='Item relative w-auto bg-cover bg-no-repeat bg-blend-multiply h-full bg-neutral-200 grow overflow-hidden rounded-2xl' id='ScroolCard' style={{backgroundImage:`url(${item.Images[1]})`}}>
                                                    <div className='bg-neutral-950 bg-opacity-60 p-5 text-neutral-100 h-full w-full'id='ScroolItem'>
                                                        <h1 className='text-2xl pb-3'>{item.name}</h1>
                                                        <p>Ingredients:</p>
                                                        <p className='text-sm pl-3'>{item.ingredients}</p>
                                                        <p className='text-3xl text-center font-mono py-3'><span>{item.Price }{item.Symbol}</span></p>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                            
                            </>
                        )
                    }
                })
            )
        }
        <Footer/>
    </>
  )
}

export default Pizza