import { LightningElement,track } from 'lwc';

export default class A001 extends LightningElement {
    @track
    contacts = [
        {
            Id: 1,
            Name: 'Amy Taylor',
            Title: 'VP of Engineering',
        },
        {
            Id: 2,
            Name: 'Michael Jones',
            Title: 'VP of Sales',
        },
        {
            Id: 3,
            Name: 'Jennifer Wu',
            Title: 'CFO',
        },
        {
            Id: 4,
            Name: 'Sapan Bali',
            Title: 'CEO',
        },
    ];
}