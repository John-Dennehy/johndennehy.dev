
const DEFAULT_LOCALE = "en-GB";
const DEFAULT_DATE_OPTIONS: Intl.DateTimeFormatOptions = {
	month: "short",
	year: "numeric",
};

export const formatDate = (
	date: Date,
	locale: string = DEFAULT_LOCALE,
	options: Intl.DateTimeFormatOptions = DEFAULT_DATE_OPTIONS,
) => {
	return new Date(date).toLocaleDateString(locale, options);
};
