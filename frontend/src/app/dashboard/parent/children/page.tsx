import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Search, Plus, MoreHorizontal, BarChart2, Clock, Calendar, School, MessageSquare } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"


export default function ChildrenManagement() {
  return (
    <DashboardLayout role="parent">
      <div className="container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Children Management</h1>
            <p className="text-gray-500">Manage your children's education and progress</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button  className="bg-[#a39800] text-white hover:bg-[#c1d86f] hover:text-black">
              <Plus className="h-4 w-4 mr-2" />
              Add Child
            </Button>
            <Button variant="outline" className="border-[#a39800] text-[#a39800] hover:bg-[#a39800]/10">
              <School className="h-4 w-4 mr-2" />
              Find Tutors
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-6 max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input placeholder="Search children or tutors..." className="pl-10" />
        </div>

        {/* Children Overview */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Children Overview</CardTitle>
            <CardDescription>Your children's profiles and progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  name: "Emma Smith",
                  age: 14,
                  grade: "9th Grade",
                  school: "Lincoln High School",
                  subjects: ["Mathematics", "Science"],
                  progress: 72,
                  nextSession: "Today, 4:00 PM - Mathematics",
                  activeTutors: 2,
                },
                {
                  name: "Jack Smith",
                  age: 10,
                  grade: "5th Grade",
                  school: "Washington Elementary",
                  subjects: ["English", "Science"],
                  progress: 85,
                  nextSession: "Tomorrow, 3:30 PM - English",
                  activeTutors: 2,
                },
              ].map((child, index) => (
                <div key={index} className="p-4 rounded-md border bg-white">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={`/placeholder.svg?height=64&width=64`} alt={child.name} />
                      <AvatarFallback className="bg-[#a39800] text-white text-xl">
                        {child.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-lg font-semibold">{child.name}</h3>
                          <p className="text-sm text-gray-600">
                            {child.age} years • {child.grade} • {child.school}
                          </p>
                        </div>
                        <div className="mt-2 md:mt-0 flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-[#a39800] text-[#a39800] hover:bg-[#a39800]/10"
                          >
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Message Tutors
                          </Button>
                          <Button size="sm" className="bg-[#a39800] text-white hover:bg-[#c1d86f] hover:text-black">
                            View Profile
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div>
                          <div className="text-sm text-gray-500 mb-1">Subjects</div>
                          <div className="flex flex-wrap gap-1">
                            {child.subjects.map((subject, idx) => (
                              <Badge key={idx} variant="outline" className="bg-[#a39800]/10">
                                {subject}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="text-sm text-gray-500 mb-1">Overall Progress</div>
                          <div className="flex items-center gap-2">
                            <Progress value={child.progress} className="h-2 flex-1" />
                            <span className="text-sm font-medium">{child.progress}%</span>
                          </div>
                        </div>

                        <div>
                          <div className="text-sm text-gray-500 mb-1">Next Session</div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-[#a39800]" />
                            <span className="text-sm">{child.nextSession}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t">
                        <div className="flex justify-between items-center">
                          <div className="text-sm">
                            <span className="text-gray-500">Active Tutors:</span>{" "}
                            <span className="font-medium">{child.activeTutors}</span>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-[#a39800] text-[#a39800] hover:bg-[#a39800]/10"
                            >
                              <Calendar className="h-4 w-4 mr-2" />
                              Schedule Session
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-[#a39800] text-[#a39800] hover:bg-[#a39800]/10"
                            >
                              <School className="h-4 w-4 mr-2" />
                              Find New Tutor
                            </Button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                                <DropdownMenuItem>View Progress Report</DropdownMenuItem>
                                <DropdownMenuItem>View Session History</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600">Remove Child</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Detailed Information Tabs */}
        {/* <Tabs defaultValue="progress" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger
              value="progress"
              className="data-[state=active]:bg-[#a39800]/10 data-[state=active]:text-[#a39800]"
            >
              <BarChart2 className="h-4 w-4 mr-2" />
              Academic Progress
            </TabsTrigger>
            <TabsTrigger
              value="sessions"
              className="data-[state=active]:bg-[#a39800]/10 data-[state=active]:text-[#a39800]"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Upcoming Sessions
            </TabsTrigger>
            <TabsTrigger
              value="tutors"
              className="data-[state=active]:bg-[#a39800]/10 data-[state=active]:text-[#a39800]"
            >
              <Users className="h-4 w-4 mr-2" />
              Current Tutors
            </TabsTrigger>
          </TabsList>

          <TabsContent value="progress">
            <Card>
              <CardHeader>
                <CardTitle>Academic Progress</CardTitle>
                <CardDescription>Track your children's learning progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {[
                    {
                      name: "Emma Smith",
                      subjects: [
                        {
                          name: "Mathematics",
                          progress: 72,
                          topics: [
                            { name: "Algebra", progress: 85 },
                            { name: "Geometry", progress: 65 },
                            { name: "Statistics", progress: 60 },
                          ],
                          tutor: "Mr. Johnson",
                          lastAssessment: "May 8, 2025",
                        },
                        {
                          name: "Science",
                          progress: 78,
                          topics: [
                            { name: "Chemistry", progress: 80 },
                            { name: "Physics", progress: 75 },
                            { name: "Biology", progress: 70 },
                          ],
                          tutor: "Ms. Williams",
                          lastAssessment: "May 5, 2025",
                        },
                      ],
                    },
                    {
                      name: "Jack Smith",
                      subjects: [
                        {
                          name: "English",
                          progress: 85,
                          topics: [
                            { name: "Grammar", progress: 90 },
                            { name: "Vocabulary", progress: 85 },
                            { name: "Reading Comprehension", progress: 80 },
                          ],
                          tutor: "Ms. Davis",
                          lastAssessment: "May 7, 2025",
                        },
                        {
                          name: "Science",
                          progress: 80,
                          topics: [
                            { name: "Earth Science", progress: 85 },
                            { name: "Life Science", progress: 80 },
                            { name: "Physical Science", progress: 75 },
                          ],
                          tutor: "Mr. Chen",
                          lastAssessment: "May 6, 2025",
                        },
                      ],
                    },
                  ].map((child, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold mb-4">{child.name}'s Progress</h3>
                      <div className="space-y-6">
                        {child.subjects.map((subject, subjectIndex) => (
                          <div key={subjectIndex} className="p-4 border rounded-md">
                      indicatorClassName="bg-[#a39800]"       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                              <div>
                                <h4 className="font-medium">{subject.name}</h4>
                                <p className="text-sm text-gray-500">
                                  Tutor: {subject.tutor} • Last Assessment: {subject.lastAssessment}
                                </p>
                              </div>
                              <div className="mt-2 md:mt-0 flex items-center">
                                <div className="mr-4">
                                  <span className="text-sm text-gray-500">Overall Progress:</span>
                                  <span className="ml-2 font-medium">{subject.progress}%</span>
                                </div>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-[#a39800] text-[#a39800] hover:bg-[#a39800]/10"
                                >
                                  View Details
                                </Button>
                              </div>
                            </div>

                            <div className="space-y-3">
                              {subject.topics.map((topic, topicIndex) => (
                                <div key={topicIndex}>
                                  <div className="flex justify-between items-center mb-1">
                                    <span className="text-sm">{topic.name}</span>
                                    <span className="text-sm">{topic.progress}%</span>
                                  </div>
                                  <Progress value={topic.progress} className="h-2" />
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sessions">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Sessions</CardTitle>
                <CardDescription>Scheduled tutoring sessions for your children</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "SES-4582",
                      child: "Emma Smith",
                      subject: "Mathematics",
                      topic: "Algebra: Quadratic Equations",
                      tutor: "Mr. Johnson",
                      date: "Today",
                      time: "4:00 PM - 5:00 PM",
                      status: "Upcoming",
                    },
                    {
                      id: "SES-4584",
                      child: "Jack Smith",
                      subject: "English",
                      topic: "Grammar: Verb Tenses",
                      tutor: "Ms. Davis",
                      date: "Tomorrow",
                      time: "3:30 PM - 4:30 PM",
                      status: "Upcoming",
                    },
                    {
                      id: "SES-4585",
                      child: "Emma Smith",
                      subject: "Science",
                      topic: "Chemistry: Chemical Reactions",
                      tutor: "Ms. Williams",
                      date: "May 14, 2025",
                      time: "4:00 PM - 5:00 PM",
                      status: "Scheduled",
                    },
                    {
                      id: "SES-4586",
                      child: "Jack Smith",
                      subject: "Science",
                      topic: "Earth Science: Weather Patterns",
                      tutor: "Mr. Chen",
                      date: "May 15, 2025",
                      time: "3:30 PM - 4:30 PM",
                      status: "Scheduled",
                    },
                  ].map((session, index) => (
                    <div key={index} className="p-4 rounded-md border bg-white">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-32 flex-shrink-0">
                          <div className="text-sm font-medium">{session.date}</div>
                          <div className="text-sm">{session.time}</div>
                          <Badge
                            className={
                              session.status === "Upcoming"
                                ? "mt-2 bg-yellow-100 text-yellow-800"
                                : "mt-2 bg-blue-100 text-blue-800"
                            }
                          >
                            {session.status}
                          </Badge>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold">{session.subject}</h4>
                              <div className="flex items-center mt-1">
                                <Avatar className="h-6 w-6 mr-2">
                                  <AvatarImage src={`/placeholder.svg?height=24&width=24`} alt={session.child} />
                                  <AvatarFallback className="bg-[#a39800] text-white">
                                    {session.child.charAt(0)}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="text-sm">{session.child}</span>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">Topic: {session.topic}</p>
                              <p className="text-sm text-gray-600 mt-1">Tutor: {session.tutor}</p>
                              <p className="text-xs text-gray-500 mt-1">Session ID: {session.id}</p>
                            </div>
                            <div className="flex gap-2">
                              {session.status === "Upcoming" ? (
                                <Button
                                  size="sm"
                                  className="bg-[#a39800] text-white hover:bg-[#c1d86f] hover:text-black"
                                >
                                  Join Session
                                </Button>
                              ) : (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-[#a39800] text-[#a39800] hover:bg-[#a39800]/10"
                                >
                                  Reminder
                                </Button>
                              )}
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuItem>
                                    <MessageSquare className="h-4 w-4 mr-2" />
                                    Message Tutor
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Calendar className="h-4 w-4 mr-2" />
                                    Reschedule
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-600">
                                    <Clock className="h-4 w-4 mr-2" />
                                    Cancel Session
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tutors">
            <Card>
              <CardHeader>
                <CardTitle>Current Tutors</CardTitle>
                <CardDescription>Tutors currently working with your children</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      name: "Mr. Johnson",
                      specialty: "Mathematics",
                      students: ["Emma Smith"],
                      rating: 4.9,
                      reviews: 124,
                      nextSession: "Today, 4:00 PM",
                      bio: "Experienced math teacher with 10+ years of experience specializing in algebra and calculus.",
                    },
                    {
                      name: "Ms. Williams",
                      specialty: "Science",
                      students: ["Emma Smith"],
                      rating: 4.8,
                      reviews: 98,
                      nextSession: "May 14, 4:00 PM",
                      bio: "PhD in Chemistry with a passion for making complex scientific concepts accessible to students.",
                    },
                    {
                      name: "Ms. Davis",
                      specialty: "English",
                      students: ["Jack Smith"],
                      rating: 4.7,
                      reviews: 87,
                      nextSession: "Tomorrow, 3:30 PM",
                      bio: "English literature graduate with specialized training in teaching grammar and writing skills.",
                    },
                    {
                      name: "Mr. Chen",
                      specialty: "Science",
                      students: ["Jack Smith"],
                      rating: 4.9,
                      reviews: 112,
                      nextSession: "May 15, 3:30 PM",
                      bio: "Science educator with expertise in earth science and environmental studies.",
                    },
                  ].map((tutor, index) => (
                    <Card key={index} className="overflow-hidden border shadow-sm">
                      <div className="bg-[#a39800]/10 px-4 py-3 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={tutor.name} />
                            <AvatarFallback className="bg-black text-white">{tutor.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-medium">{tutor.name}</h3>
                            <p className="text-xs text-gray-500">{tutor.specialty}</p>
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill={i < Math.floor(tutor.rating) ? "#a39800" : "none"}
                              stroke="#a39800"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="mr-0.5"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                          ))}
                          <span className="text-xs ml-1">
                            {tutor.rating} ({tutor.reviews})
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div>
                            <div className="text-sm text-gray-500 mb-1">Teaching</div>
                            <div className="flex flex-wrap gap-1">
                              {tutor.students.map((student, idx) => (
                                <Badge key={idx} variant="outline" className="bg-[#a39800]/5">
                                  {student}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">Next Session</span>
                            <span className="font-medium">{tutor.nextSession}</span>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 mb-1">About</div>
                            <p className="text-sm">{tutor.bio}</p>
                          </div>
                          <div className="pt-2 flex gap-2">
                            <Button
                              className="flex-1 bg-[#a39800] text-white hover:bg-[#c1d86f] hover:text-black"
                              size="sm"
                            >
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Message
                            </Button>
                            <Button
                              variant="outline"
                              className="flex-1 border-[#a39800] text-[#a39800] hover:bg-[#a39800]/10"
                              size="sm"
                            >
                              <Calendar className="h-4 w-4 mr-2" />
                              Schedule
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs> */}
      </div>
    </DashboardLayout>
  )
}
