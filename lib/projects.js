import MoneyTxn from "../app/assets/projects/MoneyTXN.png"
import VectorFlow from "../app/assets/projects/Vector.png"
import TriggerHub from "../app/assets/projects/TriggerHub3.png"
import NetflixGPT from "../app/assets/projects/NetflixGPT.png"
import Blog from "../app/assets/projects/Blog.png"
import Exchange from "../app/assets/projects/Exchange.png"
import Artistly from "../app/assets/projects/Artistly.png"
import Stream from "../app/assets/projects/Stream.png"
import Vettedge from "../app/assets/projects/Vettedge.png"
import DappA from "../app/assets/projects/DappA.png"
import MiniNUA from "../app/assets/projects/MiniNUA.png"
export const projects = [
    {
        id: 1,
        title: "MoneyTXN (Fullstack)",
        link: "#",
        demo: "https://youtu.be/kPnwJ3iTnn8",
        tech: "TypeScript, Next.js, Node.js, PostgreSQL, Tailwind CSS, Zod, NextAuth.js",
        desc: "Engineered a secure fintech platform enabling atomic P2P and merchant transactions. Implemented role-based access control (RBAC) and a webhook-driven banking on-ramp capable of processing 10K+ daily events. Utilized SQL locks and Prisma transactions to guarantee data integrity and prevent double-spending.",
        image: MoneyTxn,
        gitHub: "https://github.com/Amitaarav/MoneyTxn",
        delay: 0.8
    },
    {
        id: 2,
        title: "TriggerHub: Workflow Automation (Fullstack)",
        link: "#",
        demo: "https://youtu.be/jo1lq8KTzI4",
        tech: "Node.js, Next.js, TypeScript, Postgres, Kafka, ReactFlow, solana/web3.js, Tailwind CSS, nodemailer",
        desc: "Architected an event-driven automation platform for high-volume webhook processing. Features a drag-and-drop workflow builder via React Flow and a resilient Kafka-based pipeline ensuring 99.99% message delivery reliability across 100K+ daily triggers.",
        gitHub: "https://github.com/Amitaarav/TriggerHub",
        image: TriggerHub,
        delay: 0.4
    },
    {
        id: 3,
        title: "NetflixGPT: AI-Powered Discovery",
        link: "#",
        demo: "#",
        tech: "React, Redux Toolkit, Firebase, TMDb API, Tailwind CSS",
        desc: "Developed an immersive movie discovery interface combining real-time TMDb data with GPT-powered semantic search. Integrated Firebase authentication and hosting, delivering personalized recommendations and multilingual support in a responsive, Netflix-inspired UI.",
        gitHub: "https://github.com/Amitaarav/NetflixGPT",
        image: NetflixGPT,
        delay: 0.2

    },
    {
        id: 4,
        title: "BlogSphere: Edge-Optimized Platform",
        link: "#",
        demo: "#",
        tech: "Hono (Edge), Prisma Accelerate, JWT, React, Vite, Redux, Tailwind CSS",
        desc: "Built a high-performance blogging engine using Cloudflare Workers and Hono for edge deployment. Leveraged Prisma Accelerate for optimized database queries, ensuring sub-100ms response times. Features include secure JWT authentication, rich text editing, and image management.",
        gitHub: "https://github.com/Amitaarav/BlogWeb",
        image: Blog,
        delay: 0.2

    },
    {
        id: 5,
        title: "Real-Time Exchange Platform",
        link: "#",
        demo: "#",
        tech: "TypeScript, Express.js, Redis, WebSockets, TimescaleDB",
        desc: "Designed a high-frequency trading engine supporting 10K+ orders/sec with <50ms latency. Implemented Redis Pub/Sub for rapid order matching and WebSockets for live market data feeds, backed by TimescaleDB for time-series analytics.",
        gitHub: "https://github.com/Amitaarav/exchange-app",
        image: Exchange,
        delay: 0.6
    },
    {
        id: 6,
        title: "Vector Shift Automation",
        link: "#",
        demo: "https://youtu.be/l8Y3n6ZQrgo",
        tech: "JavaScript, Reactjs, React-flow, Fast-API",
        desc: "Created a visual workflow automation tool for analyzing graph-based systems. Used React Flow for dynamic node-link diagrams and FastAPI for backend logic, enabling real-time counting and validation of complex graph structures.",
        gitHub: "https://github.com/Amitaarav/vectorshift-workflow",
        image: VectorFlow,
        delay: 0.6
    },
    {
        id: 7,
        title: "Artistly.com (Frontend)",
        link: "https://artistly-com-abof.vercel.app/",
        demo: "#",
        tech: "Next.js (App Router), React, Tailwind CSS, shadcn/ui, React Hook Form, Zod",
        desc: "Developed a pixel-perfect, responsive frontend for an artist booking platform. Utilized modern React patterns, Shadcn UI components, and Zod validation to creating a seamless booking experience and scalable codebase.",
        gitHub: "https://github.com/Amitaarav/artistly.com",
        image: Artistly,
        delay: 0.6
    },
    //     {
    //     id: 8,
    //     title: " Stream Deduplication Service (Backend)",
    //     link: "#",
    //     demo:"#",
    //     tech:"Java 11, Maven, JUnit 5, Mockito, SOLID Principles",
    //     desc: "Constructed a scalable backend service to resolve content duplication. Applied SOLID principles and design patterns (Strategy, Factory) to ensure algorithm flexibility and maintainability.",
    //     gitHub:"https://github.com/Amitaarav/17LiveAssignment-1",
    //     image: Stream,
    //     delay:0.6
    // },
    {
        id: 9,
        title: "User Access Management System",
        link: "#",
        demo: "#",
        tech: "Node.js, Express.js, PostgreSQL, TypeORM, JWT, React, Tailwind CSS",
        desc: "Implemented a robust RBAC system for internal tool security. Features comprehensive audit logging, secure JWT authentication, and a clean architecture design ensuring scalable user management.",
        gitHub: "https://github.com/Amitaarav/Software-Access-Manager",
        image: Stream,
        delay: 0.6
    },
    {
        id: 10,
        title: "Vettedge: Modular AI Dashboard",
        link: "https://vettedge.vercel.app/",
        demo: "#",
        tech: "Next.js 13 App Router, React 19, Tailwind CSS, Framer Motion, Lucide",
        desc: "Designed a modular frontend architecture for an enterprise AI platform. Utilized Framer Motion for fluid interactions and component-based design to showcase services like TalentPersona and DeepVet.",
        gitHub: "https://github.com/Amitaarav/skillsCapital",
        image: Vettedge,
        delay: 0.5
    },
    {
        id: 11,
        title: "Solana Wallet dApp",
        link: "https://dapp-a.vercel.app/",
        demo: "#",
        tech: "React, Tailwind CSS, Solana Wallet Adapter, Solana Web3.js",
        desc: "Built a fully functional Web3 wallet dApp integrating Solana Wallet Adapter. Enables seamless wallet connection, SOL airdrops, balance checks, and secure on-chain token transfers on the Devnet.",
        gitHub: "https://github.com/Amitaarav/DappA",
        image: DappA,
        delay: 0.4
    },
    {
        id: 12,
        title: "MiniNUA E-commerce",
        link: "https://mini-nua.vercel.app/",
        demo: "#",
        tech: "React 19, TypeScript, Vite, Redux Toolkit, Tailwind CSS 4",
        desc: "Developed a high-performance SPA e-commerce store with Redux Toolkit state management. Features category filtering, persistent cart state, optimized skeleton loading, and a responsive mobile-first design.",
        gitHub: "https://github.com/Amitaarav/MiniNUA",
        image: MiniNUA,
        delay: 0.3
    }
]