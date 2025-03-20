import tuncampus from '../assets/TUM_CAMPUS_LIFE.jpg';
import tumProgramm from '../assets/TUM_PROGRAMMES.jpg'
import research from '../assets/TUM_RESEARCH.jpg'
import tmy from '../assets/TUMY.jpeg'
import tumx from '../assets/TUMX.jpg'
import tuma from '../assets/TUMA.jpg'
import tume from '../assets/TUME.jpg'
import banner from '../assets/banner1.jpg'
import tum_tn2412085 from'../assets/tum_tn2412085.jpg'
import tum_tn2412086 from'../assets/tum_tn2412086.jpg'
import tum_tn2412087 from'../assets/tum_tn2412087.jpeg'
import tum_tn2501003 from'../assets/tum_tn2501003.jpg'
import TN2501004 from'../assets/TUM_TN2501004.jpg'
import TUM_TN2501005 from'../assets/TUM_TN2501005.jpg'
import TUM_TN2501006 from'../assets/TUM_TN2501006.jpg'
import TUM_TN2501007 from'../assets/TUM_TN2501007.jpg'
import TUM_TN2501008 from'../assets/TUM_TN2501008.jpg'
import TUM_TN2501009 from'../assets/TUM_TN2501009.jpg'
import TUM_TN2501010 from'../assets/TUM_TN2501010.jpg'
import TUM_TN2501012 from'../assets/TUM_TN2502011.jpg'
import TUM_TN2501013 from'../assets/TUM_TN2502012.jpg'
import TUM_TN2501014 from'../assets/TUM_TN2502013.jpg'
import TUM_TN2501015 from'../assets/TUM_TN2502014.jpg'
import TUM_TN2501016 from'../assets/TUM_TN2502015.jpg'
import TUM_TN2501017 from'../assets/TUM_TN2502017.jpg'
import TUM_TN2501018 from'../assets/TUM_TN2502019 (1).jpg'
import TUM_TN2501019 from'../assets/TUM_TN2502019.jpg'
import TUM_TN2501020 from'../assets/TUM_TN2502021 (1).jpg'
import TUM_TN2501021 from'../assets/TUM_TN2502021.jpg'
import TUM_TN2501022 from'../assets/TUM_TN2502022.jpg'
import TUM_TN2501023 from'../assets/TUM_TN2502023.jpg'
import TUM_TN2501024 from'../assets/TUM_TN2503024.jpg'
import TUM_TN2501025 from'../assets/TUM_TN2503025.jpeg'
import TUM_TN2501026 from'../assets/TUM_TN2503027.jpeg'


import hero1 from '../assets/hero1.jpg'; 
import hero2 from '../assets/hero2.jpg'; 
import hero3 from '../assets/hero3.jpg'; 
import hero4 from '../assets/hero4.jpg';

export const images = [
  { src: tuncampus },
  { src: tumProgramm },
  { src: research },
  { src: tmy },
  { src: tumx },
  { src: tuma },
  { src: tume }
]
export const univerityInfo = [
  { src:'',heading: "WELCOME TO OUR UNIVERSITY", description: "In 2013 Mombasa Polytechnic University College (MPUC) transitioned to the Technical University of Mombasa- a fully-fledged University. The University has FIVE well-established Schools and two Institutes namely; School of Applied and Health Sciences, School of Engineering and Technology, School of Humanit...",buttonInfo:"Read More" },
  { src:tumProgramm,heading: "PROGRAMMES", description:"Walking with you all the way to create new paths where none exist",buttonInfo:" View Programmes" },
  { src:research,heading: "RESEARCH", description: "The greatest attraction was a solar-powered hydroponic system designed specifica....",buttonInfo:"Read More" },
  { src:tmy,heading: "CAMPUS LIFE", description: "Technical University of Mombasa takes pride in its Vision as a University of ..",buttonInfo:"Read More" },
  
]

export const menuItems = [
  { name: "Home", link: "#", children: [] },
  {
    name: "About",
    link: "#",
    children: [
      { name: "Our Philosophy", link: "" },
      { name: "Historical Background", link: "" },
      { name: "Governance Structure", link: "" },
      { name: "Council Members", link: "" },
      { name: "UMB Members", link: "" },
      { name: "Senate Members", link: "" },
      { name: "Division of ARE", link: "" },
      { name: "Division of AFP", link: "" },
    ],
  },
  {
    name: "Academics",
    link: "#",
    children: [
      { name: "Schools", link: "#", children: [  { name: "School of Applied and Health Sciences", link: "" },{ name: "School of Business", link: "" },{ name: "School of Engineering and Technology", link: "" },{ name: "School of Humanity and Social Studies", link: "" },{ name: "Institute of Computing and Informatics", link: "" },] },
      { name: "Institute", link: "#", children: [  { name: "Institute of Computing and Informatics", link: "" }, { name: "TVET Institute", link: "" },] },
      { name: "Programmes", link: "#", children: [ { name: "UnderGraduate", link: "" },{ name: "Diploma", link: "" },{ name: "Certificate", link: "" },{ name: "Short Courses", link: "" },] },
    ],
  },
  { name: "Research", link: "#", children: [] },
  {
    name: "PORTALS",
    link: "#portals",
    children: [
      { name: "Staffs Portal", link: "/staffs",children:[   { name: "Intranet", link: "/intranet" },{ name: "HR Portal", link: "/hr" },] },
      { name: "E-Learning", link: "elearning" },
      { name: "Industrial Attachment", link: "/iattachment" },
      { name: "Online Clearance", link: "/onlineclearance" },
      { name: "TUMMIS", link: "/tummis" },
      { name: "CAMPUS LIFE", link: "/campuslife" },
    ],
  },
  { name: "Campus Life", link: "#", children: [] },
  { name: "Media Desk", link: "#", children: [{ name: "News", link: "" },{ name: "Events", link: "" },{ name: "Noticeboard", link: "" },{ name: "Downloads", link: "" },{ name: "FAQs", link: "" },] },
];

export const footerData = [
  {
    title: "Contact Us",
    details: [
      "Tom Mboya Street Tudor, Msa",
      "P.O Box 90420-80100 MSA",
      "Tel: +254733955377",
      "+254208095368 / +254208095365",
      "Email: info@tum.ac.ke",
    ],
    icons: ["facebook", "twitter", "youtube"],
  },
  {
    title: "Student Resources",
    links: ["E-Learning", "E-Registrar", "HEF Portal", "Student Mail"],
  },
  {
    title: "Staff Resources",
    links: ["HR Portal", "KENET Web Conference", "Staff Mail", "Staff Portal", "Staff Profiles"],
  },
  {
    title: "Important Links",
    links: ["Career Opportunities", "Contracts Awarded", "Service Delivery Charter", "Suppliers", "Tenders"],
  },
];
//news section
export  const newsItems = [
  {
    id: 1,
    image: TUM_TN2501025,
    title: "TUM alumni shine at the LampArt Short Fi...",
    author: "SALIM",
    date: "Mar 09, 2025",
  },
  {
    id: 2,
    image:  TUM_TN2501023,
    title: "TUM commemorates World Engineering Day",
    author: "SALIM",
    date: "Mar 05, 2025",
  },
  {
    id: 3,
    image:TUM_TN2501024,
    title: "CUE auditors give TUM's School of Medici...",
    author: "SALIM",
    date: "Feb 28, 2025",
  },
];

export const events = [
  { date: "02 Dec", title: "KUPAA FESTIVAL FESTIVALS", time: "08:00 AM - 05:00 PM", location: "TUM" },
  { date: "02 Dec", title: "UHAI FESTIVAL", time: "08:00 AM - 12:02 AM", location: "TUM" },
  { date: "01 Jan", title: "E-Registrar First Year Student Orientation", time: "09:00 AM - 3:00PM", location: "Virtual" },
  { date: "01 Oct", title: "Training schedule on the use of e-registrar", time: "08:00 AM - 04:00 PM", location: "TUM Main Campus" },
  { date: "01 Dec", title: "6th Graduation Ceremony 2018", time: "08:00 AM - 01:00 PM", location: "Football Lower Pitch" },
];

export const notices = [
  "INTERNAL AUDITOR JOB ADVERTISEMENT",
  "INSURANCE LETTERS JANUARY-APRIL 2025",
  "TUM ADVERTISEMENT FOR PROGRAMMES",
  "ENVIRONMENTAL AND SOCIAL IMPACT ASSESSMENT REPORT",
  "INTERNAL AUDITOR JOB ADVERTISEMENT - EXTENSION",
];

export const heropicture=[
  {id:1,src:TUM_TN2501019},
  {id:2,src:hero1},
  {id:3,src:hero2},
  {id:3,src:hero3},
  {id:3,src:hero4}
]

export const newsData = [
  {
    id: 1,
    title: "TUM women's hostel in new look...",
    image: "https://via.placeholder.com/300",
    date: "Mar 17, 2025",
  },
  {
    id: 2,
    title: "Wilhelmsen Marine Personnel Ke...",
    image: "https://via.placeholder.com/300",
    date: "Mar 17, 2025",
  },
  {
    id: 3,
    title: "TUM alumni shine at the LampAr...",
    image: "https://via.placeholder.com/300",
    date: "Mar 09, 2025",
  },
  {
    id: 4,
    title: "TUM commemorates World Enginee...",
    image: "https://via.placeholder.com/300",
    date: "Mar 05, 2025",
  },
  {
    id: 5,
    title: "CUE auditors give TUM's School...",
    image: "https://via.placeholder.com/300",
    date: "Feb 28, 2025",
  },
  {
    id: 6,
    title: "Mazrui Complex and Medical Eng...",
    image: "https://via.placeholder.com/300",
    date: "Feb 24, 2025",
  },
  {
    id: 7,
    title: "SGS lauds TUM for sustaining i...",
    image: "https://via.placeholder.com/300",
    date: "Feb 22, 2025",
  },
  {
    id: 8,
    title: "TUM Signs MOU With Comoros Mar...",
    image: "https://via.placeholder.com/300",
    date: "Feb 17, 2025",
  },
  // Extracted news items
  {
    id: 9,
    title: "TUM Shines at the Kenya Univer...",
    image: "https://via.placeholder.com/300",
    date: "Feb 17, 2025",
  },
  {
    id: 10,
    title: "TUM donates 207 units of blood...",
    image: "https://via.placeholder.com/300",
    date: "Feb 16, 2025",
  },
  {
    id: 11,
    title: "Former TUM students showcase t...",
    image: "https://via.placeholder.com/300",
    date: "Feb 14, 2025",
  },
  {
    id: 12,
    title: "TUM starts orienting its staff...",
    image: "https://via.placeholder.com/300",
    date: "Feb 07, 2025",
  },
  {
    id: 13,
    title: "TUM Launches 3-Day Community O...",
    image: "https://via.placeholder.com/300",
    date: "Feb 05, 2025",
  },
  {
    id: 14,
    title: "Prof Gichangi inducts TROPIMUN...",
    image: "https://via.placeholder.com/300",
    date: "Feb 04, 2025",
  },
  {
    id: 15,
    title: "Renewable energy program monit...",
    image: "https://via.placeholder.com/300",
    date: "Jan 31, 2025",
  },
  {
    id: 16,
    title: "TUM Hosts Delegation From Indo...",
    image: "https://via.placeholder.com/300",
    date: "Jan 31, 2025",
  },
  {
    id: 17,
    title: "Hundreds Grace TUM's Open Day ...",
    image: "https://via.placeholder.com/300",
    date: "Jan 28, 2025",
  },
  {
    id: 18,
    title: "Rector of Estonia’s Tallinn ...",
    image: "https://via.placeholder.com/300",
    date: "Jan 27, 2025",
  },
  {
    id: 19,
    title: "KMA lauds TUM for quality trai...",
    image: "https://via.placeholder.com/300",
    date: "Jan 22, 2025",
  },
  {
    id: 20,
    title: "TUM marines domineer EA in rug...",
    image: "https://via.placeholder.com/300",
    date: "Jan 17, 2025",
  },
];