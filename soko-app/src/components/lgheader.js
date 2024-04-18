
export default function Headerlg() {
    return ( 
        <div>
             <div className='absolute top-4 right-4'>
                        <ul className="flex gap-2 sm:gap-8 sm:text-2xl font-medium font-roboto list-none pb-4">
                            <li className=" active:scale-[.95] active:duration-75 transition-transform ease-in-out  md:hover:scale-[1.1]"><a href="/home">Shop</a></li>
                            <li className=" active:scale-[.95] active:duration-75 transition-transform ease-in-out  md:hover:scale-[1.1]"><a href="/about">About</a></li>
                            <li className=" hidden active:scale-[.95] active:duration-75 transition-transform ease-in-out  md:flex md:hover:scale-[1.1]"><a href="/about#team-section">Contact</a></li>
                        </ul>

                    </div>
        </div>
     );
}