import axios, {InternalAxiosRequestConfig,AxiosRequestHeaders,AxiosInstance} from 'axios';


const baseUrl = "http://localhost:9000/"

interface CustomAxiosRequestHeaders extends AxiosRequestHeaders {
    "X-API-KEY": string,
}
const axiosCustom:AxiosInstance = axios.create({
    baseURL:baseUrl,
})
axiosCustom.interceptors.request.use((config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    config.withCredentials = true
    config.headers = {
        "X-API-KEY":"KPXYF3M-F284WXX-K441ABZ-YYZRY9D",
        // Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzdiYWY2YjFkZjZhNmYwMDAzYWU5NTAyMDBjZTA0OSIsInN1YiI6IjVmYjdlNTU3OWEzNThkMDA0MzY1ZGI5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EFjEIEjy6A9rHxB4xpsgSbD3JmxEEq3b4HakuujcZDs"
    } as CustomAxiosRequestHeaders;
    return config;
})


export default axiosCustom