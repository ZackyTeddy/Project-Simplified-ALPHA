"use client"

import React, { useEffect } from 'react';
import { Line, Rect } from 'react-konva';
import { Button } from '../ui/button';
import { BoxSelect, Minus, Square, Text } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { pushToBlueprint, saveCurrentLayout } from '@/redux/slices/layoutSlice';
import { ShapeItem } from '@/utils/types';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

interface ShapeSpawnerProps {
}

const ShapeSpawner = ({} : ShapeSpawnerProps) => {
    const dispatch = useAppDispatch()
    const layout: any = useAppSelector((state: any) => state.layout)
    const layoutId: string = useAppSelector((state: any) => state.layout.id)


    return (
        <div className='flex flex-col md:flex-row justify-between mx-3 my-5 p-2 rounded-md bg-slate-300 dark:bg-slate-600 h-1/2'>
            <div className='grid grid-cols-2 md:flex md:flex-row gap-2 w-min'>
                <Button variant='ghost' size='icon' aria-label='Square' onClick={() => {
                    dispatch(pushToBlueprint(
                        {
                            shape: 'Rect',
                            x: 80,
                            y: 80,
                            width: 50,
                            height: 50,
                            fill: "#FFFFFF",
                        }
                    ))
                }}>
                    <Square />
                    <span className='sr-only'>Square</span>
                </Button>
                <Button variant='ghost' size='icon' aria-label='Line'>
                    <Minus />
                    <span className='sr-only'>Line</span>
                </Button>
                <Button variant='ghost' size='icon' aria-label='Section'>
                    <BoxSelect />
                    <span className='sr-only'>Section</span>
                </Button>
                <Button variant='ghost' size='icon' aria-label='Text'>
                    <Text />
                    <span className='sr-only'>Text</span>
                </Button>
                <Button variant='ghost' size='icon' aria-label='Square'>
                    <Square />
                    <span className='sr-only'>Square</span>
                </Button>
            </div>
            <div>
                <Button variant="outline" onClick={() => {
                    dispatch(saveCurrentLayout({
                        id: layoutId, ...layout
                    }));
                }}>SAVE</Button>
            </div>
        </div>
    )
}

export default ShapeSpawner