/**
 * Created by lzy on 17/3/30.
 */
$(function(){
    $(".types").click(function(){
        $("#page1").load($(this).text()+".html");
    })
    $("#page1").load("simple.html");
})
