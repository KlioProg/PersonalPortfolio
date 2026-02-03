"use client";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right"): void => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = container.offsetWidth / 3;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const galleryImages = [
    { src: "/cafe.jpg", alt: "Travel_Cafe" },
    { src: "/jap.jpg", alt: "Travel_Jap" },
    { src: "/setup.jpg", alt: "TechTok" },
    { src: "/me.jpg", alt: "DevFest_Participant" },
    { src: "/devfest.jpg", alt: "DevFest" },
    { src: "/addu.jpg", alt: "School" },
    { src: "/risk.jpg", alt: "Graphic Designs" },
  ];

  return (
    // Background
    <div className="bg-white min-h-screen flex flex-col items-center px-4">

      {/* Profile and Work Together Section */}
      <div className="flex flex-col lg:flex-row gap-4 w-full max-w-5xl mt-8 lg:mt-12">

        {/* Profile Container */}
        <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-lg shadow-lg p-6 lg:p-8 flex-1">
          {/* Header Profile*/}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
            {/* Profile Image */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0">
              <Image
                src="/profile.jpeg"
                alt="Profile Image"
                width={160}
                height={160}
                className="rounded-lg object-cover w-full h-full shadow-lg"
              />
            </div>

            {/* Content area */}
            <div className="flex-1 flex flex-col justify-center text-center sm:text-left">
              <div className="w-full text-black">
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">Kilo Magno</h1>
                <a
                  href="https://www.google.com/maps/search/Davao+City"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-all mb-2 w-fit mx-auto sm:mx-0"
                >
                  <Image
                    src="/location_on.png"
                    alt="Location icon"
                    width={20}
                    height={20}
                  />
                  <span className="text-sm sm:text-base border-b border-transparent group-hover:border-blue-600">
                    Davao City, Philippines
                  </span>
                </a>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-gray-700 text-xs sm:text-sm mb-3">
                  <span className="font-medium">Software Engineer</span>
                  <span className="text-gray-400">/</span>
                  <span className="font-medium">Cloud Engineer</span>
                  <span className="text-gray-400">/</span>
                  <span className="font-medium">UI/UX Designer</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-3">
                  <a href="https://github.com/KlioProg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-black text-white font-medium rounded-full shadow-lg border border-white/10 transition-all duration-200 hover:bg-neutral-800 hover:-translate-y-0.5 hover:shadow-xl cursor-pointer text-sm w-full sm:w-auto justify-center">
                    View Projects
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                  <span className="text-gray-400 hidden sm:inline">·</span>
                  <a href="/cv/kilo.pdf" download className="font-medium bg-gray-100 text-black px-4 sm:px-5 py-2 rounded-full shadow-lg transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-xl flex items-center justify-center gap-2 text-sm w-full sm:w-auto">
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Let's Work Together Section */}
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg p-6 lg:p-8 flex flex-col justify-start items-start text-left w-full lg:w-80 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <div className="relative">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div className="absolute inset-0 w-3 h-3 bg-white rounded-full animate-ping"></div>
            </div>
            <span className="text-white text-sm font-medium">Available for work</span>
          </div>
          <h3 className="text-white font-bold text-xl sm:text-2xl mb-4">Let's work together</h3>
          <p className="text-white text-sm mb-6 opacity-90">
            Open to freelance projects, consulting, and full-time opportunities.
          </p>
          <button className="bg-white text-emerald-600 font-semibold px-4 py-2 rounded-full w-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base">
            Get in touch
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>

      {/* About Me, Tech Stack, Timeline Section */}
      <div className="flex flex-col lg:flex-row gap-4 w-full max-w-5xl mt-4">

        {/* Left Column - About & Tech Stack */}
        <div className="flex-1 space-y-4">

          {/* About Section */}
          <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/office.png"
                  alt="Office"
                  width={16}
                  height={16}
                  className="object-cover shadow-sm"
                />
                <h2 className="text-lg sm:text-xl font-bold text-black">About</h2>
              </div>
            </div>

            <div className="space-y-6 text-sm text-black leading-relaxed">
              <p>
                I am an <strong>Aspiring Cloud Engineer</strong> on a mission to architect the
                digital infrastructure that will power the next generation of Philippine innovation.
                By mastering scalable cloud solutions, I aim to provide the technical foundation
                that Filipino startups and MSMEs need to compete on a global scale.
              </p>
              <p>
                My focus is on <strong>democratizing technology</strong> and helping local
                entrepreneurs streamline their processes and scale their dreams without the
                burden of technical complexity. I believe that by building robust, cloud-native
                solutions, we can empower our local industries to grow from the ground up.
              </p>
              <p>
                Ultimately, I am dedicated to <strong>building the Philippines' digital future</strong>.
                Whether it's through cloud architecture, full-stack development, or AI integration,
                my goal is to contribute to a self-sustaining ecosystem where Filipino talent
                creates world-class technology, for Filipinos and by Filipinos.
              </p>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/Coding.png"
                  alt="Coding"
                  width={16}
                  height={16}
                  className="object-cover shadow-sm"
                />
                <h2 className="text-lg sm:text-xl font-bold text-black">Tech Stack</h2>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-black text-xs sm:text-sm mb-2">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-100 text-gray-800 rounded-md text-xs font-medium">JavaScript</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-100 text-gray-800 rounded-md text-xs font-medium">TypeScript</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-100 text-gray-800 rounded-md text-xs font-medium">React</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-100 text-gray-800 rounded-md text-xs font-medium">Next.js</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-100 text-gray-800 rounded-md text-xs font-medium">Tailwind CSS</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-black text-xs sm:text-sm mb-2">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-100 text-gray-800 rounded-md text-xs font-medium">Node.js</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-100 text-gray-800 rounded-md text-xs font-medium">Python</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-100 text-gray-800 rounded-md text-xs font-medium">PHP</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-100 text-gray-800 rounded-md text-xs font-medium">PostgreSQL</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-100 text-gray-800 rounded-md text-xs font-medium">MongoDB</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-black text-xs sm:text-sm mb-2">DevOps & Cloud</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-100 text-gray-800 rounded-md text-xs font-medium">AWS</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-100 text-gray-800 rounded-md text-xs font-medium">Docker</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-100 text-gray-800 rounded-md text-xs font-medium">GitHub Actions</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Timeline Section */}
        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 lg:p-8 flex flex-col w-full lg:w-80">
          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/office.png"
              alt="Office"
              width={16}
              height={16}
              className="object-cover shadow-sm"
            />
            <h2 className="text-lg sm:text-xl font-bold text-black">Timeline</h2>
          </div>

          <div className="relative border-l-2 border-gray-200 ml-3.5 space-y-6 sm:space-y-8">

            {/* Item 1 */}
            <div className="relative pl-6 sm:pl-8 group cursor-pointer">
              <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-gray-900 bg-white group-hover:bg-gray-900 transition-all duration-300"></div>
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-wide text-gray-400 uppercase mb-1">2024</span>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">Hello World! 👋</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">Wrote my first line of code</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative pl-6 sm:pl-8 group cursor-pointer">
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-gray-900 bg-black"></div>
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-wide text-black uppercase mb-1">2024 - Present</span>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">BS Computer Science</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-0.5">Ateneo De Davao University</p>
                <span className="inline-block mt-2 px-3 py-1 bg-blue-50 text-black text-xs font-medium rounded-full w-fit">Graduate</span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="relative pl-6 sm:pl-8 group cursor-pointer">
              <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-gray-900 bg-white group-hover:bg-gray-900 transition-all duration-300"></div>
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-wide text-black uppercase mb-1">Goal</span>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">Cloud Engineer</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-0.5">Standard Chartered</p>
                <span className="inline-block mt-2 px-3 py-1 bg-blue-50 text-black text-xs font-medium rounded-full w-fit">Full-time</span>
              </div>
            </div>

            {/* Item 4 */}
            <div className="relative pl-6 sm:pl-8 pb-4 group cursor-pointer">
              <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-gray-900 bg-white group-hover:bg-gray-900 transition-all duration-300"></div>
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-wide text-black uppercase mb-1">Post-Graduate Goal</span>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">Masters in IT</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-0.5">Specializing in Cloud Engineering</p>
                <span className="inline-block mt-2 px-3 py-1 bg-blue-50 text-black text-xs font-medium rounded-full w-fit">Planned</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl mt-4">

        {/* A member of */}
        <div className="bg-white/70 backdrop-blur-md rounded-lg shadow-lg p-4">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/Supergroup.png"
              alt="People"
              width={24}
              height={24}
              className="object-contain bg-transparent shadow-none"
            />
            <h2 className="text-lg sm:text-xl font-bold text-black">Member for</h2>
          </div>
          <div className="space-y-3">
            <a
              href="https://www.facebook.com/gdgdavao"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-sm text-gray-700 hover:text-black transition-colors group"
            >
              <span>Google Developer Group (GDG)</span>
            </a>
            <a
              href="https://www.facebook.com/ateneoaccess"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-sm text-gray-700 hover:text-black transition-colors group"
            >
              <span>Ateneo Circle of Computer Enthusiasts for Study and Success (ACCESS)</span>
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-white/70 backdrop-blur-md rounded-lg shadow-lg p-4">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/Link.png"
              alt="Link icon"
              width={24}
              height={24}
              className="object-contain bg-transparent shadow-none"
            />
            <h2 className="text-lg sm:text-xl font-bold text-black">Links</h2>
          </div>
          <div className="space-y-2">
            <a
              href="https://www.linkedin.com/in/kiloprog/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2 bg-gray-50 rounded-md text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all group"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/KlioProg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2 bg-gray-50 rounded-md text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all group"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://www.instagram.com/nocxtkilo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2 bg-gray-50 rounded-md text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all group"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* Speaking */}
        <div className="bg-white/70 backdrop-blur-md rounded-lg shadow-lg p-4">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/Megaphone.png"
              alt="Megaphone"
              width={20}
              height={20}
              className="object-contain bg-transparent shadow-none"
            />
            <h2 className="text-lg sm:text-xl font-bold text-black">Speaker</h2>
          </div>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            Available for speaking at events about software development and emerging technologies.
          </p>
          <a href="https://calendly.com/madeforkarl16" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-700 hover:text-black font-medium transition-colors group w-fit">
            Get in touch
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Contact */}
        <div className="bg-white/70 backdrop-blur-md rounded-lg shadow-lg p-4">
          <div className="space-y-3">
            <a
              href="mailto:magnokilo@gmail.com"
              className="flex items-center justify-between px-1 py-1 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Image src="/Mail.png" alt="Mail" width={20} height={20} className="object-contain bg-transparent shadow-none" />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Email</p>
                  <p className="text-xs text-gray-900">magnokarl16@gmail.com</p>
                </div>
              </div>
              <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://calendly.com/madeforkarl16"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-1 py-1 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Image src="/Phone.png" alt="Phone" width={20} height={20} className="object-contain bg-transparent shadow-none" />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Let's Talk</p>
                  <p className="text-xs text-gray-900">Schedule a Call</p>
                </div>
              </div>
              <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://your-blog.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-1 py-1 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Image src="/Book.png" alt="Blog" width={20} height={20} className="object-contain bg-transparent shadow-none" />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Photos</p>
                  <p className="text-xs text-gray-900">Read my blog</p>
                </div>
              </div>
              <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="w-full max-w-5xl mt-4 pb-4">
        <div className="bg-white/70 backdrop-blur-md rounded-lg shadow-lg p-4">
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-3 mb-4">
            <Image
              src="/photo.png"
              alt="gallery"
              width={28}
              height={28}
              className="object-contain bg-transparent shadow-none"
            />
            <h2 className="text-lg sm:text-xl font-bold text-black">Gallery</h2>
          </div>
          </div>

          {/* Carousel */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => scroll("left")}
              className="absolute -left-2 top-1/2 -translate-y-1/2 z-10
                         w-7 h-7 rounded-full bg-white/60 backdrop-blur-sm border border-gray-200
                         flex items-center justify-center shadow-sm
                         hover:bg-white/90 hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scroll("right")}
              className="absolute -right-2 top-1/2 -translate-y-1/2 z-10
                         w-7 h-7 rounded-full bg-white/60 backdrop-blur-sm border border-gray-200
                         flex items-center justify-center shadow-sm
                         hover:bg-white/90 hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Images */}
            <div
              ref={scrollRef}
              className="flex gap-2 overflow-x-auto scroll-smooth rounded-lg [&::-webkit-scrollbar]:hidden"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="min-w-[calc(20%-0.4rem)] h-44 flex-shrink-0 rounded-lg overflow-hidden shadow-sm group cursor-pointer"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div className="relative w-full h-full bg-gray-200">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end">
                      <span className="text-white text-xs font-medium px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {image.alt}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-5xl mt-12 pb-8">
        <div className="border-t border-black pt-6 flex items-center justify-center">
          <p className="text-sm text-black">© 2026 Kilo Magno. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}