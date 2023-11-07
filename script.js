const panels = document.querySelectorAll('.panel');

panels.forEach(panel =>{
    panel.addEventListener('click',()=>{
        revoveActiveClasses();
        panel.classList.add('active')
    })
})
function revoveActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active');
    })
}