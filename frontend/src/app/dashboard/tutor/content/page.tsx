import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  FileText,
  Upload,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  FileIcon,
  Video,
  Download,
  Edit,
  Trash2,
  Eye,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function TutorContentPage() {
  // Sample data for content
  const resources = [
    {
      id: "RES-2025-001",
      title: "Calculus Fundamentals - Derivatives",
      type: "Document",
      subject: "Mathematics",
      created: "May 10, 2025",
      size: "2.4 MB",
      downloads: 45,
      status: "published",
    },
    {
      id: "RES-2025-002",
      title: "Integration Techniques - Practice Problems",
      type: "Document",
      subject: "Mathematics",
      created: "May 5, 2025",
      size: "1.8 MB",
      downloads: 32,
      status: "published",
    },
    {
      id: "RES-2025-003",
      title: "Trigonometric Functions - Video Lecture",
      type: "Video",
      subject: "Mathematics",
      created: "April 28, 2025",
      size: "156 MB",
      downloads: 28,
      status: "published",
    },
    {
      id: "RES-2025-004",
      title: "Linear Algebra Basics - Matrix Operations",
      type: "Document",
      subject: "Mathematics",
      created: "April 20, 2025",
      size: "3.2 MB",
      downloads: 37,
      status: "published",
    },
    {
      id: "RES-2025-005",
      title: "Probability Theory - Advanced Concepts",
      type: "Document",
      subject: "Mathematics",
      created: "April 15, 2025",
      size: "4.1 MB",
      downloads: 19,
      status: "draft",
    },
  ]

  const assignments = [
    {
      id: "ASG-2025-001",
      title: "Calculus Mid-Term Practice",
      subject: "Mathematics",
      created: "May 8, 2025",
      dueDate: "May 20, 2025",
      assignedTo: 12,
      completed: 5,
      status: "active",
    },
    {
      id: "ASG-2025-002",
      title: "Integration Methods Quiz",
      subject: "Mathematics",
      created: "May 3, 2025",
      dueDate: "May 15, 2025",
      assignedTo: 8,
      completed: 6,
      status: "active",
    },
    {
      id: "ASG-2025-003",
      title: "Trigonometry Assessment",
      subject: "Mathematics",
      created: "April 25, 2025",
      dueDate: "May 5, 2025",
      assignedTo: 15,
      completed: 15,
      status: "completed",
    },
    {
      id: "ASG-2025-004",
      title: "Linear Algebra Problem Set",
      subject: "Mathematics",
      created: "April 18, 2025",
      dueDate: "April 30, 2025",
      assignedTo: 10,
      completed: 8,
      status: "completed",
    },
  ]

  const getStatusBadge = (status:any) => {
    switch (status) {
      case "published":
        return <Badge className="bg-green-600 hover:bg-green-700">Published</Badge>
      case "draft":
        return <Badge variant="outline">Draft</Badge>
      case "active":
        return <Badge className="bg-blue-600 hover:bg-blue-700">Active</Badge>
      case "completed":
        return <Badge className="bg-green-600 hover:bg-green-700">Completed</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

//can be made type of any

  const getTypeIcon = (type:string) => {
    switch (type) {
      case "Document":
        return <FileText className="h-4 w-4 mr-2" />
      case "Video":
        return <Video className="h-4 w-4 mr-2" />
      default:
        return <FileIcon className="h-4 w-4 mr-2" />
    }
  }

  return (
    <DashboardLayout role="tutor">
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold">Content Management</h1>
        <div className="flex items-center gap-2">
          <Button>
            <Plus className="h-4 w-4 mr-2" /> Create New
          </Button>
        </div>
      </div>

      <Tabs defaultValue="resources" className="w-full">
        <TabsList className="grid grid-cols-2 w-full max-w-md mb-4">
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
        </TabsList>

        <TabsContent value="resources" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="relative w-full sm:w-64 md:w-80">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search resources..." className="pl-8" />
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="document">Documents</SelectItem>
                  <SelectItem value="video">Videos</SelectItem>
                  <SelectItem value="quiz">Quizzes</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Learning Resources</CardTitle>
              <CardDescription>Manage your educational materials and resources</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Downloads</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {resources.map((resource) => (
                    <TableRow key={resource.id}>
                      <TableCell className="font-medium">{resource.title}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          {getTypeIcon(resource.type)}
                          {resource.type}
                        </div>
                      </TableCell>
                      <TableCell>{resource.subject}</TableCell>
                      <TableCell>{resource.created}</TableCell>
                      <TableCell>{resource.size}</TableCell>
                      <TableCell>{resource.downloads}</TableCell>
                      <TableCell>{getStatusBadge(resource.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">Showing 5 of 24 resources</div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Upload New Resource</CardTitle>
                <CardDescription>Add a new document, video, or quiz</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-2 border-dashed rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                    <h3 className="text-sm font-medium">Drag & drop files here</h3>
                    <p className="text-xs text-muted-foreground mt-1 mb-3">Supports PDF, DOCX, MP4, and more</p>
                    <Button size="sm" variant="outline">
                      Browse Files
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <Input placeholder="Resource title" />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mathematics">Mathematics</SelectItem>
                        <SelectItem value="science">Science</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="history">History</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea placeholder="Description (optional)" />
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button variant="outline">Save as Draft</Button>
                    <Button>Upload & Publish</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resource Analytics</CardTitle>
                <CardDescription>Most popular resources</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {resources.slice(0, 3).map((resource, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        {getTypeIcon(resource.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{resource.title}</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Download className="h-3 w-3 mr-1" /> {resource.downloads} downloads
                        </div>
                      </div>
                    </div>
                  ))}

                  <Button variant="outline" className="w-full mt-2">
                    View All Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Tips</CardTitle>
                <CardDescription>Best practices for content creation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-sm">Keep it concise</p>
                      <p className="text-xs text-muted-foreground">
                        Break down complex topics into digestible sections
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-sm">Use visual aids</p>
                      <p className="text-xs text-muted-foreground">
                        Include diagrams, charts, and examples when possible
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-sm">Provide practice problems</p>
                      <p className="text-xs text-muted-foreground">
                        Include exercises with solutions for self-assessment
                      </p>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full mt-2">
                    View Content Guidelines
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="assignments" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="relative w-full sm:w-64 md:w-80">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search assignments..." className="pl-8" />
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Assignments</CardTitle>
              <CardDescription>Manage your assignments and assessments</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Assigned To</TableHead>
                    <TableHead>Completion</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {assignments.map((assignment) => (
                    <TableRow key={assignment.id}>
                      <TableCell className="font-medium">{assignment.title}</TableCell>
                      <TableCell>{assignment.subject}</TableCell>
                      <TableCell>{assignment.created}</TableCell>
                      <TableCell>{assignment.dueDate}</TableCell>
                      <TableCell>{assignment.assignedTo} students</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-black h-2.5 rounded-full"
                              style={{ width: `${(assignment.completed / assignment.assignedTo) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-xs">
                            {assignment.completed}/{assignment.assignedTo}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(assignment.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">Showing 4 of 12 assignments</div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Create New Assignment</CardTitle>
                <CardDescription>Set up a new assignment for your students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input placeholder="Assignment title" />

                  <div className="grid grid-cols-2 gap-4">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mathematics">Mathematics</SelectItem>
                        <SelectItem value="science">Science</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="history">History</SelectItem>
                      </SelectContent>
                    </Select>

                    <Input type="date" />
                  </div>

                  <Textarea placeholder="Assignment description and instructions" className="min-h-[100px]" />

                  <div className="border-2 border-dashed rounded-lg p-4 text-center">
                    <Upload className="h-6 w-6 mx-auto text-muted-foreground mb-2" />
                    <p className="text-xs text-muted-foreground mb-2">Attach files or resources</p>
                    <Button size="sm" variant="outline">
                      Browse Files
                    </Button>
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button variant="outline">Save as Draft</Button>
                    <Button>Create & Assign</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Assignment Insights</CardTitle>
                <CardDescription>Performance metrics and completion rates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Completion Rates</h3>
                    <div className="space-y-3">
                      {assignments.map((assignment, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="truncate">{assignment.title}</span>
                            <span>{Math.round((assignment.completed / assignment.assignedTo) * 100)}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-black h-2 rounded-full"
                              style={{ width: `${(assignment.completed / assignment.assignedTo) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-2">Average Scores</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg text-center">
                        <p className="text-3xl font-bold">85%</p>
                        <p className="text-xs text-muted-foreground">Calculus Mid-Term</p>
                      </div>
                      <div className="p-4 border rounded-lg text-center">
                        <p className="text-3xl font-bold">92%</p>
                        <p className="text-xs text-muted-foreground">Integration Methods</p>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    View Detailed Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
    </DashboardLayout>
  )
}
