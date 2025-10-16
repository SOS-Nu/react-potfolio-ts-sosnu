import nestImg from "assets/project/nestjs.png";
import nextjsImg from "assets/project/nextjs.jpeg";
import reactNativeImg from "assets/project/react-native.png";
import reactUltimateImg from "assets/project/react-ultimate.png";
import springMvcImg from "assets/project/spring-mvc.png";
import springRestImg from "assets/project/spring-rest.png";
import jobhunter from "assets/project/jobhunter.png";

export const APP_DATA = {
  YOUTUBE_URL: "https://www.youtube.com/@SOSNu",
  TIKTOK_URL: "https://www.tiktok.com/@sosnu",
  UDEMY_URL: "",
  FACEBOOK_URL: "https://www.facebook.com/SOS.Nuu/",
};

export const EXPERIENCES = [
  {
    id: 1,
    title: {
      vi: "Lập Trình viên Fullstack",
      en: "Fullstack Developer",
    },
    company: {
      vi: "Phát Triển Website JobHunter để tìm việc dễ dàng hơn",
      en: "JobHunter Web Development Project",
    },
    duration: {
      vi: "tháng 5 2025 - tháng 12 2025",
      en: "May 2025 - Dec 2025",
    },
  },
  {
    id: 2,
    title: {
      vi: "Lập Trình Viên",
      en: "Internship Developer",
    },

    company: {
      vi: "THỰC TẬP TẠI CÔNG TY VIHAT SOFTWARE",
      en: "Vihat Software Company (Internship)",
    },
    duration: {
      vi: "Tháng 8/2024 - Tháng 11/2024",
      en: "Aug 2024 - Nov 2024",
    },
  },
  // {
  //   id: 3,
  //   title: {
  //     vi: "Dự án tự làm",
  //     en: "Self Employed",
  //   },
  //   company: {
  //     vi: "Học kiến thức mới mỗi ngày",
  //     en: "Code and build something in everyday.",
  //   },
  //   duration: {
  //     vi: "Tháng 1/2020 - Hiện tại",
  //     en: "Jan 2020 - Present",
  //   },
  // },
];
export const PROJECTSFeatured = [
  {
    id: 1,
    imgPath: jobhunter,
    title: "JobHunter | Full-Stack Application (Featured & Latest)",
    // SỬA Ở ĐÂY: Thay thế bằng dấu ` và xóa các dấu +
    description: `Một nền tảng tuyển dụng, kết nối nhà tuyển dụng và ứng viên.
- Backend được xây dựng với Java Spring (RESTful API), Hibernate, MySQL và áp dụng các Design Pattern, MVC.
- Bảo mật bằng Spring Security với JWT, Redis cache. Tích hợp Kafka để gửi email thông báo công việc mới.
- Call API Google Gemini, thanh toán VNPay, đăng nhập với Google, Cronjob để đối soát dữ liệu.
- Frontend sử dụng React với TypeScript, sử dụng Ant Design cho UI và Axios để gọi API.
- Về DevOps, đóng gói bằng Docker, tự động backup database, và giám sát bằng bộ công cụ Grafana, Prometheus, Node Exporter.`,
    githubLink: "https://github.com/SOS-Nu/springrest-sosnu",
    githubLink1: "https://github.com/SOS-Nu/react-vite-khoaluan",

    demoLink: "JPxP7SIEECY",
    youtubeVideoId: "JPxP7SIEECY", // Đã thay đổi
  },
];

export const PROJECTS = [
  {
    id: 1,
    imgPath: nestImg,
    title: "SoundCloud Clone | Next.js 14",
    description:
      "Dự án frontend nhân bản giao diện và các tính năng cốt lõi của SoundCloud. " +
      "Xây dựng bằng Next.js 14, tận dụng các tính năng mới nhất như Server Actions để tối ưu hóa trải nghiệm người dùng. " +
      "Tích hợp NextAuth để xử lý xác thực, và áp dụng các kỹ thuật caching dữ liệu nâng cao cùng với revalidateTag để đảm bảo dữ liệu luôn mới nhất và hiệu năng.",
    githubLink: "https://github.com/your-username/soundcloud-clone", // Thay link của bạn vào đây
    demoLink: "https://your-demo-link.com", // Thay link của bạn vào đây
  },
  {
    id: 2,
    imgPath: nestImg,
    title: "E-commerce Bookstore | React.js",
    description:
      "Website thương mại điện tử chuyên bán sách, được xây dựng hoàn toàn bằng React. " +
      "Giao diện người dùng được thiết kế chuyên nghiệp và thân thiện với thư viện Ant Design. " +
      "Tích hợp các chức năng quan trọng như thanh toán online an toàn qua cổng VNPay và đăng nhập tiện lợi bằng tài khoản Google.",
    githubLink: "https://github.com/your-username/react-bookstore", // Thay link của bạn vào đây
    demoLink: "https://your-demo-link.com", // Thay link của bạn vào đây
  },
  {
    id: 3,
    imgPath: nestImg,
    title: "Web Application | Java Spring MVC & JSP",
    description:
      "Một ứng dụng web được xây dựng theo kiến trúc Java Spring MVC truyền thống. " +
      "Sử dụng JSP (JavaServer Pages) làm view engine để render giao diện phía server. " +
      "Hệ thống xác thực người dùng dựa trên Session, tương tác với cơ sở dữ liệu thông qua JPA (Java Persistence API) và được bảo mật bởi Spring Security.",
    githubLink: "https://github.com/your-username/spring-mvc-project", // Thay link của bạn vào đây
    demoLink: "https://your-demo-link.com", // Thay link của bạn vào đây
  },
];

export const SKILLS_DATA = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Next JS",
  // 'Tailwind',
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Git",
  //   "AWS",
  "Bootstrap",
  "Docker",
  //   "Go",
  "Figma",
  "Firebase",
  "MaterialUI",
  "Nginx",
  "Java",
  // "Node JS",
  //   "Strapi",
];

// Choose your skills from below. Make sure it's in the same format and spelled correctly.
// Couldn't find the required skills? Raise an issue on github at https://github.com/hhhrrrttt222111/developer-portfolio/issues/new

// AVAILABLE SKILLS

/* 
    HTML
    CSS
    JS 
    React
    Next JS
    Nuxt JS
    Node JS
    Vue
    Angular
    Docker
    Photoshop
    Illustrator
    Svelte
    GCP
    Azure
    Fastify
    Haxe
    Ionic
    Markdown
    Microsoft Office
    Picsart
    Sketch
    Unity
    WolframAlpha
    Adobe XD
    After Effects
    Bootstrap
    Bulma
    CapacitorJs
    Coffeescript
    MemSQL
    C
    C++
    C#
    Python
    Java
    Julia
    Matlab
    Swift
    Ruby
    Kotlin
    Go
    PHP
    Flutter
    Dart
    Typescript
    Swift
    Git
    Figma
    Canva
    Ubuntu
    Bootstrap
    MongoDB
    Tailwind
    ViteJS
    VuetifyJS
    MySQL
    PostgreSQL
    AWS
    Firebase
    Blender
    Premiere Pro
    Adobe Audition
    Deno
    Django
    Gimp
    Graphql
    Lightroom
    MaterialUI
    Nginx
    Numpy
    OpenCV
    Pytorch
    Selenium
    Strapi
    Tensorflow
    Webex
    Wordpress
  */
