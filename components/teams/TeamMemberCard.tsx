import React, { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { TEAM_ROLES } from '@/utils/data';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import UpdateTeamMemberForm from './UpdateTeamMemberForm';
import { KeyedMutator } from 'swr';

interface TeamMemberCardProps extends React.HTMLAttributes<HTMLDivElement> {
    data: any
    refreshFunction: KeyedMutator<any>
}

const TeamMemberCard = ({data, refreshFunction}: TeamMemberCardProps ) => {

    function getInitials(){
        let firstInitial = data?.firstName as string;
        let lastInitial = data?.lastName as string;

        return firstInitial.charAt(0).toUpperCase() + lastInitial.charAt(0).toUpperCase()
    }

    function makeRoleBadges(){
        let badgeArray = [];
        if(data?.roles && data.roles.length > 0){
            data.roles.map((role: string, i : number) => {
                let badgeData = TEAM_ROLES.find((roleData) => roleData.callsign === role) || {callsign: "ERR", role: "Error", color: "#fd1d1d"}
                badgeArray.push(
                    // <Badge variant="outline" key={i} className='text-[10px]' style={{backgroundColor: badgeData.color}}>
                    // </Badge>
                    <div className='w-1 rounded p-1' key={i} style={{backgroundColor: badgeData.color}}>

                    </div>
                )
            })
        } else {
            badgeArray.push(
                // <Badge variant="outline">
                // </Badge>
                <div key={0} className='w-1 rounded p-1 border'>

                </div>
            )
        }
        return badgeArray;
    }


    return(
        <Dialog>
            <DialogTrigger>
                <div className="flex items-center w-full justify-between space-x-4 col-span-1 hover:bg-slate-800 p-1 rounded-xl">
                    <div className="flex items-center space-x-4 w-full">
                        <div className='flex items-center justify-center rounded-full border w-[24px] h-[24px]'>
                            <Avatar className='w-[18px] h-[18px]'>
                                <AvatarImage src="/avatars/01.png" />
                                <AvatarFallback className='text-xs'>{getInitials()}</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className='flex justify-between w-full items-center'>
                            <p className="text-sm font-medium leading-none">{`${data?.firstName} ${data?.lastName}`}</p>
                            <div className='flex overflow-hidden h-5 justify-start'>
                                {makeRoleBadges()}
                            </div>
                        </div>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Member Details</DialogTitle>
                    <DialogDescription>
                    Edit member details here then save changes below!
                    </DialogDescription>
                    <UpdateTeamMemberForm details={data} refreshFunction={refreshFunction}/>
                    <DialogFooter>
                        Remember to save your changes!
                    </DialogFooter>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default TeamMemberCard;