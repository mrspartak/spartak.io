<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
import { setColorScheme } from '@/plugins/detect-prefere-mode';

export default {
	name: 'App',
	beforeMount() {
		setColorScheme();
	},
};
</script>

<style>
#app {
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
