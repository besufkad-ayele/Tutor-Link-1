import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Calendar, DollarSign, Users, Clock, BookOpen, BarChart2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TutorDashboard() {
  return (
    <DashboardLayout role="tutor">
      <div className="container mx-auto p-4 md:p-6">
        <h1 className="text-2xl font-bold mb-6">Tutor Dashboard</h1>

        {/* Welcome Card */}
        <Card className="mb-6 bg-gradient-to-r from-gray-900/90 to-gray-800/80 border-none rounded-md shadow-md text-white">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-xl font-semibold">Welcome back, Mr. Johnson!</h2>
                <p className="text-gray-300 mt-1">You have 4 sessions scheduled today</p>
              </div>
              <div className="flex gap-2">
                <Button className="bg-white text-black hover:bg-[#c1d86f] hover:text-black">Start Session</Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/20">
                  Update Schedule
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="rounded-md shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Active Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">12</div>
                <Users className="h-5 w-5 text-black" />
              </div>
              <p className="text-xs text-gray-500 mt-1">+2 new this month</p>
            </CardContent>
          </Card>

          <Card className="rounded-md shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Today's Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">4</div>
                <Calendar className="h-5 w-5 text-black" />
              </div>
              <p className="text-xs text-gray-500 mt-1">Next: 2:30 PM (Math)</p>
            </CardContent>
          </Card>

          <Card className="rounded-md shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Teaching Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">18</div>
                <Clock className="h-5 w-5 text-black" />
              </div>
              <p className="text-xs text-gray-500 mt-1">This week (24 planned)</p>
            </CardContent>
          </Card>

          <Card className="rounded-md shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Monthly Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">$1,240</div>
                <DollarSign className="h-5 w-5 text-black" />
              </div>
              <p className="text-xs text-gray-500 mt-1">+$320 from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Today's Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <Card className="rounded-md shadow-sm">
              <CardHeader>
                <CardTitle>Today's Schedule</CardTitle>
                <CardDescription>May 11, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      time: "2:30 PM - 3:30 PM",
                      subject: "Mathematics",
                      student: "Emma Smith",
                      topic: "Algebra: Quadratic Equations",
                      status: "Upcoming",
                    },
                    {
                      time: "4:00 PM - 5:00 PM",
                      subject: "Mathematics",
                      student: "Alex Johnson",
                      topic: "Geometry: Triangles and Circles",
                      status: "Upcoming",
                    },
                    {
                      time: "5:30 PM - 6:30 PM",
                      subject: "Science",
                      student: "Jack Smith",
                      topic: "Chemistry: Periodic Table",
                      status: "Upcoming",
                    },
                    {
                      time: "7:00 PM - 8:00 PM",
                      subject: "Mathematics",
                      student: "Sophia Williams",
                      topic: "Calculus: Derivatives",
                      status: "Upcoming",
                    },
                  ].map((session, index) => (
                    <div key={index} className="p-4 rounded-md border bg-white">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-32 flex-shrink-0">
                          <div className="text-sm font-medium">{session.time}</div>
                          <div className="mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            {session.status}
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold">{session.subject}</h4>
                              <p className="text-sm text-gray-600">Student: {session.student}</p>
                              <p className="text-sm text-gray-600 mt-1">Topic: {session.topic}</p>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" className="bg-black text-white hover:bg-[#c1d86f] hover:text-black">
                                Start
                              </Button>
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
          </div>

          {/* Student Progress */}
          <div>
            <Card className="rounded-md shadow-sm">
              <CardHeader>
                <CardTitle>Student Progress</CardTitle>
                <CardDescription>Recent assessments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Emma Smith",
                      subject: "Mathematics",
                      progress: 75,
                      lastSession: "May 8, 2025",
                    },
                    {
                      name: "Alex Johnson",
                      subject: "Mathematics",
                      progress: 68,
                      lastSession: "May 9, 2025",
                    },
                    {
                      name: "Jack Smith",
                      subject: "Science",
                      progress: 82,
                      lastSession: "May 7, 2025",
                    },
                  ].map((student, index) => (
                    <div key={index} className="p-3 border rounded-md">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={student.name} />
                          <AvatarFallback className="bg-black text-white">{student.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <h4 className="font-medium text-sm">{student.name}</h4>
                            <span className="text-xs text-gray-500">{student.lastSession}</span>
                          </div>
                          <p className="text-xs text-gray-600">{student.subject}</p>

                          <div className="mt-2">
                            <div className="flex justify-between text-xs mb-1">
                              <span>Progress</span>
                              <span>{student.progress}%</span>
                            </div>
                            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-black" style={{ width: `${student.progress}%` }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="ghost" className="w-full mt-4 text-black">
                  View All Students
                </Button>
              </CardContent>
            </Card>

            {/* Teaching Materials */}
            <Card className="rounded-md shadow-sm mt-6">
              <CardHeader>
                <CardTitle>Teaching Materials</CardTitle>
                <CardDescription>Recently uploaded</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    {
                      title: "Algebra Practice Problems",
                      type: "PDF",
                      date: "May 10, 2025",
                    },
                    {
                      title: "Chemistry Study Guide",
                      type: "DOCX",
                      date: "May 9, 2025",
                    },
                    {
                      title: "Calculus Formulas",
                      type: "PDF",
                      date: "May 7, 2025",
                    },
                  ].map((material, index) => (
                    <div key={index} className="flex items-center p-2 border-b">
                      <div className="h-8 w-8 rounded bg-black/10 flex items-center justify-center text-black mr-3">
                        <BookOpen className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium">{material.title}</h4>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">{material.type}</span>
                          <span className="text-xs text-gray-500">{material.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full mt-4 border-black text-black">
                  Upload New Material
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Earnings Overview */}
        <Card className="rounded-md shadow-sm">
          <CardHeader>
            <CardTitle>Earnings Overview</CardTitle>
            <CardDescription>Monthly breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center">
              <div className="text-center">
                <BarChart2 className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500">Earnings chart will be displayed here</p>
                <p className="text-sm text-gray-400 mt-1">Showing data for the last 6 months</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <Card className="bg-black/5 border-none">
                <CardContent className="p-4">
                  <h4 className="text-sm font-medium text-gray-600">Current Month</h4>
                  <div className="text-2xl font-bold mt-1">$1,240</div>
                  <p className="text-xs text-green-600 mt-1">+15% from last month</p>
                </CardContent>
              </Card>

              <Card className="bg-black/5 border-none">
                <CardContent className="p-4">
                  <h4 className="text-sm font-medium text-gray-600">Last Month</h4>
                  <div className="text-2xl font-bold mt-1">$920</div>
                  <p className="text-xs text-gray-500 mt-1">32 teaching hours</p>
                </CardContent>
              </Card>

              <Card className="bg-black/5 border-none">
                <CardContent className="p-4">
                  <h4 className="text-sm font-medium text-gray-600">Projected</h4>
                  <div className="text-2xl font-bold mt-1">$1,500</div>
                  <p className="text-xs text-gray-500 mt-1">Based on scheduled sessions</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
