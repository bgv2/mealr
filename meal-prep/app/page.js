import Image from "next/image";
import Nav from "@/components/Nav";
import Banner from "@/components/Banner";
import Recipe from "@/components/Recipe";
import Footer from "@/components/Footer";
import MealPlanResult from "@/components/MealPlanResult";


export default function Home() {
  const exampleNutrition = <>
    <h3>Placeholder</h3>
    <table>
      <td style={{ fontWeight: "bold" }}>
        <tr>Calories</tr>
        <tr>Fat</tr>
        <tr>Carbs</tr>
        <tr>Protein</tr>
      </td>
      <td>
        <tr>&emsp;</tr>
        <tr>&emsp;</tr>
        <tr>&emsp;</tr>
        <tr>&emsp;</tr>
      </td>
      <td>
        <tr>50</tr>
        <tr>10g</tr>
        <tr>20g</tr>
        <tr>5g</tr>
      </td>
    </table>
  </>

  return (
    <main>
      <Nav />
      <Banner />
      <MealPlanResult />
      <div className="bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300">
        <h1 className="text-4xl font-extrabold m-5">Your Meal Plan</h1>
        <h2 className="text-2xl font-bold m-5">Sunday</h2>
        <div className="flex space-x-3">
          <Recipe food="Omelette" description="Eggs, cheese, spinach, ..." nutrition={exampleNutrition}
          url="https://www.allrecipes.com/thmb/fbq_xsA7uXpXZ9CG0ZsT4i70gGc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/284899spinach-omelette-with-leftover-mashed-potatoesKimKnott4x3-c616844b1ae3408eb3c6f0c0686327de.jpg" />
          <Recipe food="Pizza" description="Cheese, marinara sauce, flour, oil, ..."
            url="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
            nutrition={exampleNutrition}
          />
          <Recipe food="Pasta" description="Noodles, sauce, cheese, ..." nutrition={exampleNutrition} url="https://www.allrecipes.com/thmb/TLZs83FimfwATbwnpBKelVQ-elY=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/14385-pasta-salad-DDMFS-4x3-28eb5dbe00624780b36cabfef15ca183.jpg" />
        </div>
        <Footer />
      </div>
    </main>
  );
}
