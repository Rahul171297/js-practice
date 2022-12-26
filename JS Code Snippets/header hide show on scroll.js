// Scroll effect for the header navigation
document.addEventListener("DOMContentLoaded", function () {
	el_autohide = document.querySelectorAll("#header .ct-sticky-container [data-sticky]");
	if (el_autohide) {
		var last_scroll_top = 0;
		window.addEventListener("scroll", function () {
			let scroll_top = window.scrollY;
			if (scroll_top < last_scroll_top) {
				el_autohide[0].classList.remove("scrolled-down");
				el_autohide[0].classList.add("scrolled-up");
				el_autohide[1].classList.remove("scrolled-down");
				el_autohide[1].classList.add("scrolled-up");
      		} else {
				el_autohide[0].classList.remove("scrolled-up");
				el_autohide[0].classList.add("scrolled-down");
				el_autohide[1].classList.remove("scrolled-up");
				el_autohide[1].classList.add("scrolled-down");
				if (scroll_top > 0) {
					document.getElementsByTagName("body")[0].classList.add("responsive-scroll-z-padding");
					document.getElementsByTagName("body")[0].classList.remove("responsive-scroll");
				}
			}
			if (scroll_top <= 100) {
				el_autohide[0].classList.remove("scrolled-up");
				el_autohide[1].classList.remove("scrolled-up");
				if (scroll_top == 0) {
					document.getElementsByTagName("body")[0].classList.add("responsive-scroll");
					document.getElementsByTagName("body")[0].classList.remove("responsive-scroll-z-padding");
				}
			}
			if (scroll_top >= 150) {
				el_autohide[0].classList.add("white_back_ground");
				el_autohide[1].classList.add("white_back_ground");
			} else {
				el_autohide[0].classList.remove("white_back_ground");
				el_autohide[1].classList.remove("white_back_ground");
			}
			last_scroll_top = scroll_top;
		});
	}
});