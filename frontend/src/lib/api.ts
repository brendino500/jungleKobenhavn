import axios from 'axios'

const baseUrl = '/api'


export const getAllPlants = () => {
  return axios.get(`${baseUrl}/plants`)
}
export const showSinglePlant = (id: Number) => {
  return axios.get(`${baseUrl}/plants/${id}`)
}
