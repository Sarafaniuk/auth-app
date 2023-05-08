export function clearString(string: string): string {
	return string.split('').join('');
}

export const capitalizeFirstLetter = (str: string): string => {
	if (!str) {
		return str;
	}
	return clearString(str.charAt(0).toLocaleUpperCase() + str.slice(1));
};
