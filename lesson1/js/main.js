
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
	
	var element = document.getElementById("canvas_element");
	var ctx = element.getContext('2d');
	ctx.fillStyle="#ffffff";
	ctx.fillRect(0, 0, element.width, element.height);
	
	ctx.fillStyle="#000000";
	ctx.font = "30px Arial";
	ctx.fillText("Tizen", 10, 30);
	
	ctx.fillStyle = '#0000ff';
	ctx.font = "italic 28px Arial";
	ctx.fillText("Javascript", 8, 60);
	
	ctx.fillStyle = '#ff0000';
	ctx.fillText("HTML 5", 0, 110);
	
	ctx.fillStyle = '#0000ff';
	ctx.font = "bold 25px sans-serif";
	ctx.fillText("canvas", 60, 120);
	
    const x0 = 100;
	const y0 = 180;
	const side = 10;
	
	for (var i = 0; i < 8; i++) {
		for (var j = 0; j < 8; j++) {
			if ((i + j) % 2 == 0) {
				ctx.fillStyle = "#ffffff";
			} else {
				ctx.fillStyle = "#000000";
			}
			var x = j * side;
			var y = i * side;
			ctx.fillRect(x0 + x, y0 + y, side, side);
		}
	}
	
	ctx.fillStyle = "#000000";
	ctx.beginPath();
		ctx.moveTo(x0, y0);
		ctx.lineTo(x0 + 8*side, y0);
		ctx.lineTo(x0 + 8*side, y0 + 8*side);
		ctx.lineTo(x0, y0 + 8*side);
		ctx.lineTo(x0, y0);
	ctx.stroke();
});