import ayla from '/public/image/ayla.jpg'
import crefin from '/public/image/crefin.jpg'
import realEstate from '/public/image/real-estate.jpg'
import travel from '/public/image/travel.jpg'

export const projectsData = [
  {
    id: 1,
    name: 'E-Office',
    description: `"Me and my team built an Web application for sent and approve for proposal document. I have developed UI using NextJs, Typescript and Material UI. Used NextAuth for the authentication system."`,
    tools: [
      'NextJs 14',
      'Material UI',
      'TypeScript',
      'NextAuth',
      'Key Cloak',
      'React Hook Form MUI',
      'Yup',
      'DayJs',
      'React Query',
      'Material react table',
      'HTTP client Ky',
      'React Dropzone',
      'iconify icon',
      'JWT',
      'i18n',
      'Figma',
      'Restful API',
      'Swagger',
      'Postman',
      'Agile'
    ],
    role: `"Front End Developer"`,
    code: '',
    demo: '',
    image: crefin,
    teamSize: 7
  },
  {
    id: 2,
    name: 'Digital support for lending',
    description:
      'I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
    tools: [
      'NextJS',
      'Tailwind CSS',
      'Google Maps',
      'NestJS',
      'TypeScript',
      'MySQL',
      'AWS S3',
      'Sun-Editor',
      'Gmail Passkey'
    ],
    role: `"Front End Developer"`,
    code: '',
    demo: '',
    image: travel,
    teamSize: 5
  },
  {
    id: 3,
    name: 'AI Powered Real Estate',
    description:
      'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
    tools: [
      'React',
      'Bootstrap',
      'SCSS',
      'Stripe',
      'Express',
      'TypeScript',
      'MongoDB',
      'Azure Blob',
      'OpenAI API',
      'Replicate AI',
      'Cronjob',
      'JWT'
    ],
    role: 'Full Stack Developer',
    code: '',
    demo: '',
    image: realEstate,
    teamSize: 7
  },
  {
    id: 4,
    name: 'Newsroom Management',
    description:
      "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', 'Calendar'],
    role: 'Full Stack Developer',
    code: '',
    demo: '',
    image: ayla,
    teamSize: 7
  }
]

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
