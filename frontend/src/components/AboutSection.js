import React from 'react'

import { About, Description, Image } from '../styles'



const AboutSection = () => {
    return (      
        <About>
            <Description>
            <h2>Josué Cordeiro</h2>
            <h2>Software Enginner</h2>

            <p>
                                    I'm a software engineer who is passionate about making code more accessible, creating technology to elevate people, and building community. Some technologies I enjoy working with include chatbots, the MERN (Mongo, Express, React and Node) stack and PHP. I am currently working on an awesome startup called Proposify.           
            </p>

            <button>Contact me</button>
            </Description>

            <Image>            
            <img src='https://www.engeplus.com.br/cache/noticia/0162/0162456/analista-de-sistemas-ou-banco-de-dados-conheca-as-profissoes-em-alta-no-mercado-de-tecnologia.jpg?t=20210602095406' />
            </Image>
        </About>       
    )
}


export default AboutSection