import { LightningElement,wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import { registerListener,unregisterAllListeners } from 'c/pubsub';
export default class SubscribeCmp extends LightningElement {

    strCaptureText='';
    @wire(CurrentPageReference) pageRef;

    connectedCallback(){
        registerListener('sendNameEvent',this.setCaptureText,this);
    }
    disconnectedCallback(){
        unregisterAllListeners(this);
    }
    setCaptureText(objPayload){
        this.strCaptureText=objPayload;
    }

}