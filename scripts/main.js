import {
	useBusinessData,
	businessLocationFilter,
	businessManufacturingFilter,
} from './BusinessProvider.js';
import {
	businessList,
	businessListState,
	businessListManu,
} from './BusinessList.js';

console.log('main.js connected');

//let copyOfBusinessData = useBusinessData();

businessList();

businessListState();

businessListManu();
