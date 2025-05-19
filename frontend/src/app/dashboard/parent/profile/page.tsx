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
  title: "Parent Profile | TutorLink",
  description: "Manage your parent profile and account settings",
}

export default function ParentProfile() {
  return (
    <DashboardLayout role="parent">
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
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Parent" />
                    <AvatarFallback className="bg-amber-100 text-amber-800 text-xl">SJ</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">
                    Change Avatar
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue="Sarah Johnson" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="sarah.johnson@example.com" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" defaultValue="(555) 456-7890" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" defaultValue="Chicago, IL" />
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-4">
            <Tabs defaultValue="account">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="children">Children</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
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
                      <Input id="username" defaultValue="sarahjohnson" />
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
                    <Button className="w-full bg-amber-600 hover:bg-amber-700">Update Password</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="children" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Children Information</CardTitle>
                    <CardDescription>Manage your children's profiles</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4 border-b pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-green-100 text-green-800">EJ</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="text-base font-medium">Emma Johnson</h4>
                            <p className="text-sm text-muted-foreground">8th Grade • Age 13</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="font-medium">School</p>
                          <p className="text-muted-foreground">Lincoln Middle School</p>
                        </div>
                        <div>
                          <p className="font-medium">Subjects</p>
                          <p className="text-muted-foreground">Math, Science, English</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 border-b pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-green-100 text-green-800">MJ</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="text-base font-medium">Michael Johnson</h4>
                            <p className="text-sm text-muted-foreground">5th Grade • Age 10</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="font-medium">School</p>
                          <p className="text-muted-foreground">Washington Elementary</p>
                        </div>
                        <div>
                          <p className="font-medium">Subjects</p>
                          <p className="text-muted-foreground">Reading, Math</p>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full">Add Child</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preferences" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Tutoring Preferences</CardTitle>
                    <CardDescription>Set your preferences for tutoring sessions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="session-type">Preferred Session Type</Label>
                      <Input id="session-type" defaultValue="Online, In-person at home" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="tutor-gender">Tutor Gender Preference</Label>
                      <Input id="tutor-gender" defaultValue="No preference" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="budget">Budget Range ($ per hour)</Label>
                      <Input id="budget" defaultValue="30-50" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="availability">Preferred Availability</Label>
                      <Input id="availability" defaultValue="Weekdays after 4pm, Weekends mornings" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="notes">Additional Notes for Tutors</Label>
                      <Textarea
                        id="notes"
                        defaultValue="Looking for tutors who are patient and can explain concepts in multiple ways. My children respond well to visual learning techniques."
                        className="min-h-[100px]"
                      />
                    </div>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700">Save Preferences</Button>
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
