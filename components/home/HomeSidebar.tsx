"use client"

import React, { useState } from 'react'
import { Button } from '../ui/button'
import {user} from '../../utils/data'
import { Bug, Cable, CalendarDays, Cog, Component, Grid3X3, Home, Inbox, Layers, Menu, Search, User, Users } from 'lucide-react'
import Link from 'next/link'
import { Input } from '../ui/input'
import { Separator } from '../ui/separator'

const HomeSidebar = () => {
    const [open, setOpen] = useState(false);


    return (
        <div className="flex w-[60px] dark:bg-neutral-950 bg-neutral-100 h-full sticky">
            <div
                className={` ${
                open ? "w-60 absolute" : "w-20 "
                } flex flex-col h-full p-3 dark:bg-neutral-950 bg-neutral-100 shadow duration-300 z-50 border-r border`}
            >
                <div className='space-y-5 dark:bg-neutral-950 bg-neutral-100 h-full'>
                    <div className={`flex items-center ${open ? "" : "justify-center"} pl-1 mb-7`}>
                        <button onClick={() => setOpen(!open)}>
                            <Menu />
                        </button>
                        <h2 className={`${!open ? "hidden" : ""} text-xl pl-1 font-bold dark:text-white`}>Shortcuts </h2>
                    </div>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center py-4">
                            <button
                                type="submit"
                                className="p-2 focus:outline-none"
                            >
                                <Search />
                            </button>
                        </span>
                        <Input
                            type="search"
                            name="Search"
                            placeholder={` ${open ? "Coming soon..." : ""}`}
                            className={`${!open ? "" : "pl-10"} w-full py-2  text-sm rounded-md focus:outline-none`}
                            disabled={!open}
                        />
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                        <li className="rounded-sm">
                            <Link
                            href="/"
                            className="flex items-center p-2 space-x-3 rounded-md"
                            >
                            <Home/>
                            <span className={`${!open ? "hidden" : ""} dark:text-gray-100`}>Home</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link
                            href="/updates"
                            className="flex items-center p-2 space-x-3 rounded-md"
                            >
                            <Inbox />
                            <span className={`${!open ? "hidden" : ""} dark:text-gray-100`}>Updates</span>
                            </Link>
                        </li>
                        <Separator />
                        <li className="rounded-sm">
                            <Link
                            href="/teams"
                            className="flex items-center p-2 space-x-3 rounded-md"
                            >
                            <Users />
                            <span className={`${!open ? "hidden" : ""} dark:text-gray-100`}>Teams</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link
                            href="/layouts"
                            className="flex items-center p-2 space-x-3 rounded-md"
                            >
                            <Grid3X3 />
                            <span className={`${!open ? "hidden" : ""} dark:text-gray-100`}>Layouts</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link
                            href="/plans"
                            className="flex items-center p-2 space-x-3 rounded-md"
                            >
                            <Layers />
                            <span className={`${!open ? "hidden" : ""} dark:text-gray-100`}>Plans</span>
                            </Link>
                        </li>
                        <Separator />
                        <li className="rounded-sm">
                            <Link
                            href="/optimization"
                            className="flex items-center p-2 space-x-3 rounded-md"
                            >
                            <Cable />
                            <span className={`${!open ? "hidden" : ""} dark:text-gray-100`}>Optimization</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link
                            href="/bug"
                            className="flex items-center p-2 space-x-3 rounded-md"
                            >
                            <Bug />
                            <span className={`${!open ? "hidden" : ""} dark:text-gray-100`}>Bug Report</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link
                            href="/settings"
                            className="flex items-center p-2 space-x-3 rounded-md"
                            >
                            <Cog />
                            <span className={`${!open ? "hidden" : ""} dark:text-gray-100`}>Settings</span>
                            </Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default HomeSidebar