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
	else if(Number(min) > Number(max)){
				Swal.fire(
  'Lỗi',
  'Giá trị nhập vào không hợp lệ',
  'error'
)
		return;
	}
}
///FILTER BY //
function filterBy(type){
	switch(type.value){
		case "atoz": atoz(); break;
		case "ztoa":ztoa(); break;
		case "ascending": ascending(); break;
		case "descending": descending(); break;
		default:break;
	}
}
function ztoa(){

}
function atoz(){

}
function ascending(){

}
function descending(){

}
//END OF FILTER BY//
