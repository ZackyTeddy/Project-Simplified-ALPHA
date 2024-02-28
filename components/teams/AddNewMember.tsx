import React, { useState } from 'react'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Plus } from 'lucide-react'
import { client } from '@/utils/genqlClient'
import { KeyedMutator } from 'swr'

interface AddNewMemberProps extends React.HTMLAttributes<HTMLDivElement> {
    teamId: string
    refreshFunction: KeyedMutator<any>
}


const AddNewMember = ({teamId, refreshFunction} : AddNewMemberProps) => {

    // TODO  Convert this code to use zod form vaildation!
    const [details, setDetails] = useState({
        firstName: "",
        lastName: "",
        location: "",
        region: ""
    })
    const [error, setError] = useState()

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault()
        await client.mutation({
            createMember: {
                __args: {
                    firstName: details.firstName,
                    lastName: details.lastName,
                    location: details.location,
                    region: details.region,
                    teams: teamId
                },
                memberId: true
            }
            }).then(response => {
                console.log(response)
                refreshFunction();
            }).catch(error => {
                console.log('Add Member error', error)
                setError(error.message)
            })
    }

    return (
    <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-4">
            <div>
            <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" className='py-0 px-2 w-[40px] h-[40px] rounded-full'>
                    <Plus></Plus>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <form onSubmit={handleSubmit}>
                <SheetHeader>
                <SheetTitle className="font-poppins">Add New Member</SheetTitle>
                <SheetDescription className="font-poppins">
                    Fill in the member details below and click Add when you are ready!
                </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="firstName" className="text-right font-poppins">
                        First Name
                        </Label>
                        <Input id="firstName" className="col-span-3 font-poppins" onChange={(e) => setDetails((prev) => {return {...prev, firstName: e.target.value}})}/>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="lastName" className="text-right font-poppins">
                        Last Name
                        </Label>
                        <Input id="lastName" className="col-span-3 font-poppins" onChange={(e) => setDetails((prev) => {return {...prev, lastName: e.target.value}})}/>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="location" className="text-right font-poppins">
                        Primary Campus
                        </Label>
                        <Input id="location" className="col-span-3 font-poppins" onChange={(e) => setDetails((prev) => {return {...prev, location: e.target.value}})}/>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="region" className="text-right font-poppins">
                        Primary Region
                        </Label>
                        <Input id="region" className="col-span-3 font-poppins" onChange={(e) => setDetails((prev) => {return {...prev, region: e.target.value}})}/>
                    </div>
                </div>
                <SheetFooter>
                <SheetClose asChild>
                    <Button className="font-poppins" type="submit" >Add Member</Button>
                </SheetClose>
                </SheetFooter>
                </form>
            </SheetContent>
            </Sheet>
            </div>
            <p className='text-sm font-poppins'>
                Add a new member
            </p>
        </div>
    </div>
    )
}

export default AddNewMember