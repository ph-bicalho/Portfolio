import Head from "next/head"
function Pt(){
    return(
        <>
         <Head> <title>Portfólio - Pedro Bicalho - Desenvolvedor Web</title>
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta name="description" content="Portfólio de Desenvolvedor Full-Stack, Pedro Bicalho" />
        </Head>

        <header>
           <img src="/images/logo.png" id="logo"/>
    
            <div className="menu-desktop">
                <nav>
                    <ul>
                        <li><a href="#About">Sobre</a></li>
                        <li><a href="#Portfolio">Portfólio</a></li>
                        <li><a href="#Contact">Contato</a></li>
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
                                        <li><a href="#Introducing">Início</a></li>
                                        <li><a href="#About">Sobre</a></li>
                                        <li><a href="#Portfolio">Portfólio</a></li>
                                        <li><a href="#Contact">Contato</a></li>
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
            <p>Desenvolvedor Full Stack</p>
    
    
        </section>
        
        <section id="About"  >
            <div className="container" data-animate="left">
                <h2>Sobre</h2>
    
                <p>
                Tive meu primeiro contato com a programação em 2021, desde então eu estive apaixonado com a área.
                </p>
                <p>
                    Comecei a programar aprendendo Python, mas depois migrei para o desenvolvimento web. O motivo foi que pra mim, criar websites é um desafio cativante e divertido.
                </p>
                <p>
                Tenho conhecimento em linguagens como: HTML, CSS, JavaScript, Python e utilizo frameworks como: Bootstrap, React.JS and Node.Js. Sempre estou buscando por desafios para aumentar minhas habilidades e  expandir meu conhecimento.
                </p>
                <p>
                    Sou um Desenvolvedor Full-Stack Junior com foco em trazer uma melhor experiência ao usuário e sempre busco entregar um código limpo, facilitando a implementação do backend. <br/>  Faço sempre questão de trabalhar com as melhores práticas de programação para garantir um código de fácil interpretação.
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
        <h2>Diferenciais</h2>
        <div className="flex-container wrap">
            <div className=" container" data-animate="left">
                <div className="card">
                    <img src="/images/seo.png" alt="Seo analitics"/>

                    <h3>Otimização de SEO</h3>
                    <p>Garanta que seu site sempre apareça no topo das pesquisas do Google! <br/>
                    Trabalho com a otimização do posicionamento em mecanismos de busca.</p>
                </div>
            </div>
            <div className=" container" data-animate="up">
                <div className="card">
                    <img src="/images/responsive.png" alt="notebook, tablet, phone"/>
                    
                    <h3>Design Responsivo</h3>
                    <p>Seu site fica lindo em todos os dispositivos, sites mais modernos e que se adaptam a todos os tamanhos de telas.</p>
                </div>
            </div>
            <div className=" container" data-animate="right">
                <div className="card">
                    <img src="/images/clean-code.png" alt="clean-code"/>

                    <h3>Código limpo</h3>
                    <p> A construção do seu site com um código polido e de fácil compreensão,
                    seguindo sempre as melhores práticas do mercado, e assim, possibilitando maior facilidade de manutenção e atualização.</p>
                </div>
            </div>
        </div>
    </section>
    
    
        <section id="Portfolio">
    
            <h2>Portfólio</h2>
    
    
            <div  className="flex-container wrap" data-animate="left">
                <img src="/images/memory.png" alt="notebook and cellphone with a screenshot of memory-game page"/>
    
                <div className="text">
                <h3>JOGO DA MEMÓRIA</h3>
                <p>O segundo jogo que fiz em JavaScript.</p>
                <p>Esse projeto foi o que mais me permitiu elevar minhas habilidades na linguagem JavaScript, alem disso, aprendi a criar uma animação de carta 3D utilizando CSS. O que concerteza vou aplicar em um futuro projeto.</p>
                
                <a href="https://github.com/ph-bicalho/memory-game" target="_blank">Ver o código</a>
                <a href="https://ph-bicalho.github.io/memory-game/" className="button" target="_blank">Ver Site</a>
                </div>
            </div>
            
            <div className="flex-container reverse" data-animate="right">
                <div className="text">
                    <h3>JOGO DA VELHA</h3>
         
                    <p>
                    Meu primeiro jogo feito com HTML, CSS E JavaScript.
                    <br/>
                    Nesse projeto pude aprender bastante sobre as logicas do JavaScript, coloquei em prática grande parte do meu conhecimento e obtive um aprendizado ainda maior, a partir desse projeto aperfeiçoei minha habilidade e entendimento do funcionamento da programação em JavaScript. Aprendi a declarar eventos e fazer alterações no conteúdo da página atravéz do JavaScript.</p>

                    <a href="https://github.com/ph-bicalho/jogoDaVelha" target="_blank">Ver o código</a>
                    <a href="https://ph-bicalho.github.io/jogoDaVelha/" className="button" target="_blank">Ver Site</a>
                </div>
                <img src="/images/tic tac toe (1).png" alt="notebook and cellphone with a screenshot of tic-tac-toe page"/>
            </div>
            <div  className="flex-container wrap" data-animate="left">
                <img src="/images/spotpe.png" alt="notebook and cellphone with a screenshot of SpotPocketEdition page"/>
    
                <div className="text">
                    <h3>Spot PE</h3>
                    <p>SpotPocketEdition foi um site que desenvolvi sozinho com o objetivo de aprimorar meu conhecimento no controle de audio via JavaScript. 
                    <br/>
                    Tendo em vista que o controle padrão do audio inserido em HTML aparece de forma diferente em cada navegador, criei minha própria barra de comandos para que se mantenha a mesma aparencia em todos os navegadores.
                    <br/>
                    Nesse projeto utilizei pela primeira vez o Figma para criação de todos os ícones, foi uma gande experiencia que com certeza agregou muito no meu aprendizado.</p>

                    <a href="https://github.com/ph-bicalho/SpotPE.git"target="_blank" >Ver o código</a>
                    <a href="https://ph-bicalho.github.io/SpotPE/" className="button"target="_blank" >Ver Site</a>
                </div>
            </div>
            
            <div  className="flex-container reverse" data-animate="right">
                <div className="text">
                    <h3>LinkList</h3>
                    <p>Website feito para organização de links pessoais. funciona como o linktree.</p>
                  <p>Simples mas muito útil.</p>
                  <p> Feito com HTML e CSS.</p>
                <a href="#"target="_blank">Ver o código</a>
                <a href="#" className="button"target="_blank">Ver Site</a>
                </div>
    
                <img src="/images/LinkList.png" alt="notebook and cellphone with a screenshot of LinkList page"/>
                
            </div>
            
    
            <div>
                <div className= "flex-container" id="more">
                    <a href="https://github.com/ph-bicalho?tab=repositories" className="button" id="plus" data-animate="up">+</a>
                    <a href="https://github.com/ph-bicalho?tab=repositories" data-animate="right"> <h3>VEJA MAIS NO GITHUB {">"} </h3> </a>
                </div>
            </div>
        </section>
    
        <section id="Contact" >
            
            <div className="flex-container" data-animate="left">
            <h2> Me mande uma mensagem </h2>

<p>Preencha o formulário abaixo para me enviar uma mensagem, será um prazer conversar com você!</p>
    
    
    
    
        
            <form action="https://api.staticforms.xyz/submit" method="post">
                <input type="hidden" name="accessKey" value="5026b6a1-97ab-4dde-96f8-980fa53ad529"/>
    
                <label for="name">Nome</label>
                <input type="text" name="name" placeholder = "Nome" required/>
    
                <label for="email">Email</label>
                <input type="email" name="email" placeholder="exemplo@mail.com" required/>
                <input type="hidden" name="replyTo" value="@"/>
    
                <label for="text">Mensagem</label>
                <textarea name="text" cols="30" rows="10" placeholder="Escreva aqui a sua mensagem" required></textarea>
    
                <input type="hidden" name="redirectTo" value="https://phbicalho.com/pt"/>
                <input type="submit" id="send-button" value="Enviar"/>
            
            </form>
    
        </div>
        </section>
    
    
        <footer>
        <div>
            <ul>
                <li><a href="/" className="button" id="btn-En"></a></li>
            
                <li className="break"> <div > </div></li>
                <li><a href="https://www.instagram.com/dev.phbicalho/" target="_blank" className="button" id="btn-2" ></a></li>
                <li><a href="https://www.linkedin.com/in/ph-bicalho" target="_blank" className="button" id="btn-3" ></a></li>
                <li className="break"></li>
                <li className="text-small"><a href="mailto:dev.pedrobicalho@gmail.com" target="_blank">dev.pedrobicalho@gmail.com</a> <br/>
                    telegram: <a href="https://t.me/ph_bicalho" target="_blank" >ph_bicalho</a>
                </li>

            </ul>
        </div>

        <div>
            <p className="text-small">07 de Fevereiro de 2022</p>
        </div>

    <div>        
       
        <p className="end">(CopyRights) : <img  src="/images/logo.png" alt="Pedro Bicalho" className="logo" /></p>
    </div>
        
        </footer>
    
        <script src="/script.js"></script>
    </> 
    )
    }

    export default Pt