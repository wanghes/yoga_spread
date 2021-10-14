import request from '@/utils/request'
import axios from 'axios';
import { UPLOADBASEURL } from "@/utils/config";


export function login(data) {
    return request({
        url: '/venues/login',
        method: 'post',
        data
    });
}

export function wxLogin(data) {
    return request({
        url: '/venues/wx/login',
        method: 'post',
        data
    });
}

export function register(data) {
    return request({
        url: '/venues/register',
        method: 'post',
        data
    });
}

export function smsLogin(data) {
    return request({
        url: '/venues/sms/login',
        method: 'post',
        data
    });
}

export function getVcode(data) {
    return request({
        url: '/venues/get/vcode',
        method: 'post',
        data
    });
}

export function editPassword(data) {
    return request({
        url: '/venues/update/password',
        method: 'put',
        data
    });
}

export function getUserByOpenId(params) {
    return request({
        url: '/venues/venues/query_user_by_openid',
        method: 'get',
        params
    });
}

