import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Calendar, DollarSign, Users, Search } from "lucide-react";

export default function Loading() {
  return (
    <DashboardLayout role="parent">
      <div className="container mx-auto p-4 md:p-6">
        <h1 className="text-2xl font-bold mb-6">Parent Dashboard</h1>

        {/* Welcome Card Shimmer */}
        <Card className="mb-6 bg-gradient-to-r from-gray-100 to-gray-200 border-none rounded-md shadow-md overflow-hidden relative">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="w-full md:w-2/3">
                <div className="h-6 w-48 bg-gray-300 rounded-md mb-3"></div>
                <div className="h-4 w-64 bg-gray-300 rounded-md"></div>
              </div>
              <div className="flex gap-2">
                <div className="h-10 w-24 bg-gray-300 rounded-md"></div>
                <div className="h-10 w-32 bg-gray-300 rounded-md"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards Shimmer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="rounded-md shadow-sm overflow-hidden relative">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <CardHeader className="pb-2">
                <div className="h-4 w-24 bg-gray-300 rounded-md"></div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="h-8 w-12 bg-gray-300 rounded-md"></div>
                  <div className="h-5 w-5 bg-gray-300 rounded-md"></div>
                </div>
                <div className="h-3 w-32 bg-gray-300 rounded-md mt-2"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Children Overview Shimmer */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <Card className="rounded-md shadow-sm overflow-hidden relative">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <CardHeader>
                <div className="h-5 w-36 bg-gray-300 rounded-md mb-2"></div>
                <div className="h-4 w-48 bg-gray-300 rounded-md"></div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[1, 2].map((child) => (
                    <div key={child} className="p-4 rounded-md border bg-white">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                              <div className="h-5 w-24 bg-gray-300 rounded-md mb-2"></div>
                              <div className="h-4 w-32 bg-gray-300 rounded-md"></div>
                            </div>
                            <div className="mt-2 md:mt-0">
                              <div className="h-8 w-24 bg-gray-300 rounded-md"></div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="flex justify-between text-sm mb-1">
                              <div className="h-4 w-24 bg-gray-300 rounded-md"></div>
                              <div className="h-4 w-8 bg-gray-300 rounded-md"></div>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-gray-300 w-3/4"></div>
                            </div>
                          </div>
                          <div className="mt-3 flex items-center">
                            <div className="h-4 w-4 bg-gray-300 rounded-md mr-2"></div>
                            <div className="h-4 w-32 bg-gray-300 rounded-md"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Summary Shimmer */}
          <div>
            <Card className="rounded-md shadow-sm overflow-hidden relative">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <CardHeader>
                <div className="h-5 w-36 bg-gray-300 rounded-md mb-2"></div>
                <div className="h-4 w-48 bg-gray-300 rounded-md"></div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 rounded-md bg-gray-100 border">
                    <div className="flex justify-between items-center mb-2">
                      <div className="h-5 w-32 bg-gray-300 rounded-md"></div>
                      <div className="h-5 w-16 bg-gray-300 rounded-md"></div>
                    </div>
                    <div className="h-4 w-40 bg-gray-300 rounded-md mb-3"></div>
                    <div className="h-10 w-full bg-gray-300 rounded-md"></div>
                  </div>

                  <div>
                    <div className="h-5 w-36 bg-gray-300 rounded-md mb-3"></div>
                    <div className="space-y-3">
                      {[1, 2, 3].map((tx) => (
                        <div key={tx} className="flex justify-between items-center p-2 border-b">
                          <div>
                            <div className="h-4 w-24 bg-gray-300 rounded-md mb-1"></div>
                            <div className="h-3 w-20 bg-gray-300 rounded-md"></div>
                          </div>
                          <div className="text-right">
                            <div className="h-4 w-16 bg-gray-300 rounded-md mb-1"></div>
                            <div className="h-3 w-20 bg-gray-300 rounded-md"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="h-10 w-full bg-gray-300 rounded-md mt-3"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recommended Tutors Shimmer */}
        <Card className="rounded-md shadow-sm overflow-hidden relative">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
          <CardHeader>
            <div className="h-5 w-40 bg-gray-300 rounded-md mb-2"></div>
            <div className="h-4 w-48 bg-gray-300 rounded-md"></div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((tutor) => (
                <div key={tutor} className="p-4 border rounded-md bg-white">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
                    <div>
                      <div className="h-5 w-24 bg-gray-300 rounded-md mb-1"></div>
                      <div className="h-4 w-32 bg-gray-300 rounded-md mb-2"></div>
                      <div className="flex items-center">
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <div key={star} className="h-3 w-3 bg-gray-300 rounded-sm"></div>
                          ))}
                        </div>
                        <div className="h-3 w-16 bg-gray-300 rounded-md ml-2"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="h-5 w-16 bg-gray-300 rounded-md"></div>
                    <div className="h-8 w-24 bg-gray-300 rounded-md"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <div className="h-10 w-32 bg-gray-300 rounded-md mx-auto"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
