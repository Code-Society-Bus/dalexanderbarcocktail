const domTitle = document.querySelector("#titleSlider")
const domSubtitle = document.querySelector("#subtitleSlider")
const domImg = document.querySelector("#imgSlider")
const domControlls = document.querySelector(".controlls")
const domKeys = document.querySelectorAll(".key")
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")

const TIME_INTERVAL = 3000

const propsSlider = [
    {
        title: "D'Alexander Bar Coctel",
        subtitle: "Profesional con mas de 8 años de experiencia",
        img: "assets/images/slider_1.png"
    },
    {
        title: "Bartender Profesional",
        subtitle: "Deleita tus sentidos con una experiencia refrescante",
        img: "assets/images/slider_2.png"
    },
    {
        title: "Bartender Class",
        subtitle: "Aprende con un gran profesional",
        img: "assets/images/slider_3.png"
    },
]


let slider_active = 0
let interval = undefined

if( propsSlider.length > 1 ){
    activeSlide( slider_active )
    interval = setInterval( mainSilder, TIME_INTERVAL)
} else {
    activeSlide( 0 )
}

prev.addEventListener('click', () => {
    if( slider_active != 0 ){
        slider_active--
        activeSlide( slider_active )
        clearInterval( interval )
        interval = setInterval( mainSilder, TIME_INTERVAL)
    } 
    
})
next.addEventListener('click', () => {
   if( slider_active != propsSlider.length-1 ){
        slider_active++
        activeSlide( slider_active )
        clearInterval( interval )
        interval = setInterval( mainSilder, TIME_INTERVAL)
   }

})

function mainSilder(){
    slider_active += 1

    if( slideIsLast() )
        slider_active =  0          
        

    activeSlide( slider_active )
    activeKey()
    
}

function activeKey(){
    for( let i = 0; i < domKeys.length ;i++){
        if( slider_active == i )
            domKeys[ i ].classList.add('active')
        else
            domKeys[ i ].classList.remove('active')
        
    }
}

function activeSlide( slide ){
    domTitle.innerHTML = propsSlider[ slide ].title
    domSubtitle.innerHTML = propsSlider[ slide ].subtitle
    domImg.src = propsSlider[ slide ].img
    activeKey()
    effectReveal()
}

function slideIsLast(){
    return slider_active >= propsSlider.length
}

function effectReveal(){
    domTitle.classList.add('reveal')
    domSubtitle.classList.add('reveal')
    domImg.classList.add('reveal')

    setTimeout(()=>{
        domTitle.classList.remove('reveal')
        domSubtitle.classList.remove('reveal')
        domImg.classList.remove('reveal')
    },500)
    
}
