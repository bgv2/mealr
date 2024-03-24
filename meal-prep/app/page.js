import Image from "next/image";
import Nav from "@/components/Nav";
import Setup from "@/components/Setup";
export default function Home() {
  return (
    <>
    <Nav /><main className="m-5 grid h-screen place-items-left"> <div>
      <h1 className="text-4xl font-extrabold m-5">👋 Welcome to Mealr</h1>
      <p className="text-lg m-5 mt-0">Your meal-planning companion.</p>
      <a className="m-5 mt-0 btn bg-black text-white hover:bg-gray-800 py-2 px-4 rounded transition-colors">Get started 🡢</a>
      </div></main>
      <Setup />
    </>
    
  );
}
