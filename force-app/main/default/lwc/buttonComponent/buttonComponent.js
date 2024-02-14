import { LightningElement } from 'lwc';
import getUserDetails from '@salesforce/apex/userInfo.getUserInfo';
export default class ButtonComponent extends LightningElement {
    
    adminProfileName = 'System Administrator';
    chatterProfileName = 'Chatter Free User';

    getAdminUsers(){
        
        console.log('method call');
        alert('heyy');
        this.getUserList(this.adminProfileName);
        
    }
    
    getChatterUsers(){
        
        console.log('method call2');
        alert('heyy2');
        this.getUserList(this.chatterProfileName);
    }
    
    getUserList(profileName){
        console.log('Profile Name: '+profileName);
        getUserDetails({profilename: profileName}).then(result =>{
            console.log('UserList: '+JSON.stringify(result));
        } ).catch(error => {

        });

    }
    
    
}