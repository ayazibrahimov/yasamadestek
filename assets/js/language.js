$ = jQuery.noConflict();

// scrollTo plugin
$.fn.scrollTo = function (target, options, callback) {
	if (typeof options == "function" && arguments.length == 2) {
		callback = options;
		options = target;
	}
	var settings = $.extend(
		{
			scrollTarget: target,
			offsetTop: 185,
			duration: 0,
			easing: "linear"
		},
		options
	);
	return this.each(function () {
		var scrollPane = $(this);
		var scrollTarget =
			typeof settings.scrollTarget == "number"
				? settings.scrollTarget
				: $(settings.scrollTarget);
		var scrollY =
			typeof scrollTarget == "number"
				? scrollTarget
				: scrollTarget.offset().top +
				  scrollPane.scrollTop() -
				  parseInt(settings.offsetTop);
		scrollPane.animate(
			{ scrollTop: scrollY },
			parseInt(settings.duration),
			settings.easing,
			function () {
				if (typeof callback == "function") {
					callback.call(this);
				}
			}
		);
	});
};

//My code
//The function that is listing the the mouse
jQuery(".selector .selector__list li").mouseover(function () {
	console.log("mousie");
	jQuery(".selector .selector__list li").removeClass("selected");
	jQuery(this).addClass("selected");
});

// if the li item is clicked display the value inside the button
jQuery(".selector__list li ").click(function () {
	//select the span where we want the place te value
	console.log(jQuery(this).parent().parent().parent());
	jQuery(this)
		.parent()
		.parent()
		.parent()
		.find(".valueOfButton")

		//get the html we want to place in the span and fill the div .valueOfButton
		.html(jQuery(this).text());

	//populate the hidden form input element
	jQuery(this)
		.parent()
		.parent()
		.parent()
		.find("input")
		.val(jQuery(this).data("key"));
});

//What to do when the keyboard is pressed
jQuery(".selector").keydown(function (e) {
	if (e.keyCode == 38) {
		// up
		console.log("keyup pressed");
		var selected = jQuery(".selected");
		jQuery(".selector .selector__list li").removeClass("selected");
		if (selected.prev().length == 0) {
			selected.siblings().last().addClass("selected");
		} else {
			selected.prev().addClass("selected");
			jQuery(".selector .selector__list").scrollTo(".selected");
		}
	}
	if (e.keyCode == 40) {
		// down
		console.log("keydown");
		var selected = jQuery(".selected");
		jQuery(".selector .selector__list li").removeClass("selected");
		if (selected.next().length == 0) {
			selected.siblings().first().addClass("selected");
		} else {
			selected.next().addClass("selected");
			jQuery(".selector .selector__list").scrollTo(".selected");
		}
	}

	//if we press enter display choise in button
	if (e.keyCode == 13) {
		// enter

		console.log("enter pressed");
		console.log(jQuery(".selected").parent().parent().parent());
		jQuery(".selected")
			.parent()
			.parent()
			.find(".valueOfButton")
			//get the html we want to place in the span and fill the div   .valueOfButton
			.html(jQuery(".selected").text());
		//populate the hidden form input element
		jQuery(".selected")
			.parent()
			.parent()
			.parent()
			.find("input")
			.val(jQuery(this).data("key"));
	}
});

var pathname = window.location.pathname;
var language_links = $(".selector__list a").get();

// console.log(language_links);

$.each(language_links, function (index, value) {
	var link_href = value["className"];
	// console.log(value["className"]);
	var blog_path = link_href.replace("http://www.speaklike.com/", "");

	if (pathname.indexOf(blog_path)) {
	} else {
		$(".valueOfButton").html($(this).text());
	}
});

//console.log(is_language);

var selector_open = false;

$(".selector__toggle").on("click", function () {
	if (selector_open == false) {
		selector_open = open;
		$(this).parent().removeClass("closed").addClass("open");
	} else {
		selector_open = false;
		$(this).parent().removeClass("open").addClass("closed");
	}
});

$(".selector__list a").on("click", function () {
	selector_open = false;
	$(this).parents(".selector").removeClass("open").addClass("closed");
});
