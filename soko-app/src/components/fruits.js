import apple from "../assets/shopping-panels/fruits/apples.jpg"
import bananas from "../assets/shopping-panels/fruits/bananas.jpg"
import lemons from "../assets/shopping-panels/fruits/lemons.jpg"
import mangoes from "../assets/shopping-panels/fruits/mangoes.jpg"
import pineapple from "../assets/shopping-panels/fruits/pineapples.jpg"
import pomegranate from "../assets/shopping-panels/fruits/pomegranate.jpg"
import watermelon from "../assets/shopping-panels/fruits/watermelon.jpg"
import tomatoes from "../assets/shopping-panels/fruits/tomatoes.jpg"


function Fruit() {
  return (
    <div>

      <h1 className="lg:mb-8 font-monkey font-semibold text-lg text-green-700">
        Fruit Aisle &raquo;{" "}
      </h1>

      <div className="grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-8 lg:gap-y-16 wrap">

        <div
          className="relative border-2 border-gray-400 lg:rounded-md bg-opacity-60 h-[250px] bg-cover hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 ease-in-out cursor-pointer"
          style={{ backgroundImage: `url(${apple})` }}
        >
          <div className="absolute top-2 left-2 flex justify-center items-center px-6 h-[10%] bg-white rounded-2xl border-2 border-gray-500 ">
            <h1 className="text-lg font-bold font-monkey">Apples</h1>
          </div>
        </div>
        
        
        <div
          className="relative cursor-pointer border-2 border-gray-400 lg:rounded-md bg-opacity-60 h-[250px] bg-cover hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 ease-in-out cursor-pointer"
          style={{ backgroundImage: `url(${mangoes})` }}
        >
          <div className="absolute top-2 left-2 flex justify-center items-center px-6 h-[10%] bg-white rounded-2xl border-2 border-gray-500 ">
            <h1 className="text-lg font-bold font-monkey">Mangoes</h1>
          </div>
        </div>
        
        
        <div
          className="relative cursor-pointer border-2 border-gray-400 lg:rounded-md bg-opacity-60 h-[250px] bg-cover hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 ease-in-out cursor-pointer"
          style={{ backgroundImage: `url(${lemons})` }}
        >
          <div className="absolute top-2 left-2 flex justify-center items-center px-6 h-[10%] bg-white rounded-2xl border-2 border-gray-500 ">
            <h1 className="text-lg font-bold font-monkey">Lemons</h1>
          </div>
        </div>
        
        
        <div
          className="relative cursor-pointer border-2 border-gray-400 lg:rounded-md bg-opacity-60 h-[250px] bg-cover hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 ease-in-out cursor-pointer"
          style={{ backgroundImage: `url(${bananas})` }}
        >
          <div className="absolute top-2 left-2 flex justify-center items-center px-6 h-[10%] bg-white rounded-2xl border-2 border-gray-500 ">
            <h1 className="text-lg font-bold font-monkey">Banana</h1>
          </div>
        </div>
        
        
        <div
          className="relative cursor-pointer border-2 border-gray-400 lg:rounded-md bg-opacity-60 h-[250px] bg-cover hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 ease-in-out cursor-pointer"
          style={{ backgroundImage: `url(${pineapple})` }}
        >
          <div className="absolute top-2 left-2 flex justify-center items-center px-6 h-[10%] bg-white rounded-2xl border-2 border-gray-500 ">
            <h1 className="text-lg font-bold font-monkey">Pineapples</h1>
          </div>
        </div>
        
        
        <div
          className="relative cursor-pointer border-2 border-gray-400 lg:rounded-md bg-opacity-60 h-[250px] bg-cover hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 ease-in-out cursor-pointer"
          style={{ backgroundImage: `url(${watermelon})` }}
        >
          <div className="absolute top-2 left-2 flex justify-center items-center px-6 h-[10%] bg-white rounded-2xl border-2 border-gray-500 ">
            <h1 className="text-lg font-bold font-monkey">Watermelon</h1>
          </div>
        </div>
        
        
        <div
          className="relative cursor-pointer border-2 border-gray-400 lg:rounded-md bg-opacity-60 h-[250px] bg-cover hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 ease-in-out cursor-pointer"
          style={{ backgroundImage: `url(${pomegranate})` }}
        >
          <div className="absolute top-2 left-2 flex justify-center items-center px-6 h-[10%] bg-white rounded-2xl border-2 border-gray-500 ">
            <h1 className="text-lg font-bold font-monkey">Pomegranate</h1>
          </div>
        </div>
        
        
        <div
          className="relative cursor-pointer border-2 border-gray-400 lg:rounded-md bg-opacity-60 h-[250px] bg-cover hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 ease-in-out cursor-pointer"
          style={{ backgroundImage: `url(${tomatoes})` }}
        >
          <div className="absolute top-2 left-2 flex justify-center items-center px-6 h-[10%] bg-white rounded-2xl border-2 border-gray-500 ">
            <h1 className="text-lg font-bold font-monkey">Tomatoes</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fruit;
