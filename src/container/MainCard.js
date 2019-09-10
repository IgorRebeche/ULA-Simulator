import React from "react";
import { Row, Col, Card } from "antd";

const MainCard = ({ children }) => {
  return (
    <Row type="flex" justify="center">
      <Col span={12} >
        <Card title="Card title" >
          Card content
        </Card>
 
      </Col>
    </Row>
  );
};

export default MainCard;
