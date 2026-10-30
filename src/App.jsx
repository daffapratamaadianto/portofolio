import React, { useState, useEffect, useRef } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Download,
  Server,
  Database,
  Terminal,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Rocket,
  Code,
  Globe,
  ClipboardCheck,
  GitBranch,
  Palette,
} from 'lucide-react';

// --- Data Configuration ---
const LINKS = {
  github: 'https://github.com/daffapratamaadianto',
  linkedin: 'https://www.linkedin.com/in/daffa-pratama-profile',
  instagram: 'instagram.com/dp_sho0t/',
  gdrive: 'https://drive.google.com/file/d/1De_jnZbqsLzbfchN3RNHrOC6dinWd4Jn/view?usp=drive_link',
  email: 'daffapratama322@gmail.com',
};

const SKILLS = [
  {
    name: 'HTML, CSS, PHP, Basic Python, JavaScript',
    icon: <Code size={20} />,
  },
  {
    name: 'Basic Express.js, Basic React.js, Basic Laravel )',
    icon: <Globe size={20} />,
  },
  {
    name: 'MySQL, PostgreSQL, DBeaver, phpMyAdmin',
    icon: <Database size={20} />,
  },
  {
    name: 'Functional Testing, Test Case Design, Bug Reporting',
    icon: <ClipboardCheck size={20} />,
  },
  {
    name: 'VS Code, Git, GitHub, Postman',
    icon: <GitBranch size={20} />,
  },
  {
    name: 'Canva, Figma',
    icon: <Palette size={20} />,
  },
];

const EXPERIENCE = [
  {
    role: 'Web Developer (Internship)',
    company: 'Kementerian Kelautan dan Perikanan',
    period: 'September 2025 - Desember 2025',
    description: [
      'Mengembangkan website E-Learning berbasis Moodle untuk mendukung kegiatan pembelajaran dan pelatihan secara daring.',
      'Mempelajari pipeline CI/CD untuk mengotomatisasi proses build, pengujian, dan deployment aplikasi',
      'Melakukan containerization aplikasi Moodle menggunakan Docker ',
      'Menggunakan Git untuk mengelola versi kode, melacak perubahan, serta mendukung kolaborasi dan integrasi dalam proses pengembangan aplikasi',
    ],
  },
  {
    role: 'Data Analyst (Internship)',
    company: 'Kementerian Keuangan',
    period: 'Juni 2025 - September 2025',
    description: [
      'Ngecleaning data karyawan peserta pelatihan BPPK ',
      'Mengumpulkan, menginput, dan mengelola data karyawan peserta pelatihan',
      'Melakukan validasi data untuk mengidentifikasi data duplikat, data kosong',
      'Melakukan pengelompokan data berdasarkan kategori tertentu, seperti nama peserta, unit kerja, dan periode pelatihan',
    ],
  },
];



//     desc: 'Microservice-based URL shortener implementing Clean Architecture. Includes a functional dashboard for registered users to manage links.',
//     tech: [
//       'Go',
//       'gRPC',
//       'RESTful API',
//       'RabbitMQ',
//       'Protobuf',
//       'Jaeger',
//       'MongoDB',
//       'Logrus',
//       'Docker Compose',
//       'Docker',
//       'Redis',
//       'Minio',
//     ],
//     link: LINKS.github + '/singkatin-api',
//     status: 'Completed',
//   },
//   {
//     title: 'Exam API',
//     desc: 'Monolithic online exam platform built with Hexagonal Architecture. Features admin capabilities for bulk uploading classes, exams, and questions via Excel.',
//     tech: ['Go', 'RESTful API', 'Docker', 'Docker Compose', 'PostgreSQL', 'Excelize', 'Minio'],
//     link: LINKS.github + '/exam-api',
//     status: 'Completed',
//   },
//   {
//     title: 'BaseKarya',
//     desc: 'BaseKarya - Web application HRIS (Human Resources Information System) using ReactJS and Golang ',
//     tech: [
//       'Go',
//       'RESTful API',
//       'Docker',
//       'Docker Compose',
//       'MySQL',
//       'Excelize',
//       'Minio',
//       'Shadcn-ui',
//       'Reactjs',
//       'Websocket',
//       'Pdf-generation',
//       'Typescript',
//       'Nginx',
//       'Reverse Proxy',
//     ],
//     link: LINKS.github + '/basekarya',
//     status: 'On progress',
//   },
//   {
//     title: 'Pick Your Go',
//     desc: 'A powerful CLI tool to quickly scaffold production-ready Go projects with various architectural patterns. ',
//     tech: [
//       'CLI',
//       'Go',
//       'Boilerplate Template',
//       'Cache',
//       'Makefile',
//       'Hexagonal Architechture',
//       'Layered Architechture',
//       'Modular Architechture',
//     ],
//     link: LINKS.github + '/pick-your-go',
//     status: 'Completed',
//   },
//   {
//     title: 'Nempo Track API',
//     desc: 'A High-Performance Asset Dependency Tracker using Spring Boot, GraphQL, and Neo4j.',
//     tech: ['Java', 'Springboot', 'GraphQL', 'Neo4j', 'Asset Tracking'],
//     link: LINKS.github + '/nempo-track-api',
//     status: 'Completed',
//   },
// ];

// --- Components ---

// const PROJECTS = [
//   {
//     title: 'Project Pipeline Content_Creator',
//     // desc: 'Microservice-based URL shortener implementing Clean Architecture. Includes a functional dashboard for registered users to manage links.',
//     image: '/images/singkatin.png',
//     tech: [
//       'React.js',
//       'Express.js',
//       'JavaScript',
//       'HTML',
//       'CSS',

//     ],
//     link: LINKS.github + '/singkatin-api',
//     status: 'Completed',
//   },
//   {
//     title: 'Sertifikat Magang Kementerian Kelautan dan Perikanan',

//     image: '/images/exam-api.png',
//     tech: [
//     ],
//     link: LINKS.github + '/exam-api',
//     status: 'Completed',
//   },
//   {
//     title: 'Sertifikat Magang Kementerian Keuangan',

//     image: '/images/basekarya.png',
//     tech: [

//     ],
//     link: LINKS.github + '/basekarya',
//     status: 'On progress',
//   },
//   {
//     title: 'Sertifikat IT BootCamp',

//     image: '/images/pick-your-go.png',
//     tech: [

//     ],
//     link: LINKS.github + '/pick-your-go',
//     status: 'Completed',
//   },
//   {
//     title: 'Sertifikat Web Programming Dicoding',
//     image: '/images/nempo-track.png',
//     tech: [
//     ],
//     link: LINKS.github + '/nempo-track-api',
//     status: 'Completed',
//   },
// ];

const PROJECTS = [
  {
    title: 'Website Product Digital Printing',
    images: [
      `${import.meta.env.BASE_URL}images/digital.jpeg`,
      `${import.meta.env.BASE_URL}images/digital2.jpeg`,
      `${import.meta.env.BASE_URL}images/digital3.jpeg`,
      `${import.meta.env.BASE_URL}images/digital4.jpeg`,
      
    ],
    tech: ['React.js', 'Express.js', 'JavaScript', 'HTML', 'CSS'],
    status: '',
  },
    {
    title: 'Website Pipeline Content Creator',
    images: [
      `${import.meta.env.BASE_URL}images/cc1.jpg`,
      `${import.meta.env.BASE_URL}images/cc2.jpg`,
      `${import.meta.env.BASE_URL}images/cc3.jpg`,
      `${import.meta.env.BASE_URL}images/cc4.jpg`,
      `${import.meta.env.BASE_URL}images/cc5.jpg`,
    ],
    tech: ['Laravel', 'PHP', 'HTML', 'CSS'],
    status: '',
  },
  {
    title: 'Sertifikat Magang Kementerian Kelautan dan Perikanan',
    images: [
      `${import.meta.env.BASE_URL}images/sertifkkp.jpg`,
      `${import.meta.env.BASE_URL}images/fotomagangkkp.jpeg`,
    ],
    tech: [],
    status: '',
  },
  {
    title: 'Sertifikat Magang Kementerian Keuangan',
    images: [
      `${import.meta.env.BASE_URL}images/fotokemenkeu.jpeg`,
      `${import.meta.env.BASE_URL}images/sertifkemenkeu.jpg`,
    ],
    tech: [],
    status: '',
  },
  {
    title: 'Sertifikat IT BootCamp',
    images: [`${import.meta.env.BASE_URL}images/sertifbootcamp.jpg`],
    tech: [],
    status: '',
  },
  {
    title: 'Sertifikat Web Programming Dicoding',
    images: [`${import.meta.env.BASE_URL}images/sertifdicoding.jpg`],
    tech: [],
    status: '',
  },
];

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 10) + 1;
      current = Math.min(current + increment, 100);
      setText(current);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(onComplete, 200);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <Motion.div
      className="bg-dark-900 fixed inset-0 z-50 flex flex-col items-center justify-center text-slate-200"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
    >
      <div className="mb-4 font-mono text-4xl font-bold text-white">{text}%</div>

      {/* Custom Progress Bar */}
      <div className="bg-dark-800 border-dark-700 h-2 w-64 overflow-hidden rounded-full border">
        <Motion.div
          className="bg-primary-600 h-full shadow-[0_0_15px_#2563eb]"
          initial={{ width: '0%' }}
          animate={{ width: `${text}%` }}
        />
      </div>
    </Motion.div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-dark-900/80 border-dark-700 border-b shadow-lg backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex cursor-pointer items-center gap-3">
          <div className="group relative">
            <div className="from-primary-400 to-accent absolute -inset-0.5 rounded-full bg-gradient-to-r opacity-75 blur transition duration-200 group-hover:opacity-100"></div>
            <img
              src="https://avatars.githubusercontent.com/u/145754770?s=400&u=2ed7a1b89e5d10faaa1d16d17d864f2a2cfe517d&v=4"
              alt="TJR Avatar"
              className="border-dark-900 relative h-10 w-10 rounded-full border-2 object-cover"
            />
          </div>
        </div>
        <div className="hidden space-x-8 md:flex">
          {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-primary-400 cursor-pointer text-sm font-medium tracking-wide transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
        <a
          target="_blank"
          rel="noreferrer"
          className="text-slate-300 transition-colors hover:text-white"
        >

        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 outline-none"
    >
      {/* Background Glow Effect */}
      <div className="bg-primary-600/20 absolute top-1/4 left-1/4 h-96 w-96 rounded-full blur-[128px]" />
      <div className="bg-accent/10 absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full blur-[128px]" />

      <div className="z-10 mx-auto max-w-4xl px-6 text-center">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent mb-4 block font-medium tracking-wider">HELLO, I'M</span>

          <h1 className="mb-6 font-mono text-5xl font-bold tracking-tighter text-white md:text-7xl">
            Daffa Pratama Adianto{' '}
          </h1>

          <div className="group relative flex items-center justify-center mb-10">
            {/* Shape Biru di Belakang Foto */}
            <div className="absolute h-80 w-80 rounded-full bg-blue-400 opacity-90 blur-md transition duration-300 group-hover:opacity-100"></div>

            {/* Foto Profil */}
            <img
              src="https://avatars.githubusercontent.com/u/145754770?s=400&u=2ed7a1b89e5d10faaa1d16d17d864f2a2cfe517d&v=4"
              alt="Profile"
              className="border-dark-900 relative z-10 h-75 w-75 rounded-full border-2 object-cover"
            />
          </div>

          {/* <span className="whitespace-nowrap">
              <Motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="text-primary-400 ml-1 inline-block"
              >
                |
              </Motion.span>
            </span> */}

          <h2 className="mb-8 text-2xl font-light text-slate-400 md:text-3xl">
            Backend Engineer & QA Engineer
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-slate-400">
            Fresh graduate S1 Sistem Informasi dari Universitas Bina Sarana Informatika yang memiliki
            minat di bidang Backend Web Development dan Quality Assurance (QA) Engineer. Memiliki
            ketertarikan dalam pengembangan aplikasi, pengelolaan database, pembuatan API, serta
            pengujian aplikasi untuk memastikan fungsionalitas berjalan sesuai kebutuhan tanpa
            adanya bug. Terus mengembangkan kemampuan melalui pembelajaran mandiri dan proyek
            pribadi. Memiliki kemauan untuk belajar, mampu beradaptasi dengan hal baru, serta ingin
            memperoleh pengalaman kerja dan mengembangkan keterampilan di bidang teknologi informasi
            melalui kesempatan magang.
          </p>

          <div className="flex justify-center gap-4">
            <Motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={LINKS.gdrive}
              target="_blank"
              rel="noreferrer"
              className="bg-primary-600 hover:bg-primary-500 shadow-primary-600/20 flex items-center gap-2 rounded-full px-8 py-3 font-semibold text-white shadow-lg transition-all"
            >
              <Download size={18} /> CV
            </Motion.a>
            <Motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="bg-dark-800 hover:bg-dark-700 border-dark-700 rounded-full border px-8 py-3 font-semibold text-white transition-all"
            >
              Linkedin
            </Motion.a>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-12">
    <h3 className="text-accent mb-2 font-medium tracking-widest">{subtitle}</h3>
    <h2 className="text-3xl font-bold text-white">{title}</h2>
    <div className="bg-primary-600 mt-4 h-1 w-20 rounded-full"></div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="bg-dark-800/50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader title="Skills Saya" subtitle="SKILLS" />

        <div className="md:grid-colFs-3 grid grid-cols-2 gap-5 lg:grid-cols-5">
          {SKILLS.map((skill, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-dark-800 border-dark-700 hover:border-primary-500/50 hover:shadow-primary-500/10 group flex flex-col items-center justify-center gap-4 rounded-xl border p-6 transition-all hover:shadow-lg"
            >
              <div className="group-hover:text-primary-400 text-slate-400 transition-colors">
                {skill.icon}
              </div>
              <span className="text-center text-sm font-medium text-slate-200">{skill.name}</span>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader title="Pengalaman Saya" subtitle="EXPERIENCE" />

        <div className="border-dark-700 relative ml-3 space-y-12 border-l pl-8 md:ml-0 md:pl-0">
          {EXPERIENCE.map((exp, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="bg-primary-600 ring-dark-900 absolute top-2 left-[-9px] hidden h-4 w-4 rounded-full ring-4 md:block" />

              <div className="items-start gap-8 md:grid md:grid-cols-12">
                <div className="mb-2 pt-1 font-mono text-sm text-slate-400 md:col-span-4 md:mb-0 md:text-right">
                  {exp.period}
                </div>
                <div className="md:col-span-8">
                  <h3 className="mb-1 text-xl font-bold text-white">{exp.role}</h3>
                  <h4 className="text-primary-400 mb-4 font-medium">{exp.company}</h4>

                  <ul className="list-outside list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-400">
                    {exp.description.map((descItem, i) => (
                      <li key={i} className="marker:text-primary-500 pl-1">
                        {descItem}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectSlider = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStart = useRef(0);

  const totalImages = images.length;

  // Auto slide setiap 3 detik
  useEffect(() => {
    if (totalImages <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalImages);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalImages]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  // Swipe pada HP
  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const difference = touchStart.current - touchEnd;

    if (Math.abs(difference) > 50) {
      difference > 0 ? nextSlide() : prevSlide();
    }
  };

  if (!totalImages) return null;

  return (
    <div
      className="bg-dark-900 relative aspect-video overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Images */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} ${index + 1}`}
            className="h-full w-full shrink-0 object-contain"
            loading="lazy"
          />
        ))}
      </div>

      {/* Navigation */}
      {totalImages > 1 && (
        <>
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous image"
            className="hover:bg-primary-600 absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white backdrop-blur-sm transition"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next image"
            className="hover:bg-primary-600 absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white backdrop-blur-sm transition"
          >
            <ChevronRight size={22} />
          </button>

          {/* Image Counter */}
          <div className="absolute top-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
            {currentIndex + 1} / {totalImages}
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-primary-500 w-6' : 'w-2 bg-white/60 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};




// <section id="projects" className="py-20">
//   <div className="max-w-6xl mx-auto px-6">
//     <div className="mb-10">
//       <p className="text-sm uppercase tracking-widest text-blue-500 mb-2">
//         My Portfolio
//       </p>
//       <h2 className="text-3xl md:text-4xl font-bold">
//         Project & Sertifikat
//       </h2>

//     </div>

//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
//       {PROJECTS.map((project) => (
//         <article
//           key={project.title}
//           className="group overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
//         >
//           {/* Project Image */}
//           <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
//             <img
//               src={project.image}
//               alt={`${project.title} preview`}
//               className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//               loading="lazy"
//               onError={(e) => {
//                 e.currentTarget.style.visibility = 'hidden';
//               }}
//             />
//           </div>

//           {/* Project Content */}
//           <div className="p-5">
//             <div className="flex items-start justify-between gap-3 mb-3">
//               <h3 className="text-xl font-bold">
//                 {project.title}
//               </h3>

//               <span
//                 className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
//                   project.status === 'Completed'
//                     ? 'bg-green-100 text-green-700'
//                     : 'bg-yellow-100 text-yellow-700'
//                 }`}
//               >
//                 {project.status}
//               </span>
//             </div>

//             <p className="text-sm leading-6 text-gray-600 dark:text-gray-400 mb-5">
//               {project.desc}
//             </p>

//             {/* Technology Stack */}
//             <div className="flex flex-wrap gap-2 mb-6">
//               {project.tech.map((item) => (
//                 <span
//                   key={item}
//                   className="rounded-md bg-gray-100 dark:bg-gray-800 px-2.5 py-1 text-xs text-gray-700 dark:text-gray-300"
//                 >
//                   {item}
//                 </span>
//               ))}
//             </div>

//             {/* GitHub Link */}
//             <a
//               href={project.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400"
//             >

//             </a>
//           </div>
//         </article>
//       ))}
//     </div>
//   </div>
// </section>

//   );
// };

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <div className="mb-10">
          <p className="mb-2 text-sm tracking-widest text-blue-500 uppercase">My Portfolio</p>
          <h2 className="text-3xl font-bold md:text-4xl">Project & Sertifikat</h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
            >
              {/* Project Image Slider */}
              <ProjectSlider images={project.images} title={project.title} />

              {/* Project Content */}
              <div className="p-5">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>

                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                      project.status === 'Completed'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                {project.desc && (
                  <p className="mb-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {project.desc}
                  </p>
                )}

                {/* Technology Stack */}
                {project.tech?.length > 0 && (
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                {/* GitHub Link (if available) */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400"
                  >
                    <Github size={16} />
                    View Project
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-dark-800 bg-dark-900 border-t py-12 text-center">
      <div className="mb-8 flex justify-center gap-8">
        {[
          { icon: <Github />, link: LINKS.github },
          { icon: <Linkedin />, link: LINKS.linkedin },
          { icon: <Instagram />, link: LINKS.instagram },
        ].map((social, idx) => (
          <a
            key={idx}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary-400 text-slate-400 transition-all hover:scale-110"
          >
            {social.icon}
          </a>
        ))}
      </div>
      <p className="text-sm text-slate-600">
        © {new Date().getFullYear()} Daffa Pratama Adianto.
      </p>
    </footer>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-[#0a0a0a] selection:bg-primary-500 min-h-screen font-sans text-slate-300 selection:text-white">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <React.Fragment>
            <Navbar />
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Footer />
          </React.Fragment>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
