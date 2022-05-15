import React from 'react'
import PropTypes from 'prop-types'
import Container from 'src/component/Container'
import asset from '@/plugins/assets/asset'

const Tokenomics = props => {
    return (
        <section className="tokenomics">
            <Container className="contain-token">
                <h2 className="title">TOKENOMICS</h2>
                <div className="wrap">
                    <div className="item left">
                        <p>Token</p>
                        <img srcSet={asset("/images/home/token-left.png 2x")} alt="" />
                    </div>
                    <div className="item right">
                        <p>Fund</p>
                        <img srcSet={asset("/images/home/token-right.png 2x")} alt="" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

Tokenomics.propTypes = {}

export default Tokenomics