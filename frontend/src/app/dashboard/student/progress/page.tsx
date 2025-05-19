import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Award, BookOpen, Calendar, Clock, Download, TrendingUp } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function StudentProgressPage() {
  // Sample data for charts
  const subjectProgress = [
    { subject: "Mathematics", progress: 78, color: "#4ade80" },
    { subject: "Science", progress: 65, color: "#60a5fa" },
    { subject: "English", progress: 82, color: "#f97316" },
    { subject: "History", progress: 45, color: "#8b5cf6" },
    { subject: "Computer Science", progress: 90, color: "#ec4899" },
  ]

  const weeklyStudyHours = [
    { day: "Mon", hours: 2.5 },
    { day: "Tue", hours: 1.8 },
    { day: "Wed", hours: 3.2 },
    { day: "Thu", hours: 2.0 },
    { day: "Fri", hours: 1.5 },
    { day: "Sat", hours: 4.0 },
    { day: "Sun", hours: 1.0 },
  ]

  const monthlyProgress = [
    { month: "Jan", score: 72 },
    { month: "Feb", score: 68 },
    { month: "Mar", score: 75 },
    { month: "Apr", score: 82 },
    { month: "May", score: 85 },
  ]

  const recentAssessments = [
    {
      id: "ASM-2025-05-10",
      subject: "Mathematics",
      topic: "Calculus - Derivatives",
      score: 85,
      date: "May 10, 2025",
      status: "completed",
    },
    {
      id: "ASM-2025-05-05",
      subject: "Science",
      topic: "Physics - Newton's Laws",
      score: 78,
      date: "May 5, 2025",
      status: "completed",
    },
    {
      id: "ASM-2025-04-28",
      subject: "English",
      topic: "Literature Analysis",
      score: 92,
      date: "April 28, 2025",
      status: "completed",
    },
    {
      id: "ASM-2025-04-20",
      subject: "Computer Science",
      topic: "Algorithms - Sorting",
      score: 95,
      date: "April 20, 2025",
      status: "completed",
    },
  ]

  const upcomingAssessments = [
    {
      id: "ASM-2025-05-18",
      subject: "History",
      topic: "World War II",
      date: "May 18, 2025",
      status: "upcoming",
    },
    {
      id: "ASM-2025-05-25",
      subject: "Mathematics",
      topic: "Calculus - Integration",
      date: "May 25, 2025",
      status: "upcoming",
    },
  ]

  const getScoreBadge = (score: number) => {
    if (score >= 90) return <Badge className="bg-green-600 hover:bg-green-700">Excellent</Badge>
    if (score >= 80) return <Badge className="bg-green-500 hover:bg-green-600">Very Good</Badge>
    if (score >= 70) return <Badge className="bg-yellow-500 hover:bg-yellow-600">Good</Badge>
    if (score >= 60) return <Badge className="bg-yellow-600 hover:bg-yellow-700">Satisfactory</Badge>
    return <Badge className="bg-red-500 hover:bg-red-600">Needs Improvement</Badge>
  }

  return (
    <DashboardLayout role="student">
      <div className="p-6 space-y-6">
        <p>
          progress analytics is a comprehensive overview of your academic
          performance, study habits, and upcoming assessments. It provides
          insights into your progress in various subjects, study hours, and
          recent
        </p>
        {/* <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold">Progress Analytics</h1>
        <div className="flex items-center gap-2">
          <Select defaultValue="may2025">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="may2025">May 2025</SelectItem>
              <SelectItem value="apr2025">April 2025</SelectItem>
              <SelectItem value="mar2025">March 2025</SelectItem>
              <SelectItem value="feb2025">February 2025</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" /> Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-green-50 border-green-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-green-800">Overall Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-green-800">78%</span>
            </div>
            <div className="flex items-center text-xs text-green-700 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" /> +5% from last month
            </div>
            <Progress value={78} className="h-2 mt-3 bg-green-200 bg-green-600" />
          </CardContent>
        </Card>

        <Card className="bg-green-50 border-green-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-green-800">Study Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline">
              <Clock className="h-4 w-4 text-green-700 mr-1" />
              <span className="text-3xl font-bold text-green-800">16</span>
              <span className="ml-1 text-sm text-green-700">hours</span>
            </div>
            <p className="text-xs text-green-700 mt-1">This month (May 2025)</p>
          </CardContent>
        </Card>

        <Card className="bg-green-50 border-green-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-green-800">Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline">
              <Award className="h-4 w-4 text-green-700 mr-1" />
              <span className="text-3xl font-bold text-green-800">12</span>
            </div>
            <p className="text-xs text-green-700 mt-1">3 new this month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-3 w-full max-w-md mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="subjects">Subjects</TabsTrigger>
          <TabsTrigger value="assessments">Assessments</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Progress</CardTitle>
              <CardDescription>Your academic performance over the past months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyProgress}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="score" stroke="#16a34a" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Study Hours</CardTitle>
                <CardDescription>Hours spent studying each day this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyStudyHours}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="hours" fill="#16a34a" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Subject Distribution</CardTitle>
                <CardDescription>Progress across different subjects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={subjectProgress}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="progress"
                        nameKey="subject"
                        label={({ subject, progress }) => `${subject}: ${progress}%`}
                      >
                        {subjectProgress.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="subjects" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Subject Progress</CardTitle>
              <CardDescription>Your progress in each subject</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {subjectProgress.map((subject) => (
                  <div key={subject.subject} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: subject.color }}></div>
                        <span className="font-medium">{subject.subject}</span>
                      </div>
                      <span className="text-sm font-medium">{subject.progress}%</span>
                    </div>
                    <Progress
                      value={subject.progress}
                      className="h-2"
                      style={{ backgroundColor: `${subject.color}20` }}
                    >
                      <div
                        className="h-full"
                        style={{ backgroundColor: subject.color, width: `${subject.progress}%` }}
                      ></div>
                    </Progress>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {subjectProgress.map((subject) => (
              <Card key={subject.subject} className="overflow-hidden">
                <div className="h-2" style={{ backgroundColor: subject.color }}></div>
                <CardHeader>
                  <CardTitle>{subject.subject}</CardTitle>
                  <CardDescription>Current progress and recent activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Progress</p>
                      <p className="text-2xl font-bold">{subject.progress}%</p>
                    </div>
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center border-4"
                      style={{ borderColor: subject.color }}
                    >
                      <span className="text-lg font-bold" style={{ color: subject.color }}>
                        {subject.progress}%
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Recent Activity</span>
                      <span className="font-medium">May 10, 2025</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Next Session</span>
                      <span className="font-medium">May 17, 2025</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tutor</span>
                      <span className="font-medium">Dr. Smith</span>
                    </div>
                  </div>

                  <Button className="w-full mt-4" variant="outline">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="assessments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Assessments</CardTitle>
            </CardHeader>
            <CardContent>
              {upcomingAssessments.length > 0 ? (
                <div className="space-y-4">
                  {upcomingAssessments.map((assessment) => (
                    <div key={assessment.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <BookOpen className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">{assessment.subject}</p>
                          <p className="text-sm text-muted-foreground">{assessment.topic}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                          <p className="text-sm">{assessment.date}</p>
                        </div>
                        <Badge className="mt-1 bg-yellow-500 hover:bg-yellow-600">Upcoming</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                  <h3 className="text-lg font-medium">No upcoming assessments</h3>
                  <p className="text-sm text-muted-foreground mt-1">Assessments will appear here when scheduled</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Assessments</CardTitle>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAssessments.map((assessment) => (
                  <div key={assessment.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <BookOpen className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">{assessment.subject}</p>
                        <p className="text-sm text-muted-foreground">{assessment.topic}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center justify-end">
                        <p className="text-lg font-bold mr-2">{assessment.score}%</p>
                        {getScoreBadge(assessment.score)}
                      </div>
                      <div className="flex items-center mt-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        <p>{assessment.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Performance Trends</CardTitle>
              <CardDescription>Your assessment scores over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={[
                      { date: "Jan 15", score: 72 },
                      { date: "Feb 10", score: 68 },
                      { date: "Feb 28", score: 75 },
                      { date: "Mar 15", score: 70 },
                      { date: "Apr 5", score: 82 },
                      { date: "Apr 20", score: 95 },
                      { date: "May 5", score: 78 },
                      { date: "May 10", score: 85 },
                    ]}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="score" stroke="#16a34a" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs> */}
      </div>
    </DashboardLayout>
  );
}
