import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

import ru from '@/messages/ru.json';
import en from '@/messages/en.json';
import de from '@/messages/de.json';

let browserLocale = navigator.language || navigator.userLanguage

const i18n = new VueI18n({
	locale: browserLocale || 'ru',
	fallbackLocale: 'en',
	messages: {
		ru,
		en,
		de
	},
});

export default i18n;
