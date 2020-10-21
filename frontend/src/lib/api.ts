import axios from 'axios'

const baseUrl = '/api'


export const getAllPlants = () => {
  return axios.get(`${baseUrl}/plants`)
}
export const showSinglePlant = (id: Number) => {
  return axios.get(`${baseUrl}/plants/${id}`)
}



// export const registerUser = formData => {
//   return axios.post(`${baseUrl}/register`, formData)
// }
// export const loginUser = formData => {
//   return axios.post(`${baseUrl}/login`, formData )
// }

