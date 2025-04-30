export interface EventData {
    title: string;
    subtitle: string;
    date: string;
    location: string;
    backgroundImage: string;
    aboutEvent: string;
    speaker: {
      name: string;
      title: string;
      image: string;
      background: string[];
    };
    countdown: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
  }
  
  export const eventData: EventData = {
    title: "BUSINESS LEADERS",
    subtitle: "CONFERENCE 2025",
    date: "22-25 July 2025",
    location: "Greatwork 2 Office",
    backgroundImage: "/rectangle.png",
    aboutEvent: "Join top real estate professionals, investors, and tech leaders to explore the future of property innovation. Discover trends, strategies, and digital tools shaping the Philippine real estate landscape.",
    speaker: {
      name: "Marck P. Gonzales",
      title: "Lead Software Engineer & Tech Community Host",
      image: "/rectangle-1.png",
      background: [
        "Marck P. Gonzales is an experienced IT professional with a strong background in software engineering, system architecture, and tech leadership. A proud graduate of the University of the Philippines with a degree in Information Technology, Marck has spent the last 8+ years building web and mobile applications, optimizing enterprise systems, and mentoring upcoming developers in the industry.",
        "He currently works as a Lead Software Engineer at NovaTech Solutions, where he leads a cross-functional team working on cloud-based applications, automation tools, and AI-powered platforms. Marck is known for his passion for clean code, user-centric design, and staying up-to-date with the latest tech trends.",
        "Outside of work, Marck is a familiar face in the local tech scene—hosting seminars, moderating hackathons, and leading workshops focused on web development, software architecture, and digital innovation. His approachable and engaging style makes him a favorite host at IT events and student-led conferences."
      ]
    },
    countdown: {
      days: "143",
      hours: "22",
      minutes: "16",
      seconds: "22"
    }
  };