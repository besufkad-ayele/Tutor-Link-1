import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Filter,
  Star,
  MapPin,
  BookOpen,
  Clock,
  Calendar,
  ChevronRight,
  Bookmark,
  MessageSquare,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function ParentTutorsPage() {
  // Sample data for tutors
  const featuredTutors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Mathematics Specialist",
      rating: 4.9,
      reviews: 124,
      hourlyRate: 65,
      location: "New York, NY",
      subjects: ["Calculus", "Algebra", "Statistics"],
      availability: "Mon-Fri, 3PM-8PM",
      experience: "12 years",
      education: "Ph.D. in Mathematics, Stanford University",
      bio: "Experienced mathematics tutor specializing in advanced calculus and algebra. I help students build strong foundations and develop problem-solving skills.",
      featured: true,
      verified: true,
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Science Educator",
      rating: 4.8,
      reviews: 98,
      hourlyRate: 60,
      location: "Boston, MA",
      subjects: ["Physics", "Chemistry", "Biology"],
      availability: "Tue-Sat, 4PM-9PM",
      experience: "10 years",
      education: "Ph.D. in Physics, MIT",
      bio: "Passionate science educator with expertise in physics and chemistry. I make complex scientific concepts accessible and engaging for students of all levels.",
      featured: true,
      verified: true,
    },
    {
      id: 3,
      name: "Ms. Emily Rodriguez",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "English & Literature",
      rating: 4.7,
      reviews: 87,
      hourlyRate: 55,
      location: "Chicago, IL",
      subjects: ["English Literature", "Writing", "Grammar"],
      availability: "Mon-Thu, 2PM-7PM",
      experience: "8 years",
      education: "M.A. in English Literature, University of Chicago",
      bio: "Dedicated English tutor focusing on literature analysis, essay writing, and language skills. I help students develop their critical thinking and communication abilities.",
      featured: true,
      verified: true,
    },
  ]

  const allTutors = [
    ...featuredTutors,
    {
      id: 4,
      name: "Dr. James Wilson",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "History Professor",
      rating: 4.6,
      reviews: 76,
      hourlyRate: 58,
      location: "Washington, DC",
      subjects: ["World History", "American History", "European History"],
      availability: "Wed-Sun, 1PM-6PM",
      experience: "15 years",
      education: "Ph.D. in History, Georgetown University",
      bio: "History professor with extensive knowledge of world and American history. I help students understand historical contexts and develop analytical skills.",
      featured: false,
      verified: true,
    },
    {
      id: 5,
      name: "Mrs. Lisa Thompson",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Computer Science Instructor",
      rating: 4.8,
      reviews: 92,
      hourlyRate: 70,
      location: "San Francisco, CA",
      subjects: ["Programming", "Data Structures", "Web Development"],
      availability: "Mon-Fri, 5PM-9PM",
      experience: "9 years",
      education: "M.S. in Computer Science, UC Berkeley",
      bio: "Computer science instructor specializing in programming and web development. I help students build practical skills and understand fundamental concepts.",
      featured: false,
      verified: true,
    },
  ]

  const recentlyViewed = [allTutors[1], allTutors[3]]

  const savedTutors = [allTutors[0], allTutors[2]]

  return (
    <DashboardLayout role="parent">
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold text-amber-900">Find Tutors</h1>
      </div>

      <Card className="bg-amber-50 border-amber-200">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by subject, name, or keyword..."
                className="pl-8 border-amber-200"
              />
            </div>

            <Select>
              <SelectTrigger className="border-amber-200">
                <SelectValue placeholder="Select subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mathematics">Mathematics</SelectItem>
                <SelectItem value="science">Science</SelectItem>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="history">History</SelectItem>
                <SelectItem value="computerscience">Computer Science</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex gap-2">
              <Button className="flex-1 bg-amber-600 hover:bg-amber-700">Search</Button>
              <Button variant="outline" size="icon" className="border-amber-200">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="featured" className="w-full">
        <TabsList className="grid grid-cols-4 w-full max-w-md mb-4">
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="all">All Tutors</TabsTrigger>
          <TabsTrigger value="recent">Recently Viewed</TabsTrigger>
          <TabsTrigger value="saved">Saved</TabsTrigger>
        </TabsList>

        <TabsContent value="featured" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTutors.map((tutor) => (
              <Card key={tutor.id} className="overflow-hidden">
                <div className="h-2 bg-amber-500"></div>
                <CardHeader className="flex flex-row items-start gap-4">
                  <Avatar className="h-16 w-16 border-2 border-amber-200">
                    <AvatarImage src={tutor.avatar || "/placeholder.svg"} alt={tutor.name} />
                    <AvatarFallback>{tutor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{tutor.name}</CardTitle>
                      <Button variant="ghost" size="icon" className="text-amber-500">
                        <Bookmark className="h-5 w-5" />
                      </Button>
                    </div>
                    <CardDescription>{tutor.role}</CardDescription>
                    <div className="flex items-center mt-1">
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500 mr-1" />
                      <span className="text-sm font-medium">{tutor.rating}</span>
                      <span className="text-xs text-muted-foreground ml-1">({tutor.reviews} reviews)</span>
                      {tutor.verified && (
                        <Badge className="ml-2 bg-amber-100 text-amber-800 hover:bg-amber-200 border-amber-200">
                          Verified
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm">{tutor.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <BookOpen className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm">{tutor.subjects.join(", ")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm">{tutor.availability}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t">
                    <div>
                      <p className="text-sm text-muted-foreground">Hourly Rate</p>
                      <p className="text-lg font-bold text-amber-700">${tutor.hourlyRate}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="border-amber-200">
                        <MessageSquare className="h-4 w-4 mr-1" /> Message
                      </Button>
                      <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="all" className="space-y-6">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">Showing {allTutors.length} tutors</p>
            <Select defaultValue="rating">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price_low">Price: Low to High</SelectItem>
                <SelectItem value="price_high">Price: High to Low</SelectItem>
                <SelectItem value="experience">Most Experienced</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            {allTutors.map((tutor) => (
              <Card key={tutor.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex flex-col items-center md:items-start">
                      <Avatar className="h-24 w-24 border-2 border-amber-200">
                        <AvatarImage src={tutor.avatar || "/placeholder.svg"} alt={tutor.name} />
                        <AvatarFallback>{tutor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex items-center mt-2">
                        <Star className="h-4 w-4 fill-amber-500 text-amber-500 mr-1" />
                        <span className="text-sm font-medium">{tutor.rating}</span>
                        <span className="text-xs text-muted-foreground ml-1">({tutor.reviews})</span>
                      </div>
                      {tutor.verified && (
                        <Badge className="mt-2 bg-amber-100 text-amber-800 hover:bg-amber-200 border-amber-200">
                          Verified
                        </Badge>
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-bold">{tutor.name}</h3>
                          <p className="text-muted-foreground">{tutor.role}</p>
                        </div>
                        <Button variant="ghost" size="icon" className="text-amber-500">
                          <Bookmark className="h-5 w-5" />
                        </Button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mt-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{tutor.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{tutor.experience} experience</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{tutor.subjects.join(", ")}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{tutor.availability}</span>
                        </div>
                      </div>

                      <p className="text-sm mt-4">{tutor.bio}</p>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 pt-4 border-t">
                        <div>
                          <p className="text-sm text-muted-foreground">Hourly Rate</p>
                          <p className="text-2xl font-bold text-amber-700">${tutor.hourlyRate}</p>
                        </div>
                        <div className="flex gap-2 mt-4 sm:mt-0">
                          <Button variant="outline" className="border-amber-200">
                            <MessageSquare className="h-4 w-4 mr-2" /> Message
                          </Button>
                          <Button className="bg-amber-600 hover:bg-amber-700">
                            View Profile <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <Button variant="outline" className="mx-1">
              1
            </Button>
            <Button variant="outline" className="mx-1">
              2
            </Button>
            <Button variant="outline" className="mx-1">
              3
            </Button>
            <Button variant="outline" className="mx-1">
              Next
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="recent" className="space-y-6">
          {recentlyViewed.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentlyViewed.map((tutor) => (
                <Card key={tutor.id} className="overflow-hidden">
                  <div className="h-2 bg-amber-500"></div>
                  <CardHeader className="flex flex-row items-start gap-4">
                    <Avatar className="h-16 w-16 border-2 border-amber-200">
                      <AvatarImage src={tutor.avatar || "/placeholder.svg"} alt={tutor.name} />
                      <AvatarFallback>{tutor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{tutor.name}</CardTitle>
                        <Button variant="ghost" size="icon" className="text-amber-500">
                          <Bookmark className="h-5 w-5" />
                        </Button>
                      </div>
                      <CardDescription>{tutor.role}</CardDescription>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 fill-amber-500 text-amber-500 mr-1" />
                        <span className="text-sm font-medium">{tutor.rating}</span>
                        <span className="text-xs text-muted-foreground ml-1">({tutor.reviews} reviews)</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mt-2">
                      <div>
                        <p className="text-sm text-muted-foreground">Hourly Rate</p>
                        <p className="text-lg font-bold text-amber-700">${tutor.hourlyRate}</p>
                      </div>
                      {/* <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                        View Profile
                      </Button> */}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-6 text-center">
                <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">No recently viewed tutors</h3>
                <p className="text-sm text-muted-foreground mt-1 mb-4">Browse tutors to see them here</p>
                <Button className="bg-amber-600 hover:bg-amber-700">Browse Tutors</Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="saved" className="space-y-6">
          {savedTutors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {savedTutors.map((tutor) => (
                <Card key={tutor.id} className="overflow-hidden">
                  <div className="h-2 bg-amber-500"></div>
                  <CardHeader className="flex flex-row items-start gap-4">
                    <Avatar className="h-16 w-16 border-2 border-amber-200">
                      <AvatarImage src={tutor.avatar || "/placeholder.svg"} alt={tutor.name} />
                      <AvatarFallback>{tutor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{tutor.name}</CardTitle>
                        <Button variant="ghost" size="icon" className="text-amber-500 fill-amber-500">
                          <Bookmark className="h-5 w-5" />
                        </Button>
                      </div>
                      <CardDescription>{tutor.role}</CardDescription>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 fill-amber-500 text-amber-500 mr-1" />
                        <span className="text-sm font-medium">{tutor.rating}</span>
                        <span className="text-xs text-muted-foreground ml-1">({tutor.reviews} reviews)</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mt-2">
                      <div>
                        <p className="text-sm text-muted-foreground">Hourly Rate</p>
                        <p className="text-lg font-bold text-amber-700">${tutor.hourlyRate}</p>
                      </div>
                      {/* <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                        View Profile
                      </Button> */}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-6 text-center">
                <Bookmark className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">No saved tutors</h3>
                <p className="text-sm text-muted-foreground mt-1 mb-4">Save tutors to quickly access them later</p>
                <Button className="bg-amber-600 hover:bg-amber-700">Browse Tutors</Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
    </DashboardLayout>
  )
}