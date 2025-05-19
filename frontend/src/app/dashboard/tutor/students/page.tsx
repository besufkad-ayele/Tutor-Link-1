import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Search, Filter, MoreHorizontal, BarChart2, Calendar, Plus, FileText } from "lucide-react"
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

export default function StudentManagement() {
  return (
    <DashboardLayout role="tutor">
      <div className="container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Student Management</h1>
            <p className="text-gray-500">Manage your students and track their progress</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button className="bg-black text-white hover:bg-[#c1d86f] hover:text-black">
              <Plus className="h-4 w-4 mr-2" />
              Add New Student
            </Button>
            <Button variant="outline" className="border-black text-black hover:bg-black/10">
              <FileText className="h-4 w-4 mr-2" />
              Generate Reports
            </Button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input placeholder="Search students..." className="pl-10" />
          </div>
          <Button variant="outline" className="border-gray-300">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Student Management Tabs */}
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="active" className="data-[state=active]:bg-black/10 data-[state=active]:text-black">
              <Users className="h-4 w-4 mr-2" />
              Active Students
            </TabsTrigger>
            <TabsTrigger value="progress" className="data-[state=active]:bg-black/10 data-[state=active]:text-black">
              <BarChart2 className="h-4 w-4 mr-2" />
              Progress Tracking
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-black/10 data-[state=active]:text-black">
              <Calendar className="h-4 w-4 mr-2" />
              Upcoming Sessions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            <Card>
              <CardHeader>
                <CardTitle>Active Students</CardTitle>
                <CardDescription>Students currently enrolled in your tutoring sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      name: "Emma Smith",
                      grade: "9th Grade",
                      subjects: ["Mathematics", "Science"],
                      sessions: 12,
                      nextSession: "Today, 4:00 PM",
                      progress: 75,
                    },
                    {
                      name: "Alex Johnson",
                      grade: "10th Grade",
                      subjects: ["Mathematics"],
                      sessions: 8,
                      nextSession: "Today, 5:30 PM",
                      progress: 68,
                    },
                    {
                      name: "Jack Smith",
                      grade: "5th Grade",
                      subjects: ["Science"],
                      sessions: 15,
                      nextSession: "Tomorrow, 3:30 PM",
                      progress: 82,
                    },
                    {
                      name: "Sophia Williams",
                      grade: "12th Grade",
                      subjects: ["Mathematics", "Physics"],
                      sessions: 20,
                      nextSession: "Today, 7:00 PM",
                      progress: 90,
                    },
                    {
                      name: "Noah Brown",
                      grade: "8th Grade",
                      subjects: ["Mathematics"],
                      sessions: 6,
                      nextSession: "May 15, 4:00 PM",
                      progress: 65,
                    },
                    {
                      name: "Olivia Davis",
                      grade: "11th Grade",
                      subjects: ["Chemistry", "Physics"],
                      sessions: 10,
                      nextSession: "May 14, 5:00 PM",
                      progress: 78,
                    },
                  ].map((student, index) => (
                    <Card key={index} className="overflow-hidden border shadow-sm">
                      <div className="bg-black/5 px-4 py-3 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={student.name} />
                            <AvatarFallback className="bg-black text-white">{student.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-medium">{student.name}</h3>
                            <p className="text-xs text-gray-500">{student.grade}</p>
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View Profile</DropdownMenuItem>
                            <DropdownMenuItem>Schedule Session</DropdownMenuItem>
                            <DropdownMenuItem>Send Message</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Generate Report</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div>
                            <div className="text-sm text-gray-500 mb-1">Subjects</div>
                            <div className="flex flex-wrap gap-1">
                              {student.subjects.map((subject, idx) => (
                                <Badge key={idx} variant="outline" className="bg-black/5">
                                  {subject}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">Sessions Completed</span>
                            <span className="font-medium">{student.sessions}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">Next Session</span>
                            <span className="font-medium">{student.nextSession}</span>
                          </div>
                          <div>
                            <div className="flex justify-between items-center text-sm mb-1">
                              <span className="text-gray-500">Progress</span>
                              <span className="font-medium">{student.progress}%</span>
                            </div>
                            <Progress value={student.progress} className="h-1.5" />
                          </div>
                          <div className="pt-2">
                            <Button className="w-full bg-black text-white hover:bg-[#c1d86f] hover:text-black">
                              View Details
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

          <TabsContent value="progress">
            <Card>
              <CardHeader>
                <CardTitle>Student Progress Tracking</CardTitle>
                <CardDescription>Track and manage your students' learning progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      name: "Emma Smith",
                      grade: "9th Grade",
                      subject: "Mathematics",
                      topics: [
                        { name: "Algebra Basics", progress: 100, status: "Completed" },
                        { name: "Linear Equations", progress: 85, status: "In Progress" },
                        { name: "Quadratic Equations", progress: 60, status: "In Progress" },
                        { name: "Geometry Concepts", progress: 25, status: "In Progress" },
                        { name: "Trigonometry", progress: 0, status: "Not Started" },
                      ],
                      overallProgress: 75,
                      lastAssessment: "May 8, 2025",
                      nextAssessment: "May 15, 2025",
                    },
                    {
                      name: "Alex Johnson",
                      grade: "10th Grade",
                      subject: "Mathematics",
                      topics: [
                        { name: "Algebra Basics", progress: 100, status: "Completed" },
                        { name: "Linear Equations", progress: 100, status: "Completed" },
                        { name: "Quadratic Equations", progress: 75, status: "In Progress" },
                        { name: "Geometry Concepts", progress: 40, status: "In Progress" },
                        { name: "Trigonometry", progress: 0, status: "Not Started" },
                      ],
                      overallProgress: 68,
                      lastAssessment: "May 9, 2025",
                      nextAssessment: "May 16, 2025",
                    },
                    {
                      name: "Jack Smith",
                      grade: "5th Grade",
                      subject: "Science",
                      topics: [
                        { name: "Scientific Method", progress: 100, status: "Completed" },
                        { name: "Earth Science", progress: 100, status: "Completed" },
                        { name: "Life Science", progress: 90, status: "In Progress" },
                        { name: "Physical Science", progress: 40, status: "In Progress" },
                        { name: "Environmental Science", progress: 0, status: "Not Started" },
                      ],
                      overallProgress: 82,
                      lastAssessment: "May 7, 2025",
                      nextAssessment: "May 14, 2025",
                    },
                  ].map((student, index) => (
                    <div key={index} className="p-4 rounded-md border bg-white">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-64">
                          <div className="flex items-center gap-3 mb-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={student.name} />
                              <AvatarFallback className="bg-black text-white">{student.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-medium">{student.name}</h3>
                              <p className="text-xs text-gray-500">
                                {student.grade} • {student.subject}
                              </p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div>
                              <div className="text-sm text-gray-500 mb-1">Overall Progress</div>
                              <div className="flex items-center gap-2">
                                <Progress
                                  value={student.overallProgress}
                                  className="h-2 flex-1"
                                />
                                <span className="text-sm font-medium">{student.overallProgress}%</span>
                              </div>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Last Assessment</span>
                              <span>{student.lastAssessment}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Next Assessment</span>
                              <span>{student.nextAssessment}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex-1">
                          <h4 className="font-medium mb-3">Topic Progress</h4>
                          <div className="space-y-3">
                            {student.topics.map((topic, idx) => (
                              <div key={idx} className="p-3 border rounded-md">
                                <div className="flex justify-between items-center mb-1">
                                  <span className="font-medium">{topic.name}</span>
                                  <Badge
                                    className={
                                      topic.status === "Completed"
                                        ? "bg-green-100 text-green-600"
                                        : topic.status === "In Progress"
                                          ? "bg-blue-100 text-blue-600"
                                          : "bg-gray-100 text-gray-600"
                                    }
                                  >
                                    {topic.status}
                                  </Badge>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Progress
                                    value={topic.progress}
                                    className="h-2 flex-1"
                        
                                  />
                                  <span className="text-sm">{topic.progress}%</span>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="flex justify-end mt-4 gap-2">
                            <Button variant="outline">Add Assessment</Button>
                            <Button variant="outline">Update Progress</Button>
                            <Button className="bg-black text-white hover:bg-[#c1d86f] hover:text-black">
                              View Full Report
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="upcoming">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Sessions</CardTitle>
                <CardDescription>Sessions scheduled with your students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "SES-4582",
                      student: "Emma Smith",
                      subject: "Mathematics",
                      topic: "Algebra: Quadratic Equations",
                      date: "Today",
                      time: "4:00 PM - 5:00 PM",
                      status: "Upcoming",
                    },
                    {
                      id: "SES-4583",
                      student: "Alex Johnson",
                      subject: "Mathematics",
                      topic: "Geometry: Triangles and Circles",
                      date: "Today",
                      time: "5:30 PM - 6:30 PM",
                      status: "Upcoming",
                    },
                    {
                      id: "SES-4584",
                      student: "Jack Smith",
                      subject: "Science",
                      topic: "Chemistry: Periodic Table",
                      date: "Tomorrow",
                      time: "3:30 PM - 4:30 PM",
                      status: "Upcoming",
                    },
                    {
                      id: "SES-4585",
                      student: "Sophia Williams",
                      subject: "Mathematics",
                      topic: "Calculus: Derivatives",
                      date: "Today",
                      time: "7:00 PM - 8:00 PM",
                      status: "Upcoming",
                    },
                    {
                      id: "SES-4586",
                      student: "Noah Brown",
                      subject: "Mathematics",
                      topic: "Algebra: Linear Equations",
                      date: "May 15, 2025",
                      time: "4:00 PM - 5:00 PM",
                      status: "Scheduled",
                    },
                    {
                      id: "SES-4587",
                      student: "Olivia Davis",
                      subject: "Chemistry",
                      topic: "Chemical Bonding",
                      date: "May 14, 2025",
                      time: "5:00 PM - 6:00 PM",
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
                              <p className="text-sm text-gray-600">Student: {session.student}</p>
                              <p className="text-sm text-gray-600 mt-1">Topic: {session.topic}</p>
                              <p className="text-xs text-gray-500 mt-1">Session ID: {session.id}</p>
                            </div>
                            <div className="flex gap-2">
                              {session.status === "Upcoming" ? (
                                <Button size="sm" className="bg-black text-white hover:bg-[#c1d86f] hover:text-black">
                                  Start
                                </Button>
                              ) : (
                                <Button size="sm" variant="outline" className="border-black text-black">
                                  Prepare
                                </Button>
                              )}
                              <Button size="sm" variant="outline">
                                Reschedule
                              </Button>
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
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
