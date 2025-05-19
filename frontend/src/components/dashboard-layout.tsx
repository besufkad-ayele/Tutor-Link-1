"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Bell,
  MessageSquare,
  User,
  LogOut,
  Menu,
  X,
  Home,
  Users,
  Calendar,
  DollarSign,
  BarChart,
  Settings,
  HelpCircle,
  BookOpen,
  GraduationCap,
  School,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
  role: "admin" | "parent" | "tutor" | "student"
}

export function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Close mobile menu when path changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const getRoleColor = (currentRole: string) => {
    switch (currentRole) {
      case "student":
        return "#c1d86f"
      case "parent":
        return "#a39800"
      case "tutor":
        return "black"
      case "admin":
        return "rgb(220, 38, 38)" // red-600
      default:
        return "#c1d86f"
    }
  }

  const getNavItems = () => {
    switch (role) {
      case "admin":
        return [
          { name: "Dashboard", href: "/dashboard/admin", icon: Home },
          { name: "User Management", href: "/dashboard/admin/users", icon: Users },
          { name: "Platform Analytics", href: "/dashboard/admin/analytics", icon: BarChart },
          
        ]
      case "parent":
        return [  
          { name: "Dashboard", href: "/dashboard/parent", icon: Home },
          { name: "Children Management", href: "/dashboard/parent/children", icon: Users },
          { name: "Tutor Search", href: "/dashboard/parent/tutors", icon: School },
          { name: "Session Management", href: "/dashboard/parent/sessions", icon: Calendar },
          { name: "Communication", href: "/dashboard/parent/messages", icon: MessageSquare },
        ]
      case "tutor":
        return [
          { name: "Dashboard", href: "/dashboard/tutor", icon: Home },
          { name: "Student Management", href: "/dashboard/tutor/students", icon: Users },
          { name: "Session Management", href: "/dashboard/tutor/sessions", icon: Calendar },
          { name: "Content Management", href: "/dashboard/tutor/content", icon: BookOpen },
          { name: "Earnings", href: "/dashboard/tutor/earnings", icon: DollarSign },
        ]
      case "student":
        return [
          { name: "Dashboard", href: "/dashboard/student", icon: Home },
          { name: "Learning Overview", href: "/dashboard/student/learning", icon: GraduationCap },
          { name: "Progress Analytics", href: "/dashboard/student/progress", icon: BarChart },
          { name: "Communication", href: "/dashboard/student/messages", icon: MessageSquare },
        ]
      default:
        return []
    }
  }

  const navItems = getNavItems()
  const roleColor = getRoleColor(role)

  return (
    <SidebarProvider>
      <div className="flex min-h-screen xl:w-full">
        {/* Desktop Sidebar */}
        <Sidebar className="hidden md:flex" variant="floating">
          <SidebarHeader className="flex items-center justify-between p-4">
            <Link href={`/dashboard/${role}`} className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full" style={{ backgroundColor: roleColor }}></div>
              <span className="text-lg font-bold">TutorLink</span>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="p-4">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/help-center">
                    <HelpCircle className="h-5 w-5" />
                    <span>Help Center</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black/50 z-40 md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        <div
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <Link href={`/dashboard/${role}`} className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: roleColor }}></div>
                <span className="text-lg font-bold">TutorLink</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex-1 overflow-auto py-4">
              <nav className="space-y-1 px-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      pathname === item.href
                        ? `bg-[${roleColor}]/10 text-[${roleColor}]`
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="p-4 border-t">
              <Link
                href="/help-center"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100"
              >
                <HelpCircle className="mr-3 h-5 w-5" />
                Help Center
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col flex-1">
          {/* Header */}
          <header className="bg-white border-b sticky top-0 z-30">
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center md:hidden">
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(true)}>
                  <Menu className="h-5 w-5" />
                </Button>
                <span className="ml-2 font-semibold">TutorLink</span>
              </div>
              <div className="hidden md:block">
                <SidebarTrigger />
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageSquare className="h-5 w-5" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback style={{ backgroundColor: roleColor }}>
                          {role.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto bg-gray-50">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
