import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
  change=false;
  greeting = '';
  changeHandler(event) {
    this.greeting = event.target.value;
    this.handleClick();
    
  }
  handleClick() {
    this.change = true;    
}
}