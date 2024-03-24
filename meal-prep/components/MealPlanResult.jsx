'use client'
import React, { useEffect, useState } from 'react';
import Recipe from '@/components/Recipe';

const MealPlanResult = ({ initialMealPlan }) => {
  const [thisWeekMealPlan, setThisWeekMealPlan] = useState(initialMealPlan);

  useEffect(() => {
    localStorage.setItem('thisWeekMealPlan', JSON.stringify(thisWeekMealPlan));
  }, [thisWeekMealPlan]);

  return (
        <>
        {/* <h1>Your Meal Plan</h1> */}
        {thisWeekMealPlan && Object.keys(thisWeekMealPlan).map((day) => (
            <div key={day}>
            <h2>{day}</h2>
            {thisWeekMealPlan[day].map((recipe, index) => (
                <Recipe key={index} food={recipe.name} />
            ))}
            </div>
        ))}
        </>

  );
};

export async function getServerSideProps() {
  const initialMealPlan = { Sunday: [], Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: [], Saturday: [] };
  try {
    for (let index = 1; index <= 3; index++) {
      const recipe = await fetch("/api/findrecipe" + new URLSearchParams({ health: "vegetarian" }));
      const recipeJson = await recipe.json();
      initialMealPlan.Sunday.push(recipeJson.hits[0], recipeJson.hits[1], recipeJson.hits[2]);
    }
    return { props: { initialMealPlan } };
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return { props: { initialMealPlan } };
  }
}

export default MealPlanResult;

