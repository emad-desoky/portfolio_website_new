import Head from "next/head";
import Approach from "@/components/approach/Approach";
import Clients from "@/components/clients/Clients";
import Experience from "@/components/experience/Experience";
import Footer from "@/components/footer/Footer";
import Grid from "@/components/grid/Grid";
import Hero from "@/components/hero/Hero";
import RecentProjects from "@/components/recentprojects/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <>
      <Head>
        <title>All-in Digital</title>
        <meta
          name="description"
          content="Modern & Minimalist JS Mastery Portfolio - Your Partner for Innovative Web Solutions"
        />
        <meta
          name="keywords"
          content="web development, digital agency, JavaScript, frontend, backend, full-stack, UX/UI design, SEO, branding, modern web solutions"
        />
        <meta name="author" content="All-in Digital Agency" />

        {/* Open Graph meta tags */}
        <meta
          property="og:title"
          content="All-in Digital | Web Development & Digital Solutions"
        />
        <meta
          property="og:description"
          content="All-in Digital is a modern web development agency specializing in cutting-edge technologies and design."
        />
        <meta property="og:image" content="/path-to-image/og-image.jpg" />
        <meta property="og:url" content="https://your-website-url.com" />

        {/* Twitter card meta tags */}
        <meta
          name="twitter:title"
          content="All-in Digital | Web Development & Digital Solutions"
        />
        <meta
          name="twitter:description"
          content="Innovative web development services by All-in Digital, creating custom websites, apps, and digital strategies for businesses."
        />
        <meta name="twitter:image" content="/path-to-image/twitter-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Viewport meta tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Head>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden max-auto sm:px-10">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProjects />
          <Clients />
          <Experience />
          <Approach />
          <Footer />
        </div>
      </main>
    </>
  );
}
