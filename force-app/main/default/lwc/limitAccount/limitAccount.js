import { LightningElement, wire } from 'lwc';
import getLatestAccounts from '@salesforce/apex/AccountController.getLatestAccounts';
export default class LimitAccount extends LightningElement {
    check=false;
    acclist="";
    accfields=[
    {"label":"Account Name","fieldName":"Name","type":"text"},
    {"label":"Last Modified Date","fieldName":"LastModifiedDate","type":"datetime"}

];
@wire(getLatestAccounts) as;
show()
{
    this.acclist=this.as.data;
    
}
handleClick() {
    this.check = !this.check;
    this.show();
}


}