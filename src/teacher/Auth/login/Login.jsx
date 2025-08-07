import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempted with:", { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-8 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black transition-all">
      <Card className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl shadow-purple-900/40 bg-gray-850 dark:bg-gray-800">
        <CardHeader className="pb-4 sm:pb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-white mb-4 sm:mb-6 tracking-wide leading-tight">
            Teacher Login!
          </h2>
        </CardHeader>
        <CardContent className="px-0">
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm sm:text-base font-semibold text-purple-300">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-10 sm:h-11 lg:h-12 px-3 sm:px-4 bg-gray-900 border border-purple-700 text-white placeholder-purple-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 rounded-lg text-sm sm:text-base transition-all duration-200"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm sm:text-base font-semibold text-purple-300">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full h-10 sm:h-11 lg:h-12 px-3 sm:px-4 bg-gray-900 border border-purple-700 text-white placeholder-purple-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 rounded-lg text-sm sm:text-base transition-all duration-200"
              />
            </div>
            <Button
              onClick={handleSubmit}
              className="w-full h-10 sm:h-11 lg:h-12 mt-6 sm:mt-8 bg-purple-700 hover:bg-purple-800 active:bg-purple-900 text-white font-semibold rounded-lg shadow-lg transition duration-300 text-sm sm:text-base lg:text-lg"
            >
              Login
            </Button>
          </div>
          <div className="mt-4 sm:mt-6 text-center">
            <Link to="/api/v1/teacher/signup" className="text-sm sm:text-base text-purple-300 hover:text-purple-200 transition-colors duration-200 underline underline-offset-2 bg-transparent border-none cursor-pointer">
                Don't have an account? Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}