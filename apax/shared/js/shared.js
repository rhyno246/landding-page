
$( document ).ready(function() {
    var languge = $('.languge option').text();
    $(".languge option").click(function(){
        if( languge == 'VN') {
            this.parents().find(".languge").addClass('icon_vn')
        }
        if( languge == 'EN') {
            this.parents().find(".languge").addClass('icon_en')
        }
    });
});