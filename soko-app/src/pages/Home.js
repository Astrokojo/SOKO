import ShopNav from "../components/shop_nav";
import Fruit from "../components/fruits";
import Veggies from "../components/veggies";
import TuberGrains from "../components/tubers-etc";
import Footer from "../components/footer";
import LazyLoad from 'react-lazyload';


function Home() {
    return ( 
        <div>

            {/* Nav bar*/}
            <nav className="position sticky top-5 z-10">
                <ShopNav/>
            </nav>

            <LazyLoad>

                <main className='flex flex-col mt-28 lg:mx-12 lg:gap-20 md:mb-32 z-0'>

                    {/* Fruit Section */}
                    <section>
                        <Fruit/>
                    </section>



                    {/* Veggies/spice */}
                    <section>
                        <Veggies/>
                    </section>


                    {/* Grains and tubers */}
                    <section>
                    <TuberGrains/>
                    </section>
                </main>

            </LazyLoad>


            <footer className='fixed bottom-0 z-10 w-full'>
                <Footer/>
            </footer>

        </div>

        );
}

export default Home;