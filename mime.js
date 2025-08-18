import mime from 'mime'
export function getContentType(ext) {
   return mime.getType(ext)
}