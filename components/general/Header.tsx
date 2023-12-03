"use client"


import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import ProfileButton from "./ProfileButton"
import { Button } from "../ui/button"
import Container from "../ui/container"
import {Menu, Moon, Settings, ShoppingCart, Sun} from 'lucide-react'
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"

const routes = [
    {
        href: "/",
        label: "TEAMS"
    },
    {
        href: "/",
        label: "LAYOUTS"
    },
    {
        href: "/",
        label: "PLANS"
    },
]

const Header = () => {
    const {theme, setTheme} = useTheme();

    // BUG : Header is not sticky
    return (
        <header className="sm:flex sm:justify-between py-3 px-4 border-b sticky">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
                    <div className="flex items-center">
                        <Sheet>
                            <SheetTrigger>
                                <Menu className="h-6 md:hidden w-6"/>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                                <nav className="flex flex-col gap-4">
                                    {routes.map((route,i) => (
                                        <Link key={i} href={route.href} className="block px-2 py-1 text-lg">
                                            {route.label}
                                        </Link>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                        <Link href="/" className="ml-4 lg:ml-0">
                            <h1 className="text-xl font-bold font-poppins">PROJECT:SIMPLIFIED</h1>
                        </Link>
                    </div>
                    {/* <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 md:block">
                        {routes.map((route, i) => (
                            <Button key={i} asChild variant="ghost">
                                <Link href={route.href} className="text-sm font-medium transition-colors font-poppins">
                                    {route.label}
                                </Link>
                            </Button>
                        ))}
                    </nav> */}
                    <div className="flex items-center">
                        <Button variant="ghost" size="icon" className="mr-2" aria-label="Settings">
                            <Settings className="h-6 w-6"/>
                            <span className="sr-only">Settings</span>
                        </Button> 
                        <Button variant="ghost" size="icon" aria-label="Toggle Theme" className="mr-6" 
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                            <span className="sr-only">Toggle Theme</span> 
                        </Button>
                        <ProfileButton/>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header