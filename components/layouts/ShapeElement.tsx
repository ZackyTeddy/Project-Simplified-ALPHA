import { ShapeItem } from '@/utils/types'
import { Transformer } from 'konva/lib/shapes/Transformer';
import React, { Dispatch, LegacyRef, SetStateAction } from 'react'
import { Transformer as KonvaTransformer } from 'react-konva';

interface ShapeElementProps {
    props: ShapeItem;
    isSelected: boolean;
    onSelect: () => void;
    onChange: (newAttrs: any) => void;
    spacing: number;
}

const ShapeElement = ({props, isSelected, onSelect, onChange, spacing: SPACING}: ShapeElementProps) => {
    console.log("element", props)
    const Shape = props?.shape;
    const shapeRef = React.useRef<any>(null);
    const trRef = React.useRef<Transformer>(null);

    React.useEffect(() => {
        if (isSelected && trRef.current) {
            // we need to attach transformer manually
            trRef.current!.nodes([shapeRef.current]);
            trRef.current!.getLayer()!.batchDraw();
        }
    }, [isSelected]);

    return (
        <React.Fragment>
            <Shape 
                key={props?.id}
                ref={shapeRef}
                draggable
                onClick={onSelect}
                onTap={onSelect}
                onDragEnd={(e: any) => {
                    e.target.to({
                        x: Math.round(e.target.x() / SPACING) * SPACING,
                        y: Math.round(e.target.y() / SPACING) * SPACING
                    });
                    onChange({
                        ...props,
                        x: Math.round(e.target.x() / SPACING) * SPACING,
                        y: Math.round(e.target.y() / SPACING) * SPACING
                    })
                }}
                onTransformEnd={(e: any) => {
                    // transformer is changing scale of the node
                    // and NOT its width or height
                    // but in the store we have only width and height
                    // to match the data better we will reset scale on transform end
                    const node = shapeRef.current;
                    const scaleX = node.scaleX();
                    const scaleY = node.scaleY();
                    // we will reset it back
                    node.scaleX(1);
                    node.scaleY(1);
                    onChange({
                        ...props,
                        x: node.x(),
                        y: node.y(),
                        width: Math.round(Math.max(5, node.width() * scaleX) / SPACING) * SPACING,
                        height: Math.round(Math.max(5, node.height() * scaleY) / SPACING) * SPACING,
                    });
                }}
                { ...props }
                {
                    ...{
                        x: Math.round(props.x / SPACING) * SPACING,
                        y: Math.round(props.y / SPACING) * SPACING
                    }
                }

            />
            {
                isSelected && (
                    <KonvaTransformer
                        ref={trRef}
                        flipEnabled={false}
                        boundBoxFunc={(oldBox, newBox) => {
                            // limit resize
                            if (Math.abs(newBox.width) < 5 || Math.abs(newBox.height) < 5) {
                            return oldBox;
                            }
                            return newBox;
                        }}
                    />
                )
            }
        </React.Fragment>
    )
}

export default ShapeElement