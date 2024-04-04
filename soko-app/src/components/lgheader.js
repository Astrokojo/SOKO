

export default function Headerlg() {
    return ( 
        <div>
             <div className='absolute top-4 right-4'>
                        <ul className="flex gap-2 sm:gap-8 sm:text-2xl font-medium font-roboto list-none pb-4">
                            <li className="md:hover:scale-[1.1]  transition-transform ease-in"><a href="/home">Shop</a></li>
                            <li className="md:hover:scale-[1.1]  transition-transform ease-in"><a href="/about">About</a></li>
                            <li className=" hidden md:flex md:hover:scale-[1.1]  transition-transform ease-in"><a href="./sign_up">Sign Up</a></li>
                        </ul>

                    </div>
        </div>
     );
}