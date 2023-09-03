import About from './pages/about/About'

import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaFileImage
} from 'react-icons/fa'

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/'
  },
  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about'
  },
  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio'
  },
  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact'
  }
]

export const personalInfo = [
  {
    id: 1,
    name: ' First Name :',
    description: 'Jahnathan'
  },
  {
    id: 2,
    name: ' Last Name :',
    description: 'Exantus'
  },
  {
    id: 3,
    name: ' age :',
    description: ' 39 Years'
  },
  {
    id: 4,
    name: ' Nationality :',
    description: ' Haitian'
  },
  {
    id: 5,
    name: ' Address :',
    description: ' 8171 Cloverglen Circle Olando, Fl 32818'
  },
  {
    id: 6,
    name: ' Email :',
    description: ' jahnathanexantus@gmail.com'
  },
  {
    id: 7,
    name: ' Languages :',
    description: ' English, Creole ,Spanish'
  }
]

export const stats = [
  {
    id: 1,
    no: ' 1-1/2 + :',
    title: ' Years of <br/> Experience'
  },
  {
    id: 2,
    no: ' 5+ :',
    title: ' Completed <br/> Projects'
  },
  {
    id: 2,
    no: ' 5+ :',
    title: ' Completed <br/> Projects'
  },
  {
    id: 2,
    no: ' 5+ :',
    title: ' Completed <br/> Projects'
  }
]

export const skills = [
  {
    id: 1,
    title: 'html',
    percentage: '25'
  },
  {
    id: 1,
    title: 'html',
    percentage: '25'
  },
  {
    id: 1,
    title: 'html',
    percentage: '25'
  },
  {
    id: 1,
    title: 'html',
    percentage: '25'
  },
  {
    id: 1,
    title: 'html',
    percentage: '25'
  },
  {
    id: 1,
    title: 'html',
    percentage: '25'
  },
  {
    id: 1,
    title: 'html',
    percentage: '25'
  },
  {
    id: 1,
    title: 'html',
    percentage: '25'
  }
]

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2018 -present',
    title: 'Full-stack <span>Envato</span>',
    desc: 'lorem ipsum kajg;kenf ;akjdgh;akejhf dafjgadfjgka slkgjs;kjg kjg'
  },
  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2018 -present',
    title: 'Full-stack <span>Envato</span>',
    desc: 'lorem ipsum kajg;kenf ;akjdgh;akejhf dafjgadfjgka slkgjs;kjg kjg'
  },
  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2018 -present',
    title: 'Full-stack <span>Envato</span>',
    desc: 'lorem ipsum kajg;kenf ;akjdgh;akejhf dafjgadfjgka slkgjs;kjg kjg'
  },
  {
    id: 4,
    category: 'education',
    icon: <FaBriefcase />,
    year: '2018 -present',
    title: 'Full-stack <span>Envato</span>',
    desc: 'lorem ipsum kajg;kenf ;akjdgh;akejhf dafjgadfjgka slkgjs;kjg kjg'
  },
  {
    id: 5,
    category: 'education',
    icon: <FaBriefcase />,
    year: '2018 -present',
    title: 'Full-stack <span>Envato</span>',
    desc: 'lorem ipsum kajg;kenf ;akjdgh;akejhf dafjgadfjgka slkgjs;kjg kjg'
  },
  {
    id: 6,
    category: 'education',
    icon: <FaBriefcase />,
    year: '2018 -present',
    title: 'Full-stack <span>Envato</span>',
    desc: 'lorem ipsum kajg;kenf ;akjdgh;akejhf dafjgadfjgka slkgjs;kjg kjg'
  }
]



export const portfolio = [
  {
    id:1,
    img:'work1',
    title: 'Photo Editing',
    details: [
      {
        
        title: 'Project :',
        desc: 'Photo'
      },
      {
        
        title: 'Project :',
        desc: 'Photo'
      },
      {
        
        title: 'Project :',
        desc: 'Photo'
      },
      {
       
        title: 'Project :',
        desc: 'Photo'
      },
      {
        
        title: 'Project :',
        desc: 'Photo'
      },
      {
        id:2,
        img:'work2',
        title:'Website Design',
        details: [
          {
            
            title:'Project',
            desc:'Website'
          },
          {
            
            title:'Project',
            desc:'Website'
          },
          {
            
            title:'Project',
            desc:'Website'
          },
          {
            
            title:'Project',
            desc:'Website'
          },
        ]
      }
    ]
  }
]
