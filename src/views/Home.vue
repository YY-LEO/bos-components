<style lang="less" scoped>
	.app-container{
		.app-left{
			width: 240px;
			position: fixed;
			top: 60px;
			bottom: 0;
			left: 0;
		}
		.app-right{
			margin-left: 240px;
			.wrapper{
				.wrapper-container{
					margin: 60px auto 15px;
					padding: 10px;
				}
			}
		}
	}
</style>

<template>
	<div class="app-container">
		<div class="app-left">
			<app-nav></app-nav>
		</div>
		<div class="app-right">
			<div class="wrapper">
				<app-header></app-header>
				<router-view class="wrapper-container"/>
			</div>
		</div>
	</div>
</template>
<script>
	import AppHeader from '@C/AppHeader';
	import AppNav from '@C/AppNav';
    export default {
        name: "home",
		beforeCreate() {
			document.querySelector('body').setAttribute('style', 'background-color: #f5f7f9');
		},
        components: {
			AppHeader,
			AppNav,
		}
    }
</script>
