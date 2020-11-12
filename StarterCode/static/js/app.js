// from data.js
var tableData = data;

// YOUR CODE HERE!
// from data.js
var tableData = data;

// select html table body to insert data
var tbody = d3.select('tbody');

// populate the tbody with the data.js data going thru the data.js va forEach
tableData.forEach(function(sightings) {
    var row = tbody.append('tr');
    Object.entries(sightings).forEach(function([key, value]) {
        var cell = row.append('td');
        cell.text(value);
    });
});

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

//function to run when input entered and/or button clicked
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    //filter the data based on the value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    //IF NO VALUE
    if (filteredData.length === 0) {
        alert('Date entered: "' + inputValue + '" did not match any results.\nTry a date from 1/1/2010 to 1/13/2010');
    }
    else {
        
    //clear the table
    d3.select('tbody').html('');

    // re-populate the tbody with the filteredData
    filteredData.forEach(function(sightings) {

    //at record level add new table row
    var row = tbody.append('tr');

    //within each dictionary forEach again to add each value to the row's cells
    Object.entries(sightings).forEach(function([key, value]) {
        var cell = row.append('td');
        cell.text(value);
    });
    });
    }
  console.log(inputValue);
  console.log(filteredData);
};