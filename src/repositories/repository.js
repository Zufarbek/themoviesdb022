import Axios from 'axios'

export const baseUrl = 'https://api.themoviedb.org/3/'
export const contentUrl = "https://image.tmdb.org/t/p/w500"
export const bearerToken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWNjN2Y1ZjQ1OTAzOGQ4ZjZmZDI3MTUwNDQ5ZDZhMSIsInN1YiI6IjYyODRkOWY3ZmE3OGNkMmRjNDY4YmJmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xsJs-bLpD4d8WjUGABE1h9U-fFCfqxPbvCpQVM_oBIY'

const client = Axios.create({
    baseUrl: baseUrl,
})

export default client