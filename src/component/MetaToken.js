import React from 'react'
import PropTypes from 'prop-types'
import Container from 'src/component/Container'
import asset from '@/plugins/assets/asset'

const MetaToken = props => {
    return (
        <section className="meta-token">
            <Container>
                <h2 className="title">METAF TOKEN</h2>
                <div className="wrap">
                    <div className="coin">
                        <img src={asset("/images/home/meta-token.png")} alt="" />
                    </div>
                    <div className="sub --item1">
                        <h3>Diverse Utility</h3>
                        <p className="text">
                            Its utility in this cultural
                            universe is fertile, such as
                            for storage, investment,
                            payment, auction.
                        </p>
                    </div>
                    <div className="sub --item2">
                        <h3>Character Development </h3>
                        <p className="text">
                            METAF allows initializing
                            and managing the
                            journey of developing a
                            preferred character
                            inside the Metaverse.
                        </p>
                    </div>
                    <div className="sub --item3">
                        <h3>Interconnection </h3>
                        <p className="text">
                            METAF is generated in activities involving
                            creativity, investment, commerce,
                            which has a tight correlation between
                            activities of Meta Future Group (MFG)
                            and its ecosystem.
                        </p>
                    </div>
                    <div className="sub --item4">
                        <h3>Sustainability</h3>
                        <p className="text">
                            METAF is built on Blockchain
                            technology, which is impossibly
                            fragmented, duplicated, broken,
                            and has sustainable growth value.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

MetaToken.propTypes = {}

export default MetaToken