export type TeamData = {
    id: string;
    name: string;
    timeslot: string;
    leader: string;
    location?: string;
    region?: string;
}

export type Roles = {
    callsign: string;
    role: string;
    color: string;
}

export type ShapeItem = {
    id : string,
    shape: string,
    width: number,
    height: number,
    x: number,
    y: number,
    alias?: string,
    text?: string,
    fill?: string,
    stroke?: string,
    draggable?: boolean,
    isSelected?: boolean,
    ref?: any,
    onDragEnd?: () => void,
    onSelect?: () => void,
    onChange?: () => void,
    onClick?: () => void,
    onTap?: () => void,
    onTransformEnd?: () => void,

}