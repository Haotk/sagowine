function KhuyenMai(){
	var code = document.getElementById("coupon").value.toLowerCase();

	console.log(code);
	if(code=="kmt10"){
		Swal.fire("Thành Công","",'success');
		    $("#tonggia").fadeOut(300);
			document.getElementById("tonggia").innerHTML ="Tổng Giá:$"+parseFloat(143100).toFixed(2);
			document.getElementById("totalfull").innerHTML ="$"+parseFloat(143100).toFixed(2);
		    $("#tonggia").fadeIn(300);
	}
}


function removed(object){
	var dad = $(object).parent().parent();
	$(dad).remove();
}
