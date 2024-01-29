import axios from 'axios';
/**
 * this function to make api call for json response
 * @param {String} url - provide the api url
 * @returns {Promise} - fullfilled Promise of AxiosReponse Object
 */
const getdata = async function (url) {
  const res = await axios.get(`http://127.0.0.1:5000/api${url}`);
  return res
};

export default getdata;