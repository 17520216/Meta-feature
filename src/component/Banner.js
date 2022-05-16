import asset from '@/plugins/assets/asset'
import React, { useRef } from 'react'
import Container from 'src/component/Container'

const Banner = () => {
    const proRef = useRef();
    return (
        <section className="banner">
            <Container>
                <div className="wrap">
                    <div className="text-banner">
                        <h2 className="title-main">META FUTURE GROUP (MFG)</h2>
                        <p className="text">Meta Future Group (MFG) focuses on creating and producing customized characters in the metaverse world to meet different user experiences across diverse means of entertainment media.</p>
                        <div className="btn-main">
                            <span>
                                GET TO KNOW US
                            </span>
                        </div>
                    </div>

                </div>
            </Container>
            <div className="img-banner" ref={proRef}>
                <img src={asset("/images/home/main-banner.png")} alt="" />
            </div>
        </section>
    )
}

export default Banner