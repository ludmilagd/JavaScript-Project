// from data.js
var tableData = data;
// Create unique value list for Cities
var citytList = tableData.map(cities => cities.city)
    .filter((value, index, self) => self.indexOf(value) === index);
console.log(citytList)

/** 
// Create Options for City Selection list
//Use D3 to select the selection list
var cityChoices = d3.select("#cityselection");

citytList.forEach((cityChoice) => {

    var option = document.createElement("option");
    option.text = cityChoice;
    var sel = x.options[x.selectedIndex];  
    x.add(option, sel);
  }
});
 */

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Use D3 to select the table
var table = d3.select("table");

// Complete Table with USO sights 
tableData.forEach((eventUFO) => {
    var row = tbody.append("tr");

    Object.entries(eventUFO).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});


// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select(".form");


// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);


// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Remove existing table
    d3.select("tbody").html("");

    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime");

    // Get the value property of the input element
    var inputDateValue = inputDate.property("value");
    
    console.log(inputDateValue);

    var filteredData = tableData.filter(UFOevent => UFOevent.datetime === inputDateValue);
    console.log(filteredData);

// Display filtered data  
    filteredData.forEach((eventUFO) => {
        var row = tbody.append("tr");
        
        Object.entries(eventUFO).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
  });
};
