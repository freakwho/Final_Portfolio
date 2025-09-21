import user_image from './user-image.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.jpeg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import top_arrow from './TopArrow.png';
import xampp from './xampp.png';
import vercel from './vercel.png';
import helpdesk_icon from './helpdesk-icon.png';
import developer_icon from './developer-icon.png';
import language_icon from './language-icon.png';
import solving_icon from './solving-icon.png';
import communication_icon from './communication-icon.png';
import patience_icon from './patience-icon.png';
import customer_icon from './customer-icon.png';
import certification_icon from './certification-icon.png';
import sayap from './public/Sayap-Mas-Utama.png';
import eka from './public/Ekanuri.png';
import mina from './public/Pertamina-University.png';
import recep from './public/recep.png';
import cctv from './public/cctv.png';
import career from './public/career.png';
import realize from './public/realize.png';
import doubt from './public/doubt.png';
import fight from './public/fight.png';
import hope from './public/hope.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    top_arrow,
    xampp,
    vercel,
    helpdesk_icon,
    developer_icon,
    language_icon,
    solving_icon,
    communication_icon,
    patience_icon,
    customer_icon,
    certification_icon,
    sayap,
    eka,
    mina,
    recep,
    cctv,
    career,
    realize,
    doubt,
    fight,
    hope,
};

export const workData = [
    {
        title: 'Frontend project',
        bgImage: '/work-3.png',
        link: 'https://startup-nextjs-main-eta.vercel.app/',
    },
    {
        title: 'Portfolio',
        bgImage: '/work-4.png',
        link: 'https://portfolio-tau-amber-46.vercel.app/',
    }
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js, TypeScript, PHP' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Bachelor of Informatics Engineering' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 3 projects' }
];

export const security = [
    { icon: assets.language_icon, title: 'Languages', description: 'Indonesian - Active, English - Passive' },
    { icon: assets.certification_icon, title: 'Certification', description: 'Gada Pratama' },
    { icon: assets.project_icon, title: 'Experience', description: 'Have worked in 3 different places' }
];

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Create a website with a design that looks good, attractive, and unique', link: 'https://en.wikipedia.org/wiki/Web_design' },
    { icon: assets.developer_icon, title: 'Web Development', description: 'Complete website development with good responsiveness, user friendly and easy to use', link: 'https://en.wikipedia.org/wiki/Web_development' },
    { icon: assets.helpdesk_icon, title: 'IT Support', description: 'Fix your computer problems, such as configuration hardware and software installation etc', link: 'https://en.wikipedia.org/wiki/Help_desk' }
]

export const securityService = [
    { icon: assets.solving_icon, title: 'Problem-Solving', description: 'The ability to analyze situations, make quick decisions, and find effective solutions.', link: 'https://en.wikipedia.org/wiki/Problem_solving' },
    { icon: assets.communication_icon, title: 'Communication', description: 'The ability to clearly and effectively convey information verbally and in writing. ', link: 'https://en.wikipedia.org/wiki/Communication' },
    { icon: assets.patience_icon, title: 'Patience and Composure', description: 'The ability to remain calm and composed under pressure.', link: 'https://en.wikipedia.org/wiki/Patience' },
    { icon: assets.customer_icon, title: 'Customer Service', description: 'Professional and approachable demeanor when interacting with the public', link: 'https://en.wikipedia.org/wiki/Customer_service' }
]

export const minaHead = [
    { company: 'Pertamina University', vendor: 'Pertamina Training and Consulting', date: 'August 2016 - December 2020' },
]

export const minaBody = [
    { icon: assets.mina, description: 'Organizing security in the Pertamina University environment in accordance with the main duties of SATPAM such as : Regulation, Guards, Escorts, and Patrols. Also carrying out functions as CCTV Operators and Receptionists' },
    { icon: assets.cctv, description: 'As a CCTV Operator : Monitor CCTV in the control room, Coordinate CCTV network issues with the IT department, Back up incident data, and Create incident reports' },
    { icon: assets.recep, description: 'As a Receptionist : Welcome guests with a smile, greeting, and courtesy, Identify guest needs and permissions in detail, Refuse guests who do not have permission, Coordinate guests with relevant parties by phone, and Coordinate packages with package owners' },
]

export const securityExperience = [
    { icon: assets.eka, company: 'Ekanuri Shorebase', vendor: 'Sinar Prapanca', date: 'October 2021 - June 2023', description: 'Maintaining security in the Ekanuri Shorebase Kalijapat environment in accordance with the main duties of the Security Guard, such as: Enforcing regulations, Checking the requirements and travel permits of incoming vendors, such as Personal Protective Equipment (PPE), antigen tests, and vehicle checklists. Entering incoming vendor data. Patrolling the dock area, and Escorting reach stackers and cranes moving locations in Kalijapat' },
    { icon: assets.sayap, company: 'Sayap Mas Utama', vendor: 'Delta Gada Persada', date: 'July 2023 - September 2025', description: 'Enforce regulations according to SOPs that apply to employees. Carrying out inspections of arriving guests, such as body checks, travel documents, etc. Enter vendor data that has been entered into E-Checkpoint system. Monitor incoming and outgoing two-wheeled and four-wheeled vehicles. Patrol the entire area of ​​Sayap Mas Utama 2. Guard and supervise each post ' }
]

export const developerExperience = [
    { head: 'Bootcamp Web Development', date: 'Purwadhika August 2024 - May 2025', body1: 'Implementing Advanced CSS such as Position, Media Queries, Animation, and Gradients', body2: 'Implementing State Management and Server-Side Rendering', body3: 'Implementing REST API, CRUD Database, and ORM Database, Authentication & Authorization', body4: 'Implementing Object-Oriented Programming' },
    { head: 'Junior Web Developer Trainig Program', date: 'BNSP Januari 2024', body1: 'Implementing programming language execution commands, Text-based, greyscale, and multimedia', body2: 'Implementing User Interfaces & Implementing Structured Programming' }
]

export const theTruth = [
    { icon: assets.career, title: 'Truth', description: 'As you can see, I have been a security guard for a long time, but as a recent IT graduate, I wanted to change my career path to programming, or at least work in that field.' },
    { icon: assets.realize, title: 'Realize', description: ' I knew, it might be too late for me to change my career path, as I only graduated with a computer science degree at the age of 28.' },
    { icon: assets.doubt, title: 'Doubt', description: ' At first, I was very doubtful about myself, graduating late compared to my peers, and the current situation in my country, but I knew, "Nothing will happen if we do not try."' },
    { icon: assets.fight, title: 'Fight', description: ' So, here I am, still trying, learning, and striving for the best. Because I promised myself, "I do not care how long it takes to become what I want to be, even if I fail, quit, or fall, I have to get up and fight again."' },
    { icon: assets.hope, title: 'Hope', description: ' And if you are interested in offering me a chance at a better job, please let me know.' }
]

export const toolsData = [
    assets.vscode, assets.git, assets.xampp, assets.vercel,
];