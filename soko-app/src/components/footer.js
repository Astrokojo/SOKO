import { Link } from 'react-router-dom';


export default function Footer() {
    return ( 
        <div>

            <footer className='flex flex-col justify-center items-end px-6 bg-green-600 h-[100px] lg:mt-8'>

                <h1 className="text-2xl hover:scale-[1.1] hover:text-yellow-400 active:scale-[.95] transition-transform  ease-in-out font-roboto font-bold text-white "><a href='https://github.com/Astrokojo/SOKO' target="blank"><span className='font-ojuju'>SOKO</span> Github repo</a></h1>
                <h1 className="text-2xl hover:scale-[1.1] hover:text-yellow-400 active:scale-[.95] transition-transform  ease-in-out font-roboto font-bold text-white"> <Link to='/about#team-section'>Contact Team <span className='font-ojuju'>SOKO</span></Link> </h1>
            </footer>
        </div>
     );
}
