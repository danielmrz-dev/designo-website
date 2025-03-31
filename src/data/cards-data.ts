import { IFeatureCard } from "../app/interfaces/feature-card.interface";
import { ILocationCard } from "../app/interfaces/location-card.interface";
import { IProjectCard } from "../app/interfaces/project-card.interface";
import { IViewProjectCard } from "../app/interfaces/view-project-card.interface";

export const viewProjectCardsContent: IViewProjectCard[] = [
    {
        title: 'Web Design',
        image: 'home/mobile/image-web-design.jpg',
        link: 'web-design'
    },
    {
        title: 'App Design',
        image: 'home/mobile/image-app-design.jpg',
        link: 'app-design'
    },
    {
        title: 'Graphic Design',
        image: 'home/mobile/image-graphic-design.jpg',
        link: 'graphic-design'
    },
]

export const pageTitlesAndContent = [
    {
        title: 'Web Design',
        description: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
    },
    {
        title: 'App Design',
        description: 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'
    },
    {
        title: 'Graphic Design',
        description: 'We deliver eye-catching branding materials that are tailored to meet your business objectives.'
    },
]

export const featureCardsContent: IFeatureCard[] = [
    {
        image: 'home/desktop/illustration-passionate.svg',
        title: 'Passionate',
        paragraph: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.'
    },
    {
        image: 'home/desktop/illustration-resourceful.svg',
        title: 'Resourceful',
        paragraph: 'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.'
    },
    {
        image: 'home/desktop/illustration-friendly.svg',
        title: 'Friendly',
        paragraph: ' We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.'
    },
]

export const projectCardsInfo: IProjectCard[] = [
    {
        page: 'Web Design',
        image: "web-design/desktop/image-express.jpg",
        title: "Express",
        description: "A multi-carrier shipping website for ecommerce businesses."
    },
    {
        page: 'Web Design',
        image: "web-design/desktop/image-transfer.jpg",
        title: "Transfer",
        description: "Site for low-cost money transfers and sending money within seconds."
    },
    {
        page: 'Web Design',
        image: "web-design/desktop/image-photon.jpg",
        title: "Photon",
        description: "A state-of-the-art music player with high-resolution audio and DSP effects."
    },
    {
        page: 'Web Design',
        image: "web-design/desktop/image-builder.jpg",
        title: "Builder",
        description: "Connects users with local contractors based on their location."
    },
    {
        page: 'Web Design',
        image: "web-design/desktop/image-blogr.jpg",
        title: "Blogr",
        description: "Blogr is a platform for creating an online blog or publication."
    },
    {
        page: 'Web Design',
        image: "web-design/desktop/image-camp.jpg",
        title: "Camp",
        description: "Get expert training in coding, data, design, and digital marketing."
    },
    {
        page: 'App Design',
        image: "app-design/desktop/image-airfilter.jpg",
        title: "Airfilter",
        description: "Solving the problem of poor indoor air quality by filtering the air."
    },
    {
        page: 'App Design',
        image: "app-design/desktop/image-eyecam.jpg",
        title: "Eyecam",
        description: "Product that lets you edit your favorite photos and videos at any time."
    },
    {
        page: 'App Design',
        image: "app-design/desktop/image-faceit.jpg",
        title: "Faceit",
        description: "Get to meet your favorite internet superstar with the Faceit app."
    },
    {
        page: 'App Design',
        image: "app-design/desktop/image-todo.jpg",
        title: "Todo",
        description: "A todo app that features cloud sync with light and dark mode."
    },
    {
        page: 'App Design',
        image: "app-design/desktop/image-loopstudios.jpg",
        title: "Loopstudios",
        description: "A VR experience app made for Loopstudios."
    },
    {
        page: 'Graphic Design',
        image: "graphic-design/desktop/image-change.jpg",
        title: "Tim Brown",
        description: "A book cover designed for Tim Brown’s new release, ‘Change’."
    },
    {
        page: 'Graphic Design',
        image: "graphic-design/desktop/image-boxed-water.jpg",
        title: "Boxed Water",
        description: "A simple packaging concept made for Boxed Water."
    },
    {
        page: 'Graphic Design',
        image: "graphic-design/desktop/image-science.jpg",
        title: "Science!",
        description: "A poster made in collaboration with the Federal Art Project."
    }
];

export const locationCardInfo: ILocationCard[] = [
    {
        image: 'shared/desktop/illustration-canada.svg',
        location: 'Canada'
    },
    {
        image: 'shared/desktop/illustration-australia.svg',
        location: 'Australia'
    },
    {
        image: 'shared/desktop/illustration-united-kingdom.svg',
        location: 'United Kingdom'
    },
    
]


