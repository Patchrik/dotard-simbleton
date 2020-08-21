import { useBusinessData } from './BusinessProvider.js';
import { BusinessHTML } from './Business.js';

const contentTarget = document.querySelector('.business');

export const businessList = () => {
	const businessArray = useBusinessData();
	contentTarget.innerHTML = '<h1>Business Names</h1>';

	businessArray.forEach((businessObject) => {
		contentTarget.innerHTML += BusinessHTML(businessObject);
	});
};
