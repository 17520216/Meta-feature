import React from 'react'
import PropTypes from 'prop-types'
import Container from 'src/component/Container'

const MetaFuture = props => {
    return (
        <section className="meta-future">
            <Container>
                <div className="wrap">
                    <h2 className="title">META FUTURE </h2>
                    <div className="block-layer">
                        <h3 className="name">Layer 1</h3>
                        <p className="content">DEFI & NFT PLATFORM</p>
                    </div>
                    <div className="block-child">
                        <div className="child">
                            <div className="item">MetaFilm (Film Fi)</div>
                            <div className="item">MetaVill</div>
                            <div className="item">MetaWallet</div>
                        </div>
                        <div className="child">
                            <div className="item">Meta Launchpad</div>
                            <div className="item">Creative Platform</div>
                        </div>
                    </div>
                    <div className="block-layer">
                        <h3 className="name">Layer 2</h3>
                        <p className="content">PROTOCOL VERIFY NFTS</p>
                    </div>
                    <div className="block-layer">
                        <h3 className="name">Layer 3</h3>
                        <p className="content">MARKETPLACE NFTS & MARKETING PLATFORM</p>
                    </div>
                </div>
            </Container>

        </section>
    )
}

MetaFuture.propTypes = {}

export default MetaFuture