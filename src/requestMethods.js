import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWE3MmZkNTNhZGEzNTUwNGMwZGI1YyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODkxMzI3NzYsImV4cCI6MTY4OTM5MTk3Nn0.E-5YMIwn2agFmRyMajT9WrOWPuylsoFiG9frtE28U1A"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {
        token: `Bearer ${TOKEN}`
    }
})