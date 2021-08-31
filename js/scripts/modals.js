const modals = () => {
    const promoButtons = document.querySelectorAll('.promo__button'),
        modal = document.querySelector('.modal'),
        modalRequest = document.querySelector('.modal__request'),
        modalItem = document.querySelectorAll('.modal__item'),
        forms = document.querySelectorAll('form'),
        modalThanks = document.querySelector('.modal__thanks'),
        catalogButtons = document.querySelectorAll('.catalog__button-item'),
        modalOrder = document.querySelector('.modal__order'),
        catalogDetails = document.querySelectorAll('.catalog__details'),
        catalogItems = document.querySelectorAll('.catalog__item'),
        subIcon = document.querySelectorAll('.catalog__sub-icon'),
        subTitle = document.querySelector('.modal__sub-title-pulse');



    catalogItems.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            if (e.target.classList.contains('catalog__span')) {
                catalogDetails[index].classList.add('catalog__show-details');
            } else if (e.target.classList.contains('catalog__span-back')) {
                catalogDetails[index].classList.remove('catalog__show-details');
            }
        })
    })


    catalogButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            modalOrder.style.display = 'block';
            modal.style.display = 'block';
            subTitle.innerHTML = subIcon[index].innerHTML;
        });
    });

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            modalItem.forEach(item => {
                item.style.display = 'none';
            })
            modalThanks.style.display = 'block';
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                form.reset();
                modal.style.display = 'none';
                modalThanks.style.display = 'none';
                document.body.style.overflow = '';
            }, 2000);
        })
    })

    modal.addEventListener('click', e => {
        if (e.target && e.target == modal) {
            modalItem.forEach(item => {
                document.body.style.overflow = '';
                modal.style.display = 'none';
                item.style.display = 'none';
            })
        }
    })



    promoButtons.forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();
            document.body.style.overflow = 'hidden';
            modal.style.display = 'block';
            modalRequest.style.display = 'block';
        });
    });
}

export default modals;