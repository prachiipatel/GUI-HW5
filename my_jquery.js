$.validator.setDefaults({
   submitHandler: function() {
       alert("submitted!");
   } 
});

$(document).ready(function(){
   // validate the Miles per Year form when it is clicked on Create a Table button
    $("#milesPerYear").validate();
    
    
    
});