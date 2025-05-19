import type { Metadata } from "next"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Tutor Profile | TutorLink",
  description: "Manage your tutor profile and account settings",
}

export default function TutorProfile() {
  return (
    <DashboardLayout role="tutor">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
            <p className="text-muted-foreground">Manage your profile information and credentials</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-7">
          <div className="md:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal information and profile picture</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Tutor" />
                    <AvatarFallback className="bg-slate-800 text-white text-xl">AT</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">
                    Change Avatar
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue="Alex Thompson" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="alex.thompson@example.com" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" defaultValue="(555) 987-6543" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" defaultValue="New York, NY" />
                  </div>
                  <Button className="w-full bg-slate-800 hover:bg-slate-900">Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-4">
            <Tabs defaultValue="professional">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="professional">Professional</TabsTrigger>
                <TabsTrigger value="subjects">Subjects</TabsTrigger>
                <TabsTrigger value="credentials">Credentials</TabsTrigger>
              </TabsList>

              <TabsContent value="professional" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Professional Information</CardTitle>
                    <CardDescription>Update your professional details and bio</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="title">Professional Title</Label>
                      <Input id="title" defaultValue="Mathematics & Physics Tutor" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Input id="experience" type="number" defaultValue="8" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="rate">Hourly Rate ($)</Label>
                      <Input id="rate" type="number" defaultValue="45" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="bio">Professional Bio</Label>
                      <Textarea
                        id="bio"
                        defaultValue="Experienced mathematics and physics tutor with a passion for making complex concepts accessible to students of all levels. I hold a Master's degree in Applied Mathematics and have helped hundreds of students improve their grades and confidence."
                        className="min-h-[150px]"
                      />
                    </div>
                    <Button className="w-full bg-slate-800 hover:bg-slate-900">Update Professional Info</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="subjects" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Subject Expertise</CardTitle>
                    <CardDescription>Manage your teaching subjects and specializations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-2">
                      <Label>Primary Subjects</Label>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Mathematics</Badge>
                        <Badge variant="secondary">Physics</Badge>
                        <Badge variant="secondary">Calculus</Badge>
                        <Badge variant="secondary">Algebra</Badge>
                        <Badge variant="outline">+ Add Subject</Badge>
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label>Secondary Subjects</Label>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Computer Science</Badge>
                        <Badge variant="secondary">Statistics</Badge>
                        <Badge variant="outline">+ Add Subject</Badge>
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label>Grade Levels</Label>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">High School</Badge>
                        <Badge variant="secondary">College</Badge>
                        <Badge variant="secondary">AP Courses</Badge>
                        <Badge variant="outline">+ Add Level</Badge>
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="specializations">Specializations</Label>
                      <Textarea
                        id="specializations"
                        defaultValue="AP Calculus, SAT Math Prep, Physics Olympiad Training, College Entrance Exam Preparation"
                        className="min-h-[100px]"
                      />
                    </div>
                    <Button className="w-full bg-slate-800 hover:bg-slate-900">Update Subjects</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="credentials" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Credentials & Certifications</CardTitle>
                    <CardDescription>Manage your educational background and certifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="education">Education</Label>
                      <Textarea
                        id="education"
                        defaultValue="- Master of Science in Applied Mathematics, MIT (2015)
- Bachelor of Science in Physics, Stanford University (2013)"
                        className="min-h-[100px]"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="certifications">Certifications</Label>
                      <Textarea
                        id="certifications"
                        defaultValue="- Certified Mathematics Teacher, State of New York
- Advanced Physics Instruction Certification
- Online Teaching Excellence Certificate"
                        className="min-h-[100px]"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label>Verification Status</Label>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-600">Identity Verified</Badge>
                        <Badge className="bg-green-600">Credentials Verified</Badge>
                        <Badge className="bg-green-600">Background Check Passed</Badge>
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label>Upload Documents</Label>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          Upload Degree
                        </Button>
                        <Button variant="outline" size="sm">
                          Upload Certificate
                        </Button>
                        <Button variant="outline" size="sm">
                          Upload ID
                        </Button>
                      </div>
                    </div>

                    <Button className="w-full bg-slate-800 hover:bg-slate-900">Update Credentials</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
