import React, {useEffect} from 'react'
import NavBar from '../components/nav'
import image1 from '../assets/about-page_1.jpg'
import image2 from '../assets/showing_strawberry.jpg'
import image3 from '../assets/fruit_to_basket.jpg'
import image4 from '../assets/eating_together.jpg'
import noel from '../assets/nii-profile.jpeg'
import kaos from '../assets/kaos.jpeg'
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


            {/* Info sections */}
            <div className='flex flex-col gap-6 md:gap-10 lg:gap-16 mt-6 md:mt-10 lg:mt-16 mx-2 md:mx-6 lg:mx-10 text-lg z-0'>

                {/* Welcome to Soko */}

                <section data-aos="fade-up" className=' h-[80vh] m-auto md:flex  md:justify-between md:border-2 md:w-full border-l-gray-300 border-white rounded-xl bg-white/20 lg:px-8 lg:py-8 '>
                    <div className=' md:flex md:px-4 md:py-6 md:justify-center flex-col'>
                        <h1 className='font-bold text-2xl md:text-6xl font-roboto'>Welcome to <span className='font-ojuju font-bolder text-green-500 '>SOKO</span></h1>
                        <p className='mt-2 md:pt-6 pl-2 md:pl-16 max-w-xs  md:max-w-md font-monkey md:text-2xl text-left'>Your online farmers market, accessible from the comfort of your home or workplace</p>
                    </div>
                    
                    {/* Image */}
                    <div className='pr-4 max-w-[700px] max-h-[700px]'>
                        <img loading='eager' src={image1} className='w-[700px] max-h-[700px] rounded-lg' alt='little girl holding a basket of eggplants' />

                    </div>
    
                </section>

                {/* Purpose Section */}
                
                <section data-aos="fade-up" className='m-auto md:flex h-[80vh]  md:justify-between md:border-2 md:w-full border-l-gray-300 border-white rounded-xl bg-white/20 lg:px-8 lg:py-8 '>
                    {/* Image */}
                    <div className='self-center'>
                        <img loading='lazy' src={image2} className='w-[700px] max-h-[700px] rounded-lg' alt='Brown haired woman holding up freshly-picked strawberries on a farm' />
                    </div>
                    <div className='md:flex md:px-4 md:py-6 md:justify-center flex-col'>
                        <h1 className='font-bold text-2xl md:text-4xl font-roboto'>Purpose</h1>
                        <p className='mt-2 md:pt-6 pl-2 md:pl-16 max-w-xs  md:max-w-md font-monkey md:text-2xl text-left'>
                            Our main goal is to bridge the gap between farmers and consumers as well as improve the general well-being of our members by making health and fresh products readily available by the click of a few buttons
                        </p>
                    </div>
                    

                </section>
                

                {/* Online Grocery Store heading and infor */}

                <section data-aos="fade-up" className='m-auto md:flex  md:justify-between md:border-2 md:w-full border-l-gray-300 border-white rounded-xl bg-white/20 lg:px-8 lg:py-8 '>
                     <div className='md:flex md:px-4 md:py-6 md:justify-center flex-col'>
                        <h1 className='font-bold text-2xl md:text-4xl font-roboto'>Online Grocery Store</h1>
                        <p className='mt-2 md:pt-6 pl-2 md:pl-16 max-w-xs  md:max-w-md font-monkey md:text-2xl text-left'><span className='text-green-500 underline'>Fresh,</span> organic produce, from the farm, directly into your basket, at any time, and anywhere. Wanna give it a whirl?? Then👇🏽👇🏽</p>

                        <button className='active:scale-[.95] active:duration-75 hover:border-[#2dfe54] hover:text-3xl hover:border-4 hover:scale-[1.03] transition-transform ease-in-out mt-4 lg:mt-16 rounded-3xl border-4 p-2 border-white border-b-green-300 text-white text-lg md:text-2xl bg-green-700 font-bold font-ojuju animate-pulse'>Shop Now</button>
                    </div>
                    
                    {/* Image */}
                    <div>
                        <img loading='lazy' src={image3} className='w-[700px] max-h-[700px] rounded-lg' alt='Girl putting fruits plucked from a tree into a basket' />
                    </div>

                </section>
                
                {/* Join the Community Section */}

                <section data-aos="fade-up" className=' h-[60vh] m-auto md:flex  md:justify-between md:border-2 md:w-full border-l-gray-300 border-white rounded-xl bg-white/20 lg:px-8 lg:py-8 '>
                    {/* Image */}
                    <div>
                        <img loading='lazy' src={image4} className='w-[700px] max-h-[700px] rounded-lg' alt='mother and daughter eating fruits in a field' />
                    </div>
                     <div className='md:flex md:px-4 md:py-6 md:justify-center flex-col'>
                        <h1 className='font-bold text-2xl md:text-4xl font-roboto'>Join the <span className='font-ojuju text-green-700'>SOKO</span> vibe</h1>
                        <p className='mt-2 md:pt-6 pl-2 md:pl-16 max-w-xs  md:max-w-md font-monkey md:text-2xl text-left'>
                            Are you new to SOKO?? <br/>
                            Join the community to start living a healthier life today.
                        </p>
                        <a href='sign_up'>
                            <button className='relative active:scale-[.95] active:duration-75 hover:scale-[1.02] hover:border-[#2dfe54] hover:text-3xl transition-transform ease-in-out mt-4 lg:mt-16 rounded-2xl border-4 p-2 border-white border-b-green-300 text-white text-lg md:text-2xl bg-green-700 font-bold font-ojuju w-full'>Sign Up
                                <div className='absolute -top-1 -left-1 w-[15px] h-[15px] rounded-full bg-green-800 animate-ping'></div>
                            </button>
                        </a>    
                    </div>
                    

                </section>


                {/* Team info section */}

                <section className='md:mt-12  md:mb-12 mx-auto'>
                    {/* Team soko heading */}
                    <div className='flex justify-center'>
                        <h1 className='font-monkey font-bold text-5xl pb-2 border-b-4 border-green-600 '>✨Team Soko🍃</h1>
                    </div>

                    {/* Person grid boxes main container*/}
                    <div className='grid grid-cols-3 md:gap-24 md:mt-12 font-roboto text-white font-semibold'>

                        {/* Individual boxes */}

                        {/* Nii */}
                        <div data-aos="fade-up" className='bg-green-700 backdrop-blur-lg px-2 py-4 rounded-lg min-w-[200px] min-h-[600px] '>

                            <div className='flex flex-col max-w-[380px] p-2 gap-8 justify-between items-center bg-white/10 backdrop-blur-lg rounded-lg h-full'>

                                <div className='flex justify-between gap-12 py-4 px-6 rounded-lg border-2 border-black w-full'>
                                    <div className='w-[120px] h-[120px]  rounded-full border-2 border-gray-500 bg-white bg-cover bg-center' style={{ backgroundImage: `url(${noel})` }}></div> 
                                    <h1 className='font-bold text-4xl self-center font-ojuju'>NOEL</h1>
                                </div>

                                {/*Role*/}
                                <div className='flex justify-between items-center py-4 px-6 bg-white rounded-lg w-full hover:scale-[1.02] hover:border-gray-300 transition-transform ease-in-out'>
                                    <h1 className='font-roboto text-3xl font-bold text-green-500 '>Role:</h1>
                                    <ul className='font-monkey text-xl text-gray-700 self-end'>
                                        <li>Front-end Dev</li>
                                        <li>Founder</li>
                                    </ul>
                                </div>
                                {/*Socials (Github Email LinkedIn)*/}
                                <div className='flex justify-between gap-12 py-4 px-6 bg-white rounded-lg w-full hover:scale-[1.02] hover:border-gray-300 transition-transform ease-in-out'>
                                    <h1 className='font-roboto text-3xl font-bold text-green-500'>Socials:</h1>
                                    <ul className='font-monkey text-xl font-semibold text-gray-700 self-end'>
                                        <li className='hover:text-yellow-600' ><a href='https://github.com/Nii-101/' target='blank'>Github</a></li>
                                        <li className='hover:text-yellow-600'><a href='https://www.linkedin.com/in/n0el-codes'>LinkedIn</a></li>
                                        <li className='hover:text-yellow-600'><a href='mailto:noelamptey101@gmail.com' target='blank'>Email</a></li>
                                    </ul>
                                </div>
                                <div className='flex justify-between gap-12 py-4 px-6 bg-white rounded-lg w-full hover:scale-[1.02] hover:border-gray-300 transition-transform ease-in-out'>
                                    <h1 className='font-roboto text-3xl font-bold text-green-500'>About:</h1>
                                    <p className='font-monkey text-sm max-w-xs font-semibold text-gray-700 self-end'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* KAOS */}
                        <div data-aos="fade-up" className='bg-green-700 backdrop-blur-lg px-2 py-4 rounded-lg min-w-[200px] min-h-[600px]'>

                            <div className='flex flex-col max-w-[380px] gap-8 p-2 justify-between items-center bg-white/10 backdrop-blur-lg rounded-lg h-full'>

                                <div className='flex justify-between gap-12 py-4 px-6 rounded-lg border-2 border-black w-full'>
                                    <div className='w-[120px] h-[120px]  rounded-full border-2 border-gray-500 bg-cover bg-center' style={{ backgroundImage: `url(${kaos})` }}></div> 
                                    <h1 className='font-bold text-4xl self-center font-ojuju'>KAOS</h1>
                                </div>

                                {/*Role*/}
                                <div className='cursor-normal flex justify-between items-center py-4 px-6 bg-white rounded-lg w-full hover:scale-[1.02] hover:border-gray-300 transition-transform ease-in-out'>
                                    <h1 className='font-roboto text-3xl font-bold text-green-500 '>Role:</h1>
                                    <ul className='font-monkey text-xl text-gray-700 self-end'>
                                        <li>Backend Dev</li>
                                        <li>Technical Lead</li>
                                    </ul>
                                </div>
                                {/*Socials (Github Email LinkedIn)*/}
                                <div className='flex justify-between gap-12 py-4 px-6 bg-white rounded-lg w-full hover:scale-[1.02] hover:border-gray-300 transition-transform ease-in-out'>
                                    <h1 className='font-roboto text-3xl font-bold text-green-500'>Socials:</h1>
                                    <ul className='font-monkey text-xl font-semibold text-gray-700 self-end'>
                                        <li className='hover:text-yellow-600'><a href='https://github.com/Astrokojo' target='blank' >Github</a></li>
                                        <li className='hover:text-yellow-600'><a href='https://www.linkedin.com/in/kaosei-sarfo' target='blank'>LinkedIn</a></li>
                                        <li className='hover:text-yellow-600'><a href='mailto:astrokojo@gmail.com' target='blank'>Email</a></li>
                                    </ul>
                                </div>
                                <div className='cursor-normal flex justify-between gap-12 py-4 px-6 bg-white rounded-lg w-full hover:scale-[1.02] hover:border-gray-300 transition-transform ease-in-out'>
                                    <h1 className='font-roboto text-3xl font-bold text-green-500'>About:</h1>
                                    <p className='font-monkey text-sm max-w-xs font-semibold text-gray-700 self-end'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Abdullahi */}
                        <div  data-aos='fade-up' className='bg-green-700 backdrop-blur-lg px-2 py-4 rounded-lg min-w-[200px] min-h-[600px] '>

                            <div className='flex flex-col max-w-[380px] gap-8 p-2 justify-between items-center bg-white/10 backdrop-blur-lg rounded-lg h-full'>

                                <div className='flex justify-between gap-12 py-4 px-6 rounded-lg border-2 border-black w-full'>
                                    <div className='w-[120px] h-[120px]  rounded-full border-2 border-gray-500 bg-white'></div> 
                                    <h1 className='font-bold text-4xl self-center font-ojuju'>Abdullah</h1>
                                </div>

                                {/*Role*/}
                                <div className='flex justify-between items-center py-4 px-6 bg-white rounded-lg w-full hover:scale-[1.02] hover:border-gray-300 transition-transform ease-in-out'>
                                    <h1 className='cursor-normal font-roboto text-3xl font-bold text-green-500 '>Role:</h1>
                                    <ul className='font-monkey text-xl text-gray-700 self-end'>
                                        <li>DevOps Engineer</li>
                                        <li>Project Manager</li>
                                    </ul>
                                </div>
                                {/*Socials (Github Email LinkedIn)*/}
                                <div className='flex justify-between gap-12 py-4 px-6 bg-white rounded-lg w-full hover:scale-[1.02] hover:border-gray-300 transition-transform ease-in-out'>
                                    <h1 className='font-roboto text-3xl font-bold text-green-500'>Socials:</h1>
                                    <ul className='font-monkey text-xl font-semibold text-gray-700 self-end'>
                                        <li className='hover:text-yellow-600' ><a href='https://github.com/AbdullahGbale/' target='blank'>Github</a></li>
                                        <li className='hover:text-yellow-600'><a href='https://www.linkedin.com/in/abdullah-yunusa-3a9a0810a/' target='blank'>LinkedIn</a></li>
                                        <li className='hover:text-yellow-600'><a href='mailto:bigimarniac@gmail.com' >Email</a></li>
                                    </ul>
                                </div>
                                <div className='flex justify-between gap-12 py-4 px-6 bg-white rounded-lg w-full hover:scale-[1.02] hover:border-gray-300 transition-transform ease-in-out'>
                                    <h1 className='font-roboto text-3xl font-bold text-green-500'>About:</h1>
                                    <p  className='font-monkey text-sm max-w-xs font-semibold text-gray-700 self-end'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                        </div>

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