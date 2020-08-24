import {
	useBusinessData,
	businessLocationFilter,
	businessManufacturingFilter,
} from './BusinessProvider.js';
import { BusinessHTML } from './Business.js';

const contentTarget = document.querySelector('.business');

const nyContentTarget = document.querySelector('.businessList--newYork');

const manuContentTarget = document.querySelector(
	'.businessList--manufacturing'
);

export const businessList = () => {
	const businessArray = useBusinessData();
	contentTarget.innerHTML = '<h1>Active Businesses</h1>';

	businessArray.forEach((businessObject) => {
		contentTarget.innerHTML += BusinessHTML(businessObject);
	});
};

export const businessListState = () => {
	const businessArray = businessLocationFilter('NY');
	nyContentTarget.innerHTML = '<h1>New York Businesses</h1>';

	businessArray.forEach((businessObject) => {
		nyContentTarget.innerHTML += BusinessHTML(businessObject);
	});
};

export const businessListManu = () => {
	const businessArray = businessManufacturingFilter();
	manuContentTarget.innerHTML = '<h1>Manufacturing Businesses</h1>';

	businessArray.forEach((businessObject) => {
		manuContentTarget.innerHTML += BusinessHTML(businessObject);
	});
};
