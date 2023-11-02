//THIS IS TEST DATA

import { Roles } from "./types"

export const user = {
    name : "Zack",
    role : "Developer",
    status: "Agent"
}

export const TEAM_ROLES : Roles[] = [
    {callsign: "LEAD", role: "Lead", color: "#fd1d1d"},
    {callsign: "OS", role: "Oversight", color: "#147ed9"},
    {callsign: "PIC", role: "PIC", color: "#00d4ff"},
    {callsign: "AL", role: "Aisle Lead", color: "#ff8d00"},
    {callsign: "OUT", role: "Offering-Handout", color: "#14d91a"},
    {callsign: "IN", role: "Offering-Receiver", color: "#e1c810"},
    {callsign: "RUN", role: "Section Runner", color: "#9810e1"},
    {callsign: "MALL", role: "Mall Usher", color: "#e1105e"},
    {callsign: "CAR", role: "Carpark Usher", color: "#e11096"},
    {callsign: "INFO", role: "Info Desk", color: "#6b10e1"},
    {callsign: "SPEC", role: "Special Role", color: "#e110d2"},
]

