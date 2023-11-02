import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { TEAM_ROLES } from '@/utils/data';
import { Badge } from './ui/badge';

interface TeamMemberCardProps extends React.HTMLAttributes<HTMLDivElement> {
    data: any
}

const TeamMemberCard = ({data}: TeamMemberCardProps ) => {

    function getInitials(){
        let firstInitial = data?.firstName as string;
        let lastInitial = data?.lastName as string;

        return firstInitial.charAt(0).toUpperCase() + lastInitial.charAt(0).toUpperCase()
    }

    function makeRoleBadges(){
        let badgeArray = [];
        if(data?.roles && data.roles.length > 0){
            data.roles.map((role: string) => {
                let badgeData = TEAM_ROLES.find((roleData) => roleData.callsign === role) || {callsign: "ERR", role: "Error", color: "#fd1d1d"}
                badgeArray.push(
                    <Badge variant="outline" style={{backgroundColor: badgeData.color}}>{badgeData.role}</Badge>
                )
            })
        } else {
            badgeArray.push(
                <Badge variant="outline">Usher</Badge>
            )
        }
        return badgeArray;
    }

    return(
        <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-4">
                <Avatar>
                    <AvatarImage src="/avatars/01.png" />
                    <AvatarFallback>{getInitials()}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm font-medium leading-none">{`${data?.firstName} ${data?.lastName}`}</p>
                    {makeRoleBadges()}
                </div>
            </div>
        </div>
    )
}

export default TeamMemberCard;