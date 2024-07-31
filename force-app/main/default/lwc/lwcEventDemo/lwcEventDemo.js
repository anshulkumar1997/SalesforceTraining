import { LightningElement } from 'lwc';

export default class LwcEventDemo extends LightningElement {
    inptxt="";
    msgtxt="";
    btnstyle="brand";
    loadtxt(event)
    {
     this.inptxt=event.target.value;   
    }
    showmessage()
    {   if(this.btnstyle=="brand"){
        this.msgtxt=this.inptxt;
        this.btnstyle="destructive";
    }
    else{
        this.msgtxt="";
        this.btnstyle="brand";
    }
    }
   

}