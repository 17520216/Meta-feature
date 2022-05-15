import React from 'react'
import PropTypes from 'prop-types'
import Container from 'src/component/Container'
import CardItem from 'src/component/CardItem'

const Advisor = props => {
    return (
        <section className="advisor">
            <h2 className="title">ADVISOR</h2>
            <Container>
                <div className="wrap">
                    <CardItem name="DAO TIEN PHONG" title="Lawyer Advisor" des="Lawyer advisor with 18 years of experience in many fields, especially in the field of technology and blockchain. Some projects participated: Amanotes, HeroesTD, Hanagold, Livetrade, Realbox, Calo Metaverse..." img="/images/home/ad-1.png" />
                    <CardItem name="BARRY DO" title="Fintech advisor" des="With 10+ years experience in building and launching products while at Hong Leong Bank as Head of Digital Banking, Digital Transformation Head at Dat Viet Vac, and Chief Sales and Marketing Officer at Timo Digital Bank." img="/images/home/ad-2.png" />
                </div>
            </Container>
        </section>
    )
}

Advisor.propTypes = {}

export default Advisor