'use client';
import React, { useEffect, useState } from 'react';
import Recipe from '@/components/Recipe';

const ResultClient = () => {
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

export default ResultClient;
