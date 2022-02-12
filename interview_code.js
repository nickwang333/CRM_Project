/**
 * jQuery and underscore are already included for you if you want to use them for the project.
 * 
 * Also included are three JSON files that define three constants: routes, stops, and routeStops.
 * Those consts have all the data you'll need for this project. You can find the source files in the data directory.
 */

$(function(){
	/**
	 * If you haven't used jQuery before, the code in here runs when the page first loads.
	 *
	 * As a test, let's add some HTML to the document. We'll make a simple dropdown list.
	 * Just call the `InsertText` function with the id of the element you want to insert HTML inside of and the content to add.
	 InsertText("mainContent", "<select><option>Option A</option><option>Option B</option>");*/

	 InsertText("mainContent", " Pick a route");
	var content = ("Pick a route: <select id = \"BusRoutes\" onChange=\"update(this);\">");
	for(var x in routes){//Functions for computing the content for drop down list
		content += ("<option Value = \"");
		content += routes[x]["routeId"];
		content += ("\">");
		content += routes[x]["shortName"];
		content += " - ";
		content += routes[x]["longName"];
		content += ("</option>");
	}
	InsertText("mainContent", content);
	
	
	/**
	 * Also, as a test, let's take a look at some of the data from the JSON files. This will log it to your browser's
	 * Javascript console. You can see the output by opening up the dev tools in your browser.
	 */
	
});
function update(elem) {
	var routeid = ($('#BusRoutes').val());
	var arr = [];
	var s = "Pick a route: ";
	s += elem.outerHTML;
	s += "<br/><br/>";
	for(var i in routeStops){
		if(routeStops[i]["routeId"] == routeid){
			arr.push(routeStops[i]["stopId"]);
		}
	}
	console.log(elem.outerHTML);
	arr.forEach(function(item, index, array) {
		s += "Stop ";
		s += (index+1).toString();
		s += ":";
		s += stops[item.toString()]["name"];
		s += "<br/>";
	})
	InsertText("mainContent", s);
}
//This is a helper function we're giving you to insert any HTML you want inside an element with the specified id
function InsertText(Id, Text){
	var Element = document.getElementById(Id);
	Element.innerHTML = Text;
};