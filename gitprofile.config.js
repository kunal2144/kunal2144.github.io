// gitprofile.config.js

const config = {
  github: {
    username: 'kunal2144', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['kunal2144'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'kunal-jain-5013001b3',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: 'kunal_2144',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'jkunal2144@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C',
    'C++',
    'C#',
    'Java',
    'Python',
    'SQL',
    'JavaScript',
    'ExpressJS',
    'ReactJS',
    'NodeJS',
    'Git',
    'Rest API',
    'Photoshop',
    'Blender',
    'Unity Engine',
    'Amazon Web Services',
    'Google Cloud Platform',
  ],
  experiences: [
    {
      company: 'Round Brush Studio',
      position: 'Game Programmer',
      location: 'Bangalore, India',
      from: 'May 2022',
      to: 'Dec 2022',
      responsibilities: [
        'Collaborated remotely with industry experts in concept art and 3D modeling to prototype their game idea.',
      ],
    },
    {
      company: 'Digipplus',
      position: 'Graphic Design Intern',
      location: 'Bangalore, India',
      from: 'Aug 2020',
      to: 'Sep 2020',
      responsibilities: [
        'Illustrated educational diagrams to visually enhance content and improve comprehension.',
        'Created over 200 images within a tight deadline of 1 month, showcasing exceptional efficiency and meeting the timeline effectively.',
      ],
    },
  ],

  certifications: [
    {
      name: 'Amazon Web Services',
      year: '2023',
      body: 'Academy Cloud Foundations',
      link: 'https://www.credly.com/badges/a621e356-a1f5-4dff-a7a3-06c512c9868c/public_url',
    },
    {
      name: 'Hackerrank Certificates',
      year: '2023',
      body: 'SQL - Basic and Intermediate, Python - Basic, Java - Basic, Problem-Solving',
      link: 'https://www.hackerrank.com/certificates/9912626cc8ed',
    },
    {
      name: 'Infosys Springboard',
      year: '2023',
      body: 'Software Engineering',
      link: 'https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_01260589506387148827_shared/1-44690270-bec0-4e75-bb55-b2a49f22f250.pdf',
    },
    // Add more certifications as needed
  ],

  education: [
    {
      institution: 'Christ University',
      degree: 'BCA',
      from: '2021',
      to: 'Present',
    },
    {
      institution: 'St. Josephs PU College',
      degree: 'CSBA',
      from: '2019',
      to: '2021',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Smart',
      stack: 'NextJS, Tailwind, Prisma, MongoDB, Rest API',
      date: 'Sep 2023',
      description:
        'Developed a website that offers various Generative AI tools like conversation, code, image, video and music generation all in one place. Utilizing NextJS for server-side rendering and Prisma for database management.',
      link: 'https://smart-ai-saas.vercel.app/',
      imageUrl: '/project-logos/Smart.png',
    },
    {
      title: 'Bird Run',
      stack: 'C#, Photoshop, SFXR, Unity Engine',
      date: 'Jul 2021',
      description:
        'Designed and programmed a 2D endless arcade game using C# and Unity Engine. Achieved 100+ downloads, earned 30+ reviews, and maintained a 5-star rating on the Play Store.',
      link: 'https://play.google.com/store/apps/details?id=com.BlueSprite.BirdRun',
      imageUrl: '/project-logos/BirdRun.png',
    },
    {
      title: 'HealHub',
      stack: 'React Native, MongoDB, ExpressJS, NodeJS, AWS',
      date: 'Present',
      description:
        'Developing a comprehensive healthcare application using MERN Stack with React Native. Utilizing Natural Language Processing in addition with Optical Character Recognition to parse physical prescriptions.',
      link: 'https://github.com/kunal2144/HealHub',
      imageUrl: '/project-logos/HealHub.png',
    },
    {
      title: 'GCR Materials',
      stack: 'Python, Google Cloud Platform (Classroom and Google Drive API)',
      date: 'Sep 2023',
      description:
        'Programmed a Python script that makes use of the Classroom API and Google Drive API to scrape every material posted on a Google Classroom.',
      link: 'https://github.com/kunal2144/gcr-materials',
      imageUrl: '/project-logos/GCRMaterials.png',
    },
    {
      title: 'OrganizeMe',
      stack: 'C#, .NET Framework, PostgreSQL, Supabase',
      date: 'Mar 2023',
      description:
        'Developed a desktop application that helps organize notes and tasks that are synced via the cloud, making it easy to access from anywhere.',
      link: 'https://github.com/kunal2144/OrganizeMe',
      imageUrl: '/project-logos/OrganizeMe.png',
    },
    {
      title: 'Password Generator',
      stack: 'HTML, CSS, JavaScript',
      date: 'Dec 2022',
      description:
        'Crafted a user-friendly website capable of generating robust, randomized passwords for enhanced digital security.',
      link: 'https://kunal2144-password-generator.netlify.app/',
      imageUrl: '/project-logos/PasswordGenerator.png',
    },
    // Add more projects and experiences as needed
  ],

  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'jkunal2144', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,
};

export default config;
