<template>
    <Row>
        <i-form ref="regForm" :rules="rules">
            <FormItem label="用户名" prop="userName">
                <i-input v-model="regForm.userName"></i-input>
            </FormItem>
            <FormItem label="密码" prop="password">
                <i-input v-model="regForm.password"></i-input>
            </FormItem>
            <FormItem label="许可证类型" prop="type">
                <i-input v-model="regForm.type"></i-input>
            </FormItem>
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
                type: ""
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
                ]
            }
        }
    },
    methods: {
        regist(){
            this.$refs["regForm"].validate((valid) => {
                if (valid) {
                    axios.post("/api/regist", 
                        ...this.regForm
                    )
                    .then(response => {
                        console.log(response);
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