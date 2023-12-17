"use client"

import LayoutStage from '@/components/layouts/LayoutStage'
import ShapeSpawner from '@/components/layouts/ShapeSpawner'
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { useAppDispatch } from '@/redux/hooks'
import { saveCurrentBlueprint, setCurrentBlueprint } from '@/redux/slices/layoutSlice'
import { client } from '@/utils/genqlClient'
import { ArrowDownUp, Frame, FrameIcon, MapPin } from 'lucide-react'
import { SpinnerDotted, SpinnerInfinity } from 'spinners-react'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'

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

  const { data: layout, error: getOneLayoutError, isLoading } = useSWR('getOneLayout', fetcher)

  const [details, setDetails] = useState({
      metadata: layout?.getOneLayout?.metadata || {},
      blueprint: layout?.getOneLayout?.blueprint || [],
      positions: layout?.getOneLayout?.positions || {},
  })

  const pathname = usePathname();
  const layoutId = pathname?.split("/")[2] || "";

  const dispatch = useAppDispatch()

  useEffect(() => {
      setDetails((prev) => {
          return {
              ...prev,
              metadata: layout?.getOneLayout?.metadata || {},
              blueprint: layout?.getOneLayout?.blueprint || [],
              positions: layout?.getOneLayout?.positions || {},
          }
        })
      console.log('layout', layout)
  }, [layout])

  useEffect(() => {
  },[])


  return (
    <div>
      <div className="hidden h-full flex-col md:flex">
        <Tabs defaultValue="blueprint" className="flex-1">
        <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
          <h2 className="text-lg font-semibold">Layout Builder {!isLoading && details.metadata?.layoutName ? `- ${details.metadata.layoutName}` : <SpinnerInfinity />}</h2>
          <TabsList className="grid grid-cols-3" defaultValue="blueprint">
            <TabsTrigger value="blueprint" >
              <HoverCard openDelay={200}>
                <HoverCardTrigger asChild>
                  <Frame className='h-[20px] w-[20px]'/>
                </HoverCardTrigger>
                <HoverCardContent className="w-fit text-sm" side="bottom">
                  Blueprint Layer
                </HoverCardContent>
              </HoverCard>
            </TabsTrigger>
            <TabsTrigger value="positions">
              <HoverCard openDelay={200}>
                <HoverCardTrigger asChild>
                  <MapPin className='h-[20px] w-[20px]'/>
                </HoverCardTrigger>
                <HoverCardContent className="w-fit text-sm" side="bottom">
                  Positions Layer
                </HoverCardContent>
              </HoverCard>
            </TabsTrigger>
            <TabsTrigger value="flow">
              <HoverCard openDelay={200}>
                <HoverCardTrigger asChild>
                  <ArrowDownUp className='h-[20px] w-[20px]'/>
                </HoverCardTrigger>
                <HoverCardContent className="w-fit text-sm" side="bottom">
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
                  {!isLoading && <LayoutStage layout={layout?.getOneLayout} />}
                </div>
              </div>
              {/* <div className="hidden flex-col space-y-4 sm:flex md:order-2 border-l p-4">
                <div className="grid gap-2 ">
                    <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Layer
                    </span>
                </div>
              </div> */}
              <div className="md:order-1">
                <TabsContent value="blueprint" className="mt-0 border-0 p-0">
                </TabsContent>
                <TabsContent value="positions" className="mt-0 border-0 p-0">
                  <div className="flex flex-col space-y-4">
                    <div className="grid h-full grid-rows-2 gap-6 lg:grid-cols-2 lg:grid-rows-1">
                      <Textarea
                        placeholder="We're writing to [inset]. Congrats from OpenAI!"
                        className="h-full min-h-[300px] lg:min-h-[700px] xl:min-h-[700px]"
                      />
                      <div className="rounded-md border bg-muted"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button>Submit</Button>
                      <Button variant="secondary">
                        <span className="sr-only">Show history</span>
                        {/* <CounterClockwiseClockIcon className="h-4 w-4" /> */}
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="flow" className="mt-0 border-0 p-0">
                  <div className="flex flex-col space-y-4">
                    <div className="grid h-full gap-6 lg:grid-cols-2">
                      <div className="flex flex-col space-y-4">
                        <div className="flex flex-1 flex-col space-y-2">
                          <Label htmlFor="input">Input</Label>
                          <Textarea
                            id="input"
                            placeholder="We is going to the market."
                            className="flex-1 lg:min-h-[580px]"
                          />
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Label htmlFor="instructions">Instructions</Label>
                          <Textarea
                            id="instructions"
                            placeholder="Fix the grammar."
                          />
                        </div>
                      </div>
                      <div className="mt-[21px] min-h-[400px] rounded-md border bg-muted lg:min-h-[700px]" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button>Submit</Button>
                      <Button variant="secondary">
                        <span className="sr-only">Show history</span>
                      </Button>
                    </div>
                  </div>
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