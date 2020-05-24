<template>
    <Row>
        <i-table :columns="colums" :data="userList">
            <template slot="operation" slot-scope="{row}">
                <i-button type="error" @click="delUser(row.serialNumber)">删除</i-button>
            </template>
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
                    key: "serialNumber"
                },
                {
                    title: "操作",
                    slot: "operation"
                }
            ],
            userList: []
        };
    },
    mounted() {
        this.getUser();
    },
    methods: {
        getUser(){
            axios.post("/api/getRegList", {})
            .then(response => {
                console.log(response);
                this.userList = response.data.data;
            })
            .catch(error => {
                console.log(error);
            });
        },
        delUser(license){
            axios.post("/api/delUsers", {license})
            .then(response => {
                if(response.data.success){
                    this.getUser();
                }
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
};
</script>

<style>
</style>
