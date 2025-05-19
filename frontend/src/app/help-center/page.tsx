"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Search, MessageSquare, HelpCircle, BookOpen, FileText, Send, Clock, DollarSign, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { DashboardLayout } from "@/components/dashboard-layout";
import FAQSection from "@/components/FAQSection";

// Define a type for your article categories for better type safety
interface ArticleCategory {
  category: string;
  icon: LucideIcon; // Lucide Icon type
  articles: string[];
}

const initialArticleCategories: ArticleCategory[] = [
  {
    category: "Getting Started",
    icon: BookOpen,
    articles: [
      "Platform Overview for New Users",
      "Setting Up Your Profile",
      "Understanding User Roles",
      "Navigating the Dashboard",
      "Communication Tools Overview",
    ],
  },
  {
    category: "Tutoring Sessions",
    icon: Clock,
    articles: [
      "How to Schedule a Session",
      "Preparing for Your First Session",
      "Using the Virtual Classroom",
      "Sharing Materials During Sessions",
      "Session Recordings and Notes",
    ],
  },
  {
    category: "Payments & Billing",
    icon: DollarSign,
    articles: [
      "Understanding the Payment System",
      "Adding Payment Methods",
      "Tutor Payment Schedule",
      "Requesting Refunds",
      "Viewing Payment History",
    ],
  },
];

interface FAQItem {
  question: string;
  answer: string; // Or however your FAQ items are structured
  category: 'student' | 'parent' | 'tutor' | 'account'; // Example categories
}

// Assume faqData is your array of all FAQ items
const allFaqData: FAQItem[] = [
  { category: 'student', question: "How do I join a tutoring session?", answer: "..." },
  { category: 'parent', question: "How do I add a child to my account?", answer: "..." },
  // etc.
];

export default function HelpCenter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("faq");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredArticleCategories = useMemo(() => {
    if (!searchTerm) {
      return initialArticleCategories;
    }
    return initialArticleCategories
      .map(category => {
        const filteredArticles = category.articles.filter(article =>
          article.toLowerCase().includes(searchTerm)
        );
        if (filteredArticles.length > 0 || category.category.toLowerCase().includes(searchTerm)) {
          return { ...category, articles: filteredArticles.length > 0 ? filteredArticles : category.articles }; // Show all articles if category matches
        }
        return null;
      })
      .filter(Boolean) as ArticleCategory[];
  }, [searchTerm]);

  const filteredFaqs = useMemo(() => {
    if (!searchTerm) {
      return allFaqData; // Or group them by category as you had before
    }
    return allFaqData.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // Then, in your JSX, map over `filteredFaqs` instead of the original full list.
  // You'll need to adapt this to how your FAQSection currently structures and displays data (e.g., by category).

  // Example of how you might structure rendering if you group by category:
  const faqsByStudent = filteredFaqs.filter(faq => faq.category === 'student');
  const faqsByParent = filteredFaqs.filter(faq => faq.category === 'parent');
  // ... and so on for other categories

  return (
    <DashboardLayout role="parent">
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-30">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center"> 
            <h1 className="text-xl font-bold">Help Center</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#c1d86f]/30 to-[#a39800]/20 rounded-lg p-8 mb-8 text-center">
          <h2 className="text-2xl font-bold mb-4">How can we help you today?</h2>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input 
              placeholder="Search for help articles, FAQs, or topics..." 
              className="pl-10 h-12 bg-white pr-24" // Added pr for button space
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="faq" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="faq" className="text-sm md:text-base">
              <HelpCircle className="h-4 w-4 mr-2" />
              FAQs
            </TabsTrigger>
            <TabsTrigger value="articles" className="text-sm md:text-base">
              <BookOpen className="h-4 w-4 mr-2" />
              Help Articles
            </TabsTrigger>
            <TabsTrigger value="ai-assistant" className="text-sm md:text-base">
              <MessageSquare className="h-4 w-4 mr-2" />
              AI Assistant
            </TabsTrigger>
          </TabsList>

          <TabsContent value="faq">
            <FAQSection />
          </TabsContent>

          <TabsContent value="articles">
            {filteredArticleCategories.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredArticleCategories.map((category, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-full bg-[#a39800]/10">
                          <category.icon className="h-5 w-5 text-[#a39800]" />
                        </div>
                        <CardTitle>{category.category}</CardTitle>
                      </div>
                      <CardDescription>Help articles and guides</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {category.articles
                          .filter(article => activeTab === 'articles' ? article.toLowerCase().includes(searchTerm) || category.category.toLowerCase().includes(searchTerm) : true) // Ensure articles are shown if category matches
                          .map((article, idx) => (
                          <li key={idx}>
                            <Link href="#" className="flex items-center text-sm hover:text-[#a39800]">
                              <FileText className="h-4 w-4 mr-2 text-gray-400" />
                              {article}
                            </Link>
                          </li>
                        ))}
                        {category.articles.filter(article => activeTab === 'articles' ? article.toLowerCase().includes(searchTerm) || category.category.toLowerCase().includes(searchTerm) : true).length === 0 && searchTerm && (
                           <li className="text-sm text-gray-500">No articles match your search in this category.</li>
                        )}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <Search className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-lg text-gray-600">No articles found matching your search criteria.</p>
                <p className="text-sm text-gray-500">Try using different keywords or browse all articles.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="ai-assistant">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Gemini AI Assistant</CardTitle>
                <CardDescription>Ask any question about TutorLink and get instant help</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 rounded-lg p-4 mb-4 h-96 overflow-y-auto">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-[#a39800] flex items-center justify-center text-white">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                        <p className="text-sm">Hello! I'm the TutorLink AI assistant. How can I help you today?</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 justify-end">
                      <div className="bg-[#c1d86f]/20 p-3 rounded-lg shadow-sm max-w-[80%]">
                        <p className="text-sm">How do I schedule a session with a tutor?</p>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-[#a39800] flex items-center justify-center text-white">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                        <p className="text-sm">
                          To schedule a session with a tutor, follow these steps:
                          <br />
                          <br />
                          1. Log in to your TutorLink account
                          <br />
                          2. Navigate to "Find Tutors" in the sidebar menu
                          <br />
                          3. Browse available tutors or use the search filters
                          <br />
                          4. Click on a tutor's profile to view their availability
                          <br />
                          5. Select an available time slot
                          <br />
                          6. Confirm the session details and complete the booking
                          <br />
                          <br />
                          You'll receive a confirmation email with the session details and a calendar invitation. You
                          can view all your upcoming sessions in the "Session Management" section of your dashboard.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Input placeholder="Type your question here..." className="pr-12" />
                  <Button className="absolute right-1 top-1 h-8 w-8 p-0 bg-[#a39800]">
                    <Send className="h-4 w-4 text-white" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-3">Common Questions</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "How do I reset my password?",
                  "Where can I find my session recordings?",
                  "How do payments work?",
                  "Can I change my tutor?",
                  "How do I upload documents?",
                ].map((question, index) => (
                  <Button key={index} variant="outline" size="sm" className="rounded-full">
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-white border-t py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">
            Need more help?{" "}
            <a href="#" className="text-[#a39800] hover:underline">
              Contact Support
            </a>
          </p>
        </div>
      </footer>
    </div>
    </DashboardLayout>
  )
}
