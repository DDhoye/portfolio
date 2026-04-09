// ============================================================
// PORTFOLIO DATA — Edit this file to update your site content
// ============================================================

// --- PERSONAL INFO ---
export const personal = {
  name: "David Dhoye",
  title: "Software Engineer · Web Developer · Graphic Designer",
  tagline: "I engineer scalable web applications, build professional websites, and design brands that make a lasting impression.",
  bio: "I'm a software engineer and web developer with hands-on experience building enterprise-grade Angular applications for leading financial institutions, as well as crafting high-quality WordPress websites for businesses across various industries. I also bring a strong design background — creating clean, purposeful UI/UX and brand identities. I thrive at the intersection of engineering and design, turning complex requirements into polished, user-friendly digital products.",
  email: "david.dhoye20101@gmail.com",
  location: "Nairobi, Kenya",
  availableForWork: true,
}

// --- SOCIAL LINKS ---
export const socials = {
  github: "https://github.com/DDhoye",
  linkedin: "https://www.linkedin.com/in/daviddhoye/",
  twitter: "",
  dribbble: "",
  behance: "",
}

// --- NAVIGATION LINKS ---
export const navLinks = [
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
]

// --- SKILLS ---
// Group your skills into categories
export const skills = [
  {
    category: "Frontend Development",
    items: ["Angular", "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "RxJS"],
  },
  {
    category: "Web Platforms",
    items: ["WordPress", "Elementor", "WooCommerce", "PHP", "MySQL"],
  },
  {
    category: "Design",
    items: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "UI/UX Design", "Brand Identity"],
  },
  {
    category: "Tools & Others",
    items: ["Git", "GitHub", "VS Code", "Next.js", "Tailwind CSS", "REST APIs"],
  },
]

// --- PROJECTS ---
// Add as many projects as you want
export type Project = {
  title: string
  description: string
  longDescription?: string
  tags: string[]           // tech/tools used
  category: "Web Apps" | "wordpress" | "design" | "other"
  image: string            // path to image in /public/images/
  liveUrl?: string         // optional live link
  githubUrl?: string       // optional github link
  featured: boolean        // featured projects show first
}

export const projects: Project[] = [
  {
    title: "Ecobank Digital Onboarding Platform",
    description: "A seamless digital account opening experience for Ecobank customers across East Africa, built as a Progressive Web App.",
    tags: ["Angular", "TypeScript", "PWA", "REST API"],
    category: "Web Apps",
    image: "/images/ecobankimgg.png",
    liveUrl: "https://digitalekeonboard.ecobank.com/pwa/home",
    featured: true,
  },
  {
    title: "SBG Securities Account Opening",
    description: "An online account opening platform for SBG Securities, enabling clients to open investment and trading accounts digitally.",
    tags: ["Angular", "TypeScript", "REST API"],
    category: "Web Apps",
    image: "/images/sbgsimg.png",
    liveUrl: "https://onboarding.sbgsecurities.co.ke/sbgs/home",
    featured: true,
  },
  {
    title: "E-Biller",
    description: "A digital billing and payment platform for Stanbic Bank, allowing customers to manage and pay their bills online with ease.",
    tags: ["Angular", "TypeScript", "REST API"],
    category: "Web Apps",
    image: "/images/ebiller.png",
    liveUrl: "https://ebills.stanbicbank.co.ke/",
    featured: true,
  },
  {
    title: "Stanbic Bank Digital Onboarding",
    description: "A fully digital onboarding platform for Stanbic Bank Kenya, streamlining new customer account creation end-to-end.",
    tags: ["Angular", "TypeScript", "PWA", "REST API"],
    category: "Web Apps",
    image: "/images/stanbic.png",
    liveUrl: "https://onboarding.stanbicbank.co.ke/pwa/welcome",
    featured: true,
  },
  {
    title: "Software Technologies LTD",
    description: "Corporate website for STL Horizon, an IT solutions company — showcasing their services, portfolio, and team.",
    tags: ["WordPress", "Elementor", "Custom CSS"],
    category: "wordpress",
    image: "/images/STL.png",
    liveUrl: "https://www.stl-horizon.com/",
    featured: true,
  },
  {
    title: "Cloudsxpress",
    description: "A modern business website for Cloudsxpress, built to present their cloud and digital services to potential clients.",
    tags: ["WordPress", "Elementor", "Custom CSS"],
    category: "wordpress",
    image: "/images/cloudsxpress.png",
    liveUrl: "https://cloudsxpress.com/",
    featured: true,
  },
  {
    title: "Director Andere",
    description: "A personal brand website for Director Andere, designed to highlight his work, vision, and public profile.",
    tags: ["WordPress", "Elementor", "Custom CSS"],
    category: "wordpress",
    image: "/images/directorandere.png",
    liveUrl: "https://directorandere.com/",
    featured: true,
  },
  {
    title: "IST Education",
    description: "Institutional website for the Institute of Software Technologies, covering courses, admissions, and campus information.",
    tags: ["WordPress", "Elementor", "Custom CSS"],
    category: "wordpress",
    image: "/images/Ist.png",
    liveUrl: "https://www.isteducation.com/",
    featured: true,
  },
  {
    title: "Absolute Carings",
    description: "A compassionate care services website built to connect clients with professional home and health care solutions.",
    tags: ["WordPress", "Elementor", "Custom CSS"],
    category: "wordpress",
    image: "/images/absolutecarings.png",
    liveUrl: "https://absolutecarings.com/",
    featured: true,
  },
  // {
  //   title: "Brand Identity Design",
  //   description: "Complete brand identity for a local business — logo, colors, and typography.",
  //   tags: ["Figma", "Illustrator", "Brand Design"],
  //   category: "design",
  //   image: "/images/project3.png",
  //   featured: false,
  // },
]

// --- EXPERIENCE ---
export const experience = [
  {
    role: "Frontend Developer",
    company: "Company Name",
    duration: "Jan 2023 – Present",
    description: "Brief description of your responsibilities and achievements.",
  },
  {
    role: "WordPress Developer",
    company: "Freelance",
    duration: "2021 – 2023",
    description: "Built and maintained WordPress sites for various clients.",
  },
]

// --- RESUME ---
// Drop your CV in /public/ and update the path here
export const resumeUrl = "/DAVID_DHOYE_CV.pdf"
