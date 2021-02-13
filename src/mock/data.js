import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ionut',
  subtitle: "I'm your future Developer",
  cta: 'Tell me more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "Hi! I’m Ionut Rosan. I’m a smart coder, savvy business person, and a funny guy. I love using a variety of tools to solve problems. I got a bachelor's in Robotics. I’m curently working as a mechanical design enginner for a company called ARRK. I started learning progamable languages when I saw how fun was to build an app that would open a door. I know it's funny how did u get from opening a door to developing websites, hang around and you will know more.",
  paragraphTwo:
    'When it comes to technology I’m most interested in using the power of programmatic language to give users new verbs: using code to empower people to do new amazing things. Code is pretty much the magic of our time and I would love being a modern day wizard!',
  paragraphThree:
    'When I am not working or coding I like to inform myself about what I could improve on my car and how can I DYI it, how car industry is moving, what are the new trends of the stock market.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.PNG',
    title: 'Face Recognition',
    info:
      'The aplication was buildt using React and is connected to the backend using node.js/Express.js and for database I used postgress.',
    info2:
      "In order to make it work you will create an account, doesn't need to be a true email and you won't receive emails or anything. After that just insert the link of an image that has a portrait and detect it.",
    url: 'https://rrosann.github.io/facerecognition/',
    repo: 'https://github.com/RROSANN/facerecognition/tree/master', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.PNG',
    title: 'Multiplication Table',
    info:
      'It is a simple fun app that will test your multiplication table, check it and tell me what score did you got',
    info2:
      'The app was created for my little brother to find a more exiting way to learn it, it was buildt with plain javascript, sorry for the ugly colors, I am just not a designer and don t know how to make colors go well toghether...I am sorry u have to see my poor design skills',
    url: 'https://rrosann.github.io/multiplication-table/',
    repo: 'https://github.com/RROSANN/multiplication-table/tree/master', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ionut.rosan.96@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/IonutRosan1',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/rosan.ionut.96',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ionu%C8%9B-adrian-ro%C8%99an-030846146/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/RROSANN',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
