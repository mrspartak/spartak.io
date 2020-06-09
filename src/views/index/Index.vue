<template>
	<div class="container mx-auto flex p-4 bg-white rounded-lg shadow-xl dark:bg-black dark:bg-opacity-50 dark:shadow-xl-dark">
		<div class="flex-1">
			<img class="h-32 w-32 rounded-lg" src="/img/avatar2.jpg" />
		</div>
		<div class="ml-4 flex-2">
			<h1 class="text-xl tracking-wide leading-tight mb-1">{{ $t('my.name') }}</h1>
			<h2 class="text-base leading-relaxed mb-2 text-black dark:text-white text-opacity-50 dark:text-opacity-50">{{ $t('my.description') }}</h2>

			<div class="flex items-start text-3xl mt-3">
				<div class="social">
					<a href="https://github.com/mrspartak" target="_blank" rel="noopener noreferer" class="">
						<i class="bx bxl-github"></i>
					</a>
				</div>
				<div class="social">
					<a href="https://www.instagram.com/assorium/" target="_blank" rel="noopener noreferer">
						<i class="bx bxl-instagram"></i>
					</a>
				</div>
				<div class="social">
					<a href="https://www.linkedin.com/in/spartak-kagramanyan-87172361/" target="_blank" rel="noopener noreferer">
						<i class="bx bxl-linkedin"></i>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Landing',
};
</script>

<style>
.container {
	position: relative;
	width: auto;
	z-index: 2;
	transition: all 0.25s ease;
}
.social {
	@apply flex-initial text-center mr-3 opacity-75 transition-all duration-500 ease-out;
}
.social:hover {
	@apply opacity-100;
}
</style>
