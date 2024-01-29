import axios from 'axios';

const baseAPIurl = "http://localhost:5000/api"



/**
 * this function to make api call for json response
 * @param {String} url - provide the api url
 * @returns {Promise} - fullfilled Promise of AxiosReponse Object
 */
const get_json = async function (url) {
  const res = await axios.get(`${baseAPIurl}${url}`, {
    responseType: "json"
  });
  return res.data
};



/**
 * this function makes api call for image response.
 * @param {String} url - provide the api url
 * @returns {Promise<FileReader>} - pending Promise of FileReader Object of base64string image.
 */

const get_img = async function (url) {
  const reader = new FileReader()

  const res = await axios.get(`${baseAPIurl}${url}`, {
    responseType: "blob"
  });

  reader.readAsDataURL(res.data)
  return reader
}


export { get_json, get_img };