<template>
  <Row>
    <i-col>
      <Row type="flex" justify="center" style="font-size: 48px; margin: 24px 0px" >
        <i-col >计算机网络项目三C1端</i-col>
      </Row>
      <Row type="flex" :gutter="16">
        <i-col span="6">
          <Card title="注册用户">
            <i-form>
              <FormItem><i-input placeholder="用户名" /></FormItem>
              <FormItem><i-input placeholder="密码" /></FormItem>
            </i-form>
            <i-button type="primary">注册</i-button>
          </Card>
        </i-col>
        <i-col span="18">
          <Card title="登录信息">
            <i-table :columns="colums" :data="userList">
              <template slot="add">
                <i-button>踢出</i-button>
              </template>
            </i-table>
          </Card>
        </i-col>
      </Row>
    </i-col>
  </Row>
</template>

<script>
const axios = require("axios");
export default {
  name: "app",
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
  },
  mounted() {
    axios.post("/api/mine", 
        '{"firstName":"fred"}',
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
    click() {
      console.log("点击");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
