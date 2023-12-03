"use client"

import React from 'react'
import {Circle, Layer, Stage} from 'react-konva'
import LayoutBlueprintLayer from './LayoutBlueprintLayer'

const LayoutStage = () => {
  const STAGE_WIDTH = 1000, STAGE_HEIGHT = 450;

  return (
    <Stage width={STAGE_WIDTH} height={STAGE_HEIGHT} >
        <LayoutBlueprintLayer 
          width={STAGE_WIDTH} 
          height={STAGE_HEIGHT} 
        />
    </Stage>
  )
}

export default LayoutStage