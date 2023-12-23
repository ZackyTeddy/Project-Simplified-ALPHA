"use client"

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Layer, Line, Rect } from 'react-konva'
import ShapeSpawner from './ShapeSpawner';
import { eventEmitter } from '@/emitters/eventEmitter';
import { EventType } from '@/emitters/eventTypes';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Shape as KonvaShape} from "konva/lib/Shape";
import { ShapeItem } from '@/utils/types';
import ShapeElement from './ShapeElement';
import { updateElementInBlueprint } from '@/redux/slices/layoutSlice';


interface LayoutBlueprintLayerProps {
  width: number;
  height: number;
  initBlueprint: any[];
  shapeSelector: (index: string | null) => void;
  selectedShape: string | null;
}

const LayoutBlueprintLayer = ({width, height, initBlueprint, shapeSelector, selectedShape}: LayoutBlueprintLayerProps) => {
  const SPACING = 25;
  const xLines = [], yLines = [];
  const shapeList: ShapeItem[] = useAppSelector((state: any) => state.layout.blueprint)
  const dispatch = useAppDispatch()


  for(var i = 1; i* SPACING < width; i++){
    xLines.push(
      <Line 
        key={"x" + i}
        stroke={"rgba(41,37,36,1.000)"}
        strokeWidth={1}
        points={[i*SPACING,0, i*SPACING, height]}
      />
    )
  }

  for(var i = 1; i* SPACING < height; i++){
    yLines.push(
      <Line 
        key={"y" + i}
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
        { shapeList.length > 0 ?
            shapeList && shapeList.map((item: ShapeItem, i: any) => (
              <ShapeElement
                key={i}
                props={item}
                spacing={SPACING}
                isSelected={item?.id === selectedShape}
                onSelect={() => {
                  shapeSelector(item?.id || null)
                }}
                onChange={(newAttrs) => {
                  dispatch(updateElementInBlueprint(
                    {
                      newAttributes: newAttrs
                    }
                  ))
                }}
              />
            )) :
            initBlueprint && initBlueprint.map((item: ShapeItem, i: any) => (
              <ShapeElement
              key={i}
                props={item}
                spacing={SPACING}
                isSelected={item?.id === selectedShape}
                onSelect={() => {
                  shapeSelector(item?.id || null)
                }}
                onChange={(newAttrs) => {
                  dispatch(updateElementInBlueprint(
                    {
                      newAttributes: newAttrs
                    }
                  ))
                }}
              />
            ))
        }
      </Layer>
    </>
  )
}

export default LayoutBlueprintLayer