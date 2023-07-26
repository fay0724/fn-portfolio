import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Technical support",
    icon: backend,
  },
  {
    title: "Marketing",
    icon: web,
  },
  {
    title: "Administration",
    icon: creator,
  },
  {
    title: "Web Programming",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Technical Support",
    company_name: "PT. Veneta Indonesia",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sept 2013 - Feb 2018",
    points: [
      "Sebagai teknisi perbaikan komputer dan printer. Melayani costumer dalam hal perbaikan hardware dan software, serta melakukan perawatan rutin terhadap produk agar costumer merasa puas.",
      "melakukan kunjungan ke rumah atau ke tempat kerja costumer jika terjadi masalah atau trobleshooting pada komputer atau jaringan internet.",
    ],
  },
  {
    title: "Marketing",
    company_name: "Ammar CCTV",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Agst 2018 - Nov 2018",
    points: [
      "Mempromosikan dan menjual produk CCTV kepada pelanggan, berfokus pada memahami kebutuhan pelanggan dan menawarkan solusi keamanan yang sesuai.",
      "Membangun hubungan yang kuat dengan pelanggan, memberikan presentasi dan demonstrasi produk.",
      "Memperluas Area Jangkauan untuk menjual produk.",
      "Membuat planing dan strategi.",
    ],
  },
  {
    title: "Surveyor & Administrative",
    company_name: "PT. Indomarco Prismatama",
    icon: shopify,
    iconBg: "#383E56",
    date: "Nov 2018 - Agst 2021",
    points: [
      "Sebagai Surveyor, bertanggung jawab mencari lahan atau bangunan kosong ditempat yang strategis untuk didirikan gerai Indomaret.",
      "Melakukan negosiasi harga sewa kepada pemilik dengan mempertimbangkan aspek-aspek seperti durasi sewa, klausul perpanjangan kontrak, serta kondisi dan pemeliharaan lahan atau bangunan. dengan harga sewa yang wajar dan sesuai dengan nilai pasar",
      "Sebagai Admin dan Analis, Membuat Proposal pengajuan buka Gerai ke HO Pusat setelah mendapatkan kesepakatan harga sewa lahan atau bangunan dengan pemilik. serta telah menganalisa pendapatan omset perhari di lokasi tersebut",
    ],
  },
  {
    title: "Junior Front-End Web",
    company_name: "Freelance",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Present",
    points: [
      "Sebagai freelancer, saya siap untuk bekerja sama dengan siapa pun yang membutuhkan jasa dan keterampilan saya. saya memiliki fleksibilitas dalam menerima proyek-proyek yang menarik dan relevan dengan bidang keahlian saya.",
      "Sebagai junior front-end web, saya memiliki pengetahuan dasar dan semangat besar dalam mengembangkan tampilan antarmuka web yang menarik dan responsif. Saya terus belajar dan mengasah keterampilan dalam bahasa pemrograman web seperti HTML, CSS, dan JavaScript, serta berusaha untuk terus meningkatkan kemampuan saya dalam menciptakan desain yang kreatif dan inovatif.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Sebagai Senior di Dunia Programmer, Saya sangat bangga dengan pencapaian yang sangat signifikan oleh Izil. padahal belum lama masuk ke dunia programmer.",
    name: "Baihaqi",
    designation: "Full Stack Developer",
    company: "Data Trans Tbk",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    testimonial:
      "Sangat senang bisa bekerja sama dan sharing pengalaman mengenai Web Developer, mempunya teman yang banyak, akan menambah wawasan yang luas.",
    name: "Ipul",
    designation: "JS Developer",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    testimonial:
      "Bangga Bisa bekerja sama dan menghasilkan karya yang sangat indah untuk sebuah Web. semoga kerja sama ini akan berlangsung lama.",
    name: "Tomi Zulfikar",
    designation: "CTO",
    company: "Def Corp",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Aplikasi Rental Mobil",
    description:
      "Platform berbasis web yang memungkinkan pengguna untuk mencari, memesan, dan mengelola penyewaan mobil dari berbagai penyedia, menyediakan solusi yang nyaman dan efisien untuk kebutuhan transportasi.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Web Loker",
    description:
      "Aplikasi web yang memungkinkan pengguna untuk mencari lowongan pekerjaan, melihat perkiraan rentang gaji untuk posisi-posisi tersebut, dan menemukan pekerjaan yang tersedia berdasarkan lokasi saat ini.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "Platform pemesanan perjalanan yang komprehensif yang memungkinkan pengguna untuk memesan penerbangan, hotel, dan mobil sewaan, serta memberikan rekomendasi terpilih untuk tujuan populer.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
