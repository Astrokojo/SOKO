import cart from '../assets/shopping-cart.svg';
import search from '../assets/search-icon.svg'

export default function ShopNav() {
    return ( 
        <div className='mx-4'>

            {/* Main navbar */}
            <nav className="flex items-center justify-between w-full bg-white/100 md:rounded-full border-2 border-gray-200 border-b-green-400 px-2 md:px-6 py-2">
                
                {/* SOKO SYMBOL */}
                <div className='items-center'>
                    <h1 className="text-3xl sm:text-5xl font-bold"> 
                        <a href="/about" className="text-gray-600 no-underline sm:hover font-[ojuju]"> SOKO </a> 
                    </h1>
                </div>


                <div className='flex w-[30%] border-2 border-green-700 rounded-3xl items-center px-4'>
                    <img src={search} alt='search icon' className='w-[20px] h-[80%]'></img>
                    <input type='text' className='px-2 py-2 w-full focus:outline-none border-none mx-6' placeholder='tomatoes'></input>
                </div>

                <div className='flex items-center gap-8'>

                    {/* Shopping cart svg */}
                    <div>
                        <img src={cart} alt='Shopping cart svg' className='w-[50px] h-[50px]'></img>
                    </div>

                    <div className='font-medium font-roboto text-2xl'>
                        <ul className='flex gap-8 list-none'>
                            <li className='active:scale-[.95] active:duration-75 transition-transform ease-in-out  md:hover:scale-[1.1]'><a href='/contact'>Sell</a></li>
                            <li className='active:scale-[.95] active:duration-75 transition-transform ease-in-out  md:hover:scale-[1.1]'><a href='/about'>About</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
     );
}