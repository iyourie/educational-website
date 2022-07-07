document.querySelectorAll('section').forEach(i => {
    i.addEventListener('click', () => {
        i.classList.toggle('reveal')
    })
})
