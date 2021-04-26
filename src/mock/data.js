import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'My Portfoilo', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome To My Potfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Desire',
  subtitle: 'Developer | Gamer | Cyber Enthusiast | Biker.',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Computer Science graduate student with a keen interest in Cyber Security and Software Development.',
  paragraphTwo: 'Enjoys Gaming, Anime, Riding Motorbikes, Reading and Learning. Game Dev hobbist',
  paragraphThree:
    ' Currently having working experience in Networking, Server Management, Elearning Platforms Wordpress Website Management and a bit of Programming in ReactJS and ASP.NET',
  resume: 'https://drive.google.com/file/d/1xPiZpAR6M6UNE97mh6Zh0xFRy2-6WXwr/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'poster.jpg',
    title: 'Movie App',
    info:
      'This Project is created in two parts Client-Side and Server-Side. The Clientside is created in ReactJS which is a frontend Javascript library. Its purpose is to display the popular movies fed to it by the TMDB api.',
    info2:
      ' Server-side created in .NET, This is where the movie database api is used to create routes that feed information to the clientside.',
    
    repo: 'https://github.com/Desire01/interview-coding-challenge', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Geo-Retro.jpg',
    title: 'Memory Card Game',
    info:
      'For the SpaceApps Challenge as part of the Geo-Retro Team we created a web and PC based matching game to test the player memory. Rating the user based on the number of moves they make.',
    info2:
      'Used as an Educative Aid for Kids to help sharpen their memory and also to help teach them about Earth and Space through images. It Also Contains a Pc Version that pretty much has the same concept except in this one we added the Educative component after playing the game.',
    url: 'https://georetro.netlify.app',
    repo: 'https://github.com/Desire01/geo-retro', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Survival Game',
    info:
      ' This is another side project am currently working on helping me learn more about Game Dev. ',
    info2: ' Game Preview will be coming soon ',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: ' Would you like to have a chat or maybe you have work for me?',
  btn: 'Lets Get Talking',
  email: 'desirelumene07@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Chiefov1',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/desire-lumene-010464151',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Desire01',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
