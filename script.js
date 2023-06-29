//проверяет запрос
function getinput() {
    let input = document.getElementById("input");
    let filter = input.value.toUpperCase();
    let ul = document.getElementById("ul");
    let li = ul.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
      let a = li[i].getElementsByTagName("a")[0];
      let txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().includes(filter)) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  // кнопка, показ списка
  function show() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

const scrollBtn = document.getElementById('scrollCaroosel');
const toScrollMenu = document.querySelector('.caroosel__container');
scrollBtn.addEventListener('click', () => {
    toScrollMenu.classList.toggle('scroll')
})