import Image from "next/image";
import Nav from "@/components/Nav";
import Banner from "@/components/Banner";
import Recipe from "@/components/Recipe";


export default function Home() {
  return (
    <main className="bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300">
      <Nav />
      <Banner/>
      <Recipe />
    </main>
  );
}
