declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"articles": {
"a-practical-camp-cookware-gift-guide-2.md": {
	id: "a-practical-camp-cookware-gift-guide-2.md";
  slug: "a-practical-camp-cookware-gift-guide-2";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"a-practical-camp-lighting-gift-guide-3.md": {
	id: "a-practical-camp-lighting-gift-guide-3.md";
  slug: "a-practical-camp-lighting-gift-guide-3";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"a-practical-trekking-poles-gift-guide.md": {
	id: "a-practical-trekking-poles-gift-guide.md";
  slug: "a-practical-trekking-poles-gift-guide";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"backpacks-setup-checklist-for-beginners-2.md": {
	id: "backpacks-setup-checklist-for-beginners-2.md";
  slug: "backpacks-setup-checklist-for-beginners-2";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"best-camp-chairs-upgrades-for-small-spaces-2.md": {
	id: "best-camp-chairs-upgrades-for-small-spaces-2.md";
  slug: "best-camp-chairs-upgrades-for-small-spaces-2";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"best-hiking-boots-upgrades-for-small-spaces-3.md": {
	id: "best-hiking-boots-upgrades-for-small-spaces-3.md";
  slug: "best-hiking-boots-upgrades-for-small-spaces-3";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"best-sleeping-bag-for-cold-weather-camping.md": {
	id: "best-sleeping-bag-for-cold-weather-camping.md";
  slug: "best-sleeping-bag-for-cold-weather-camping";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"best-tents-upgrades-for-small-spaces.md": {
	id: "best-tents-upgrades-for-small-spaces.md";
  slug: "best-tents-upgrades-for-small-spaces";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"budget-versus-premium-camp-stoves-what-actually-matters.md": {
	id: "budget-versus-premium-camp-stoves-what-actually-matters.md";
  slug: "budget-versus-premium-camp-stoves-what-actually-matters";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"budget-versus-premium-navigation-what-actually-matters-3.md": {
	id: "budget-versus-premium-navigation-what-actually-matters-3.md";
  slug: "budget-versus-premium-navigation-what-actually-matters-3";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"budget-versus-premium-sleeping-bags-what-actually-matters-2.md": {
	id: "budget-versus-premium-sleeping-bags-what-actually-matters-2.md";
  slug: "budget-versus-premium-sleeping-bags-what-actually-matters-2";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"hiking-boots-essentials-for-weekend-projects.md": {
	id: "hiking-boots-essentials-for-weekend-projects.md";
  slug: "hiking-boots-essentials-for-weekend-projects";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"how-to-compare-backpacks-before-you-buy.md": {
	id: "how-to-compare-backpacks-before-you-buy.md";
  slug: "how-to-compare-backpacks-before-you-buy";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"how-to-compare-camp-chairs-before-you-buy-3.md": {
	id: "how-to-compare-camp-chairs-before-you-buy-3.md";
  slug: "how-to-compare-camp-chairs-before-you-buy-3";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"how-to-compare-tents-before-you-buy-2.md": {
	id: "how-to-compare-tents-before-you-buy-2.md";
  slug: "how-to-compare-tents-before-you-buy-2";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"navigation-buying-mistakes-to-avoid-2.md": {
	id: "navigation-buying-mistakes-to-avoid-2.md";
  slug: "navigation-buying-mistakes-to-avoid-2";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"sleeping-bags-buying-mistakes-to-avoid.md": {
	id: "sleeping-bags-buying-mistakes-to-avoid.md";
  slug: "sleeping-bags-buying-mistakes-to-avoid";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"sleeping-pad-r-value-for-winter-camping.md": {
	id: "sleeping-pad-r-value-for-winter-camping.md";
  slug: "sleeping-pad-r-value-for-winter-camping";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"sleeping-pads-essentials-for-weekend-projects-3.md": {
	id: "sleeping-pads-essentials-for-weekend-projects-3.md";
  slug: "sleeping-pads-essentials-for-weekend-projects-3";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"sleeping-pads-setup-checklist-for-beginners.md": {
	id: "sleeping-pads-setup-checklist-for-beginners.md";
  slug: "sleeping-pads-setup-checklist-for-beginners";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"storage-and-maintenance-tips-for-camp-cookware.md": {
	id: "storage-and-maintenance-tips-for-camp-cookware.md";
  slug: "storage-and-maintenance-tips-for-camp-cookware";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"storage-and-maintenance-tips-for-camp-lighting-2.md": {
	id: "storage-and-maintenance-tips-for-camp-lighting-2.md";
  slug: "storage-and-maintenance-tips-for-camp-lighting-2";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"storage-and-maintenance-tips-for-camp-stoves-3.md": {
	id: "storage-and-maintenance-tips-for-camp-stoves-3.md";
  slug: "storage-and-maintenance-tips-for-camp-stoves-3";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"tents-setup-checklist-for-beginners-3.md": {
	id: "tents-setup-checklist-for-beginners-3.md";
  slug: "tents-setup-checklist-for-beginners-3";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"the-quiet-features-that-make-camp-lighting-easier-to-use.md": {
	id: "the-quiet-features-that-make-camp-lighting-easier-to-use.md";
  slug: "the-quiet-features-that-make-camp-lighting-easier-to-use";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"the-quiet-features-that-make-camp-stoves-easier-to-use-2.md": {
	id: "the-quiet-features-that-make-camp-stoves-easier-to-use-2.md";
  slug: "the-quiet-features-that-make-camp-stoves-easier-to-use-2";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"the-quiet-features-that-make-sleeping-bags-easier-to-use-3.md": {
	id: "the-quiet-features-that-make-sleeping-bags-easier-to-use-3.md";
  slug: "the-quiet-features-that-make-sleeping-bags-easier-to-use-3";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"trekking-poles-buying-mistakes-to-avoid-3.md": {
	id: "trekking-poles-buying-mistakes-to-avoid-3.md";
  slug: "trekking-poles-buying-mistakes-to-avoid-3";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"water-filters-essentials-for-weekend-projects-2.md": {
	id: "water-filters-essentials-for-weekend-projects-2.md";
  slug: "water-filters-essentials-for-weekend-projects-2";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"when-to-replace-your-backpacks-gear-3.md": {
	id: "when-to-replace-your-backpacks-gear-3.md";
  slug: "when-to-replace-your-backpacks-gear-3";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"when-to-replace-your-sleeping-pads-gear-2.md": {
	id: "when-to-replace-your-sleeping-pads-gear-2.md";
  slug: "when-to-replace-your-sleeping-pads-gear-2";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"when-to-replace-your-water-filters-gear.md": {
	id: "when-to-replace-your-water-filters-gear.md";
  slug: "when-to-replace-your-water-filters-gear";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
};
"authors": {
"dana-wolff.md": {
	id: "dana-wolff.md";
  slug: "dana-wolff";
  body: string;
  collection: "authors";
  data: InferEntrySchema<"authors">
} & { render(): Render[".md"] };
"eli-rowe.md": {
	id: "eli-rowe.md";
  slug: "eli-rowe";
  body: string;
  collection: "authors";
  data: InferEntrySchema<"authors">
} & { render(): Render[".md"] };
"jordan-vale.md": {
	id: "jordan-vale.md";
  slug: "jordan-vale";
  body: string;
  collection: "authors";
  data: InferEntrySchema<"authors">
} & { render(): Render[".md"] };
"marcus-chen.md": {
	id: "marcus-chen.md";
  slug: "marcus-chen";
  body: string;
  collection: "authors";
  data: InferEntrySchema<"authors">
} & { render(): Render[".md"] };
"nate-brennan.md": {
	id: "nate-brennan.md";
  slug: "nate-brennan";
  body: string;
  collection: "authors";
  data: InferEntrySchema<"authors">
} & { render(): Render[".md"] };
"rosa-linden.md": {
	id: "rosa-linden.md";
  slug: "rosa-linden";
  body: string;
  collection: "authors";
  data: InferEntrySchema<"authors">
} & { render(): Render[".md"] };
};
"pillars": {
"backpacking-gear-list-complete.md": {
	id: "backpacking-gear-list-complete.md";
  slug: "backpacking-gear-list-complete";
  body: string;
  collection: "pillars";
  data: InferEntrySchema<"pillars">
} & { render(): Render[".md"] };
"camp-kitchen-guide.md": {
	id: "camp-kitchen-guide.md";
  slug: "camp-kitchen-guide";
  body: string;
  collection: "pillars";
  data: InferEntrySchema<"pillars">
} & { render(): Render[".md"] };
"tent-buyers-guide.md": {
	id: "tent-buyers-guide.md";
  slug: "tent-buyers-guide";
  body: string;
  collection: "pillars";
  data: InferEntrySchema<"pillars">
} & { render(): Render[".md"] };
};
"products": {
"b001gisxna-osprey-atmos-ag-65-backpack.md": {
	id: "b001gisxna-osprey-atmos-ag-65-backpack.md";
  slug: "b001gisxna-osprey-atmos-ag-65-backpack";
  body: string;
  collection: "products";
  data: InferEntrySchema<"products">
} & { render(): Render[".md"] };
"b003ocrcfq-nalgene-32oz-wide-mouth-bottle.md": {
	id: "b003ocrcfq-nalgene-32oz-wide-mouth-bottle.md";
  slug: "b003ocrcfq-nalgene-32oz-wide-mouth-bottle";
  body: string;
  collection: "products";
  data: InferEntrySchema<"products">
} & { render(): Render[".md"] };
"b005di3e7q-gsi-outdoors-pinnacle-campset.md": {
	id: "b005di3e7q-gsi-outdoors-pinnacle-campset.md";
  slug: "b005di3e7q-gsi-outdoors-pinnacle-campset";
  body: string;
  collection: "products";
  data: InferEntrySchema<"products">
} & { render(): Render[".md"] };
"b00nkpmpeo-msr-hubba-nx-1-person-tent.md": {
	id: "b00nkpmpeo-msr-hubba-nx-1-person-tent.md";
  slug: "b00nkpmpeo-msr-hubba-nx-1-person-tent";
  body: string;
  collection: "products";
  data: InferEntrySchema<"products">
} & { render(): Render[".md"] };
"b00xvywxlc-black-diamond-spot-350-headlamp.md": {
	id: "b00xvywxlc-black-diamond-spot-350-headlamp.md";
  slug: "b00xvywxlc-black-diamond-spot-350-headlamp";
  body: string;
  collection: "products";
  data: InferEntrySchema<"products">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
