import { Icons } from "~/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rahul Kumar",
  initials: "RK",
  url: "https://dillion.io",
  location: "Jharkhand, IN",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I'm a passionate Software Development Engineer (SDE) with expertise in frontend development, specializing in Reactjs and Nextjs.",
  summary:
    "I am a passionate Software Development Engineer (SDE) with expertise in frontend development, specializing in HTML5, CSS3, JavaScript, React.js, Next.js, and TypeScript. I focus on creating dynamic and user-friendly interfaces and have hands-on experience integrating RESTful APIs. With strong problem-solving skills, I thrive in collaborative environments and am committed to delivering high-quality, innovative software solutions while staying updated with industry trends.",
  avatarUrl: "/me.png",
  skills: [
    "Reactjs",
    "Nextjs",
    "Typescript",
    "Nodejs",
    "Express",
    "MongoDB",
    "Mongoose",
    "Tailwindcss",
    "Zod",
    "Zustand",
    "TRPC",
    "Prisma",
    "Payload",
    "Redux",
    "Shadcn",
    "Expo"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" }
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rahul8864",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rahul-sahu26/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@techscript_mastery",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Aerosimple",
      href: "https://www.aerosimple.com/",
      badges: [],
      location: "Visakhapatnam, IN",
      title: "Software Engineer",
      logoUrl: "/aerosimple.jpg",
      start: "07/2022",
      end: "Present",
      description:
        "",
    }
  ],
  education: [
    {
      school: "Newton School",
      href: "https://www.newtonschool.co/",
      degree: "Full Stack Web Development",
      logoUrl: "/newton.jpg",
      start: "11/2021",
      end: "06/2022",
    },
    {
      school: "R.V.S Mahavidyalay",
      href: "https://www.rvsmb.com/",
      degree: "Bachelor of Science (B.Sc)",
      logoUrl: "/rvs.webp",
      start: "06/2018",
      end: "07/2021",
    },
  ],
  projects: [],
} as const;