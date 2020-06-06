var accordion = document.querySelectorAll('.accordion-item');
var content = document.querySelectorAll('.accordion--content');

function hasClass(el, className) {
    console.log(el);
    
    console.log(className);
    if (el.classList)
      return el.classList.contains(className)
    else
      return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
  }

accordion[0].onclick = function(){
    console.log('a');
    if( ! hasClass(content[0], 'display')){
        console.log('b')
        content[0].classList.add('display');
    }else
    content[0].classList.remove('display');
}  