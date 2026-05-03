import { Sparkles } from "lucide-react";
import React from "react";
import type { ComponentVariant } from "@/components/docs/sections/generic-category-page";
import { GhostButton } from "@/components/ui/buttons/ghost-button/ghost-button";
import { OutlineButton } from "@/components/ui/buttons/outline-button/outline-button";
// We import the components only for the "preview" function, not the code snippet strings.
import { PrimaryButton } from "@/components/ui/buttons/primary-button/primary-button";
import { SecondaryButton } from "@/components/ui/buttons/secondary-button/secondary-button";
import { Card } from "@/components/ui/core/card/card";
import { StatsCard } from "@/components/ui/core/stats-card/stats-card";
import { TextField } from "@/components/ui/inputs/text-field/text-field";
import { BouncingDots } from "@/components/ui/loaders/bouncing-dots/bouncing-dots";
import { Skeleton } from "@/components/ui/loaders/skeleton/skeleton";
import { Spinner } from "@/components/ui/loaders/spinner/spinner";
import { BasicBreadcrumbs } from "@/components/ui/navigation/breadcrumbs/basic-breadcrumbs";
import { SimpleTabs } from "@/components/ui/navigation/tabs/simple-tabs";
import { StatusBadge } from "@/components/ui/notifications/status-badge/status-badge";
import { SuccessAlert } from "@/components/ui/notifications/success-alert/success-alert";

export const RegistryHub: Record<string, ComponentVariant[]> = {
  "Core Components": [
    {
      title: "Primary Button",
      category: "Buttons",
      subcategory: "Primary-Button",
      description: "Main call-to-action button.",
      size: "0.45kb",
      preview: React.createElement(
        PrimaryButton,
        { icon: Sparkles },
        "Primary Button",
      ),
      codeJsx: `<button className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/20">
  <Sparkles className="w-4 h-4" />
  Primary Button
</button>`,
      codeHtml: `<button class="px-6 py-2.5 rounded-xl bg-[#ffd700] text-[#0a0a0a] font-bold flex items-center gap-2 transition-all shadow-lg" style="box-shadow: 0 4px 14px 0 rgba(255, 215, 0, 0.2);">
  <svg class="w-4 h-4">...</svg>
  Primary Button
</button>`,
    },
    {
      title: "Secondary Button",
      category: "Buttons",
      subcategory: "Secondary-Button",
      description: "Subtle background action button.",
      size: "0.3kb",
      preview: React.createElement(SecondaryButton, {}, "Secondary Button"),
      codeJsx: `<button className="px-6 py-2.5 rounded-xl bg-secondary text-secondary-foreground font-bold hover:bg-secondary/80 transition-all active:scale-95">
  Secondary Button
</button>`,
      codeHtml: `<button class="px-6 py-2.5 rounded-xl bg-[#f4f4f5] text-[#0a0a0a] font-bold hover:opacity-80 transition-all">
  Secondary Button
</button>`,
    },
    {
      title: "Outline Button",
      category: "Buttons",
      subcategory: "Outline-Button",
      description: "Bordered secondary action.",
      size: "0.35kb",
      preview: React.createElement(OutlineButton, {}, "Outline Button"),
      codeJsx: `<button className="px-6 py-2.5 rounded-xl border-2 border-primary bg-transparent text-foreground font-bold hover:bg-primary/10 transition-all">
  Outline Button
</button>`,
      codeHtml: `<button class="px-6 py-2.5 rounded-xl border-2 border-[#ffd700] bg-transparent text-foreground font-bold hover:bg-[#ffd700]/10 transition-all">
  Outline Button
</button>`,
    },
    {
      title: "Ghost Button",
      category: "Buttons",
      subcategory: "Ghost-Button",
      description: "Transparent interactive trigger.",
      size: "0.25kb",
      preview: React.createElement(GhostButton, {}, "Ghost Button"),
      codeJsx: `<button className="px-6 py-2.5 rounded-xl bg-transparent text-foreground font-bold hover:bg-primary/10 transition-all">
  Ghost Button
</button>`,
      codeHtml: `<button class="px-6 py-2.5 rounded-xl bg-transparent text-foreground font-bold hover:bg-[#ffd700]/10 transition-all">
  Ghost Button
</button>`,
    },
    {
      title: "Basic Card",
      category: "Cards",
      subcategory: "Basic-Card",
      description: "Standard container with hover elevation.",
      size: "0.35kb",
      preview: React.createElement(
        Card,
        { title: "Card Title", subtitle: "Subtitle" },
        "Card content",
      ),
      codeJsx: `<div className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm hover:border-primary/50 transition-all">
  <h3 className="text-xl font-bold mb-1">Card Title</h3>
  <p className="text-sm text-slate-500 mb-4">Subtitle</p>
  <p className="text-sm text-slate-600">Card content</p>
</div>`,
      codeHtml: `<div class="bg-white border border-gray-200 p-8 rounded-[2rem] shadow-sm hover:border-gray-300 transition-all">
  <h3 class="text-xl font-bold mb-1">Card Title</h3>
  <p class="text-sm text-gray-500 mb-4">Subtitle</p>
  <p class="text-sm text-gray-600">Card content</p>
</div>`,
    },
    {
      title: "Stats Card",
      category: "Cards",
      subcategory: "Stats-Card",
      description: "Dashboard-style numeric showcase.",
      size: "0.6kb",
      preview: React.createElement(StatsCard, {
        label: "Total Revenue",
        value: "$45,231.89",
        trend: "20.1%",
        trendUp: true,
      }),
      codeJsx: `<div className="p-6 rounded-[2rem] bg-card border border-border shadow-sm group hover:border-primary/50 transition-all">
  <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-4">Total Revenue</p>
  <div className="flex items-end justify-between">
    <h3 className="text-3xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors">$45,231.89</h3>
    <div className="text-emerald-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
      <span>↑</span> 20.1%
    </div>
  </div>
  <div className="mt-6 h-1.5 w-full bg-muted rounded-full overflow-hidden">
    <div className="h-full bg-primary w-[65%]"></div>
  </div>
</div>`,
      codeHtml: `<div class="p-6 rounded-[2rem] bg-white border border-gray-200 shadow-sm transition-all hover:border-[#ffd700]">
  <p class="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4">Total Revenue</p>
  <div class="flex items-end justify-between">
    <h3 class="text-3xl font-black tracking-tighter">$45,231.89</h3>
    <div class="text-emerald-500 text-[10px] font-bold uppercase tracking-widest">
      ↑ 20.1%
    </div>
  </div>
  <div class="mt-6 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
    <div class="h-full bg-[#ffd700]" style="width: 65%;"></div>
  </div>
</div>`,
    },
    {
      title: "Text Fields",
      category: "Inputs",
      subcategory: "Text Fields",
      description: "Standard input with premium styling.",
      size: "0.5kb",
      preview: React.createElement(TextField, {
        label: "Username",
        placeholder: "Enter your username",
      }),
      codeJsx: `<div className="flex flex-col gap-2 w-full">
  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Username</label>
  <input 
    type="text" 
    placeholder="Enter your username"
    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
  />
</div>`,
      codeHtml: `<div class="flex flex-col gap-2 w-full">
  <label class="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Username</label>
  <input 
    type="text" 
    placeholder="Enter your username"
    class="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffd700]/50 transition-all"
  />
</div>`,
    },
  ],

  Loaders: [
    {
      title: "Spinner",
      category: "Spinners",
      subcategory: "Spinner",
      description: "Smooth rotation loader.",
      size: "0.25kb",
      preview: React.createElement(Spinner, { size: "md" }),
      codeJsx: `<div className="h-8 w-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>`,
      codeHtml: `<div class="h-8 w-8 rounded-full border-4 border-[#ffd700] border-t-transparent animate-spin"></div>`,
    },
    {
      title: "Ring Spinner",
      category: "Spinners",
      subcategory: "Ring Spinner",
      description: "Dual-ring concentric loader.",
      size: "0.4kb",
      preview: React.createElement(
        "div",
        {
          className:
            "relative h-10 w-10 flex items-center justify-center pointer-events-none",
        },
        React.createElement("div", {
          className: "absolute inset-0 rounded-full border-2 border-primary/20",
        }),
        React.createElement("div", {
          className:
            "absolute inset-0 rounded-full border-t-2 border-primary animate-spin",
        }),
      ),
      codeJsx: `<div className="relative h-10 w-10 flex items-center justify-center">
  <div className="absolute inset-0 rounded-full border-2 border-primary/20"></div>
  <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin"></div>
</div>`,
      codeHtml: `<div class="relative h-10 w-10 flex items-center justify-center">
  <div class="absolute inset-0 rounded-full border-2 border-[#ffd700]/20"></div>
  <div class="absolute inset-0 rounded-full border-t-2 border-[#ffd700] animate-spin"></div>
</div>`,
    },
    {
      title: "Progress Bar",
      category: "Progress",
      subcategory: "Progress Bar",
      description: "Indeterminate linear loader.",
      size: "0.3kb",
      preview: React.createElement(
        "div",
        {
          className:
            "w-48 h-1.5 bg-muted rounded-full overflow-hidden relative",
        },
        React.createElement("div", {
          className:
            "absolute inset-0 bg-primary animate-[shimmer_1.5s_infinite] w-[40%]",
          style: {
            animationName: "shimmer",
            animationDuration: "1.5s",
            animationIterationCount: "infinite",
          },
        }),
      ),
      codeJsx: `<div className="w-full h-1.5 bg-muted rounded-full overflow-hidden relative">
  <div className="absolute inset-0 bg-primary w-[40%] animate-pulse"></div>
</div>`,
      codeHtml: `<div class="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden relative">
  <div class="absolute inset-0 bg-[#ffd700] w-[40%] animate-pulse"></div>
</div>`,
    },
    {
      title: "Bouncing Dots",
      category: "Pulse",
      subcategory: "Bouncing-Dots",
      description: "Rhythmic bouncing dots.",
      size: "0.3kb",
      preview: React.createElement(BouncingDots, {}),
      codeJsx: `<div className="flex gap-1.5 items-center justify-center">
  <div className="w-2.5 h-2.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]"></div>
  <div className="w-2.5 h-2.5 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]"></div>
  <div className="w-2.5 h-2.5 rounded-full bg-primary animate-bounce"></div>
</div>`,
      codeHtml: `<div class="flex gap-1.5 items-center justify-center">
  <div class="w-2.5 h-2.5 rounded-full bg-[#ffd700] animate-bounce" style="animation-delay: -0.3s;"></div>
  <div class="w-2.5 h-2.5 rounded-full bg-[#ffd700] animate-bounce" style="animation-delay: -0.15s;"></div>
  <div class="w-2.5 h-2.5 rounded-full bg-[#ffd700] animate-bounce"></div>
</div>`,
    },
    {
      title: "Skeleton",
      category: "Skeleton",
      subcategory: "Skeleton",
      description: "Placeholder for content loading.",
      size: "0.2kb",
      preview: React.createElement(Skeleton, { className: "w-32 h-4" }),
      codeJsx: `<div className="w-32 h-4 bg-muted/50 rounded-md animate-pulse"></div>`,
      codeHtml: `<div class="w-32 h-4 bg-gray-100 rounded-md animate-pulse"></div>`,
    },
  ],

  Notifications: [
    {
      title: "Status Badge",
      category: "Badges",
      subcategory: "Status Badge",
      description: "Small pill for states and tags.",
      size: "0.2kb",
      preview: React.createElement(
        StatusBadge,
        { variant: "success" },
        "Active",
      ),
      codeJsx: `<span className="px-2.5 py-0.5 rounded-full border bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-[10px] font-black uppercase tracking-widest">
  Active
</span>`,
      codeHtml: `<span class="px-2.5 py-0.5 rounded-full border bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest">
  Active
</span>`,
    },
    {
      title: "Success Alert",
      category: "Alerts",
      subcategory: "Success Alert",
      description: "Full-width feedback notification.",
      size: "0.4kb",
      preview: React.createElement(SuccessAlert, {
        title: "Update Successful",
        description: "Your profile has been saved successfully.",
      }),
      codeJsx: `<div className="flex flex-col p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 w-full">
  <div className="flex items-center gap-3 mb-1">
    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
    <h4 className="text-sm font-black uppercase tracking-widest">Update Successful</h4>
  </div>
  <p className="text-xs font-medium text-emerald-500/80 leading-relaxed ml-5">
    Your profile has been saved successfully.
  </p>
</div>`,
      codeHtml: `<div class="flex flex-col p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 w-full">
  <div class="flex items-center gap-3 mb-1">
    <div class="w-2 h-2 rounded-full bg-emerald-500"></div>
    <h4 class="text-sm font-bold uppercase tracking-widest">Update Successful</h4>
  </div>
  <p class="text-xs font-medium text-emerald-500/80 leading-relaxed ml-5">
    Your profile has been saved successfully.
  </p>
</div>`,
    },
  ],

  Navigation: [
    {
      title: "Basic Breadcrumbs",
      category: "Breadcrumbs",
      subcategory: "Basic Breadcrumbs",
      description: "Hierarchy path indicator.",
      size: "0.3kb",
      preview: React.createElement(BasicBreadcrumbs, {
        items: [
          { label: "Home", href: "#" },
          { label: "Library", href: "#" },
          { label: "Components" },
        ],
      }),
      codeJsx: `<nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
  <span className="text-muted-foreground/30">/</span>
  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Library</a>
  <span className="text-muted-foreground/30">/</span>
  <span className="text-foreground">Components</span>
</nav>`,
      codeHtml: `<nav class="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
  <a href="#" class="text-gray-500 hover:text-[#ffd700] transition-colors">Home</a>
  <span class="text-gray-300">/</span>
  <a href="#" class="text-gray-500 hover:text-[#ffd700] transition-colors">Library</a>
  <span class="text-gray-300">/</span>
  <span class="text-black">Components</span>
</nav>`,
    },
    {
      title: "Simple Tabs",
      category: "Tabs",
      subcategory: "Simple Tabs",
      description: "Swappable content navigation.",
      size: "0.6kb",
      preview: React.createElement(SimpleTabs, {
        tabs: [
          { id: "1", label: "Profile" },
          { id: "2", label: "Settings" },
          { id: "3", label: "Billing" },
        ],
      }),
      codeJsx: `<div className="flex items-center gap-1 p-1 bg-muted/50 rounded-2xl w-fit">
  <button className="px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest bg-primary text-primary-foreground shadow-lg shadow-primary/20">Profile</button>
  <button className="px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">Settings</button>
  <button className="px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">Billing</button>
</div>`,
      codeHtml: `<div class="flex items-center gap-1 p-1 bg-gray-100 rounded-2xl w-fit">
  <button class="px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest bg-[#ffd700] text-[#0a0a0a]">Profile</button>
  <button class="px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest text-gray-500">Settings</button>
  <button class="px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest text-gray-500">Billing</button>
</div>`,
    },
  ],
};
