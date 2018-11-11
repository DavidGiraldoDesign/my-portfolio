let vista = {

    body: document.querySelector('body'),


    getMenuContainer: function getMenuContainer() {
        let div = document.createElement('div');
        div.className = 'col-2 menuContainer';
        div.innerHTML = `                        
      
                        <div class= "col-12 menu">
                        
                        <ul>
                            <li id="logo"></li>
                               <li>Profile</li>
                               <li>Portfolio</li>
                               <li>Education / Awards / Honors</li>
                               <li>Work experience</li>
                               <li>Data of interest</li>
                             </ul>

                        <a id="p5" href="https://josedavidgm1995.github.io/particle-ecosystem/" target="_blank">
                        <p>
                        Do you have time to play? <br>Then click me.
                        </p>
                        <a>    
                        </div>
                        `;


        let items = div.querySelectorAll('.menu li');

        items.forEach((element, index) => {
            element.addEventListener('click', e => {

                this.onChange(index);
            });

        });

        div.querySelector('#logo').appendChild(svg.getLogo());
        return div;
    },

    getContentContainer: function getMenuContainer() {
        let div = document.createElement('div');
        div.className = 'col-10 contentContainer';
        div.innerHTML = `
                            <div class="col-12 content">
            
                            </div>
                        `;

        //div.querySelector('.content').appendChild(cv.getWork());

        return div;
    },

    getContactInfoContainer: function getContactInfoContainer() {
        let div = document.createElement('div');
        div.className = 'col-2 contactInfoContainer';
        div.innerHTML = `
                            <div class= "col-12 info">
                                <div class="social">
                                    <ul>
                                        <li><a id="behance"  href="https://www.behance.net/JoseDavidGiraldoM" target="_blank"></a></li>
                                        <li><a id="github"   href="https://github.com/josedavidgm1995" target="_blank"></a></li>
                                        <li><a id="linkedin" href="https://www.linkedin.com/in/josedavidgiraldom/" target="_blank"></a></li>
                                        <li><a id="instagram" href="https://www.instagram.com/_david.giraldo/" target="_blank"></a></li>
                                        
                                    </ul>
                                </div>
                                <div class ="contact">
                                    <p>
                                    <a id="icesi-link" href="http://www.icesi.edu.co/" target="_blank">Icesi University </a>
                                    <br>
                                    Cali - Colombia - South America<br>                    
                                    josedavidgm1995@gmail.com<br>
                                    JOSE DAVID GIRALDO M.
                                    </p>
                                    <br>
                                    <br>
                                    <p>
                                    From Colombia <br>
                                    with love - 2018
                                    </p>
                                </div>
                            </div>
                        
                        `;

        let b = div.querySelector('#behance');
        b.appendChild(svg.getBehance());
        let g = div.querySelector('#github');
        g.appendChild(svg.getGithub());
        let l = div.querySelector('#linkedin');
        l.appendChild(svg.getLinkedin());
        let i = div.querySelector('#instagram');
        i.appendChild(svg.getInstagram());

        return div;
    },

    getMainContainer: function getMainContainer() {
        let div = document.createElement('div');
        div.className = 'col-8 mainContainer';
        div.appendChild(this.getMenuContainer());
        div.appendChild(this.getContentContainer());
        div.appendChild(this.getContactInfoContainer());
        return div;
    },

    getProjectModal: function getProjectModal(project) {
        let div = document.createElement('div');
        div.className = 'modalProject';
        div.innerHTML = `
            <div class="modalProjectContent">
                
                <div class="modalImage">
                    <div class="imageColum">
                    <img src=${project.photoA} alt="project-img">
                    <img src=${project.photoB} alt="project-img">
                    <img src=${project.photoC} alt="project-img">
                    <img src=${project.photoA} alt="project-img">
                    <img src=${project.photoB} alt="project-img">
        
                    </div>
                </div>
                <div class="modalInfo">
                <div id="closeModal"><p>Back</p></div>
                <h1>${project.title}</h1>
                    <h2>${project.tags}</h2>
                    <p>${project.info}</p>
                    <br><br>
                    <a href="https://www.behance.net/gallery/${project.behanceRute}" target="_blank">
                    <h2>See more on Behance ></h2>
                    </a>
                </div>
            </div>

        `;
        let m = div.querySelector('.modalImage');
        
        let a = 0;
        let b = 900;

        let e = () => {
            if (a < b) {
                a++;
                console.log(a);
                m.scrollTop += 1;
                setTimeout(e, 25);
            } else {
                m.scrollTop = 0;
                a = 0;
                setTimeout(e, 25);
            }

        };
        e();

        let back = div.querySelector('#closeModal');
        back.addEventListener('click',e=>{
            div.style.display="none";
        });

        return div;
    },

    render: function render(intro) {
        console.log("Hi there, welcome to my code");
        this.body.appendChild(this.getMainContainer());
        let content = this.body.querySelector('.content');
        content.appendChild(intro);

        /*let item = vista.body.querySelector('.menu li');
        item.style.backgroundColor = "rgb(255, 0, 51)";
        item.style.boxShadow = "0px 5px 5px rgb(20,20,20)";*/

    },

    renderContent: function renderContent(newContent) {
        let content = this.body.querySelector('.content');
        content.innerHTML = '';
        content.appendChild(newContent);
    },

    renderModal: function renderModal(project) {
        let content = this.body.querySelector('.content');
        this.body.appendChild(this.getProjectModal(project));
    },


};