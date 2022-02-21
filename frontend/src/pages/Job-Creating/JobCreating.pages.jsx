import React, { useState } from "react";
import "./Job-creating.style.scss";
import axios from "axios";
import {
  Form,
  Input,
  Button,
  Radio,
  Checkbox,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";
const { TextArea } = Input;

const JobCreating = () => {
  const [formState, setFormState] = useState({
    jobTitle: "",
    minExp: 0,
    maxExp: 1,
    shortDescription: "",
    jobType: {
      remote: false,
      onSite: false,
      hybrid: true,
    },
  });
  const componentSize = "default";

  const formSubmitHandler = async (e) => {
    try {
      const config = { heders: { "content-type": "application/json" } };
      let response = await axios.post(
        "http://localhost:5000/admin/addJob",
        {
          formState,
        },
        config
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  const onChangeHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
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
      onFinish={formSubmitHandler}
    >
      <Form.Item></Form.Item>
      <Form.Item label="Job Title" required>
        <Input name="jobTitle" onChange={onChangeHandler} />
      </Form.Item>
      <Form.Item label="Experience">
        <InputNumber
          name="minExp"
          value={formState.minExp}
          onChange={(e) =>
            onChangeHandler({ target: { name: "minExp", value: e } })
          }
          placeholder="min"
          max="5"
          min="0"
        />

        <InputNumber
          name="maxExp"
          onChange={(e) =>
            onChangeHandler({ target: { name: "maxExp", value: e } })
          }
          value={formState.maxExp}
          placeholder="max"
          min={formState.minExp + 1}
          max="25"
        />
      </Form.Item>

      <Form.Item label="Short Description">
        <TextArea
          name="shortDescription"
          value={formState.shortDescription}
          maxLength={50}
          onChange={onChangeHandler}
        />
        ' '
      </Form.Item>
      <Form.Item label="Description">
        <TextArea onChange={onChangeHandler} name="description" />
      </Form.Item>
      <Form.Item label="Skill">
        <Input
          name="Skill"
          placeholder="Required skill set"
          onChange={onChangeHandler}
        />
      </Form.Item>
      <Form.Item label="Education">
        <Input
          placeholder="Education"
          name="education"
          onChange={onChangeHandler}
        />
      </Form.Item>
      <Form.Item label="Job type">
        <Checkbox name="jobType.remote" onChange={onChangeHandler}>
          remote
        </Checkbox>
        <Checkbox name="jobType.onSite" onChange={onChangeHandler}>
          on-site
        </Checkbox>
        <Checkbox name="jobType.hybrid" onChange={onChangeHandler}>
          hybrid
        </Checkbox>
      </Form.Item>
      <Form.Item label="Button">
        <Button htmlType="submit">Button</Button>
      </Form.Item>
    </Form>
  );
};

export default JobCreating;
