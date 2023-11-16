"use client"

import { Separator } from "@/components/ui/separator";
import { client } from "../../../utils/genqlClient";
import { usePathname } from "next/navigation";
import useSWR from 'swr';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import TeamMemberCard from "@/components/teams/TeamMemberCard";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import AddNewMember from "@/components/teams/AddNewMember";
import { useEffect, useState } from "react";

export default function Team(){
    const fetcher = () => client.query({
        getOneTeam: {
            __args: {
                id: teamId || "0"
            },
            name: true,
            leader: true,
            location: true,
            region: true,
            timeslot: true
        },
        getMembers: {
            __args: {
                id: teamId || "0"
            },
            memberId: true,
            firstName: true,
            lastName: true,
            location: true,
            region: true,
            roles: true
        }
    })

    const { data: team, error: getOneTeamError } = useSWR('getOneTeam', fetcher)
    const { data: members, mutate: refreshMembers , error: getMembersError } = useSWR('getMembers', fetcher)
    
    const [details, setDetails] = useState({
        name: team?.getOneTeam?.name || "",
        leader: team?.getOneTeam?.leader || "",
        location: team?.getOneTeam?.location || "",
        region: team?.getOneTeam?.region || "",
        timeslot: team?.getOneTeam?.timeslot || ""
    })

    const timeslots = ["7AM","8AM","9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM"];
    const pathname = usePathname();
    const teamId = pathname?.split("/")[2] || "";

    useEffect(() => {
        setDetails((prev) => {
            return {
                ...prev,
                name: team?.getOneTeam?.name || "",
                leader: team?.getOneTeam?.leader || "",
                location: team?.getOneTeam?.location || "",
                region: team?.getOneTeam?.region || "",
                timeslot: team?.getOneTeam?.timeslot || ""
            }
        })
    }, [members])


    return(
        <div className="h-full px-4 py-6 lg:px-8">
            <div className="space-between flex items-center">
                <div className="hidden space-y-2 p-5 pb-3 md:block">
                    <div className="space-y-0.5">
                    <h2 className="text-2xl font-bold tracking-tight">Manage Team</h2>
                    <p className="text-muted-foreground">
                        Manage this team
                    </p>
                    </div>
                    <Separator className="my-6" />
                </div>
            </div>
            <div className="flex flex-row">
                <div className="px-4 w-1/3">
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle>
                                Team Details
                            </CardTitle>
                            <CardDescription>
                                Edit team details here
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-6">
                            <div className='grid gap-2'>
                                <Label htmlFor="name">
                                    Team Name
                                </Label>
                                <Input id="name" 
                                    value={details.name}
                                    onChange={(e) => {setDetails((prev) => { return {...prev, name: e.target.value}})}}/>
                            </div>
                            <div className='grid gap-2'>
                                <Label htmlFor="location">
                                    Campus Location
                                </Label>
                                <Input id="location" 
                                    value={details.location} 
                                    onChange={(e) => {setDetails((prev) => { return {...prev, location: e.target.value}})}} 
                                    placeholder="Campus Name"/>
                            </div>
                            <div className='grid gap-2'>
                                <Label htmlFor="region">
                                    Campus Region
                                </Label>
                                <Input id="region" 
                                    value={details.region} 
                                    onChange={(e) => {setDetails((prev) => { return {...prev, region: e.target.value}})}} 
                                    placeholder="Campus Region/Country/State"/>
                            </div>
                            <div className='grid gap-2'>
                                <Label htmlFor="timeslot">
                                    Team Timeslot
                                </Label>
                                <Select value={details.timeslot} 
                                    onValueChange={(val) => {setDetails((prev) => { return {...prev, name: val}})}} 
                                    defaultValue="">
                                    <SelectTrigger id="timeslot">
                                        <SelectValue placeholder="Select timeslot..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            timeslots && timeslots.map((timeslot) => (
                                                <SelectItem value={timeslot}>{timeslot}</SelectItem>
                                            ))
                                        }
                                        
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="px-4 grow">
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle>
                                Team Members
                            </CardTitle>
                            <CardDescription>
                                Manage team members here
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-6 grid-cols-2 overflow-y-auto">
                        {getMembersError && <p>Oops, something went wrong!</p>}
                        {
                            members?.getMembers && members.getMembers.map((member: any, i: number) => (
                                <TeamMemberCard key={member.memberId} data={member} refreshFunction={refreshMembers}/>
                            ))
                        }
                        <AddNewMember teamId={teamId} refreshFunction={refreshMembers}/>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}