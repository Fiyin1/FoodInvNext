import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row min-h-[70vh] mb-10 lg:mb-20 text-left items-center">
        <div className="w-1/2 flex items-center justify-center mt-20">
          <img
            src="/images/ContactUs.png"
            alt="features"
            className="w-auto h-auto object-cover"
          />
        </div>
        <div className="w-1/2 mt-4">
          <span className="text-xl lg:text-4xl font-bold font-Source">
            Contact Us
          </span>
          <p className="font-Source mt-10 text-sm lg:text-xl">
            Get in touch for inventory managment solutions
          </p>
          <form action="">
            <div className="flex flex-col gap-2 font-Source mt-4">
              <label htmlFor="name">Name</label>
              <input
                className="rounded-4xl px-4 py-4 w-[80%] focus:outline-none focus:border-blue-500 bg-gray-100"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2 font-Source mt-4">
              <label htmlFor="email">Email</label>
              <input
                className="rounded-4xl px-4 py-4 w-[80%] focus:outline-none focus:border-blue-500 bg-gray-100"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2 font-Source mt-4">
              <label htmlFor="message">Message</label>
              <input
                className="rounded-4xl px-4 py-16 w-[80%] focus:outline-none focus:border-blue-500 bg-gray-100"
                type="text"
              />
            </div>
            <div className="flex mt-6">
              <button className="bg-red-600 ml-auto mr-[20%] text-center font-Source text-white rounded-2xl px-6 lg:px-10 py-2 w-[40%] lg:w-[20%]">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
