import { SiGithub, SiLinkedin, SiFacebook, SiGmail } from "react-icons/si";

const generateGallery = (basePath: string, prefix: string, count: number, ext: string = "jpg") => {
  return Array.from({ length: count }, (_, i) => `${basePath}/${prefix}${i + 1}.${ext}`);
};

const InBillGallery = generateGallery("/images/Inbill", "inbill", 5, "webp");
const CTVGallery = generateGallery("/images/CTV", "ctv", 9, "webp");
const ThanGallery = generateGallery("/images/Than", "than", 3, "webp");
const BlissGallery = generateGallery("/images/Bliss", "bliss", 4, "webp");
const AnimeGallery = generateGallery("/images/Anime", "anime", 5, "webp");
const PortfolioGallery = generateGallery("/images/Portfolio", "portfolio", 6, "webp");

export const SOCIALS = [
  { name: "Github", icon: <SiGithub />, link: "https://github.com/vodang03", color: "hover:text-white" },
  // { name: "LinkedIn", icon: <SiLinkedin />, link: "https://linkedin.com/in/voldang", color: "hover:text-[#0A66C2]" },
  // { name: "Facebook", icon: <SiFacebook />, link: "https://facebook.com/voldang", color: "hover:text-[#1877F2]" },
  { name: "Gmail", icon: <SiGmail />, link: "mailto:vodang.work@gmail.com", color: "hover:text-[#EA4335]" },
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
        "Dưới đây là các dự án thực tế tôi đã tham gia phát triển tại công ty và các dự án cá nhân nhằm trau dồi kỹ năng.",
      tabs: {
        all: "Tất cả",
        company: "Công ty",
        personal: "Cá nhân",
      },
    },

    projects: [
      {
        title: "Web / App In Bill",
        description:
          "Hệ thống quản lý và in hóa đơn đa nền tảng (Web & Mobile). Tối ưu hóa quy trình thanh toán và quản lý dòng tiền.",
        tech: {
          frontend: ["React Native", "Next.js", "Tailwind CSS"],
          backend: ["Node.js", "Express", "MongoDB"],
        },
        category: "company",
        link: null,
        github: null,
        image: "/images/Inbill/inbill1.webp",
        gallery: InBillGallery,
      },
      {
        title: "Hệ thống quản lý CTV (Web CTV)",
        description:
          "Nền tảng quản lý mạng lưới cộng tác viên, tính toán hoa hồng tự động và theo dõi hiệu suất làm việc.",
        tech: {
          frontend: ["Next.js", "Tailwind CSS"],
          backend: ["Node.js", "Express", "MongoDB"],
        },
        category: "company",
        link: null,
        github: null,
        image: "/images/CTV/ctv1.webp",
        gallery: CTVGallery,
      },
      {
        title: "Website Giới Thiệu Kho Than (Web Than)",
        description: "Phần mềm quản lý nhập xuất kho, theo dõi trữ lượng và báo cáo thống kê cho ngành than.",
        tech: {
          frontend: ["Next.js", "Tailwind CSS"],
          backend: [],
        },
        category: "company",
        link: "https://www.thankokhoi.com/",
        github: null,
        image: "/images/Than/than1.webp",
        gallery: ThanGallery,
      },

      {
        title: "Web Bliss",
        description:
          "Website thương mại điện tử/Landing page giới thiệu sản phẩm với giao diện hiện đại, trải nghiệm mượt mà.",
        tech: {
          frontend: ["Next.js", "Tailwind CSS", "Framer Motion"],
          backend: ["Node.js", "Express", "MongoDB"],
        },
        category: "company",
        link: "https://www.dvtienich.vn/",
        github: null,
        image: "/images/Bliss/bliss1.webp",
        gallery: BlissGallery,
      },

      {
        title: "Anime Info Wiki",
        description:
          "Trang web tra cứu thông tin Anime, sử dụng API từ bên thứ ba. Hỗ trợ tìm kiếm, lọc và xem chi tiết nhân vật.",
        tech: {
          frontend: ["Next.js", "TypeScript"],
          backend: ["Jikan API", "MySQL"],
        },
        category: "personal",
        link: null,
        github: "https://github.com/vodang03/AnimeInfo-webiste.git",
        image: "/images/Anime/anime1.webp",
        gallery: AnimeGallery,
      },
      {
        title: "Portfolio Cá nhân",
        description:
          "Trang web giới thiệu bản thân (chính là trang web này), tích hợp Dark mode, Đa ngôn ngữ và Animation mượt mà.",
        tech: {
          frontend: ["Next.js", "Tailwind v4", "Framer Motion"],
          backend: [],
        },
        category: "personal",
        link: "https://vodang-portfolio.vercel.app",
        github: "https://github.com/vodang03/vodang-portfolio.git",
        image: "/images/Portfolio/portfolio1.webp",
        gallery: PortfolioGallery,
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
        year: "09/2025 - 02/2026",
        title: "Công Ty TNHH Sản Xuất Thương Mại Dịch Vụ TAT",
        subtitle: "Lập trình viên Web/App",
        description: "Xây dựng các trang Web và công cụ để hỗ trợ công việc cho công ty.",
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
      title_highlight: "Projects",
      description:
        "Here are real-world projects I contributed to in a professional environment, along with personal projects built to refine my skills.",
      tabs: {
        all: "All",
        company: "Company",
        personal: "Personal",
      },
    },

    projects: [
      {
        title: "In Bill Web / App",
        description:
          "Cross-platform invoice management and printing system (Web & Mobile). Optimized payment processes and cash flow management.",
        tech: {
          frontend: ["React Native", "Next.js", "Tailwind CSS"],
          backend: ["Node.js", "Express", "MongoDB"],
        },
        category: "company",
        link: null,
        github: null,
        image: "/images/Inbill/inbill1.webp",
        gallery: InBillGallery,
      },
      {
        title: "Collaborator Management System (Web CTV)",
        description:
          "Collaborator network management platform featuring automated commission calculations and performance tracking.",
        tech: {
          frontend: ["Next.js", "Tailwind CSS"],
          backend: ["Node.js", "Express", "MongoDB"],
        },
        category: "company",
        link: null,
        github: null,
        image: "/images/CTV/ctv1.webp",
        gallery: CTVGallery,
      },
      {
        title: "Coal Inventory Management (Web Than)",
        description:
          "Inventory management software for tracking import/export, stock levels, and generating statistical reports for the coal industry.",
        tech: {
          frontend: ["Next.js", "Tailwind CSS"],
          backend: [],
        },
        category: "company",
        link: "https://www.thankokhoi.com/",
        github: null,
        image: "/images/Than/than1.webp",
        gallery: ThanGallery,
      },

      {
        title: "Web Bliss",
        description: "E-commerce website/Product landing page featuring a modern UI and smooth user experience.",
        tech: {
          frontend: ["Next.js", "Tailwind CSS", "Framer Motion"],
          backend: ["Node.js", "Express", "MongoDB"],
        },
        category: "company",
        link: "https://www.dvtienich.vn/",
        github: null,
        image: "/images/Bliss/bliss1.webp",
        gallery: BlissGallery,
      },

      {
        title: "Anime Info Wiki",
        description:
          "Anime information lookup website using third-party APIs. Supports searching, filtering, and viewing character details.",
        tech: {
          frontend: ["Next.js", "TypeScript"],
          backend: ["Jikan API", "MySQL"],
        },
        category: "personal",
        link: null,
        github: "https://github.com/vodang03/AnimeInfo-webiste.git",
        image: "/images/Anime/anime1.webp",
        gallery: AnimeGallery,
      },
      {
        title: "Personal Portfolio",
        description:
          "Personal showcase website (this site), featuring Dark Mode, Multi-language support, and smooth animations.",
        tech: {
          frontend: ["Next.js", "Tailwind v4", "Framer Motion"],
          backend: [],
        },
        category: "personal",
        link: "https://vodang-portfolio.vercel.app",
        github: "https://github.com/vodang03/vodang-portfolio.git",
        image: "/images/Portfolio/portfolio1.webp",
        gallery: PortfolioGallery,
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
        subtitle: "Information Technology",
        description: "Graduated with Honors. Focused on Full-stack development and Web Performance.",
      },
      {
        year: "09/2025 - 02/2026",
        title: "TAT Manufacturing Trading Service Co., Ltd.",
        subtitle: "Web/App Developer",
        description: "Developed websites and internal tools to support company operations and optimize workflows.",
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
