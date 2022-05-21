import React from 'react';
import PropTypes from 'prop-types';
import Container from 'src/component/Container'
import BannerVideo from 'src/component/BannerVideo';


const MetaVill = props => {
    return (
        <div className="meta-vill">
            <Container className="content-meta">
                <div className="wrap">
                    <div className="left">
                        <h2 className="title">MetaVill</h2>
                        <p className="text">Metavill is a Social Entertainment Defi Platform. Users can easily generate NFTs then turn them into income by Shooting-to-earn feature.</p>
                        <div className="btn-meta">
                            <div className="div">Explore more</div>
                        </div>
                    </div>
                    <div className="right">
                        <BannerVideo />
                    </div>
                </div>
            </Container>
        </div>
    )
}

MetaVill.propTypes = {}

export default MetaVill