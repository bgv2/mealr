'use client';
import React, { use, useEffect, useState } from 'react';
import Recipe from '@/components/Recipe';

const Result = async () => {
    const [thisWeekMealPlan, setThisWeekMealPlan] = useState({
        Sunday: [],
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: []
    });

    useEffect(() => {
        const storedMealPlan = localStorage.getItem('thisWeekMealPlan');
        if (storedMealPlan) {
            setThisWeekMealPlan(JSON.parse(storedMealPlan));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('thisWeekMealPlan', JSON.stringify(thisWeekMealPlan));
    }, [thisWeekMealPlan]);

    for (let index = 1; index <= 3; index++) {
        let recipe = await fetch("/api/findrecipe" + new URLSearchParams({ health: "vegetarian" }));
        let recipeJson = await recipe.json();
        setThisWeekMealPlan((prevState) => ({
            ...prevState,
            Sunday: [...prevState.Sunday, recipeJson.hits[0], recipeJson.hits[1], recipeJson.hits[2]],
        }));
    }

    return (

        <>
            <h1>Your Meal Plan</h1>
            {Object.keys(thisWeekMealPlan).map((day) => (
                <>
                    <h2>{day}</h2>
                    {day.map((recipe) => (
                        <Recipe food={recipe.name}></Recipe>
                    ))}

                </>
            ))}
        </>
    );
}