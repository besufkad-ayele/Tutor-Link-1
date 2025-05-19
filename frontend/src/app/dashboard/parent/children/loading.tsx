import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Loading() {
  return (
    <DashboardLayout role="parent">
      <div className="container mx-auto p-4 md:p-6">
        {/* Header Shimmer */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <div className="h-8 w-48 bg-gray-300 rounded-md mb-2 animate-pulse"></div>
            <div className="h-4 w-64 bg-gray-300 rounded-md animate-pulse"></div>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <div className="h-10 w-28 bg-gray-300 rounded-md animate-pulse"></div>
            <div className="h-10 w-28 bg-gray-300 rounded-md animate-pulse"></div>
          </div>
        </div>

        {/* Search Shimmer */}
        <div className="relative mb-6 max-w-md">
          <div className="h-10 w-full bg-gray-300 rounded-md animate-pulse"></div>
        </div>

        {/* Children Overview Shimmer */}
        <Card className="mb-6 overflow-hidden relative">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
          <CardHeader>
            <div className="h-6 w-40 bg-gray-300 rounded-md mb-2"></div>
            <div className="h-4 w-56 bg-gray-300 rounded-md"></div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[1, 2].map((child) => (
                <div key={child} className="p-4 rounded-md border bg-white">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="h-16 w-16 bg-gray-300 rounded-full"></div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <div className="h-6 w-32 bg-gray-300 rounded-md mb-2"></div>
                          <div className="h-4 w-56 bg-gray-300 rounded-md"></div>
                        </div>
                        <div className="mt-2 md:mt-0 flex gap-2">
                          <div className="h-9 w-32 bg-gray-300 rounded-md"></div>
                          <div className="h-9 w-28 bg-gray-300 rounded-md"></div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div>
                          <div className="h-4 w-16 bg-gray-300 rounded-md mb-2"></div>
                          <div className="flex flex-wrap gap-1">
                            <div className="h-6 w-20 bg-gray-300 rounded-md"></div>
                            <div className="h-6 w-24 bg-gray-300 rounded-md"></div>
                          </div>
                        </div>

                        <div>
                          <div className="h-4 w-32 bg-gray-300 rounded-md mb-2"></div>
                          <div className="flex items-center gap-2">
                            <div className="h-2 flex-1 bg-gray-300 rounded-full"></div>
                            <div className="h-4 w-8 bg-gray-300 rounded-md"></div>
                          </div>
                        </div>

                        <div>
                          <div className="h-4 w-24 bg-gray-300 rounded-md mb-2"></div>
                          <div className="flex items-center">
                            <div className="h-4 w-4 bg-gray-300 rounded-md mr-2"></div>
                            <div className="h-4 w-40 bg-gray-300 rounded-md"></div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t">
                        <div className="flex justify-between items-center">
                          <div className="h-4 w-32 bg-gray-300 rounded-md"></div>
                          <div className="flex gap-2">
                            <div className="h-8 w-32 bg-gray-300 rounded-md"></div>
                            <div className="h-8 w-32 bg-gray-300 rounded-md"></div>
                            <div className="h-8 w-8 bg-gray-300 rounded-md"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tabs Shimmer */}
        <div className="w-full">
          <div className="mb-4 flex gap-2">
            <div className="h-10 w-40 bg-gray-300 rounded-md"></div>
            <div className="h-10 w-40 bg-gray-300 rounded-md"></div>
          </div>
          <Card className="overflow-hidden relative">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            <CardContent className="p-6">
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="p-4 border rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <div className="h-5 w-40 bg-gray-300 rounded-md"></div>
                      <div className="h-5 w-24 bg-gray-300 rounded-md"></div>
                    </div>
                    <div className="h-4 w-full bg-gray-300 rounded-md"></div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}