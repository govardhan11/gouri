sap.ui.controller("aggregation.Aggregation", {


	onInit: function() {
       var oModel = new sap.ui.model.json.JSONModel();
          oModel.loadData("model/data.json");
          
          this.getView().setModel(oModel);
          
          
          var oVBox = this.getView().byId("idVBox");
          var oTemplates = new sap.m.HBox({
        	  items : [
        	           new sap.m.Button({text :"{text}"}),
        	           new sap.m.Link({text : "{link}"}),
        	           new sap.m.Input()
        	           
        	           
        	           ]
          })
          oVBox.bindAggregation("items","/dataCollection",oTemplates );
          
	},


});