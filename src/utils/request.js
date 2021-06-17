import axios from 'axios';
import {
    cookie
} from "@/utils/index"
import {
    BASEURL
} from "@/utils/config"
import { Notify } from 'vant';
import Router from '@/router/index'

const service = axios.create({
    baseURL: BASEURL,
    // withCredentials: true, // 当跨域请求时设置cookie
    timeout: 5000 // 超时时间限制
});

// 请求拦截
service.interceptors.request.use(
    config => {
        let user_id = cookie.get('user_id')
        let user_token = cookie.get('user_token')
        if (user_token) {
            // 让每次请求携带token信息
            config.headers['Authorization'] = "bearer "+user_token;
        }
        if (user_id) {
            config.headers['UserId'] = user_id;
        }
        config.headers['VenuesID'] = window.venues;
        return config;
    },
    error => {
        // 请求出错是做一些事情
        console.log(error);
        return Promise.reject(error);
    }
)

service.interceptors.response.use(
    response => {
        const res = response.data;
        if (res.code !== 200) {
            if (res.code == 401) {
                Notify({
                    message: res.msg || 'Error',
                    type: 'danger',
                    duration: 5 * 1000
                });
                cookie.del('user_id')
                cookie.del('user_token')
                setTimeout(() => {
                    Router.push({path: '/login'})
                }, 1500);
            }
            Notify({
                message: res.msg || 'Error',
                type: 'danger',
                duration: 5 * 1000
            });
            return res;
           
        } else  {
           
            return res;
        }
    },
    error => {
        console.log(error)
        if (error.response && error.response.status == 500) {
            let res = error.response.data;
            /* 
             * res.code
             * 401: 无效的token， 其客户端登录 ， Token 过期;
             * 需要重新登录
             */
            if (res.code === 401) {
                Notify({
                    message: "请先登录" || 'Error',
                    type: 'danger',
                    duration: 5 * 1000
                });
                cookie.del('user_id')
                cookie.del('user_token')
                setTimeout(() => {
                    Router.push({path: '/login'})
                }, 1500);
                
            }
        } else {
            Notify({
                message: error.message,
                type: 'danger',
                duration: 5 * 1000
            });
            return Promise.reject(error);
        }
    }
)

export default service;
