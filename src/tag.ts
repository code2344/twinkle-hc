import { TagCore, TagMode } from './core';

class ArticleTagMode extends TagMode {
	name = 'article';

	tagList = {
		Maintenance: [
			{
				tag: 'Cleanup',
				description: 'This article needs cleanup',
			},
			{
				tag: 'Unreferenced',
				description: 'This article needs references',
			},
			{
				tag: 'Outdated',
				description: 'This article contains outdated information',
			},
		],
	};

	static isActive(): boolean {
		return (
			mw.config.get('wgNamespaceNumber') === 0 &&
			mw.config.get('wgArticleId') > 0 &&
			mw.config.get('wgAction') === 'view'
		);
	}
}

TagCore.modeList = [ArticleTagMode];

export { TagCore as Tag };
