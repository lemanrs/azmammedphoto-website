
window.addEventListener("scroll", () => {
let scroll = window.scrollY;
if (scroll > 20) {

    document.querySelector('.navbar').style.backgroundColor = 'rgb(' + 19 + ',' + 19 + ','+ 90 + ')';

}

else {
    document.querySelector('.navbar').style.backgroundColor =  'rgba(' + 0 + ',' + 0 + ',' + 0 + ',' + 0 + ')';


}});

