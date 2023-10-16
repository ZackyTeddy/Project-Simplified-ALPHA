import React from 'react'
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger } from './ui/context-menu'
import { cn } from '@/lib/utils'
import { TeamData } from '@/lib/types'
import { Badge } from './ui/badge'
import { Clock2, MapPin } from 'lucide-react'
import Link from 'next/link'

interface TeamCardProps extends React.HTMLAttributes<HTMLDivElement> {
    data: TeamData
    aspectRatio?: "portrait" | "square"
    width?: number
    height?: number
}

const TeamCard = ({
    data,
    aspectRatio = "portrait",
    width,
    height,
    className,
    ...props
    }: TeamCardProps) => {
    return (
        <div className={cn("space-y-3", className)} {...props}>
        <ContextMenu>
            <ContextMenuTrigger>
            <div className="overflow-hidden rounded-md">
                {/* <Image
                src={album.cover}
                alt={album.name}
                width={width}
                height={height}
                className={cn(
                    "h-auto w-auto object-cover transition-all hover:scale-105",
                    aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
                )}
                /> */}
                <Link href={`/teams/${data.id}`}>
                    <div className='h-[150px] w-[150px] p-2 flex justify-end items-end object-cover cursor-pointer transition-all hover:scale-105 aspect-square bg-blue-gradient'>
                        <div className='w-[140px] flex flex-row flex-wrap justify-end'>
                            {
                                data.timeslot ? 
                                    <Badge className='mb-1' variant="secondary">
                                        <Clock2 size={16}/>
                                        <p className='ml-2 text-[10px]'>{data.timeslot}</p>
                                    </Badge>
                                    : <></>
                            }
                            {
                                data.location && data.region ? 
                                    <Badge className='' variant="secondary">
                                        <MapPin size={16}/>
                                        <p className='ml-2 text-[10px]'>{data.location}, {data.region}</p>
                                    </Badge>
                                    : <></>
                            }
                        </div>
                    </div>
                </Link>
            </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-40">
            <ContextMenuItem>Manage Team</ContextMenuItem>
            <ContextMenuSub>
                <ContextMenuSubTrigger>Quick Actions</ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-48">
                    <ContextMenuItem>
                        Deploy for Plan
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>
                        Use as Template
                    </ContextMenuItem>
                </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuItem>Bench Team</ContextMenuItem>
            <ContextMenuItem>Disband Team</ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
        <div className="space-y-1 text-sm">
            <h3 className="font-medium leading-none">{data.name}</h3>
            <p className="text-xs text-muted-foreground">{data.leader}</p>
        </div>
        </div>
    )
}

export default TeamCard