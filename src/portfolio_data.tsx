import {Portfolio} from './types/types'

export const portfolioData: Portfolio = {
  person: {
    firstName: 'Teague',
    lastName: 'Stockwell',
    email: 'tsAppDevelopment@gmail.com',
    linkedInSrc: 'https://www.linkedin.com/in/teague-stockwell',
    githubSrc: 'https://github.com/tsAppDevelopment',
    jobTitle: 'Software Engineer',
    location: 'Seattle, WA',
  },

  jobs: [
    {
      name: 'Software Engineer',
      company: 'Rainier Spark Tron',
      dateRange: 'October 2020 - Present',
      description:
        'asda asdas  asdnjnakjsnd jkashdkjha kahjsdlkh kalhhsdklha lkajhsd',
      src: 'https://www.linkedin.com/company/tron-air-force',
      location: 'Joint Base Lewis McChord, WA',
      imgSrc: '/rainier.png',
    },
    {
      name: 'Software Engineer',
      company: 'Aloha Spark Tron',
      dateRange: 'October 2020 - Present',
      description:
        'asda asdas  asdnjnakjsnd jkashdkjha kahjsdlkh kalhhsdklha lkajhsd',
      src: 'https://www.linkedin.com/company/tron-air-force',
      location: 'Remote',
      imgSrc: '/tron1.png',
    },
    {
      name: 'Aerospace Maintenance Technician',
      company: 'United States Air Force',
      dateRange: 'October 2017 - December 2020',
      description:
        'asda asdas  asdnjnakjsnd jkashdkjha kahjsdlkh kalhhsdklha lkajhsd',
      src: 'https://www.airforce.com/careers/detail/airlift-special-mission-aircraft-maintenance',
      location: 'Joint Base Lewis McChord, WA',
      imgSrc: '/af1.png',
    },
  ],

  titles: {
    about: 'About',
    tech: 'Stack',
    projects: 'Projects',
    experience: 'Experience',
    education: 'Education',
    contact: 'Contact Me',
  },
  subTitles: {
    about: undefined,
    tech: undefined,
    projects: 'Web meets mobile. Full stack and microservice architecture.',
    experience: undefined,
    education: undefined,
    contact: `See me on Github, connect on LinkedIn, or send me an email.`,
  },

  skills: [
    {
      name: 'Languages',
      svgKeys: ['typescript', 'javascript', 'dart', 'java', 'html5', 'css3'],
    },
    {
      name: 'Frontend',
      svgKeys: ['reactjs', 'flutter', 'android'],
    },
    {
      name: 'Backend',
      svgKeys: ['nodedotjs', 'express', 'nextdotjs', 'prisma'],
    },
    {
      name: 'Services',
      svgKeys: ['amazonaws', 'postgresql', 'firebase', 'nginx', 'vercel'],
    },
    {
      name: 'Workflow',
      svgKeys: [
        'docker',
        'git',
        'jira',
        'github',
        'gitlab',
        'visualStudioCode',
        'androidStudio',
        'sonarqube',
        'figma',
      ],
    },
  ],
  projects: [
    {
      name: 'Levels',
      dateRange: 'March 2021 - Present',
      subHeading: `Developed a production full stack web app to manage aircraft cargo loading for the Air Force`,
      bullets: [
        'Leveraged CI/CD pipelines, TDD, hardened Docker imgs, and Agile to accredit and securely deploy a prod app in < 5 months',
        'Utilized Node.js to create a REST API that manages cargo and loading configurations against multiple aircraft and user roles',
        'Created containerized React UI for real time aircraft data management, and cargo loading with offline persistence',
      ],
      deploymentSrc: 'https://levels.apps.dso.mil',
      m3u8Src:
        'https://hello-next-auth-bucket1d4c77784-hsrquocmbr64.s3.amazonaws.com/levels-hls/master.m3u8',
      repos: [
        {
          name: 'Frontend',
          src: 'https://github.com/tsAppDevelopment/levels-v3-react',
        },
        {
          name: 'Backend',
          src: 'https://github.com/tsAppDevelopment/levels-v2v3-express',
        },
      ],
      svgs: [
        'docker',
        'postgresql',
        'express',
        'reactjs',
        'nodedotjs',
        'amazonaws',
        'nginx',
        'typescript',
        'prisma',
        'gitlab',
        'sonarqube',
        'git',
        'jira',
        'figma',
        'css3',
        'html5',
      ],
    },
    {
      name: 'Five Level',
      dateRange: 'Sep 2020 - Mar 2021',
      bullets: [
        'Established CI/CD pipeline for static code analysis, linting, testing, and containerized builds',
        'Wrote 160 Flutter component & unit tests for > 90% code coverage',
        'Developed custom admin dashboard to manage cargo data from a REST API in < 10 days',
        'Utilized Google Firestore (BaaS / document db) for offline data persistence on mobile',
      ],
      subHeading: `Developed a X-Platform native UI to manage aircraft cargo loading`,
      deploymentSrc: 'https://fivelevel.web.app',
      m3u8Src:
        'https://hello-next-auth-bucket1d4c77784-hsrquocmbr64.s3.amazonaws.com/five-level-hls/master.m3u8',
      repos: [
        {
          name: 'Frontend',
          src: 'https://github.com/tsAppDevelopment/levels-v2-flutter',
        },
        {
          name: 'Backend Server',
          src: 'https://github.com/tsAppDevelopment/levels-v2v3-express',
        },
        {
          name: 'Backend Serverless',
          src: 'https://firebase.google.com/products/firestore?gclsrc=ds&gclsrc=ds&gclid=CMK6ivX89_ECFUMNrQYdrFIFkQ',
        },
      ],
      svgs: [
        'docker',
        'postgresql',
        'firebase',
        'flutter',
        'express',
        'nodedotjs',
        'nginx',
        'dart',
        'prisma',
        'git',
        'figma',
      ],
    },
  ],
  schools: [
    {
      name: 'Southwestern College',
      dateRange: 'May 2021',
      subHeading: `Bachelor of Science, Computer Programming, 3.9 GPA`,
      src: '/bs1.png',
    },
    {
      name: 'Community College of the Air Force',
      dateRange: 'August 2019',
      subHeading: `Associate of Applied Science, Aviation Maintenance Technology, 4.0 GPA`,
      src: '/as1.png',
    },
  ],
}
