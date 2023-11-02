"use client"

import { Separator } from "@/components/ui/separator";
import { client } from "../../../utils/genqlClient";
import { usePathname } from "next/navigation";
import useSWR from 'swr';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import TeamMemberCard from "@/components/TeamMemberCard";

export default function Team(){
    const timeslots = ["7AM","8AM","9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM"];
    const pathname = usePathname();
    const teamId = pathname?.split("/")[2]

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
            firstName: true,
            lastName: true,
            roles: true
        }
    })

    const { data: team, error: getOneTeamError } = useSWR('getOneTeam', fetcher)
    const { data: members, error: getMembersError } = useSWR('getMembers', fetcher)

    console.log('members.getMembers', members?.getMembers)


    const returnTimeslots = () => {
        return timeslots.map((timeslot) => {
            <SelectItem value={timeslot}>{timeslot}</SelectItem>
        })
    }

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
                                <Input id="name" value={team && team?.getOneTeam && team.getOneTeam.name ? team?.getOneTeam.name : ""}/>
                            </div>
                            <div className='grid gap-2'>
                                <Label htmlFor="location">
                                    Campus Location
                                </Label>
                                <Input id="location" value={team && team?.getOneTeam && team.getOneTeam.location ? team?.getOneTeam.location : ""} placeholder="Campus Name"/>
                            </div>
                            <div className='grid gap-2'>
                                <Label htmlFor="region">
                                    Campus Region
                                </Label>
                                <Input id="region" value={team && team?.getOneTeam && team.getOneTeam.region ? team?.getOneTeam.region : ""} placeholder="Campus Region/Country/State"/>
                            </div>
                            <div className='grid gap-2'>
                                <Label htmlFor="timeslot">
                                    Team Timeslot
                                </Label>
                                <Select value={team && team?.getOneTeam && team.getOneTeam.timeslot ? team?.getOneTeam.timeslot : "UNKNWN"} defaultValue="">
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
                        <CardContent className="grid gap-6">
                        {getMembersError && <p>Oops, something went wrong!</p>}
                        {
                            members?.getMembers && members.getMembers.map((member: any, i: number) => (
                                <TeamMemberCard key={i} data={member}/>
                            ))
                        }
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}