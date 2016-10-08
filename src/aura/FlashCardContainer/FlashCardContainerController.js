({
    doInit : function(component, event, helper) {
        helper.getCategoryList(component);
    },
    
    categoryChanged : function(component, event, helper) {
        helper.getFlashCards(component);
    },
    
    clear : function(component, event, helper) {
        helper.closeFlashCards(component);
    }
})