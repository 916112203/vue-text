<script setup>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutSicky from "./components/layoutSticky.vue"
</script>

<template>
	<LayoutSicky/>
	<LayoutNav />
	<LayoutHeader />
	<!-- 二级路由出口 -->
	<RouterView />
	<LayoutFooter />
</template>

<style></style>
