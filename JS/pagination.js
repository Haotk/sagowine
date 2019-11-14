function filterPrice(){
	const isNumeric = /^\d+$/;
	var min = (document.getElementById("min").value);
	var max = (document.getElementById("max").value);
	if(!isNumeric.test(min) || !isNumeric.test(max)) {
		Swal.fire(
  'Lỗi',
  'Giá trị nhập vào không hợp lệ',
  'error'
)
		return;
	}
}