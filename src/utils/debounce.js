export const debounce = (fn, delay) => {
	let timeoutId;
	return function () {
		if (timeoutId) clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			fn.apply(this, arguments);
		}, delay);
	};
};
