import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbSI6ZmFsc2UsImlkIjoiODdmMjgzNGUtNjE4YS00OTg2LWFhOGEtZTNiNThhOWZmNmYyIiwiaWF0IjoxNjc4Nzk3ODU5LCJleHAiOjE2Nzg4ODQyNTksInN1YiI6Ijg3ZjI4MzRlLTYxOGEtNDk4Ni1hYThhLWUzYjU4YTlmZjZmMiJ9.3DbgVjCrSu_gLbRJiikTkJOGywiLQxhL-G8sWOIGuZw"

const api = axios.create({
    baseURL: "https://findyourbook-api-4jve.onrender.com/",
    timeout: 5000,
    headers: {'Authorization': `Bearer ${token}`}
});

export default api;