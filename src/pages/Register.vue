<template>
    <Row>
        <i-form ref="regForm" :model="regForm" :rules="rules">
            <Row type="flex">
                <i-col span="11">
                    <FormItem label="用户名" prop="userName">
                        <i-input v-model="regForm.userName"></i-input>
                    </FormItem>
                </i-col>
                <i-col span="11" push="2">
                    <FormItem label="密码" prop="password">
                        <i-input v-model="regForm.password" type="password" password></i-input>
                    </FormItem>
                </i-col>
            </Row>
            <Row type="flex" >
                <i-col span="11">
                <FormItem label="许可证类型" prop="type">
                    <i-input v-model="regForm.type"></i-input>
                </FormItem>
                </i-col>
                <i-col span="11" push="2">
                <FormItem label="每次授权时长" prop="time">
                    <i-input v-model="regForm.time">
                        <span slot="append">分钟</span>
                    </i-input>
                </FormItem>
                </i-col>
            </Row>
            <FormItem>
                <i-button type="primary" @click="regist()">注册</i-button>
            </FormItem>
        </i-form>
    </Row>
</template>

<script>
const axios = require("axios");
export default {
    data(){
        return{
            regForm:{
                userName: "",
                password: "",
                type: "",
                time: ""
            },
            rules:{
                userName: [
                    {required: true, message: '必须填写用户名', trigger: 'blur'}
                ],
                password: [
                    {required: true, message: '必须填写密码', trigger: 'blur'}
                ],
                type: [
                    {required: true, message: '必须填写许可证类型', trigger: 'blur'}
                ],
                time: [
                    {required: true, message: '必须填写每次授权时长', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        regist(){
            this.$refs["regForm"].validate((valid) => {
                if (valid) {
                    axios.post("/api/regist", 
                        {...this.regForm}
                    )
                    .then(response => {
                        if(response.data.success){
                            this.$Message.success({
                                content: `注册成功，序列号：${response.data.license}`,
                                duration: 0,
                                closable: true
                            });
                        }else{
                            this.$Message.warning(response.data.msg);
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
                }
            })
        }
    }
}
</script>

<style>

</style>