$(document).ready(function(){
    loaddata();
    function loaddata(){
        $.ajax({
            type:"POST",
            url: $("#website-url").attr("value") + "dashboard",
            data : {
                type:"getdata",
            },
            success: function(data){
                console.log(data);
                if(data.isSuccess == true){
                    $("#present").html(data.Data);
                }
            },

        });
    }
});
