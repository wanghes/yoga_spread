import request from '@/utils/request'

export function jssdk_config(data) {
    return request({
        url: '/venues/wx/jssdk_config',
        method: 'post',
        data
    });
}

export function getUser(params) {
    return request({
        url: '/venues/wx/userinfo',
        method: 'get',
        params
    });
}

export function getCode(params) {
    return request({
        url: '/venues/wx/code',
        method: 'get',
        params
    });
}

export function getAuth(params) {
    return request({
        url: '/venues/wx/auth',
        method: 'get',
        params
    });
}

export function pay(data) {
    return request({
        url: '/venues/wx/pay',
        method: 'post',
        data
    });
}


export function payOk(data) {
    return request({
        url: '/venues/wx/buy_venues_ok',
        method: 'post',
        data
    });
}



