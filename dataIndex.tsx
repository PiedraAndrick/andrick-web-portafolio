import { Github, Network, Mail, BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, LayoutGrid  } from "lucide-react";
export const socialNetworks = [
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/andrick-piedra-596117337/",
    },
    {
        id: 2,
        logo: <Mail size={30} strokeWidth={1} />,
        src: "https://mail.google.com/mail/?view=cm&fs=1&to=andrick@gmail.com&su=Contacto&body=Hola%20Andrick%2C%20te%20escribo%20por...",
    },
    {
        id: 3,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/PiedraAndrick",
    }
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 3,
        title: "Portafolio",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/portafolio",
    },
    {
        id: 4,
        title: "Experiencia",
        icon: <Network size={25} color="#fff" strokeWidth={1} />,
        link: "/experiencia",
    },
    {
        id: 5,
        title: "Tecnologias",
        icon: <LayoutGrid size={25} color="#fff" strokeWidth={1} />,
        link: "/tecnologias",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Backend Developer",
        subtitle: "Upwork",
        description: "Diseñar y escalar microservicios implementando una comunicación asíncrona con Kafka y caché con Redis para alto rendimiento, gestionando entregas con JIRA y asegurando confiabilidad en entornos distribuidos.",
        date: "May 2025",
    },
    {
        id: 2,
        title: "ChatBot Vocacional",
        subtitle: "Frelance Services",
        description: "Construcción de un chatbot vocacional para nuevos estudiantes, combinando flujos guiados (botones/menús) con NLP para ofrecer respuestas más precisas y útiles.",
        date: "May 2024",
    },
    {
        id: 3,
        title: "Backend Developer",
        subtitle: "iDRIX TECHNOLOGY",
        description: "Desarrollo de servicios backend con Express(Typescript) para aplicaciones web entregando soluciones robustas y escalables para distintos proyectos.",
        date: "Sep 2023",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 10,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 220,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 30,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export interface TechIcon { src: string; alt: string }
export interface ImageItem { src: string; alt?: string }
export interface PortfolioItem {
    id: number;
    images: ImageItem[];
    title?: string;        // los dejo opcionales por si quieres poner defaults
    description?: string;  // idem
    altText?: string;
    githubLink: string;
    techIcons?: TechIcon[];
}

export const porfolio: PortfolioItem[] = [
    {
        id: 1,
        images: [
            { src: "/ProjectoChatbot/img1.png", alt: "Pantalla inicio" },
            { src: "/ProjectoChatbot/img2.png", alt: "Dashboard" },
            { src: "/ProjectoChatbot/img3.png", alt: "Detalle" },
            { src: "/ProjectoChatbot/img4.png", alt: "Detalle" },
            { src: "/ProjectoChatbot/img5.png", alt: "Detalle" },
            { src: "/ProjectoChatbot/img6.png", alt: "Detalle" },
        ],
        title: "Chatbot Vocacional",
        description: "Desarrollo de chatbot Vocacional",
        altText: "Proyecto ejemplo",
        githubLink: "https://github.com",
        techIcons: [
            { src: "/Technologies/FastApi.png", alt: "FastAPI" },
            { src: "/Technologies/Angular.png", alt: "Angular" },
            { src: "/Technologies/Spacy.png", alt: "spaCy" },
        ],
    },
    {
        id: 2,
        images: [
            { src: "/ProjectoChatbot/img1.png", alt: "Pantalla inicio" },
            { src: "/ProjectoChatbot/img2.png", alt: "Dashboard" },
            { src: "/ProjectoChatbot/img3.png", alt: "Detalle" },
            { src: "/ProjectoChatbot/img4.png", alt: "Detalle" },
            { src: "/ProjectoChatbot/img5.png", alt: "Detalle" },
            { src: "/ProjectoChatbot/img6.png", alt: "Detalle" },
        ],
        title: "Proyecto 2",
        description: "Descripción breve del proyecto 2",
        altText: "Proyecto ejemplo",
        githubLink: "https://github.com",
        techIcons: [
            { src: "/window.svg", alt: "React" },
            { src: "/vercel.svg", alt: "Next.js" },
            { src: "/globe.svg", alt: "Node.js" },
        ],
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];