import React from "react";
import { Row, Col, Card, Input, Button } from "antd";
import "./InputValues.css";

const InputValues = ({ children, title }) => {
  return (
    <Row type="flex" justify="center">
      <Col>
        <Card className="inputInformation">
          <Row type="flex" justify="center" gutter={8}>
            <Col>
              <Input placeholder="0000 0000 0000" />
            </Col>
            <Col>
              <Button type="primary" size={18}>
                Calcular
              </Button>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default InputValues;
