import { createClient } from "../graphql/generated/genql"

export const client = createClient({
    url: 'http://localhost:4000/graphql'
})