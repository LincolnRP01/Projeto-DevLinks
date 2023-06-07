function toggleMode(){
    const html = document.documentElement
    const img = document.querySelector('#profile img')
    html.classList.toggle('light')


    
    if(html.classList.contains('light')){
        img.setAttribute('src', 'imagens/foto_jovem_f.png')
        
    } else {
        img.setAttribute('src', 'imagens/foto_jovem_m.png')
    }
    

    /*Simplicada
    
    */
}