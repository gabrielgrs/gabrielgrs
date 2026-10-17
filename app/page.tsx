import { Hero } from "./_components/hero";
import { Contact, Projects, Work } from "./_components/sections";

export default function Home() {
  return (
    <main className="p-3 text-[15px]">
      <Hero />
      <div className="mx-auto max-w-3xl pt-10 pb-6">
        <Work />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
