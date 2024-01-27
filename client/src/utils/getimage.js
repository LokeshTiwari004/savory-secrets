/**
 * this function makes api call for image response.
 * @param {String} url - provide the api url
 * @returns {Promise<FileReader>} - pending Promise of FileReader Object of base64string image.
 */

const getimage = async function (url) {
  const reader = new FileReader()

  const res = await fetch(`http://localhost:5000${url}`);
  const blob = await res.blob()

  reader.readAsDataURL(blob)
  return reader
}

export default getimage;