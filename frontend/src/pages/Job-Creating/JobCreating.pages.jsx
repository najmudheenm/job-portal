import React, { useState } from "react";
import "./Job-creating.style.scss";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";
const { TextArea } = Input;

const JobCreating = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      size="large"
    >
      <Form.Item></Form.Item>
      <Form.Item label="Job Title">
        <Input />
      </Form.Item>
      <Form.Item label="Experience">
        <Select name="experience" onChange={(e) => console.log(e.target)}>
          <Select.Option value="0">0</Select.Option>
          <Select.Option value="1">1</Select.Option>
          <Select.Option value="2">2</Select.Option>
          <Select.Option value="3">3</Select.Option>
          <Select.Option value="4">4</Select.Option>
        </Select>
        <Select name="experience">
          <Select.Option value="1">1</Select.Option>
          <Select.Option value="2">2</Select.Option>
          <Select.Option value="3">3</Select.Option>
          <Select.Option value="4">4</Select.Option>
          <Select.Option value="5">5</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Short Discription">
        <TextArea maxLength={50} />' '
      </Form.Item>
      <Form.Item label="Discription">
        <TextArea />
      </Form.Item>
      <Form.Item label="InputNumber">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="Button">
        <Button>Button</Button>
      </Form.Item>
    </Form>
  );
};

export default JobCreating;
