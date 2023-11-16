import React from 'react'
import { Button } from '../ui/button'
import {user} from '../../utils/data'
import { Cable, CalendarDays, Component } from 'lucide-react'

const HomeSidebar = () => {
    return (
        <div className='pb-12 hidden lg:block'>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    {/* <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[32px] ss:leading-[75px] leading-[40px]">
                        Hello {" "}
                        <span className="text-gradient">{user.name}!</span>
                    </h1>
                    <h2 className="font-poppins ss:text-[50px] text-[20px] ss:leading-[50px] leading-[30px]">
                        Let's get to work...
                    </h2> */}
                    <div className='mt-0 mb-5 sm:hidden'>
                        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                            Hello <span className="text-gradient">{user.name}!</span>
                        </h2>
                        <p className="mb-6 pb-4 px-4 text-sm tracking-tight">
                            Let's get to work...
                        </p>
                    </div>
                    <div className="space-y-1 grid gap-2">
                        <Button variant="default" className="w-full sm:w-[50px] justify-start">
                            <Component /> 
                            <p className='sm:hidden'>Coming Soon!</p>
                        </Button>
                        <Button variant="secondary" className="w-full sm:w-[50px] justify-start">
                            <Cable />
                            <p className='sm:hidden'>Coming Soon!</p>
                        </Button>
                        <Button variant="ghost" className="w-full sm:w-[50px] justify-start">
                            <CalendarDays />
                            <p className='sm:hidden'>Coming Soon!</p>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSidebar