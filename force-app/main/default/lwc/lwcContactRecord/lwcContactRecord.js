import { LightningElement } from 'lwc';
import fname from '@salesforce/schema/Contact.FirstName';
import lname from '@salesforce/schema/Contact.LastName';
import email from '@salesforce/schema/Contact.Email';
import phoneno from '@salesforce/schema/Contact.Phone';
export default class LwcContactRecord extends LightningElement {

    confields=[fname,lname,email,phoneno];
    smsg="";
    showmessage(event)
    {
        this.smsg="Record Created Successfully "+event.detail.id;
    }    

}