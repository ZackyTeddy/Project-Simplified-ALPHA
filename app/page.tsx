import HomeSidebar from "@/components/HomeSidebar"
import TeamCard from "@/components/TeamCard"
import Container from "@/components/ui/container"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { teams } from "@/lib/data"

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Simplified Homepage',
}

export default function Home() {
  return (
          <div className="h-full px-4 py-6 lg:px-8">
            <Tabs defaultValue="resume" className="h-full space-y-6">
              <div className="space-between flex items-center">
                <TabsList>
                  <TabsTrigger value="resume" className="relative">
                    Resume
                  </TabsTrigger>
                  <TabsTrigger value="teams">
                    Teams
                  </TabsTrigger>
                  <TabsTrigger value="layouts">
                    Layouts
                  </TabsTrigger>
                  <TabsTrigger value="plans">
                    Plans
                  </TabsTrigger>
                </TabsList>
              </div>
              {/* RESUME TAB */}
                <TabsContent value="resume" className="border-none p-0 outline-none">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">
                      Jump right back in
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Continue where you left off
                    </p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="relative">
                  <ScrollArea>
                    <div className="flex space-x-4 pb-4">
                      {/* {listenNowAlbums.map((album) => (
                        <AlbumArtwork
                          key={album.name}
                          album={album}
                          className="w-[250px]"
                          aspectRatio="portrait"
                          width={250}
                          height={330}
                        />
                      ))} */}
                    </div>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                </div>

                </TabsContent>

              {/* TEAMS TAB */}
              <TabsContent value="teams" className="border-none p-0 outline-none">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">
                      Your teams
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Manage and prepare Carriers
                    </p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="relative">
                  <ScrollArea>
                    <div className="flex space-x-4 pb-4">
                      {teams.map((team, i) => (
                        <TeamCard 
                          key={i}
                          data={team}
                          
                        />
                      ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                </div>

                </TabsContent>

                {/* LAYOUTS TAB */}
                <TabsContent value="layouts" className="border-none p-0 outline-none">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">
                      Your layouts
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Map out and strategize locations
                    </p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="relative">
                  <ScrollArea>
                    <div className="flex space-x-4 pb-4">
                      {/* {listenNowAlbums.map((album) => (
                        <AlbumArtwork
                          key={album.name}
                          album={album}
                          className="w-[250px]"
                          aspectRatio="portrait"
                          width={250}
                          height={330}
                        />
                      ))} */}
                    </div>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                </div>

                </TabsContent>

                {/* PLANS TAB */}
                <TabsContent value="plans" className="border-none p-0 outline-none">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">
                      Your plans
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Time to deploy and execute
                    </p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="relative">
                  <ScrollArea>
                    <div className="flex space-x-4 pb-4">
                      {/* {listenNowAlbums.map((album) => (
                        <AlbumArtwork
                          key={album.name}
                          album={album}
                          className="w-[250px]"
                          aspectRatio="portrait"
                          width={250}
                          height={330}
                        />
                      ))} */}
                    </div>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                </div>

                </TabsContent>

            </Tabs>
          </div>
  )
}
