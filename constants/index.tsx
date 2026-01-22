import { SiGithub, SiLinkedin, SiFacebook, SiGmail } from "react-icons/si";

const generateGallery = (basePath: string, prefix: string, count: number, ext: string = "jpg") => {
  return Array.from({ length: count }, (_, i) => `${basePath}/${prefix}${i + 1}.${ext}`);
};

const InBillGallery = generateGallery("/images/InBill", "inbill", 5, "webp");
const CTVGallery = generateGallery("/images/CTV", "ctv", 9, "webp");

export const SOCIALS = [
  { name: "Github", icon: <SiGithub />, link: "https://github.com/voldang", color: "hover:text-white" },
  { name: "LinkedIn", icon: <SiLinkedin />, link: "https://linkedin.com/in/voldang", color: "hover:text-[#0A66C2]" },
  { name: "Facebook", icon: <SiFacebook />, link: "https://facebook.com/voldang", color: "hover:text-[#1877F2]" },
  { name: "Gmail", icon: <SiGmail />, link: "mailto:dangvo@example.com", color: "hover:text-[#EA4335]" },
];

export const DICTIONARY = {
  vi: {
    nav: [
      { href: "/", label: "Trang chủ" },
      { href: "#projects", label: "Dự án" },
      { href: "#skills", label: "Kỹ năng" },
      { href: "#experience", label: "Kinh nghiệm" },
      { href: "#footer", label: "Liên hệ" },
    ],
    projects_section: {
      title_normal: "Dự án",
      title_highlight: "tiêu biểu",
      description:
        "Dưới đây là một số dự án Full-stack mình đã thực hiện, thể hiện tư duy thiết kế hệ thống và kỹ năng lập trình thực tế.",
    },
    projects: [
      {
        title: "Dự án Cá nhân (Full Open)",
        description: "Dự án này có đầy đủ source code và demo.",
        tech: { frontend: ["Next.js"], backend: ["Node.js"] },
        link: "https://demo.com",
        github: "https://github.com",
        image: "/images/personal-thumb.jpg",
        gallery: InBillGallery,
      },
      {
        title: "Dự án Công ty (Private)",
        description: "Dự án nội bộ, bảo mật. Chỉ có thể xem hình ảnh giao diện.",
        tech: { frontend: ["React"], backend: ["Java Spring"] },
        link: null,
        github: null,
        image: "/images/company-thumb.jpg",
        gallery: CTVGallery,
      },
    ],
    skills_section: {
      title: "Kỹ năng chuyên môn",
    },
    experience_section: {
      title_normal: "Học vấn &",
      title_highlight: "Kinh nghiệm",
    },
    timeline: [
      {
        year: "2021 - 2025",
        title: "Đại học Cần Thơ",
        subtitle: "Sinh viên ngành Công nghệ thông tin",
        description: "Tốt nghiệp loại Giỏi. Tập trung vào mảng Full-stack và Web Performance.",
      },
      {
        year: "2024",
        title: "Công ty Công nghệ A",
        subtitle: "Thực tập sinh Frontend",
        description: "Xây dựng Dashboard quản trị và tối ưu hóa 20% tốc độ tải trang.",
      },
    ],
    hero: {
      greeting: "Xin chào, mình tên là",
      role: "Kỹ sư phần mềm",
      cta: "Dự án của mình",
      education_title: "Học vấn",
      education_school: "Đại học Cần Thơ",
      education_major: "Kỹ sư phần mềm",
      orientation_title: "Định hướng",
      // Tách nhỏ description để giữ được format <strong> đậm nhạt
      orientation_desc_1: "Tận dụng tư duy",
      orientation_desc_highlight_1: "Fullstack",
      orientation_desc_2: "để biến các yêu cầu phức tạp thành giải pháp phần mềm",
      orientation_desc_italic: "đơn giản & hiệu quả",
      orientation_desc_3: "Tập trung vào",
      orientation_desc_highlight_2: "Clean Code",
      orientation_desc_4: ", tối ưu hóa hiệu năng và khả năng mở rộng.",
    },
    headings: {
      projects: "Dự án tiêu biểu",
      skills: "Kỹ năng chuyên môn",
      experience: "Học vấn & Kinh nghiệm",
    },
    footer: {
      bio: "Xây dựng các sản phẩm công nghệ với trải nghiệm người dùng tối ưu và hiệu quả cao.",
      back_to_top: "VỀ ĐẦU TRANG",
      sitemap_title: "Sơ đồ trang",
      copyright: "Copyright © 2026 — VÕ ĐẶNG.",
    },
  },

  // --- TIẾNG ANH ---
  en: {
    nav: [
      { href: "/", label: "Home" },
      { href: "#projects", label: "Projects" },
      { href: "#skills", label: "Skills" },
      { href: "#experience", label: "Experience" },
      { href: "#footer", label: "Contact" },
    ],
    projects_section: {
      title_normal: "Featured",
      title_highlight: "Projects", // Chữ màu xanh
      description:
        "Here are some Full-stack projects I have built, demonstrating system design thinking and practical coding skills.",
    },
    projects: [
      {
        title: "Personal Project (Open Source)",
        description: "A comprehensive system including full source code and a live demo.",
        tech: { frontend: ["Next.js", "Tailwind CSS"], backend: ["Node.js", "Express", "MongoDB"] },
        link: "https://your-demo.com",
        github: "https://github.com/your-repo",
        image: "/images/personal-thumb.jpg",
        gallery: InBillGallery,
      },
      {
        title: "Company Project (Private)",
        description: "Internal enterprise project. Due to security policies, only UI screenshots are available.",
        tech: { frontend: ["React"], backend: ["Java Spring"] },
        link: null,
        github: null,
        image: "/images/company-thumb.jpg",
        gallery: CTVGallery,
      },
    ],
    skills_section: {
      title: "Technical Skills",
    },
    experience_section: {
      title_normal: "Education &",
      title_highlight: "Experience",
    },
    timeline: [
      {
        year: "2021 - 2025",
        title: "Can Tho University",
        subtitle: "Information Technology Student",
        description: "Graduated with Honors. Focused on Full-stack and Web Performance.",
      },
      {
        year: "2024",
        title: "Tech Company A",
        subtitle: "Frontend Intern",
        description: "Built Admin Dashboard and optimized page load speed by 20%.",
      },
    ],
    hero: {
      greeting: "Hello, I am",
      role: "Software Engineer",
      cta: "My Projects",
      education_title: "Education",
      education_school: "Can Tho University",
      education_major: "Software Engineer",
      orientation_title: "Orientation",
      orientation_desc_1: "Leveraging",
      orientation_desc_highlight_1: "Fullstack",
      orientation_desc_2: "mindset to turn complex requirements into",
      orientation_desc_italic: "simple & effective solutions",
      orientation_desc_3: "Focusing on",
      orientation_desc_highlight_2: "Clean Code",
      orientation_desc_4: ", performance optimization, and scalability.",
    },
    headings: {
      projects: "Featured Projects",
      skills: "Technical Skills",
      experience: "Education & Experience",
    },
    footer: {
      bio: "Building tech products with optimal user experience and high efficiency.",
      back_to_top: "BACK TO TOP",
      sitemap_title: "Sitemap",
      copyright: "Copyright © 2026 — VO DANG.",
    },
  },
};
