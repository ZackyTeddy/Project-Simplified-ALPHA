'use client'

import TeamCard from "@/components/teams/TeamCard"
import Container from "@/components/ui/container"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import useSWR from 'swr'

import { client } from "../utils/genqlClient"
import { useState } from "react"
import LayoutCard from "@/components/layouts/LayoutCard"



export default function Home() {

  const fetcher = () => client.query({
      getTeams: {
        team_Id: true,
        name: true,
        leader: true,
        location: true,
        region: true,
        timeslot: true
      },
      getLayouts: {
        layoutId: true,
        metadata: true
      }
    })

  const { data: teams, error: teamsFetchError } = useSWR('getTeams', fetcher)
  const { data: layouts, error: layoutsFetchError } = useSWR('getLayouts', fetcher)



  return (
          <div className="h-full px-4 py-6 lg:px-8">
            <Tabs defaultValue="teams" className="h-full space-y-6">
              <div className="space-between flex items-center">
                <TabsList>
                  <TabsTrigger className="font-poppins" value="teams">
                    Teams
                  </TabsTrigger>
                  <TabsTrigger className="font-poppins" value="layouts">
                    Layouts
                  </TabsTrigger>
                  <TabsTrigger className="font-poppins" value="plans">
                    Plans
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* TEAMS TAB */}
              <TabsContent value="teams" className="border-none p-0 outline-none">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight font-poppins">
                      Your teams
                    </h2>
                    <p className="text-sm text-muted-foreground font-poppins">
                      Manage and prepare Carriers
                    </p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="relative">
                  <ScrollArea>
                    {teamsFetchError && <p>Oops, something went wrong!</p>}
                    <div className="space-x-4 max-w-[1200px] pb-4 grid 2xl:grid-cols-6 grid-cols-5 gap gap-x-3 gap-y-3 overflow-y-auto">
                      {teams?.getTeams && teams.getTeams.map((team: any, i: number) => (
                        <TeamCard 
                          key={i}
                          data={team}
                        />
                      ))}
                    </div>
                    <ScrollBar/>
                  </ScrollArea>
                </div>

                </TabsContent>

                {/* LAYOUTS TAB */}
                <TabsContent value="layouts" className="border-none p-0 outline-none">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight font-poppins">
                      Your layouts
                    </h2>
                    <p className="text-sm text-muted-foreground font-poppins">
                      Map out and strategize locations
                    </p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="relative">
                <ScrollArea>
                    {layoutsFetchError && <p>Oops, something went wrong!</p>}
                    <div className="space-x-4 max-w-[1200px] pb-4 grid xxl:grid-cols-6 grid-cols-5 gap gap-x-3 gap-y-3 overflow-y-auto">
                      {layouts?.getLayouts && layouts.getLayouts.map((layout: any, i: number) => (
                        <LayoutCard 
                          key={i}
                          data={layout}
                        />
                      ))}
                    </div>
                    <ScrollBar/>
                  </ScrollArea>
                </div>

                </TabsContent>

                {/* PLANS TAB */}
                <TabsContent value="plans" className="border-none p-0 outline-none">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight font-poppins">
                      Your plans
                    </h2>
                    <p className="text-sm text-muted-foreground font-poppins">
                      Time to deploy and execute
                    </p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="relative">
                  <ScrollArea>
                    <div className="flex space-x-4 pb-4">
                      {
                        
                      }
                    </div>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                </div>

                </TabsContent>

            </Tabs>
          </div>
  )
}
