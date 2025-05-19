import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, DollarSign, TrendingUp, Clock, FileText, Calendar, ArrowUpRight } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function TutorEarningsPage() {
  // Sample data for earnings
  const monthlyEarnings = [
    { month: "Jan", amount: 1250 },
    { month: "Feb", amount: 1480 },
    { month: "Mar", amount: 1320 },
    { month: "Apr", amount: 1690 },
    { month: "May", amount: 1820 },
    { month: "Jun", amount: 1580 },
  ]

  const sessionsBySubject = [
    { subject: "Mathematics", sessions: 24 },
    { subject: "Science", sessions: 18 },
    { subject: "English", sessions: 12 },
    { subject: "History", sessions: 8 },
    { subject: "Computer Science", sessions: 6 },
  ]

  const recentPayments = [
    {
      id: "PAY-2025-05-12",
      date: "May 12, 2025",
      amount: 420.0,
      sessions: 7,
      status: "completed",
      method: "Direct Deposit",
    },
    {
      id: "PAY-2025-05-05",
      date: "May 5, 2025",
      amount: 360.0,
      sessions: 6,
      status: "completed",
      method: "Direct Deposit",
    },
    {
      id: "PAY-2025-04-28",
      date: "April 28, 2025",
      amount: 480.0,
      sessions: 8,
      status: "completed",
      method: "Direct Deposit",
    },
    {
      id: "PAY-2025-04-21",
      date: "April 21, 2025",
      amount: 300.0,
      sessions: 5,
      status: "completed",
      method: "Direct Deposit",
    },
    {
      id: "PAY-2025-04-14",
      date: "April 14, 2025",
      amount: 360.0,
      sessions: 6,
      status: "completed",
      method: "Direct Deposit",
    },
  ]

  const upcomingPayments = [
    {
      id: "PAY-2025-05-19",
      date: "May 19, 2025",
      amount: 480.0,
      sessions: 8,
      status: "pending",
      method: "Direct Deposit",
    },
  ]

  const getStatusBadge = (status:any) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-600 hover:bg-green-700">Completed</Badge>
      case "pending":
        return <Badge className="bg-yellow-600 hover:bg-yellow-700">Pending</Badge>
      case "failed":
        return <Badge variant="destructive">Failed</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <DashboardLayout role="tutor">
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold">Earnings & Payments</h1>
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
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Current Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline">
              <DollarSign className="h-4 w-4 text-muted-foreground mr-1" />
              <span className="text-3xl font-bold">480.00</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">To be paid on May 19, 2025</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline">
              <DollarSign className="h-4 w-4 text-muted-foreground mr-1" />
              <span className="text-3xl font-bold">1,260.00</span>
            </div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" /> +12% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline">
              <Clock className="h-4 w-4 text-muted-foreground mr-1" />
              <span className="text-3xl font-bold">21</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">This month (May 2025)</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-3 w-full max-w-md mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              {/* <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyEarnings}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amount" fill="#000000" />
                  </BarChart>
                </ResponsiveContainer>
              </div> */}
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sessions by Subject</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  {/* <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sessionsBySubject} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="subject" type="category" width={100} />
                      <Tooltip />
                      <Bar dataKey="sessions" fill="#000000" />
                    </BarChart>
                  </ResponsiveContainer> */}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center mr-3">
                        <DollarSign className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">Direct Deposit</p>
                        <p className="text-sm text-muted-foreground">Primary</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                        <FileText className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium">Tax Documents</p>
                        <p className="text-sm text-muted-foreground">W-9 on file</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>

                  <Button className="w-full mt-4" variant="outline">
                    Add Payment Method
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="payments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Payments</CardTitle>
            </CardHeader>
            <CardContent>
              {upcomingPayments.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Payment ID</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Sessions</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Method</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {upcomingPayments.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell className="font-medium">{payment.id}</TableCell>
                        <TableCell>{payment.date}</TableCell>
                        <TableCell>${payment.amount.toFixed(2)}</TableCell>
                        <TableCell>{payment.sessions}</TableCell>
                        <TableCell>{getStatusBadge(payment.status)}</TableCell>
                        <TableCell>{payment.method}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="text-center py-6">
                  <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                  <h3 className="text-lg font-medium">No upcoming payments</h3>
                  <p className="text-sm text-muted-foreground mt-1">Payments will appear here when scheduled</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Payment History</CardTitle>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Payment ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Sessions</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentPayments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">{payment.id}</TableCell>
                      <TableCell>{payment.date}</TableCell>
                      <TableCell>${payment.amount.toFixed(2)}</TableCell>
                      <TableCell>{payment.sessions}</TableCell>
                      <TableCell>{getStatusBadge(payment.status)}</TableCell>
                      <TableCell>{payment.method}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon">
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="invoices" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Invoices</CardTitle>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" /> Download All
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice ID</TableHead>
                    <TableHead>Period</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentPayments.map((payment, index) => (
                    <TableRow key={`invoice-${index}`}>
                      <TableCell className="font-medium">INV-{payment.id.substring(4)}</TableCell>
                      <TableCell>{payment.date}</TableCell>
                      <TableCell>${payment.amount.toFixed(2)}</TableCell>
                      <TableCell>{getStatusBadge(payment.status)}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4 mr-2" /> PDF
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tax Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center">
                    <FileText className="h-8 w-8 mr-4 text-gray-500" />
                    <div>
                      <p className="font-medium">2024 1099-MISC</p>
                      <p className="text-sm text-muted-foreground">Tax year 2024</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" /> Download
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center">
                    <FileText className="h-8 w-8 mr-4 text-gray-500" />
                    <div>
                      <p className="font-medium">2023 1099-MISC</p>
                      <p className="text-sm text-muted-foreground">Tax year 2023</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" /> Download
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center">
                    <FileText className="h-8 w-8 mr-4 text-gray-500" />
                    <div>
                      <p className="font-medium">W-9 Form</p>
                      <p className="text-sm text-muted-foreground">Updated Jan 15, 2025</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" /> Download
                    </Button>
                    <Button variant="outline" size="sm">
                      Update
                    </Button>
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
