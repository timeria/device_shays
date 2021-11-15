const phoneValidate = (elem) => {
  if(elem) {
    elem.addEventListener('input', () => {
      if(elem.value.match(/[A-Za-zА-Яа-яЁё]/) ) {
        elem.value = elem.value.replace(/[A-Za-zА-Яа-яЁё]/, '');
        elem.setCustomValidity('Поле не должно содержать буквы');
      } else {
        elem.setCustomValidity('');
      }

      elem.reportValidity();
    });
  }
}

window.addEventListener('DOMContentLoaded' , () => {

  //Плавная прокрутка по якорю

  if('.site-list__link') {
    const anchors = document.querySelectorAll('.site-list__link')

    for (let anchor of anchors) {
      anchor.addEventListener('click', (e) => {
        e.preventDefault()

        if(body.classList.contains('page-body--active')) {
          body.classList.remove('page-body--active');
          headerBlock.classList.remove('page-header--active');
          headerMenu.classList.remove('main-nav--active');
        };

        const blockID = anchor.getAttribute('href')

        document.querySelector(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    }
  }


  //Форма

  const form = document.querySelector('form');
  if(form) {
    const userName = form.querySelector('#user_name');
    const userPhone = form.querySelector('#user_phone');
    const formButton = form.querySelector('.form__button');

    let isStorageSupport = true;

    try {
      storageNameStart = localStorage.getItem('userName');
      storagePhoneStart = localStorage.getItem('userPhone');
    } catch (err) {
      isStorageSupport = false;
    }

    phoneValidate(userPhone);

    form.addEventListener('submit', function () {
      if(isStorageSupport) {
        localStorage.setItem('userName', userName.value);
        localStorage.setItem('userPhone', userPhone.value);
      }
    });

  }

  //Аккордион

const tabsItem = document.querySelectorAll('.accordion__title'),
console.log(tabsItem);
const tabsContent = document.querySelectorAll('.accordion__content'),
const tabsParent = document.querySelector('.accordion');

function hideTabContent() {
  tabsContent.forEach(item => {
    item.classList.remove('active');
    item.style.display = "none";
  });

  tabsItem.forEach(item => {
    item.classList.remove('active');
  })
}

function showTabContent(i = 0) {
  tabsContent[i].classList.add('active');
  tabsContent[i].display = "block";
  tabsItem[i].classList.add('active');
}

hideTabContent();
showTabContent();

tabsParent.addEventListener('click', (event) => {
  const target = event.target;
  if(target && target.classList.contains('accordion__title')) {
    tabsItem.forEach((item, i) => {
      if(target == item) {
        hideTabContent(i);
        showTabContent(i);
      }
    })
  }
});

});
