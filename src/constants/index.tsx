import { ChartBar, Puzzle, Users, Rocket, Cloud, Code } from "lucide-react";
 

import user1 from "../assets/profile-pictures/user2.png";
import user2 from "../assets/profile-pictures/user1.png";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Tech Innovations Inc.",
    image: user1,
    text: "The IDE transformed our workflow! The intuitive features and seamless collaboration tools made all the difference.",
  },
  {
    user: "Jane Smith",
    company: "Creative Solutions Ltd.",
    image: user1,
    text: "I love how easy it is to develop with this IDE. The AI assistance saved us so much time, allowing us to focus on creativity!",
  },
  {
    user: "David Johnson",
    company: "Future Tech Co.",
    image: user1,
    text: "A fantastic experience! The real-time collaboration features made it easy for our team to work together, no matter where we were.",
  },
  {
    user: "Ronee Brown",
    company: "Innovative Designs",
    image: user1,
    text: "This IDE has everything we need. The performance metrics helped us optimize our applications like never before!",
  },
  {
    user: "Michael Wilson",
    company: "NextGen Developers",
    image: user1,
    text: "The support team is incredible! They were quick to assist us with any questions, making our development process smooth.",
  },
  {
    user: "Emily Davis",
    company: "Dynamic Solutions",
    image: user2,
    text: "I can't recommend this IDE enough! The features are robust and user-friendly, which has significantly improved our productivity.",
  },
];

export const features = [
  {
    icon: <Code />,
    text: "Intuitive Code Editor",
    description:
      "Experience a powerful code editor with syntax highlighting, auto-completion, and code suggestions for all major languages.",
  },
  {
    icon: <Cloud />,
    text: "Cloud Integration",
    description:
      "Seamlessly sync your projects across devices with built-in cloud support, ensuring your work is always accessible.",
  },
  {
    icon: <Rocket />,
    text: "Integrated Debugger",
    description:
      "Debug your code efficiently with an integrated debugger that allows you to step through code and inspect variables in real-time.",
  },
  {
    icon: <Puzzle />,
    text: "Extensive Plugin Marketplace",
    description:
      "Enhance your development experience with a wide range of plugins and extensions tailored to your needs.",
  },
  {
    icon: <Users />,
    text: "Team Collaboration",
    description:
      "Collaborate with teammates in real-time, share code snippets, and provide feedback directly within the IDE.",
  },
  {
    icon: <ChartBar />,
    text: "Performance Metrics",
    description:
      "Monitor your application’s performance with integrated metrics and analytics to optimize your code.",
  },
];

export const checklistItems = [
  {
    title: "Seamless Code Merging",
    description:
      "Easily merge code changes with built-in tools that minimize conflicts and streamline collaboration.",
  },
  {
    title: "Worry-Free Code Reviews",
    description:
      "Conduct code reviews with confidence using integrated version control and comment features.",
  },
  {
    title: "AI-Powered Assistance",
    description:
      "Leverage AI suggestions to enhance your coding efficiency and reduce development time.",
  },
  {
    title: "Instant Project Sharing",
    description:
      "Share your work with team members in just minutes, facilitating quick feedback and collaboration.",
  },
];

export const pricingOptions = [
  {
    title: "Basic",
    price: "$0",
    features: [
      "Access to core features",
      "5 GB Cloud Storage",
      "Basic Analytics",
      "Community Support",
    ],
  },
  {
    title: "Pro",
    price: "$15",
    features: [
      "All Basic features",
      "20 GB Cloud Storage",
      "Advanced Analytics",
      "Email Support",
    ],
  },
  {
    title: "Premium",
    price: "$50",
    features: [
      "All Pro features",
      "Unlimited Cloud Storage",
      "Priority Support",
      "Custom Integrations",
    ],
  },
   
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
