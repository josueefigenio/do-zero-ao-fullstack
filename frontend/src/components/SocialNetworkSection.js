import React from 'react'

import styled from 'styled-components'

import {faGithubSquare, faLinkedin, faYoutubeSquare, faTelegramPlane} from '@fortawesome/free-brands-svg-icons'
import {faGift, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialNetworkSection = () => {
    return (
        <Network>
            <Social href="http://github.com/josueefigenio" target='_blank'>
                <FontAwesomeIcon icon={faGithubSquare} size='4x' />
                <h3>github.com/josueefigenio</h3>
            </Social>
            <Social href="http://linkedin.com" target='_blank'>
                <FontAwesomeIcon icon={faLinkedin} size='4x' />
                <h3>LinkedIn</h3>
            </Social>
            <Social href="http://youtube.com" target='_blank'>
                <FontAwesomeIcon icon={faYoutubeSquare} size='4x' />
                <h3>Youtube</h3>
            </Social>
            <Social href="http://udemy.com.br" target='_blank'>
                <FontAwesomeIcon icon={faGraduationCap} size='4x' />
                <h3>Udemy</h3>
            </Social>
            <Social href="http://www.telegram.com" target='_blank'>
                <FontAwesomeIcon icon={faTelegramPlane} size='4x' />
                <h3>Telegram</h3>
            </Social>
        </Network>
    )
}

const Network = styled.div`
padding: 1rem 5rem
`
;

const Social = styled.a`
display : flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
border-radius: 15px 50px;
padding-left: 2rem;
text-decoration: none;
&:hover{
    background: yellow;
    cursor: pointer;
}
h3{
    color:grey;
    margin: 2rem;
}
color : inherit;
` 
;

export default SocialNetworkSection
