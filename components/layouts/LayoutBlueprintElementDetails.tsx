import { useAppSelector } from '@/redux/hooks'
import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

const LayoutBlueprintElementDetails = () => {

    const selectedElementIndex = useAppSelector((state) => state.layout.selectedElement)
    const selectedElement = useAppSelector(
        (state) => state.layout.blueprint[state.layout.blueprint.findIndex(
            (element) => element.id === selectedElementIndex
        )]
    )

    console.log('selectedElement', selectedElement)

    return (
        <div className='border-l pl-3'>
            <Label className="font-poppins">Element Details</Label>
            <div className='border rounded p-2 mt-1 mb-1'>
                <p className="text-xs text-muted-foreground">
                    <strong className="font-poppins">Element ID: </strong> {selectedElement?.id ? selectedElement.id : "" }
                </p>
                <p className="text-xs text-muted-foreground">
                    <strong className="font-poppins">Element Shape: </strong> {selectedElement?.shape ? selectedElement.shape : "" }
                </p>
            </div>
            <Label className="font-poppins">Element Variables</Label>
            <div className='border rounded p-2 mt-1 mb-1'>
                <div className='mb-1'>
                    <Label htmlFor="alias" className="font-poppins">Alias Name</Label>
                    <Input id="alias" className="font-poppins" placeholder='' value={selectedElement?.alias ? selectedElement.alias : "" }></Input>
                </div>
                <div className='mb-1'>
                    <Label htmlFor="text" className="font-poppins">Display Text</Label>
                    <Input id="text" className="font-poppins" placeholder='' value={selectedElement?.text ? selectedElement.text : "" }></Input>
                </div>
                <div className='mb-1'>
                    <Label htmlFor="fill" className="font-poppins">Fill Color</Label>
                    <Input id="fill" className="font-poppins" placeholder='' value={selectedElement?.fill ? selectedElement.fill : "" }></Input>
                </div>
                <div className='mb-1'>
                    <Label htmlFor="stroke" className="font-poppins">Stroke Color</Label>
                    <Input id="stroke" className="font-poppins" placeholder='' value={selectedElement?.stroke ? selectedElement.stroke : "" }></Input>
                </div>
            </div>
        </div>
    )
}

export default LayoutBlueprintElementDetails