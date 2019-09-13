import React from 'react';
import { Row, Col, Input, Typography } from "antd";

const Fields = () => {
    const { Text } = Typography;
    return (
        <Row type="flex" justify="center" gutter={8}>
            <Col>
                <Text level={1}>R1</Text>
                <Input placeholder="0000" />
            </Col>
            <Col>
                <Text level={1}>R2</Text>
                <Input placeholder="0000" />
            </Col>
        </Row>
    )
}

export default Fields;