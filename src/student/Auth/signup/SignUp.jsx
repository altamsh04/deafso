import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import axios from "axios";
import {z} from "zod";

const signupSchema=z.object({
    fullname:z.string().min(2,"Full name must be between 2 and 255 characters").max(255),
    email:z.string().email("Please provide a valid email address"),
    mobile:z.string().regex(/^[0-9]{10}$/,"Mobile Number must be 10 Digit"),
    password:z.string().min(6,"Password must be at least 6 characters long"),
    standard:z.enum(['1','2','3','4','5','6','7','8','9','10','11','12'],{
      errorMap:()=>({message:"Standard must be between 1 and 12"}),
    }),
    division:z.string().min(1,"Division must be between 1 and 5 characters").max(5),
    rollnumber:z.string().min(1,"Roll number must be between 1 and 20 characters").max(20)
});


export default function SignupPage() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    mobile:"",
    password:"",
    standard: "",
    division: "",
    rollnumber: ""
  });
  const [err,setErr]=useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = async(e) => {
    e.preventDefault();
    setErr({});
    const res=signupSchema.safeParse(form);
    if(!res.success){
      const fielderr = {};
      res.error.errors.forEach((err) => {
        fielderr[err.path[0]] = err.message;
      });
      setErr(fielderr);
      return;
    }
    try {
      setIsSubmitting(true);
       const response=await axios.post("http://localhost:3000/api/v1/student/signup", form,{
        withCredentials:true
       });
       console.log(response);  
    }catch(error){
      console.log(error.message);
    }finally {
      setIsSubmitting(false);
    }
    console.log("Sign-up data:", form); // replace with real sign-up logic
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-8 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black transition-all">
      <Card className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl shadow-purple-900/40 bg-gray-850 dark:bg-gray-800">
        <CardHeader className="pb-4 sm:pb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-white mb-4 sm:mb-6 tracking-wide leading-tight">
            Student SignUp!
          </h2>
        </CardHeader>

        <CardContent className="px-0">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 lg:space-y-6"  noValidate>
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="fullname" className="block text-sm sm:text-base font-semibold text-purple-300">
                Full Name
              </label>
              <Input
                id="fullname"
                placeholder="John Doe"
                type={"text"}
                value={form.fullname}
                onChange={handleChange}
                required
                className="w-full h-10 sm:h-11 lg:h-12 px-3 sm:px-4 bg-gray-900 border border-purple-700 text-white placeholder-purple-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 rounded-lg text-sm sm:text-base transition-all duration-200"
              />
              {err.fullname && <p className="text-xs text-red-600 mt-1">{err.fullname}</p>}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm sm:text-base font-semibold text-purple-300">
                Email Address
              </label>
              <Input
                id="email"
                type={"text"}
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full h-10 sm:h-11 lg:h-12 px-3 sm:px-4 bg-gray-900 border border-purple-700 text-white placeholder-purple-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 rounded-lg text-sm sm:text-base transition-all duration-200"
              />
              {err.email && <p className="text-xs text-red-600 mt-1">{err.email}</p>}
            </div>

            {/* mobile Number */}
            <div className="space-y-2">
              <label htmlFor="mobile" className="block text-sm sm:text-base font-semibold text-purple-300">
                Mobile Number
              </label>
              <Input
                id="mobile"
                placeholder="e.g., 23"
                type={"text"}
                value={form.mobile}
                onChange={handleChange}
                required
                className="w-full h-10 sm:h-11 lg:h-12 px-3 sm:px-4 bg-gray-900 border border-purple-700 text-white placeholder-purple-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 rounded-lg text-sm sm:text-base transition-all duration-200"
              />
              {err.mobile && <p className="text-xs text-red-600 mt-1">{err.mobile}</p>}
            </div>

            {/* password*/}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm sm:text-base font-semibold text-purple-300">
                Password
              </label>
              <Input
                id="password"
                placeholder="e.g., 23"
                type={"password"}
                value={form.password}
                onChange={handleChange}
                required
                className="w-full h-10 sm:h-11 lg:h-12 px-3 sm:px-4 bg-gray-900 border border-purple-700 text-white placeholder-purple-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 rounded-lg text-sm sm:text-base transition-all duration-200"
              />
              {err.password && <p className="text-xs text-red-600 mt-1">{err.password}</p>}
            </div>

            {/* Standard */}
            <div className="space-y-2">
              <label htmlFor="standard" className="block text-sm sm:text-base font-semibold text-purple-300">
                Standard
              </label>
              <Input
                id="standard"
                type={"text"}
                placeholder="e.g., 10"
                value={form.standard}
                onChange={handleChange}
                required
                className="w-full h-10 sm:h-11 lg:h-12 px-3 sm:px-4 bg-gray-900 border border-purple-700 text-white placeholder-purple-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 rounded-lg text-sm sm:text-base transition-all duration-200"
              />
              {err.standard && <p className="text-xs text-red-600 mt-1">{err.standard}</p>}
            </div>

            {/* Division */}
            <div className="space-y-2">
              <label htmlFor="division" className="block text-sm sm:text-base font-semibold text-purple-300">
                Division
              </label>
              <Input
                id="division"
                type={"text"}
                placeholder="A / B / C"
                value={form.division}
                onChange={handleChange}
                required
                className="w-full h-10 sm:h-11 lg:h-12 px-3 sm:px-4 bg-gray-900 border border-purple-700 text-white placeholder-purple-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 rounded-lg text-sm sm:text-base transition-all duration-200"
              />
              {err.division && <p className="text-xs text-red-600 mt-1">{err.division}</p>}
            </div>

            {/* Roll Number */}
            <div className="space-y-2">
              <label htmlFor="rollnumber" className="block text-sm sm:text-base font-semibold text-purple-300">
                Roll Number
              </label>
              <Input
                id="rollnumber"
                placeholder="e.g., 23"
                type={"text"}
                value={form.rollnumber}
                onChange={handleChange}
                required
                className="w-full h-10 sm:h-11 lg:h-12 px-3 sm:px-4 bg-gray-900 border border-purple-700 text-white placeholder-purple-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 rounded-lg text-sm sm:text-base transition-all duration-200"
              />
              {err.rollnumber && <p className="text-sm text-red-600 mt-1">{err.rollnumber}</p>}
            </div>
              
            {/* Submit */}
            <Button
              type="submit"
              className="w-full h-10 sm:h-11 lg:h-12 mt-6 sm:mt-8 bg-purple-700 hover:bg-purple-800 active:bg-purple-900 text-white font-semibold rounded-lg shadow-lg transition duration-300 text-sm sm:text-base lg:text-lg"
            >
              Sign Up
            </Button>
          </form>

          {/* Link to Login */}
          <div className="mt-4 sm:mt-6 text-center">
            <Link
              to="/student/login"
              className="text-sm sm:text-base text-purple-300 hover:text-purple-200 underline underline-offset-2 transition-colors duration-200"
            >
              Already have an account? Log in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
