import axios, { AxiosResponse } from 'axios';
import { Advertisement } from './models/advertisement';
import { Member, MemberFormValue } from './models/member';

axios.defaults.baseURL = 'http://localhost:6600/api';

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    delete: <T> (url: string) => axios.delete<T>(url).then(responseBody),
}

const Advertisements = {
    list: () => requests.get<Advertisement[]>('/advertisement'),
    create: (advertisement: Advertisement) => axios.post<void>('/advertisement', advertisement),
    update: (advertisement: Advertisement) => axios.post<void>(`/advertisement/${advertisement.id}`, advertisement),
    delete: (id: string) => axios.delete<void>((`/advertisement/${id}`))
}

const Members = {
    list: () => requests.get<Member[]>('/member'),
}

const Account = {
    current: () => requests.get<Member>('/account'),
    login: (member: MemberFormValue) => requests.post<Member>('/account/login', member),
    register: (member: MemberFormValue) => requests.post<Member>('/account/register', member)
}


const agent = {
    Advertisements,
    Members,
    Account
}

export default agent;