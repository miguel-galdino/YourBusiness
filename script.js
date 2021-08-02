/*Navbar */

const menu = document.querySelector('.menu'); /* icone do menu (três barras ou flecha) */
const navbar = document.querySelector('.navbar'); 
const navLink = document.querySelectorAll('.nav-link') /* links da navbar */



menu.addEventListener('click', () =>{ 
  navbar.classList.toggle('change')
  menu.classList.toggle('change')

  /* ao clicar no menu expande a altura da 
  navbar e transforma as 3 barras numa flecha */
  
})


navLink.forEach(a =>{ 
  a.addEventListener('click', ()=>{
    navbar.classList.toggle('change')
    menu.classList.toggle('change')

    /* quando o usuário clica em um dos links da navbar, ela volta ao tamanho 
    padrão e o icone volta a ser 3 barras */

  })
})


/*Fim da Navbar*/


/*Video Section 2*/

const video = document.querySelector('.video')
const btn = document.querySelector('.buttons i')
const videoBar = document.querySelector('.video-bar')

const playPause = () => {
  if (video.paused) /* quando pausado, ao apertar o botão dá play no video, muda o icone e a opacidade */{
     video.play()
     btn.className = 'far fa-pause-circle'
     video.style.opacity = '.7'
  }else /* quando reproduzindo, ao apertar o botão pausa o vídeo, muda o ícone e volta a opacidade padrão */{
    video.pause()
    btn.className = 'far fa-play-circle'
    video.style.opacity = '.3'
  }
}

btn.addEventListener('click', () =>{ /* ao clicar no botão da barra vídeo, ativa a função playPause */
    playPause()
})

video.addEventListener('timeupdate', () =>{
  const barWidth = video.currentTime / video.duration 
  videoBar.style.width = `${barWidth * 100}%` /* aumenta a barra de reprodução do vídeo de acordo com a porcentagem de vídeo q ja foi reproduzida */
  if (video.ended) /* quando o vídeo acaba muda o ícone e a opacidade volta para o padrão */{
    btn.className = 'far fa-play-circle'
    video.style.opacity = '.3'
  }
})

/*Fim do Video Section 2*/

/*Swiper Section 3*/

var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 70,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true
  },
});

/*Fim do Swiper*/