import {api, LightningElement } from 'lwc';

export default class DecoratorChildComponent extends LightningElement {
    @api firstNumber;
    @api secondNumber;
    product;
    @api multiply(){
        this.product = this.firstNumber * this.secondNumber;
    }
}