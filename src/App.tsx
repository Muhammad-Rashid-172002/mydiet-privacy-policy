/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  Shield, 
  Lock, 
  Database, 
  Activity, 
  ShieldCheck, 
  Share2, 
  User, 
  Trash2, 
  Mail,
  ChevronRight,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Section = ({ title, icon: Icon, children, id }: { title: string, icon: any, children: ReactNode, id?: string }) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="py-12 border-b border-slate-800 last:border-0"
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 rounded-lg bg-primary/10 text-primary">
        <Icon size={24} />
      </div>
      <h2 className="text-2xl font-bold text-slate-50">{title}</h2>
    </div>
    <div className="text-slate-400 leading-relaxed space-y-4">
      {children}
    </div>
  </motion.section>
);

export default function App() {
  const lastUpdated = "April 14, 2026";
  const contactEmail = "bahagiajemali@gmail.com";

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-800/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-background font-bold">
              M
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-50">MYDiet</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#collect" className="text-sm font-medium text-slate-400 hover:text-primary transition-colors">Collect</a>
            <a href="#usage" className="text-sm font-medium text-slate-400 hover:text-primary transition-colors">Usage</a>
            <a href="#security" className="text-sm font-medium text-slate-400 hover:text-primary transition-colors">Security</a>
            <a href="#rights" className="text-sm font-medium text-slate-400 hover:text-primary transition-colors">Rights</a>
          </nav>
          <Button variant="outline" size="sm" className="border-slate-700 text-slate-300 hover:bg-slate-800">
            Contact Support
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 max-w-4xl">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-hero pointer-events-none opacity-50" />
          <div className="relative z-10 text-center space-y-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 text-primary mb-4 glow-green"
            >
              <Shield size={48} />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-extrabold text-slate-50 tracking-tight"
            >
              Privacy Policy
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto"
            >
              Your data is secure, private, and always under your control. We believe in transparency and your right to privacy.
            </motion.p>
          </div>
        </section>

        {/* Content Sections */}
        <div className="space-y-8 pb-20">
          <Section id="collect" title="Information We Collect" icon={Database}>
            <p>To provide you with the best fitness experience, we collect specific information when you use MYDiet:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {[
                { label: "Email & Profile", desc: "Collected via Google Login or Firebase for account management.", icon: User },
                { label: "Health Data", desc: "Nutritional intake including Calories, Fats, Protein, and Carbs.", icon: Activity },
                { label: "Progress Tracking", desc: "Weight logs and fitness milestones to visualize your journey.", icon: ShieldCheck },
                { label: "Food Scan Data", desc: "Images and data from food scans to provide nutritional insights.", icon: Info }
              ].map((item, i) => (
                <li key={i} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 flex gap-3">
                  <div className="text-accent mt-1"><item.icon size={18} /></div>
                  <div>
                    <span className="block font-semibold text-slate-200">{item.label}</span>
                    <span className="text-sm text-slate-400">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="usage" title="How We Use Information" icon={Activity}>
            <p>We use the collected data strictly for enhancing your fitness journey:</p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-slate-800">
                <AccordionTrigger className="text-slate-200 hover:text-primary">Track Fitness Progress</AccordionTrigger>
                <AccordionContent className="text-slate-400">
                  We analyze your nutritional intake and weight logs to provide accurate charts and progress reports.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-slate-800">
                <AccordionTrigger className="text-slate-200 hover:text-primary">Personalized Diet Insights</AccordionTrigger>
                <AccordionContent className="text-slate-400">
                  Your data helps us tailor recommendations for your specific goals, whether it's weight loss, muscle gain, or maintenance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-slate-800">
                <AccordionTrigger className="text-slate-200 hover:text-primary">Improve App Experience</AccordionTrigger>
                <AccordionContent className="text-slate-400">
                  Anonymized usage patterns help us identify bugs and develop new features that matter to you.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Section>

          <Section id="security" title="Data Security" icon={Lock}>
            <p>We implement industry-standard security measures to protect your information:</p>
            <div className="grid grid-cols-1 gap-4 mt-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
                <div className="p-2 rounded-full bg-primary/20 text-primary"><ShieldCheck size={20} /></div>
                <div>
                  <h4 className="font-bold text-slate-200">Firebase Secure Storage</h4>
                  <p className="text-sm text-slate-400">Your data is stored in Google's highly secure Firebase infrastructure with multi-layer protection.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
                <div className="p-2 rounded-full bg-accent/20 text-accent"><Lock size={20} /></div>
                <div>
                  <h4 className="font-bold text-slate-200">Encrypted Systems</h4>
                  <p className="text-sm text-slate-400">All data transmissions are encrypted using SSL/TLS protocols to prevent unauthorized access.</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Data Sharing" icon={Share2}>
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full -mr-16 -mt-16" />
              <p className="text-lg font-bold text-primary mb-2 flex items-center gap-2">
                <ShieldCheck size={20} />
                Our Commitment
              </p>
              <p className="text-slate-200 text-xl font-medium leading-tight">
                “We do <span className="text-primary underline decoration-primary/30 underline-offset-4">NOT</span> sell or share your personal data with third parties for marketing purposes.”
              </p>
            </div>
          </Section>

          <Section id="rights" title="Your Rights" icon={User}>
            <p>You have full control over your personal information:</p>
            <div className="space-y-4 mt-4">
              {[
                { title: "Access Your Data", desc: "View all information we have stored about your profile and health logs at any time." },
                { title: "Update Information", desc: "Easily correct or update your personal details and fitness goals within the app settings." },
                { title: "Delete Account", desc: "You have the right to permanently delete your account and all associated data." }
              ].map((right, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-800/40 transition-colors group">
                  <div>
                    <h4 className="font-bold text-slate-200">{right.title}</h4>
                    <p className="text-sm text-slate-400">{right.desc}</p>
                  </div>
                  <ChevronRight size={20} className="text-slate-600 group-hover:text-primary transition-colors" />
                </div>
              ))}
            </div>
          </Section>

          {/* Trust Highlight Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="py-12"
          >
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-primary/20 overflow-hidden relative glow-green">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
              <CardContent className="p-10 text-center space-y-4">
                <h3 className="text-3xl font-bold text-slate-50">You are always in control.</h3>
                <p className="text-slate-400 max-w-lg mx-auto">
                  We build tools to empower you, not to exploit your data. Your trust is our most valuable asset.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <section className="py-12 text-center space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-50">Need to leave?</h3>
              <p className="text-slate-400">We'll be sad to see you go, but we respect your decision.</p>
            </div>
            <Button 
              variant="outline" 
              className="border-destructive/50 text-destructive hover:bg-destructive hover:text-destructive-foreground h-12 px-8 rounded-full transition-all duration-300"
            >
              <Trash2 size={18} className="mr-2" />
              Delete My Account
            </Button>
            <p className="text-xs text-slate-500 italic">
              * This action is permanent and cannot be undone. All your progress data will be wiped from our servers.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-background text-xs font-bold">
                  M
                </div>
                <span className="font-bold text-slate-200">MYDiet</span>
              </div>
              <p className="text-sm text-slate-500">
                Empowering your fitness journey with privacy at its core.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors cursor-pointer">
                <Mail size={16} />
                <a href={`mailto:${contactEmail}`} className="text-sm">{contactEmail}</a>
              </div>
              <p className="text-xs text-slate-600">
                Last Updated: {lastUpdated}
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800/50 text-center">
            <p className="text-xs text-slate-600">
              &copy; {new Date().getFullYear()} MYDiet App. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
