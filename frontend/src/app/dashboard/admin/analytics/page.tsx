import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart2,
  TrendingUp,
  Users,
  Calendar,
  DollarSign,
  Clock,
  Download,
  ArrowUpRight,
  Activity,
  Zap,
  AlertTriangle,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"

export default function PlatformAnalytics() {
  return (
    <DashboardLayout role="admin">
      <div className="container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Platform Analytics</h1>
            <p className="text-gray-500">Comprehensive analytics and performance metrics</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Select defaultValue="may">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="may">May 2025</SelectItem>
                <SelectItem value="april">April 2025</SelectItem>
                <SelectItem value="q2">Q2 2025</SelectItem>
                <SelectItem value="ytd">Year to Date</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="p-2 rounded-full bg-red-100">
                  <Users className="h-5 w-5 text-red-600" />
                </div>
                <Badge className="bg-green-100 text-green-600">+12%</Badge>
              </div>
              <div className="text-2xl font-bold">1,248</div>
              <p className="text-sm text-gray-500">Total Users</p>
              <div className="flex items-center mt-2 text-xs text-gray-500">
                <ArrowUpRight className="h-3 w-3 mr-1 text-green-600" />
                <span>+148 from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="p-2 rounded-full bg-red-100">
                  <Calendar className="h-5 w-5 text-red-600" />
                </div>
                <Badge className="bg-green-100 text-green-600">+8%</Badge>
              </div>
              <div className="text-2xl font-bold">3,542</div>
              <p className="text-sm text-gray-500">Sessions Booked</p>
              <div className="flex items-center mt-2 text-xs text-gray-500">
                <ArrowUpRight className="h-3 w-3 mr-1 text-green-600" />
                <span>+262 from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="p-2 rounded-full bg-red-100">
                  <DollarSign className="h-5 w-5 text-red-600" />
                </div>
                <Badge className="bg-green-100 text-green-600">+15%</Badge>
              </div>
              <div className="text-2xl font-bold">$24,850</div>
              <p className="text-sm text-gray-500">Total Revenue</p>
              <div className="flex items-center mt-2 text-xs text-gray-500">
                <ArrowUpRight className="h-3 w-3 mr-1 text-green-600" />
                <span>+$3,250 from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="p-2 rounded-full bg-red-100">
                  <Clock className="h-5 w-5 text-red-600" />
                </div>
                <Badge className="bg-green-100 text-green-600">+10%</Badge>
              </div>
              <div className="text-2xl font-bold">4,820</div>
              <p className="text-sm text-gray-500">Teaching Hours</p>
              <div className="flex items-center mt-2 text-xs text-gray-500">
                <ArrowUpRight className="h-3 w-3 mr-1 text-green-600" />
                <span>+438 from last month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Tabs */}
        <Tabs defaultValue="usage" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="usage" className="data-[state=active]:bg-red-100 data-[state=active]:text-red-600">
              <BarChart2 className="h-4 w-4 mr-2" />
              Usage Statistics
            </TabsTrigger>
            <TabsTrigger value="growth" className="data-[state=active]:bg-red-100 data-[state=active]:text-red-600">
              <TrendingUp className="h-4 w-4 mr-2" />
              Growth Trends
            </TabsTrigger>
            <TabsTrigger
              value="performance"
              className="data-[state=active]:bg-red-100 data-[state=active]:text-red-600"
            >
              <Activity className="h-4 w-4 mr-2" />
              System Performance
            </TabsTrigger>
          </TabsList>

          <TabsContent value="usage">
            <Card>
              <CardHeader>
                <CardTitle>Platform Usage Statistics</CardTitle>
                <CardDescription>Key metrics about how users are engaging with the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center mb-6 border rounded-md bg-gray-50">
                  <div className="text-center">
                    <BarChart2 className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-500">Usage statistics chart will be displayed here</p>
                    <p className="text-sm text-gray-400 mt-1">Showing data for May 2025</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">User Engagement</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Daily Active Users</span>
                          <span className="text-sm">485</span>
                        </div>
                        <Progress value={78} className="h-2" />
                        <div className="flex justify-between mt-1 text-xs text-gray-500">
                          <span>+12% from last month</span>
                          <span>Target: 600</span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Session Completion Rate</span>
                          <span className="text-sm">94.8%</span>
                        </div>
                        <Progress value={94.8} className="h-2" />
                        <div className="flex justify-between mt-1 text-xs text-gray-500">
                          <span>+2.3% from last month</span>
                          <span>Target: 95%</span>
                        </div>
                      </div>    

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Average Session Duration</span>
                          <span className="text-sm">52 min</span>
                        </div>
                        <Progress value={87} className="h-2" />
                        <div className="flex justify-between mt-1 text-xs text-gray-500">
                          <span>+5 min from last month</span>
                          <span>Target: 60 min</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Feature Usage</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Messaging</span>
                          <span className="text-sm">92%</span>
                        </div>
                        <Progress value={92} className="h-2" />
                        <div className="mt-1 text-xs text-gray-500">
                          <span>% of users using messaging features</span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">File Sharing</span>
                          <span className="text-sm">78%</span>
                        </div>
                        <Progress value={78} className="h-2" />
                        <div className="mt-1 text-xs text-gray-500">
                          <span>% of users sharing files</span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">AI Assistant</span>
                          <span className="text-sm">65%</span>
                        </div>
                        <Progress value={65} className="h-2" />
                        <div className="mt-1 text-xs text-gray-500">
                          <span>% of users interacting with AI</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">User Distribution</h3>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-md">
                        <h4 className="text-sm font-medium mb-3">By Role</h4>
                        <div className="space-y-2">
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-xs">Students</span>
                              <span className="text-xs">982 (78.7%)</span>
                            </div>
                            <Progress value={78.7} className="h-1.5" />
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-xs">Parents</span>
                              <span className="text-xs">215 (17.2%)</span>
                            </div>
                            <Progress value={17.2} className="h-1.5" />
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-xs">Tutors</span>
                              <span className="text-xs">48 (3.8%)</span>
                            </div>
                            <Progress value={3.8} className="h-1.5" />
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-xs">Admins</span>
                              <span className="text-xs">3 (0.3%)</span>
                            </div>
                            <Progress value={0.3} className="h-1.5" />
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-md">
                        <h4 className="text-sm font-medium mb-3">By Device</h4>
                        <div className="space-y-2">
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-xs">Desktop</span>
                              <span className="text-xs">45%</span>
                            </div>
                            <Progress value={45} className="h-1.5" />
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-xs">Mobile</span>
                              <span className="text-xs">42%</span>
                            </div>
                            <Progress value={42} className="h-1.5" />
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-xs">Tablet</span>
                              <span className="text-xs">13%</span>
                            </div>
                            <Progress value={13} className="h-1.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="growth">
            <Card>
              <CardHeader>
                <CardTitle>Growth Trends</CardTitle>
                <CardDescription>User acquisition and revenue growth metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center mb-6 border rounded-md bg-gray-50">
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-500">Growth trends chart will be displayed here</p>
                    <p className="text-sm text-gray-400 mt-1">Showing data for the last 6 months</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">User Growth</h3>
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <Card className="bg-gray-50 border shadow-none">
                          <CardContent className="p-4">
                            <div className="text-sm text-gray-500">New Users (May)</div>
                            <div className="text-2xl font-bold mt-1">148</div>
                            <div className="flex items-center mt-1 text-xs">
                              <ArrowUpRight className="h-3 w-3 mr-1 text-green-600" />
                              <span className="text-green-600">+12%</span>
                              <span className="text-gray-500 ml-1">vs. April</span>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="bg-gray-50 border shadow-none">
                          <CardContent className="p-4">
                            <div className="text-sm text-gray-500">User Retention</div>
                            <div className="text-2xl font-bold mt-1">92%</div>
                            <div className="flex items-center mt-1 text-xs">
                              <ArrowUpRight className="h-3 w-3 mr-1 text-green-600" />
                              <span className="text-green-600">+3%</span>
                              <span className="text-gray-500 ml-1">vs. April</span>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium mb-3">Acquisition Channels</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm">Organic Search</span>
                              <span className="text-sm">42%</span>
                            </div>
                            <Progress value={42} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm">Direct</span>
                              <span className="text-sm">28%</span>
                            </div>
                            <Progress value={28} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm">Referrals</span>
                              <span className="text-sm">18%</span>
                            </div>
                            <Progress value={18} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm">Social Media</span>
                              <span className="text-sm">12%</span>
                            </div>
                            <Progress value={12} className="h-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Revenue Growth</h3>
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <Card className="bg-gray-50 border shadow-none">
                          <CardContent className="p-4">
                            <div className="text-sm text-gray-500">Monthly Revenue</div>
                            <div className="text-2xl font-bold mt-1">$24,850</div>
                            <div className="flex items-center mt-1 text-xs">
                              <ArrowUpRight className="h-3 w-3 mr-1 text-green-600" />
                              <span className="text-green-600">+15%</span>
                              <span className="text-gray-500 ml-1">vs. April</span>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="bg-gray-50 border shadow-none">
                          <CardContent className="p-4">
                            <div className="text-sm text-gray-500">Avg. Revenue per User</div>
                            <div className="text-2xl font-bold mt-1">$19.90</div>
                            <div className="flex items-center mt-1 text-xs">
                              <ArrowUpRight className="h-3 w-3 mr-1 text-green-600" />
                              <span className="text-green-600">+5%</span>
                              <span className="text-gray-500 ml-1">vs. April</span>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium mb-3">Revenue by Subject</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm">Mathematics</span>
                              <span className="text-sm">$8,450</span>
                            </div>
                            <Progress value={34} className="h-2" />
                            <div className="text-xs text-gray-500 mt-1">34% of total revenue</div>
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm">Science</span>
                              <span className="text-sm">$6,210</span>
                            </div>
                            <Progress value={25} className="h-2" />
                            <div className="text-xs text-gray-500 mt-1">25% of total revenue</div>
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm">English</span>
                              <span className="text-sm">$5,220</span>
                            </div>
                            <Progress value={21} className="h-2" />
                            <div className="text-xs text-gray-500 mt-1">21% of total revenue</div>
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm">Other Subjects</span>
                              <span className="text-sm">$4,970</span>
                            </div>
                            <Progress value={20} className="h-2" />
                            <div className="text-xs text-gray-500 mt-1">20% of total revenue</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance">
            <Card>
              <CardHeader>
                <CardTitle>System Performance</CardTitle>
                <CardDescription>Platform uptime, response times, and error tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Card className="bg-white shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <div className="p-2 rounded-full bg-green-100">
                          <Zap className="h-5 w-5 text-green-600" />
                        </div>
                        <Badge className="bg-green-100 text-green-600">99.98%</Badge>
                      </div>
                      <h3 className="text-lg font-medium">Uptime</h3>
                      <p className="text-sm text-gray-500">Last 30 days</p>
                      <div className="text-xs text-gray-500 mt-2">5 minutes of downtime</div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <div className="p-2 rounded-full bg-blue-100">
                          <Clock className="h-5 w-5 text-blue-600" />
                        </div>
                        <Badge className="bg-green-100 text-green-600">-15%</Badge>
                      </div>
                      <h3 className="text-lg font-medium">Avg. Response Time</h3>
                      <p className="text-sm text-gray-500">185ms</p>
                      <div className="text-xs text-gray-500 mt-2">Improved from 218ms last month</div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <div className="p-2 rounded-full bg-red-100">
                          <AlertTriangle className="h-5 w-5 text-red-600" />
                        </div>
                        <Badge className="bg-red-100 text-red-600">+3</Badge>
                      </div>
                      <h3 className="text-lg font-medium">Error Rate</h3>
                      <p className="text-sm text-gray-500">0.12%</p>
                      <div className="text-xs text-gray-500 mt-2">28 errors in the last 7 days</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Response Time Breakdown</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b text-xs text-gray-500">
                            <th className="px-4 py-3 text-left">Endpoint</th>
                            <th className="px-4 py-3 text-left">Avg. Response Time</th>
                            <th className="px-4 py-3 text-left">P95 Response Time</th>
                            <th className="px-4 py-3 text-left">Requests/Day</th>
                            <th className="px-4 py-3 text-left">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            {
                              endpoint: "/api/auth",
                              avgTime: "82ms",
                              p95Time: "145ms",
                              requests: "12,450",
                              status: "Healthy",
                            },
                            {
                              endpoint: "/api/sessions",
                              avgTime: "124ms",
                              p95Time: "210ms",
                              requests: "8,320",
                              status: "Healthy",
                            },
                            {
                              endpoint: "/api/messages",
                              avgTime: "95ms",
                              p95Time: "180ms",
                              requests: "24,680",
                              status: "Healthy",
                            },
                            {
                              endpoint: "/api/payments",
                              avgTime: "215ms",
                              p95Time: "350ms",
                              requests: "3,240",
                              status: "Warning",
                            },
                            {
                              endpoint: "/api/analytics",
                              avgTime: "310ms",
                              p95Time: "520ms",
                              requests: "1,850",
                              status: "Warning",
                            },
                          ].map((endpoint, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                              <td className="px-4 py-3 font-medium">{endpoint.endpoint}</td>
                              <td className="px-4 py-3">{endpoint.avgTime}</td>
                              <td className="px-4 py-3">{endpoint.p95Time}</td>
                              <td className="px-4 py-3">{endpoint.requests}</td>
                              <td className="px-4 py-3">
                                <Badge
                                  className={
                                    endpoint.status === "Healthy"
                                      ? "bg-green-100 text-green-600"
                                      : endpoint.status === "Warning"
                                        ? "bg-yellow-100 text-yellow-600"
                                        : "bg-red-100 text-red-600"
                                  }
                                >
                                  {endpoint.status}
                                </Badge>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Recent Errors</h3>
                    <div className="space-y-3">
                      {[
                        {
                          type: "Payment Processing Error",
                          endpoint: "/api/payments/process",
                          count: 8,
                          lastOccurred: "2 hours ago",
                          status: "Investigating",
                        },
                        {
                          type: "Database Connection Timeout",
                          endpoint: "/api/analytics/report",
                          count: 5,
                          lastOccurred: "5 hours ago",
                          status: "Resolved",
                        },
                        {
                          type: "File Upload Failure",
                          endpoint: "/api/content/upload",
                          count: 12,
                          lastOccurred: "Yesterday",
                          status: "Resolved",
                        },
                      ].map((error, index) => (
                        <div key={index} className="p-4 rounded-md border bg-white">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                              <div className="flex items-center">
                                <AlertTriangle className="h-4 w-4 text-red-600 mr-2" />
                                <h4 className="font-medium">{error.type}</h4>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">Endpoint: {error.endpoint}</p>
                            </div>
                            <div className="mt-2 md:mt-0 md:text-right">
                              <Badge
                                className={
                                  error.status === "Resolved"
                                    ? "bg-green-100 text-green-600"
                                    : "bg-yellow-100 text-yellow-600"
                                }
                              >
                                {error.status}
                              </Badge>
                              <div className="text-sm text-gray-500 mt-1">
                                {error.count} occurrences, last seen {error.lastOccurred}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
