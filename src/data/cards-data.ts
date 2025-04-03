import { IFeatureCard } from "../app/interfaces/feature-card.interface";
import { ILocationCard } from "../app/interfaces/location-card.interface";
import { IProjectCard } from "../app/interfaces/project-card.interface";
import { IViewProjectCard } from "../app/interfaces/view-project-card.interface";

export const viewProjectCardsContent: IViewProjectCard[] = [
    {
        title: 'Web Design',
        imageMobile: 'home/mobile/image-web-design.jpg',
        imageTablet: 'home/tablet/image-web-design.jpg',
        imageDesktop: 'home/desktop/image-web-design-small.jpg',
        link: 'web-design'
    },
    {
        title: 'App Design',
        imageMobile: 'home/mobile/image-app-design.jpg',
        imageTablet: 'home/tablet/image-app-design.jpg',
        imageDesktop: 'home/desktop/image-app-design.jpg',
        link: 'app-design'
    },
    {
        title: 'Graphic Design',
        imageMobile: 'home/mobile/image-graphic-design.jpg',
        imageTablet: 'home/tablet/image-graphic-design.jpg',
        imageDesktop: 'home/desktop/image-graphic-design.jpg',
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

export const locationsUrls = {
    canada: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.21555459201!2d-79.5801433!3d43.64368345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3838d5a82ffb%3A0xc748b18e3e8b98e!2sEtobicoke%2C%20ON%20M9C%203J5%2C%20Canad%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1743516203298!5m2!1spt-BR!2sbr",
    australia: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217162.03857874978!2d152.5142520965058!3d-31.738919342663184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b75e430e915ad1d%3A0x1c0609b7ccd30f00!2sCoralville%20Nova%20Gales%20do%20Sul%202443%2C%20Austr%C3%A1lia!5e0!3m2!1spt-BR!2sbr!4v1743518318899!5m2!1spt-BR!2sbr",
    uk: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9884.21410326038!2d-3.881383798274301!3d51.732056328928515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e5867a4c5658f%3A0xf837c949fc975d7b!2sRhyd-y-fro%2C%20Pontardawe%2C%20Swansea%2C%20Reino%20Unido!5e0!3m2!1spt-BR!2sbr!4v1743518391366!5m2!1spt-BR!2sbr"

}

