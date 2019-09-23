import React from "react";
import { Row, Col, Input, Typography, Card } from "antd";
import NumberCard from "./NumberCard";

const UlaFields = ({ R1, R2, Output, Flag, Operando }) => {
  const { Text } = Typography;
  return (
    <React.Fragment>
      <Row type="flex" justify="center" gutter={8}>
        {
          <Col span={24}>
            <Card bordered={true} style={{ fontSize: "19px" }}>
              <strong>{R1}</strong> {Operando} <strong>{R2}</strong> ={" "}
              <strong>{Output}</strong>
            </Card>
          </Col>
        }

        <Col md={{ span: 24}}  lg={{ span: 6}}>
          <NumberCard
            title="R1"
            base10Number={parseInt(R1, 2).toString(10)}
            base2Number={R1}
          />
        </Col>
        <Col md={{ span: 24}} lg={{ span: 6}}>
          <NumberCard
            title="R2"
            base10Number={parseInt(R2, 2).toString(10)}
            base2Number={R2}
          />
        </Col>
        <Col md={{ span: 24}} lg={{ span: 6}}>
          <NumberCard
            title="Acc"
            base10Number={parseInt(Output, 2).toString(10)}
            base2Number={Output}
          />
        </Col>
        <Col md={{ span: 24}} lg={{ span: 6}}>
          <NumberCard
            title="Flag"
            base10Number={parseInt(Flag, 2).toString(10)}
            base2Number={Flag}
          />
        </Col>
      </Row>
      <br />
      <Row type="flex" justify="center" gutter={8}></Row>
    </React.Fragment>
  );
};

export default UlaFields;
