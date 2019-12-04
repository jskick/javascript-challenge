// from data.js
var tableData = data;


var tbody = d3.select("tbody");

function table(data) {
  tbody.html("");
  
  data.forEach((d_row) => {
  var row = tbody.append("tr");
  Object.values(d_row).forEach((value) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
}
function handleClick() {
    var date = d3.select("#datetime").property("value");
    let filter = tableData;
  
      if (date) {
      filter = filter.filter(row => row.datetime === date);
    }
  
    table(filter);
  }
  
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  table(tableData);