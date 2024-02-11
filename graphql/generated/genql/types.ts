export default {
    "scalars": [
        0,
        1,
        3,
        5,
        8,
        10
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
                5
            ]
        },
        "ID": {},
        "Member": {
            "created_at": [
                0
            ],
            "firstName": [
                5
            ],
            "lastName": [
                5
            ],
            "location": [
                5
            ],
            "memberId": [
                3
            ],
            "region": [
                5
            ],
            "roles": [
                5
            ],
            "status": [
                5
            ],
            "teams": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "String": {},
        "Mutation": {
            "createLayout": [
                2,
                {
                    "location": [
                        5
                    ],
                    "name": [
                        5,
                        "String!"
                    ]
                }
            ],
            "createMember": [
                4,
                {
                    "firstName": [
                        5,
                        "String!"
                    ],
                    "lastName": [
                        5
                    ],
                    "location": [
                        5
                    ],
                    "region": [
                        5
                    ],
                    "teams": [
                        5,
                        "String!"
                    ]
                }
            ],
            "createTeam": [
                9,
                {
                    "leader": [
                        5
                    ],
                    "location": [
                        5
                    ],
                    "name": [
                        5,
                        "String!"
                    ],
                    "timeslot": [
                        5
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
                9,
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
                        5
                    ],
                    "id": [
                        3,
                        "ID!"
                    ],
                    "lastName": [
                        5
                    ],
                    "location": [
                        5
                    ],
                    "region": [
                        5
                    ],
                    "roles": [
                        5,
                        "[String!]!"
                    ]
                }
            ],
            "updateTeam": [
                9,
                {
                    "id": [
                        3,
                        "ID!"
                    ],
                    "leader": [
                        5
                    ],
                    "name": [
                        5
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "Query": {
            "getLayouts": [
                2,
                {
                    "sortBy": [
                        8
                    ]
                }
            ],
            "getMembers": [
                4,
                {
                    "id": [
                        5,
                        "String!"
                    ],
                    "sortBy": [
                        8
                    ]
                }
            ],
            "getOneLayout": [
                2,
                {
                    "id": [
                        5,
                        "String!"
                    ]
                }
            ],
            "getOneTeam": [
                9,
                {
                    "id": [
                        5,
                        "String!"
                    ]
                }
            ],
            "getTeams": [
                9,
                {
                    "sortBy": [
                        8
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "SortOrder": {},
        "Team": {
            "active": [
                10
            ],
            "created_at": [
                0
            ],
            "leader": [
                5
            ],
            "location": [
                5
            ],
            "members": [
                5
            ],
            "name": [
                5
            ],
            "region": [
                5
            ],
            "team_Id": [
                3
            ],
            "timeslot": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "Boolean": {}
    }
}