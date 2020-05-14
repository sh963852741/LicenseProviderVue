<template>
    <Row>
        <i-table :columns="colums" :data="userList">
            <template slot="operation" />
        </i-table>
    </Row>
</template>

<script>
const axios = require("axios");
export default {
    data() {
        return {
            colums: [
                {
                    title: "用户账号",
                    key: "userName"
                },
                {
                    title: "用户密码",
                    key: "password"
                },
                {
                    title: "许可证号",
                    key: "license"
                },
                {
                    title: "操作",
                    slot: "operation"
                }
            ],
            userList: [
                {
                    userName: '张三',
                    license: '8125475965'
                },
                {
                    userName: '李四',
                    license: '1543543259'
                }
            ]
        };
    },
    mounted() {
        axios.post("/api/mine", 
                {"firstName":"fred"},
                {headers: {'Content-Type': 'application/json'}}
            )
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    },
    methods: {

    }
};
</script>

<style>
</style>
