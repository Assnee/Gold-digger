import http from 'node:http'

import { serveStatic } from './serveStatic.js'

const __dirname = import.meta.dirname
const PORT = 8000
const server = http.createServer(async (req, res) => {

    await serveStatic(req, res, __dirname)

})
server.listen(PORT, () => {
    console.log(`we are live on this ${PORT}`)



})