import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Search,
  Filter,
  Plus,
  Clock,
  CheckCircle,
  XCircle,
  MoreHorizontal,
  FileText,
  Video,
  MessageSquare,
} from "lucide-react"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SessionManagement() {
  return (
    <DashboardLayout role="tutor">
      <div className="container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Session Management</h1>
            <p className="text-gray-500">Schedule, manage, and track your tutoring sessions</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button className="bg-black text-white hover:bg-[#c1d86f] hover:text-black">
              <Plus className="h-4 w-4 mr-2" />
              Schedule New Session
            </Button>
            <Button variant="outline" className="border-black text-black hover:bg-black/10">
              <Calendar className="h-4 w-4 mr-2" />
              View Calendar
            </Button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input placeholder="Search sessions..." className="pl-10" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sessions</SelectItem>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-gray-300">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Session Management Tabs */}
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-black/10 data-[state=active]:text-black">
              <Calendar className="h-4 w-4 mr-2" />
              Upcoming Sessions
            </TabsTrigger>
            <TabsTrigger value="completed" className="data-[state=active]:bg-black/10 data-[state=active]:text-black">
              <CheckCircle className="h-4 w-4 mr-2" />
              Completed Sessions
            </TabsTrigger>
            <TabsTrigger value="cancelled" className="data-[state=active]:bg-black/10 data-[state=active]:text-black">
              <XCircle className="h-4 w-4 mr-2" />
              Cancelled Sessions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Sessions</CardTitle>
                <CardDescription>Sessions scheduled for the coming days</CardDescription>
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
                              <div className="flex items-center mt-1">
                                <Avatar className="h-6 w-6 mr-2">
                                  <AvatarImage src={`/placeholder.svg?height=24&width=24`} alt={session.student} />
                                  <AvatarFallback className="bg-[#c1d86f] text-black">
                                    {session.student.charAt(0)}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="text-sm">{session.student}</span>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">Topic: {session.topic}</p>
                              <p className="text-xs text-gray-500 mt-1">Session ID: {session.id}</p>
                            </div>
                            <div className="flex gap-2">
                              {session.status === "Upcoming" ? (
                                <Button size="sm" className="bg-black text-white hover:bg-[#c1d86f] hover:text-black">
                                  <Video className="h-4 w-4 mr-2" />
                                  Start Session
                                </Button>
                              ) : (
                                <Button size="sm" variant="outline" className="border-black text-black">
                                  Prepare
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
                                    Message Student
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <FileText className="h-4 w-4 mr-2" />
                                    View Session Details
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem>
                                    <Clock className="h-4 w-4 mr-2" />
                                    Reschedule
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="text-red-600">
                                    <XCircle className="h-4 w-4 mr-2" />
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

          <TabsContent value="completed">
            <Card>
              <CardHeader>
                <CardTitle>Completed Sessions</CardTitle>
                <CardDescription>History of your completed tutoring sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "SES-4581",
                      student: "Emma Smith",
                      subject: "Mathematics",
                      topic: "Algebra: Linear Equations",
                      date: "May 10, 2025",
                      time: "4:00 PM - 5:00 PM",
                      duration: "60 min",
                      notes: "Covered systems of equations. Emma is making good progress.",
                    },
                    {
                      id: "SES-4580",
                      student: "Alex Johnson",
                      subject: "Mathematics",
                      topic: "Geometry: Angles and Lines",
                      date: "May 9, 2025",
                      time: "5:30 PM - 6:30 PM",
                      duration: "60 min",
                      notes: "Reviewed angle relationships. Alex needs more practice with parallel lines.",
                    },
                    {
                      id: "SES-4579",
                      student: "Jack Smith",
                      subject: "Science",
                      topic: "Chemistry: Elements and Compounds",
                      date: "May 8, 2025",
                      time: "3:30 PM - 4:30 PM",
                      duration: "60 min",
                      notes: "Covered basic elements and compounds. Jack is showing excellent understanding.",
                    },
                    {
                      id: "SES-4578",
                      student: "Sophia Williams",
                      subject: "Mathematics",
                      topic: "Calculus: Limits",
                      date: "May 7, 2025",
                      time: "7:00 PM - 8:00 PM",
                      duration: "60 min",
                      notes: "Introduced the concept of limits. Sophia grasped the basics quickly.",
                    },
                  ].map((session, index) => (
                    <div key={index} className="p-4 rounded-md border bg-white">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-32 flex-shrink-0">
                          <div className="text-sm font-medium">{session.date}</div>
                          <div className="text-sm">{session.time}</div>
                          <Badge className="mt-2 bg-green-100 text-green-800">Completed</Badge>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold">{session.subject}</h4>
                              <div className="flex items-center mt-1">
                                <Avatar className="h-6 w-6 mr-2">
                                  <AvatarImage src={`/placeholder.svg?height=24&width=24`} alt={session.student} />
                                  <AvatarFallback className="bg-[#c1d86f] text-black">
                                    {session.student.charAt(0)}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="text-sm">{session.student}</span>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">Topic: {session.topic}</p>
                              <div className="mt-3 p-2 bg-gray-50 rounded-md text-sm">
                                <p className="font-medium mb-1">Session Notes:</p>
                                <p className="text-gray-600">{session.notes}</p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" className="border-black text-black">
                                <FileText className="h-4 w-4 mr-2" />
                                View Report
                              </Button>
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
                                    Message Student
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <FileText className="h-4 w-4 mr-2" />
                                    Edit Session Notes
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem>
                                    <Calendar className="h-4 w-4 mr-2" />
                                    Schedule Follow-up
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

          <TabsContent value="cancelled">
            <Card>
              <CardHeader>
                <CardTitle>Cancelled Sessions</CardTitle>
                <CardDescription>Sessions that were cancelled or rescheduled</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "SES-4577",
                      student: "Noah Brown",
                      subject: "Mathematics",
                      topic: "Algebra: Factoring",
                      date: "May 6, 2025",
                      time: "4:00 PM - 5:00 PM",
                      cancelledBy: "Student",
                      reason: "Student had a scheduling conflict",
                    },
                    {
                      id: "SES-4576",
                      student: "Olivia Davis",
                      subject: "Chemistry",
                      topic: "Atomic Structure",
                      date: "May 5, 2025",
                      time: "5:00 PM - 6:00 PM",
                      cancelledBy: "Tutor",
                      reason: "Personal emergency",
                    },
                    {
                      id: "SES-4575",
                      student: "Emma Smith",
                      subject: "Mathematics",
                      topic: "Algebra: Exponents",
                      date: "May 3, 2025",
                      time: "4:00 PM - 5:00 PM",
                      cancelledBy: "System",
                      reason: "Technical issues with the platform",
                    },
                  ].map((session, index) => (
                    <div key={index} className="p-4 rounded-md border bg-white">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-32 flex-shrink-0">
                          <div className="text-sm font-medium">{session.date}</div>
                          <div className="text-sm">{session.time}</div>
                          <Badge className="mt-2 bg-red-100 text-red-800">Cancelled</Badge>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold">{session.subject}</h4>
                              <div className="flex items-center mt-1">
                                <Avatar className="h-6 w-6 mr-2">
                                  <AvatarImage src={`/placeholder.svg?height=24&width=24`} alt={session.student} />
                                  <AvatarFallback className="bg-[#c1d86f] text-black">
                                    {session.student.charAt(0)}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="text-sm">{session.student}</span>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">Topic: {session.topic}</p>
                              <div className="mt-3 p-2 bg-red-50 rounded-md text-sm">
                                <p className="font-medium mb-1">Cancellation Details:</p>
                                <p className="text-gray-600">
                                  Cancelled by: <span className="font-medium">{session.cancelledBy}</span>
                                </p>
                                <p className="text-gray-600">Reason: {session.reason}</p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" className="bg-black text-white hover:bg-[#c1d86f] hover:text-black">
                                <Calendar className="h-4 w-4 mr-2" />
                                Reschedule
                              </Button>
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
                                    Message Student
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <FileText className="h-4 w-4 mr-2" />
                                    View Details
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
        </Tabs>

        {/* Session Statistics */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Session Statistics</CardTitle>
            <CardDescription>Overview of your tutoring sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-black/5 border-none">
                <CardContent className="p-4">
                  <h4 className="text-sm font-medium text-gray-600">Total Sessions</h4>
                  <div className="text-2xl font-bold mt-1">48</div>
                  <p className="text-xs text-gray-500 mt-1">This month</p>
                </CardContent>
              </Card>

              <Card className="bg-black/5 border-none">
                <CardContent className="p-4">
                  <h4 className="text-sm font-medium text-gray-600">Completion Rate</h4>
                  <div className="text-2xl font-bold mt-1">94%</div>
                  <p className="text-xs text-green-600 mt-1">+2% from last month</p>
                </CardContent>
              </Card>

              <Card className="bg-black/5 border-none">
                <CardContent className="p-4">
                  <h4 className="text-sm font-medium text-gray-600">Avg. Session Duration</h4>
                  <div className="text-2xl font-bold mt-1">58 min</div>
                  <p className="text-xs text-gray-500 mt-1">Out of 60 min scheduled</p>
                </CardContent>
              </Card>

              <Card className="bg-black/5 border-none">
                <CardContent className="p-4">
                  <h4 className="text-sm font-medium text-gray-600">Student Satisfaction</h4>
                  <div className="text-2xl font-bold mt-1">4.8/5</div>
                  <p className="text-xs text-green-600 mt-1">Based on 42 ratings</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
