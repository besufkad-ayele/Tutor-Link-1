"use client"

import * as React from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import Calendar from "react-calendar"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof Calendar>

function CustomCalendar({
  className,
  ...props
}: CalendarProps) {
  return (
    <div className={cn("p-3", className)}>
      <Calendar
        prevLabel={<FaChevronLeft className="h-4 w-4" />}
        nextLabel={<FaChevronRight className="h-4 w-4" />}
        className={cn(
          "react-calendar",
          "flex flex-col space-y-4",
          className
        )}
        tileClassName={({ date, view }) =>
          cn(
            buttonVariants({ variant: "ghost" }),
            "h-9 w-9 p-0 font-normal",
            view === "month" && date.getDate() === new Date().getDate()
              ? "bg-accent text-accent-foreground"
              : ""
          )
        }
        {...props}
      />
    </div>
  )
}
CustomCalendar.displayName = "CustomCalendar"

export { CustomCalendar }
