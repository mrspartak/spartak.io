export function setColorScheme() {
	const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const isLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;
	const isNotSpecified = window.matchMedia('(prefers-color-scheme: no-preference)').matches;
	const hasNoSupport = !isDarkMode && !isLightMode && !isNotSpecified;

	window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => e.matches && activateDarkMode('event'));
	window.matchMedia('(prefers-color-scheme: light)').addListener((e) => e.matches && activateLightMode('event'));

	if (isDarkMode) activateDarkMode('if');
	if (isLightMode) activateLightMode('if');
	if (isNotSpecified || hasNoSupport) {
		console.log('You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.');
		now = new Date();
		hour = now.getHours();
		if (hour < 4 || hour >= 16) {
			activateDarkMode('hour');
		} else {
			activateLightMode('hour');
		}
	}
}

export function activateDarkMode(emiter) {
	console.log('activateDarkMode', emiter);
	document.documentElement.classList.add('mode-dark');
}
export function activateLightMode(emiter) {
	console.log('activateLightMode', emiter);
	document.documentElement.classList.remove('mode-dark');
}
