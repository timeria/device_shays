window.addEventListener('DOMContentLoaded' , () => {

  const popupBlock = document.querySelector('.page-overlay');
  const popupForm = document.querySelector('.page-popup');
  const popupButton = document.querySelector('.button--popup');
  const body = document.querySelector('.page');

  if(popupForm && (window.screen.width > 1023) ) {
    const popupClose = document.querySelector('.page-popup__close');
    const inputName = popupForm.querySelector('#user_name1');

    popupButton.addEventListener('click', () => {
      popupBlock.style.display = "block";
      popupForm.style.display = "block";
      body.classList.add('page-body--active');
      inputName.focus();
    });

    popupClose.addEventListener('click', () => {
      popupBlock.style.display = "none";
      popupForm.style.display = "none";
      body.classList.remove('page-body--active');
    });

    popupBlock.addEventListener('click', () => {
      popupBlock.style.display = "none";
      popupForm.style.display = "none";
      body.classList.remove('page-body--active');
    });
  };

  document.addEventListener('keyup', (e)  => {
    if (e.keyCode === 27) {
      popupBlock.style.display = "none";
      popupForm.style.display = "none";
      body.classList.remove('page-body--active');
    }
  });

  //Плавная прокрутка по якорю

  if('.banner__button') {
    const anchor = document.querySelector('.banner__button');

    anchor.addEventListener('click', (e) => {
      e.preventDefault()

      const blockID = anchor.getAttribute('href')

      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  };


  //Форма

  const form = document.querySelector('form');
  const form1 = document.querySelector('form1');
  if(form) {
    const userName = form.querySelector('#user_name');
    const userPhone = form.querySelector('#user_phone');
    const userText = form.querySelector('#form__textarea');
    const formButton = form.querySelector('.form__button');

    let isStorageSupport = true;

    try {
      storageNameStart = localStorage.getItem('userName');
      storagePhoneStart = localStorage.getItem('userPhone');
      storageTextStart = localStorage.getItem('userText');
    } catch (err) {
      isStorageSupport = false;
    }

    form.addEventListener('submit', function () {
      if(isStorageSupport) {
        localStorage.setItem('userName', userName.value);
        localStorage.setItem('userPhone', userPhone.value);
        localStorage.setItem('userPhone', userPhone.value);
      }
    });

  }

  if(form1) {
    const userName1 = form1.querySelector('#user_name1');
    const userPhone1 = form1.querySelector('#user_phone1');
    const userText1 = form1.querySelector('#form__textarea1');
    const formButton1 = form1.querySelector('.form__button');

    try {
      storageNameStart1 = localStorage.getItem('userName1');
      storagePhoneStart1 = localStorage.getItem('userPhone1');
      storageTextStart1 = localStorage.getItem('userText1');
    } catch (err) {
      isStorageSupport = false;
    }

    form1.addEventListener('submit', function () {
      if(isStorageSupport) {
        localStorage.setItem('userName1', userName1.value);
        localStorage.setItem('userPhone1', userPhone1.value);
        localStorage.setItem('userPhone1', userPhone1.value);
      }
    });
  }

  //Аккордион
  if(window.screen.width < 768) {
    const accordBlock = document.querySelector('.accordion');

    if(accordBlock) {
      const acc = accordBlock.querySelectorAll(".accordion__title");
      const accC = accordBlock.querySelectorAll(".accordion__content");
      accC.forEach(item => {
        item.style.display = "none";
      })

      acc.forEach(item => {
        item.classList.toggle("active");
      })

      for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {

          this.classList.toggle("active");

          /* Toggle between hiding and showing the active panel */
          let panel = this.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        });
      }
    }
  }

  [].forEach.call( document.querySelectorAll('input[type="tel"]'), function(input) {
    let keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      let pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      let matrix = "+7 (___) ___ ____",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, ""),
      new_value = matrix.replace(/[_\d]/g, function(a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a
      });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      let reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function(a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)

});

});


