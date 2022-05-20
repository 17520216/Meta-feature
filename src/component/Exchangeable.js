import React from 'react'
import PropTypes from 'prop-types'
import Container from 'src/component/Container'
import asset from '@/plugins/assets/asset'

const Exchangeable = props => {
    return (
        <div className="exchangeable">
            <Container  className="content-exchangeable">
                <div className="wrap">
                    <div className="title">
                        Exchangeable NFTs
                    </div>
                    <div className="text">
                        The fun part is all the available NFTs can be transferable in return for either relevant items from the other field or lucrative, actual assets in real life, which truly differentiates METAF out from other similar entertainment platforms.
                    </div>
                    <div className="img-main">
                        <img src={asset("/images/home/exchange-nft.png")} alt="" />
                    </div>
                </div>
            </Container>

        </div>
    )
}

Exchangeable.propTypes = {}

export default Exchangeable