
import Headerlg from "./lgheader"

export default function BOUNCE() {
    return ( 
        <div className='hidden relative lg:flex lg:w-1/2 bg-white h-full flex justify-center items-center'>
                    
            <Headerlg/>

            <div className='w-60 h-60 rounded-full bg-gradient-to-tr from-[#344E41] to-[#588157] animate-bounce'/>
            <div className='absolute bottom-0 w-full h-1/2 bg-white/10 backdrop-blur-lg'/>
        </div>
    );
}
