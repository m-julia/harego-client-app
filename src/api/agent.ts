import axios, { AxiosResponse } from 'axios';
import { Advertisement } from './models/advertisement';
import { Member } from './models/member';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    delete: <T> (url: string) => axios.delete<T>(url).then(responseBody),
}

const Advertisements = {
    list: () => requests.get<Advertisement[]>('/advertisement'),
}

const Members = {
    list: () => requests.get<Member[]>('/member'),
}


const agent = {
    Advertisements,
    Members
}

export default agent;