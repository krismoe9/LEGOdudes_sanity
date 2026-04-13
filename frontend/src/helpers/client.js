import {createClient} from '@sanity/client'

const client = createClient ({
    projectId: "8s2yc0j3",
    dataset: "production",
    useCdn: true,
    apiVersion: "2026-04-13"
})

export default client