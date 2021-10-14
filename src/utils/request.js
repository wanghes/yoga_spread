import axios from 'axios';
import {
    BASEURL
} from "@/utils/config"
import { Notify } from 'vant';

const service = axios.create({
    baseURL: BASEURL,
    // withCredentials: true, // 当跨域请求时设置cookie
    timeout: 5000 // 超时时间限制
});

// 请求拦截
service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        // 请求出错是做一些事情
        return Promise.reject(error);
    }
)

service.interceptors.response.use(
    response => {
        const res = response.data;
        if (res.code !== 200) {
            // Notify({
            //     message: res.msg || 'Error',
            //     type: 'danger',
            //     duration: 5 * 1000
            // });
            return res;
        } else  {
            return res;
        }
    },
    error => {
        if (error.response && error.response.status == 500) {
            let res = error.response.data;
            Notify({
                message: res || 'Error',
                type: 'danger',
                duration: 5 * 1000
            });
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
