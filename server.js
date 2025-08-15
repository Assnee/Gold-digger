import http from 'node:http'

const PORT = 8000
const server = http.createServer((req, res) => {
    res.end("here we are")
})
server.listen(PORT, () => {
    console.log(`we are live on this ${PORT}`)
})