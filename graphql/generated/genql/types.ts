export default {
    "scalars": [
        0,
        2,
        3,
        5,
        7
    ],
    "types": {
        "DateTime": {},
        "Mutation": {
            "createTeam": [
                6,
                {
                    "leader": [
                        2
                    ],
                    "location": [
                        2
                    ],
                    "name": [
                        2,
                        "String!"
                    ],
                    "timeslot": [
                        2
                    ]
                }
            ],
            "deleteTeam": [
                6,
                {
                    "id": [
                        3,
                        "ID!"
                    ]
                }
            ],
            "updateTeam": [
                6,
                {
                    "id": [
                        3,
                        "ID!"
                    ],
                    "leader": [
                        2
                    ],
                    "name": [
                        2
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "String": {},
        "ID": {},
        "Query": {
            "getOneTeam": [
                6,
                {
                    "id": [
                        2,
                        "String!"
                    ]
                }
            ],
            "getTeams": [
                6,
                {
                    "sortBy": [
                        5
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "SortOrder": {},
        "Team": {
            "active": [
                7
            ],
            "created_at": [
                0
            ],
            "leader": [
                2
            ],
            "location": [
                2
            ],
            "members": [
                2
            ],
            "name": [
                2
            ],
            "region": [
                2
            ],
            "team_Id": [
                3
            ],
            "timeslot": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "Boolean": {}
    }
}