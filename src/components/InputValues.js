import React from "react";
import { Row, Col, Card, Input, Button } from "antd";
import './InputValues.css'

const InputValues = ({ children, title }) => {
  return (
    <Row type="flex" justify="center">
      <Col span={12} >
        <Card className = "inputInformation">
            <Input placeholder="0000 0000 0000 0000"/>
            <Button type="primary" size={18}>
                Primary
            </Button>
        </Card>
 
      </Col>
    </Row>
  );
};

export default InputValues;
