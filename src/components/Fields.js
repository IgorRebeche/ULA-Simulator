import React from 'react';
import { Row, Col, Input, Typography } from "antd";

const Fields = () => {
    const { Text } = Typography;
    return (
        <React.Fragment>
        <Row type="flex" justify="center" gutter={8}>
            <Col>
                <Input addonAfter="R1" placeholder="0000" disabled/>
            </Col>
            <Col>
                <Input addonAfter="R2" placeholder="0000" disabled/>
            </Col>
            <Col>
                <Input addonAfter="Controle" placeholder="0000" disabled/>
            </Col>
        </Row>
        <br/>
        <Row type="flex" justify="center" gutter={8}>
            <Col>
                <Input addonAfter="Saida" placeholder="0000 0000" disabled/>
            </Col>
            <Col>
                <Input addonAfter="Flag" placeholder="0000" disabled/>
            </Col>
        </Row>
        </React.Fragment>
    )
}

export default Fields;