import React from 'react'
import Container from 'src/component/Container'

const Banner = () => {
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
            <div className="img-banner">

            </div>
        </section>
    )
}

export default Banner