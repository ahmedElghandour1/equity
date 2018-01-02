/*=====MAIN SIDEBAR======*/
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('.main-contents').toggleClass('active');
    });
    $('#sidebar.active ul.list-unstyled.components li').click(function () {
        $('#sidebar').removeClass('active');
        $('.main-contents').addClass('active');
    })
});

$(function () {

    $(window).scroll(function () {
       /* alert("ahmed");*/

        if($("html,body").scrollTop() > 10) {
            $('.sidebar-header').addClass("scroll");
        } else{
            $('.sidebar-header').removeClass("scroll");
        }
    })
})
//niceScroll plg
//nicescroll
$(function () {
    $('.leads-prs, .tab-content').niceScroll({
        cursorcolor: "#1cc4e1",
        cursoropacitymin: .1,
        cursoropacitymax: .8,
        cursorwidth: "6px",
        cursorborder: "0px solid #fff",
        cursorborderradius: "4px",
        background: "rgba(77, 77, 77, 0.19)",
        zindex: 100,
        cursorminheight: 5
    });
})

//scroll color
