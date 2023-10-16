//THIS IS TEST DATA

import { TeamData } from "./types"

export const user = {
    name : "Zack",
    role : "Developer",
    status: "Agent"
}

export const teams : TeamData[] = [
    {
        id: "1",
        name: "Sunrise Alpha",
        timeslot: "7AM",
        leader: "John Doe",
        location: "KL",
        region: "Malaysia"
    },
    {
        id: "2",
        name: "Morning Bravo",
        "timeslot": "9AM",
        "leader": "Jess Doe"
    },
    {
        id: "3",
        name: "Noon Delta",
        timeslot: "11AM",
        leader: "Jacob Rock"
    },
    {
        id: "4",
        name: "Sundown Echo",
        timeslot: "4PM",
        leader: "Jenn Foster"
    },
    {
        id: "5",
        name: "Night Lemur",
        timeslot: "6PM",
        leader: "Joseph Fleece"
    },
]