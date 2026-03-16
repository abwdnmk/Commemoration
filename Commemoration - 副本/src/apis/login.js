import request from '../utils/http'

//登录接口
export const Login = (form) => {
    return request({
        url: '/user/login',
        method: 'POST',
        data: {
            account: form.account,
            password: form.password
        }
    })
}

//注册接口
export const Register = (formre) => {
    return request({
        url: '/user/register',
        method: 'POST',
        data: {
            account: formre.account,
            password: formre.password
        }
    })
}