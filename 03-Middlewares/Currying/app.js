// Uso real de Currying
const li = Array.from(document.querySelectorAll('li'));

// Default function
const getElementAttrDefault = (el, key) => {
	return el.getAttribute(key);
}

// Curried function
const getElementAttrCurried = (key) => (el) => el.getAttribute(key);

const getAttrDataSlide = getElementAttrCurried('data-slide');
const getAttrId = getElementAttrCurried('id');

const dataSlideList = li.map(getAttrDataSlide)
const idList = li.map(getAttrId)
