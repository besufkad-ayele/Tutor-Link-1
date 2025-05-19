import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import {
  Users,
  DollarSign,
  BarChart2,
  UserCheck,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AdminDashboard() {
  return (
    <DashboardLayout role="admin">
      <div className="container mx-auto p-4 md:p-6">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

        {/* Welcome Card */}
        <Card className="mb-6 bg-gradient-to-r from-red-600/90 to-red-500/80 border-none rounded-md shadow-md text-white">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-xl font-semibold">Welcome back, Admin!</h2>
                <p className="text-white/80 mt-1">Platform overview for May 11, 2025</p>
              </div>
            </div>
          </CardContent>
        </Card>Total Users
1,248
+12% this month

Pending Approvals
8
Requires attention

Total Revenue
$24,850
+8.5% from last month

Active Sessions


        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="rounded-md shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">1,248</div>
                <Users className="h-5 w-5 text-red-600" />
              </div>
              <div className="flex items-center mt-1">
                <TrendingUp className="h-3 w-3 text-green-600 mr-1" />
                <p className="text-xs text-green-600">+12% this month</p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-md shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Pending Approvals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">8</div>
                <UserCheck className="h-5 w-5 text-red-600" />
              </div>
              <div className="flex items-center mt-1">
                <Clock className="h-3 w-3 text-yellow-600 mr-1" />
                <p className="text-xs text-yellow-600">Requires attention</p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-md shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">$24,850</div>
                <DollarSign className="h-5 w-5 text-red-600" />
              </div>
              <div className="flex items-center mt-1">
                <TrendingUp className="h-3 w-3 text-green-600 mr-1" />
                <p className="text-xs text-green-600">+8.5% from last month</p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-md shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Active Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">32</div>
                <BarChart2 className="h-5 w-5 text-red-600" />
              </div>
              <div className="flex items-center mt-1">
                <TrendingDown className="h-3 w-3 text-red-600 mr-1" />
                <p className="text-xs text-red-600">-5% from peak hours</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <Card className="rounded-md shadow-sm">
              <CardHeader>
                <CardTitle>Pending Tutor Approvals</CardTitle>
                <CardDescription>Tutors awaiting verification</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Dr. Robert Chen",
                      specialty: "Physics & Mathematics",
                      appliedDate: "May 10, 2025",
                      status: "Background Check Pending",
                    },
                    {
                      name: "Ms. Jessica Williams",
                      specialty: "English Literature",
                      appliedDate: "May 9, 2025",
                      status: "Document Verification",
                    },
                    {
                      name: "Mr. David Johnson",
                      specialty: "Computer Science",
                      appliedDate: "May 8, 2025",
                      status: "Interview Scheduled",
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
                              <p className="text-sm text-gray-600">{tutor.specialty}</p>
                              <div className="flex items-center mt-1">
                                <Clock className="h-4 w-4 mr-1 text-yellow-600" />
                                <span className="text-xs text-yellow-600">{tutor.status}</span>
                              </div>
                            </div>
                            <div className="mt-3 md:mt-0 flex items-center gap-2">
                              <span className="text-xs text-gray-500">Applied: {tutor.appliedDate}</span>
                              <div className="flex gap-2">
                                <Button size="sm" className="bg-green-600 text-white hover:bg-green-700">
                                  <CheckCircle className="h-4 w-4 mr-1" />
                                  Approve
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-red-600 text-red-600 hover:bg-red-50"
                                >
                                  <XCircle className="h-4 w-4 mr-1" />
                                  Reject
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Pending Approvals
                </Button>
              </CardContent>
            </Card>

            {/* System Alerts */}
            {/* <Card className="rounded-md shadow-sm mt-6">
              <CardHeader>
                <CardTitle>System Alerts</CardTitle>
                <CardDescription>Recent issues requiring attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Payment Processing Error",
                      description: "3 transactions failed to process in the last 24 hours",
                      severity: "high",
                      time: "2 hours ago",
                    },
                    {
                      title: "User Reports",
                      description: "5 new reports against tutor behavior",
                      severity: "medium",
                      time: "5 hours ago",
                    },
                    {
                      title: "System Performance",
                      description: "Increased latency detected during peak hours",
                      severity: "low",
                      time: "Yesterday",
                    },
                  ].map((alert, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-md border ${
                        alert.severity === "high"
                          ? "border-red-200 bg-red-50"
                          : alert.severity === "medium"
                            ? "border-yellow-200 bg-yellow-50"
                            : "border-blue-200 bg-blue-50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`p-2 rounded-full ${
                            alert.severity === "high"
                              ? "bg-red-100 text-red-600"
                              : alert.severity === "medium"
                                ? "bg-yellow-100 text-yellow-600"
                                : "bg-blue-100 text-blue-600"
                          }`}
                        >
                          <AlertTriangle className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold">{alert.title}</h4>
                              <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
                            </div>
                            <span className="text-xs text-gray-500">{alert.time}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-end">
                        <Button
                          size="sm"
                          className={`${
                            alert.severity === "high"
                              ? "bg-red-600"
                              : alert.severity === "medium"
                                ? "bg-yellow-600"
                                : "bg-blue-600"
                          } text-white hover:opacity-90`}
                        >
                          Resolve Issue
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card> */}
          </div>

          {/* Right Column */}
          <div>
            {/* Platform Analytics */}
            {/* <Card className="rounded-md shadow-sm">
              <CardHeader>
                <CardTitle>Platform Analytics</CardTitle>
                <CardDescription>Key metrics overview</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      metric: "Active Users",
                      value: "845",
                      change: "+12%",
                      trend: "up",
                    },
                    {
                      metric: "Session Completion Rate",
                      value: "94.8%",
                      change: "+2.3%",
                      trend: "up",
                    },
                    {
                      metric: "Average Session Duration",
                      value: "52 min",
                      change: "+5 min",
                      trend: "up",
                    },
                    {
                      metric: "Support Tickets",
                      value: "28",
                      change: "-15%",
                      trend: "down",
                    },
                    {
                      metric: "New User Registrations",
                      value: "124",
                      change: "+8%",
                      trend: "up",
                    },
                  ].map((metric, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border-b">
                      <div>
                        <h4 className="text-sm font-medium">{metric.metric}</h4>
                        <div className="text-lg font-bold">{metric.value}</div>
                      </div>
                      <div className={`flex items-center ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                        {metric.trend === "up" ? (
                          <TrendingUp className="h-4 w-4 mr-1" />
                        ) : (
                          <TrendingDown className="h-4 w-4 mr-1" />
                        )}
                        <span>{metric.change}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="w-full mt-4 bg-red-600 text-white hover:bg-red-700">View Detailed Analytics</Button>
              </CardContent>
            </Card> */}

            {/* Recent Transactions */}
            <Card className="rounded-md shadow-sm mt-6">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Latest payment activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    {
                      id: "TRX-8294",
                      amount: "$120.00",
                      status: "Completed",
                      date: "May 11, 2025",
                    },
                    {
                      id: "TRX-8293",
                      amount: "$85.00",
                      status: "Completed",
                      date: "May 11, 2025",
                    },
                    {
                      id: "TRX-8292",
                      amount: "$45.00",
                      status: "Failed",
                      date: "May 10, 2025",
                    },
                    {
                      id: "TRX-8291",
                      amount: "$150.00",
                      status: "Completed",
                      date: "May 10, 2025",
                    },
                    {
                      id: "TRX-8290",
                      amount: "$95.00",
                      status: "Pending",
                      date: "May 10, 2025",
                    },
                  ].map((transaction, index) => (
                    <div key={index} className="flex justify-between items-center p-2 border-b">
                      <div>
                        <div className="text-sm font-medium">{transaction.id}</div>
                        <div className="text-xs text-gray-500">{transaction.date}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{transaction.amount}</div>
                        <div
                          className={`text-xs ${
                            transaction.status === "Completed"
                              ? "text-green-600"
                              : transaction.status === "Failed"
                                ? "text-red-600"
                                : "text-yellow-600"
                          }`}
                        >
                          {transaction.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full mt-4 border-red-600 text-red-600 hover:bg-red-50">
                  View All Transactions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Content Management */}
        {/* <Card className="rounded-md shadow-sm">
          <CardHeader>
            <CardTitle>Content Management</CardTitle>
            <CardDescription>Recent updates to platform content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "FAQ Updates",
                  description: "Last updated 2 days ago",
                  items: 48,
                  action: "Edit FAQs",
                },
                {
                  title: "Help Center Articles",
                  description: "Last updated 5 days ago",
                  items: 124,
                  action: "Manage Articles",
                },
                {
                  title: "Platform Announcements",
                  description: "Last updated today",
                  items: 12,
                  action: "Create Announcement",
                },
              ].map((content, index) => (
                <Card key={index} className="bg-white border shadow-sm">
                  <CardContent className="p-4">
                    <h3 className="font-semibold">{content.title}</h3>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm text-gray-500">{content.description}</span>
                      <span className="text-sm font-medium">{content.items} items</span>
                    </div>
                    <Button className="w-full mt-4 bg-red-600 text-white hover:bg-red-700">{content.action}</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card> */}
      </div>
    </DashboardLayout>
  )
}
