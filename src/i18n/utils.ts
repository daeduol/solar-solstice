import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
	const basePath = '/solar-solstice'; // Ajusta esto si cambias el base más adelante
	const pathWithoutBase = url.pathname.replace(basePath, ''); // Elimina la base de la URL
	const [, lang] = pathWithoutBase.split('/');
	if (lang in ui) return lang as keyof typeof ui;
	return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
		return ui[lang][key] || ui[defaultLang][key];
	};
}


