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
    {callsign: "PR", role: "Parents Room", color: "#8f490c"},
    {callsign: "MALL", role: "Mall Usher", color: "#e1105e"},
    {callsign: "CAR", role: "Carpark Usher", color: "#e11096"},
    {callsign: "INFO", role: "Info Desk", color: "#6b10e1"},
    {callsign: "SPEC", role: "Special Role", color: "#e110d2"},
]

export const GRADIENTS = [
    "linear-gradient(90deg, rgba(216,217,20,1) 0%, rgba(226,198,15,1) 51%, rgba(255,141,0,1) 100%);",
    "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(234,253,45,1) 100%);",
    "linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);",
    "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);"
]
