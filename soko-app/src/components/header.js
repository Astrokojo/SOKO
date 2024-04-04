



export default function Header() {
    return ( 
        <div>
            <nav className="fixed md:sticky top-0 left-0 right-0 w-full h-[5%] md:h-[10%] bg-gradient-to-tr from-[#588157] to-[#3A5A40] pt-4 px-4 flex justify-between items-center">
                <div className="pb-4">
                    <h1 className="text-3xl sm:text-6xl font-bold"> 
                        <a href="Home" className="text-gray-200 no-underline sm:hover font-[ojuju] cursor-default"> SOKO </a> 
                    </h1>
                </div>
                <ul className="flex gap-2 sm:gap-6 sm:text-2xl font-medium list-none pb-4">
                    <li className="md:hover:scale-[1.1]  transition-transform ease-in"><a href="/home">Home</a></li>
                    <li className="md:hover:scale-[1.1]  transition-transform ease-in"><a href="/about">About</a></li>
                    <li className=" hidden md:flex md:hover:scale-[1.1]  transition-transform ease-in"><a href="./sign_in">Sign In</a></li>
                </ul>
            </nav>
        </div>
    );
}
