$(document).ready(function () {

alert("hello");

//use ajax to fetch data from the python file "app.py"


  $( document.getElementById('button1') ).click(function() {
    alert("you clicked");

    $.ajax({
      // dataType: "json"
      type: "POST",
      url: "http://localhost:5000/app.py",
      //data: {"base":"btc","target":"usd","amount":"100"},
      data: $('form').serialize(),
      error: function(){
        console.log("error");
      },
      success: function(){
        console.log("success");
      }

    }).done(function( ) {
      
      console.log("done");

    });
    alert("you clicked 2");

 
  });
 




//   $.getJSON('http://example.com/your/webservice?param1=x&param2=y', 
//     function(data, textStatus, jqXHR) {
//         alert(data);
//     }
// )
});