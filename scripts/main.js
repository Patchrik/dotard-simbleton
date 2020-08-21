import { useBusinessData } from './BusinessProvider.js';
import { businessList } from './BusinessList.js';

console.log('main.js connected');

let copyOfBusinessData = useBusinessData();

businessList();
