import type { Metadata } from "next"
import { DashboardLayout } from "@/components/dashboard-layout"

export const metadata: Metadata = {
  title: "Parent Settings | TutorLink",
  description: "Manage your parent account settings and preferences",
}

export default function ParentSettingsPage() {
  return (
    <DashboardLayout role="parent">
      <div className="flex flex-col gap-4">\
