({
    getCategoryList: function(component) {
        var action = component.get("c.getCategories");
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                var listcategories = response.getReturnValue();
                component.set("v.listCategories", listcategories);
            }
        });
        $A.enqueueAction(action);
    },
    
    getFlashCards: function(component) {
        var category = component.find("categories").get("v.value");
        var action = component.get("c.getFlashCards");
        
        action.setParams({category: category});
        action.setCallback(this, function(response) {
            var state = response.getState();
            
            if (component.isValid() && state === "SUCCESS") {
                var flashcards = response.getReturnValue();
                var flashCardCmp = component.find("flashCardCmp");
 				
                component.set("v.flashCards", flashcards);
                flashCardCmp.resetCards();
            }
        });
        $A.enqueueAction(action);
    },
    
    closeFlashCards: function(component) {
        var category = component.find("categories").set("v.value", "");
    }
})