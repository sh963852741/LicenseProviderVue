<template>
    <Row>
        <i-table :columns="colums" :data="licenseList">
            <template slot="operation">
                <i-button type="error" @click="delUser()">删除</i-button>
            </template>
        </i-table>
    </Row>
</template>

<script>
const axios = require("axios");
export default {
    data(){
        return{
            colums: [
                {
                    title: "许可证号",
                    key: "serialNumber"
                },
                {
                    title: "许可人数",
                    key: "licenseCount"
                },
                {
                    title: "使用数",
                    key: "usingCount"
                },
                {
                    title: "操作",
                    slot: "operation"
                }
            ],
            licenseList: [
                {
                    licenseNumber: '1234581265',
                    usingCount: 5,
                    licenseCount: 10
                },
                {
                    licenseNumber: '4567965312',
                    usingCount: 5,
                    licenseCount: 3
                }
            ]
        }
    },
    mounted(){
        this.getLicenseStatus();
    },
    methods: {
        getLicenseStatus(){
            axios.post("/api/getLicenseStatus", {}
            ).then(response => {
                this.licenseList = response.data.data;
            })
            .catch(error => {
                console.log(error);
            });
        },
        delUser(license){
            axios.post("/api/delUsers", {license}
            ).then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
        }     
    }
}
</script>

<style>

</style>