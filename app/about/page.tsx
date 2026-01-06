import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col lg:flex-row h-screen gap-10 bg-[#EEEEEE] overflow-hidden">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 px-6 md:px-16 pt-10 lg:pt-0 flex flex-col justify-center">
          <h1 className="font-bold text-3xl md:text-5xl text-left font-Source leading-tight">
            Meet the team behind this magic
          </h1>
          <p className="max-w-xl text-lg text-left font-Source mt-4">
            We're passionate about revolutionizing food inventory management.
          </p>
        </div>

        {/* Image Content - "flex-1" makes it fill the rest of the screen */}
        <div className="w-full lg:w-1/2 flex-1 lg:h-full">
          <img
            src="/images/About1.png"
            alt="team"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <section className="flex flex-col min-h-screen">
        <div className="flex flex-col gap-2 items-center justify-center mt-14">
          <h1 className="text-4xl font-Source">Our Food Journey</h1>
          <p className="text-lg font-Source mt-3 text-center max-w-4xl">
            Founded by a group of food enthusiasts, our company has evolved into
            a leading provider of innovative solutions for managing food
            inventory effectively.
          </p>
        </div>

        <div className="mx-auto mt-10 rounded-2xl bg-gray-100 w-[90%] h-[60vh] flex items-center justify-center">
          <img
            src="/images/About2.png"
            alt="features"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </section>
      <section className="flex flex-col min-h-screen">
        <div className="flex flex-col gap-6 items-center justify-center mt-14">
          <h1 className="text-4xl font-Source">Our Team</h1>
          <img
            src="/images/About3.png"
            alt="features"
            className="w-29 h-27.25  mt-20 lg:mt-0 lg:w-51 lg:h-49.25 object-cover rounded-2xl"
          />
        </div>
        <div className="flex mt-20">
          <div className="w-1/2 flex items-center justify-center">
            <img
              src="/images/About4.png"
              alt="features"
              className="w-29 h-27.25 mt-20 lg:mt-0 lg:w-51 lg:h-49.25 object-cover rounded-2xl"
            />
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <img
              src="/images/About5.png"
              alt="features"
              className="w-29 h-27.25  mt-20 lg:mt-0 lg:w-51 lg:h-49.25 object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
