const accordionsItemsEl = document.getElementsByClassName('accordion__item');

function accordion() {
  for ( item of accordionsItemsEl ) {
    let accHeader = item.firstElementChild;
    accHeader.addEventListener('click', function() {
       let accDetails = this.nextElementSibling;
       //Acts like a toggle on accDeatial's height
      if(accDetails.style.maxHeight) {
        accDetails.style.maxHeight = null;
        this.lastElementChild.innerHTML = '+'; //Changes icon to +
      } else {
        accDetails.style.maxHeight = accDetails.scrollHeight + 'px';
        this.lastElementChild.innerHTML = '-'; //Changes icon to -
      }
    })
  }
}

accordion();