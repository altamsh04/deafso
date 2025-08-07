import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { BookOpen, Users, MessageCircle, TrendingUp, Star, Clock } from "lucide-react";

export default function HomePage() {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Interactive Learning",
      description: "Access comprehensive course materials and interactive content"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Tutors",
      description: "Connect with qualified tutors for personalized guidance"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Live Chat Support",
      description: "Get instant help through our integrated chat system"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Track Progress",
      description: "Monitor your learning journey with detailed analytics"
    }
  ];

  const stats = [
    { label: "Active Students", value: "1,200+", icon: <Users className="w-5 h-5" /> },
    { label: "Courses Available", value: "50+", icon: <BookOpen className="w-5 h-5" /> },
    { label: "Expert Tutors", value: "25+", icon: <Star className="w-5 h-5" /> },
    { label: "Study Hours", value: "10k+", icon: <Clock className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 text-sm">
            🚀 Your Learning Journey Starts Here
          </Badge>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
            Welcome to 
            <span className="bg-gradient-to-r from-purple-600 to-pink-400 bg-clip-text text-transparent"> DeafSo</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Transform your learning experience with our comprehensive platform. Access quality education, 
            connect with expert tutors, and achieve your academic goals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/student/dashboard">
              <Button className="w-full sm:w-auto bg-purple-700 hover:bg-purple-800 active:bg-purple-900 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
                Explore Dashboard
              </Button>
            </Link>
            
            <Link to="/student/signup">
              <Button 
                variant="outline"
                className="w-full sm:w-auto bg-transparent border-2 border-purple-500 text-purple-300 hover:bg-purple-700 hover:text-white font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105"
              >
                Get Started Free
              </Button>
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2 text-purple-400">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

     

      {/* Navigation Cards Section */}
      <div className="px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Quick Access
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg hover:shadow-purple-900/40 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Dashboard</h3>
                <p className="text-gray-400 text-sm">Access your subjects and course materials</p>
              </CardHeader>
              <CardContent className="flex justify-center pb-6">
                <Link to="/student/dashboard">
                  <Button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-8 py-2 rounded-lg">
                    Explore
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg hover:shadow-purple-900/40 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Login</h3>
                <p className="text-gray-400 text-sm">Sign in to your existing account</p>
              </CardHeader>
              <CardContent className="flex justify-center pb-6">
                <Link to="/student/login">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2 rounded-lg">
                    Sign In
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg hover:shadow-purple-900/40 transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Sign Up</h3>
                <p className="text-gray-400 text-sm">Create your new learning account</p>
              </CardHeader>
              <CardContent className="flex justify-center pb-6">
                <Link to="/student/signup">
                  <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-2 rounded-lg">
                    Join Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 px-6 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 EduHub. Made with ❤️ for better learning experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
