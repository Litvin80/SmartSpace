export function scrollingGoTo() {
    const menuLinks = document.querySelectorAll('[data-goto]');

    // Для бургера
    const iconMenu = document.querySelector('.menu__icon');
    const menuBody = document.querySelector('.menu__body');

    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener('click', onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            const menuLink = e.target;
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

                // Для бургера 
                if (menuLink.closest('.menu__link')) {
                    if (iconMenu.classList.contains('_active')) {
                        iconMenu.classList.remove('_active');
                        menuBody.classList.remove('_active');
                        document.body.classList.remove('_lock');
                    }
                }

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth',
                });
                e.preventDefault();
            }
        }
    }
}