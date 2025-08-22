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
        demo:"https://youtu.be/kPnwJ3iTnn8",
        tech:"TypeScript, Next.js, Node.js, PostgreSQL, Tailwind CSS, Zod, NextAuth.js",
        desc: "A secure fintech payment platform enabling atomic P2P and merchant transactions. Implements role-based auth via NextAuth.js, and a webhook-driven bank on-ramp system handling 10K+ events with SQL locks and Prisma transactions to ensure zero double-spend.",
        image: MoneyTxn,
        gitHub:"https://github.com/Amitaarav/MoneyTxn",
        delay:0.8
    },
    {
        id: 2,
        title: "TriggerHub: Workflow Automation (Fullstack)",
        link: "#",
        demo:"https://youtu.be/jo1lq8KTzI4",
        tech:"Node.js, Next.js, TypeScript, Postgres, Kafka, ReactFlow, solana/web3.js, Tailwind CSS, nodemailer",
        desc: "An event-driven automation platform to handle high-volume webhooks and task workflows. Features a visual React Flow UI for building workflows, secure user auth, and Kafka-based pipelines ensuring 99.99% message reliability across 100K+ daily events.",
        gitHub:"https://github.com/Amitaarav/TriggerHub",
        image: TriggerHub,
        delay:0.4
    },
    {
        id: 3,
        title:"NetflixGPT: AI-Powered Movie Discovery (Frontend + Firebase authentication)",
        link: "#",
        demo:"#",
        tech: "React, Redux Toolkit, Firebase, TMDb API, Tailwind CSS",
        desc: "An immersive, AI-driven movie streaming UI inspired by Netflix. NetflixGPT combines real-time recommendations, smart multilingual search powered by GPT, and dynamic video playback. Features include Firebase authentication, personalized movie lists, auto-playing trailers, and responsive design — all deployed seamlessly on Firebase Hosting. Users can discover movies in 10+ languages, with GPT-powered suggestions based on natural language queries.",
        gitHub:"https://github.com/Amitaarav/NetflixGPT",
        image: NetflixGPT,
        delay:0.2

    },
    {
        id: 4,
        title:"BlogSphere: Secure Full-Stack Blog Platform (Fullstack)",
        link: "#",
        demo:"#",
        tech: "Hono (Edge), Prisma Accelerate, JWT, React, Vite, Redux, Tailwind CSS",
        desc: "BlogSphere is a blazing-fast, secure blogging platform built using Cloudflare Workers with the Hono web framework and Prisma Client with Accelerate for edge-optimized data access. It enables seamless authentication, blog publishing, image upload stubs, and protected routes—all integrated with a modular frontend powered by React 18, Redux Toolkit, and Jodit Rich Text Editor.",
        gitHub:"https://github.com/Amitaarav/BlogWeb",
        image: Blog,
        delay:0.2

    },
    {
        id: 5,
        title: " Real-Time Exchange Platform (Backend)",
        link: "#",
        demo:"#",
        tech:"TypeScript, Express.js, Redis, WebSockets, TimescaleDB",
        desc: "Built a scalable crypto trading platform supporting 10K+ orders/sec with sub-50ms latency. Leveraged Redis Pub/Sub for trade matching and WebSocket-based live market feeds, integrated with TimescaleDB-powered analytics dashboards.",
        gitHub:"https://github.com/Amitaarav/exchange-app",
        image: Exchange,
        delay:0.6
    },
    {
        id: 6,
        title: " Vector Shift workflow automation (Fullstack)",
        link: "#",
        demo:"https://youtu.be/l8Y3n6ZQrgo",
        tech:"JavaScript, Reactjs, React-flow, Fast-API",
        desc: "A full-stack workflow automation tool designed to analyze and visualize graph-based systems. The application dynamically renders node-link diagrams using React Flow, allowing users to build custom workflows. It features backend integration via FastAPI to count and manage nodes and edges, enabling real-time updates, data persistence, and process validation. Optimized for scalability and modularity in handling complex graph structures.",
        gitHub:"https://github.com/Amitaarav/vectorshift-workflow",
        image: VectorFlow,
        delay:0.6
    },
    {
        id: 7,
        title: " Artistly.com (Frontend)",
        link: "https://artistly-com-abof.vercel.app/",
        demo:"#",
        tech:"Next.js (App Router), React, Tailwind CSS, shadcn/ui, React Hook Form, Zod, Context API",
        desc: "Artistly is a mobile-responsive frontend demo of a performing artist booking platform, developed as part of a frontend assessment. Built with modern React tooling and UI libraries, the app offers a polished and scalable foundation for integrating into a full-stack platform.",
        gitHub:"https://github.com/Amitaarav/artistly.com",
        image: Artistly,
        delay:0.6
    },
    //     {
    //     id: 8,
    //     title: " Stream Deduplication Service (Backend)",
    //     link: "#",
    //     demo:"#",
    //     tech:"Java 11, Maven, JUnit 5, Mockito, SOLID Principles, Strategy & Factory Design Patterns",
    //     desc: "A scalable and modular backend service built in Java to solve streamer duplication across multiple 17LIVE sections. The system ensures that no top-3 streamer appears in the top positions of more than one section, improving content diversity and user experience. Designed with clean architecture principles and optimized for flexibility, the service is ready for real-world deployment.",
    //     gitHub:"https://github.com/Amitaarav/17LiveAssignment-1",
    //     image: Stream,
    //     delay:0.6
    // },
        {
        id: 9,
        title: " User Access Management System (Fullstack)",
        link: "#",
        demo:"#",
        tech:"Node.js, Express.js, PostgreSQL, TypeORM, JWT, TypeScript, React, Tailwind CSS, React Hook Form, Context API, Vite",
        desc: "A full-fledged system designed to securely manage user access to internal software tools and services with robust authentication, role-based authorization, and audit logging. Built with clean architecture and enterprise-grade security practices.",
        gitHub:"https://github.com/Amitaarav/Software-Access-Manager",
        image: Stream,
        delay:0.6
    },
    {
        id: 10,
        title: "Vettedge : Modular AI Web App (Frontend)",
        link: "https://vettedge.vercel.app/",
        demo:"#",
        tech: "Next.js 13 App Router, React 19, Tailwind CSS, Framer Motion, Lucide",
        desc: "Designed a modular, scalable, and responsive frontend platform to showcase enterprise-grade AI and professional service components. Implemented animated and dynamic UI using Framer Motion, Tailwind CSS, and reusable component architecture. Includes service modules like TalentPersona, DeepVet, EnterpriseGrade, etc., with structured component directories.",
        gitHub: "https://github.com/Amitaarav/skillsCapital",
        image: Vettedge,
        delay: 0.5
    },
    {
        id: 11,
        title: "Solana Wallet dApp",
        link: "https://dapp-a.vercel.app/",
        demo: "#",
        tech: "React, Tailwind CSS, Solana Wallet Adapter, Solana Web3.js, Ed25519 (noble-curves)",
        desc: "Built a full-featured Solana Web3 dApp that enables wallet connection, requesting test SOL via airdrop, checking wallet balance, sending tokens, and signing messages. Integrated Wallet Adapter for multi-wallet support with autoConnect, built reusable, styled components using Tailwind and implemented SOL transfer and message signing with on-chain transaction logic. Fully functional on Devnet and optimized for wallet-based workflows.",
        gitHub: "https://github.com/Amitaarav/DappA",
        image: DappA,
        delay: 0.4
    },
    {
        id: 12,
        title: "MiniNUA — Mini E-commerce SPA",
        link: "https://mini-nua.vercel.app/",
        demo: "#",
        tech: "React 19, TypeScript 5, Vite 7, Redux Toolkit, Tailwind CSS 4, React Router DOM 7, Lucide Icons, Embla Carousel",
        desc: "A responsive, single-page e-commerce application consuming the Fake Store API. Features include category-based search, sorting, product detail pages, a persistent shopping cart, and a validated checkout flow. Implements Redux Toolkit for global state, localStorage-based caching for fast revisits, and skeleton loaders for improved UX. Designed with accessible navigation, keyboard support, and responsive layouts across devices.",
        gitHub: "https://github.com/Amitaarav/MiniNUA",
        image: MiniNUA,
        delay: 0.3
}    
]