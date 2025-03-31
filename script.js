// nav bar
const btnOpenUlNav = document.querySelector('.open-list-nav')
const btnCloseUlNav = document.querySelector('.close-list-nav')
const mobileUlNav = document.querySelector('.mobile-nav')
const navDiv = document.querySelector('.nav')

btnOpenUlNav.onclick = function(){
    if(mobileUlNav.style.display == 'none' || mobileUlNav.style.display == ''){
        // btn 
        btnOpenUlNav.style.display = 'none'
        btnCloseUlNav.style.display = 'block'
        // style and appear ul
        mobileUlNav.style.display = 'flex'
        navDiv.style.backdropFilter =  'blur(10px)'
        navDiv.style.backgroundColor = ' rgb(255, 255, 255, 0.05)'
        setTimeout(() => navDiv.style.height = ' 380px ',50)
    }
}
btnCloseUlNav.onclick = function(){
    if(mobileUlNav.style.display != 'none' || mobileUlNav.style.display != ''){
        // btn
        btnOpenUlNav.style.display = 'block'
        btnCloseUlNav.style.display = 'none'
        //remove style and hide ul
        mobileUlNav.style.display = 'none'
        navDiv.style.backdropFilter =  'blur(0)'
        navDiv.style.backgroundColor = 'transparent'
        setTimeout(() => navDiv.style.height = ' 100px ',50)
    }
}


// links in navBar
const linkNavDT = document.querySelectorAll('#linkNavDT');
const linkNavM = document.querySelectorAll('#linkNavM');

linkNavDT.forEach((link) =>{
    link.onclick = function(){
        linkNavDT.forEach((link) => link.style.borderColor = 'transparent' )
        link.style.borderColor = 'white'
        linkNavM.forEach((link) => link.style.borderColor = 'transparent' )
        linkNavM[Array.from(linkNavDT).indexOf(link)].style.borderColor = 'white'
    }
    linkNavDT[0].click()
})
linkNavM.forEach((link) =>{
    link.onclick = function(){
        linkNavM.forEach((link) => link.style.borderColor = 'transparent' )
        link.style.borderColor = 'white'
        linkNavDT[Array.from(linkNavM).indexOf(link)].click()
    }
    linkNavM[0].click()
})



//////////////////// section destination //////////////////////
const homePage = document.querySelector('.home-page')
const destinationPage = document.querySelector('.destination')
const main = document.querySelector('.main')
const DestinationLink = document.querySelector('.DestinationLink')
const allPages = document.querySelectorAll('.page')

DestinationLink.addEventListener('click',function(){
    allPages.forEach((page) => page.style.display = 'none')
    destinationPage.style.display = 'flex'

    resback('assets/destination/background-destination-desktop.jpg',
        'assets/destination/background-destination-tablet.jpg',
        'assets/destination/background-destination-mobile.jpg')

})
linkNavM[1].addEventListener('click', () =>{
    btnCloseUlNav.click()
})

////////////////////////// come back to home page
const homeLink = document.querySelector('.homeLink');
homeLink.addEventListener('click', () =>{
    allPages.forEach((page) => page.style.display = 'none')
    homePage.style.display = 'flex'

    if(mobileUlNav.style.display != 'none' || mobileUlNav.style.display != ''){
        btnCloseUlNav.click()
    }
    
    resback(
        'assets/home/background-home-desktop.jpg',
        'assets/home/background-home-tablet.jpg',
        'assets/home/background-home-mobile.jpg')
})

// function responsive background
function resback(back1,back2,back3){
    if(screen.width > 992){
        main.style.backgroundImage = `url(${back1})`
    }else if(screen.width < 992 && screen.width > 580){
        main.style.backgroundImage = `url(${back2})`
    }else if(screen.width < 580){
        main.style.backgroundImage = `url(${back3})`
    }
}