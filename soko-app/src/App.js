function App() {
  return (
    <div className="h-screen bg-[url('./assets/about-page_1.jpg')] bg-cover md:bg-center bg-center md:bg-top bg-no-repeat transform " id="about-page_container">
      <header className="pt-4 px-2 flex justify-between items-center">
        <div>
          <h1 className="text-3xl sm:text-6xl font-bold animate-bounce"> 
            <a href="index.js" className="text-gray-700 no-underline sm:hover font-[ojuju]"> SOKO </a> 
          </h1>
        </div>
        <ul className="flex gap-2 sm:gap-6 sm:text-2xl font-medium list-none">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </header>

      <main className="pt-12">
        <div className="flex-col justify-center items-center font-bold text-white text-4xl text-center bg-transparent-200">
          <div className="flex justify-center items-center">
            <p className="mr-3 text-green-300 text-5xl"> “ </p>  
            <h1>Shop <span className="text-green-400 drop-shadow-*">Green</span>, </h1> 
          </div>
          <div className="flex justify-center items-center">
            <h1 className="pl-[30%]"><span className="text-green-400 drop-shadow-*">Eat</span> Clean</h1>
            <p className="ml-3 text-green-300 text-5xl"> ” </p>
          </div>
        </div>
      </main>
      

    </div>
  );
}

export default App;
