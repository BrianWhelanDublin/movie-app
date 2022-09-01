import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			black: string;
			white: string;
		};
		font: string;
		fontWeights: {
			light: number;
			medium: number;
			regular: number;
			bold: number;
			extra: number;
		};
		fontSizes: {
			h1Mobile: number;
			h1Desktop: number;
			h2Mobile: number;
			h2Desktop: number;
			h3Mobile: number;
			h3Desktop: number;
			h4Mobile: number;
			h4Desktop: number;
			bodyFontSize: number;
			bodyFontSizeSmall: number;
		};
	}
}
