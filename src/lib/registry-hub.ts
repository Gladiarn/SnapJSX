import {
  AlertCircle,
  LogOut,
  Package,
  Settings,
  Sparkles,
  User,
} from "lucide-react";
import React from "react";
import type { ComponentVariant } from "@/components/docs/sections/generic-category-page";
import { GhostButton } from "@/components/ui/buttons/ghost-button/ghost-button";
import { LoadingButton } from "@/components/ui/buttons/loading-button/loading-button";
import { OutlineButton } from "@/components/ui/buttons/outline-button/outline-button";
// We import the components only for the "preview" function, not the code snippet strings.
import { PrimaryButton } from "@/components/ui/buttons/primary-button/primary-button";
import { SecondaryButton } from "@/components/ui/buttons/secondary-button/secondary-button";
import { Card } from "@/components/ui/core/card/card";
import { CardWithHeader } from "@/components/ui/core/card-with-header/card-with-header";
import { BasicDropdown } from "@/components/ui/core/dropdown/basic-dropdown";
import { SimpleList } from "@/components/ui/core/list/simple-list";
import { AlertModal } from "@/components/ui/core/modal/alert-modal";
import { StatsCard } from "@/components/ui/core/stats-card/stats-card";
import { BasicTable } from "@/components/ui/core/table/basic-table";
import { Checkbox } from "@/components/ui/inputs/checkbox/checkbox";
import { RadioGroup } from "@/components/ui/inputs/radio/radio-group";
import { NativeSelect } from "@/components/ui/inputs/select/native-select";
import { TextField } from "@/components/ui/inputs/text-field/text-field";
import { BarLoader } from "@/components/ui/loaders/bar-loader/bar-loader";
import { BouncingDots } from "@/components/ui/loaders/bouncing-dots/bouncing-dots";
import { CardSkeleton } from "@/components/ui/loaders/skeleton/card-skeleton";
import { Skeleton } from "@/components/ui/loaders/skeleton/skeleton";
import { Spinner } from "@/components/ui/loaders/spinner/spinner";
import { BasicBreadcrumbs } from "@/components/ui/navigation/breadcrumbs/basic-breadcrumbs";
import { SimpleNavbar } from "@/components/ui/navigation/navbar/simple-navbar";
import { PillTabs } from "@/components/ui/navigation/tabs/pill-tabs";
import { SimpleTabs } from "@/components/ui/navigation/tabs/simple-tabs";
import { ErrorAlert } from "@/components/ui/notifications/error-alert/error-alert";
import { StatusBadge } from "@/components/ui/notifications/status-badge/status-badge";
import { SuccessAlert } from "@/components/ui/notifications/success-alert/success-alert";
import { BasicToast } from "@/components/ui/notifications/toast/basic-toast";

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
      title: "Loading Button",
      category: "Buttons",
      subcategory: "Loading-Button",
      description: "Button with integrated spinner.",
      size: "0.55kb",
      preview: React.createElement(
        LoadingButton,
        { isLoading: true },
        "Loading",
      ),
      codeJsx: `<button disabled className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold flex items-center gap-2 opacity-50">
  <div className="h-4 w-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" />
  Loading
</button>`,
      codeHtml: `<button disabled class="px-6 py-2.5 rounded-xl bg-[#ffd700] text-[#0a0a0a] font-bold flex items-center gap-2 opacity-50">
  <div class="h-4 w-4 rounded-full border-2 border-black border-t-transparent animate-spin"></div>
  Loading
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
      title: "Card with Header",
      category: "Cards",
      subcategory: "Card with Header",
      description: "Container with structured header.",
      size: "0.5kb",
      preview: React.createElement(
        CardWithHeader,
        { title: "Header Title", subtitle: "Categorized" },
        "Card body content goes here.",
      ),
      codeJsx: `<div className="bg-card border border-border rounded-[2rem] overflow-hidden">
  <div className="px-8 py-6 border-b border-border flex justify-between items-center">
    <div>
      <h3 className="text-lg font-bold">Header Title</h3>
      <p className="text-[10px] uppercase font-black text-muted-foreground">Categorized</p>
    </div>
  </div>
  <div className="p-8 text-sm text-muted-foreground">Card body content...</div>
</div>`,
      codeHtml: `<div class="bg-white border border-gray-200 rounded-[2rem] overflow-hidden">
  <div class="px-8 py-6 border-b border-gray-100 flex justify-between items-center">
    <div>
      <h3 class="text-lg font-bold">Header Title</h3>
      <p class="text-[10px] uppercase font-black text-gray-400">Categorized</p>
    </div>
  </div>
  <div class="p-8 text-sm text-gray-500">Card body content...</div>
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
      title: "Alert Modal",
      category: "Modals",
      subcategory: "Alert Modal",
      description: "Critical confirmation dialog.",
      size: "1.2kb",
      preview: React.createElement(AlertModal, {
        isOpen: true,
        onClose: () => {},
        title: "Are you sure?",
        description:
          "This action cannot be undone. This will permanently delete your account.",
      }),
      codeJsx: `<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
  <div className="relative w-full max-w-lg bg-card border border-border rounded-[2.5rem] shadow-2xl p-8 overflow-hidden">
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-2">
        <AlertCircle className="w-6 h-6" />
      </div>
      <h3 className="text-2xl font-black tracking-tight">Are you sure?</h3>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
        This action cannot be undone. This will permanently delete your account.
      </p>
    </div>
    <div className="flex flex-col sm:flex-row gap-3 mt-10">
      <button className="flex-1 px-6 py-2.5 rounded-2xl border border-input font-bold text-sm hover:bg-accent transition-all">
        Cancel
      </button>
      <button className="flex-1 px-6 py-2.5 rounded-2xl bg-primary text-primary-foreground font-bold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
        Confirm
      </button>
    </div>
  </div>
</div>`,
      codeHtml: `<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
  <div class="bg-white border border-gray-200 rounded-[2.5rem] shadow-2xl p-8 max-w-lg w-full text-center">
    <h3 class="text-2xl font-black tracking-tight mb-2">Are you sure?</h3>
    <p class="text-sm text-gray-500 mb-8">This action cannot be undone.</p>
    <div class="flex gap-3">
      <button class="flex-1 px-6 py-2.5 rounded-xl border border-gray-200 font-bold">Cancel</button>
      <button class="flex-1 px-6 py-2.5 rounded-xl bg-[#ffd700] font-bold">Confirm</button>
    </div>
  </div>
</div>`,
    },
    {
      title: "Basic Dropdown",
      category: "Dropdowns",
      subcategory: "Basic Dropdown",
      description: "Minimalist animated menu.",
      size: "0.8kb",
      preview: React.createElement(BasicDropdown, {
        label: "Options",
        items: [
          { id: "1", label: "Edit Profile", icon: User },
          { id: "2", label: "Settings", icon: Settings },
          { id: "3", label: "Logout", icon: LogOut },
        ],
      }),
      codeJsx: `<div className="relative">
  <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-card border border-border font-bold text-xs uppercase tracking-widest hover:border-primary/50 transition-all">
    Options
    <ChevronDown className="w-4 h-4" />
  </button>

  <div className="absolute z-50 mt-2 w-48 bg-card border border-border rounded-2xl shadow-xl p-2 overflow-hidden">
    <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all text-left">
      <User className="w-4 h-4" />
      Edit Profile
    </button>
    <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all text-left">
      <Settings className="w-4 h-4" />
      Settings
    </button>
    <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all text-left">
      <LogOut className="w-4 h-4" />
      Logout
    </button>
  </div>
</div>`,
      codeHtml: `<div class="relative">
  <button class="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-gray-200 font-bold text-[10px] uppercase tracking-widest">
    Options <span>↓</span>
  </button>
  <div class="absolute mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl p-2">
    <button class="w-full text-left px-4 py-2 text-[10px] font-bold uppercase hover:bg-gray-50 transition-colors">Edit Profile</button>
    <button class="w-full text-left px-4 py-2 text-[10px] font-bold uppercase hover:bg-gray-50 transition-colors">Settings</button>
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
    {
      title: "Checkboxes",
      category: "Inputs",
      subcategory: "Checkboxes",
      description: "Animated toggle for options.",
      size: "0.4kb",
      preview: React.createElement(Checkbox, {
        label: "Accept terms",
        checked: true,
      }),
      codeJsx: `<label className="flex items-center gap-3 cursor-pointer group">
  <div className="w-5 h-5 rounded-md border-2 border-primary bg-primary flex items-center justify-center">
    <Check className="w-3.5 h-3.5 text-primary-foreground stroke-[3px]" />
  </div>
  <span className="text-sm font-medium group-hover:text-primary transition-colors">Accept terms</span>
</label>`,
      codeHtml: `<label class="flex items-center gap-3 cursor-pointer group">
  <div class="w-5 h-5 rounded-md border-2 border-[#ffd700] bg-[#ffd700] flex items-center justify-center">
    <svg class="w-3.5 h-3.5 text-black">...</svg>
  </div>
  <span class="text-sm font-medium transition-colors hover:text-[#ffd700]">Accept terms</span>
</label>`,
    },
    {
      title: "Native Select",
      category: "Inputs",
      subcategory: "Select",
      description: "Styled native dropdown.",
      size: "0.4kb",
      preview: React.createElement(NativeSelect, {
        label: "Category",
        options: [
          { value: "1", label: "Electronics" },
          { value: "2", label: "Fashion" },
          { value: "3", label: "Home" },
        ],
      }),
      codeJsx: `<div className="flex flex-col gap-2 w-full">
  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Category</label>
  <div className="relative">
    <select className="w-full appearance-none px-4 py-3 rounded-xl bg-card border border-border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all pr-10">
      <option value="1">Electronics</option>
      <option value="2">Fashion</option>
      <option value="3">Home</option>
    </select>
    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
      <ChevronDown className="w-4 h-4" />
    </div>
  </div>
</div>`,
      codeHtml: `<div class="flex flex-col gap-2">
  <label class="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Category</label>
  <div class="relative">
    <select class="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm appearance-none">
      <option>Electronics</option>
      <option>Fashion</option>
    </select>
  </div>
</div>`,
    },
  ],

  Forms: [
    {
      title: "Basic Input",
      category: "Forms",
      subcategory: "Text Fields",
      description: "Standard text input.",
      size: "0.4kb",
      preview: React.createElement(TextField, {
        label: "Email",
        placeholder: "john@example.com",
      }),
      codeJsx: `<div className="flex flex-col gap-2 w-full">
  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Email</label>
  <input 
    type="email" 
    placeholder="john@example.com"
    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
  />
</div>`,
      codeHtml: `<div class="flex flex-col gap-2 w-full">
  <label class="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Email</label>
  <input type="text" placeholder="john@example.com" class="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm" />
</div>`,
    },
    {
      title: "Basic Checkbox",
      category: "Forms",
      subcategory: "Checkboxes",
      description: "Simple toggle component.",
      size: "0.3kb",
      preview: React.createElement(Checkbox, {
        label: "Subscribe to newsletter",
        checked: true,
      }),
      codeJsx: `<label className="flex items-center gap-3 cursor-pointer group">
  <div className="w-5 h-5 rounded-md border-2 border-primary bg-primary flex items-center justify-center transition-colors">
    <Check className="w-3.5 h-3.5 text-primary-foreground stroke-[3px]" />
  </div>
  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Subscribe to newsletter</span>
</label>`,
      codeHtml: `<label class="flex items-center gap-3 cursor-pointer">
  <div class="w-5 h-5 rounded-md border-2 border-[#ffd700] bg-[#ffd700] flex items-center justify-center">
    <svg class="w-3.5 h-3.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
    </svg>
  </div>
  <span class="text-sm font-medium">Subscribe to newsletter</span>
</label>`,
    },
    {
      title: "Radio Group",
      category: "Forms",
      subcategory: "Radio",
      description: "Animated selection list.",
      size: "0.6kb",
      preview: React.createElement(RadioGroup, {
        options: [
          { id: "1", label: "Option One" },
          { id: "2", label: "Option Two" },
        ],
      }),
      codeJsx: `<div className="space-y-3">
  <label className="flex items-center gap-3 cursor-pointer group">
    <div className="relative flex items-center justify-center">
      <div className="w-5 h-5 rounded-full border-2 border-primary transition-all" />
      <div className="absolute w-2.5 h-2.5 rounded-full bg-primary" />
    </div>
    <span className="text-sm font-medium text-foreground">Option One</span>
  </label>
  <label className="flex items-center gap-3 cursor-pointer group">
    <div className="relative flex items-center justify-center">
      <div className="w-5 h-5 rounded-full border-2 border-border/50 group-hover:border-primary/50 transition-all" />
    </div>
    <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">Option Two</span>
  </label>
</div>`,
      codeHtml: `<div class="space-y-3">
  <label class="flex items-center gap-3 cursor-pointer group">
    <div class="w-5 h-5 rounded-full border-2 border-[#ffd700] flex items-center justify-center">
      <div class="w-2.5 h-2.5 rounded-full bg-[#ffd700]"></div>
    </div>
    <span class="text-sm font-medium">Option One</span>
  </label>
</div>`,
    },
    {
      title: "Native Select",
      category: "Forms",
      subcategory: "Select",
      description: "Styled native dropdown.",
      size: "0.4kb",
      preview: React.createElement(NativeSelect, {
        label: "Category",
        options: [
          { value: "1", label: "Electronics" },
          { value: "2", label: "Fashion" },
          { value: "3", label: "Home" },
        ],
      }),
      codeJsx: `<div className="flex flex-col gap-2 w-full">
  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Category</label>
  <div className="relative">
    <select className="w-full appearance-none px-4 py-3 rounded-xl bg-card border border-border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all pr-10">
      <option value="1">Electronics</option>
      <option value="2">Fashion</option>
      <option value="3">Home</option>
    </select>
    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
      <ChevronDown className="w-4 h-4" />
    </div>
  </div>
</div>`,
      codeHtml: `<div class="flex flex-col gap-2">
  <label class="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Category</label>
  <div class="relative">
    <select class="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm appearance-none">
      <option>Electronics</option>
      <option>Fashion</option>
    </select>
  </div>
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
      title: "Bar Loader",
      category: "Progress",
      subcategory: "Bar Loader",
      description: "Dynamic vertical bar animation.",
      size: "0.5kb",
      preview: React.createElement(BarLoader, {}),
      codeJsx: `<div className="flex items-center gap-1 h-8">
  <div className="w-1.5 h-6 bg-primary rounded-full animate-bounce"></div>
  <div className="w-1.5 h-8 bg-primary rounded-full animate-bounce [animation-delay:0.1s]"></div>
  <div className="w-1.5 h-4 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></div>
</div>`,
      codeHtml: `<div class="flex items-center gap-1 h-8">
  <div class="w-1.5 h-6 bg-[#ffd700] rounded-full animate-bounce"></div>
  <div class="w-1.5 h-8 bg-[#ffd700] rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
  <div class="w-1.5 h-4 bg-[#ffd700] rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
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
    {
      title: "Card Skeleton",
      category: "Skeleton",
      subcategory: "Card Skeleton",
      description: "Placeholder for card content.",
      size: "0.7kb",
      preview: React.createElement(CardSkeleton, { className: "w-80" }),
      codeJsx: `<div className="bg-card border border-border/50 rounded-[2rem] p-8 space-y-6 w-80">
  <div className="space-y-3">
    <div className="w-1/3 h-6 bg-muted/50 rounded-md animate-pulse"></div>
    <div className="w-1/2 h-4 bg-muted/50 rounded-md animate-pulse"></div>
  </div>
  <div className="space-y-2">
    <div className="w-full h-4 bg-muted/50 rounded-md animate-pulse"></div>
    <div className="w-full h-4 bg-muted/50 rounded-md animate-pulse"></div>
    <div className="w-4/5 h-4 bg-muted/50 rounded-md animate-pulse"></div>
  </div>
  <div className="pt-4 flex gap-3">
    <div className="w-24 h-10 bg-muted/50 rounded-xl animate-pulse"></div>
    <div className="w-24 h-10 bg-muted/50 rounded-xl animate-pulse"></div>
  </div>
</div>`,
      codeHtml: `<div class="p-8 bg-white border border-gray-100 rounded-[2rem] space-y-4">
  <div class="h-6 w-1/3 bg-gray-100 rounded-md animate-pulse"></div>
  <div class="h-4 w-full bg-gray-100 rounded-md animate-pulse"></div>
  <div class="h-4 w-4/5 bg-gray-100 rounded-md animate-pulse"></div>
</div>`,
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
        {
          variant: "success",
        },
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
    {
      title: "Error Alert",
      category: "Alerts",
      subcategory: "Error Alert",
      description: "Critical feedback notification.",
      size: "0.4kb",
      preview: React.createElement(ErrorAlert, {
        title: "Submission Failed",
        description: "Please check your network connection.",
      }),
      codeJsx: `<div className="flex flex-col p-4 rounded-2xl bg-destructive/10 border border-destructive/20 text-destructive w-full">
  <div className="flex items-center gap-3 mb-1">
    <div className="w-2 h-2 rounded-full bg-destructive animate-pulse"></div>
    <h4 className="text-sm font-black uppercase tracking-widest">Submission Failed</h4>
  </div>
  <p className="text-xs font-medium text-destructive/80 leading-relaxed ml-5">
    Please check your network connection.
  </p>
</div>`,
      codeHtml: `<div class="flex flex-col p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 w-full">
  <div class="flex items-center gap-3 mb-1">
    <div class="w-2 h-2 rounded-full bg-red-500"></div>
    <h4 class="text-sm font-bold uppercase tracking-widest">Submission Failed</h4>
  </div>
  <p class="text-xs font-medium text-red-500/80 leading-relaxed ml-5">
    Please check your network connection.
  </p>
</div>`,
    },
    {
      title: "Basic Toast",
      category: "Toasts",
      subcategory: "Basic Toast",
      description: "Floating feedback notification.",
      size: "0.6kb",
      preview: React.createElement(BasicToast, {
        message: "Settings saved successfully!",
        duration: 999999,
      }),
      codeJsx: `<div className="fixed bottom-8 right-8 z-[100] flex items-center gap-4 px-6 py-4 bg-card border border-border rounded-2xl shadow-2xl">
  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
    <Info className="w-4 h-4" />
  </div>
  <p className="text-sm font-bold text-foreground">Settings saved successfully!</p>
  <button className="ml-2 text-muted-foreground hover:text-foreground transition-colors">
    <X className="w-4 h-4" />
  </button>
</div>`,
      codeHtml: `<div class="fixed bottom-8 right-8 flex items-center gap-4 px-6 py-4 bg-white border border-gray-200 rounded-2xl shadow-2xl">
  <div class="w-8 h-8 rounded-xl bg-[#ffd700]/10 flex items-center justify-center text-[#ffd700]">i</div>
  <p class="text-sm font-bold">Settings saved successfully!</p>
</div>`,
    },
  ],

  Navigation: [
    {
      title: "Simple Navbar",
      category: "Navbar",
      subcategory: "Simple Navbar",
      description: "Standardized top navigation.",
      size: "1.1kb",
      preview: React.createElement(SimpleNavbar, {
        links: [
          { label: "Products", href: "#" },
          { label: "Pricing", href: "#" },
          { label: "Docs", href: "#" },
        ],
      }),
      codeJsx: `<nav className="fixed top-0 left-0 right-0 z-40 px-8 h-20 flex items-center justify-between bg-background/80 backdrop-blur-md border-b border-border/50">
  <div className="text-2xl font-black tracking-tighter text-foreground">
    SnapJSX<span className="text-primary">.</span>
  </div>

  <div className="hidden md:flex items-center gap-8">
    <a href="#" className="text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Products</a>
    <a href="#" className="text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Pricing</a>
    <a href="#" className="text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Docs</a>
  </div>

  <div className="flex items-center gap-4">
    <button className="px-5 py-2 rounded-xl bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/20">
      Get Started
    </button>
  </div>
</nav>`,
      codeHtml: `<nav class="flex items-center justify-between px-8 h-20 bg-white border-b border-gray-100">
  <div class="text-2xl font-black">SnapJSX<span class="text-[#ffd700]">.</span></div>
  <div class="flex gap-8">
    <a class="text-[10px] font-bold uppercase tracking-widest text-gray-500">Products</a>
    <a class="text-[10px] font-bold uppercase tracking-widest text-gray-500">Pricing</a>
  </div>
  <button class="px-5 py-2 rounded-xl bg-[#ffd700] text-black text-[10px] font-bold uppercase tracking-widest">Get Started</button>
</nav>`,
    },
    {
      title: "Pagination",
      category: "Navigation",
      subcategory: "Pagination",
      description: "Standard pagination with input.",
      size: "0.8kb",
      preview: React.createElement(
        "div",
        { className: "flex justify-center items-center gap-4" },
        React.createElement(
          "button",
          {
            type: "button",
            className: "px-4 py-2 rounded-lg bg-accent text-sm font-medium",
          },
          "Previous",
        ),
        React.createElement(
          "div",
          { className: "flex items-center gap-2 text-sm font-medium" },
          "Page",
          React.createElement("input", {
            type: "text",
            value: "1",
            className:
              "w-12 h-9 text-center rounded-md border border-input bg-background",
          }),
          "of 10",
        ),
        React.createElement(
          "button",
          {
            type: "button",
            className: "px-4 py-2 rounded-lg bg-accent text-sm font-medium",
          },
          "Next",
        ),
      ),
      codeJsx: `<div className="flex justify-center items-center gap-4">
  <button className="px-4 py-2 rounded-lg bg-accent text-sm font-medium hover:bg-accent/80 transition-colors disabled:opacity-50">
    Previous
  </button>

  <div className="flex items-center gap-2 text-sm font-medium">
    Page
    <input
      type="text"
      value="1"
      className="w-12 h-9 text-center rounded-md border border-input bg-background focus:ring-1 focus:ring-primary outline-none"
    />
    of 10
  </div>

  <button className="px-4 py-2 rounded-lg bg-accent text-sm font-medium hover:bg-accent/80 transition-colors disabled:opacity-50">
    Next
  </button>
</div>`,
      codeHtml: `<div class="flex justify-center items-center gap-4">
  <button class="px-4 py-2 rounded-lg bg-gray-100 text-sm font-medium">Previous</button>
  <div class="flex items-center gap-2 text-sm font-medium">
    Page <input type="text" value="1" class="w-12 h-9 text-center rounded-md border border-gray-200" /> of 10
  </div>
  <button class="px-4 py-2 rounded-lg bg-gray-100 text-sm font-medium">Next</button>
</div>`,
    },
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
    {
      title: "Pill Tabs",
      category: "Tabs",
      subcategory: "Pill Tabs",
      description: "Rounded navigation tabs.",
      size: "0.7kb",
      preview: React.createElement(PillTabs, {
        tabs: [
          { id: "1", label: "Overview" },
          { id: "2", label: "Integration" },
          { id: "3", label: "API" },
        ],
      }),
      codeJsx: `<div className="flex items-center gap-2 p-1 bg-muted/30 rounded-full w-fit">
  <button className="px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest bg-primary text-primary-foreground shadow-lg shadow-primary/20">Overview</button>
  <button className="px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest text-muted-foreground">Integration</button>
  <button className="px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest text-muted-foreground">API</button>
</div>`,
      codeHtml: `<div class="flex items-center gap-2 p-1 bg-gray-100 rounded-full w-fit">
  <button class="px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#ffd700] text-[#0a0a0a]">Overview</button>
  <button class="px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-500">Integration</button>
  <button class="px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-500">API</button>
</div>`,
    },
  ],

  "Data Display": [
    {
      title: "Basic Table",
      category: "Tables",
      subcategory: "Basic Table",
      description: "Structured data presentation.",
      size: "1.4kb",
      preview: React.createElement(BasicTable, {
        columns: [
          { key: "name", header: "Name" },
          { key: "role", header: "Role" },
          { key: "status", header: "Status" },
        ],
        data: [
          { name: "John Doe", role: "Developer", status: "Active" },
          { name: "Jane Smith", role: "Designer", status: "Online" },
          { name: "Alex Johnson", role: "Product", status: "Away" },
        ],
      }),
      codeJsx: `<div className="w-full overflow-hidden rounded-[2rem] border border-border/50 bg-card">
  <table className="w-full text-left border-collapse">
    <thead>
      <tr className="border-b border-border/50">
        <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Name</th>
        <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr className="group hover:bg-primary/5 transition-colors border-b border-border/20 last:border-0">
        <td className="px-8 py-5 text-sm font-medium text-foreground">John Doe</td>
        <td className="px-8 py-5 text-sm font-medium text-foreground">Active</td>
      </tr>
    </tbody>
  </table>
</div>`,
      codeHtml: `<div class="w-full border border-gray-100 rounded-[2rem] overflow-hidden bg-white">
  <table class="w-full text-left">
    <thead>
      <tr class="border-b border-gray-50 text-[10px] font-black uppercase">
        <th class="px-8 py-5">Name</th>
        <th class="px-8 py-5">Status</th>
      </tr>
    </thead>
    <tbody class="text-sm">
      <tr class="hover:bg-gray-50">
        <td class="px-8 py-5">John Doe</td>
        <td class="px-8 py-5">Active</td>
      </tr>
    </tbody>
  </table>
</div>`,
    },
    {
      title: "Simple List",
      category: "Lists",
      subcategory: "Simple List",
      description: "Vertical interactive items.",
      size: "1.0kb",
      preview: React.createElement(SimpleList, {
        items: [
          {
            id: "1",
            title: "Analytics",
            description: "Real-time data tracking",
            icon: Sparkles,
          },
          {
            id: "2",
            title: "Storage",
            description: "Cloud file management",
            icon: Package,
          },
          {
            id: "3",
            title: "Security",
            description: "End-to-end encryption",
            icon: AlertCircle,
          },
        ],
      }),
      codeJsx: `<div className="space-y-3">
  <div className="flex items-center justify-between p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all cursor-pointer group">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
        <Sparkles className="w-5 h-5" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Analytics</h4>
        <p className="text-xs text-muted-foreground">Real-time data tracking</p>
      </div>
    </div>
    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1" />
  </div>
</div>`,
      codeHtml: `<div class="space-y-3">
  <div class="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl">
    <div class="flex items-center gap-4">
      <div class="w-10 h-10 bg-[#ffd700]/10 rounded-xl"></div>
      <div>
        <h4 class="text-sm font-bold">Analytics</h4>
        <p class="text-xs text-gray-500">Real-time data tracking</p>
      </div>
    </div>
  </div>
</div>`,
    },
  ],
};
