function priceFields() {
    // Number of inputs to create
    var number = document.getElementById("priceNum").value;
    // Container <div> where dynamic content will be placed
    var container = document.getElementById("priceContainer");
    // Clear previous contents of the container
    var i;
    
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    
    for (i = 0; i < number; i++) {
        // Append a node with a random text
        container.appendChild(document.createTextNode("Price " + (i + 1) + ":  "));
        // Create an <input> element, set its type and name attributes
        var input = document.createElement("input");
        input.id = "Price-Num-" + i;
        input.name = "priceNum" + i;
        input.setAttribute("value", "0");
        input.setAttribute("type", "number");
        container.appendChild(input);
        // Append a line break 
        container.appendChild(document.createElement("br"));
    }
}

function mpgFields() {
    // Number of inputs to create
    var number = document.getElementById("mpgNum").value;
    // Container <div> where dynamic content will be placed
    var container = document.getElementById("mpgContainer");
    // Clear previous contents of the container
    var i;
    
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    
    for (i = 0; i < number; i++) {
        // Append a node with a random text
        container.appendChild(document.createTextNode("Mpg " + (i + 1) + ":  "));
        // Create an <input> element, set its type and name attributes
        var input = document.createElement("input");
        input.id = "Mpg-Num-" +i;
        input.name = "mpgNum" + i;
        input.setAttribute("value", "0");
        input.setAttribute("type", "number");
        container.appendChild(input);
        // Append a line break 
        container.appendChild(document.createElement("br"));
    }
}

function addTable() {
    var columNum = document.getElementById("priceNum").value;
    var rowNum = document.getElementById("mpgNum").value;
    var i, j;
    
    if (isNaN(columNum) || isNaN(rowNum) || priceNum=="" || mpgNum==""){
                alert("Please Enter Valid Inputs");
            }
    
    var heading = new Array();
    heading[0] = "Price/Fuel consumption";
    for (i = 1; i <= columNum; i++) {
        //input.id = "Price-Num-" + i;
        var pID = "Price-Num-" + (i-1);
        var price_value = document.getElementById(pID).value;
        //var pNum = "priceNum" + i;
        heading[heading.length] = price_value;
        //document.getElementsByName("pNum").value;
    }
    
    
    
    var stock = new Array();
    for (i = 0; i < rowNum; i++) {
        stock[i] = new Array();
    }
    //
    for (i = 0; i < columNum; i++) {
        //input.id = "Price-Num-" + i;
        var mID = "Mpg-Num-" + (i);
        var mpg_value = document.getElementById(mID).value;
        //var pNum = "priceNum" + i;
        stock[i][0] = mpg_value;
        //document.getElementsByName("pNum").value;
    }
    
    for (i = 1; i<= columNum; i++) {
        for(j = 0; j < rowNum; j++) {
            stock[j][i] = heading[i] * stock[j][0];
        }
    }
    
    var table = "<table>";
    
    table += "<tr>";
    for (i = 0; i <= columNum; i++) {
        table += "<th>" + heading[i] + "</td>";
    }
    table += "</tr>";
    
    for (i = 0; i < stock.length; i++) {
        table += "<tr>";
        for (j = 0; j < stock[i].length; j++) {
            table += "<td>" + stock[i][j] + "</td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    
    document.getElementById("displayTable").innerHTML = table;
}








