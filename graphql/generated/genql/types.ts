export default {
    "scalars": [
        0,
        1,
        3,
        5,
        6,
        9
    ],
    "types": {
        "DateTime": {},
        "JSON": {},
        "Layout": {
            "blueprint": [
                1
            ],
            "created_at": [
                0
            ],
            "layoutId": [
                3
            ],
            "metadata": [
                1
            ],
            "positions": [
                1
            ],
            "__typename": [
                6
            ]
        },
        "ID": {},
        "Member": {
            "active": [
                5
            ],
            "created_at": [
                0
            ],
            "firstName": [
                6
            ],
            "lastName": [
                6
            ],
            "location": [
                6
            ],
            "memberId": [
                3
            ],
            "region": [
                6
            ],
            "roles": [
                6
            ],
            "teams": [
                6
            ],
            "__typename": [
                6
            ]
        },
        "Boolean": {},
        "String": {},
        "Mutation": {
            "createLayout": [
                2,
                {
                    "location": [
                        6
                    ],
                    "name": [
                        6,
                        "String!"
                    ]
                }
            ],
            "createMember": [
                4,
                {
                    "firstName": [
                        6,
                        "String!"
                    ],
                    "lastName": [
                        6
                    ],
                    "location": [
                        6
                    ],
                    "region": [
                        6
                    ],
                    "teams": [
                        6,
                        "String!"
                    ]
                }
            ],
            "createTeam": [
                10,
                {
                    "leader": [
                        6
                    ],
                    "location": [
                        6
                    ],
                    "name": [
                        6,
                        "String!"
                    ],
                    "timeslot": [
                        6
                    ]
                }
            ],
            "deleteLayout": [
                2,
                {
                    "id": [
                        3,
                        "ID!"
                    ]
                }
            ],
            "deleteMember": [
                4,
                {
                    "id": [
                        3,
                        "ID!"
                    ]
                }
            ],
            "deleteTeam": [
                10,
                {
                    "id": [
                        3,
                        "ID!"
                    ]
                }
            ],
            "updateLayout": [
                2,
                {
                    "blueprint": [
                        1,
                        "[JSON!]!"
                    ],
                    "id": [
                        3,
                        "ID!"
                    ],
                    "metadata": [
                        1
                    ],
                    "positions": [
                        1,
                        "[JSON!]!"
                    ]
                }
            ],
            "updateMember": [
                4,
                {
                    "firstName": [
                        6
                    ],
                    "id": [
                        3,
                        "ID!"
                    ],
                    "lastName": [
                        6
                    ],
                    "location": [
                        6
                    ],
                    "region": [
                        6
                    ],
                    "roles": [
                        6,
                        "[String!]!"
                    ]
                }
            ],
            "updateTeam": [
                10,
                {
                    "id": [
                        3,
                        "ID!"
                    ],
                    "leader": [
                        6
                    ],
                    "name": [
                        6
                    ]
                }
            ],
            "__typename": [
                6
            ]
        },
        "Query": {
            "getLayouts": [
                2,
                {
                    "sortBy": [
                        9
                    ]
                }
            ],
            "getMembers": [
                4,
                {
                    "id": [
                        6,
                        "String!"
                    ]
                }
            ],
            "getOneLayout": [
                2,
                {
                    "id": [
                        6,
                        "String!"
                    ]
                }
            ],
            "getOneTeam": [
                10,
                {
                    "id": [
                        6,
                        "String!"
                    ]
                }
            ],
            "getTeams": [
                10,
                {
                    "sortBy": [
                        9
                    ]
                }
            ],
            "__typename": [
                6
            ]
        },
        "SortOrder": {},
        "Team": {
            "active": [
                5
            ],
            "created_at": [
                0
            ],
            "leader": [
                6
            ],
            "location": [
                6
            ],
            "members": [
                6
            ],
            "name": [
                6
            ],
            "region": [
                6
            ],
            "team_Id": [
                3
            ],
            "timeslot": [
                6
            ],
            "__typename": [
                6
            ]
        }
    }
}