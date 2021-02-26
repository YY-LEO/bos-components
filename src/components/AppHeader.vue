<style lang="less" scoped>
    .wrapper-header{
        position: fixed;
        width: 100%;
        top: 0;
        right: 0;
        z-index: 1000;
        box-shadow: 3px 0px 5px 0px fade(#000, 10%);
        .wrapper-header-nav{
            width: 95%;
            height: 60px;
            margin: 0 auto;
            .wrapper-header-nav-logo{
                height: 35px;
                margin-top: 12px;
                float: left;
                >img{
                    height: 100%;
                }
            }
            .wrapper-header-nav-list{
                height: inherit;
                float: right;
            }
        }
    }
</style>

<template>
    <div class="wrapper-header">
        <Menu mode="horizontal">
            <div class="wrapper-header-nav">
                <router-link to="/docs/introduce" class="wrapper-header-nav-logo">
                    <img src="../assets/images/atfx.png" >
                </router-link>
                <div class="wrapper-header-nav-list">
                    <MenuItem name="backoffice" target="_blank" to="https://at-bos-frontend-uat.atfxdev.com">
                        <Icon type="ios-paper" />
                        ATFX Backoffice
                    </MenuItem>
                    <MenuItem name="clientPortal" target="_blank" to="https://at-client-portal-uat.atfxdev.com">
                        <Icon type="ios-people" />ATFX Client Portal
                    </MenuItem>
                </div>
            </div>
        </Menu>
    </div>
</template>