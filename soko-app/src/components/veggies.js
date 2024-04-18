import beetroot from "../assets/shopping-panels/veggies/beetroot.jpg"
import bellPepper from "../assets/shopping-panels/veggies/bell_peppers.jpg"
import cabbage from "../assets/shopping-panels/veggies/cabbages.jpg"
import garlic from "../assets/shopping-panels/veggies/garlic.jpg"
import leeks from "../assets/shopping-panels/veggies/leeks.jpg"
import lettuce from "../assets/shopping-panels/veggies/lettuce.jpg"
import onions from "../assets/shopping-panels/veggies/onions.jpg"
import scotchBonnet from "../assets/shopping-panels/veggies/scotch-bonnet.jpg"


function Veggies() {
  return (
    <div>

      <h1 className="lg:mb-8 font-monkey font-semibold text-lg text-green-700">
        Fruit Aisle &raquo;{" "}
      </h1>

      <div className="grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-8 lg:gap-y-16 wrap">

        <div
          className="relative border-2 border-gray-400 lg:rounded-md bg-opacity-60 h-[250px] bg-cover hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 ease-in-out cursor-pointer"
          style={{ backgroundImage: `url(${beetroot})` }}
        >
          <div className="absolute top-2 left-2 flex justify-center items-center px-6 h-[10%] bg-white rounded-2xl border-2 border-gray-500  ">
            <h1 className="text-lg font-bold font-monkey">Beetroot</h1>
          </div>
        </div>
        
        
        <div
          className="relative cursor-pointer border-2 border-gray-400 lg:rounded-md bg-opacity-60 h-[250px] bg-cover hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 ease-in-out cursor-pointer"
          style={{ backgroundImage: `url(${bellPepper})` }}
        >
          <div className="absolute top-2 left-2 flex justify-center items-center px-6 h-[10%] bg-white rounded-2xl border-2 border-gray-500  ">
            <h1 className="text-lg font-bold font-monkey">Bell Pepper</h1>
          </div>
        </div>
        
        
        <div
          className="relative cursor-pointer border-2 border-gray-400 lg:rounded-md bg-opacity-60 h-[250px] bg-cover hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 ease-in-out cursor-pointer"
          style={{ backgroundImage: `url(${cabbage})` }}
        >
          <div className="absolute top-2 left-2 flex justify-center items-center px-6 h-[10%] bg-white rounded-2xl border-2 border-gray-500  ">
            <h1 className="text-lg font-bold font-monkey">Cabbage</h1>
          </div>
        </div>
        
        
        <div
          className="relative cursor-pointer border-2 border-gray-400 lg:rounded-md bg-opacity-60 h-[250px] bg-cover hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 ease-in-out cursor-pointer"
          style={{ backgroundImage: `url(${garlic})` }}
        >
          <div className="absolute top-2 left-2 flex justify-center items-center px-6 h-[10%] bg-white rounded-2xl border-2 border-gray-500  ">
            <h1 className="text-lg font-bold font-monkey">Garlic</h1>
          </div>
        </div>
        
        
        <div
          className="relative cursor-pointer border-2 border-gray-400 lg:rounded-md bg-opacity-60 h-[250px] bg-cover hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 ease-in-out cursor-pointer"
          style={{ backgroundImage: `url(${leeks})` }}
        >
          <div className="absolute top-2 left-2 flex justify-center items-center px-6 h-[10%] bg-white rounded-2xl border-2 border-gray-500  ">
            <h1 className="text-lg font-bold font-monkey">Leeks</h1>
          </div>
        </div>
        
        
        <div
          className="relative cursor-pointer border-2 border-gray-400 lg:rounded-md bg-opacity-60 h-[250px] bg-cover hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 ease-in-out cursor-pointer"
          style={{ backgroundImage: `url(${lettuce})` }}
        >
          <div className="absolute top-2 left-2 flex justify-center items-center px-6 h-[10%] bg-white rounded-2xl border-2 border-gray-500  ">
            <h1 className="text-lg font-bold font-monkey">Lettuce</h1>
          </div>
        </div>
        
        
        <div
          className="relative cursor-pointer border-2 border-gray-400 lg:rounded-md bg-opacity-60 h-[250px] bg-cover hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 ease-in-out cursor-pointer"
          style={{ backgroundImage: `url(${onions})` }}
        >
          <div className="absolute top-2 left-2 flex justify-center items-center px-6 h-[10%] bg-white rounded-2xl border-2 border-gray-500  ">
            <h1 className="text-lg font-bold font-monkey">Onions</h1>
          </div>
        </div>
        
        
        <div
          className="relative cursor-pointer border-2 border-gray-400 lg:rounded-md bg-opacity-60 h-[250px] bg-cover hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 ease-in-out cursor-pointer"
          style={{ backgroundImage: `url(${scotchBonnet})` }}
        >
          <div className="absolute top-2 left-2 flex justify-center items-center px-6 h-[10%] bg-white rounded-2xl border-2 border-gray-500  ">
            <h1 className="text-lg font-bold font-monkey">Scotch Bonnet Pepper</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Veggies;
