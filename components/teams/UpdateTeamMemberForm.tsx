import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Button } from '../ui/button';
import { TEAM_ROLES } from '@/utils/data';
import { Checkbox } from '../ui/checkbox';
import { Badge } from '../ui/badge';
import { client } from '@/utils/genqlClient';
import { KeyedMutator } from 'swr';

interface UpdateTeamMemberProps extends React.HTMLAttributes<HTMLDivElement> {
    details: any
    refreshFunction: KeyedMutator<any>
}

const formSchema = z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    location: z.string().min(2).max(50),
    region: z.string().min(2).max(50),
    roles: z.string().array()
})




const UpdateTeamMemberForm = ({details, refreshFunction} : UpdateTeamMemberProps) => {
    console.log('details', details)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: details.firstName || "",
            lastName: details.lastName  || "",
            location: details.location || "",
            region: details.region || "",
            roles: details.roles || []
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        await client.mutation({
            updateMember: {
                __args: {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    location: values.location,
                    region: values.region,
                    roles: values.roles,
                    id: details.memberId
                },
                memberId: true
            }
            }).then(response => {
                refreshFunction();
            }).catch(error => {
                console.log('UPDATE Member error', error)
            })
    }

    return (
        <div className="grid gap-4 py-4">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                    <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <FormLabel className="text-right">First Name</FormLabel>
                                <FormControl>
                                    <Input className="col-span-3" placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormMessage />
                            </div>
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <FormLabel className="text-right">Last Name</FormLabel>
                                <FormControl>
                                    <Input className="col-span-3" placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormMessage />
                            </div>
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <FormLabel className="text-right">Primary Campus</FormLabel>
                                <FormControl>
                                    <Input className="col-span-3" placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormMessage />
                            </div>
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="region"
                    render={({ field }) => (
                        <FormItem>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <FormLabel className="text-right">Primary Region</FormLabel>
                                <FormControl>
                                    <Input className="col-span-3" placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormMessage />
                            </div>
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <FormLabel className="text-right  col-span-1">Roles</FormLabel>
                                <div className='col-span-3 grid grid-cols-2'>
                                {TEAM_ROLES.map((item) => (
                                    <FormField
                                    key={item.callsign}
                                    control={form.control}
                                    name="roles"
                                    render={({ field }) => {
                                        return (
                                        <FormItem
                                            key={item.callsign}
                                            className="flex flex-row items-start space-x-3 space-y-0 col-span-1"
                                        >
                                            <FormControl>
                                            <Checkbox
                                                checked={field.value?.includes(item.callsign)}
                                                onCheckedChange={(checked) => {
                                                return checked
                                                    ? field.onChange([...field.value, item.callsign])
                                                    : field.onChange(
                                                        field.value?.filter(
                                                        (value) => value !== item.callsign
                                                        )
                                                    )
                                                }}
                                            />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                <Badge variant="outline" key={item.callsign} style={{backgroundColor: item.color}}>{item.role}</Badge>
                                            </FormLabel>
                                        </FormItem>
                                        )
                                    }}
                                    />
                                ))}
                                </div>
                                <FormMessage />
                            </div>
                                <FormDescription className='text-right'>*Default assigned role is Usher</FormDescription>
                        </FormItem>
                    )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
                </Form>
        </div>
    )
}

export default UpdateTeamMemberForm;