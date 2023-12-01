function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

      // pegar a  tag img
    const img = document.querySelector("#profile img") // seletor do css

      // substituir a img
    if ( html.classList.contains('light')) {
         // se estiver lightmod add light img
    img.setAttribute('src', 'assets/avatar-light.jfif')
    } else {
         // se tiver sem light mode, manter a img normal
    img.setAttribute('src', 'assets/avatar.jpg')
    }



  

  


}