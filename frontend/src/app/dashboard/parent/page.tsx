"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Calendar, DollarSign, Users, Search, Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";

// async function fetchDashboardData() {
//   console.log("Fetching dashboard data from API..."); // Log when the fetch starts
//   try {
//     // Use the updated auth request function that includes credentials
//     const response = await fetch('/api/users/parent', createAuthRequest('GET'));
//     console.log("API response received:", response); // Log the raw response

//     if (!response.ok) {
//       console.error(`Error response from server: ${response.status} ${response.statusText}`); // Log server error
//       const errorData = await response.json();
//       console.error("Error details:", errorData); // Log error details from the server
//       return { error: errorData.message || `Failed to fetch dashboard data: ${response.statusText || response.status}` };
//     }

//     const responseData = await response.json();
//     console.log("Parsed dashboard data:", responseData); // Log the parsed JSON data
//     return responseData;
//   } catch (error) {
//     console.error("Error during fetch:", error); // Log any fetch errors
//     return { error: error instanceof Error ? error.message : "An unknown error occurred" };
//   }
// }

// Define the type for our dashboard data
interface DashboardData {
  parentName: string;
  children: any[];
  activeTutors: any[];
  upcomingSessions: any[];
  monthlySpending: number;
  payments: any;
  recommendedTutors: any[];
}

export default function ParentDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadData = async () => {
      console.log("Starting to load dashboard data..."); // Log when loading starts
      try {
        const result: DashboardData | { error?: string } = {
          parentName: '',
          children: [],
          activeTutors: [],
          upcomingSessions: [],
          monthlySpending: 0,
          payments: {},
          recommendedTutors: [],
        };
        // await fetchDashboardData();
        console.log("Dashboard data fetched:", result); // Log the fetched data

        // if (result.error) {
        //   console.error("Error in fetched data:", result.error); // Log if there's an error in the result
        //   setError(new Error(result.error));
        // } else {
        //   console.log("Setting dashboard data:", result); // Log before setting data
        //   setData(result as DashboardData);
        // }
      } catch (err) {
        console.error("Error loading dashboard data:", err); // Log any caught errors
        setError(err instanceof Error ? err : new Error("Unknown error"));
      } finally {
        console.log("Finished loading dashboard data."); // Log when loading finishes
        setLoading(false);
      }
    };

    loadData();
  }, []);

  
  // Error state
  if (error || !data) {
    return (
      <DashboardLayout role="parent">
        <div className="container mx-auto p-4 md:p-6">
          <h1 className="text-2xl font-bold mb-6">Parent Dashboard</h1>
          <Card className="mb-6">
            <CardContent className="p-6">
              <p className="text-red-500">Error loading dashboard data: {error?.message || (data as any)?.error || 'Unknown error'}</p>
              <Button 
                onClick={() => window.location.reload()} 
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white"
              >
                Retry
              </Button>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    );
  }
  

  const parentName = data.parentName || 'Parent';
  const children = Array.isArray(data.children) ? data.children : [];
  const activeTutors = Array.isArray(data.activeTutors) ? data.activeTutors : [];
  const upcomingSessions = Array.isArray(data.upcomingSessions) ? data.upcomingSessions : [];
  const monthlySpending = data.monthlySpending || 0;
  const payments = data.payments || {};
  const recommendedTutors = Array.isArray(data.recommendedTutors) ? data.recommendedTutors : [];

  return (
    <DashboardLayout role="parent">
      <div className="container mx-auto p-4 md:p-6">
        <h1 className="text-2xl font-bold mb-6">Parent Dashboard</h1>

        {/* Welcome Card */}
        <Card className="mb-6 bg-gradient-to-r from-[#a39800]/30 to-[#c1d86f]/20 border-none rounded-md shadow-md">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-xl font-semibold">Welcome back, {parentName}!</h2>
                <p className="text-gray-600 mt-1">
                  Your children have {upcomingSessions.length} upcoming sessions this week
                </p>
              </div>
              <div className="flex gap-2">
                <Button className="bg-[#a39800] text-white hover:bg-[#c1d86f] hover:text-black">Find Tutors</Button>
                <Button variant="outline" className="border-[#a39800] text-[#a39800]">
                  Schedule Session
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="rounded-md shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Children</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">{children.length}</div>
                <Users className="h-5 w-5 text-[#a39800]" />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {children.length > 0 ? children.map((c:any) => c.name).join(' & ') : 'No children'}
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-md shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Active Tutors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">{activeTutors.length}</div>
                <Search className="h-5 w-5 text-[#a39800]" />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Across {activeTutors.reduce((acc:any, t:any) => acc + (t.subjects?.length || 0), 0)} subjects
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-md shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Upcoming Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">{upcomingSessions.length}</div>
                <Calendar className="h-5 w-5 text-[#a39800]" />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {upcomingSessions.length > 0 ? `Next: ${upcomingSessions[0].time}` : 'No sessions'}
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-md shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Monthly Spending</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">${monthlySpending}</div>
                <DollarSign className="h-5 w-5 text-[#a39800]" />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {upcomingSessions.length} sessions this month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Children Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <Card className="rounded-md shadow-sm">
              <CardHeader>
                <CardTitle>Children Overview</CardTitle>
                <CardDescription>Progress and upcoming sessions</CardDescription>
              </CardHeader>
              <CardContent>
                {children.length === 0 ? (
                  <p className="text-gray-600">No children data available.</p>
                ) : (
                  <div className="space-y-6">
                    {children.map((child:any, index:any) => (
                      <div key={index} className="p-4 rounded-md border bg-white">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={`/placeholder.svg?height=48&width=48`} alt={child.name} />
                            <AvatarFallback className="bg-[#a39800] text-white">{child.name.charAt(0)}</AvatarFallback>
                          </Avatar>

                          <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                              <div>
                                <h4 className="font-semibold">{child.name}</h4>
                                <p className="text-sm text-gray-600">
                                  {child.age} years • {child.grade}
                                </p>
                              </div>
                              <div className="mt-2 md:mt-0">
                                <Button variant="outline" size="sm" className="h-8 text-xs">
                                  View Details
                                </Button>
                              </div>
                            </div>

                            <div className="mt-3">
                              <div className="flex justify-between text-sm mb-1">
                                <span>Overall Progress</span>
                                <span>{child.progress}%</span>
                              </div>
                              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-[#a39800] transition-all duration-500"
                                  style={{ width: `${child.progress}%` }}
                                ></div>
                              </div>
                            </div>

                            <div className="mt-3 flex items-center text-sm">
                              <Clock className="h-4 w-4 mr-2 text-[#a39800]" />
                              <span>Next Session: {child.nextSession || 'None'}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Payment Summary */}
          <div>
            <Card className="rounded-md shadow-sm">
              <CardHeader>
                <CardTitle>Payment Summary</CardTitle>
                <CardDescription>Recent and upcoming payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {payments.upcoming ? (
                    <div className="p-3 rounded-md bg-[#a39800]/10 border border-[#a39800]/20">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">Upcoming Payment</h4>
                        <span className="text-sm font-semibold">${payments.upcoming.amount}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Due on {payments.upcoming.dueDate}</p>
                      <Button className="w-full mt-3 bg-[#a39800] text-white hover:bg-[#c1d86f] hover:text-black">
                        Pay Now
                      </Button>
                      </div>
                  ) : (
                    <p className="text-gray-600">No upcoming payments.</p>
                  )}

                  <div>
                    <h4 className="font-medium mb-2">Recent Transactions</h4>
                    <div className="space-y-3">
                      {payments.recent?.length > 0 ? (
                        payments.recent.map((transaction:any, index:any) => (
                          <div key={index} className="flex justify-between items-center text-sm p-2 border-b">
                            <div>
                              <div>{transaction.tutor}</div>
                              <div className="text-xs text-gray-500">{transaction.subject}</div>
                            </div>
                            <div className="text-right">
                              <div>${transaction.amount}</div>
                              <div className="text-xs text-gray-500">{transaction.date}</div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-600">No recent transactions.</p>
                      )}
                    </div>
                    <Button variant="ghost" className="w-full mt-3 text-[#a39800]">
                      View All Transactions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recommended Tutors */}
        <Card className="rounded-md shadow-sm">
          <CardHeader>
            <CardTitle>Recommended Tutors</CardTitle>
            <CardDescription>Based on your children's needs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendedTutors.length > 0 ? (
                recommendedTutors.map((tutor:any, index:any) => (
                  <div key={index} className="p-4 border rounded-md bg-white">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={tutor.name} />
                        <AvatarFallback className="bg-black text-white">{tutor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{tutor.name}</h4>
                        <p className="text-sm text-gray-600">{tutor.specialty}</p>
                        <div className="flex items-center mt-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill={i < Math.floor(tutor.rating) ? "#a39800" : "none"}
                                stroke="#a39800"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-0.5"
                              >
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                              </svg>
                            ))}
                          </div>
                          <span className="text-xs ml-1">
                            {tutor.rating} ({tutor.reviews} reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="font-medium">{tutor.hourlyRate}/hr</span>
                      <Button size="sm" className="bg-[#a39800] text-white hover:bg-[#c1d86f] hover:text-black">
                        View Profile
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No recommended tutors available.</p>
              )}
            </div>
            <div className="mt-4 text-center">
              <Button variant="outline" className="border-[#a39800] text-[#a39800]">
                Browse All Tutors
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}