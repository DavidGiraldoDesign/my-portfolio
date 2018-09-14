let cv = {

    getIntro: function getIntro() {
        var div = document.createElement("div");
        div.innerHTML = `
<div class="flex-container">
        <div class="container">
        <img src="assets/me.png" alt="Avatar" class="image">
        <div class="overlay">
          <div class="text">
          <p>Several years ago, during a field trip to a company, I had a conversation with my former design dean at Icesi University, where he told me that in order to follow my passion for design I had to be aware about how design is changing due to the trends and technological advances and look out for Design Studios abroad, where they believe in a truthful way that design can improve people way of living. 
          <br>
          <br>-To him, thank you.</p>
          </div>
        </div>
      </div>
  </div>      
        

   `
        return div;
    },
    getProfile: function getProfile() {
        var div = document.createElement("div");
        div.innerHTML = `
                
        <p>
        I am an outgoing and active Industrial and Interactive Media Design student,  
        capable to work in collaborative environments, who is interested to belong to 
        a product design studio with a transparent and well constituted team. 
        <br>
        <br>
        Since I realized that technology has become a part of our daily products and 
        living, I began to study <span class="high-light">Interactive Media Design in 2016</span> 
        while studying <span class="high-light">Industrial Design since 2012.</span> 
        Nevertheless I have never thought about Interactive media design 
        as a tool to reinforce Industrial design but both careers as a big whole. Therefore 
        I consider myself as an <span class="high-light">Interactive Product Designer.</span>
        <br>
        <br>
        This interesting  journey has allowed me to  work in “user research” projects at 
        the university, where I got to know new design methodologies (HCI, UX), I have learned 
        to program (Java, Javascript, Arduino) and to prototype my ideas (Computer based and 
        hand based) as well.
        </p>
        

   `
        return div;
    },
    getPortfolio: function getPortfolio() {
        var div = document.createElement("div");
        div.innerHTML = ` 
                        <h1>Know my Desgin process</h1>
                        <br>
                        <div id="process">
    
                            <iframe  src="https://www.youtube-nocookie.com/embed/g6idU-GWSxA?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                       
                        </div>
                        <br>
                        <h1>Know more about my work on Behance</h1>
                        <br>
                        <div class="projects">
                            <a href="https://www.behance.net/gallery/31805579/BeoPlay-S1-A2-Bang-Olufsen" target="_blank">
                            <img src="assets/a.png" alt="bang"> </a>
                            <a href="https://www.behance.net/gallery/52866971/Hablame" target="_blank">
                            <img src="assets/b.png" alt="talk" height="140" width="190"> </a>
                            <a href="https://www.behance.net/gallery/31850193/Venus-Lamp-outdoor-luminary" target="_blank">
                            <img src="assets/c.png" alt="lamp"> </a>
                            <a href="https://www.behance.net/gallery/31931717/Be-a-child-again-Art-Toy" target="_blank">
                            <img src="assets/d.png" alt="toy" > </a>
                            <a href="https://www.behance.net/gallery/32147115/It-adapted-to-you-Furniture-Design-Competition" target="_blank">
                            <img src="assets/e.png" alt="furniture" > </a>
                            <a href="https://www.behance.net/gallery/30288287/ShellOils-Bottle-Design" target="_blank">
                            <img src="assets/f.png" alt="bottle" > </a>
                            <a href="https://www.behance.net/gallery/30281315/Axon-Manta-UTIII" target="_blank">
                            <img src="assets/g.png" alt="manta" > </a>
                            <a href="https://www.behance.net/gallery/30434043/My-SolidWorks-certification" target="_blank">
                            <img src="assets/h.png" alt="car" > </a>
                            <a href="https://www.behance.net/gallery/32509367/Lets-race" target="_blank">
                            <img src="assets/i.png" alt="race" > </a> 
                        </div>  
                        
                        `
                        
        return div;
    },
    getEducation: function getEducation() {
        var div = document.createElement("div");
        div.innerHTML = `
                
        <h1>University (undergraduate student) since 2012 - to date:</h1>
        <p>
        Industrial Design - IX semester
        <br>
        Interactive Media Design - IX semester
        <p><br>
        <h1>Academic: Honor student due to an outstanding performance in:</h1>
        <p>Industrial Design (January - 2016, August - 2015, January - 2014, August - 2014).<br>
        Interactive Media Design (January - 2017).</p>
        <br>
        <h1>Certifications:</h1>
        <p>Design Kit: Prototyping, provided by +Acumen and IDEO.org (2018).
        <br>
        SolidWorks Associate - Mechanical Design (2014).
        </p>
        <br>
        <h1>Non - academic: Appreciation & Contest:</h1>
        
                    <div class="awards col-12">
                    <img class="col-4" src="assets/1.jpg" alt="b">
                    <img class="col-4" src="assets/2.jpg" alt="b">
                    <img class="col-4" src="assets/3.jpg" alt="b">
                    </div>
        
              
                <p>Behance Appreciation Award Coin in product design (2016).
                <br>
                <br>
                MASISA Student Design Contest (2016) - 3º Place in Colombia and a special mention in design presentation skills.
                <br>
                <br>
                PAVCO Student Design Contest #DiseñaConPavco - 1º Place (2015).
                </p>
                <br>
          

   `
        return div;
    },
   
    getWork: function getWork() {
        var div = document.createElement("div");
        div.innerHTML = `
        <h1>Academic, Office and Research monitor in design at Icesi University:</h1>
        <p id="monitor">Under the supervision of recognized professors of the Icesi´s Design department. I have supported differents teachers by providing assistance to students requiring additional educational guidance in design. I also prepared extra topics, and assessed students’ projects in the following subjects: 
        </p>
        <p>
        <br>
        <br>
        “Taller 3” - <span class="high-light">I assisted in the area of Human Factors</span>, Usability, Accessibility, Universal Design and Ergonomics for design. From: January to May - 2014, August to November - 2014, and  August to November - 2017.
        <br>
        <br>
        “Bocetación 1” - <span class="high-light">I assisted in the area of product design sketching</span> and analog rendering. From: August to November - 2015, and August to November - 2016).
        <br>
        <br>
        “Diseño CAD-CAM” - <span class="high-light">I assisted in the area of 3D modeling with Rhino 5</span>, 3D printing using MakerBot, and product <span class="high-light">rendering with V-Ray.</span> From: August to November - 2016.
        <br>
        <br>
        “Diseño paramétrico” - <span class="high-light">I assisted algorithmic and parametric modeling</span> for Rhino 5 with GrassHopper. From: August - 2015.
        <br>
        <br>
        I assisted in the area of ergonomic design for bicycle handlebar grips, 3D modeling using SolidWorks and prototyping for the “Platoon-based Cyclists Cooperative System” project - A solution for smart transportation and human-to-machine interfaces. From: January to May - 2017, and August to November - 2017.
        <br>
        <br>
        I assisted the former design dean (Luis Mejia Puig) Designing the "Open House" image for the Industrial design program at Icesi University each year. From: January to May - 2016, August to November - 2016, and January to May - 2017.
        <br>
        <br>
        I have also assisted the currently design dean (Doris Arnot James) by designing the "Open House"  image for the Industrial design program at Icesi University in 2018. <span class="high-light">I also created and taught a 4 week class about using "Behance as a Industrial design portfolio”.</span> From: August to November - 2017, and January to May - 2018.
        </p>
        

   `
        return div;
    },
    getData: function getData() {
        var div = document.createElement("div");
        div.innerHTML = `
           
        <h1> Language skills: </h1>
            <p>
            Spanish as a native language
            <br>
            <br>
            English level B2
            </p>
            <br>

        <h1> Associations / Students groups: </h1>
            <p>
            I am a co-founder and the Director of design and communication of the Icesi´s Industrial design student group: “Conceptos”. Creating the design guidelines for the community manager tasks, brand communication, and visual styling. From: August to November - 2017, January to May - 2018, August 2018 - to date. </p> 
            <br>
            <h2><a href="https://www.instagram.com/conceptosicesi/" target="_blank">Instagram</a></h2>
            <br>
            <h2><a href="https://www.facebook.com/conceptosicesi " target="_blank">Facebook</a></h2>
            <br>
            <br>
        <h1>Graduation project for degree. Due date September 2019:</h1>
            <p>
            Date: January 2018 - to date
            Title: “Diseño de productos interactivos para el turismo accesible de personas ciegas dentro del acuario del Zoológico de Cali” - 
            <span class="high-light"> Interactive product design for accessible tourism for blind people visiting the aquarium at “The Cali Zoo”.</span>
            <br>Keywords: HCI, HCI-4D, Accessibility, Universal design, Usability, UX
            </p>

   `
  

        return div;
    },

};