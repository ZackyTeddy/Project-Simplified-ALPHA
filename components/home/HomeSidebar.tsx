"use client"

import React, { useState } from 'react'
import { Button } from '../ui/button'
import {user} from '../../utils/data'
import { Bug, Cable, CalendarDays, Cog, Component, FishSymbol, Grid3X3, Home, Inbox, Layers, Menu, Moon, Search, Sun, User, Users } from 'lucide-react'
import Link from 'next/link'
import { Input } from '../ui/input'
import { Separator } from '../ui/separator'
import { useTheme } from 'next-themes'
import { sidebarMainOptions, sidebarMiscOptions } from './SidebarOptions'

const HomeSidebar = () => {
    const [open, setOpen] = useState(false);
    const {theme, setTheme} = useTheme();


    return (
        <div className="w-16 dark:bg-neutral-900 bg-neutral-100 h-screen">
                <div className='flex flex-col justify-between space-y-4 dark:bg-neutral-800 bg-neutral-200 border-r rounded-r-lg shadow-lg h-full'>
                        <div className='flex flex-col justify-center items-center pt-2 pb-4 space-y-1 text-sm'>
                            <FishSymbol/>
                        </div>
                        <div className="flex flex-col justify-center items-center pt-2 pb-4 space-y-1 text-sm">
                            {
                                sidebarMainOptions.map((option, i) => 
                                    <div key={i} className="rounded-sm w-fit">
                                        <Link
                                        href={option.href}
                                        className="flex items-center p-2 space-x-3 rounded-md dark:hover:bg-neutral-900 hover:bg-neutral-300 group"
                                        key={i}
                                        >
                                        {option.icon}
                                        <span className="group-hover:scale-100 scale-0 dark:text-gray-100 rounded-sm shadow-md bg-neutral-300 dark:bg-neutral-800 p-2 m-2 min-w-max text-xs transition-all duration-100 absolute left-14 origin-left font-poppins">{option.title}</span>
                                        </Link>
                                    </div>
                                )
                            }
                        </div>
                        <div className="flex flex-col space-between justify-center items-center pt-2 pb-4 space-y-1 text-sm">
                            {
                                sidebarMiscOptions.map((option, i) => 
                                    <div key={i} className="rounded-sm">
                                        <Link
                                        href={option.href}
                                        className="flex items-center p-2 space-x-3 rounded-md dark:hover:bg-neutral-900 hover:bg-neutral-300 group"
                                        key={i}
                                        >
                                        {option.icon}
                                        <span className="group-hover:scale-100 scale-0 dark:text-gray-100 rounded-sm shadow-md bg-neutral-300 dark:bg-neutral-800 p-2 m-2 min-w-max text-xs transition-all duration-100 absolute left-14 origin-left font-poppins">{option.title}</span>
                                        </Link>
                                    </div>
                                )
                            }
                            <Button variant="ghost" size="icon" aria-label="Toggle Theme" className="group dark:hover:bg-neutral-900" 
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                                <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                                <span className="group-hover:scale-100 scale-0 dark:text-gray-100 rounded-sm shadow-md bg-neutral-300 dark:bg-neutral-800 p-2 m-2 min-w-max text-xs transition-all duration-100 absolute left-14 origin-left font-poppins">Toggle Theme</span> 
                            </Button>
                        </div>
                </div>
            </div>
    )
}

export default HomeSidebar