function showPage(pageId) {
    // Masquer toutes les pages
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }

    // Afficher la page sélectionnée
    var selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.style.display = 'block';
    }
}
