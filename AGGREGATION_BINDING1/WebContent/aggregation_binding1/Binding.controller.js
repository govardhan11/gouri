sap.ui.controller("aggregation_binding1.Binding", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf aggregation_binding1.Binding
*/
	onInit: function() {
     var oModel = new sap.ui.model.json.JSONModel();
       oModel.loadData("model/data.json");
       
       this.getView().setModel(oModel);
       
       
       var oCombo = this.getView().byId("idcombo");
       //oCombo.bindAggregation("items","/datacollection",new sap.ui.core.Item({text : "{dept}"}));
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf aggregation_binding1.Binding
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf aggregation_binding1.Binding
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf aggregation_binding1.Binding
*/
//	onExit: function() {
//
//	}

});