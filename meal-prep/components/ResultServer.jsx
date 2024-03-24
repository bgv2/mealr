import React, { useEffect, useState } from 'react';
import Recipe from '@/components/Recipe';

const ResultServer = () => {
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
        const fetchData = async () => {
            for (let index = 1; index <= 3; index++) {
                let recipe = await fetch("/api/findrecipe" + new URLSearchParams({ health: "vegetarian" }));
                let recipeJson = await recipe.json();
                setThisWeekMealPlan((prevState) => ({
                    ...prevState,
                    Sunday: [...prevState.Sunday, recipeJson.hits[0], recipeJson.hits[1], recipeJson.hits[2]],
                }));
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <h1>Your Meal Plan</h1>
            {Object.keys(thisWeekMealPlan).map((day) => (
                <div key={day}>
                    <h2>{day}</h2>
                    {thisWeekMealPlan[day].map((recipe, index) => (
                        <Recipe key={index} food={recipe.name} />
                    ))}
                </div>
            ))}
        </>
    );
}

export default ResultServer;
