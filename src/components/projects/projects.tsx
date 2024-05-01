import { BiLinkExternal } from "react-icons/bi";
import { Portifolio, PortifolioBox, PortifolioLayer } from "./style";
import Code from '../../assets/code.webp';
import Pokedex from '../../assets/pokedex.gif';
import Streaming from '../../assets/streaming.gif';
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
                    <img src={Pokedex} alt="Projeto Pokedéx" />

                    <PortifolioLayer className="portifolio-layer" >
                    <h4>Pokedéx</h4>
                    <p> Tecnologias usadas :  React , React-router , Context-api , Styled-components </p>

                <a href="https://pokedex-swart-delta.vercel.app/" target="_blank"><BiLinkExternal/></a>
                    </PortifolioLayer>
                </PortifolioBox>


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



                <PortifolioBox >
                <img src={Code} alt="" />
                  
                <PortifolioLayer className="portifolio-layer" >
                    <h4>web Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorem minima assumenda blanditiis veniam. Quos eaque unde, </p>

                <a href="#" target="_blank"><BiLinkExternal/></a>
                    </PortifolioLayer>
                </PortifolioBox>
                

            </div>

        </Portifolio>
    )
}