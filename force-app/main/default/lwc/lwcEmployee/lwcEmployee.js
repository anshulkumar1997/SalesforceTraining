import { LightningElement } from 'lwc';

export default class LwcEmployee extends LightningElement {
    empname="David";//track variables as they change values in 
    emploc="London";//js automatically happens by changing page (mutated variable)
    emplevel="Senior Manager";
    empsal=2000;
    get highsal()
    {
        return this.empsal >=15000;
    }
    get avgsal()
    {
        return this.empsal >=5000 && this.empsal<15000;
    }
    get lowsal()
    {
        return this.empsal <5000;
    }
}