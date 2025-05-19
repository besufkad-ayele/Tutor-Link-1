import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Video,
  MapPin,
  CheckCircle,
  XCircle,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function SessionManagement() {
  return (
    <DashboardLayout role="parent">
      <div className="container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Session Management</h1>
            <p className="text-gray-500">
              Manage your children's tutoring sessions
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button className="bg-[#a39800] text-white hover:bg-[#c1d86f] hover:text-black">
              <Plus className="h-4 w-4 mr-2" />
              Schedule New Session
            </Button>
          </div>
        </div>

        {/* Calendar Navigation */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <h2 className="text-lg font-semibold">May 2025</h2>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex gap-2 mt-4 md:mt-0">
                <Button
                  variant="outline"
                  className="border-[#a39800] text-[#a39800]"
                >
                  Today
                </Button>
                <Select defaultValue="month">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="View" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="day">Day</SelectItem>
                    <SelectItem value="week">Week</SelectItem>
                    <SelectItem value="month">Month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Calendar Placeholder */}
            <div className="border rounded-md p-4 h-64 flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500">
                  Calendar view would be displayed here
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Showing sessions for May 2025
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input placeholder="Search sessions..." className="pl-10" />
          </div>
          <div className="flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Child" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Children</SelectItem>
                <SelectItem value="emma">Emma Smith</SelectItem>
                <SelectItem value="jack">Jack Smith</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="border-gray-300">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        {/* Sessions Tabs */}
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger
              value="upcoming"
              className="data-[state=active]:bg-[#a39800]/20 data-[state=active]:text-[#a39800]"
            >
              Upcoming
            </TabsTrigger>
            <TabsTrigger
              value="pending"
              className="data-[state=active]:bg-[#a39800]/20 data-[state=active]:text-[#a39800]"
            >
              Pending Approval
            </TabsTrigger>
            <TabsTrigger
              value="past"
              className="data-[state=active]:bg-[#a39800]/20 data-[state=active]:text-[#a39800]"
            >
              Past Sessions
            </TabsTrigger>
            <TabsTrigger
              value="canceled"
              className="data-[state=active]:bg-[#a39800]/20 data-[state=active]:text-[#a39800]"
            >
              Canceled
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Sessions</CardTitle>
                <CardDescription>
                  Sessions scheduled for your children
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: 1,
                      child: "Emma Smith",
                      subject: "Mathematics",
                      topic: "Algebra: Quadratic Equations",
                      tutor: "Mr. Johnson",
                      tutorAvatar: "/placeholder.svg?height=40&width=40",
                      date: "May 14, 2025",
                      time: "4:00 PM - 5:00 PM",
                      type: "Online",
                      status: "Confirmed",
                    },
                    {
                      id: 2,
                      child: "Jack Smith",
                      subject: "English",
                      topic: "Essay Writing: Structure and Flow",
                      tutor: "Ms. Davis",
                      tutorAvatar: "/placeholder.svg?height=40&width=40",
                      date: "May 15, 2025",
                      time: "3:30 PM - 4:30 PM",
                      type: "Online",
                      status: "Confirmed",
                    },
                    {
                      id: 3,
                      child: "Emma Smith",
                      subject: "Science",
                      topic: "Chemistry: Periodic Table",
                      tutor: "Ms. Williams",
                      tutorAvatar: "/placeholder.svg?height=40&width=40",
                      date: "May 17, 2025",
                      time: "10:00 AM - 11:00 AM",
                      type: "In-person",
                      location: "Local Library",
                      status: "Confirmed",
                    },
                  ].map((session) => (
                    <div
                      key={session.id}
                      className="p-4 rounded-md border bg-white"
                    >
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-32 flex-shrink-0">
                          <div className="text-sm font-medium">
                            {session.date}
                          </div>
                          <div className="text-sm text-gray-500">
                            {session.time}
                          </div>
                          <Badge
                            className={
                              session.status === "Confirmed"
                                ? "bg-green-100 text-green-800 mt-2"
                                : "bg-yellow-100 text-yellow-800 mt-2"
                            }
                          >
                            {session.status}
                          </Badge>
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                              <h3 className="font-semibold">
                                {session.subject} - {session.child}
                              </h3>
                              <p className="text-sm text-gray-600">
                                Topic: {session.topic}
                              </p>
                            </div>
                            <div className="mt-2 md:mt-0 flex gap-2">
                              <Button
                                size="sm"
                                className="bg-[#a39800] text-white hover:bg-[#c1d86f] hover:text-black"
                              >
                                {session.type === "Online" ? (
                                  <>
                                    <Video className="h-4 w-4 mr-2" />
                                    Join
                                  </>
                                ) : (
                                  <>
                                    <MapPin className="h-4 w-4 mr-2" />
                                    Directions
                                  </>
                                )}
                              </Button>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button size="sm" variant="outline">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    View Details
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    Reschedule
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-600">
                                    Cancel Session
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>

                          <div className="mt-3 flex items-center text-sm">
                            <Avatar className="h-6 w-6 mr-2">
                              <AvatarImage
                                src={session.tutorAvatar || "/placeholder.svg"}
                                alt={session.tutor}
                              />
                              <AvatarFallback className="bg-black text-white">
                                {session.tutor.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <span>Tutor: {session.tutor}</span>
                            {session.type === "In-person" && (
                              <span className="ml-4 flex items-center">
                                <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                                {session.location}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pending">
            <Card>
              <CardHeader>
                <CardTitle>Pending Approval</CardTitle>
                <CardDescription>
                  Sessions that need your approval
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: 1,
                      child: "Jack Smith",
                      subject: "Science",
                      topic: "Biology: Ecosystems",
                      tutor: "Ms. Williams",
                      tutorAvatar: "/placeholder.svg?height=40&width=40",
                      date: "May 18, 2025",
                      time: "3:00 PM - 4:00 PM",
                      type: "Online",
                      cost: "$40",
                    },
                    {
                      id: 2,
                      child: "Emma Smith",
                      subject: "Mathematics",
                      topic: "Geometry: Triangles and Circles",
                      tutor: "Mr. Johnson",
                      tutorAvatar: "/placeholder.svg?height=40&width=40",
                      date: "May 20, 2025",
                      time: "4:30 PM - 5:30 PM",
                      type: "Online",
                      cost: "$45",
                    },
                  ].map((session) => (
                    <div
                      key={session.id}
                      className="p-4 rounded-md border bg-white"
                    >
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-32 flex-shrink-0">
                          <div className="text-sm font-medium">
                            {session.date}
                          </div>
                          <div className="text-sm text-gray-500">
                            {session.time}
                          </div>
                          <Badge className="bg-yellow-100 text-yellow-800 mt-2">
                            Pending
                          </Badge>
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                              <h3 className="font-semibold">
                                {session.subject} - {session.child}
                              </h3>
                              <p className="text-sm text-gray-600">
                                Topic: {session.topic}
                              </p>
                              <p className="text-sm text-gray-600">
                                Session Cost:{" "}
                                <span className="font-medium">
                                  {session.cost}
                                </span>
                              </p>
                            </div>
                            <div className="mt-2 md:mt-0 flex gap-2">
                              <Button
                                size="sm"
                                className="bg-green-600 text-white hover:bg-green-700"
                              >
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Approve
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-red-600 text-red-600 hover:bg-red-50"
                              >
                                <XCircle className="h-4 w-4 mr-2" />
                                Decline
                              </Button>
                            </div>
                          </div>

                          <div className="mt-3 flex items-center text-sm">
                            <Avatar className="h-6 w-6 mr-2">
                              <AvatarImage
                                src={session.tutorAvatar || "/placeholder.svg"}
                                alt={session.tutor}
                              />
                              <AvatarFallback className="bg-black text-white">
                                {session.tutor.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <span>Tutor: {session.tutor}</span>
                            <span className="ml-4 flex items-center">
                              <Video className="h-4 w-4 mr-1 text-gray-500" />
                              {session.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="past">
            <Card>
              <CardHeader>
                <CardTitle>Past Sessions</CardTitle>
                <CardDescription>Completed tutoring sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: 1,
                      child: "Emma Smith",
                      subject: "Mathematics",
                      topic: "Algebra: Linear Equations",
                      tutor: "Mr. Johnson",
                      tutorAvatar: "/placeholder.svg?height=40&width=40",
                      date: "May 7, 2025",
                      time: "4:00 PM - 5:00 PM",
                      type: "Online",
                      status: "Completed",
                      feedback:
                        "Excellent progress on understanding linear equations.",
                    },
                    {
                      id: 2,
                      child: "Jack Smith",
                      subject: "English",
                      topic: "Reading Comprehension",
                      tutor: "Ms. Davis",
                      tutorAvatar: "/placeholder.svg?height=40&width=40",
                      date: "May 5, 2025",
                      time: "3:30 PM - 4:30 PM",
                      type: "Online",
                      status: "Completed",
                      feedback:
                        "Good session. Jack is improving his analytical reading skills.",
                    },
                    {
                      id: 3,
                      child: "Emma Smith",
                      subject: "Science",
                      topic: "Chemistry: Elements and Compounds",
                      tutor: "Ms. Williams",
                      tutorAvatar: "/placeholder.svg?height=40&width=40",
                      date: "May 3, 2025",
                      time: "10:00 AM - 11:00 AM",
                      type: "In-person",
                      location: "Local Library",
                      status: "Completed",
                      feedback:
                        "Emma showed great interest in chemical reactions. We completed all planned activities.",
                    },
                  ].map((session) => (
                    <div
                      key={session.id}
                      className="p-4 rounded-md border bg-white"
                    >
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-32 flex-shrink-0">
                          <div className="text-sm font-medium">
                            {session.date}
                          </div>
                          <div className="text-sm text-gray-500">
                            {session.time}
                          </div>
                          <Badge className="bg-green-100 text-green-800 mt-2">
                            {session.status}
                          </Badge>
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                              <h3 className="font-semibold">
                                {session.subject} - {session.child}
                              </h3>
                              <p className="text-sm text-gray-600">
                                Topic: {session.topic}
                              </p>
                            </div>
                            <div className="mt-2 md:mt-0 flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-[#a39800] text-[#a39800] hover:bg-[#a39800]/10"
                              >
                                View Details
                              </Button>
                              <Button
                                size="sm"
                                className="bg-[#a39800] text-white hover:bg-[#c1d86f] hover:text-black"
                              >
                                Book Again
                              </Button>
                            </div>
                          </div>

                          <div className="mt-2">
                            <p className="text-sm text-gray-600">
                              <span className="font-medium">
                                Tutor Feedback:
                              </span>{" "}
                              {session.feedback}
                            </p>
                          </div>

                          <div className="mt-3 flex items-center text-sm">
                            <Avatar className="h-6 w-6 mr-2">
                              <AvatarImage
                                src={session.tutorAvatar || "/placeholder.svg"}
                                alt={session.tutor}
                              />
                              <AvatarFallback className="bg-black text-white">
                                {session.tutor.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <span>Tutor: {session.tutor}</span>
                            {session.type === "In-person" ? (
                              <span className="ml-4 flex items-center">
                                <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                                {session.location}
                              </span>
                            ) : (
                              <span className="ml-4 flex items-center">
                                <Video className="h-4 w-4 mr-1 text-gray-500" />
                                {session.type}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="canceled">
            <Card>
              <CardHeader>
                <CardTitle>Canceled Sessions</CardTitle>
                <CardDescription>Sessions that were canceled</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: 1,
                      child: "Jack Smith",
                      subject: "Mathematics",
                      topic: "Fractions and Decimals",
                      tutor: "Mr. Johnson",
                      tutorAvatar: "/placeholder.svg?height=40&width=40",
                      date: "May 2, 2025",
                      time: "3:00 PM - 4:00 PM",
                      type: "Online",
                      status: "Canceled",
                      reason: "Child was sick",
                      canceledBy: "Parent",
                    },
                    {
                      id: 2,
                      child: "Emma Smith",
                      subject: "Science",
                      topic: "Physics: Forces and Motion",
                      tutor: "Ms. Williams",
                      tutorAvatar: "/placeholder.svg?height=40&width=40",
                      date: "April 28, 2025",
                      time: "4:30 PM - 5:30 PM",
                      type: "Online",
                      status: "Canceled",
                      reason: "Tutor unavailable",
                      canceledBy: "Tutor",
                    },
                  ].map((session) => (
                    <div
                      key={session.id}
                      className="p-4 rounded-md border bg-white"
                    >
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-32 flex-shrink-0">
                          <div className="text-sm font-medium">
                            {session.date}
                          </div>
                          <div className="text-sm text-gray-500">
                            {session.time}
                          </div>
                          <Badge className="bg-red-100 text-red-800 mt-2">
                            {session.status}
                          </Badge>
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                              <h3 className="font-semibold">
                                {session.subject} - {session.child}
                              </h3>
                              <p className="text-sm text-gray-600">
                                Topic: {session.topic}
                              </p>
                            </div>
                            <div className="mt-2 md:mt-0">
                              <Button
                                size="sm"
                                className="bg-[#a39800] text-white hover:bg-[#c1d86f] hover:text-black"
                              >
                                Reschedule
                              </Button>
                            </div>
                          </div>

                          <div className="mt-2 flex items-center">
                            <AlertCircle className="h-4 w-4 text-red-500 mr-2" />
                            <p className="text-sm text-gray-600">
                              <span className="font-medium">Reason:</span>{" "}
                              {session.reason} (Canceled by {session.canceledBy}
                              )
                            </p>
                          </div>

                          <div className="mt-3 flex items-center text-sm">
                            <Avatar className="h-6 w-6 mr-2">
                              <AvatarImage
                                src={session.tutorAvatar || "/placeholder.svg"}
                                alt={session.tutor}
                              />
                              <AvatarFallback className="bg-black text-white">
                                {session.tutor.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <span>Tutor: {session.tutor}</span>
                            <span className="ml-4 flex items-center">
                              <Video className="h-4 w-4 mr-1 text-gray-500" />
                              {session.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
