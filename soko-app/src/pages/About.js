import React, {useEffect} from 'react'
import NavBar from '../components/nav'
import image1 from '../assets/about-page_1.jpg'
import image2 from '../assets/showing_strawberry.jpg'
import image3 from '../assets/fruit_to_basket.jpg'
import image4 from '../assets/eating_together.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

function About() {
    useEffect(()=>{
        AOS.init({duration:2000});
    }, [])

    return ( 
        <div className=''>

            {/* Nav bar*/}
            <div className='position sticky top-5 z-10'>
                <NavBar/>
            </div>
        
            <div className='flex flex-col gap-6 md:gap-10 lg:gap-16 mt-6 md:mt-10 lg:mt-16 mx-2 md:mx-6 lg:mx-10 text-lg z-0'>

                <section data-aos="fade-up" className=' m-auto md:flex  md:justify-between md:border-2 md:w-full border-l-gray-300 border-white rounded-xl bg-white/20 lg:px-8 lg:py-8 '>
                    <div className=' md:flex md:px-4 md:py-6 md:justify-center flex-col'>
                        <h1 className='font-bold text-2xl md:text-6xl font-roboto'>Welcome to <span className='font-ojuju font-bolder text-green-500 '>SOKO</span></h1>
                        <p className='mt-2 md:pt-6 pl-2 md:pl-16 max-w-xs  md:max-w-md font-monkey md:text-2xl text-left'>Your online farmer's market, accessible from the comfort of your home or workplace</p>
                    </div>
                    
                    {/* Image */}
                    <div className='pr-4'>
                        <img loading='lazy' src={image1} className='w-[700px] max-h-[700px] rounded-lg' alt='little girl holding a basket of eggplants' />

                    </div>
    
                </section>
                
                <section data-aos="fade-up" className='m-auto md:flex  md:justify-between md:border-2 md:w-full border-l-gray-300 border-white rounded-xl bg-white/20 lg:px-8 lg:py-8 '>
                    <div className='md:flex md:px-4 md:py-6 md:justify-center flex-col'>
                        <h1 className='font-bold text-2xl md:text-4xl font-roboto'>Purpose</h1>
                        <p className='mt-2 md:pt-6 pl-2 md:pl-16 max-w-xs  md:max-w-md font-monkey md:text-2xl text-left'>Bridging the gap between farmers and consumers</p>
                    </div>
                    
                    {/* Image */}
                    <div>
                        <img loading='lazy' src={image2} className='w-[700px] max-h-[700px] rounded-lg' alt='Brown haired woman holding up freshly-picked strawberries on a farm' />
                    </div>

                </section>
                

                <section data-aos="fade-up" className='m-auto md:flex  md:justify-between md:border-2 md:w-full border-l-gray-300 border-white rounded-xl bg-white/20 lg:px-8 lg:py-8 '>
                     <div className='md:flex md:px-4 md:py-6 md:justify-center flex-col'>
                        <h1 className='font-bold text-2xl md:text-4xl font-roboto'>Online Grocery Store</h1>
                        <p className='mt-2 md:pt-6 pl-2 md:pl-16 max-w-xs  md:max-w-md font-monkey md:text-2xl text-left'><span className='text-green-500 underline'>Fresh,</span> organic produce, from the farm, directly into your basket</p>

                        <button className='active:scale-[.95] active:duration-75 hover:border-[#2dfe54] hover:text-3xl hover:border-4 hover:scale-[1.03] transition-transform ease-in-out mt-4 lg:mt-16 rounded-3xl border-4 p-2 border-white border-b-green-300 text-white text-lg md:text-2xl bg-green-700 font-bold font-ojuju'>Shop Now</button>
                    </div>
                    
                    {/* Image */}
                    <div>
                        <img loading='lazy' src={image3} className='w-[700px] max-h-[700px] rounded-lg' alt='Girl putting fruits plucked from a tree into a basket' />
                    </div>

                </section>
                


                <section data-aos="fade-up" className='m-auto md:flex  md:justify-between md:border-2 md:w-full border-l-gray-300 border-white rounded-xl bg-white/20 lg:px-8 lg:py-8 '>
                     <div className='md:flex md:px-4 md:py-6 md:justify-center flex-col'>
                        <h1 className='font-bold text-2xl md:text-4xl font-roboto'>Join the <span className='font-ojuju text-green-700'>SOKO</span> vibe</h1>
                        <p className='mt-2 md:pt-6 pl-2 md:pl-16 max-w-xs  md:max-w-md font-monkey md:text-2xl text-left'>
                            Are you new to SOKO?? <br/>
                            Join the community to start living a healthier life today.
                        </p>
                        <a href='sign_up'>
                            <button className='active:scale-[.95] active:duration-75 hover:scale-[1.02] hover:border-[#2dfe54] hover:text-3xl transition-transform ease-in-out mt-4 lg:mt-16 rounded-3xl border-4 p-2 border-white border-b-green-300 text-white text-lg md:text-2xl bg-green-700 font-bold font-ojuju w-full'>Sign Up</button>
                        </a>    
                    </div>
                    
                    {/* Image */}
                    <div>
                        <img loading='lazy' src={image4} className='w-[700px] max-h-[700px] rounded-lg' alt='mother and daughter eating fruits in a field' />
                    </div>

                </section>

            </div>

            <footer className='bg-green-600 h-[60px] mx-2 mt-2 z-10'>
                    <div></div>
            </footer>

        </div>
    );
}

export default About;