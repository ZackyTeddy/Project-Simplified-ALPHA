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
    id? : string,
    shape: string,
    width: number,
    height: number,
    x: number,
    y: number,
    fill? : string,
    draggable? : boolean
}