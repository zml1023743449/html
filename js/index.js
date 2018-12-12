$(document).ready(function(){
    /*自制的小屏下拉菜单*/
    $("#menu").click(function(){
		$("#none").toggleClass("none");
		$("#none").slideToggle("slow");
	});  
    $("#full_menu").click(function(){
		$("#full_none").toggleClass("none");
		$("#full_none").slideToggle("slow");
	}); 
    $("#dian").click(function(){
		$("#kai").toggleClass("none");
		$("#kai").slideToggle("slow");
	}); 
     $(function() {
                $(".coll_body").eq(0).show();
                $(".Collapsing").click(function() {
                    $(this).toggleClass("current").siblings('.Collapsing').removeClass("current"); //切换图标
                    $(this).next(".coll_body").slideToggle(500).siblings(".coll_body").slideUp(500);
                });
           });
});
