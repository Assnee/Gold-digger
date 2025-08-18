import path from 'node:path'
import fs from 'node:fs/promises'
export async function getData() {
    try {
        const readPath = await fs.readFile('data.json', 'utf8')
        const dataReturned = Json.parsed(readPath)
        return dataReturned
    } catch (err) {
        console.log(err)
        return []

    }
}