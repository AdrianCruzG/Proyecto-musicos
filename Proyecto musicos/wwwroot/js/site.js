function muevePagina() {
    let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    
    window.scrollTo({
        top: vh,
        left: 0,
        behavior: 'smooth'
    });
}