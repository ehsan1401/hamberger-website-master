import React from 'react'
import { useParams } from 'react-router-dom'
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
                                                <div className='flex mt-5 bg-neutral-200 bg-opacity-50 text-center p-3 rounded-2xl w-80 mx-5 outline-dashed'>
                                                    <h1 className='text-3xl px-10 pt-1 dark:text-neutral-600' style={{fontFamily:"segoepr"}}>Price</h1>
                                                    <p className='w-full py-1 text-3xl text-lime-800 hover:text-lime-600 transition duration-300 cursor-default' style={{fontFamily:"Arial"}}>
                                                        <span>{pizza.Price}</span>
                                                        <span>{pizza.Symbol}</span>
                                                    </p>
                                                </div>
                                                <p className='h-14'>
                                                
                                                </p>

                                        </div>
                                        
                                    </div>
                                </div>
 
                            </div>
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