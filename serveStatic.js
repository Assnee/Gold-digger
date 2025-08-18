import path from 'node:path'
import fs from 'node:fs/promises'
import { sendResponse } from './sendResponse.js'
import { getContentType } from './mime.js'
export async function serveStatic(req, res, base) {
    const filepath = path.join(base, req.url === '/' ? 'index.html' : req.url)
    const ext = path.extname(filepath)
    const contentType = getContentType(ext)
    console.log(contentType)
    try {
        const content = await fs.readFile(filepath)
        sendResponse(res, 200, contentType, content)

    } catch (err) {
        if (err.code === 'ENOENT') {
            const content = await fs.readFile('./404.html', 'utf-8')
            sendResponse(res, 404, contentType, content)
        } else {
            sendResponse(res, 500, 'text/html', "<html><p>error code:${err.code}</p></html>")
        }

    }



}
