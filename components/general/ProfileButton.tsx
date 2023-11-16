import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from '@/components/ui/avatar'



const ProfileButton = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src='/img/thedivlogo.png' />
                    <AvatarFallback>SHD</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='cursor-pointer'>Profile</DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer'>Stats</DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer'>Preferences</DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem className='cursor-pointer'>Log Out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ProfileButton