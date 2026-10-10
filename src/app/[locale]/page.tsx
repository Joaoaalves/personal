import About from "@/components/site/about";
import Contact from "@/components/site/contact";
import Hero from "@/components/site/hero";
import Nav from "@/components/site/nav";
import Projects from "@/components/site/projects";
import SmoothScroll from "@/components/site/smooth-scroll";
import Stack from "@/components/site/stack";
import Story from "@/components/site/story";
import ParticleField from "@/components/three/particle-field";

export default function Home() {
    return (
        <>
            <SmoothScroll />
            <ParticleField />
            <div aria-hidden className="grain" />
            <Nav />
            <main className="relative z-10">
                <Hero />
                <About />
                <Story />
                <Projects />
                <Stack />
                <Contact />
            </main>
        </>
    );
}
