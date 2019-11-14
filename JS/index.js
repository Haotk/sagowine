//CONST
/**GET/SET DATA FROM LOCAL STORAGE**/
const getDataFromLocal = (data,key) =>{ 

  data = JSON.parse(localStorage.getItem(key));
  return data==null ? 0 : data; };


const setDataToLocal = (data,key) => localStorage.setItem(key,JSON.stringify(data));


//END OF CONST
//AUTOCOMPLETE

function autocomplete(inp, arr) {

  var currentFocus;

  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          b.innerHTML += "<a href='Detail.html?"+arr[i]+"'></a>"
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              window.location = "Detail.html?"+this.getElementsByTagName("input")[0].value.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');

; // TIM KIEM KIEU 1
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        search();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

/*An array containing all the country names in the world:*/
var countries = getDataFromLocal(countries,"sanpham")//TIM KIEM KIEU 2
countries = countries.map(country => country.tensach);
function search(){
  var content ="Search.html?"+document.getElementById("suggest").value.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');

;
  window.location =content;
}
//KET THUC TIM KIEM KIEU 2
//ENDOFAUTOCOMPLETE


function change(value){
   var item = document.getElementsByClassName("items");
    
    for (let i=0;i<item.length;i++){

       item[i].className = item[i].className.replace(" active", "");
    }
    item[value].className += " active";
}

function addToCart(value){
 Swal.fire({
  title: 'Thêm vào giỏ?',
  icon: 'question',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Có',
  cancelButtonText: 'Không',
}).then((result) => {
  if (result.value) {
    Swal.fire(
      'Thêm thành công',
      '',
      'success'
    )
    document.getElementById(`soluong`).innerText = parseInt(document.getElementById(`soluong`).innerText)+1;
  }
})
}