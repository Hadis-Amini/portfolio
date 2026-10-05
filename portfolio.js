import emoji from "react-easy-emoji";

export const greetings = {
  name: "Hadis Amini",

  title: "Hi all, I'm Hadis Amini",

  description:
    "I'm a Junior Frontend Developer with a background in English translation. I'm passionate about building responsive and user-friendly websites using HTML, CSS, JavaScript and React.",

  resumeLink: "/resume/Hadis-Amini.pdf",
};

export const openSource = {
  githubUserName: "HadisAmini",
};

export const contact = {};

export const socialLinks = {
  url: "https://portfoilo-weld.vercel.app/",
  linkedin: "https://www.linkedin.com/in/hadis-amini-38ab27177/",
  github: "https://github.com/Hadis-Amini",
};

export const skillsSection = {
  title: "What I do",

  subTitle:
    "A FRONTEND DEVELOPER IN TRAINING WHO ENJOYS BUILDING RESPONSIVE AND USER-FRIENDLY WEBSITES",

  data: [
    {
      title: "Frontend Development",
      lottieAnimationFile: "/lottie/skills/Contact Us (1).json",

      skills: [
        emoji("I build responsive websites using HTML and CSS"),
        emoji("I create responsive layouts using Flexbox and CSS Grid"),
        emoji("I build interactive web applications using JavaScript"),
      ],

      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "React",
          fontAwesomeClassname: "logos:react",
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "logos:git-icon",
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "logos:github-icon",
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "logos:npm-icon",
        },
      ],
    },
  ],
};

export const SkillBars = [
  // {
  // 	Stack: "Frontend/Design", //Insert stack or technology you have experience in
  // 	progressPercentage: "90", //Insert relative proficiency in percentage
  // },
  // {
  // 	Stack: "Backend",
  // 	progressPercentage: "70",
  // },
  // {
  // 	Stack: "Programming",
  // 	progressPercentage: "60",
  // },
];

export const educationInfo = [
  {
    schoolName: "Science and Research University",
    subHeader: "M.A. in Teaching English as a Foreign Language (TEFL)",
    duration: "Kermanshah, Iran",
    desc: "",
    descBullets: [],
  },
  {
    schoolName: "Payame Noor University",
    subHeader: "B.A. in English Translation",
    duration: "Kermanshah, Iran",
    desc: "",
    descBullets: [],
  },
  {
    schoolName: "Jonas Schmedtmann",
    subHeader: "Frontend Development",
    duration: "Online Course",
    desc: "Learning modern JavaScript and frontend development.",
    descBullets: [],
  },
];

export const experience = [
  {
    role: "English Translator",
    company: "Freelance",
    icon: "language",
    companylogo: "",
    date: "",
    desc: "",
    descBullets: [
      "Translated complex technical and literary texts with high attention to detail and accuracy.",
      "Managed time-sensitive projects and consistently met deadlines while maintaining high-quality work.",
    ],
  },

  {
    role: "Office Employee",
    company: "Jangal Publications",
    icon: "book",
    companylogo: "",
    date: "",
    desc: "",
    descBullets: [
      "Collaborated within a professional team to streamline communication and data management.",
      "Developed strong organizational and problem-solving skills in a fast-paced work environment.",
    ],
  },

  {
    role: "English Teacher",
    company: "Sahar English Language Institute",
    icon: "teacher",
    companylogo: "",
    date: "",
    desc: "",
    descBullets: [
      "Developed the ability to break down complex concepts into simple and understandable steps.",
      "Managed team projects and student performance evaluations, demonstrating leadership and collaboration skills.",
    ],
  },
];

export const projects = [
  {
    name: "Bankist",
    desc: "A modern banking website built with HTML, CSS and JavaScript, featuring interactive UI elements and dynamic functionality.",
    github: "https://github.com/Hadis-Amini/Bankist",
    link: "https://bankist-amini.netlify.app/",
  },

  {
    name: "Todo App",
    desc: "A responsive Todo application built with HTML, CSS and JavaScript, allowing users to manage and organize their tasks.",
    github: "https://github.com/Hadis-Amini/todo-app",
    link: "https://todo-app-amini.netlify.app/",
  },
];

export const feedbacks = [];

// See object prototype on SEO.jsx page

export const seoData = {
  title: "Hadis Amini | Frontend Developer",
  description:
    "Junior Frontend Developer with a background in English translation, passionate about building responsive and user-friendly web applications.",
  author: "Hadis Amini",
  image: "",
  keywords: [
    "Hadis Amini",
    "Frontend Developer",
    "Junior Frontend Developer",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Frontend Development",
    "Portfolio",
  ],
};
