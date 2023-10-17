const activePage = window.location.pathname;
const navLinks =  document.querySelectorAll('menu-links a').forEach(link => {
    if(link.href.includes ('${activePage}')){
        console.log('${activePage');
    }
})