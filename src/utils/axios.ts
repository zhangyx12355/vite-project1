import http from 'axios'
import { ElMessage } from 'element-plus'


// 设置请求头和请求路径
http.defaults.baseURL = 'http://localhost:8080'
http.defaults.timeout = 10000
http.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

// 前置拦截器（发起请求之前的拦截）
http.interceptors.request.use(
    (config) => {
        /**
         * 根据你的项目实际情况来对 config 做处理
         * 这里对 config 不做任何处理，直接返回
         */
         const token = JSON.parse(sessionStorage.getItem('user') || '{}').data.token
         
         if (token) {
           //@ts-ignore
           config.headers.token = token
         }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 后置拦截器（获取到响应时的拦截）
http.interceptors.response.use(
    (response) => {
        /**
         * 根据你的项目实际情况来对 response 和 error 做处理
         * 这里对 response 和 error 不做任何处理，直接返回
         */
         let res:any = response.data;
         //如果返回文件
         if (response.config.responseType === 'blob') {
             return res
         }
 
         //兼容服务器返回字符串数据
         if (typeof res === 'string') {
             res = res ? JSON.parse(res) : res
         }
 
         // 当权限验证不通过时给出提示
         if (res.code === '401'){
             ElMessage.error(res.msg)
         }
        return response
    },
    (error) => {
        if (error.response && error.response.data) {
            const code = error.response.status
            const msg = error.response.data.message
            ElMessage.error(`Code: ${code}, Message: ${msg}`)
        } else {
            ElMessage.error(`${error}`)
        }
        return Promise.reject(error)
    }
)

export default http
