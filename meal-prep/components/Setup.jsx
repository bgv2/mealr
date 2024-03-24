'use client';
import React, { useState } from 'react';


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

const Setup = () => {
    const [restrictions, setRestrictions] = useState({});

    return (
        <>
            <h1 className="text-4xl font-extrabold m-5">Let's get some info about you.</h1>
            <form>
                <h2 className="text-2xl font-bold m-5">Dietary Restrictions</h2>
                {dietaryRestrictions.map((restriction) => {
                    return (
                        <>
                            <label key={restriction} className="">
                                {restriction}
                            </label>
                            <input type='checkbox' name={restriction} value={restriction} onChange={(e) => { setRestrictions({ ...restrictions, [restriction]: e.checked }) }} />
                        </>
                    );
                })}
            </form>
        </>
    );
}