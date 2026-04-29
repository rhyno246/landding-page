
function checkNumber(e) {
	var keycode;
	keycode = e["keyCode"] ? e["keyCode"] : e["which"];
	console.log(keycode);
	if (!(keycode >= 48 && keycode <= 57)) {
		e["preventDefault"]();
		return false
	};
	return true
}

function oldselect(e){
	console.log(e.target.value+"<---");
	if(!checkNumber(e)) return false;
	var keycode;
	keycode = e["keyCode"] ? e["keyCode"] : e["which"];
	console.log(keycode+"<---keycode");
	console.log('length',e.target.value.toString().length );
	if(e.target.value.toString().length <= 0)
	{
		if (!(keycode > 48 && keycode <= 51)) {
			e["preventDefault"]();
			return false
		}
	} else {
		if(e.target.value < 3)
		{
			if (!(keycode >= 48 && keycode <= 57)) {
				e["preventDefault"]();
				return false
			}
		} else if(e.target.value == 3){
			console.log('3');
			if (keycode < 48 || keycode > 53) {
				e["preventDefault"]();
				return false
			}
		}
	}
	return true;
}
var selectold = true;
$("#old")["on"]("change", function () {
	var oldman = $("input[name=option7]:checked")["val"]();
	if ($("input[id=radio5]:checked")["val"]() == "option1") {
		selectold = "D\u01b0\u1edbi 10 \u0111\u01a1n h\xE0ng m\xF5i ng\xE0y"
	} else {
		selectold = "Tr\xEAn 10 \u0111\u01a1n h\xE0ng m\xF5i ng\xE0y"
	};
	if (oldman == "on") {
		if (checkData() == false) {
			return false
		};
		$(".form-submit")["prop"]("disabled", false)
	}
});



function validateEmail(email) {
	var re = /\S+@\S+\.\S+/;
	return re["test"](email)
}

function validateCaptcha(captcha) {
	if (captcha != (captchaNumber["a"] + captchaNumber["b"]).toString()) {
		if (captcha != "") {
			document["getElementsByClassName"]("error_msg")["item"](0)["style"]["display"] = "block"
		};
		return false
	};
	return true
}

function disableAlert() {
	document["getElementsByClassName"]("error_msg")["item"](0)["style"]["display"] = "none"
}

function checkData() {
	if (frmMain["name"]["value"] == "") {
		console["log"]("name");
		return false
	};
	if (frmMain["phone"]["value"] == "") {
		console["log"]("phone");
		return false
	};
	if (frmMain["email"]["email"] == "") {
		console["log"]("email");
		return false
	};
	if (frmMain["mucdich"]["mucdich"] == "") {
		console["log"]("mucdich");
		return false
	};
	// if (frmMain["old"]["options"][frmMain["old"]["selectedIndex"]]["value"] == "") {
	// 	console["log"]("interested");
	// 	return false
	// };
	if (frmMain["old"]["old"] == "") {
		console["log"]("old");
		return false
	};
	return true
}

function getParameterByName(name, url) {
	if (!url) {
		url = window["location"]["href"]
	};
	name = name["replace"](/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex["exec"](url);
	if (!results) {
		return null
	};
	if (!results[2]) {
		return ""
	};
	return decodeURIComponent(results[2]["replace"](/\+/g, " "))
}

function submitForm() {
	if (!checkData()) {
		return false
	};
	var url_string = window["location"]["href"];
	var url = new URL(url_string);
	$["ajax"]({
		type: "POST",
		url: "https://script.google.com/macros/s/AKfycbx1IkC9Dn1Eg8xl6TYn-dfLd5SFTdRlvsRdw6w-0g-9ip-Zvno/exec",
		data: {
			name: frmMain["name"]["value"],
			phone: frmMain["phone"]["value"],
			email:frmMain["email"]["value"],
			mucdich:frmMain["mucdich"]["value"],
			//old:frmMain["old"]["value"]
			old: frmMain["old"]["options"][frmMain["old"]["selectedIndex"]]["value"]
		},
		success: function () {

			dataLayer.push({'event': 'arrow-thanks-page'});
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
				ga('create', 'UA-126668083-1', 'auto');
				 ga('send', 'event', {
					eventCategory: 'thanks-page',
					eventAction: 'click'
					
				  });

			location.hash = "thanks-you"; 
            $.magnificPopup.open({
                items: {
                    src: "<div class='white-popup-thanks'><div class='img-popup'><img src='images/popup.png' class='img-responsive'></div></div>",
                    type: 'inline'
                },
                closeBtnInside: true
              });
			  
			$("#edit-submitted-so-luong")["prop"]("selectedIndex", 0);
			$("#edit-submitted-san-pham")["prop"]("selectedIndex", 0);
			//window["alert"]("\u0110\u0103ng K\xFD Th\xE0nh C\xF4ng");
			frmMain["name"]["value"] = frmMain["phone"]["value"] = "";
			frmMain["old"]["selectedIndex"] = frmMain["old"]["selectedIndex"] = 0
			//frmMain["old"]["value"] = frmMain["old"]["value"] = "";
		},
		dataType: "json"
	})
}