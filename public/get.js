/**
 * Created by lsantis on 12/09/2014.
 */
$(document).ready(function(){

    $.ajax({
        url: '/pets/ajax/get',
        type: 'GET',

        success: function(){

        },
        error: function(){}
    });

});