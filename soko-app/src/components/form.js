

export default function Form () {
    return (
        <div className="bg-white/40 px-4 sm:px-10 py-12 sm:py-20 rounded-3xl">
            <h1 className="text-center font-bold lg:font-semibold font-[ojuju] text-3xl md:text-5xl">Welcome Back</h1>
            <p className="text-center text-2xl font-medium mt-4">Sign In</p>
            <div className="mt-8 ">
                <div>
                    <label className="text-lg font-medium">Email</label>
                    <input
                    className="w-full border-2 border-gray-100 p-4 rounded-xl mt-1 bg-transparent"
                    placeholder="Enter email address"
                    type="text"
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                    className="w-full border-2 border-gray-100 p-4 rounded-xl mt-1 bg-transparent "
                    placeholder="Enter password"
                    type="password"
                    />
                </div>
                <div>
                    <div>
                        <input 
                        className=""
                        type="checkbox"
                        id="remember"
                        />
                        <label for="remember" >Remember me</label>
                    </div>
                </div>
            </div>
        </div>
      );
}
