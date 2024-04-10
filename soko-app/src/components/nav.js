import Headerlg from "./lgheader";


export default function NavBar() {
    return ( 
        <div>
            <nav className='position sticky top-2 left-0 right-0 md:mx-4 z-10'>
                <div className='hidden md:flex items-center pb-2 pl-2 bg-white/100 md:rounded-full border-2 border-gray-200 border-b-green-400'>
                    <h1 className="text-3xl sm:text-5xl font-bold"> 
                        <a href="/about" className="text-gray-600 no-underline sm:hover font-[ojuju]"> SOKO </a> 
                    </h1>
                    <Headerlg/>
                </div>  
            </nav>
        </div>
     );
}
