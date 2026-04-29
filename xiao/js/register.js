const urlApiXuXi = 'https://qa-p21066.dsquare.vn';
var province = [];
var district = [];

$(function() {
	//get code and series
	getCodeAndSeriesInUrl();

	//get province
	getProvince();

	//check select city
	var selectProvince = document.getElementById('city');
	selectProvince.onchange = (event) => {
		let province_id = event.target.value;
		getDistrict(province_id)
	}

	//check select district
	var selectDistrict = document.getElementById('district');
	selectDistrict.onchange = (event) => {
		let district_id = event.target.value;
		getWards(district_id)
	}
});

function getProvince() {
	$.get(urlApiXuXi + "/madoiqua/webapi/v1/province", function(data, status) {
		if (status == 'success') {
			const { items } = data;
			handleSelectResource(items, 'province');
		}
	});
}

function getDistrict(province_id) {
	if (!province_id) {
		return;
	}
	$.get(urlApiXuXi + "/madoiqua/webapi/v1/district?province_id=" + province_id, function(data, status) {
		if (status == 'success') {
			const { items } = data;
			handleSelectResource(items, 'district');
		}
	});
}

function getWards(ward_id) {
	if (!ward_id) {
		return;
	}
	$.get(urlApiXuXi + "/madoiqua/webapi/v1/ward?district_id=" + ward_id, function(data, status) {
		if (status == 'success') {
			const { items } = data;
			handleSelectResource(items, 'wards');
		}
	});
}

function handleSelectResource(data, name = 'province') {
	if (!data && data.length === 0) return;

	if (name === 'province') {
		$('select[name="city"]').each(function() {
			let $this = $(this), stc = '';
			data.forEach(function(option, index) {
				// index += +1
				stc += '<option value=' + option.province_id + '>' + option.name + '</option>'
				$this.html('<option value="">Tỉnh/Thành phố</option>' + stc)
			})
		})
	}

	if (name === 'district') {
		$('select[name="district"]').each(function() {
			let $this = $(this), stc = '';
			data.forEach(function(option, index) {
				// index += +1
				stc += '<option value=' + option.district_id + '>' + option.full_name + '</option>'
				$this.html('<option value="">Quận/Huyện</option>' + stc)
			})
		})
	}

	if (name === 'wards') {
		$('select[name="wards"]').each(function() {
			let $this = $(this), stc = '';
			data.forEach(function(option, index) {
				// index += +1
				stc += '<option value=' + option.ward_id + '>' + option.full_name + '</option>'
				$this.html('<option value="">Phường/xã</option>' + stc)
			})
		})
	}
}


function getCodeAndSeriesInUrl() {
	let code = getUrlParams('c');
	let series = getUrlParams('s');
	if (! code || !series) {
		//modal alert code and series
		$('#modal-alert').modal({ show: true });
		// $.alert({
		// 	title: 'Không lấy được thông tin!',
		// 	content: 'Có lỗi xảy ra khi quét mã QR, vui lòng quét lại mã và thử lại!',
		// });
	}
}
function getUrlParams(name) {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	//https://qa-p21066.dsquare.vn/madoiqua/?c=AAA111&s=M01

	let param = urlParams.get(name);
	return param;
}


$('.btn-register').on('click', evt => {
	evt.preventDefault();

	let code = getUrlParams('c');
	let series = getUrlParams('s');
	if (!code || !series) {
		$('#modal-alert').modal({ show: true });
		return;
	}

	let username = $("input[name=username]").val();
	let phone = $("input[name=phone]").val();
	let city = $("select[name=city]").val();
	let district = $("#district").val();
	let wards = $("select[name=wards]").val();
	let address = $("input[name=address]").val();
	let cmnd = $("input[name=cmnd]").val();

	if (username.length < 3) {
		$.alert({
			title: 'Họ và tên không hợp lệ!',
			content: 'Bạn phải nhập đúng họ tên!',
		});
		return;
	}

	if (!checkPhoneNumber(phone)) {
		$.alert({
			title: 'Số điện thoại không hợp lệ!',
			content: 'Bạn phải nhập đúng số điện thoại!',
		});
		return;
	}

	if (!city || city == "") {
		$.alert({
			title: 'Bạn chưa chọn Tỉnh/Thành phố!',
			content: 'Vui lòng chọn để được hỗ trợ!',
		});
		return;
	}

	if (district.length === 0) {
		$.alert({
			title: 'Bạn chưa chọn Quận/Huyện!',
			content: 'Vui lòng chọn để được hỗ trợ!',
		});
		return;
	}

	if (wards.length === 0) {
		$.alert({
			title: 'Bạn chưa nhập Phường/Xã!',
			content: 'Vui lòng chọn để được hỗ trợ!',
		});
		return;
	}

	if (address.length === 0) {
		$.alert({
			title: 'Bạn chưa nhập địa chỉ cụ thể!',
			content: 'Vui lòng chọn để được hỗ trợ!',
		});
		return;
	}

	if (cmnd.length === 0) {
		$.alert({
			title: 'Bạn chưa nhập CMND!',
			content: 'Vui lòng chọn để được hỗ trợ!',
		});
		return;
	}

	var form = new FormData();
	form.append("name", username);
	form.append("phone", phone);
	form.append("identity_number", cmnd);
	form.append("province_id", city);
	form.append("district_id", district);
	form.append("ward_id", wards);
	form.append("address", address);
	form.append("code", code);
	form.append("series", series);

	sendData(form);

})

function checkPhoneNumber(number) {
	let flag = false;
	let phone = number.trim();
	phone = phone.replace('(+84)', '0');
	phone = phone.replace('+84', '0');
	phone = phone.replace('0084', '0');
	phone = phone.replace(/ /g, '');
	if (phone != '') {
		var firstNumber = phone.substring(0, 2);
		if ((firstNumber == '09' || firstNumber == '08' || firstNumber == '03' || firstNumber == '07' || firstNumber == '03' || firstNumber == '05') && phone.length == 10) {
			if (phone.match(/^\d{10}/)) {
				flag = true;
			}
		} else if (firstNumber == '01' && phone.length == 11) {
			if (phone.match(/^\d{11}/)) {
				flag = true;
			}
		}
	}
	return flag;
}

function validateEmail(string) {
	return /\S+@\S+\.\S+/.test(string);
}

function clearDataForm()
{
	console.log("clearDataForm ")
	$("input[name=username]").val("")
	$("input[name=phone]").val("");
	$("select[name=city]").val("");
	$("select[name=district]").val("");
	$("select[name=wards]").val("");
	$("input[name=address]").val("");
	$("input[name=cmnd]").val("");
}



$('#form').parsley();

function sendData(form) {
	let _s = getUrlParams('s').substr(0,1);
	var settings = {
		"url": urlApiXuXi + '/madoiqua/webapi/v1/form/save',
		"method": "POST",
		"timeout": 0,
		"processData": false,
		"mimeType": "multipart/form-data",
		"contentType": false,
		"data": form
	};

	$.ajax(settings).done(function (response) {
		let res = JSON.parse(response);
		let { errorCode, errorMessage, result } = res;
		console.log(result)
		// result == 'success' || 'fail'
		clearDataForm();
		if (errorCode !== 0) {
			$('#modal-alert-failed').modal({ show: true });
		} else {
			if(result == 'success') {
				if (_s == 'M') {
					$('#modal-alert-prize-travel').modal({ show: true });
				} else if(_s == 'X') {
					$('#modal-alert-prize-car-toy').modal({ show: true });
				} else {
					$('#modal-alert-success').modal({ show: true });
				}
			}
		}
	});
}