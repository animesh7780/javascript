function handleScroll() {

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    const scrollableHeight = scrollHeight - clientHeight;

    const scrollPercentage = (scrollTop / scrollableHeight) * 100;

    document.querySelector('.progress').style.width = scrollPercentage + '%';
}

window.addEventListener('scroll', handleScroll);
