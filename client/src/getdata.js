const getdata = async function (url) {
  const res = await fetch(`http://127.0.0.1:5000${url}`);
  return await res.json()
};

export default getdata;