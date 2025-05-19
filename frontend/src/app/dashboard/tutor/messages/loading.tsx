import { Skeleton } from "@/components/ui/skeleton"

export default function StudentMessagesLoading() {
  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
      {/* Sidebar - Conversation List */}
      <div className="w-full sm:w-80 md:w-96 border-r flex flex-col">
        <div className="p-4 border-b">
          <Skeleton className="h-10 w-full" />
        </div>

        <div className="px-4 pt-2">
          <Skeleton className="h-10 w-full" />
        </div>

        <div className="flex-1 overflow-auto p-1">
          <div className="space-y-1">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <div key={i} className="p-3">
                  <div className="flex items-start gap-3">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-3 w-12" />
                      </div>
                      <Skeleton className="h-3 w-32 mt-1" />
                      <Skeleton className="h-4 w-full mt-2" />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="hidden sm:flex flex-col flex-1 h-full">
        {/* Chat Header */}
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div>
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-3 w-24 mt-1" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <Skeleton key={i} className="h-9 w-9 rounded-md" />
              ))}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-auto p-4 space-y-4 bg-green-50/30">
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <div key={i} className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
                {i % 2 === 0 && <Skeleton className="h-8 w-8 rounded-full mr-2" />}
                <Skeleton className={`h-20 w-[70%] rounded-lg ${i % 2 === 0 ? "bg-gray-200" : "bg-green-200"}`} />
              </div>
            ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t">
          <div className="flex items-center gap-2">
            <Skeleton className="h-10 w-10 rounded-md" />
            <Skeleton className="h-10 flex-1 rounded-md" />
            <Skeleton className="h-10 w-10 rounded-md" />
            <Skeleton className="h-10 flex-1 rounded-md" />
            <Skeleton className="h-10 w-10 rounded-md" />
            <Skeleton className="h-10 w-10 rounded-md" />
          </div>
        </div>
      </div>

      {/* Empty State for Mobile */}
      <div className="flex-1 flex items-center justify-center sm:hidden">
        <div className="text-center p-4">
          <Skeleton className="h-12 w-12 rounded-full mx-auto mb-4" />
          <Skeleton className="h-6 w-32 mx-auto" />
          <Skeleton className="h-4 w-48 mx-auto mt-1 mb-4" />
        </div>
      </div>
    </div>
  )
}
