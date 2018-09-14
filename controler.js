function controler (vista) {
   

    let funciones = [
        cv.getIntro(),
        cv.getProfile(),
        cv.getPortfolio(),
        cv.getEducation(),
        cv.getWork(),
        cv.getData()
    ]   

    vista.onChange = (index) =>{
        vista.renderContent(funciones[index]);
        if(index=='0'){
            vista.body.querySelector('.contentContainer').style.background="none";
        }else{
            vista.body.querySelector('.contentContainer').style.background="white";
        }
    }

    vista.render(funciones[0]);

};
 controler(vista);