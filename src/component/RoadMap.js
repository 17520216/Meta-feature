import React from 'react'
import PropTypes from 'prop-types'
import asset from '@/plugins/assets/asset'
import Container from 'src/component/Container'

const RoadMap = props => {
    return (
        <section className="road-map">
            <Container>
                <h2 className="title">Road Map</h2>
                <div className="wrap">
                    <div className="map-stroke">
                        <img src={asset("/images/home/stroke_road.png")} alt="" />
                    </div>
                    <div className="item-map map1">
                        <div className="img">
                            <img src={asset("/images/home/map-2.png")} alt="" />
                        </div>
                        <p className="description">
                            Seed
                            Private Sales
                            KOLs Contract
                            Brand Contract
                            Whitepaper
                            Website
                            INO MetaVill
                        </p>
                    </div>
                    <div className="item-map map2">
                        <div className="img">
                            <img src={asset("/images/home/map-3.png")} alt="" />
                        </div>
                        <p className="description">
                            IDO METAF
                            Public sales
                            List DEX
                            INO orther
                            Event KOLs
                            Blink Box
                            Ticket
                        </p>
                    </div>
                    <div className="item-map map3">
                        <div className="img">
                            <img src={asset("/images/home/map-4.png")} alt="" />
                        </div>
                        <p className="description">
                            Staking Reward
                            LauchPad
                            Release Marketplace Ver1
                            Listing token MF
                            Burn METAF
                        </p>
                    </div>
                    <div className="item-map map4">
                        <div className="img">
                            <img src={asset("/images/home/map-5.png")} alt="" />
                        </div>
                        <p className="description">
                            Concert Metaverse
                            VR / AR
                            Metaverse Entertainment Central
                            Game Metaverse
                            Movie Metaverse
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

RoadMap.propTypes = {}

export default RoadMap