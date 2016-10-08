({
    reset : function(component, event, helper) {
        helper.setCard(component);
    },
    
	flip : function(component, event, helper) {
        helper.flipCard(component);
    },
    
    clear : function(component, event, helper) {
        helper.clearCard(component);
    },
    
    next : function(component, event, helper) {
        helper.nextCard(component);
    },
    
    prev : function(component, event, helper) {
        helper.prevCard(component);
    }
})