import HeaderSm from "./header";

export default function InForm () {
    return (
        <div className="bg-white px-3 sm:px-10 py-8 sm:py-10 rounded-xl sm:rounded-3xl">

            {/* Imported Header component */}
            <div className="lg:hidden">
                <HeaderSm/>
            </div>

            {/* Main form design (Header) */}
            <h1 className="text-center lg:font-bold font-semibold font-[ojuju] text-3xl md:text-5xl">Welcome Back</h1>
            <p className="text-center text-2xl lg:text-3xl font-medium mt-8 lg:mt-12">Sign In</p>
            
            {/* Form itself */}
            <form className="mt-4 lg:mt-6">
                <div>
                    <label className="text-lg font-medium" for='email'>Email</label>
                    <input
                    id='email'
                    className="w-full border-2 border-gray-100 p-2 md:p-4 rounded-xl mt-1 bg-transparent"
                    placeholder="Enter email address"
                    type="text"
                    required
                    />
                </div>
                <div className="mt-2">
                    <label className="text-lg font-medium" for='password'>Password</label>
                    <input
                    className="w-full border-2 border-gray-100 p-2 md:p-4 rounded-xl mt-1 bg-transparent "
                    placeholder="Enter password"
                    type="password"
                    id='password'
                    required
                    />
                </div>
                <div className="flex justify-between md:px-2 mt-4 md:8">
                    <div>
                        <input 
                        className=""
                        type="checkbox"
                        id="remember"
                        />
                        <label for="remember" className="ml-2 text-base font-medium" >Remember me</label>
                    </div>

                    <button type="submit" className="text-base text-[#344E41]" >Forgot Password</button>
                </div>
                <div className="flex flex-col gap-y-4 mt-4 md:mt-8">
                    <button type="submit" className="active:scale-[.95] active:duration-75 hover:scale-[1.02] transition-transform ease-in-out border-2 border-gray-200 bg-[#588157] text-white py-2 font-bold rounded-xl">Sign In</button>
                    <button className="active:scale-[.95] active:duration-75 hover:scale-[1.02] transition-transform ease-in-out border-2 border-gray-200 py-2 font-bold rounded-xl">Sign in with Google</button>
                </div>
                <p className="mt-4 text-center font-medium text-md">Don't have an account? <span className="text-[#588157]"><a href="/sign_up">Sign up</a></span></p>
            </form>
        </div>
      );
}
