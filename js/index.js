let listArray = document.getElementsByClassName("faq-list-item");
const buttonClick = (e) => {
    e.preventDefault();

    const open = document.querySelector('.open');
    if (open) {
        open.classList.remove("open");
        open.classList.add('closed');
    }

    // if (e.currentTarget.classList.contains('open')) {
        // console.log(JSON.stringify(e.currentTarget.classList.contains('open')));
        // e.currentTarget.classList.remove('open');
        // e.currentTarget.classList.add('closed');
    // }
    e.currentTarget.classList.remove('closed');
    e.currentTarget.classList.add('open');
    // console.log(JSON.stringify(e.currentTarget.classList.contains('open')));
}
for (let i = 0; i < listArray.length; i++) {
    listArray[i].addEventListener('click', buttonClick);
}