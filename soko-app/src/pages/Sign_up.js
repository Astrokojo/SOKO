import SPIN from "../components/spin";
import UpForm from "../components/up-form";

export default function Up () {
    return ( 
        <div className="relative w-full h-screen max-w-screen-3xl">

            <div className="flex bg-['in-form'] w-full h-screen justify-center items-center">
                <div className='absolute top-4 left-4'>
                    <h1 className="text-3xl sm:text-5xl font-bold"> 
                        <a href="/about" className="text-gray-200 no-underline sm:hover font-[ojuju]"> SOKO </a> 
                    </h1>
                </div>
                
                
                {/* Left side(Form) */}
                <div className='lg:w-1/2 w-full h-full bg-gradient-to-bl from-[#588157] to-[#3A5A40] flex items-center justify-center'>
                    <UpForm/>
                </div>


                {/* Right side (Animation) */}
                <SPIN/>

            </div>
        </div>
     );
}
