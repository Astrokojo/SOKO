import HeaderSm from "./header";


export default function UpForm () {
    return (
        <div className="bg-white px-3 sm:px-6 py-6 mt-4 rounded-lg sm:rounded-2xl md:rounded-3xl font-roboto">
            <div className="lg:hidden ">
                <HeaderSm/>
            </div>

            <p className="text-center text-2xl lg:text-3xl font-bold font-[roboto]">Sign Up</p>

            <form className="mt-6">
                <div>
                    <label className="text-lg font-medium" for='email'>Email</label>
                    <input
                    className="w-full border-2 border-gray-100 p-1 md:p-4 rounded-xl mt-1 bg-transparent"
                    placeholder="Enter email address"
                    type="text"
                    id="email"
                    required
                    />
                </div>
                <div className="mt-2">
                    <label className="text-lg font-medium" for='password'>Password</label>
                    <input
                    className="w-full border-2 border-gray-100 p-1 md:p-4 rounded-xl mt-1 bg-transparent "
                    placeholder="Enter password"
                    type="password"
                    id="password"
                    required
                    />
                </div>
                <div className="mt-2">
                    <label className="text-lg font-medium" for='confPassword'>Confirm Password</label>
                    <input
                    className="w-full border-2 border-gray-100 p-1 md:p-4 rounded-xl mt-1 bg-transparent "
                    placeholder="Confirm password"
                    type="password"
                    id='confPassword'
                    required
                    />
                </div>
                <div className="justify-between px-2 mt-4 sm:mt-8">
                    <input 
                    className=""
                    type="checkbox"
                    id="remember"
                    />
                    <label for="remember" className="ml-2 text-base font-medium" >Remember me</label>
                </div>

                <div className="flex flex-col gap-y-4 mt-4">
                    <button type="submit" className="active:scale-[.95] active:duration-75 hover:scale-[1.02] transition-transform ease-in-out border-2 border-gray-200 bg-[#588157] text-white py-2 font-bold rounded-xl">Sign Up</button>
                    <button className="active:scale-[.95] active:duration-75 hover:scale-[1.02] transition-transform ease-in-out border-2 border-gray-200 py-2 font-bold rounded-xl">Sign up with Google</button>
                </div>
            </form>
                <p className="mt-4 text-center font-medium text-md">Already have an account? <span className="text-[#588157]"><a href="/sign_in">Sign in</a></span></p>
        </div>
      );
}
