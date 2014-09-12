/**
 * Created by lsantis on 12/09/2014.
 */

//$(document).ready(function(){
//      console.log("ready...");
//});

// get form values
// use ajax to post the values to your endpoints
// handle the success/failure response on the UI
// handle both ajax and normal posts forms

$(document).on('submit', 'form', function(e){

    var form = e.currentTarget;

    $.ajax({
        url: '/pets/ajax/post',
        type: 'POST',

        data: $(form).serialize(),
        success: function(data){
        $('#').load('index');
          console.log(data);
        },

        error: function(){}
    });

    e.preventDefault();
});


