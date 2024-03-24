"use client";
import React from 'react'

const Banner = (props) => {
  return (
    <main className="m-3 grid w-full h-96 bg-img-1 bg-center">
    <div>
        <h1 className="text-4xl font-extrabold m-5">👋 Welcome to Mealr</h1>
        <p className="text-lg m-5 mt-0">Your meal-planning companion.</p>
        <button onClick={props.btnAction} className="m-5 mt-0 btn bg-black text-white hover:bg-gray-800 py-2 px-4 rounded transition-colors">Get started 🡢</button>
        </div>
    </main>
  )
}

export default Banner