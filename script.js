//скролл-бар меню
document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelector('.nav-scroller__items');
  const navItemActive = navItems.querySelector('.nav-scroller__item_active');
  if (!navItemActive) {
    return;
  }
  const navItemsRect = navItems.getBoundingClientRect();
  const navItemActiveRect = navItemActive.getBoundingClientRect();
  const navItemsLeft = navItemActiveRect.left - navItemsRect.left + (navItemActiveRect.width - navItemsRect.width) / 2;
  navItems.scrollLeft = navItemsLeft;
})

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