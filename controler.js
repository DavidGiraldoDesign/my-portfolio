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

        //background-color: rgb(255, 0, 51);
        //box-shadow: 0px 5px 5px rgb(20,20,20);
        let items = vista.body.querySelectorAll('.menu li');

        items.forEach((e, i) => {
            if(i==index){
                e.style.backgroundColor="rgba(255, 0, 51,1)";
                e.style.boxShadow="0px 5px 5px rgba(20,20,20,1)";
            }else{
                e.style.backgroundColor="rgba(255, 255, 51,0)";
                //e.style.backgroundColor="none";
                e.style.boxShadow="0px 10px 10px rgba(15,15,15,0)";
            }
        });
       
    }

    cv.onShowProjectModalView = (project) =>{
        console.log(project);
        vista.renderModal(project);
    }

    vista.render(funciones[0]);

};
 controler(vista);