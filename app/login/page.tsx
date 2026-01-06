"use client";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex h-screen">
        <div className="hidden lg:flex lg:basis-full">
          <img
            src="/images/LoginPic.png"
            alt="Login"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="basis-full flex items-center justify-center  ">
          <form className="max-w-113 w-full">
            <h1 className="font-Source text-3xl font-bold text-center mb-10">
              Log In
            </h1>
            <div className="block mb-4">
              <label htmlFor="email" className="block mb-2">
                Enter your email
              </label>
              <input
                className="rounded-4xl border border-black/50 px-2 py-1 w-full focus:outline-none focus:border-blue-500"
                type="text"
                name="email"
                id="email"
                placeholder="Adeyemitimilehin@gmail.com"
              />
            </div>
            <div className="block">
              <label htmlFor="password" className="block mb-2">
                Enter your Password
              </label>
              <input
                className="rounded-4xl border border-black/50 px-2 py-1 w-full focus:outline-none focus:border-blue-500"
                type="text"
                name="password"
                id="password"
                placeholder="........"
              />
            </div>
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => router.push("/home")}
                className="bg-red-600 font-Source text-white rounded-2xl px-10 py-2 max-w-113 w-full"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;


          ;