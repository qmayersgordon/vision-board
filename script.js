
/**Event bubbling */
document.addEventListener('click', function(event) {
    const element = event.target;
    console.log(element);
    if(element && element.parentElement.closest('div')){
        const activePanel = document.querySelector('.panel.active');
        activePanel.classList.remove('active');
        element.parentElement.closest('div').classList.add('active');
        
    }
    
})

