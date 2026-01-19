import { SiGithub, SiLinkedin, SiFacebook, SiGmail } from "react-icons/si";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const PROJECTS = [
  {
    title: "Web In Bill TAT",
    description: "Hệ thống quản lý hoá đơn tiền điện",
    tech: {
      frontend: ["Next.js", "Tailwind CSS"],
      backend: ["Node.js", "Express", "MongoDB"],
    },
    link: "https://your-demo.com",
    github: "https://github.com/your-repo",
    image: "/",
  },
  {
    title: "AI Chat Platform",
    description: "Ứng dụng chat tích hợp OpenAI API với khả năng lưu lịch sử trò chuyện.",
    tech: {
      frontend: ["Next.js", "Tailwind CSS"],
      backend: ["Node.js", "Express", "MongoDB"],
    },
    link: "https://ai-chat.com",
    github: "https://github.com/your-repo",
    image: "/",
  },
];

export const TIMELINE = [
  {
    year: "2021 - 2025",
    title: "Đại học Công nghệ (VNU-UET)",
    subtitle: "Sinh viên ngành Công nghệ thông tin",
    description: "Tốt nghiệp loại Giỏi. Tập trung vào mảng Full-stack và Web Performance.",
    type: "education",
  },
  {
    year: "2024",
    title: "Công ty Công nghệ A",
    subtitle: "Thực tập sinh Frontend",
    description: "Xây dựng Dashboard quản trị và tối ưu hóa 20% tốc độ tải trang.",
    type: "work",
  },
  {
    year: "2025",
    title: "Dự án Cá nhân E-Commerce",
    subtitle: "Fullstack Developer",
    description: "Phát triển hệ thống với Next.js, Stripe và PostgreSQL.",
    type: "project",
  },
  {
    year: "2025",
    title: "Dự án Cá nhân E-Commerce",
    subtitle: "Fullstack Developer",
    description: "Phát triển hệ thống với Next.js, Stripe và PostgreSQL.",
    type: "project",
  },
];

export const SOCIALS = [
  { name: "Github", icon: <SiGithub />, link: "https://github.com/voldang", color: "hover:text-white" },
  { name: "LinkedIn", icon: <SiLinkedin />, link: "https://linkedin.com/in/voldang", color: "hover:text-[#0A66C2]" },
  { name: "Facebook", icon: <SiFacebook />, link: "https://facebook.com/voldang", color: "hover:text-[#1877F2]" },
  { name: "Gmail", icon: <SiGmail />, link: "mailto:dangvo@example.com", color: "hover:text-[#EA4335]" },
];
