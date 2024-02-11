import { Bug, Cable, Cog, Grid3X3, Home, Inbox, Layers, Users } from "lucide-react";

interface sidebarOptionsProps {
    title: string;
    href: string;
    icon: React.JSX.Element;
}

export const sidebarMainOptions : sidebarOptionsProps[] = [
    {
        title: "Home",
        href: "/",
        icon: <Home/>
    },
    {
        title: "Updates",
        href: "/",
        icon: <Inbox/>
    },
    {
        title: "Teams",
        href: "/teams",
        icon: <Users/>
    },
    {
        title: "Layouts",
        href: "/layouts",
        icon: <Grid3X3/>
    },
    {
        title: "Plans",
        href: "/plans",
        icon: <Layers/>
    },
]

export const sidebarMiscOptions : sidebarOptionsProps[] = [
    {
        title: "Optimizations",
        href: "/optimizations",
        icon: <Cable/>
    },
    {
        title: "Bug Report",
        href: "/bug",
        icon: <Bug/>
    },
    {
        title: "Settings",
        href: "/settings",
        icon: <Cog/>
    },
]