import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, GraduationCap, BookOpen, BarChart2 } from "lucide-react"

export default function StudentDashboard() {
  return (
    <DashboardLayout role="student">
      <div className="container mx-auto p-4 md:p-6">
        <h1 className="text-2xl font-bold mb-6">Student Dashboard</h1>

        {/* Welcome Card */}
        <Card className="mb-6 bg-gradient-to-r from-[#c1d86f]/30 to-[#a39800]/20 border-none rounded-xl shadow-md">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-xl font-semibold">Welcome back, Alex!</h2>
                <p className="text-gray-600 mt-1">You have 2 upcoming sessions this week</p>
              </div>
              <Button className="bg-[#c1d86f] text-black hover:bg-[#a39800] hover:text-white">Join Next Session</Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="rounded-xl shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Upcoming Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">2</div>
                <Calendar className="h-5 w-5 text-[#c1d86f]" />
              </div>
              <p className="text-xs text-gray-500 mt-1">Next: Math with Mr. Johnson (Tomorrow, 4 PM)</p>
            </CardContent>
          </Card>

          <Card className="rounded-xl shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Learning Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">24.5</div>
                <Clock className="h-5 w-5 text-[#c1d86f]" />
              </div>
              <p className="text-xs text-gray-500 mt-1">+2.5 hours this week</p>
            </CardContent>
          </Card>

          <Card className="rounded-xl shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Subjects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">3</div>
                <BookOpen className="h-5 w-5 text-[#c1d86f]" />
              </div>
              <p className="text-xs text-gray-500 mt-1">Mathematics, Science, English</p>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Sessions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <Card className="rounded-xl shadow-sm">
              <CardHeader>
                <CardTitle>Upcoming Sessions</CardTitle>
                <CardDescription>Your scheduled tutoring sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      subject: "Mathematics",
                      tutor: "Mr. Johnson",
                      date: "May 12, 2025",
                      time: "4:00 PM - 5:00 PM",
                      topic: "Algebra: Quadratic Equations",
                    },
                    {
                      subject: "Science",
                      tutor: "Ms. Williams",
                      date: "May 14, 2025",
                      time: "3:30 PM - 4:30 PM",
                      topic: "Chemistry: Periodic Table",
                    },
                  ].map((session, index) => (
                    <div key={index} className="flex items-start p-3 rounded-lg border bg-white">
                      <div className="h-10 w-10 rounded-full bg-[#c1d86f] flex items-center justify-center text-black font-bold mr-4">
                        {session.subject.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="font-semibold">
                            {session.subject} with {session.tutor}
                          </h4>
                          <span className="text-sm text-gray-500">{session.date}</span>
                        </div>
                        <p className="text-sm text-gray-600">{session.time}</p>
                        <p className="text-sm text-gray-600 mt-1">Topic: {session.topic}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Progress Summary */}
          <div>
            <Card className="rounded-xl shadow-sm">
              <CardHeader>
                <CardTitle>Progress Summary</CardTitle>
                <CardDescription>Your learning achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { subject: "Mathematics", progress: 75 },
                    { subject: "Science", progress: 60 },
                    { subject: "English", progress: 85 },
                  ].map((subject, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{subject.subject}</span>
                        <span>{subject.progress}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#c1d86f]" style={{ width: `${subject.progress}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <h4 className="font-medium mb-2">Recent Achievements</h4>
                  <div className="space-y-2">
                    {[
                      { name: "Algebra Master", icon: GraduationCap, date: "May 5" },
                      { name: "Perfect Attendance", icon: Calendar, date: "Apr 28" },
                      { name: "Quick Learner", icon: BarChart2, date: "Apr 15" },
                    ].map((achievement, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <achievement.icon className="h-4 w-4 mr-2 text-[#a39800]" />
                        <span className="flex-1">{achievement.name}</span>
                        <span className="text-gray-500 text-xs">{achievement.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Materials */}
        <Card className="rounded-xl shadow-sm">
          <CardHeader>
            <CardTitle>Recent Learning Materials</CardTitle>
            <CardDescription>Materials shared by your tutors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "Algebra Practice Problems",
                  type: "PDF",
                  subject: "Mathematics",
                  date: "May 8, 2025",
                },
                {
                  title: "Periodic Table Reference",
                  type: "PDF",
                  subject: "Science",
                  date: "May 6, 2025",
                },
                {
                  title: "Essay Writing Guidelines",
                  type: "DOCX",
                  subject: "English",
                  date: "May 3, 2025",
                },
              ].map((material, index) => (
                <div key={index} className="p-4 border rounded-lg bg-white">
                  <div className="flex items-center mb-2">
                    <div className="h-8 w-8 rounded bg-[#c1d86f]/20 flex items-center justify-center text-[#a39800] mr-3">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{material.title}</h4>
                      <p className="text-xs text-gray-500">
                        {material.type} • {material.subject}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-xs text-gray-500">{material.date}</span>
                    <Button variant="outline" size="sm" className="h-7 text-xs">
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
