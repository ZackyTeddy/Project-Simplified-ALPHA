import React from 'react'
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger } from '../ui/context-menu'
import { cn } from '@/utils/utils'
import { Badge } from '../ui/badge'
import { Clock2, MapPin } from 'lucide-react'
import Link from 'next/link'

interface LayoutCardProps extends React.HTMLAttributes<HTMLDivElement> {
    data: any
    aspectRatio?: "portrait" | "square"
}

const LayoutCard = ({
    data,
    aspectRatio = "portrait",
    className,
    ...props
    }: LayoutCardProps) => {
    
        console.log('data', data)
    
    return (
        <div className={cn("m-3", className)} {...props}>
        <ContextMenu>
            <ContextMenuTrigger>
            <div className="overflow-hidden rounded-md h-[150px] w-[150px]">
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
                <Link href={`/layouts/${data?.layoutId}`}>
                <div className="h-[150px] w-[150px] p-2 flex justify-end items-end object-cover cursor-pointer transition-all hover:scale-105 aspect-square
                                    bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]">
                        <div className='w-[140px] flex flex-row flex-wrap justify-end'>
                            {
                                data.metadata.layoutLocation && data.metadata.layoutRegion ? 
                                    <Badge className='' variant="secondary">
                                        <MapPin size={16}/>
                                        <p className='ml-2 text-[10px]'>{data.metadata.layoutLocation}, {data.metadata.layoutRegion}</p>
                                    </Badge>
                                    : <></>
                            }
                        </div>
                    </div>
                </Link>
            </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-40">
            <ContextMenuItem className="font-poppins">Manage Team</ContextMenuItem>
            <ContextMenuSub>
                <ContextMenuSubTrigger className="font-poppins">Quick Actions</ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-48">
                    <ContextMenuItem className="font-poppins">
                        Deploy for Plan
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem className="font-poppins">
                        Use as Template
                    </ContextMenuItem>
                </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuItem className="font-poppins">Bench Team</ContextMenuItem>
            <ContextMenuItem className="font-poppins">Disband Team</ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
        <div className="p-2 space-y-1 text-sm">
            <h3 className="font-medium leading-none font-poppins">{data.metadata.layoutName ? data.metadata.layoutName : "Jesus Squad"}</h3>
            <p className="text-xs text-muted-foreground font-poppins">{data.leader ? data.leader : "Jesus the Good Shpherd"}</p>
        </div>
        </div>
    )
}

export default LayoutCard