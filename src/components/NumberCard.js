import React from 'react';
import { Card } from 'antd';
import './NumberCard.css';
const NumberCard = ({base10Number, base2Number, title}) => {
    return (
        <Card bordered={true} style={{fontSize: "19px"}}>
            <h4>{title}</h4>

                <div className="baseValue">
                    <span className="outputValue">{base2Number}</span>
                    <span className="outputLabelValue">Base 2</span> 
                </div>
                <div className="baseValue">
                    <span className="outputValue">{base10Number}</span>
                    <span className="outputLabelValue">Base 10</span> 
                </div>
        </Card>
    );
};

export default NumberCard;