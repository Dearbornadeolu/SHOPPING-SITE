let mobileMenu = document.getElementById('mobile-Menu')
mobileMenu.addEventListener('click', mobileMenuClicked)
let mobileContentAppear = document.querySelector('.mobile-navbar')
function mobileMenuClicked(){
    if (mobileContentAppear.style.display === 'none') {
        mobileContentAppear.style.display = 'initial'
        document.getElementById('mobile-Menu').innerHTML= `<i class="fa-solid fa-xmark"></i>`
    } else{
        mobileContentAppear.style.display = 'none'
        document.getElementById('mobile-Menu').textContent = "MENU"
    }
}
function btnpara() {
    alert('check the menu bar ')
}