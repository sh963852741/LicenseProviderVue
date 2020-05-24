<template>
    <Row>
        <Row type="flex" justify="space-around">
            <i-col>
                <Card class="card" @click.native="buy('华为')" >
                    <div class="cardInside brand">
                        <img src="../assets/HuaWei.jpg"/>
                        <h2>华为</h2>
                        <p>单个用户授权个数：10个</p>
                        <span class="price">￥66</span>
                    </div>
                </Card>
            </i-col>
            <i-col>
                <Card class="card" @click.native="buy('阿里巴巴')">
                    <div class="cardInside brand">
                        <img src="../assets/ALi.png"/>
                        <h2 class="brand">阿里巴巴</h2>
                        <p>单个用户授权个数：10个</p>
                        <span class="price">￥50</span>
                    </div>
                </Card>
            </i-col>
            <i-col>
                <Card class="card" @click.native="buy('谷歌')">
                    <div class="cardInside brand">
                        <img src="../assets/Google.png"/>
                        <h2 class="brand">谷歌</h2>
                        <p>单个用户授权个数：10个</p>
                        <span class="price">￥60</span>
                    </div>
                </Card>
            </i-col>
        </Row>
        <Row type="flex" justify="space-around">
            <i-col>
                <Card class="card" @click.native="buy('一Ping就通')">
                    <div class="cardInside brand">
                        <img src="../assets/一Ping就通.png"/>
                        <h2 class="brand">一Ping就通</h2>
                        <p>单个用户授权个数：10个</p>
                        <span class="price">￥99.99</span>
                    </div>
                </Card>
            </i-col>
            <i-col>
                <Card class="card" @click.native="buy('百度')">
                    <div class="cardInside brand">
                        <img src="../assets/BaiDu.jpg"/>
                        <h2 class="brand">百度</h2>
                        <p>单个用户授权个数：10个</p>
                        <span class="price">￥60</span>
                    </div>
                </Card>
            </i-col>
            <i-col>
                <Card class="card" @click.native="buy('360')">
                    <div class="cardInside brand">
                        <img src="../assets/360.jpg"/>
                        <h2 class="brand">360</h2>
                        <p>单个用户授权个数：10个</p>
                        <span class="price">￥360</span>
                    </div>
                </Card>
            </i-col>
        </Row>
    </Row>
</template>
<script>
const axios = require("axios");
export default {
    methods:{
        buy(name){
            axios.post("/api/regist",{
                userName: name,
                password: "45853",
                type: "2",
                time: 5
            })
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
    }
}
</script>
<style scoped>
    .card{
        width:300px;
        height:260px;
        margin:15px 40px 15px 40px;
    }
    .cardInside{
        text-align: center;
    }
    .brand{
        line-height: 30px;
    }
    .price{
        color: orangered;
    }
</style>
