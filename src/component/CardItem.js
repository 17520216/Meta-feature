import React from 'react'
import PropTypes from 'prop-types'
import asset from '@/plugins/assets/asset'

const CardItem = ({ name = "CHARILIE NGUYEN", title = "Founder", des = "Experienced Vietnamese-American film director, TVC director, stage director, screenwriter, comedian and film producer", img = "/images/home/CHARILIE.png" }) => {
    return (
        <div className="card-item">
            <div className="image">
                <img src={asset(img)} alt="" />
            </div>
            <h3 className="card-name">{name}</h3>
            <h4 className="card-title">{title}</h4>
            <p className="text">{des}</p>
        </div>
    )
}

CardItem.propTypes = {}

export default CardItem