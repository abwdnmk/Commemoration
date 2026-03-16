<template>
    <div class="loginBody">
        <div class="form-container">
            <div class="pre_box">
                <h1 style="text-align: center;letter-spacing: 10px;color: white">WELCOME</h1>
                <P style="text-align: center;font-weight: bold;color: white;">JOIN US!</P>
                <div class="img-box">
                    <img src="../assets/LoginPicture/xxx.webp"
                        style="width: 300px;height: 400px;box-shadow: 4px 4px 3px rgba(0, 0, 0, .1);transition: 0.5s;">
                </div>
            </div>

            <div>
                <el-form :model="registerForm" :rules="rules" ref="registerruleFormref" label-width="auto"
                    label-position="top" style="max-width: 1000px" size="large">
                    <h1 style="text-align: center;color: white;">注册</h1>
                    <el-form-item label="用户名:" prop="account">
                        <el-input v-model="registerForm.account" placeholder="请输入用户名" style="width: 275px;" />
                    </el-form-item>
                    <el-form-item label="密码:" prop="password">
                        <el-input v-model="registerForm.password" type="password" placeholder="请输入新密码" show-password />
                    </el-form-item>
                    <div style="text-align: center;">
                        <el-button type="primary" size="medium" style="width: 240px;"
                            @click="registerSubmit">注册</el-button>
                        <p @click="mySwitch()" style="text-align: right;cursor: pointer;color: blue;">已有账号?去登录</p>
                    </div>
                </el-form>
            </div>

            <div>
                <el-form :model="loginForm" ref="loginruleFormref" :rules="rules" label-width="auto"
                    label-position="top" style="max-width: 1000px;" size="large">
                    <h1 style="text-align: center;color: white;">登录</h1>
                    <el-form-item label="用户名：" prop="account">
                        <el-input v-model="loginForm.account" placeholder="请输入用户名" style="width: 275px;" />
                    </el-form-item>
                    <el-form-item label="密码：" prop="password">
                        <el-input v-model="loginForm.password" type="password" placeholder="请输入密码" show-password />
                    </el-form-item>
                    <div style="text-align: center;">
                        <el-button type="primary" size="medium" style="width: 240px;"
                            @click="loginSubmit">登录</el-button>
                        <p @click="mySwitch()" style="text-align: right;cursor:pointer;color:blue">没有账号?去注册</p>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script setup>
import $ from 'jquery'
import { ref } from 'vue'
import xxx from '../assets/LoginPicture/xxx.webp'
import regs from '../assets/LoginPicture/regs.png'
import { Login, Register } from '../apis/login'
import { ElMessage } from 'element-plus'

const flag = ref(true)
const mySwitch = () => {
    if (flag.value) {
        $(".pre_box").css("transform", "translateX(100%)")
        $(".pre_box").css("background-color", "skyblue")
        $("img").attr("src", regs)
    }
    else {
        $(".pre_box").css("transform", "translateX(0%)")
        $(".pre_box").css("background-color", "pink")
        $("img").attr("src", xxx)
    }
    flag.value = !flag.value

    loginruleFormref.value.resetFields()
    registerruleFormref.value.resetFields()
}

//生成泡泡的函数
const createBubble = () => {
    const body = document.body
    const bubble = document.createElement('span')
    bubble.classList.add('bubble') // 添加专属类名
    const r = Math.random() * 5 + 25 //泡泡的半径
    bubble.style.width = `${r}px`
    bubble.style.height = `${r}px`
    bubble.style.left = `${Math.random() * (window.innerWidth - r)}px`
    body.appendChild(bubble)
    setTimeout(() => {
        bubble.remove()
    }, 4000)
}
setInterval(() => {
    createBubble()
}, 200)

const loginruleFormref = ref(null)
const registerruleFormref = ref(null)

const loginForm = ref({
    account: "",
    password: ""
})

const loginSubmit = () => {
    const {account,password} = loginForm.value
    loginruleFormref.value.validate(async (valid) => {
        if (valid) {
            if(account === "suisui" && password === '123456'){
                ElMessage.success("登录成功")
            }else{
                ElMessage.error("账号或密码错误")
            }
        }
    })
}



//注册的逻辑
const registerForm = ref({
    account: "",
    password: ""
})

const rules = ref({
    account: [
        { required: true, message: '用户名不能为空', trigger: 'blur' },
        { min: 3, max: 20, message: '用户名长度需在3-20之间', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '用户名不能为空', trigger: 'blur' },
        { min: 3, max: 20, message: '用户名长度需在3-20之间', trigger: 'blur' }
    ]
})

const registerSubmit = () => {
    registerruleFormref.value.validate(async (valid) => {
        if (valid) {
            const rex = await Register(registerForm.value)
            console.log(rex)
            if (rex.code === 200) {
                ElMessage.success(rex.message)
                mySwitch()
            } else {
                ElMessage.error(rex.message)
            }
        }
    })
}

</script>

<style>
html,
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.loginBody {
    height: 100vh;
    width: 100vw;
    background: linear-gradient(to right, pink, skyblue);
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    overflow-x: hidden;
}

.form-container {
    display: flex;
    height: 600px;
    width: 1050px;
    position: relative;
    /* 将盒子的颜色去掉，它就是透明的了 */
    /* background-color: rgba(255, 255, 255, 0.7); */
    gap: 280px;
    margin: 0;
    /* 盒子圆角 */
    border-radius: 8px;
    /* 盒子的边框 */
    border: 1px solid rgba(255, 255, 255, .6);
    align-items: center;
    justify-content: center;
    box-shadow: 4px 4px 3px rgba(0, 0, 0, .1);
    z-index: 10;
}

.pre_box {
    height: 600px;
    width: 525px;
    position: absolute;
    right: 525px;
    box-shadow: 4px 4px 3px rgba(0, 0, 0, .1);
    z-index: 10;
    /* 这里的颜色需要用取色器去写 */
    background-color: pink;
    /* 滑块过渡动画 */
    transition: all 0.5s ease;
    border-radius: 8px;
}

.img-box {
    width: 525px;
    height: 474px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* box-shadow: 4px 4px 3px rgba(0, 0, 0, .1); */
}


/* 生成泡泡的样式 */
.bubble {
    position: absolute;
    bottom: 0;
    border-radius: 50%;
    background: radial-gradient(circle at 72% 28%, #fff 5px, #ff7edf 8%, #5b5b5b, #aad7f9 100%);
    box-shadow: inset 0 0 6px #fff,
        inset 3px 0 6px #eaf5fc,
        inset 2px -2px 10px #efcde6,
        inset 0 0 60px #f9f6de,
        0 0 20px #fff;
    animation: myMove 4s linear infinite;
}

@keyframes myMove {
    0% {
        transform: translateY(0%);
        opacity: 1;
    }

    50% {
        transform: translate(10%, -1000%);
    }

    75% {
        transform: translate(-20%, -1200%);
    }

    99% {
        opacity: .9;
    }

    100% {
        transform: translateY(-1800%) scale(-1.5);
        opacity: 0;
    }
}
</style>