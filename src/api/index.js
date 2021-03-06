// const apiURL = 'https://jsonplaceholder.typicode.com' // this is only and example url

const makeRequest = endpoint => {
  const customHeaders = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  })

  return new Promise((resolve, reject) => {
    fetch(endpoint, {
        headers: customHeaders,
        mode: 'cors',
        method: 'GET'
      })
      .then(res => res.json())
      .then(data => {
        resolve(data)
      })
      .catch(error => reject(error))
  })
}

const getCoffees = () => {
  return makeRequest('../static/data/coffees.json')
}
const getNeighborhoods = () => {
  return makeRequest('../static/data/neighborhood.json')
}

const api = {
  getCoffees,
  getNeighborhoods,

}

export default api
