public with sharing class userInfo {
    @AuraEnabled(cacheable = true)
    public static list<user> getUserInfo(string profilename){
        
        list< user> userList = [Select name, email, isActive from user where profile.Name  =: profilename]; 
        return userList;
        
    }
    @AuraEnabled(cacheable = true)
    public static list<user> getUserName(string nameString){
        string likeString = '%'+nameString+'%';
        list< user> userList = [Select name, email, isActive from user where Name  like: likeString]; 
        return userList;
        
    }
}