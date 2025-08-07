import React, { useState } from "react";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Eye,
  MessageSquare,
  User,
  LogOut,
  Timer,
} from "lucide-react";

const subjects = [
  { id: 1, name: "Mathematics", views: 123, duration: "3h 20m" },
  { id: 2, name: "Physics", views: 98, duration: "2h 45m" },
  { id: 3, name: "Chemistry", views: 75, duration: "4h 10m" },
  { id: 4, name: "Biology", views: 88, duration: "3h 0m" },
  { id: 5, name: "Computer Science", views: 140, duration: "5h 15m" },
  { id: 6, name: "English Literature", views: 67, duration: "2h 35m" },
];

export default function DashboardPage() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

  const filteredSubjects = subjects
    .filter((subject) =>
      subject.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "views") return b.views - a.views;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "duration") {
        const getMinutes = (time) => {
          const [h, m] = time.split("h ").join("").split("m");
          return parseInt(h || "0") * 60 + parseInt(m || "0");
        };
        return getMinutes(b.duration) - getMinutes(a.duration);
      }
      return 0;
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 md:px-8 py-6">

      {/* Top Controls */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-10">
        {/* Search & Sort */}
        <div className="flex flex-col sm:flex-row w-full md:max-w-3xl gap-3">
          <Input
            type="search"
            placeholder="Search subjects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 rounded-full px-6 py-3 text-base shadow-sm"
          />

          <Select onValueChange={(val) => setSortBy(val)}>
            <SelectTrigger className="w-full sm:w-44 bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 text-white border-gray-700">
              <SelectItem value="views">Most Viewed</SelectItem>
              <SelectItem value="name">Alphabetical</SelectItem>
              <SelectItem value="duration">Duration</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Avatar - Hidden on small screens */}
        <div className="self-end md:self-auto hidden md:block">
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer w-9 h-9 ring-2 ring-purple-500 ring-offset-2 ring-offset-gray-900 transition-transform hover:scale-105">
                <AvatarImage src="https://github.com/shadcn.png" alt="User Profile" />
                <AvatarFallback className="bg-purple-700 text-white font-semibold">
                  JD
                </AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-4 bg-gray-800 border border-gray-700 rounded-lg shadow-2xl">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback className="bg-purple-700 text-white">JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-white text-sm truncate">John Doe</div>
                    <div className="text-xs text-gray-400">Student</div>
                  </div>
                </div>
                <div className="text-xs text-gray-400 truncate">john.doe@example.com</div>
                <div className="pt-3 border-t border-gray-700 space-y-2">
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white border-gray-600"
                  >
                    <User className="w-4 h-4" />
                    View Profile
                  </Button>
                  <Button
                    variant="destructive"
                    className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredSubjects.map(({ id, name, views, duration }) => (
          <Card
            key={id}
            className="bg-gray-800 border border-gray-700 rounded-2xl shadow-md hover:shadow-purple-900/30 transform transition-all duration-300 hover:scale-105"
          >
            <CardContent className="p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-bold text-white text-center mb-3">{name}</h3>
                <div className="flex items-center justify-center gap-6 text-gray-400 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>{views} views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Timer className="w-4 h-4"/>
                    <span>{duration}</span>
                  </div>
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-3">
                <Button className="w-full bg-purple-700 hover:bg-purple-800 active:bg-purple-900 text-white font-semibold py-2 rounded-lg transition-all duration-200">
                  View
                </Button>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2 bg-transparent border-2 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white font-semibold py-2 rounded-lg transition-all duration-200"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredSubjects.length === 0 && (
        <div className="text-center text-gray-400 mt-12">
          <p className="text-lg font-medium">No subjects found matching your search.</p>
        </div>
      )}
    </div>
  );
}
