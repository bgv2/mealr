"use client"

import Image from "next/image";
import Nav from "@/components/Nav";
import Banner from "@/components/Banner";
import Recipe from "@/components/Recipe";
import Footer from "@/components/Footer";
import MealPlanResult from "@/components/MealPlanResult";
import { Button, CardActionArea, CardActions , Modal, Box} from '@mui/material';
import { useState } from 'react';



export default function Home() {
  const dietaryRestrictions = [
    "alcohol-free",
    "celery-free",
    "crustacean-free",
    "dairy-free",
    "DASH",
    "egg-free",
    "fish-free",
    "fodmap-free",
    "gluten-free",
    "immuno-supportive",
    "keto-friendly",
    "kidney-friendly",
    "kosher",
    "low-fat-abs",
    "low-potassium",
    "low-sugar",
    "lupine-free",
    "Mediterranean",
    "mollusk-free",
    "mustard-free",
    "no-oil-added",
    "paleo",
    "peanut-free",
    "pescatarian",
    "pork-free",
    "red-meat-free",
    "sesame-free",
    "shellfish-free",
    "soy-free",
    "sugar-conscious",
    "sulfite-free",
    "tree-nut-free",
    "vegan",
    "vegetarian",
    "wheat-free"
]
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
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 500,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };
  return (
    <main>
      <Nav />
      <Banner btnAction={handleOpen} />
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
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style} className='rounded'>
            <h6 className="text-2xl font-bold" id="modal-modal-title" variant="h6" component="h2">
            Let's get some info about you.
            </h6>
            <br/>
            <h6 className="text-lg font-bold" id="modal-modal-title" variant="h6" component="h2">
            Dietary Restrictions
            </h6>
            <p id="modal-modal-description" sx={{ mt: 2 }}>
              <ul >
                {dietaryRestrictions.map((restriction) => {
                  return <li>{restriction}</li>
                })}
              </ul>
            </p>
            </Box>
        </Modal>
        <Footer />
      </div>
    </main>
  );
}
