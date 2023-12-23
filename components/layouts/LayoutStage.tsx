"use client"

import React, { useEffect, useState } from 'react'
import { Stage } from 'react-konva'
import LayoutBlueprintLayer from './LayoutBlueprintLayer'
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setCurrentBlueprint, setSelectedElement } from '@/redux/slices/layoutSlice';

interface LayoutStageProps {
  layout: any;
}

const LayoutStage = ({layout} : LayoutStageProps) => {
  const dispatch = useAppDispatch();
  const selectedId = useAppSelector((state) => state.layout.selectedElement)

  const selectShape = (index: string | null) => {
    dispatch(setSelectedElement(index))
  }

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
      blueprint: layout.blueprint,
      metadata: layout.metadata,
      positions: layout.positions
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