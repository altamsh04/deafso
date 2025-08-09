// src/pages/SignupPage.jsx
import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {z} from "zod"

const signupSchema=z.object({
    name:z.string().min(2,"Full name must be between 2 and 255 characters").max(255),
    email:z.string().email("Please provide a valid email address"),
    mobile:z.string().regex(/^[0-9]{10}$/,"Mobile Number must be 10 Digit"),
    password:z.string().min(6,"Password must be at least 6 characters long"),
});

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile:"",
    password:"",
  });
  const [err,setErr]=useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
    
  const handleChange = (e) =>
    setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
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
      
    } catch (error) {
      console.log(error);
      
    }finally{
      setIsSubmitting(false);
    }
    console.log("Sign-up data:", form); // replace with real sign-up logic
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-8 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black transition-all">
      <Card className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl shadow-purple-900/40 bg-gray-850 dark:bg-gray-800">
        <CardHeader className="pb-4 sm:pb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-white mb-4 sm:mb-6 tracking-wide leading-tight">
            Teacher SignUp!
          </h2>
        </CardHeader>

        <CardContent className="px-0">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 lg:space-y-6" noValidate>
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm sm:text-base font-semibold text-purple-300">
                Full Name
              </label>
              <Input
                id="name"
                placeholder="John Doe"
                type={"name"}
                value={form.name}
                onChange={handleChange}
                required
                className="w-full h-10 sm:h-11 lg:h-12 px-3 sm:px-4 bg-gray-900 border border-purple-700 text-white placeholder-purple-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 rounded-lg text-sm sm:text-base transition-all duration-200"
              />
              {err.name && <p className="text-xs text-red-600 mt-1">{err.name}</p>}

            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm sm:text-base font-semibold text-purple-300">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
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
              to="/teacher/login"
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
