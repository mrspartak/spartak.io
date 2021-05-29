<template>
	<div class="wrapper">
		<!-- <div class="sidebar">
			<ul class="pt-2">
				<li class="pb-2">Обо мне</li>
				<li class="pb-2">Проекты</li>
				<li class="pb-2">Фотографии</li>
				<li class="pb-2">Статьи</li>
				<li class="pb-2">Образование</li>
				<li class="pb-2">Опыт работы</li>
			</ul>
		</div> -->
		<div class="content">
			<about class="mb-3 card" />
		</div>
	</div>
</template>

<script>
import About from './blocks/About.vue';

export default {
	name: 'Landing',
	components: {
		About,
	},
};
</script>

<style>
.sidebar {
	width: 150px;
	position: fixed;
	margin-left: -160px;
}
.card {
	position: relative;
	width: auto;
	z-index: 2;
	transition: all 0.25s ease;
}
</style>
