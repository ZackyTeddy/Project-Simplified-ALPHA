"use client"

import React, { useEffect, useState } from 'react'
import { Layer, Line, Rect } from 'react-konva'
import ShapeSpawner from './ShapeSpawner';
import { eventEmitter } from '@/emitters/eventEmitter';
import { EventType } from '@/emitters/eventTypes';
import { useSelector } from 'react-redux';
import { useAppSelector } from '@/redux/hooks';
import { Shape as KonvaShape} from "konva/lib/Shape";
import { ShapeItem } from '@/utils/types';


interface LayoutBlueprintLayerProps {
  width: number;
  height: number;
}

const LayoutBlueprintLayer = ({width, height}: LayoutBlueprintLayerProps) => {
  const SPACING = 25;
  const xLines = [], yLines = [];
  const shapeList = useAppSelector((state: any) => state.layout.blueprint)

  for(var i = 1; i* SPACING < width; i++){
    xLines.push(
      <Line 
        stroke={"rgba(41,37,36,1.000)"}
        strokeWidth={1}
        points={[i*SPACING,0, i*SPACING, height]}
      />
    )
  }

  for(var i = 1; i* SPACING < height; i++){
    yLines.push(
      <Line 
        stroke={"rgba(41,37,36,1.000)"}
        strokeWidth={1}
        points={[0, i*SPACING, width, i*SPACING]}
      />
    )
  }

  useEffect(() => {
    console.log('shapeList', shapeList)
  },[shapeList])

  return (
    <>
      <Layer>
        {xLines}
        {yLines}
      </Layer>
      <Layer>
        {/* add elements here */}
        <Rect
          onDragEnd={(e) => {
            e.target.to({
              x: Math.round(e.target.x() / SPACING) * SPACING,
              y: Math.round(e.target.y() / SPACING) * SPACING
            });
          }}
          x={80}
          y={80}
          draggable
          width={50}
          height={50}
          fill="#ffffff"
        />
        {shapeList.map(({shape: Shape, ...props} : ShapeItem) => (
          <Shape 
            key={props.id}
            draggable
            {...props}
          />
        ))}
      </Layer>
    </>
  )
}

export default LayoutBlueprintLayer