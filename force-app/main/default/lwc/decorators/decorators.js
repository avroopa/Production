import {wire, track,LightningElement } from 'lwc';
import getUserDetails from '@salesforce/apex/userInfo.getUserName';
const COLUMNS = [
    {label: 'User Name', fieldname : 'Name', type:'text'},
    {label: 'Email', fieldname : 'Email', type:'email'}
]
export default class Decorators extends LightningElement {
userTable = [];
counter = 0;
columns = COLUMNS;
searchString = '';
@wire(getUserDetails,{nameString : '$searchString'})
wiredUserTable;
userTable = this.wiredUserTable.data;
    increaseCounter(){
        console.log('method call');
        
        this.counter += 1;
    }
    @track exampleObject = {counter : 0};
    increaseCounterWithTrack(){
        this.exampleObject.counter += 1;
        console.log('counter 2 value: '+this.exampleObject.counter);
    }
number1 = 0;
number2 = 0;
submitNumbers(){
    alert('heyy');
    this.number1 = this.refs.firstNumber?.value;
    this.number2 = this.refs.secondNumber?.value;
    console.log('number 1: '+this.number1);
    console.log('number 2: '+this.number2);
}  
product = 0;
multiply(){
    //  this.number1 = this.refs.firstNumber?.value;
    //this.number2 = this.refs.secondNumber?.value;
    //this.product = this.number1 * this.number2;
    //console.log('product: '+this.product);
    this.refs.childComponent?.multiply();
}   
}