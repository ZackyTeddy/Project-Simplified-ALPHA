"use client"

import LayoutStage from '@/components/layouts/LayoutStage'
import ShapeSpawner from '@/components/layouts/ShapeSpawner'
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { client } from '@/utils/genqlClient'
import { ArrowDownUp, Frame, FrameIcon, MapPin } from 'lucide-react'
import { SpinnerDotted, SpinnerInfinity } from 'spinners-react'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import LayoutBlueprintElementDetails from '@/components/layouts/LayoutBlueprintElementDetails'

const page = () => {

  const fetcher = () => client.query({
    getOneLayout: {
        __args: {
            id: layoutId || "0"
        },
        layoutId: true,
        metadata: true,
        blueprint: true,
        positions: true
    }
  })

  const { data: layout, error: getOneLayoutError, isLoading } = useSWR('getOneLayout', fetcher);
  const layoutName = useAppSelector((state) => state.layout.metadata.layoutName)

  const pathname = usePathname();
  const layoutId = pathname?.split("/")[2] || "";


  
  const dispatch = useAppDispatch()

  useEffect(() => {
  },[])


  return (
    <div>
      <div className="hidden h-full flex-col md:flex">
        <Tabs defaultValue="blueprint" className="flex-1">
        <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
          <h2 className="text-lg font-semibold font-poppins">Layout Builder {!isLoading && layoutName ? `- ${layoutName}` : <SpinnerInfinity />}</h2>
          <TabsList className="grid grid-cols-3" defaultValue="blueprint">
            <TabsTrigger value="blueprint" >
              <HoverCard openDelay={200}>
                <HoverCardTrigger asChild>
                  <Frame className='h-[20px] w-[20px]'/>
                </HoverCardTrigger>
                <HoverCardContent className="w-fit text-sm font-poppins" side="bottom">
                  Blueprint Layer
                </HoverCardContent>
              </HoverCard>
            </TabsTrigger>
            <TabsTrigger value="positions">
              <HoverCard openDelay={200}>
                <HoverCardTrigger asChild>
                  <MapPin className='h-[20px] w-[20px]'/>
                </HoverCardTrigger>
                <HoverCardContent className="w-fit text-sm font-poppins" side="bottom">
                  Positions Layer
                </HoverCardContent>
              </HoverCard>
            </TabsTrigger>
            <TabsTrigger value="flow">
              <HoverCard openDelay={200}>
                <HoverCardTrigger asChild>
                  <ArrowDownUp className='h-[20px] w-[20px]'/>
                </HoverCardTrigger>
                <HoverCardContent className="w-fit text-sm font-poppins" side="bottom">
                  Flows Layer
                </HoverCardContent>
              </HoverCard>
            </TabsTrigger>
          </TabsList>
        </div>
        <Separator />
          <div className="container h-full py-6">
            <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
              <div className="flex flex-row md:flex-col h-full space-y-4 p-0">
                <ShapeSpawner />
                <div className="w-[1000px] h-[450px] border m-0">
                  {isLoading && <SpinnerDotted/>}
                  {!isLoading && layout && <LayoutStage layout={layout?.getOneLayout} />}
                </div>
              </div>
              <div className="md:order-1">
                <TabsContent value="blueprint" className="mt-0 border-0 p-0">
                  <LayoutBlueprintElementDetails />
                </TabsContent>
                <TabsContent value="positions" className="mt-0 border-0 p-0">

                </TabsContent>
                <TabsContent value="flow" className="mt-0 border-0 p-0">

                </TabsContent>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
      </div>
  )
}

export default page