import CapstoneProject from "../assets/capstone project.png"
import LearnUp from "../assets/learnup.png"

export const DATA = {
  name: "Bùi Quang Huy",
  role: "Frontend Developer",
  summary:
    "Fresher Frontend Developer, có kinh nghiệm thực hiện dự án học thuật với React, Next.js và TailwindCSS. Đam mê tạo ra sản phẩm tối ưu, hiện đại và sẵn sàng học hỏi trong môi trường doanh nghiệp",
  location: "Bình Dương",
  email: "buiquanghuy532001@gmail.com",
  phone: "0917002565",
  socials: [
    { label: "GitHub", href: "https://github.com/huybq532001" },
    { label: "Facebook", href: "https://www.facebook.com/HuyBQ5321" },
  ],
  skills: [
    {
      group: "Core",
      items: [
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "React / Next.js", level: 88 },
        { name: "HTML5 / CSS3", level: 92 },
        { name: "TailwindCSS", level: 85 },
      ],
    },
    {
      group: "Backend & Data",
      items: [
        { name: "Node.js", level: 70 },
        { name: "GraphQL/Apollo", level: 72 },
        { name: "REST APIs", level: 80 },
        { name: "PostgreSQL", level: 60 },
      ],
    },
  ],
  projects: [
    {
      title: "Final Capstone Project Register and Information Management System for FPTU HCM",
      desc: "Hiện nay, quy trình làm luận văn tốt nghiệp tại Đại học FPT (FPT University - ĐHQG-HCM) được thực hiện thông qua nhiều kênh, bao gồm email, hệ thống quản lý học tập (LMS) và tệp Excel. Điều này gây ra sự thiếu hiệu quả, thiếu đồng bộ và khối lượng công việc hành chính lớn cho giảng viên và cán bộ. Hệ thống được đề xuất giải quyết những vấn đề này bằng cách tập trung hóa tất cả các hoạt động, bao gồm đề xuất đề tài, đăng ký sinh viên, phân công cố vấn, theo dõi tiến độ và đánh giá. Hệ thống này được áp dụng cho các chuyên ngành CNTT như: SE, ITS, IA, AI và người dùng nội bộ là sinh viên, cán bộ.",
      tags: ["React", "Tailwind", "Redux"],
      image:CapstoneProject
        ,
      link: "https://final-capstone-project-nu.vercel.app/log-in",
      repo: "https://github.com/AnhPhi2002/Final-Capstone-Project.git",
    },
    {
      title: "Gender Healthcare Service Management System",
      desc: "Dịch vụ Sức khỏe Tình dục là một nền tảng kỹ thuật số toàn diện được thiết kế để trao quyền cho người dùng quản lý sức khỏe tình dục và sinh sản một cách chủ động và kín đáo. Phần mềm này không chỉ là một nguồn thông tin; nó là một hệ sinh thái dịch vụ tích hợp, cung cấp cho người dùng các công cụ được cá nhân hóa và quyền truy cập trực tiếp vào dịch vụ chăm sóc sức khỏe chuyên nghiệp.",
      tags: ["Next.js", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop",
      link: "https://example.com",
      repo: "https://github.com/EricLee0109/project_swp391.git",
    },
     {
      title: "Learn Up ",
      desc: "Trang wed hỗ trợ cho các sinh viên mới nhận đưuọc sự hỗ trợ, chia sẽ từ giáo viên và các cựu sinh viên tại FPT. Tích hợp bán các khóa học cho nhưng sinh viên không theo kịp tiến độ trên lớp ...",
      tags: ["React", "Tailwind"],
      image: LearnUp,
      link: "https://learnup.id.vn/",
      repo: "https://github.com/AnhPhi2002/EXE201-Project",
    },
  ],
  experience: [
    {
      role: "Frontend Engineer",
      company: "TechCorp",
      period: "2023 – Hiện tại",
      points: [
        "Xây dựng design system, reuse 30+ component.",
        "Tối ưu Core Web Vitals: TTFB/CLS/LCP.",
      ],
    },
  ],
  education: [
    {
      school: "Đại học FPT HoChiMinh",
      major: "Software Engineer",
      period: "2020 – 2025",
    },
  ],
};
