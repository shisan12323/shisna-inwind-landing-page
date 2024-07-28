const baseSiteConfig = {
	name: 'inWind Landing Page Template',
	description: 'This is a free, open-source and powerful landing page template for saas project, it will help you to make your startup faster.',
	url: 'https://daisyui.com/',
	ogImage: 'https://landingpage.inwind.cn/logo.png',
	metadataBase: '/',
	keywords: [
		'landing page template',
		'landing page boilerplate',
		'opensource landing page',
		'next.js landing page',
		'free landing page',
		'awesome landing page',
	],
	authors: [
		{
			name: 'shisan',
			url: 'https://daisyui.com/',
		},
	],
	icons: {
		icon: '/favicon.ico',
		shortcut: '/logo.png',
		apple: '/logo.png',
	}
};

export const SiteConfig = {
	...baseSiteConfig,
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: baseSiteConfig.url,
		title: baseSiteConfig.name,
		description: baseSiteConfig.description,
		siteName: baseSiteConfig.name,
	},
	twitter: {
		card: 'summary_large_image',
		title: baseSiteConfig.name,
		description: baseSiteConfig.description,
		images: [`${baseSiteConfig.url}/og.png`],
		creator: baseSiteConfig.creator,
	},
};
