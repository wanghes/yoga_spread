import request from '@/utils/request'


export function getUser(params) {
    return request({
        url: '/index/weixin/userinfo',
        method: 'get',
        params
    });
}

export function getCode(params) {
    return request({
        url: '/index/weixin/code',
        method: 'get',
        params
    });
}

export function getAuth(params) {
    return request({
        url: '/index/weixin/auth',
        method: 'get',
        params
    });
}

export function pay(data) {
    return request({
        url: '/index/weixin/pay',
        method: 'post',
        data
    });
}


export function payOk(data) {
    return request({
        url: '/index/weixin/pay_ok',
        method: 'post',
        data
    });
}

export function pay_online_Ok(data) {
    return request({
        url: '/index/weixin/pay_online_Ok',
        method: 'post',
        data
    });
}

export function pay_free_online_Ok(data) {
    return request({
        url: '/index/weixin/pay_free_online_Ok',
        method: 'post',
        data
    });
}

export function jssdk_config(data) {
    return request({
        url: '/index/weixin/jssdk_config',
        method: 'post',
        data
    });
}

