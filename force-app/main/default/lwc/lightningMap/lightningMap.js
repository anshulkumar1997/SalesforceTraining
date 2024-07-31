import { LightningElement ,track } from 'lwc';

import getAccountsWithAddress from '@salesforce/apex/DataDemoController.getAccountsWithAddress'

export default class LightningMap extends LightningElement {

   @track mapMarkers = [
    {
        location: {
            City: 'Agra',
            Country: 'India',
            PostalCode: '282001',
            State: 'Uttar Pradesh',
            Street: 'Taj Mahal ,Dharmapuri, Forest Colony, Tajganj',
        },
        value: 'location001',
    },
];

@track mapMarkersList = [
    {
        location: {
            // Location Information
            City: 'San Francisco',
            Country: 'USA',
            PostalCode: '94105',
            State: 'CA',
            Street: '50 Fremont St',
        },

        // For onmarkerselect
        value: 'SF1',

        // Extra info for tile in list & info window
        icon: 'standard:account',
        title: 'Julies Kitchen', // e.g. Account.Name
        description: 'This is a long description',
    },
    {
        location: {
            // Location Information
            City: 'San Francisco',
            Country: 'USA',
            PostalCode: '94105',
            State: 'CA',
            Street: '30 Fremont St.',
        },

        // For onmarkerselect
        value: 'SF2',

        // Extra info for tile in list
        icon: 'standard:account',
        title: 'Tender Greens', // e.g. Account.Name
    },
];

selectedMarkerValue = 'SF1';

handleMarkerSelect(event) {
    this.selectedMarkerValue = event.target.selectedMarkerValue;
}

center = {
    location: { Latitude: '40.7831856', Longitude: '-73.9675653' },
};


/*getAccountsWithAddress()
.then(res=>{ console.log('res recieved')});

async callserver(){
    const res = await getAccountsWithAddress();
    console.log(res);
}

 //asynchronous proccess posed as sycnhdnous 
 callserver();
 console.log(i) */



/* getAccountsWithAddress()
 .then(accounts =>{
     return getContacts({acc:accounts})
 })
 .then(contacts =>{})


*/

 

async connectedCallback(){
  let accounts =  await  getAccountsWithAddress();
  //const contacts = await getContacts({acc:accounts});

  console.log(accounts);

  let markerObj = [];

  let  i = 1;
  accounts.forEach(account=>{
    markerObj.push({

        location: {
            // Location Information
            City: account.BillingCity,
            Country: account.BillingCountry,
            PostalCode: account.BillingPostalCode,
            State: account.BillingState,
            Street: account.BillingStreet,
        },

        // For onmarkerselect
        value: 'SF' + i ,

        // Extra info for tile in list
        icon: 'standard:account',
        title: 'Tender Greens', // e.g. Account.Name

    })
    i = i + 1;
  });

  console.log(markerObj);
  this.mapMarkersList = markerObj;
}


}