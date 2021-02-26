<style lang="less" scoped>
    .navigate{
        width: 240px;
        font-size: 14px;
        position: fixed;
        top: 60px;
        bottom: 0;
        left: 0;
        overflow: auto;
        .a-menu{
            display: block;
            margin: 0;
            padding: 0;
            outline: 0;
            list-style: none;
            color: #515a6e;
            font-size: 14px;
            position: relative;
            z-index: 900;
        }
    }
    .scrollbar-hide::-webkit-scrollbar {
        width: 0;
    }
    .scrollbar-hide::-webkit-scrollbar-thumb {
        background: #e8eaec;
    }
    .scrollbar-hide::-webkit-scrollbar-track {
        background-color: transparent;
    }
</style>

<template>
    <Menu
        :open-names="['1', '2', '3', '4', '5']"
        style="width: auto; height: 100vh;">
        <div class="navigate scrollbar-hide">
            <MenuItem name="introduce" to="/docs/introduce">介绍</MenuItem>
            <MenuGroup title="组件">
                <MenuItem name="tablePage" to="/tablePage">表格列表</MenuItem>
            </MenuGroup>
        </div>
    </Menu>
</template>

<script>
export default {
    name: "AppNav",
}
</script>