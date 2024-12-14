const scrollDefault = document.getElementById('scroll-default')
window.addEventListener('scroll', () => {
    scrollDefault.classList.toggle('active', window.scrollY > 200)
})
scrollDefault.addEventListener('click', () => {
    window.scrollTo({
        "top": 0,
        "behavior": "smooth",
    })
})