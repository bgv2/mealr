'use client';
import React, {useState} from 'react';


const dietaryRestrictions = [
    "alcohol-cocktail",
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

const Setup = () => {
    const [foodPrefs, setFoodPrefs] = useState({});
    return (
        <>
          <h1 className="text-4xl font-extrabold m-5">Let's get started.</h1>
          <p className="text-lg m-5 mt-0">This info will help Mealr find recipes that fit your needs.</p>
          <form>
            <label for="dietary-restrictions">First, select any dietary restrictions.</label>
            <option value="{restriction}">aaa</option>
            <select multiple name="restrictions-select" id="restrictions-select">
                {dietaryRestrictions.forEach((restriction) => {
                    <option value={restriction}>{restriction.charAt(0).toUpperCase + restriction.slice(1)}</option>
                })}
            </select>

          </form>
        </>
    );
}

export default Setup;