<template>
    <Row>
        <i-table :columns="colums" :data="userList">
            <template slot="add" slot-scope="{row}">
                <i-button @click="delUsers(row)">踢出</i-button>
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
                    title: "用户ID",
                    key: "userID"
                },
                {
                    title: "到期时间",
                    key: "expiringTime"
                },
                {
                    title: "操作",
                    slot: "add"
                }
            ],
            userList: []
        };
    },
    mounted(){
        this.getUsers();
    },
    methods: {
        getUsers(){
            axios.post("/api/GetUserList", {})
            .then(response => {
                this.userList = response.data.data;
            })
            .catch(error => {
                console.log(error);
            });
        },
        delUsers(row){
            axios.post("/api/kickuser",{
                userName: row.userName,
                userId: row.userID
            })
            .then(response => {
                if(response.data.success){
                    this.$Message.success("成功踢出");
                }else{
                    this.$Message.warning(response.data.msg);
                }
                this.getUsers();
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
}
</script>
<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>
