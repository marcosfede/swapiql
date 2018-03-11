import axios from 'axios'

const BASE_URL = 'https://swapi.co/api/'

async function getAllPages(client, url) {
  let data = []
  let page = 0
  let response
  do {
    page++
    response = await client.get(url + `?page=${page}`).then(res => res.data)
    data = data.concat(response.results)
  } while (response.next)
  return data
}

const client = axios.create({
  baseURL: BASE_URL,
})

async function fetchPeople() {
  const allPeople = await getAllPages(client, '/people/')
  console.log(allPeople.length)
}
async function fetchPlanets() {
  const allPlanets = await getAllPages(client, '/planets/')
  console.log(allPlanets.length)
}
async function fetchFilms() {
  const allFilms = await getAllPages(client, '/films/')
  console.log(allFilms.length)
}
async function fetchSpecies() {
  const allSpecies = await getAllPages(client, '/species/')
  console.log(allSpecies.length)
}
async function fetchVehicles() {
  const allVehicles = await getAllPages(client, '/vehicles/')
  console.log(allVehicles.length)
}
async function fetchStarships() {
  const allStarships = await getAllPages(client, '/starships/')
  console.log(allStarships.length)
}
fetchPeople()
