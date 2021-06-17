import request from '@/utils/request'
import axios from 'axios';
import { UPLOADBASEURL } from "@/utils/config";


export function login(data) {
    return request({
        url: '/index/login',
        method: 'post',
        data
    });
}


export function wxLogin(data) {
    return request({
        url: '/index/wx/login',
        method: 'post',
        data
    });
}

export function register(data) {
    return request({
        url: '/index/register',
        method: 'post',
        data
    });
}

export function updateInfo(data) {
    return request({
        url: '/index/update/info',
        method: 'put',
        data
    });
}

export function smsLogin(data) {
    return request({
        url: '/index/sms/login',
        method: 'post',
        data
    });
}

export function getVcode(data) {
    return request({
        url: '/index/get/vcode',
        method: 'post',
        data
    });
}

export function editPassword(data) {
    return request({
        url: '/index/update/password',
        method: 'put',
        data
    });
}

export function getUser(params) {
    return request({
        url: '/index/member/query',
        method: 'get',
        params
    });
}


export function getUserByOpenId(params) {
    return request({
        url: '/index/member/query_by_openid',
        method: 'get',
        params
    });
}


export function uploadHead(formData) {
    return axios.post(`${UPLOADBASEURL}/upload/member_head`, formData, {
        headers: { "Content-Type": "multipart/form-data" }
    })
}