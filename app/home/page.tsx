import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className="flex justify-center text-xl mt-10 font-bold md:text-2xl lg:text-5xl font-Source">
        How does FoodInventoryPro work?
      </h1>
      <section className="flex flex-col lg:flex-row min-h-[70vh] mb-10 lg:mb-20 items-center">
        <div className="w-full lg:w-1/2 px-6 md:px-16 mt-10 lg:mt-30 text-center lg:text-left">
          <h1 className="font-bold text-lg md:text-4xl font-Source">
            Essential features for new users
          </h1>
          <p className="max-w-md mx-auto lg:mx-0 text-base md:text-lg font-Source mt-4">
            New users can start using FoodInventoryPro without technical
            knowledge. Go to our website, add items to your inventory, and
            easily manage your food storage.
          </p>
          <h3 className="mt-8 lg:mt-14 text-xl md:text-2xl font-Source">
            Don’t Forget, Simple is better
          </h3>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-0">
          <img
            src="/images/Home 1.png"
            alt="features"
            className="w-full max-w-md lg:max-w-full h-auto object-contain"
          />
        </div>
      </section>
      <section className="flex flex-col lg:flex-row min-h-[70vh] bg-[#EEEEEE] mb-10 lg:mb-20 items-center">
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-0">
          <img
            src="/images/Home 2.png"
            alt="features"
            className="w-full max-w-md lg:max-w-full h-auto object-contain"
          />
        </div>
        <div className="w-full lg:w-1/2 px-6 md:px-16 mt-10 lg:mt-30 text-center lg:text-left">
          <h1 className="font-bold text-3xl md:text-4xl text-left font-Source">
            FoodInventoryPro and data management
          </h1>
          <p className="max-w-xl text-lg text-left font-Source mt-3">
            FoodInventoryPro ensures efficient food storage management. Its
            system is user-friendly, accessible, and reliable for all users. It
            revolutionizes the way food inventory is managed.
          </p>
          <button className="text-center text-white rounded-3xl px-6 py-2 bg-red-600 mt-4 mb-4 md:mb-6">
            Start Managing Food
          </button>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row min-h-[70vh] mb-10 lg:mb-20 items-center">
        <div className="w-full lg:w-1/2 px-6 md:px-16 mt-10 lg:mt-30 text-center lg:text-left">
          <h1 className="font-bold text-3xl md:text-4xl text-left font-Source">
            Optimize your food inventory process
          </h1>
          <p className="max-w-xl text-lg text-left font-Source mt-3">
            FoodInventoryPro transforms food inventory processes, providing
            insights for better decision-making and value creation for users.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-0">
          <img
            src="/images/Home 3.png"
            alt="features"
            className="w-full max-w-md lg:max-w-full h-auto object-contain"
          />
        </div>
      </section>
      <section className="flex flex-col lg:flex-row min-h-[70vh] py-12 lg:py-10 items-center bg-[#EEEEEE]">
        {/* Left Column: Image and Label */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start px-6 lg:pl-20">
          <img
            src="/images/Home 4.png"
            alt="features"
            className="w-full max-w-md lg:max-w-[90%] h-auto object-contain"
          />
          <div className="mt-6 text-left w-full max-w-md lg:max-w-none lg:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-Source">
              Food Inventory
            </h2>
            <p className="text-base md:text-lg">
              Your go-to platform for managing food inventory with ease.
            </p>
          </div>
        </div>

        {/* Right Column: Main Content */}
        <div className="w-full lg:w-1/2 px-6 md:px-16 mt-12 lg:mt-0">
          <h1 className="font-bold text-3xl md:text-4xl text-left font-Source leading-tight">
            Efficient and smart transactions
          </h1>
          <p className="max-w-xl text-lg text-left font-Source mt-4">
            Explore how FoodInventoryPro's technology streamlines data into
            actionable insights, enhancing efficiency in food inventory
            management.
          </p>
        </div>
      </section>
    </>
  );
}
