
function showClock() {
	$("#clock .ui-popup-content").html(new Date().toLocaleString());
}

function showResolution() {
	var h = window.screen.availHeight;
	var w = window.screen.availWidth;
	$("#resolution .ui-popup-content").html(h + "x" + w);
}

( function () {
    window.addEventListener( 'tizenhwkey', function( ev ) {
        if( ev.keyName === "back" ) {
            var activePopup = document.querySelector( '.ui-popup-active' ),
                page = document.getElementsByClassName( 'ui-page-active' )[0],
                pageid = page ? page.id : "";

            if( pageid === "one" && !activePopup ) {
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {
                }
            } else {
                window.history.back();
            }
        }
    } );
} () );

$(document).ready(function() {
	colors = ["#ff0000", "#00ff00", "#0000ff"];
	
	$.each($("#jquery_page p"), function(index, value) {
		$(value).css("color", colors[index % colors.length]);
	});
	
});