import Header from '../components/header'
import Form from '../components/form';
import BOUNCE from '../components/bounce';

function In() {
    return (
        <div className="w-full h-screen container max-w-screen-2xl">
            {/* <div>
                <Header/>
            </div> */}
            <div className="flex bg-['in-form'] w-full h-screen justify-center items-center">
                {/* Left side(Form) */}
                <div className='lg:w-1/2 w-full h-full bg-gradient-to-bl from-[#588157] to-[#3A5A40] flex items-center justify-center'>
                    <Form/>
                </div>
                {/* Right side (Animation) */}
                <BOUNCE/>

            </div>
        </div>
    );
}

export default In;