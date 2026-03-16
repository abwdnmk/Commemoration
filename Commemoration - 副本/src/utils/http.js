import axios from 'axios'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus';

const httpInstance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000
})

//axios请求拦截器
httpInstance.interceptors.request.use(config => {
    // 统一设置 Content-Type 为 JSON
    config.headers['Content-Type'] = 'application/json';
    return config
}, e => Promise.reject(e))

//axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    ElMessage({
        type: 'warning',
        message: e.response.data.msg
    })
    return Promise.reject(e)
})

export default httpInstance
