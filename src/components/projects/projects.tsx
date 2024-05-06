import { BiLinkExternal } from "react-icons/bi";
import { Portifolio, PortifolioBox, PortifolioLayer } from "./style";
import Formulario from '../../assets/formulario.gif';
import Pokedex from '../../assets/pokedex.gif';
import Streaming from '../../assets/streaming.gif';
import MiniPortifolio from '../../assets/mini-portifolio.gif';
import FinderGithub from '../../assets/finder-github.gif';
import Climate from '../../assets/climate.gif';
import Advice from '../../assets/advice.gif';
import DinamicP from '../../assets/dinamic-pokedex.gif';
import Store from '../../assets/store.gif';
import ScrollReveal from "scrollreveal";


export const Projects = () => {

    ScrollReveal({
        duration: 1500,
        delay: 200,
        distance: "50px"
    });

        ScrollReveal().reveal(".portifolio-container",{origin: 'left'})

    return (
        <Portifolio id="projects">
            <h2 className="heading">Latest <span>project</span></h2>

            <div  
       
           className="portifolio-container">

                <PortifolioBox >
                    <img src={Streaming} alt="Platform Streaming" />

                    <PortifolioLayer className="portifolio-layer" >
                    <h4>Streaming platform</h4>
                    <p>Tecnlogias usadas: TypeScript, React, React-router, Node, Express, MongoDB, Styled-components </p>

                <a href="https://streaming-interface.vercel.app/ " target="_blank"><BiLinkExternal/></a>
                    </PortifolioLayer>            
                </PortifolioBox>

   
                <PortifolioBox >
                <img src={Store} alt="Store Ecommerce" />
                
                <PortifolioLayer className="portifolio-layer">
                <h4>Store ecommerce</h4>
                    <p>Tecnlogias usadas: TypeScript, React, React-router, Node, Express, MongoDB, Styled-components</p>

                <a href="https://store-interface.vercel.app/" target="_blank"><BiLinkExternal/></a>
                    </PortifolioLayer>
                </PortifolioBox>

                <PortifolioBox >           <img src={DinamicP} alt="Dinamic pokedex" />
                  
                  <PortifolioLayer className="portifolio-layer" >
                      <h4>Dinamic Pokedex</h4>
                      <p>Tecnologias usadas :  React , React-router , Context-api ,
                        Redux , Styled-components</p>
  
                  <a href="https://create-your-pokedex.vercel.app/" target="_blank"><BiLinkExternal/></a>
                      </PortifolioLayer>
                  </PortifolioBox>


                <PortifolioBox >
                    <img src={Pokedex} alt="Projeto Pokedéx" />

                    <PortifolioLayer className="portifolio-layer" >
                    <h4>Pokedéx</h4>
                    <p> Tecnologias usadas :  React , React-router , Context-api , Styled-components </p>

                <a href="https://pokedex-swart-delta.vercel.app/" target="_blank"><BiLinkExternal/></a>
                    </PortifolioLayer>
                </PortifolioBox>





                <PortifolioBox >
                <img src={MiniPortifolio} alt="Mini portifólio" />
                  
                <PortifolioLayer className="portifolio-layer" >
                    <h4>Mini portifólio</h4>
                    <p>Tecnologias usadas :  JavaScript , HTML , CSS </p>

                <a href="https://mini-portifolio-mu.vercel.app/" target="_blank"><BiLinkExternal/></a>
                    </PortifolioLayer>
                </PortifolioBox>

                
                <PortifolioBox >
                <img src={FinderGithub} alt="Finder github" />
                  
                <PortifolioLayer className="portifolio-layer" >
                    <h4>Finder github</h4>
                    <p>Tecnologias usadas :  React , React-router , TypeScript </p>

                <a href="https://github-finder-sigma-ten.vercel.app/" target="_blank"><BiLinkExternal/></a>
                    </PortifolioLayer>
                </PortifolioBox>

                <PortifolioBox >
                <img src={Climate} alt="Weather app" />
                  
                <PortifolioLayer className="portifolio-layer" >
                    <h4>Weather app</h4>
                    <p>Tecnologias usadas :  JavaScript , HTML CSS </p>

                <a href="https://weather-app-hazel-pi-45.vercel.app/" target="_blank"><BiLinkExternal/></a>
                    </PortifolioLayer>
                </PortifolioBox>

                <PortifolioBox >
                <img src={Advice} alt="Advice app" />
                  
                <PortifolioLayer className="portifolio-layer" >
                    <h4>Advice generator</h4>
                    <p>Tecnologias usadas : JavaScript , HTML , CSS </p>

                <a href="https://advice-generator-app-two-xi.vercel.app/" target="_blank"><BiLinkExternal/></a>
                    </PortifolioLayer>
                </PortifolioBox>

                <PortifolioBox >           <img src={Formulario} alt="Formulário com validação" />
                  
                <PortifolioLayer className="portifolio-layer" >
                    <h4>Formulário com validação</h4>
                    <p>Tecnologias usadas :  JavaScript , HTML CSS </p>

                <a href="https://formulario-com-validacao-five.vercel.app/" target="_blank"><BiLinkExternal/></a>
                    </PortifolioLayer>
                </PortifolioBox>
                

            </div>

        </Portifolio>
    )
}