<template>
    <Layout class="layout">
        <Header>
            <Menu mode="horizontal" theme="dark" active-name="1" @on-select="setBreadcrumb">
                <div class="layout-logo">
                    <div style="color: #FFF; line-height: 30px; text-align:center;">一Ping就通</div>
                </div>
                <div class="layout-nav">
                    <MenuItem to="taobao" name="附加界面-淘宝网" >
                        <Icon type="ios-navigate"></Icon>
                        淘宝网
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="ios-keypad"></Icon>
                        Item 2
                    </MenuItem>
                    <MenuItem name="3">
                        <Icon type="ios-analytics"></Icon>
                        Item 3
                    </MenuItem>
                    <MenuItem name="4">
                        <Icon type="ios-paper"></Icon>
                        Item 4
                    </MenuItem>
                </div>
            </Menu>
        </Header>
        <Layout>
            <Sider hide-trigger :style="{background: '#fff'}">
                <Menu active-name="状态监控-活动用户监控" theme="light" width="auto" :open-names="['状态监控']" @on-select="setBreadcrumb">
                    <Submenu name="状态监控">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            状态监控
                        </template>
                        <MenuItem name="状态监控-活动用户监控" to="/usermonitor">活动用户监控</MenuItem>
                        <MenuItem name="状态监控-许可证状态监控" to="/licensemonitor">许可证状态监控</MenuItem>
                    </Submenu>
                    <Submenu name="用户管理">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            用户管理
                        </template>
                        <MenuItem name="用户管理-用户注册" to="/register">用户注册</MenuItem>
                        <MenuItem name="用户管理-已注册用户" to="/registmgr">已注册用户</MenuItem>
                    </Submenu>
                    <Submenu name="系统配置">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            系统配置
                        </template>
                        <MenuItem name="系统配置-安全配置">安全配置</MenuItem>
                        <MenuItem name="系统配置-关于本系统">关于本系统</MenuItem>
                    </Submenu>
                </Menu>
            </Sider>
            <Layout :style="{padding: '0 24px 24px'}">
                <Breadcrumb :style="{margin: '24px 0'}">
                    <BreadcrumbItem>系统</BreadcrumbItem>
                    <BreadcrumbItem>{{breadcrumbName[0]}}</BreadcrumbItem>
                    <BreadcrumbItem>{{breadcrumbName[1]}}</BreadcrumbItem>
                </Breadcrumb>
                <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                    <slot />
                </Content>
            </Layout>
        </Layout>
    </Layout>
</template>
<script>
    export default {
        data(){
            return{
                breadcrumbName: [
                    "状态监控",
                    "活动用户监控"
                ]
            }
            
        },
        methods: {
            setBreadcrumb(e)
            {
                this.breadcrumbName = e.split('-');
            }
        },
        mounted(){
            this.$router.push("/usermonitor")
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
