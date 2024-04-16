import ShopNav from "../components/shop_nav";

function Home() {
    return ( 
        <div>

            {/* Nav bar*/}
            <nav className="position sticky top-5">
                <ShopNav/>
            </nav>


            <main className='flex flex-col mt-28 lg:mx-12 lg:gap-20'>
                <section>
                    <h1 className='lg:mb-8 font-monkey font-semibold text-lg text-green-700'>Fruit Aisle &raquo; </h1>
                    <div className='grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-8 lg:gap-y-16 wrap'>
                        <div className='border-2 border-gray-400 lg:rounded-md bg-white/60 h-[250px]'></div>
                        <div className='border-2 border-gray-400 lg:rounded-md bg-white/60 h-[250px]'></div>
                        <div className='border-2 border-gray-400 lg:rounded-md bg-white/60 h-[250px]'></div>
                        <div className='border-2 border-gray-400 lg:rounded-md bg-white/60 h-[250px]'></div>
                        <div className='border-2 border-gray-400 lg:rounded-md bg-white/60 h-[250px]'></div>
                        <div className='border-2 border-gray-400 lg:rounded-md bg-white/60 h-[250px]'></div>
                        <div className='border-2 border-gray-400 lg:rounded-md bg-white/60 h-[250px]'></div>
                        <div className='border-2 border-gray-400 lg:rounded-md bg-white/60 h-[250px]'></div>
                    </div>
                </section>
                <section>
                    <h1 className='lg:mb-8 font-monkey font-semibold text-lg text-green-700' >Veggies Section &raquo; </h1>
                    <div className='grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-8 lg:gap-y-16'>
                        <div className='border-2 border-gray-400 lg:rounded-md bg-white/60 h-[250px]'></div>
                        <div className='border-2 border-gray-400 lg:rounded-md bg-white/60 h-[250px]'></div>
                        <div className='border-2 border-gray-400 lg:rounded-md bg-white/60 h-[250px]'></div>
                        <div className='border-2 border-gray-400 lg:rounded-md bg-white/60 h-[250px]'></div>
                        <div className='border-2 border-gray-400 lg:rounded-md bg-white/60 h-[250px]'></div>
                        <div className='border-2 border-gray-400 lg:rounded-md bg-white/60 h-[250px]'></div>
                        <div className='border-2 border-gray-400 lg:rounded-md bg-white/60 h-[250px]'></div>
                        <div className='border-2 border-gray-400 lg:rounded-md bg-white/60 h-[250px]'></div>
                    </div>
                </section>
                <section>
                    <h1 className='lg:mb-8 font-monkey font-semibold text-lg text-green-700'>Grains and Tubers &raquo; </h1>
                    <div className='grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-8 lg:gap-y-16'>
                        <div className='border-2 border-gray-400 lg:rounded-md bg-white/60 h-[250px]'></div>
                        <div className='border-2 border-gray-400 lg:rounded-md bg-white/60 h-[250px]'></div>
                        <div className='border-2 border-gray-400 lg:rounded-md bg-white/60 h-[250px]'></div>
                        <div className='border-2 border-gray-400 lg:rounded-md bg-white/60 h-[250px]'></div>
                        <div className='border-2 border-gray-400 lg:rounded-md bg-white/60 h-[250px]'></div>
                        <div className='border-2 border-gray-400 lg:rounded-md bg-white/60 h-[250px]'></div>
                        <div className='border-2 border-gray-400 lg:rounded-md bg-white/60 h-[250px]'></div>
                        <div className='border-2 border-gray-400 lg:rounded-md bg-white/60 h-[250px]'></div>
                    </div>
                </section>
            </main>

            <footer className='bg-green-500 h-[100px] lg:mt-8'>

            </footer>

        </div>

        );
}

export default Home;