export default {
    "scalars": [
        0,
        2,
        3,
        4,
        7
    ],
    "types": {
        "DateTime": {},
        "Member": {
            "active": [
                2
            ],
            "created_at": [
                0
            ],
            "firstName": [
                3
            ],
            "lastName": [
                3
            ],
            "location": [
                3
            ],
            "memberId": [
                4
            ],
            "region": [
                3
            ],
            "role": [
                3
            ],
            "teams": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "Boolean": {},
        "String": {},
        "ID": {},
        "Mutation": {
            "createMember": [
                1,
                {
                    "firstName": [
                        3,
                        "String!"
                    ],
                    "lastName": [
                        3
                    ],
                    "location": [
                        3
                    ],
                    "region": [
                        3
                    ],
                    "teams": [
                        3,
                        "String!"
                    ]
                }
            ],
            "createTeam": [
                8,
                {
                    "leader": [
                        3
                    ],
                    "location": [
                        3
                    ],
                    "name": [
                        3,
                        "String!"
                    ],
                    "timeslot": [
                        3
                    ]
                }
            ],
            "deleteMember": [
                1,
                {
                    "id": [
                        4,
                        "ID!"
                    ]
                }
            ],
            "deleteTeam": [
                8,
                {
                    "id": [
                        4,
                        "ID!"
                    ]
                }
            ],
            "updateMember": [
                1,
                {
                    "firstName": [
                        3
                    ],
                    "id": [
                        4,
                        "ID!"
                    ],
                    "lastName": [
                        3
                    ],
                    "location": [
                        3
                    ],
                    "region": [
                        3
                    ]
                }
            ],
            "updateTeam": [
                8,
                {
                    "id": [
                        4,
                        "ID!"
                    ],
                    "leader": [
                        3
                    ],
                    "name": [
                        3
                    ]
                }
            ],
            "__typename": [
                3
            ]
        },
        "Query": {
            "getMembers": [
                1,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "getOneTeam": [
                8,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "getTeams": [
                8,
                {
                    "sortBy": [
                        7
                    ]
                }
            ],
            "__typename": [
                3
            ]
        },
        "SortOrder": {},
        "Team": {
            "active": [
                2
            ],
            "created_at": [
                0
            ],
            "leader": [
                3
            ],
            "location": [
                3
            ],
            "members": [
                3
            ],
            "name": [
                3
            ],
            "region": [
                3
            ],
            "team_Id": [
                4
            ],
            "timeslot": [
                3
            ],
            "__typename": [
                3
            ]
        }
    }
}