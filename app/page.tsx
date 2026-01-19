import Hero from "@/components/Hero";
import dynamic from "next/dynamic";

const Projects = dynamic(() => import("@/components/Projects"), {
  ssr: true,
  loading: () => <div className="h-96" />,
});
const Skills = dynamic(() => import("@/components/Skills"));
const Experience = dynamic(() => import("@/components/Experience"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}
