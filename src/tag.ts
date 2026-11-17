import { TagCore, TagMode } from './core';

class ArticleTagMode extends TagMode {
	name = 'article';

	tagList = {
		'Content and sourcing': [
			{
				tag: 'Cleanup',
				description: 'This article needs general cleanup',
			},
			{
				tag: 'Unreferenced',
				description: 'This article needs references',
			},
			{
				tag: 'More citations needed',
				description: 'Some claims need additional references',
			},
		],
		'Accuracy and neutrality': [
			{
				tag: 'Disputed',
				description: 'The accuracy of this article is disputed',
			},
			{
				tag: 'Advert',
				description: 'This article contains promotional language',
			},
			{
				tag: 'Outdated',
				description: 'This article may contain outdated information',
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

	getMenuTooltip(): string {
		return 'Add maintenance templates to this article';
	}

	getWindowTitle(): string {
		return 'Tag article';
	}
}

// IMPORTANT: modeList belongs to TagCore itself.
TagCore.modeList = [ArticleTagMode];

export { TagCore as Tag };
