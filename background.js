function background(){
    const date = new Date();
    if(date.getHours() > 21 && date.getHours() < 6){document.body.style.backgroundImage = "url('izolabella_g1.gif')"}
    if(date.getHours() > 12 && date.getHours() < 21){document.body.style.backgroundImage = "url('izolabella_g2.gif')"}
    if(date.getHours() > 6 && date.getHours() < 12){document.body.style.backgroundImage = "url('izolabella_g3.gif')"}
}
background()