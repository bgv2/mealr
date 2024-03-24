import Image from "next/image";
import Nav from "@/components/Nav";
import Banner from "@/components/Banner";
import Recipe from "@/components/Recipe";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main>
      <Nav />
      <Banner/>
      <div className="bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300">
      <Recipe food = "Pizza" description="abcd" url="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"/>
      <Footer/>
      </div>
    </main>
  );
}
