import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert';
import LightningConfirm from 'lightning/confirm';
import LightningPrompt from 'lightning/prompt'
export default class AlertComp extends LightningElement {
    async handleAlertClick(){
        await LightningAlert.open({
            message:'This is a message from LWC',
            theme:'error',
            label:'Error!',
        })
    }
    async handleConfirmModalClick(){
        await LightningConfirm.open({
            message:'This is a Prompt message from LWC',
            variant:'headerless',
            label:'Confirm Modal!',
        })
    }
    handlePromptClick(){
        LightningPrompt.open({
            message:'This is a Prompt message from LWC',
            label:'Prompt Modal!',
            defaultValue:'Initial Input Value',
        }).then(result =>{
            console.log('Result--->'+result)
        });
    }
}