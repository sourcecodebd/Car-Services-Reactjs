const pressOnBar = () => {
    const bar = document.getElementById('menu-bar');
    const menu = document.querySelector('.menu');
    bar.classList.toggle('fa-times');
    menu.classList.toggle('show');
}
export default pressOnBar;