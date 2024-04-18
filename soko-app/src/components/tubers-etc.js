import brownRice from "../assets/shopping-panels/grains_and_tubers/brown-rice.jpg"
import cassava from "../assets/shopping-panels/grains_and_tubers/cassava.jpg"
import cocoyam from "../assets/shopping-panels/grains_and_tubers/cocoyam.jpg"
import coffeeBeans from "../assets/shopping-panels/grains_and_tubers/coffee-beans.jpg"
import potatoes from "../assets/shopping-panels/grains_and_tubers/potatoes.jpg"
import soyBeans from "../assets/shopping-panels/grains_and_tubers/soybeans.jpg"
import wheat from "../assets/shopping-panels/grains_and_tubers/wheat.jpg"
import yellowCorn from "../assets/shopping-panels/grains_and_tubers/yellow-corn.jpg"



function TuberGrains() {
  return (
    <div>

      <h1 className="lg:mb-8 font-monkey font-semibold text-lg text-green-700">
        Grains and Tubers &raquo;{" "}
      </h1>

            <div className="grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-8 lg:gap-y-16 wrap">

                <div
                className="relative border-2 border-gray-400 lg:rounded-md bg-opacity-60 h-[250px] bg-cover hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 ease-in-out cursor-pointer"
                style={{ backgroundImage: `url(${brownRice})` }}
                >
                <div className="absolute top-2 left-2 flex justify-center items-center px-6 h-[10%] bg-white rounded-2xl border-2 border-gray-500 ">
                    <h1 className="text-lg font-bold font-monkey">Brown Rice</h1>
                </div>
                </div>
                
                
                <div
                className="relative cursor-pointer border-2 border-gray-400 lg:rounded-md bg-opacity-60 h-[250px] bg-cover hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 ease-in-out cursor-pointer"
                style={{ backgroundImage: `url(${cassava})` }}
                >
                <div className="absolute top-2 left-2 flex justify-center items-center px-6 h-[10%] bg-white rounded-2xl border-2 border-gray-500 ">
                    <h1 className="text-lg font-bold font-monkey">Cassava</h1>
                </div>
                </div>
                
                
                <div
                className="relative cursor-pointer border-2 border-gray-400 lg:rounded-md bg-opacity-60 h-[250px] bg-cover hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 ease-in-out cursor-pointer"
                style={{ backgroundImage: `url(${cocoyam})` }}
                >
                <div className="absolute top-2 left-2 flex justify-center items-center px-6 h-[10%] bg-white rounded-2xl border-2 border-gray-500 ">
                    <h1 className="text-lg font-bold font-monkey">Cocoyam</h1>
                </div>
                </div>
                
                
                <div
                className="relative cursor-pointer border-2 border-gray-400 lg:rounded-md bg-opacity-60 h-[250px] bg-cover hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 ease-in-out cursor-pointer"
                style={{ backgroundImage: `url(${coffeeBeans})` }}
                >
                <div className="absolute top-2 left-2 flex justify-center items-center px-6 h-[10%] bg-white rounded-2xl border-2 border-gray-500 ">
                    <h1 className="text-lg font-bold font-monkey">Coffee Beans</h1>
                </div>
                </div>
                
                
                <div
                className="relative cursor-pointer border-2 border-gray-400 lg:rounded-md bg-opacity-60 h-[250px] bg-cover hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 ease-in-out cursor-pointer"
                style={{ backgroundImage: `url(${potatoes})` }}
                >
                <div className="absolute top-2 left-2 flex justify-center items-center px-6 h-[10%] bg-white rounded-2xl border-2 border-gray-500 ">
                    <h1 className="text-lg font-bold font-monkey">Potatoes</h1>
                </div>
                </div>
                
                
                <div
                className="relative cursor-pointer border-2 border-gray-400 lg:rounded-md bg-opacity-60 h-[250px] bg-contain no-repeat hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 ease-in-out cursor-pointer"
                style={{ backgroundImage: `url(${soyBeans})` }}
                >
                <div className="absolute top-2 left-2 flex justify-center items-center px-6 h-[10%] bg-white rounded-2xl border-2 border-gray-500 ">
                    <h1 className="text-lg font-bold font-monkey">Soy Beans</h1>
                </div>
                </div>
                
                
                <div
                className="relative cursor-pointer border-2 border-gray-400 lg:rounded-md bg-opacity-60 h-[250px] bg-cover hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 ease-in-out cursor-pointer"
                style={{ backgroundImage: `url(${wheat})` }}
                >
                <div className="absolute top-2 left-2 flex justify-center items-center px-6 h-[10%] bg-white rounded-2xl border-2 border-gray-500 ">
                    <h1 className="text-lg font-bold font-monkey">Wheat</h1>
                </div>
                </div>
                
                
                <div
                className="relative cursor-pointer border-2 border-gray-400 lg:rounded-md bg-opacity-60 h-[250px] bg-cover hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 ease-in-out cursor-pointer"
                style={{ backgroundImage: `url(${yellowCorn})` }}
                >
                <div className="absolute top-2 left-2 flex justify-center items-center px-6 h-[10%] bg-white rounded-2xl border-2 border-gray-500 ">
                    <h1 className="text-lg font-bold font-monkey">Yellow Corn</h1>
                </div>
                </div>
            </div>
    </div>
  );
}

export default TuberGrains;
