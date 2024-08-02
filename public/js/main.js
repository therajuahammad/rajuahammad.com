// Stikcy Header JS
function stickyHeader(selector) {
    const header = document.querySelector(selector);
    window.addEventListener('scroll', () => {
        var scrollTop = window.pageYOffset;
        scrollTop >= 200 ? header.classList.add('fixtopmenu') : header.classList.remove('fixtopmenu');
    })
}

stickyHeader('#header-area');

// Preloader JS
function preloader() {
    const body = document.querySelector('body');
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        body.classList.remove('preloader-active');
    })
    preloader.style.display = 'none';
}

preloader();

// Poretfolio Load More Content
var items = document.querySelectorAll('.port-item'),
    loadMoreBtn = document.querySelector('.btn-loadmore'),
    maxItems = 6,
    hiddenClass = "visually-hidden";

items.forEach((elem, idx) => {
    if (idx > maxItems - 1) {
        elem.classList.add(hiddenClass);
    }
})

loadMoreBtn.addEventListener('click', function (e) {
    e.preventDefault();

    const hiddenItems = document.querySelectorAll('.' + hiddenClass);

    hiddenItems.forEach((elem, idx) => {
        if (idx < maxItems - 3) {
            elem.classList.remove(hiddenClass);
        }
    });
});