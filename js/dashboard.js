$(document).ready(function(){
    loaddata();
    loadmemo();
    countgpsemp();
    countwifiemp();
    getempdata();
    function loaddata(){
        $.ajax({
            type:"POST",
            url: $("#website-url").attr("value") + "dashboard",
            data : {
                type:"getempdata",
            },
            dataType: "json",
            cache: false,
            success: function(data){
                if(data.isSuccess == true){
                    if(data.Data == null){
                        $("#present").text(0);    
                    }
                    $("#present").text(data.Data);
                }
                else{
                    $("#present").text(0);  
                }
            },
        });
    }
    function loadmemo(){
        $.ajax({
            type:"POST",
            url: $("#website-url").attr("value") + "dashboard",
            data : {
                type:"countmemo",
            },
            dataType: "json",
            cache: false,
            success: function(data){
                if(data.isSuccess == true){
                    if(data.Data == null){
                        $("#memo").text(0);    
                    }
                    $("#memo").text(data.Data);
                }
                else{
                    $("#memo").text(0);  
                }
            },
        });
    }function countgpsemp(){
        $.ajax({
            type:"POST",
            url: $("#website-url").attr("value") + "dashboard",
            data : {
                type:"getgpsemp",
            },
            dataType: "json",
            cache: false,
            success: function(data){
                if(data.isSuccess == true){
                    if(data.Data == null){
                        $("#gpsemployee").text(0);    
                    }
                    $("#gpsemployee").text(data.Data);
                }
                else{
                    $("#gpsemployee").text(0);  
                }
            },
        });
    }function countwifiemp(){
        $.ajax({
            type:"POST",
            url: $("#website-url").attr("value") + "dashboard",
            data : {
                type:"getwifiemp",
            },
            dataType: "json",
            cache: false,
            success: function(data){
                if(data.isSuccess == true){
                    if(data.Data == null){
                        $("#wifiemployee").text(0);    
                    }
                    $("#wifiemployee").text(data.Data);
                }
                else{
                    $("#wifiemployee").text(0);  
                }
            },
        });
    }
    function getempdata(){
        $.ajax({
            type:"POST",
            url: $("#website-url").attr("value") + "dashboard",
            data : {
                type:"getempnum",
            },
            dataType: "json",
            cache: false,
            success: function(data){
                if(data.isSuccess == true){
                    if(data.Data == null){
                        $("#employee").text(0);    
                    }
                    $("#employee").text(data.Data);
                }
                else{
                    $("#employee").text(0);  
                }
            },
        });
    }
});
