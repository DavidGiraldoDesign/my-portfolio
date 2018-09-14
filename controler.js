function controler (vista) {
   

    let funciones = [
        cv.getProfile(),
        cv.getPortfolio(),
        cv.getEducation(),
        cv.getAwards(),
        cv.getWork(),
        cv.getLanguage(),
        cv.getData()
    ]   

    vista.onChange = (index) =>{
        vista.renderContent(funciones[index]);
    }

    vista.render();

};
 controler(vista);