import React from "react";
import { Row, Col, Card } from "antd";

const MainCard = ({ children, title }) => {
  return (
    <Row type="flex" justify="center">
      <Col span={12} >
        <Card title={title} >
          {children}
        </Card>
 
      </Col>
    </Row>
  );
};

export default MainCard;
