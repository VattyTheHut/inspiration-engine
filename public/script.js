$(document).ready(() => {
     $('.chips').material_chip();
     $('.chips-initial').material_chip({
        data: [{
            tag: 'Quotes',
        }, {
            tag: 'love quotes',
        }, {
            tag: 'Google',
        }],
    });

    $('.chips-placeholder').material_chip({
        placeholder: 'Enter a tag',
        secondaryPlaceholder: '+Tag',
    });

    var chip = {
        tag: 'chip content',
        image: '', //optional
        id: 1, //optional
    };

    $('.chips').on('chip.delete', function(e, chip){
        // you have the deleted chip here
     });

    $('.chips').on('chip.select', function(e, chip){
        // you have the selected chip here
    });

    // home js below

    $(".cta span").click(function(){
	$(".cta:not(.sent)").addClass("active");
	$("input").focus();
});

    $(".cta span").click(function(){
	$(".cta:not(.sent)").addClass("active");
	$("input").focus();
});

var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

$("input").on('input', function(){
	if(regex.test($(this).val())) {
		$("button").removeAttr("disabled"); }
	else {
		$("button").attr("disabled", "disabled"); }
});

$("form").submit(function(x){
	x.preventDefault();
	if(regex.test($("input").val())) {
		$(".cta span").text("Thank you!");
		$(".cta").removeClass("active").addClass("sent");
	}
});



});