import { LightningElement,track,wire } from 'lwc';
const actions = [
    { label: 'Edit', name: 'edit' },
    { label: 'Delete', name: 'delete' },
];
export default class WireDemo extends LightningElement {
    @track columns = [

        { label: 'Label', fieldName: 'Name' },
        { label: 'Website', fieldName: 'Website', type: 'url' },
        { label: 'Phone', fieldName: 'Phone', type: 'phone' },
        { label: 'Industry', fieldName: 'Industry', type: 'text' },
        {   
            type: 'action',
            typeAttributes: {
                                rowActions: actions,
                                menuAlignment: 'right'
                            }
        }
    ];
}