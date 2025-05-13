"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  FolderKanban,
  Wrench,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/skills", label: "Skills", icon: Wrench },
  { href: "/education", label: "Education", icon: GraduationCap },
  { href: "/contact", label: "Contact", icon: Mail },
];

const socialItems = [
  {
    href: "https://github.com/Sshahparnia",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/shervan-shahparnia/",
    label: "LinkedIn",
    icon: Linkedin,
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen bg-gray-900 text-white flex flex-col transition-transform duration-300 ease-in-out md:translate-x-0 border-r border-gray-700">
      <div className="p-6 mb-4 border-b border-gray-700">
        <Link
          href="/"
          className="text-2xl font-bold text-lavender-400 hover:text-lavender-300 transition-colors"
        >
          Shervan Shahparnia
        </Link>
      </div>

      <nav className="flex-grow px-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 hover:text-lavender-300 transition-all duration-200 ${
                isActive
                  ? "bg-lavender-500 text-white shadow-lg"
                  : "text-gray-300"
              }`}
            >
              <item.icon
                className={`w-5 h-5 ${
                  isActive ? "text-white" : "text-lavender-400"
                }`}
              />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mt-auto border-t border-gray-700">
        <div className="space-y-2">
          {socialItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-lavender-300 transition-all duration-200"
            >
              <item.icon className="w-5 h-5 text-lavender-400" />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-4 text-center">
          &copy; {new Date().getFullYear()} Shervan Shahparnia
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
