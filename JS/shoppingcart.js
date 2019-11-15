function KhuyenMai(){
	var code = document.getElementById("coupon").value.toLowerCase();

	console.log(code);
	if(code=="kmt10"){
		    $("#tonggia").fadeOut(300);
		    let data = document.getElementById(`subtotal`).innerText;
		    let tamtinh = parseFloat(data.split("$")[1]);
		    let tonggia = document.getElementById(`totalfull`).innerText;
		    let tong = parseFloat(tonggia.split("$")[1]);
		    if(tong-tamtinh==22){
		Swal.fire("Thành Công","",'success');
		   
		document.getElementById("totalfull").innerText="$"+parseFloat((tamtinh+22)*95/100).toFixed(3);
		document.getElementById("tonggia").innerHTML ="TỔNG TIỀN:$"+parseFloat((tamtinh+22)*95/100).toFixed(2);
		    $("#tonggia").fadeIn(300);
	}
	else Swal.fire("Chỉ được sử dụng 1 lần",'',"error");
}
	else Swal.fire("XẢY RA LỖI","Mã giảm giá không hợp lệ","warning");

}


function removed(object){
	var dad = $(object).parent().parent();
	$(dad).remove();
	calculate();
}

function calculate(){
let tamtinh=0;
let soluong=0;
	let products = $(".inforproduct");
	products.each(function(){ 
		soluong+= Number($(this).children()[2].children[0].value)
		tamtinh = soluong * 120;

	});
		$("#subtotal").fadeOut(300);
		$("#totalfull").fadeOut(300);
		document.getElementById("subtotal").innerText="$"+parseFloat(tamtinh).toFixed(3);
		document.getElementById("totalfull").innerText="$"+parseFloat(tamtinh+22).toFixed(3);
		document.getElementById("tonggia").innerHTML ="TỔNG TIỀN:$"+parseFloat(tamtinh+22).toFixed(2);

		$("#totalfull").fadeIn(300);
		$("#subtotal").fadeIn(300);

	}
function update(object){
	let quantities = object.value;
	let price = 120;
	if(!isNumeric.test(quantities))
				Swal.fire(
  'Lỗi',
  'Giá trị nhập vào không hợp lệ',
  'error'
).then(()=>object.value=1);
		else calculate();
}

