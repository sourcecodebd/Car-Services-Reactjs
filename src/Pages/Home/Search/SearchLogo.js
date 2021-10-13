const searchLogo = () => {
    const searchInput = document.querySelector('.search-input');
    searchInput.classList.toggle('search-input-show');

    const faSearch = document.querySelector('#expert-search');
    faSearch.classList.toggle('fa-search-show');
}

export default searchLogo;