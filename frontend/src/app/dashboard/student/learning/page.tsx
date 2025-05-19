import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  FileText,
  Video,
  Download,
  ExternalLink,
  Play,
  Clock,
  Calendar,
  CheckCircle,
  BarChart2,
  Search,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"

export default function LearningOverview() {
  return (
    <DashboardLayout role="student">
      <div className="container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Learning Overview</h1>
            <p className="text-gray-500">Track your progress and access learning materials</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input placeholder="Search materials..." className="pl-10 w-[200px]" />
            </div>
            <Button className="bg-[#c1d86f] text-black hover:bg-[#a39800] hover:text-white">
              <Calendar className="h-4 w-4 mr-2" />
              Upcoming Session's
            </Button>
          </div>
        </div>

        {/* Learning Progress Summary */}
        <Card className="mb-6 bg-gradient-to-r from-[#c1d86f]/30 to-[#a39800]/20 border-none rounded-xl shadow-md">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-xl font-semibold">Your Learning Journey</h2>
                <p className="text-gray-600 mt-1">You're making great progress, Alex!</p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="border-[#a39800] text-[#a39800] bg-white hover:bg-[#a39800] hover:text-white"
                >
                  <BarChart2 className="h-4 w-4 mr-2" />
                  View Detailed Progress
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {[
                {
                  subject: "Mathematics",
                  progress: 75,
                  nextSession: "Today, 4:00 PM",
                  tutor: "Mr. Johnson",
                },
                {
                  subject: "Science",
                  progress: 60,
                  nextSession: "May 14, 3:30 PM",
                  tutor: "Ms. Williams",
                },
                {
                  subject: "English",
                  progress: 85,
                  nextSession: "May 16, 4:00 PM",
                  tutor: "Ms. Davis",
                },
              ].map((subject, index) => (
                <Card key={index} className="bg-white/80 border shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">{subject.subject}</h3>
                      <Badge className="bg-[#c1d86f]/20 text-[#a39800]">{subject.progress}%</Badge>
                    </div>
                    <Progress value={subject.progress} className="h-2 mb-3 bg-[#c1d86f]" />
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-[#a39800]" />
                        <span>{subject.nextSession}</span>
                      </div>
                      <span className="text-gray-500">Tutor: {subject.tutor}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Learning Materials Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="all" className="data-[state=active]:bg-[#c1d86f]/20 data-[state=active]:text-[#a39800]">
              <BookOpen className="h-4 w-4 mr-2" />
              All Materials
            </TabsTrigger>
            <TabsTrigger
              value="documents"
              className="data-[state=active]:bg-[#c1d86f]/20 data-[state=active]:text-[#a39800]"
            >
              <FileText className="h-4 w-4 mr-2" />
              Documents
            </TabsTrigger>
            <TabsTrigger
              value="videos"
              className="data-[state=active]:bg-[#c1d86f]/20 data-[state=active]:text-[#a39800]"
            >
              <Video className="h-4 w-4 mr-2" />
              Videos
            </TabsTrigger>
            <TabsTrigger
              value="assignments"
              className="data-[state=active]:bg-[#c1d86f]/20 data-[state=active]:text-[#a39800]"
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              Assignments
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <Card>
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
                      tutor: "Mr. Johnson",
                      icon: FileText,
                      color: "bg-blue-100 text-blue-600",
                    },
                    {
                      title: "Quadratic Equations Video Lesson",
                      type: "Video",
                      subject: "Mathematics",
                      date: "May 8, 2025",
                      tutor: "Mr. Johnson",
                      duration: "18:24",
                      icon: Video,
                      color: "bg-red-100 text-red-600",
                    },
                    {
                      title: "Periodic Table Reference",
                      type: "PDF",
                      subject: "Science",
                      date: "May 6, 2025",
                      tutor: "Ms. Williams",
                      icon: FileText,
                      color: "bg-blue-100 text-blue-600",
                    },
                    {
                      title: "Chemical Reactions Worksheet",
                      type: "Assignment",
                      subject: "Science",
                      date: "May 6, 2025",
                      tutor: "Ms. Williams",
                      dueDate: "May 13, 2025",
                      icon: CheckCircle,
                      color: "bg-green-100 text-green-600",
                    },
                    {
                      title: "Essay Writing Guidelines",
                      type: "PDF",
                      subject: "English",
                      date: "May 3, 2025",
                      tutor: "Ms. Davis",
                      icon: FileText,
                      color: "bg-blue-100 text-blue-600",
                    },
                    {
                      title: "Grammar Rules Video",
                      type: "Video",
                      subject: "English",
                      date: "May 3, 2025",
                      tutor: "Ms. Davis",
                      duration: "24:15",
                      icon: Video,
                      color: "bg-red-100 text-red-600",
                    },
                  ].map((material, index) => (
                    <Card key={index} className="overflow-hidden border shadow-sm">
                      <div className={`px-4 py-3 flex justify-between items-center ${material.color.split(" ")[0]}/10`}>
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-full ${material.color}`}>
                            <material.icon className="h-4 w-4" />
                          </div>
                          <div>
                            <Badge
                              variant="outline"
                              className={`${material.color.split(" ")[0]}/5 ${
                                material.color.split(" ")[1]
                              } border-none`}
                            >
                              {material.type}
                            </Badge>
                            <p className="text-xs text-gray-500">{material.subject}</p>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500">{material.date}</div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium mb-2">{material.title}</h3>
                        <div className="flex justify-between items-center text-sm mb-4">
                          <span className="text-gray-500">By: {material.tutor}</span>
                          {material.duration && (
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 mr-1 text-gray-500" />
                              <span className="text-gray-500">{material.duration}</span>
                            </div>
                          )}
                          {material.dueDate && (
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1 text-gray-500" />
                              <span className="text-gray-500">Due: {material.dueDate}</span>
                            </div>
                          )}
                        </div>
                        <div className="flex gap-2">
                          {material.type === "Video" ? (
                            <Button className="flex-1 bg-[#c1d86f] text-black hover:bg-[#a39800] hover:text-white">
                              <Play className="h-4 w-4 mr-2" />
                              Watch
                            </Button>
                          ) : material.type === "Assignment" ? (
                            <Button className="flex-1 bg-[#c1d86f] text-black hover:bg-[#a39800] hover:text-white">
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Complete
                            </Button>
                          ) : (
                            <Button className="flex-1 bg-[#c1d86f] text-black hover:bg-[#a39800] hover:text-white">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Open
                            </Button>
                          )}
                          <Button variant="outline" className="border-gray-300">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle>Documents</CardTitle>
                <CardDescription>PDF and text materials shared by your tutors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Algebra Practice Problems",
                      type: "PDF",
                      subject: "Mathematics",
                      date: "May 8, 2025",
                      tutor: "Mr. Johnson",
                      description: "A collection of practice problems covering quadratic equations and factoring.",
                    },
                    {
                      title: "Periodic Table Reference",
                      type: "PDF",
                      subject: "Science",
                      date: "May 6, 2025",
                      tutor: "Ms. Williams",
                      description: "Comprehensive periodic table with element properties and common compounds.",
                    },
                    {
                      title: "Essay Writing Guidelines",
                      type: "PDF",
                      subject: "English",
                      date: "May 3, 2025",
                      tutor: "Ms. Davis",
                      description: "Guidelines for structuring and writing effective essays with examples.",
                    },
                    {
                      title: "Geometry Formulas",
                      type: "PDF",
                      subject: "Mathematics",
                      date: "April 28, 2025",
                      tutor: "Mr. Johnson",
                      description: "Reference sheet with all geometry formulas for triangles, circles, and more.",
                    },
                  ].map((document, index) => (
                    <div key={index} className="p-4 rounded-md border bg-white">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-12 flex-shrink-0">
                          <div className="p-2 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                            <FileText className="h-6 w-6" />
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                              <h3 className="font-semibold">{document.title}</h3>
                              <div className="flex items-center mt-1">
                                <Badge className="bg-blue-100 text-blue-600 mr-2">{document.type}</Badge>
                                <span className="text-sm text-gray-500">{document.subject}</span>
                                <span className="mx-2 text-gray-300">•</span>
                                <span className="text-sm text-gray-500">{document.date}</span>
                              </div>
                            </div>
                            <div className="mt-2 md:mt-0 flex gap-2">
                              <Button size="sm" className="bg-[#c1d86f] text-black hover:bg-[#a39800] hover:text-white">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Open
                              </Button>
                              <Button size="sm" variant="outline" className="border-gray-300">
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </Button>
                            </div>
                          </div>

                          <p className="text-sm text-gray-600 mt-2">{document.description}</p>

                          <div className="mt-3 flex items-center text-sm text-gray-500">
                            <Avatar className="h-6 w-6 mr-2">
                              <AvatarImage src={`/placeholder.svg?height=24&width=24`} alt={document.tutor} />
                              <AvatarFallback className="bg-black text-white">
                                {document.tutor.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <span>Shared by {document.tutor}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="videos">
            <Card>
              <CardHeader>
                <CardTitle>Video Lessons</CardTitle>
                <CardDescription>Video tutorials and recorded sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Quadratic Equations Video Lesson",
                      subject: "Mathematics",
                      date: "May 8, 2025",
                      tutor: "Mr. Johnson",
                      duration: "18:24",
                      thumbnail: "/placeholder.svg?height=180&width=320",
                      description: "Step-by-step tutorial on solving quadratic equations using various methods.",
                    },
                    {
                      title: "Grammar Rules Video",
                      subject: "English",
                      date: "May 3, 2025",
                      tutor: "Ms. Davis",
                      duration: "24:15",
                      thumbnail: "/placeholder.svg?height=180&width=320",
                      description: "Comprehensive overview of essential grammar rules with examples.",
                    },
                    {
                      title: "Chemical Reactions Demonstration",
                      subject: "Science",
                      date: "May 1, 2025",
                      tutor: "Ms. Williams",
                      duration: "15:42",
                      thumbnail: "/placeholder.svg?height=180&width=320",
                      description: "Visual demonstrations of various chemical reactions and their properties.",
                    },
                    {
                      title: "Geometry Concepts Explained",
                      subject: "Mathematics",
                      date: "April 25, 2025",
                      tutor: "Mr. Johnson",
                      duration: "22:10",
                      thumbnail: "/placeholder.svg?height=180&width=320",
                      description: "Visual explanation of key geometry concepts and problem-solving techniques.",
                    },
                  ].map((video, index) => (
                    <Card key={index} className="overflow-hidden border shadow-sm">
                      <div className="relative">
                        <img
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Button
                            className="bg-[#c1d86f]/90 text-black hover:bg-[#a39800] hover:text-white rounded-full h-12 w-12 flex items-center justify-center"
                            size="icon"
                          >
                            <Play className="h-6 w-6" />
                          </Button>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <Badge className="bg-red-100 text-red-600">{video.subject}</Badge>
                          <span className="text-xs text-gray-500">{video.date}</span>
                        </div>
                        <h3 className="font-medium mb-2">{video.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{video.description}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Avatar className="h-6 w-6 mr-2">
                            <AvatarImage src={`/placeholder.svg?height=24&width=24`} alt={video.tutor} />
                            <AvatarFallback className="bg-black text-white">{video.tutor.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span>{video.tutor}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assignments">
            <Card>
              <CardHeader>
                <CardTitle>Assignments</CardTitle>
                <CardDescription>Homework and practice assignments from your tutors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Chemical Reactions Worksheet",
                      subject: "Science",
                      assignedDate: "May 6, 2025",
                      dueDate: "May 13, 2025",
                      tutor: "Ms. Williams",
                      status: "Pending",
                      description:
                        "Complete the worksheet on balancing chemical equations and identifying reaction types.",
                    },
                    {
                      title: "Essay on Literary Devices",
                      subject: "English",
                      assignedDate: "May 2, 2025",
                      dueDate: "May 9, 2025",
                      tutor: "Ms. Davis",
                      status: "In Progress",
                      description:
                        "Write a 500-word essay analyzing the use of literary devices in the assigned reading.",
                    },
                    {
                      title: "Algebra Problem Set",
                      subject: "Mathematics",
                      assignedDate: "April 30, 2025",
                      dueDate: "May 7, 2025",
                      tutor: "Mr. Johnson",
                      status: "Completed",
                      grade: "92%",
                      description: "Solve the set of 20 algebra problems covering linear and quadratic equations.",
                    },
                    {
                      title: "Periodic Table Quiz",
                      subject: "Science",
                      assignedDate: "April 28, 2025",
                      dueDate: "May 5, 2025",
                      tutor: "Ms. Williams",
                      status: "Graded",
                      grade: "88%",
                      description: "Complete the quiz on element properties and periodic table organization.",
                    },
                  ].map((assignment, index) => (
                    <div key={index} className="p-4 rounded-md border bg-white">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-12 flex-shrink-0">
                          <div
                            className={`p-2 rounded-full flex items-center justify-center ${
                              assignment.status === "Completed" || assignment.status === "Graded"
                                ? "bg-green-100 text-green-600"
                                : assignment.status === "In Progress"
                                  ? "bg-blue-100 text-blue-600"
                                  : "bg-yellow-100 text-yellow-600"
                            }`}
                          >
                            <CheckCircle className="h-6 w-6" />
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                              <h3 className="font-semibold">{assignment.title}</h3>
                              <div className="flex items-center mt-1">
                                <Badge
                                  className={
                                    assignment.status === "Completed" || assignment.status === "Graded"
                                      ? "bg-green-100 text-green-600"
                                      : assignment.status === "In Progress"
                                        ? "bg-blue-100 text-blue-600"
                                        : "bg-yellow-100 text-yellow-600"
                                  }
                                >
                                  {assignment.status}
                                </Badge>
                                {assignment.grade && (
                                  <Badge className="ml-2 bg-[#c1d86f]/20 text-[#a39800]">{assignment.grade}</Badge>
                                )}
                                <span className="ml-2 text-sm text-gray-500">{assignment.subject}</span>
                              </div>
                            </div>
                            <div className="mt-2 md:mt-0 flex gap-2">
                              {assignment.status === "Pending" || assignment.status === "In Progress" ? (
                                <Button
                                  size="sm"
                                  className="bg-[#c1d86f] text-black hover:bg-[#a39800] hover:text-white"
                                >
                                  <CheckCircle className="h-4 w-4 mr-2" />
                                  Complete Assignment
                                </Button>
                              ) : (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-[#c1d86f] text-[#a39800] hover:bg-[#c1d86f]/10"
                                >
                                  <FileText className="h-4 w-4 mr-2" />
                                  View Feedback
                                </Button>
                              )}
                            </div>
                          </div>

                          <p className="text-sm text-gray-600 mt-2">{assignment.description}</p>

                          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
                            <div className="flex items-center text-gray-500">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>Assigned: {assignment.assignedDate}</span>
                            </div>
                            <div
                              className={`flex items-center ${
                                new Date(assignment.dueDate) < new Date() &&
                                (assignment.status === "Pending" || assignment.status === "In Progress")
                                  ? "text-red-500"
                                  : "text-gray-500"
                              }`}
                            >
                              <Clock className="h-4 w-4 mr-1" />
                              <span>Due: {assignment.dueDate}</span>
                            </div>
                            <div className="flex items-center text-gray-500">
                              <Avatar className="h-5 w-5 mr-1">
                                <AvatarImage src={`/placeholder.svg?height=20&width=20`} alt={assignment.tutor} />
                                <AvatarFallback className="bg-black text-white text-xs">
                                  {assignment.tutor.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <span>{assignment.tutor}</span>
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
