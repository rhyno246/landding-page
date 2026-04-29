import axios from 'axios';

$(function () {
    $('.item').matchHeight();
    $('.list-content li').matchHeight();
    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });
    $('.find3').click(function(){
        $('html, body').animate({
        scrollTop: $("#findform").offset().top
            }, 1000); 
    });

    $('.question-more a').on('click',function(){
        $( ".qt1" ).each(function( index ) {
            if(index === 0){
                console.log($(this))
            }
            else{
                if($(this)[0].classList.contains('hide')){
                    $(this)[0].classList.remove('hide');
                    return false;
                }
            }
        });
    });
    $('.close').on('click',function(){
        $(this).parent('div').addClass('hide');
    });

    $('.close-thank').click(function(){
        $('.main-thank').addClass('hide');
    });
    $('.close-thank1').click(function(){
        $('.main-thank1').addClass('hide');
    });
});






$(window).on("load",function(){
    $.mCustomScrollbar.defaults.theme="dark";
    $(".main-scroll").mCustomScrollbar(); 
}); 

var linhvuc="";
var kehoach="";
var members = "Thành viên";
$('.radio').on('change',function(){
    if($('input[name="radio3"]:checked').val()=="option1"){
        members = "Thành viên";
    }else{
        members ="Không là thành viên";
    }
});


//ke Hoach
$('.vc-select').change(function(){
    if($(this).val() === "more"){
        $('.more').css('display','block');
    }
    else{
        $('.more').css('display','none');
        $(".more").val("");
    }
});

//ke Linh vuc
$('.vc-select1').change(function(){
    if($(this).val() === "more1"){
        $('.more1').css('display','block');
    }
    else{
        $('.more1').css('display','none');
        $(".more1").val("");
    }
});

function CheckKhac(){
    $('.more').parsley().removeError('more-available');
    if($('.more').css("display")=="block" && $(".more").val() !=""){
        linhvuc=$(".more").val();
        return true;
    }
    if($('.more').css("display")=="none"){
        linhvuc=$( ".vc-select option:selected" ).text();
        return true;
    }
    $('.more').parsley().addError('more-available', {
        message: 'Mời nhập dữ liệu'
    });
   
}
function CheckKhac1(){
    $('.more1').parsley().removeError('more-available');
    if($('.more1').css("display")=="block" && $(".more1").val() !=""){
        kehoach=$(".more1").val();
        return true;
    }
    if($('.more1').css("display")=="none"){
        kehoach=$( ".vc-select1 option:selected" ).text();
        return true;
    }
    $('.more1').parsley().addError('more1-available', {
        message: 'Mời nhập dữ liệu'
    });
   
}






// $(document).on('submit','#fromRegister', function(){

// }) khong sai dc  $("#fromRegister").on('submit', function (e) thi sai  thang tren

var kt = true;
$('#speaker-content-3').addClass('show-popup-thanks');
$("#fromRegister").on('submit', function (e) {
    if(kt != true){
        return;
    }
    kt = false;
    e.preventDefault();
    CheckKhac();
    CheckKhac1();
    var form = $(this);
    var url_string = window["location"]["href"];
    var url = new URL(url_string);
    var utmcampaign = url.searchParams.get("utm_campaign") ? url.searchParams.get("utm_campaign") : "not set";
    var utmsource = url.searchParams.get("utm_source") ? url.searchParams.get("utm_source") : "not set";
    var utmmedium = url.searchParams.get("utm_medium") ? url.searchParams.get("utm_medium") : "not set";
    if(form.parsley().isValid()){
        $.ajax({
            type: "POST",
            url : "https://script.google.com/macros/s/AKfycbxlVOAnUgWJDWAEX5IXopbiycpqEukKJ0umEzaFrSkEnYQDaPc/exec",
            data : {
                firstname: formMain.Firstname.value,
                lastname : formMain.Lastname.value,
                phone:  formMain.phone.value, 
                email:  formMain.email.value,
                nameCompany : formMain.NameCompany.value,
                position : formMain.Position.value,
                linhvuc: linhvuc,
                plan: kehoach,
                question1 : formMain.qt1.value,
                question2 : formMain.qt2.value,
                member : members,
                question3 : formMain.qt3.value,
                utm_campaign: utmcampaign,
                utm_source: utmsource,
                utm_medium: utmmedium,
                url: url_string
            },
            success: function () {
              
                formMain.Firstname.value = formMain.Lastname.value = formMain.phone.value = formMain.email.value = formMain.NameCompany.value = formMain.Position.value = formMain.qt1.value = formMain.qt2.value = formMain.qt3.value = "";
                formMain.linhvuc.selectedIndex = formMain.plan.selectedIndex = 0;
                $('.more1').css('display','none');
                $('.more').css('display','none');
                $(".more1").val("");
                $(".more").val("");
                $(".qtnone").css('display','none');
                $(".qt1:eq(1),.qt1:eq(2)").addClass('hide')
                // var checkMember = $('input[name="radio3"]:checked').val()=="option1";
                // if(checkMember === true){
                //     console.log($('input[name="radio3"]:checked').val()=="option1");
                //     $(".main-thank").addClass('active-thank');
                // }else{
                //     $(".main-thank1").addClass('active-thank1');
                // }
            },

            dataType: "json"
        }); 

        // $.ajax({
        //     type: "POST",
        //     url: "ajax.php",
        //     data: {
        //       email: formMain.email.value,
        //       ho: formMain.Firstname.value,
        //       ten: formMain.Lastname.value
        //               },
        //     success: function (data) {
        //         $('.more1').css('display','none');
        //         $('.more').css('display','none');
        //         $(".more1").val("");
        //         $(".more").val("");
        //         $(".qtnone").css('display','none');
        //         $(".qt1").css('display','none');
        //         if(data.error == 'false'){
        //             $(".main-thank").addClass('active-thank');
        //         }else{
        //             $(".main-thank1").addClass('active-thank1');
        //         }
        //     },
        //     dataType: "json"
        //   });
    }
});























