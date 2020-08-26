import {
	useBusinessData,
	businessLocationFilter,
	businessManufacturingFilter,
	agentsListDataArray,
	createFormattedAgentsArray,
} from './BusinessProvider.js';
import {
	businessList,
	businessListState,
	businessListManu,
	agentsList,
} from './BusinessList.js';

console.log('main.js connected');

//let copyOfBusinessData = useBusinessData();

businessList();

businessListState();

businessListManu();

console.log('this is the data array', agentsListDataArray);

agentsList();
