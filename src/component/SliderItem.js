import React from 'react'
import PropTypes from 'prop-types'
import asset from '@/plugins/assets/asset'

const SliderItem = ({ title, des, img, isSmall = "" }) => {
    return (
        <>
            <div className="slider-item">
                <div className="top">
                    <h2 className="title">
                        {title}
                    </h2>
                </div>
                <p className="des">{des}</p>
                <div className={`images ${isSmall}`}>
                    <img srcSet={asset(img)} alt="" />
                </div>
            </div>

        </>
    )
}

SliderItem.propTypes = {}

export default SliderItem