"use client"

import React, { useEffect, useState } from 'react'
import {Circle, Layer, Stage} from 'react-konva'
import LayoutBlueprintLayer from './LayoutBlueprintLayer'
import { useAppDispatch } from '@/redux/hooks';
import { setCurrentBlueprint } from '@/redux/slices/layoutSlice';

interface LayoutStageProps {
  layout: any;
}

const LayoutStage = ({layout} : LayoutStageProps) => {
  const dispatch = useAppDispatch();

  const [selectedId, selectShape] = useState<string | null>(null);

  const STAGE_WIDTH = 1000, STAGE_HEIGHT = 450;

  const checkDeselect = (e: any) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  useEffect(() => {
    console.log('layout', layout)
    dispatch(setCurrentBlueprint({
      id: layout.layoutId,
      blueprint: layout.blueprint
    }))
  },[])

  return (
    <Stage 
      width={STAGE_WIDTH} 
      height={STAGE_HEIGHT} 
      onMouseDown={checkDeselect}
      onTouchStart={checkDeselect}
    >
        <LayoutBlueprintLayer 
          width={STAGE_WIDTH} 
          height={STAGE_HEIGHT}
          initBlueprint={layout?.blueprint}
          shapeSelector={selectShape}
          selectedShape={selectedId}
        />
    </Stage>
  )
}

export default LayoutStage