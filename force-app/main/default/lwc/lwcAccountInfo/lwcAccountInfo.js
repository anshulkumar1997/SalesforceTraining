import { LightningElement,wire } from 'lwc';
import showAllAccounts from '@salesforce/apex/LwcAccountController.showAllAccounts';
export default class LwcAccountInfo extends LightningElement {
    inpdata="";
    acclist="";
    accfields=[
        {"label":"Account Name","fieldName":"Name","type":"text"},
        {"label":"Account Type","fieldName":"Type","type":"text"},
        {"label":"Account Revenue","fieldName":"AnnualRevenue","type":"currency"}
    ];
    @wire(showAllAccounts,{"accrev":"$inpdata"}) resp;
    show()
    {
        this.acclist=this.resp.data;
    }
    inputrevenue(event)
    {
        this.inpdata = event.target.value;
    }
}