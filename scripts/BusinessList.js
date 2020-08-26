import {
	useBusinessData,
	businessLocationFilter,
	businessManufacturingFilter,
	agentsListDataArray,
	createFormattedAgentsArray,
} from './BusinessProvider.js';
import { BusinessHTML, agentsHTML } from './Business.js';

const contentTarget = document.querySelector('.business');

const nyContentTarget = document.querySelector('.businessList--newYork');

const manuContentTarget = document.querySelector(
	'.businessList--manufacturing'
);

const agentsContentTarget = document.querySelector('.agents');

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

export const agentsList = () => {
	const copyOfAgentsArray = createFormattedAgentsArray();
	agentsContentTarget.innerHTML = '<h1>Sales Agents</h1>';

	copyOfAgentsArray.forEach((agentObject) => {
		agentsContentTarget.innerHTML += agentsHTML(agentObject);
	});
};
