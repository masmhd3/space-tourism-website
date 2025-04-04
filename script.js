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

    main.style.backgroundImage = `url(assets/destination/background-destination-desktop.jpg)`
    destinationPage.style.display = 'flex'
    setTimeout(() => destinationPage.style.opacity = '1', 50);

    efpijew(
        'assets/destination/background-destination-desktop.jpg',
        'assets/destination/background-destination-tablet.jpg',
        'assets/destination/background-destination-mobile.jpg',
    )
    resback(
        'assets/destination/background-destination-desktop.jpg',
        'assets/destination/background-destination-tablet.jpg',
        'assets/destination/background-destination-mobile.jpg',
    )

})
linkNavM[1].addEventListener('click', () =>{
    btnCloseUlNav.click()
})

////////////////////////// come back to home page
const homeLink = document.querySelector('.homeLink');
homeLink.addEventListener('click', () =>{
    allPages.forEach((page) => page.style.display = 'none')
    homePage.style.display = 'flex'
    // main.style.backgroundImage = `url(assets/home/background-home-desktop.jpg)`

    efpijew(
        'assets/home/background-home-desktop.jpg',
        'assets/home/background-home-tablet.jpg',
        'assets/home/background-home-mobile.jpg',
    )
    resback(
        'assets/home/background-home-desktop.jpg',
        'assets/home/background-home-tablet.jpg',
        'assets/home/background-home-mobile.jpg',
    )
})
linkNavM[0].addEventListener('click', () =>{
    btnCloseUlNav.click()
})

// function responsive background

function resback(img1,img2,img3){
    if(screen.width > 992){
        main.style.backgroundImage = `url(${img1})`
    }else if(screen.width < 992 && screen.width > 580){
        main.style.backgroundImage = `url(${img2})`
    }else if(screen.width < 580){
        main.style.backgroundImage = `url(${img3})`
    }
}
function resBTNNAV(){
    if(screen.width > 580){
        btnOpenUlNav.style.display = 'none'
    }else{
        btnOpenUlNav.style.display = 'block'
    }
}
function efpijew(back1,back2,back3){
    window.matchMedia("(orientation:portrait)").addEventListener('change',function(event){
        if(event.matches){
            if(screen.width > 992){
                main.style.backgroundImage = `url(${back1})`
            }else if(screen.width < 992 && screen.width > 580){
                main.style.backgroundImage = `url(${back2})`
            }else if(screen.width < 580){
                main.style.backgroundImage = `url(${back3})`
            }
        }else{
            if(screen.width > 992){
                main.style.backgroundImage = `url(${back1})`
            }else if(screen.width < 992 && screen.width > 580){
                main.style.backgroundImage = `url(${back2})`
            }else if(screen.width < 580){
                main.style.backgroundImage = `url(${back3})`
            }
        }
        resBTNNAV()
    })
}


/////////////// links of destination //////
const destinationLinks = document.querySelectorAll('.ul-dp li a');
const numberDS = document.getElementById('numberDes');
const imgDS = document.getElementById('imgDes');
const h1_dp = document.querySelector('.h1-dp');
const p_dp = document.querySelector('.p-dp');
const extrINFDP_Span = document.querySelectorAll('.extr-INFDP p span');

let DataDestination;
fetch('data.json')
    .then((data) => data.json())
    .then((data) =>{
        destinationLinks.forEach((link) => {
            link.addEventListener('click',function(event){
                event.preventDefault();
                // style links
                destinationLinks.forEach((link) => link.style.borderColor = 'transparent')
                link.style.borderColor = 'white'

                // get data of destination "object"
                DataDestination = data.destinations[Array.from(destinationLinks).indexOf(link)]

                // put data
                numberDS.innerHTML = `0${Array.from(destinationLinks).indexOf(link)}`
                imgDS.src = DataDestination.images.png
                h1_dp.innerHTML = DataDestination.name
                p_dp.innerHTML = DataDestination.description
                extrINFDP_Span[0].innerHTML = DataDestination.distance
                extrINFDP_Span[1].innerHTML = DataDestination.travel
            })
        })
        destinationLinks[0].click()
    })
    .catch((erorr) => console.log(`Error loading data ${erorr}`))



//////////// crew ///////////////////////
const crewLInk = document.querySelector('.crewLInk')
const crewPage = document.querySelector('.crew')
crewLInk.addEventListener('click',function(){
    allPages.forEach((page) => page.style.display = 'none')
    crewPage.style.display = 'flex'
    setTimeout(() => crewPage.style.opacity = '1', 50);

    

    efpijew(
        'assets/crew/background-crew-desktop.jpg',
        'assets/crew/background-crew-tablet.jpg',
        'assets/crew/background-crew-mobile.jpg',
    )
    resback(
        'assets/crew/background-crew-desktop.jpg',
        'assets/crew/background-crew-tablet.jpg',
        'assets/crew/background-crew-mobile.jpg',
    )

})


// edit photo
const imgCrew = document.getElementById('imgCrew')
function resImgCrew(){
    if(screen.width > 850){
        if(imgCrew.src.includes('image-anousheh-ansari.png')){
            imgCrew.style.width = '420px'
            document.querySelector('.name-cp').style.fontSize = '35px'
        }else if(imgCrew.src.includes('assets/crew/image-mark-shuttleworth.png')){
            imgCrew.style.width = '320px'
        }
        else{
            imgCrew.style.width = '350px'
            document.querySelector('.name-cp').style.fontSize = '39px'
        }
        if(imgCrew.src.includes('assets/crew/image-victor-glover.png')){
            document.querySelector('.left-ccp').style.transform = 'translateY(-50px)';
        }else{
            document.querySelector('.left-ccp').style.transform = 'translateY(0)';
        }
        
    }
}
resImgCrew()
window.addEventListener('resize', resImgCrew);
linkNavM[2].addEventListener('click', () =>{
    btnCloseUlNav.click()
})

//
fetch('data.json')
    .then((data) => data.json())
    .then((data) =>  {
        const linksCP = document.querySelectorAll('.points-ranio-cr div a')
        linksCP.forEach((link) => {
            link.addEventListener('click',function(event){
                // prevent reload 
                event.preventDefault()
    
                // style
                linksCP.forEach((link) => link.style.backgroundColor = '#ffffff80')
                link.style.backgroundColor = 'white'

                
                // data of crew
                const dataCrew = data.crew[Array.from(linksCP).indexOf(link)]
                document.querySelector('.top-cp span').innerHTML = `0${(Array.from(linksCP).indexOf(link)) + 1}`
                document.querySelector('.toptop-cp span').innerHTML = `0${(Array.from(linksCP).indexOf(link)) + 1}`
                document.getElementById('imgCrew').src = dataCrew.images.png
                document.querySelector('.job-cp').innerHTML = dataCrew.role
                document.querySelector('.name-cp').innerHTML = dataCrew.name
                document.querySelector('.script-cp').innerHTML = dataCrew.bio
                
                resImgCrew()
            })
        })
        linksCP[0].click()

    })
    .catch(error => console.log('error loading data ' + error))



//////////////////////// technology ////////////////////////////
const linkTechPage = document.querySelector('.linkNavDT')
const technologyPace = document.querySelector('.technology')

linkTechPage.addEventListener('click',function(){
    allPages.forEach((page) => page.style.display = 'none')
    technologyPace.style.display = 'flex'
    setTimeout(() => technologyPace.style.opacity = '1', 50);

    efpijew(
        'assets/technology/background-technology-desktop.jpg',
        'assets/technology/background-technology-tablet.jpg',
        'assets/technology/background-technology-mobile.jpg',
    )
    resback(
        'assets/technology/background-technology-desktop.jpg',
        'assets/technology/background-technology-tablet.jpg',
        'assets/technology/background-technology-mobile.jpg',
    )
})
linkNavM[3].addEventListener('click', () =>{
    btnCloseUlNav.click()
})



//////// get and put data //////
const linksTechPage = document.querySelectorAll('.numlink a')

fetch('data.json')
    .then((data) => data.json())
    .then((data) => {

        linksTechPage.forEach((link) => {
            link.addEventListener('click',function(event){
                // don't reload page
                event.preventDefault()
                //style
                linksTechPage.forEach((link) => {
                    link.style.backgroundColor = 'transparent'
                    link.style.borderColor = '#ffffff80'
                    link.style.color = ' rgba(255, 255, 255, 0.8)'
                })
                link.style.backgroundColor = 'white'
                link.style.borderColor = 'white'
                link.style.color = 'black'

                // get and put data from data.json
                const dataTechOBJ = data.technology[Array.from(linksTechPage).indexOf(link)]
                document.querySelector('.top-tp span').innerHTML = `0${(Array.from(linksTechPage).indexOf(link) + 1)}`
                document.querySelector('.nameTechnology').innerHTML= dataTechOBJ.name
                document.querySelector('.script').innerHTML= dataTechOBJ.description
                document.querySelector('#techImg').src = dataTechOBJ.images.portrait
            })
        })
        linksTechPage[0].click()

    })
    .catch((error) => console.log(`error loading data ${error}`))

