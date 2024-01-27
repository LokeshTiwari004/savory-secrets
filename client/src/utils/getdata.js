/**
 * this function to make api call for json response
 * @param {String} url - provide the api url
 * @returns {Promise<Object>} - pending Promise of js Object equivalent to json response
 */
const getdata = async function (url) {
  const res = await fetch(`http://127.0.0.1:5000${url}`);
  const json = await res.json()
  return json
};

export default getdata;