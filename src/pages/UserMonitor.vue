<template>
    <Row>
        <i-table :columns="colums" :data="userList">
            <template slot="add">
                <i-button>踢出</i-button>
            </template>
        </i-table>
    </Row>
</template>
<script>
export default {
    data() {
        return {
            colums: [
                {
                    title: "用户账号",
                    key: "userName"
                },
                {
                    title: "到期时间",
                    key: "exp"
                },
                {
                    title: "操作",
                    slot: "add"
                }
            ],
            userList: [
                {
                    userName: '张三',
                    exp: '2020-7-12 23:11'
                },
                {
                    userName: '李四',
                    exp: '2020-7-15 23:11'
                }
            ]
        };
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
