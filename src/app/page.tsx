import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">CC</span>
            </div>
            <h1 className="text-xl font-semibold text-slate-800 dark:text-white">Crisis Companions</h1>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <Link href="/about" className="text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors">
              About
            </Link>
            <Link href="/resources" className="text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors">
              Resources
            </Link>
            <Link href="/login">
              <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-white">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
                Sign Up
              </Button>
            </Link>
          </nav>
          <Button variant="ghost" className="md:hidden" aria-label="Menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </Button>
        </header>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white leading-tight">
              <span className="text-indigo-600 dark:text-indigo-400">Support</span> for Caregivers During Health Crises
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Crisis Companions provides AI-powered assistance to help you navigate the overwhelming challenges of sudden health crises. Get administrative support, resource navigation, and emotional guidance when you need it most.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="/signup">
                <Button className="bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 px-6 py-6 text-lg h-auto">
                  Get Started
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 px-6 py-6 text-lg h-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -z-10 w-72 h-72 bg-indigo-300 dark:bg-indigo-800 rounded-full blur-3xl opacity-30 -top-10 -right-10"></div>
            <div className="relative bg-white dark:bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 dark:text-indigo-400">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-white">AI Assistant</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Here to help you</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                  <p className="text-slate-700 dark:text-slate-200">I'm feeling overwhelmed with all the medical paperwork and appointments...</p>
                </div>
                <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-lg rounded-tr-none ml-auto max-w-[80%]">
                  <p className="text-indigo-700 dark:text-indigo-200">I understand how overwhelming that can be. Let's start by organizing your appointments in the calendar, and I can help you prioritize the paperwork. What's your most urgent concern right now?</p>
                </div>
                <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                  <p className="text-slate-700 dark:text-slate-200">I need to find financial assistance programs in BC...</p>
                </div>
                <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-lg rounded-tr-none ml-auto max-w-[80%]">
                  <p className="text-indigo-700 dark:text-indigo-200">I can help with that. BC has several financial support programs for caregivers. I've found 3 relevant options that might help in your situation. Would you like me to add these to your resources list?</p>
                </div>
              </div>
              <div className="mt-6 relative">
                <input 
                  type="text" 
                  placeholder="Type your message..."
                  className="w-full p-3 pr-12 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-600 dark:text-indigo-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">How Crisis Companions Helps</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">Our AI-powered platform provides comprehensive support across three key areas to help you navigate caregiving challenges.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-slate-200 dark:border-slate-700 transition-all hover:shadow-lg">
            <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 dark:text-indigo-400">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Administrative Assistance</h3>
            <p className="text-slate-600 dark:text-slate-300">Keep track of appointments, medications, and important documents. Our AI helps you organize and prioritize tasks during overwhelming times.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-slate-200 dark:border-slate-700 transition-all hover:shadow-lg">
            <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 dark:text-indigo-400">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Resource Navigation</h3>
            <p className="text-slate-600 dark:text-slate-300">Discover BC-specific resources for caregivers, including financial assistance, support groups, and healthcare services tailored to your needs.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-slate-200 dark:border-slate-700 transition-all hover:shadow-lg">
            <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 dark:text-indigo-400">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Emotional Support</h3>
            <p className="text-slate-600 dark:text-slate-300">Get compassionate guidance and a listening ear when you need it most. Our AI companion provides empathetic support 24/7, helping reduce caregiver burnout.</p>
          </div>
        </div>
      </div>

      {/* Free vs Premium Section */}
      <div className="bg-white dark:bg-slate-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Choose Your Support Level</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">We offer both free and premium options to ensure everyone has access to the support they need.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700 shadow-md">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Free</h3>
              <p className="text-indigo-600 dark:text-indigo-400 mb-6">Essential support for everyone</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">Basic AI chat for emotional support</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">Dashboard with limited entries</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">Access to free public resources</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">Basic scheduling features</span>
                </li>
              </ul>
              <Link href="/signup">
                <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
                  Sign Up Free
                </Button>
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="bg-indigo-50 dark:bg-indigo-950 rounded-lg p-8 border border-indigo-200 dark:border-indigo-800 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 text-sm font-medium">
                Premium
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Premium</h3>
              <p className="text-indigo-600 dark:text-indigo-400 mb-6">Enhanced support for complex needs</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">Unlimited dashboard storage/history</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">Advanced AI capabilities with proactive reminders</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">Integration/export/sharing options</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">Human concierge coaching option (coming soon)</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-white">
                Coming Soon
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-100 dark:bg-slate-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <h2 className="text-lg font-semibold text-slate-800 dark:text-white">Crisis Companions</h2>
            </div>
            <div className="flex gap-6">
              <Link href="/about" className="text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors">
                About
              </Link>
              <Link href="/resources" className="text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors">
                Resources
              </Link>
              <Link href="/privacy" className="text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors">
                Terms
              </Link>
            </div>
          </div>
          <div className="text-center text-slate-500 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} Crisis Companions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
