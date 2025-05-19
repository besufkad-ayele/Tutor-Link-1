import type { Metadata } from "next"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const metadata: Metadata = {
  title: "Student Profile | TutorLink",
  description: "Manage your student profile and account settings",
}

export default function StudentProfilePage() {
  return (
    <DashboardLayout role="student">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
            <p className="text-muted-foreground">Manage your account settings and profile information</p>
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
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Student" />
                    <AvatarFallback className="bg-green-100 text-green-800 text-xl">JS</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">
                    Change Avatar
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue="Jamie Smith" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="jamie.smith@example.com" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" defaultValue="(555) 123-4567" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="grade">Grade Level</Label>
                    <Input id="grade" defaultValue="10th Grade" />
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-4">
            <Tabs defaultValue="account">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
                <TabsTrigger value="subjects">Subjects</TabsTrigger>
              </TabsList>

              <TabsContent value="account" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Information</CardTitle>
                    <CardDescription>Update your account details and password</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" defaultValue="jamiesmith" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">Update Password</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preferences" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Learning Preferences</CardTitle>
                    <CardDescription>Customize your learning experience</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="learning-style">Learning Style</Label>
                      <Input id="learning-style" defaultValue="Visual" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="study-environment">Preferred Study Environment</Label>
                      <Input id="study-environment" defaultValue="Quiet space with minimal distractions" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="session-length">Preferred Session Length (minutes)</Label>
                      <Input id="session-length" type="number" defaultValue="60" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="goals">Learning Goals</Label>
                      <Textarea
                        id="goals"
                        defaultValue="Improve my math skills and prepare for college entrance exams."
                        className="min-h-[100px]"
                      />
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">Save Preferences</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="subjects" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Subject Interests</CardTitle>
                    <CardDescription>Manage your subject preferences and interests</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="primary-subjects">Primary Subjects</Label>
                      <Input id="primary-subjects" defaultValue="Mathematics, Physics" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="secondary-subjects">Secondary Subjects</Label>
                      <Input id="secondary-subjects" defaultValue="Computer Science, Chemistry" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="struggling-subjects">Subjects Needing Improvement</Label>
                      <Input id="struggling-subjects" defaultValue="English Literature, History" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="subject-notes">Additional Notes</Label>
                      <Textarea
                        id="subject-notes"
                        defaultValue="I'm particularly interested in calculus and quantum physics."
                        className="min-h-[100px]"
                      />
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">Update Subjects</Button>
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
