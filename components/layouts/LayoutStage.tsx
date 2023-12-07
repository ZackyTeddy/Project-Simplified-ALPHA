"use client"

import React, { useState } from 'react'
import {Circle, Layer, Stage} from 'react-konva'
import LayoutBlueprintLayer from './LayoutBlueprintLayer'

const LayoutStage = () => {
  const [selectedId, selectShape] = useState<string | null>(null);

  const STAGE_WIDTH = 1000, STAGE_HEIGHT = 450;

  const checkDeselect = (e: any) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

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
          shapeSelector={selectShape}
          selectedShape={selectedId}
        />
    </Stage>
  )
}

export default LayoutStage