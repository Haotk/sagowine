 var keyword = decodeURI(window.location.href).toString().split('?')[1];

function getKeyword(){
	document.getElementById(`keyword`).innerText = "Kết quả tìm kiếm: "+keyword;
}

window.addEventListener("load",getKeyword);