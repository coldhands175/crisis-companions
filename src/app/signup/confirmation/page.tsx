'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function SignUpConfirmation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl">CC</span>
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-800 dark:text-white">
          Check your email
        </h2>
        <div className="mt-2 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>We've sent you a confirmation email. Please click the link in the email to verify your account.</p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-slate-800 py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-slate-200 dark:border-slate-700 text-center">
          <div className="flex justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 dark:text-indigo-400">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="16 12 12 8 8 12"></polyline>
              <line x1="12" y1="16" x2="12" y2="8"></line>
            </svg>
          </div>
          
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            After confirming your email, you'll be able to sign in and start using Crisis Companions.
          </p>
          
          <div className="space-y-4">
            <Link href="/login">
              <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 py-6 h-auto">
                Go to login
              </Button>
            </Link>
            
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Didn't receive the email?{' '}
              <button 
                className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                onClick={() => {/* Implement resend email functionality */}}
              >
                Resend email
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
