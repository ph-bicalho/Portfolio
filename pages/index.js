import Head from "next/head"

function Home(){
    return(
    <div>
         <Head> <title>Portfolio - Pedro Bicalho - Web developer</title> </Head>

        <header>
           <img src="/images/logo.png" id="logo"/>
    
            <div className="menu-desktop">
                <nav>
                    <ul>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Portfolio">Portfolio</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </nav>
            </div>    
                            
            <div className="menu-mobile">
                        <input type="checkbox" name="checkbox-menu" id="checkbox-menu"/>
                        <label for="checkbox-menu" id="checkbox-menu-label">
                            <span className="menu-bars"></span>
                            <span className="menu-bars"></span>
                            <span className="menu-bars"></span>
                        </label>
                                <nav className="mobile-nav"> 
                                    <ul>
                                        <li><a href="#Introducing">Home</a></li>
                                        <li><a href="#About">About</a></li>
                                        <li><a href="#Portfolio">Portfolio</a></li>
                                        <li><a href="#Contact">Contact</a></li>
                                    </ul>
                                </nav>  
            </div>
        </header>
        <section className="language-swap">
            <p>Language:</p> <a href="/pt" className="button" id="btn-1-top"></a>
                             <a href="/" className="button" id="btn-en-top"></a>
        </section>
    
        <section id="Introducing">
    
            <img src="/images/foto.jpg"/>
    
            <h1>Pedro Bicalho</h1>
            <p>Full Stack Developer</p>
    
    
        </section>
        
        <section id="About"  >
            <div className="container" data-animate="left">
                <h2>About</h2>
    
                <p>
                    I had my first contact with programming in 2021, and since then I've been passionate about the area.
                </p>
                <p>
                    I started learning python and moved to web development and the reason for that is that for me, creating websites is a captivating and fun challenge.
                </p>
                <p>
                    I have knowledge in HTML, CSS, JavaScript, Python and frameworks such as Bootstrap, React.JS and Node.Js. Always looking for challenges to improve skills and expand knowledge.
                </p>
                <p>
                    I'm a Full-Stack Junior Developer with focus on bringing the best user experience and offering clean-code, facilitating the implementation of the backend. <br/>  I always seek to code by following best practices to provide clean and easy-to-understand code.
                </p>
                
            </div>
    
            <div className="flex-container" data-animate="up">
                <div>
                    <img src="/images/html.png" alt="html"/>
                    <p>HTML:5</p>
                </div>
                <div>
                    <img src="/images/css.png" alt="CSS"/>
                    <p>CSS:3</p>
                </div>
                <div>
                    <img src="/images/javascript.png" alt="JavaScript"/>
                    <p>JavaScript</p>
                </div>
                <div>
                    <img src="/images/bootstrap.png" alt="bootstrap"/>
                    <p>Bootstrap</p>
                </div>
                <div>
                    <img src="/images/node.png" alt="node"/>
                    <p>Node</p>
                </div>
                <div>
                    <img src="/images/react.png" alt="react"/>
                    <p>React</p>
                </div>
                <div>
                    <img src="/images/mongo.png" alt="mongo"/>
                    <p>Mongo.db</p>
                </div>
                <div>
                    <img src="/images/firebase.png" alt="firebase"/>
                    <p>Firebase</p>
                </div>
                <div>
                    <img src="/images/electron.png" alt="electron"/>
                    <p>Electron</p>
                </div>
                <div>
                    <img src="/images/jquery.png" alt="jquery"/>
                    <p>JQuery</p>
                </div>
            </div>
    
        </section>

        <section id="Services">
        <h2>Services</h2>
        <div className="flex-container wrap">
            <div className=" container" data-animate="left">
                <div className="card">
                    <img src="/images/seo.png" alt="Seo analitics"/>

                    <h3>SEO Optimization</h3>
                    <p>Make sure your site always appears at the top of Google searches! <br/>
                    I work with the optimization of positioning in search engines.</p>
                </div>
            </div>
            <div className=" container" data-animate="up">
                <div className="card">
                    <img src="/images/responsive.png" alt="notebook, tablet, phone"/>
                    
                    <h3>Responsive Designs</h3>
                    <p>Your site looks beautiful on all devices, more modern sites and that adapt to all screen sizes.</p>                </div>
            </div>
            <div className=" container" data-animate="right">
                <div className="card">
                    <img src="/images/clean-code.png" alt="clean-code"/>

                    <h3>Clean Code</h3>
                    <p> Building your site with a polished and easy-to-understand code,
                    always following the best practices of the market, and thus, enabling greater ease of maintenance and updating.</p>
                </div>
            </div>
        </div>
    </section>
    
    
        <section id="Portfolio">
    
            <h2>Portfolio</h2>
    
    
            <div  className="flex-container wrap" data-animate="left">
                <img src="/images/memory.png" alt="notebook and cellphone with a screenshot of memory-game page"/>
    
                <div className="text">
                    <h3>MEMORY GAME</h3>
                    <p>The second game I made with JavaScript.</p>
                    <p>This project was the one that gave me the most skills in the JavaScript language. I also learned how to create a 3D card animation using CSS. Which I will certainly apply in a future project</p>
                    
                    <a href="https://github.com/ph-bicalho/memory-game" target="_blank">See the Code</a>
                    <a href="https://ph-bicalho.github.io/memory-game/" className="button" target="_blank">See Page</a>
                </div>
            </div>
            
            <div className="flex-container reverse" data-animate="right">
                <div className="text">
                    <h3>TIC TAC TOE</h3>
                    <p>        
                        My first game made with html + css and js.
                        <br/>
                        In this project I was able to learn a lot about the logics of JavaScript, I put into practice much of my knowledge and got an even greater learning, 
                        from this project I improved my skill and understanding of how JavaScript programming works. <br/> 
                        I learned to declare events and make changes to page content through JavaScript.
                    </p>
                        <a href="https://github.com/ph-bicalho/jogoDaVelha" target="_blank">See the Code</a>
                        <a href="https://ph-bicalho.github.io/jogoDaVelha/" className="button" target="_blank">See Page</a>
                </div>
                <img src="/images/tic tac toe (1).png" alt="notebook and cellphone with a screenshot of tic-tac-toe page"/>
            </div>
            <div  className="flex-container wrap" data-animate="left">
                <img src="/images/spotpe.png" alt="notebook and cellphone with a screenshot of SpotPocketEdition page"/>
    
                <div className="text">
                    <h3>Spot PE</h3>
                    <p>SpotPocketEdition was a website I developed by myself with the objective of improving my knowledge of audio control via JavaScript.
                        <br/>
                        Since the default HTML-embedded audio control appears differently in each browser, I created my own command bar so that it looks the same in all browsers.
                        <br/>
                        In this project I used Figma for the first time to create all the icons, it was a great experience that certainly added a lot to my learning.
                    </p>
                        <a href="https://github.com/ph-bicalho/SpotPE.git" target="_blank">See the Code</a>
                        <a href="https://ph-bicalho.github.io/SpotPE/" className="button" target="_blank">See Page</a>
                </div>
            </div>
            
            <div  className="flex-container reverse" data-animate="right">
                <div className="text">
                    <h3>LinkList</h3>
                    <p>Website made for organizing personal links., Works like linktree.</p>
                      <p>Simple but very useful.</p>
                      <p> Made with HTML and CSS.</p>
                    <a href="#" target="_blank">See the Code</a>
                    <a href="#" className="button" target="_blank">See Page</a>
                </div>
    
                <img src="/images/LinkList.png" alt="notebook and cellphone with a screenshot of LinkList page"/>
                
            </div>
            
    
            <div>
                <div className= "flex-container" id="more">
                    <a href="https://github.com/ph-bicalho?tab=repositories" className="button" id="plus" data-animate="up">+</a>
                    <a href="https://github.com/ph-bicalho?tab=repositories" data-animate="right"> <h3>SEE MORE ON GITHUB {">"}  </h3> </a>
                </div>
            </div>
        </section>
    
        <section id="Contact" >
            
            <div className="flex-container" data-animate="left">
                <h2> Contact me </h2>
    
                <p>Fill the form bellow to contact me, it will be a pleasure to talk to you.</p>
    
    
    
    
        
            <form action="https://api.staticforms.xyz/submit" method="post">
                <input type="hidden" name="accessKey" value="d2cde324-177e-4176-929e-9579b68792f2"/>
    
                <label for="name">Name</label>
                <input type="text" name="name" placeholder ="Name" required />
    
                <label for="email">Email</label>
                <input type="email" name="email" placeholder="example@mail.com" required/>
                <input type="hidden" name="replyTo" value="@"/>
    
                <label for="text">Message</label>
                <textarea name="text" cols="30" rows="10" placeholder="Type here your message" required></textarea>
    
                <input type="hidden" name="redirectTo" value="index.html"/>
                <input type="submit" id="send-button" value="Submit"/>
            
            </form>
    
        </div>
        </section>
    
    
        <footer>
            <div>
                <ul>
                    <li><a href="/pt" className="button" id="btn-1"></a></li>
                
                    <li className="break"> <div > </div></li>
                    <li><a href="https://www.instagram.com/dev.phbicalho/" className="button" id="btn-2" ></a></li>
                    <li><a href="https://www.linkedin.com/in/ph-bicalho" className="button" id="btn-3" ></a></li>
                    <li className="break"></li>
                    <li className="text-small"><a href="mailto:dev.pedrobicalho@gmail.com">dev.pedrobicalho@gmail.com</a> <br/>
                        telegram: <a href="https://t.me/ph_bicalho" >ph_bicalho</a>
                    </li>
    
                </ul>
            </div>
    
            <div>
                <p className="text-small">07, february, 2022</p>
            </div>
    
        <div>        
           
            <p className="end">(CopyRights) : <img className="logo" src=" /images/logo.png" alt="Pedro Bicalho" /></p>
        </div>
            
            </footer>
    
        <script src="/script.js"></script>
    </div>        
        )  
}

export default Home 