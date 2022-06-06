import fileDownload from 'js-file-download'
import PromiseFileReader from 'promise-file-reader'

export async function mapFileToObject (file) {
  const data = await PromiseFileReader.readAsDataURL(file)

  return {
    data,
    lastModified: file.lastModified.toString(),
    lastModifiedDate: file.lastModifiedDate,
    name: file.name,
    size: file.size.toString(),
    type: file.type
  }
}

export function downloadFile (response, fileName) {
  return fileDownload(response.payload.data, fileName)
}
