'use client';
import React from 'react';
import { useState } from 'react';

const Nav = () => {
    const [isClicked,setisClicked] = useState(false);
    const toggleNavbar = () => {
        setisClicked(!isClicked);
    }
  return (
    <>
        <nav className="bg-slate-800">
            <div className="max-2-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <a href="/">Logo</a>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4">
                            <a href="/" className="text-slate-200 hover:bg-slate-200 hover:text-slate-800 rounded-lg p-2">
                                Home
                            </a>
                            <a href="/" className="text-slate-200 hover:bg-slate-200 hover:text-slate-800 rounded-lg p-2">
                                Dashborad
                            </a>
                            <a href="/" className="text-slate-200 hover:bg-slate-200 hover:text-slate-800 rounded-lg p-2">
                                About
                            </a>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className={`inline-flex 
                                            justify-center
                                            rounded-md
                                            text-slate-200
                                            hover:text-slate-200 
                                             focus:outline-none focus:ring-2 focus:ring-slate-200
                                            `} onClick={toggleNavbar}>
                                    {isClicked ?(
                                <svg  className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor" >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"/>
                                </svg>)
                                    :(
                                <svg  className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 6h16M4 12h16m-7 6h7"/>
                                </svg> )   
                                } 

                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Nav