import React, { useState } from "react";
import { IMEGES } from "@/app/constant/assets/allAssets";
import Image from "next/image";
import Link from "next/link";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    industry: "",
    employees: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex">
      <div>
        <div className="flex flex-col justify-center w-[544px]  items-center mt-7 mb-7">
          <p className={`text-[38px]`}>Welcome to Medicare</p>
          <p className={`text-[22px]`}>Tell us about your company</p>
          <form className="w-full max-w-sm mt-7" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-700 text-[16px] font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="appearance-none border-b-2 border-gray-300 w-full  px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-800"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 text-[16px] font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="appearance-none border-b-2 border-gray-300 w-full  px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-800"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="companyName"
                className="block text-gray-700 text-[16px] font-bold mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="appearance-none border-b-2 border-gray-300 w-full  px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-800"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="industry"
                className="block text-gray-700 text-[16px] font-bold mb-2"
              >
                Industry
              </label>
              <input
                type="text"
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleInputChange}
                className="appearance-none border-b-2 border-gray-300 w-full  px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-800"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="employees"
                className="block text-gray-700 text-[16px] font-bold mb-2"
              >
                How many employees do you have
              </label>
              <input
                type="text"
                id="employees"
                name="employees"
                value={formData.employees}
                onChange={handleInputChange}
                className="appearance-none border-b-2 border-gray-300 w-full  px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-800"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-[16px] font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="appearance-none border-b-2 border-gray-300 w-full  px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-800"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 text-[16px] font-bold mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="appearance-none border-b-2 border-gray-300 w-full  px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-800"
              />
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="bg-[#0000AC] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
              >
                Finish
              </button>
            </div>
          </form>
          <p className="text-gray-700 text-start text-sm mb-3">
            Already have an account?{" "}
            <Link href="/pages/auth/login" className="text-[#0000AC] font-bold">
              Login
            </Link>
          </p>
          <div className="flex items-center w-full max-w-sm mb-4">
            <div className="flex-grow border-t border-[#0000AC] mr-4"></div>
            <p className="font-bold text-[#0000AC]">or</p>
            <div className="flex-grow border-t border-[#0000AC] ml-4"></div>
          </div>
          <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
            <div className="relative flex items-center space-x-6 justify-center">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="absolute left-0 w-5"
                alt="google logo"
              />
              <span className="block w-max font-semibold tracking-wide text-gray-700 dark:text-white text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                Continue with Google
              </span>
            </div>
          </button>
        </div>
      </div>
      <div className='w-[900px] bg-[#0000AC] sm:flex hidden justify-center items-center'>
    <div className="flex justify-center items-center">
        <Image src={IMEGES.Signup} className='w-[669px]' alt='info'/>
    </div>
</div>
    </div>
  );
}

export default Signup;
