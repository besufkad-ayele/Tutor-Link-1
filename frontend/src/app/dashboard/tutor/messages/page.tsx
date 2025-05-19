import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Send, PaperclipIcon, Smile, MoreVertical, Phone, Video, Info, Users, Star } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function StudentMessagesPage() {
  // Sample data for conversations
  const conversations = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Mathematics Tutor",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Let me know if you have questions about the calculus homework.",
      time: "10:42 AM",
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      role: "Science Tutor",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Your lab report looks good. Just a few minor corrections needed.",
      time: "Yesterday",
      unread: 0,
      online: false,
    },
    {
      id: 3,
      name: "Ms. Emily Rodriguez",
      role: "English Tutor",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "I've shared some additional reading materials for your essay.",
      time: "Yesterday",
      unread: 0,
      online: true,
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      role: "History Tutor",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Let's discuss your research paper topic in our next session.",
      time: "Monday",
      unread: 0,
      online: false,
    },
    {
      id: 5,
      name: "TutorLink Support",
      role: "Support Team",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "How would you rate your experience with our platform so far?",
      time: "May 5",
      unread: 1,
      online: true,
    },
  ]

  // Sample messages for the active conversation
  const messages = [
    {
      id: 1,
      sender: "Dr. Sarah Johnson",
      content: "Hi Alex! How are you doing with the calculus homework?",
      time: "10:30 AM",
      isMe: false,
    },
    {
      id: 2,
      sender: "Me",
      content: "Hi Dr. Johnson! I'm struggling a bit with the integration problems, especially #5-7.",
      time: "10:32 AM",
      isMe: true,
    },
    {
      id: 3,
      sender: "Dr. Sarah Johnson",
      content:
        "No worries, those are challenging ones. Let's go through them step by step. For #5, remember that you need to use integration by parts when you have a product of functions.",
      time: "10:35 AM",
      isMe: false,
    },
    {
      id: 4,
      sender: "Dr. Sarah Johnson",
      content: "Here's a quick example to help you understand the approach:",
      time: "10:36 AM",
      isMe: false,
    },
    {
      id: 5,
      sender: "Dr. Sarah Johnson",
      content: "∫x·e^x dx = x·e^x - ∫e^x dx = x·e^x - e^x + C",
      time: "10:36 AM",
      isMe: false,
    },
    {
      id: 6,
      sender: "Me",
      content: "That makes sense! So for problem #5, I would use u = x^2 and dv = e^x dx?",
      time: "10:38 AM",
      isMe: true,
    },
    {
      id: 7,
      sender: "Dr. Sarah Johnson",
      content: "Exactly! You're on the right track. Then v = e^x and du = 2x dx.",
      time: "10:40 AM",
      isMe: false,
    },
    {
      id: 8,
      sender: "Dr. Sarah Johnson",
      content:
        "Let me know if you have questions about the other problems too. We can go through them in our session tomorrow, or I can help you now if you'd like.",
      time: "10:42 AM",
      isMe: false,
    },
  ]

  return (
    <DashboardLayout role="student">
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
      {/* Sidebar - Conversation List */}
      <div className="w-full sm:w-80 md:w-96 border-r flex flex-col">
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search messages..." className="pl-8 bg-muted/50" />
          </div>
        </div>

        <Tabs defaultValue="all" className="flex-1 flex flex-col">
          <div className="px-4 pt-2">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="tutors">Tutors</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>
          </div>

          <div className="flex-1 overflow-auto">
            <TabsContent value="all" className="m-0 h-full">
              <div className="divide-y">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`p-4 hover:bg-muted/50 cursor-pointer ${conversation.id === 1 ? "bg-green-50" : ""}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                          <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {conversation.online && (
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-sm truncate">{conversation.name}</h4>
                          <span className="text-xs text-muted-foreground">{conversation.time}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{conversation.role}</p>
                        <p className="text-sm truncate mt-1">{conversation.lastMessage}</p>
                      </div>
                      {conversation.unread > 0 && (
                        <Badge className="ml-auto bg-green-600 hover:bg-green-700">{conversation.unread}</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tutors" className="m-0 h-full">
              <div className="divide-y">
                {conversations
                  .filter((c) => c.role.includes("Tutor"))
                  .map((conversation) => (
                    <div
                      key={conversation.id}
                      className={`p-4 hover:bg-muted/50 cursor-pointer ${conversation.id === 1 ? "bg-green-50" : ""}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="relative">
                          <Avatar>
                            <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                            <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          {conversation.online && (
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-sm truncate">{conversation.name}</h4>
                            <span className="text-xs text-muted-foreground">{conversation.time}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">{conversation.role}</p>
                          <p className="text-sm truncate mt-1">{conversation.lastMessage}</p>
                        </div>
                        {conversation.unread > 0 && (
                          <Badge className="ml-auto bg-green-600 hover:bg-green-700">{conversation.unread}</Badge>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="support" className="m-0 h-full">
              <div className="divide-y">
                {conversations
                  .filter((c) => c.role.includes("Support"))
                  .map((conversation) => (
                    <div key={conversation.id} className={`p-4 hover:bg-muted/50 cursor-pointer`}>
                      <div className="flex items-start gap-3">
                        <div className="relative">
                          <Avatar>
                            <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                            <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          {conversation.online && (
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-sm truncate">{conversation.name}</h4>
                            <span className="text-xs text-muted-foreground">{conversation.time}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">{conversation.role}</p>
                          <p className="text-sm truncate mt-1">{conversation.lastMessage}</p>
                        </div>
                        {conversation.unread > 0 && (
                          <Badge className="ml-auto bg-green-600 hover:bg-green-700">{conversation.unread}</Badge>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

      {/* Main Chat Area */}
      <div className="hidden sm:flex flex-col flex-1 h-full">
        {/* Chat Header */}
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. Sarah Johnson" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div>
              <h3 className="font-medium">Dr. Sarah Johnson</h3>
              <p className="text-xs text-muted-foreground">Mathematics Tutor • Online</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Phone className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Star className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Info className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-auto p-4 space-y-4 bg-green-50/30">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}>
              {!message.isMe && (
                <Avatar className="h-8 w-8 mr-2 mt-1">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt={message.sender} />
                  <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
                </Avatar>
              )}
              <div
                className={`max-w-[70%] ${message.isMe ? "bg-green-600 text-white" : "bg-white"} rounded-lg p-3 shadow-sm`}
              >
                <p className="text-sm">{message.content}</p>
                <p className={`text-xs mt-1 ${message.isMe ? "text-green-100" : "text-muted-foreground"}`}>
                  {message.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <PaperclipIcon className="h-5 w-5" />
            </Button>
            <Input type="text" placeholder="Type a message..." className="flex-1" />
            <Button variant="ghost" size="icon">
              <Smile className="h-5 w-5" />
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Empty State for Mobile */}
      <div className="flex-1 flex items-center justify-center sm:hidden">
        <div className="text-center p-4">
          <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium">Your Messages</h3>
          <p className="text-sm text-muted-foreground mt-1 mb-4">Select a conversation to start chatting</p>
        </div>
      </div>
    </div>
    </DashboardLayout>
  )
}
