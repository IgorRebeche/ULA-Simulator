import React, {useState} from "react";
import { Row, Col, Card, Input, Button } from "antd";
import MaskedInput from 'antd-mask-input'
import "./InputValues.css";

const _onChange = (e, setInput) => {
  
  console.log(e.target.name, e.target.value);
  setInput(e.target.value);
}

const InputValues = ({ children, title, onClick }) => {
  const [input, setInput] = useState(0);

  return (
    <Row type="flex" justify="center">
      <Col>
        <Card className="inputInformation">
          <Row type="flex" justify="center" gutter={8}>
            <Col>
              <MaskedInput mask="1111 1111 1111" name="card" size="20" onChange= {(e) => _onChange(e, setInput)}/>
            </Col>
            <Col>
              <Button type="primary" onClick={() => onClick(input)} size={18}>
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
