import React from 'react'
import styled from 'styled-components'

// Import icons
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLaptopCode, faGraduationCap, faImages } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { About, Description, Image } from '../styles'

const ServiceSection = () => {
    return (
        <About>
            <Image>
                <img src='https://cdn-icons-png.flaticon.com/512/90/90603.png' />
            </Image>
            <Description>
            <h2>
                Things I <span>do</span>
            </h2>
            <Cards>
                <Card>
                <div className='icon'>
                    <FontAwesomeIcon icon={faLaptopCode} size='5x' />
                    <h3>Portfolio</h3>
                </div>
                <p>Check my work on my Portfolio.</p>
                </Card>
                <Card>
                <div className='icon'>
                    <FontAwesomeIcon icon={faGraduationCap} size='5x' />
                    <h3>Courses</h3>
                </div>
                <p>Courses at Udemy and other platforms (Portuguese only).</p>
                </Card>
                <Card>
                <div className='icon'>
                    <FontAwesomeIcon icon={faImages} size='5x' />
                    <h3>Hobbies</h3>
                </div>
                <p>Some photos and videos of my experience in Halifax, Canada.</p>
                </Card>
                <Card>
                <div className='icon'>
                    <FontAwesomeIcon icon={faGithubSquare} size='5x' />
                    <h3>My code</h3>
                </div>
                <p>Check my Github Portfolio.</p>
                </Card>
            </Cards>
        </Description>
        </About>
    )
}

const Services = styled(About)`
    h2 {
        padding-bottom: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px) {
        justify-content: center;
    }
`

const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;
        img{
        fill: blue;
        }
        h3 {
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
        }
    }
`


export default ServiceSection
