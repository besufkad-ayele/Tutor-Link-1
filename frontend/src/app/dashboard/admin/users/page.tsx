import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  UserCheck,
  UserX,
  Users,
  Search,
  Filter,
  MoreHorizontal,
  CheckCircle,
  XCircle,
  Shield,
  Download,
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function UserManagement() {
  return (
    <DashboardLayout role="admin">
      <div className="container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">User Management</h1>
            <p className="text-gray-500">Manage platform users, approvals, and permissions</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button className="bg-red-600 text-white hover:bg-red-700">
              <UserCheck className="h-4 w-4 mr-2" />
              Approve Selected
            </Button>
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
              <Download className="h-4 w-4 mr-2" />
              Export Users
            </Button>
          </div>
        </div>

        {/* User Management Tabs */}
        <Tabs defaultValue="all-users" className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <TabsList className="mb-4 md:mb-0">
              <TabsTrigger
                value="all-users"
                className="data-[state=active]:bg-red-100 data-[state=active]:text-red-600"
              >
                <Users className="h-4 w-4 mr-2" />
                All Users
              </TabsTrigger>
              <TabsTrigger value="pending" className="data-[state=active]:bg-red-100 data-[state=active]:text-red-600">
                <UserCheck className="h-4 w-4 mr-2" />
                Pending Approval
              </TabsTrigger>
              <TabsTrigger
                value="suspended"
                className="data-[state=active]:bg-red-100 data-[state=active]:text-red-600"
              >
                <UserX className="h-4 w-4 mr-2" />
                Suspended
              </TabsTrigger>
            </TabsList>

            <div className="flex w-full md:w-auto gap-2">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="Search users..." className="pl-10" />
              </div>
              <Button variant="outline" className="border-gray-300">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          <TabsContent value="all-users">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>All Users</CardTitle>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Show:</span>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[140px] h-8">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Roles</SelectItem>
                        <SelectItem value="student">Students</SelectItem>
                        <SelectItem value="parent">Parents</SelectItem>
                        <SelectItem value="tutor">Tutors</SelectItem>
                        <SelectItem value="admin">Admins</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <CardDescription>Manage all platform users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b text-xs text-gray-500">
                        <th className="px-4 py-3 text-left">User</th>
                        <th className="px-4 py-3 text-left">Role</th>
                        <th className="px-4 py-3 text-left">Status</th>
                        <th className="px-4 py-3 text-left">Joined</th>
                        <th className="px-4 py-3 text-left">Last Active</th>
                        <th className="px-4 py-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          name: "Emma Smith",
                          email: "emma.smith@example.com",
                          role: "Student",
                          status: "Active",
                          joined: "May 10, 2025",
                          lastActive: "Today",
                        },
                        {
                          name: "John Doe",
                          email: "john.doe@example.com",
                          role: "Parent",
                          status: "Active",
                          joined: "Apr 28, 2025",
                          lastActive: "Yesterday",
                        },
                        {
                          name: "Dr. Robert Chen",
                          email: "robert.chen@example.com",
                          role: "Tutor",
                          status: "Pending",
                          joined: "May 10, 2025",
                          lastActive: "Never",
                        },
                        {
                          name: "Sarah Johnson",
                          email: "sarah.johnson@example.com",
                          role: "Tutor",
                          status: "Active",
                          joined: "Mar 15, 2025",
                          lastActive: "2 days ago",
                        },
                        {
                          name: "Michael Williams",
                          email: "michael.williams@example.com",
                          role: "Parent",
                          status: "Suspended",
                          joined: "Jan 5, 2025",
                          lastActive: "Apr 28, 2025",
                        },
                        {
                          name: "Jessica Brown",
                          email: "jessica.brown@example.com",
                          role: "Student",
                          status: "Active",
                          joined: "Feb 12, 2025",
                          lastActive: "Today",
                        },
                        {
                          name: "David Miller",
                          email: "david.miller@example.com",
                          role: "Admin",
                          status: "Active",
                          joined: "Nov 8, 2024",
                          lastActive: "Today",
                        },
                      ].map((user, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={user.name} />
                                <AvatarFallback className="bg-red-100 text-red-600">
                                  {user.name.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{user.name}</div>
                                <div className="text-xs text-gray-500">{user.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <Badge
                              className={
                                user.role === "Admin"
                                  ? "bg-red-100 text-red-600 hover:bg-red-200"
                                  : user.role === "Tutor"
                                    ? "bg-black/10 text-black hover:bg-black/20"
                                    : user.role === "Parent"
                                      ? "bg-[#a39800]/10 text-[#a39800] hover:bg-[#a39800]/20"
                                      : "bg-[#c1d86f]/10 text-[#c1d86f] hover:bg-[#c1d86f]/20"
                              }
                            >
                              {user.role}
                            </Badge>
                          </td>
                          <td className="px-4 py-3">
                            <Badge
                              className={
                                user.status === "Active"
                                  ? "bg-green-100 text-green-600 hover:bg-green-200"
                                  : user.status === "Pending"
                                    ? "bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                                    : "bg-red-100 text-red-600 hover:bg-red-200"
                              }
                            >
                              {user.status}
                            </Badge>
                          </td>
                          <td className="px-4 py-3 text-sm">{user.joined}</td>
                          <td className="px-4 py-3 text-sm">{user.lastActive}</td>
                          <td className="px-4 py-3 text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>View Profile</DropdownMenuItem>
                                <DropdownMenuItem>Edit User</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                {user.status === "Pending" ? (
                                  <DropdownMenuItem className="text-green-600">Approve User</DropdownMenuItem>
                                ) : user.status === "Suspended" ? (
                                  <DropdownMenuItem className="text-green-600">Reactivate User</DropdownMenuItem>
                                ) : (
                                  <DropdownMenuItem className="text-yellow-600">Suspend User</DropdownMenuItem>
                                )}
                                <DropdownMenuItem className="text-red-600">Delete User</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm text-gray-500">Showing 7 of 1,248 users</div>
                  <div className="flex gap-1">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" className="bg-red-50">
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      3
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pending">
            <Card>
              <CardHeader>
                <CardTitle>Pending Approvals</CardTitle>
                <CardDescription>Users awaiting verification and approval</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Dr. Robert Chen",
                      email: "robert.chen@example.com",
                      role: "Tutor",
                      specialty: "Physics & Mathematics",
                      appliedDate: "May 10, 2025",
                      status: "Background Check Pending",
                      documents: ["ID Verification", "Degree Certificate", "Teaching License"],
                    },
                    {
                      name: "Ms. Jessica Williams",
                      email: "jessica.williams@example.com",
                      role: "Tutor",
                      specialty: "English Literature",
                      appliedDate: "May 9, 2025",
                      status: "Document Verification",
                      documents: ["ID Verification", "Degree Certificate", "Teaching Experience"],
                    },
                    {
                      name: "Mr. David Johnson",
                      email: "david.johnson@example.com",
                      role: "Tutor",
                      specialty: "Computer Science",
                      appliedDate: "May 8, 2025",
                      status: "Interview Scheduled",
                      documents: ["ID Verification", "Degree Certificate", "Portfolio"],
                    },
                  ].map((tutor, index) => (
                    <div key={index} className="p-4 rounded-md border bg-white">
                      <div className="flex flex-col md:flex-row gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={`/placeholder.svg?height=48&width=48`} alt={tutor.name} />
                          <AvatarFallback className="bg-red-600 text-white">{tutor.name.charAt(0)}</AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                              <h4 className="font-semibold">{tutor.name}</h4>
                              <p className="text-sm text-gray-600">{tutor.email}</p>
                              <div className="flex items-center mt-1">
                                <Badge className="bg-black/10 text-black">Tutor</Badge>
                                <span className="mx-2 text-gray-400">•</span>
                                <span className="text-sm">{tutor.specialty}</span>
                              </div>
                            </div>
                            <div className="mt-3 md:mt-0 text-right">
                              <div className="text-sm text-gray-500">Applied: {tutor.appliedDate}</div>
                              <Badge className="mt-1 bg-yellow-100 text-yellow-600">{tutor.status}</Badge>
                            </div>
                          </div>

                          <div className="mt-4">
                            <h5 className="text-sm font-medium mb-2">Submitted Documents</h5>
                            <div className="flex flex-wrap gap-2">
                              {tutor.documents.map((doc, idx) => (
                                <Badge key={idx} variant="outline" className="bg-gray-50">
                                  {doc}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-end">
                            <Button variant="outline">View Documents</Button>
                            <Button variant="outline" className="border-yellow-600 text-yellow-600 hover:bg-yellow-50">
                              Request More Info
                            </Button>
                            <Button className="bg-green-600 text-white hover:bg-green-700">
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Approve
                            </Button>
                            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                              <XCircle className="h-4 w-4 mr-2" />
                              Reject
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

          <TabsContent value="suspended">
            <Card>
              <CardHeader>
                <CardTitle>Suspended Users</CardTitle>
                <CardDescription>Users with suspended accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Michael Williams",
                      email: "michael.williams@example.com",
                      role: "Parent",
                      suspendedDate: "Apr 28, 2025",
                      reason: "Payment Dispute",
                      suspendedBy: "System",
                    },
                    {
                      name: "Jennifer Davis",
                      email: "jennifer.davis@example.com",
                      role: "Tutor",
                      suspendedDate: "Apr 15, 2025",
                      reason: "Policy Violation",
                      suspendedBy: "Admin (David Miller)",
                    },
                    {
                      name: "Thomas Brown",
                      email: "thomas.brown@example.com",
                      role: "Student",
                      suspendedDate: "Mar 22, 2025",
                      reason: "Inappropriate Behavior",
                      suspendedBy: "Admin (David Miller)",
                    },
                  ].map((user, index) => (
                    <div key={index} className="p-4 rounded-md border bg-white">
                      <div className="flex flex-col md:flex-row gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={`/placeholder.svg?height=48&width=48`} alt={user.name} />
                          <AvatarFallback className="bg-red-100 text-red-600">{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                              <h4 className="font-semibold">{user.name}</h4>
                              <p className="text-sm text-gray-600">{user.email}</p>
                              <div className="flex items-center mt-1">
                                <Badge
                                  className={
                                    user.role === "Admin"
                                      ? "bg-red-100 text-red-600"
                                      : user.role === "Tutor"
                                        ? "bg-black/10 text-black"
                                        : user.role === "Parent"
                                          ? "bg-[#a39800]/10 text-[#a39800]"
                                          : "bg-[#c1d86f]/10 text-[#c1d86f]"
                                  }
                                >
                                  {user.role}
                                </Badge>
                              </div>
                            </div>
                            <div className="mt-3 md:mt-0 text-right">
                              <div className="text-sm text-gray-500">Suspended: {user.suspendedDate}</div>
                              <div className="text-sm text-gray-500">By: {user.suspendedBy}</div>
                            </div>
                          </div>

                          <div className="mt-4">
                            <h5 className="text-sm font-medium mb-2">Suspension Reason</h5>
                            <p className="text-sm text-gray-600">{user.reason}</p>
                          </div>

                          <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-end">
                            <Button variant="outline">View User History</Button>
                            <Button className="bg-green-600 text-white hover:bg-green-700">
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Reactivate Account
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
        </Tabs>

        {/* Role Management */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Role Management</CardTitle>
            <CardDescription>Manage user roles and permissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                {
                  role: "Admin",
                  permissions: [
                    "Full platform access",
                    "User management",
                    "Financial operations",
                    "Content management",
                  ],
                  color: "bg-red-100 text-red-600",
                },
                {
                  role: "Tutor",
                  permissions: [
                    "Session management",
                    "Student progress tracking",
                    "Content creation",
                    "Earnings management",
                  ],
                  color: "bg-black/10 text-black",
                },
                {
                  role: "Parent",
                  permissions: ["Child management", "Tutor hiring", "Session booking", ],
                  color: "bg-[#a39800]/10 text-[#a39800]",
                },
                {
                  role: "Student",
                  permissions: ["Session attendance", "Progress viewing", "Material access", "Tutor messaging"],
                  color: "bg-[#c1d86f]/10 text-[#c1d86f]",
                },
              ].map((role, index) => (
                <Card key={index} className="border shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <Badge className={role.color}>{role.role}</Badge>
                    </div>
                    <h4 className="text-sm font-medium mb-2">Permissions</h4>
                    <ul className="space-y-1">
                      {role.permissions.map((permission, idx) => (
                        <li key={idx} className="text-xs flex items-center">
                          <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                          {permission}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
