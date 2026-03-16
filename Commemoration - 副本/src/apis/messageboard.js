import request from '../utils/http'


//获取留言信息接口
export const Getmessage = () => {
    return request({
        url: '/messageboard/getmessage',
        method: 'GET'
    })
}

//添加留言接口
export const Addmessage = (form) => {
    return request({
        url: '/messageboard/addmessage',
        method: 'POST',
        data: {
            name: form.name,
            content: form.content
        }
    })
}