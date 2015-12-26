$(document).ready(function() {
	$("#uname").on('input', function(e){
		if (this.value.length < 6) {
			$("#uname-form").attr("class","form-group has-error has-feedback");
			$("#uname-form").find("span").attr("class","glyphicon glyphicon-remove form-control-feedback");
		} else {
			$("#uname-form").attr("class","form-group has-success has-feedback");
			$("#uname-form").find("span").attr("class","glyphicon glyphicon-ok form-control-feedback");
		}
	});

	$("#password").on('input', function(e){
		if (this.value.length < 6) {
			$("#pwd-form").attr("class","form-group has-error has-feedback");
			$("#pwd-form").find("span").attr("class","glyphicon glyphicon-remove form-control-feedback");
		} else {
			$("#pwd-form").attr("class","form-group has-success has-feedback");
			$("#pwd-form").find("span").attr("class","glyphicon glyphicon-ok form-control-feedback");
		}
	});

	$("#contact").on('input', function(e){
		var isPhone = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
    	var isMob=/^((\+?86)|(\(\+86\)))?(13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/;
		if (isPhone.test(this.value) || isMob.test(this.value)) {
			$("#contact-form").attr("class","form-group has-success has-feedback");
			$("#contact-form").find("span").attr("class","glyphicon glyphicon-ok form-control-feedback");
		} else {
			$("#contact-form").attr("class","form-group has-error has-feedback");
			$("#contact-form").find("span").attr("class","glyphicon glyphicon-remove form-control-feedback");
		}
	});
});