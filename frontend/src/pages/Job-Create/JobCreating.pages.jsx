import React, { useState } from "react";
import "./JobCreating.style.scss";
import axios from "axios";
import { Form, Input, Button, Checkbox, InputNumber, Select } from "antd";
const { TextArea } = Input;

const JobCreating = () => {
  const [formState, setFormState] = useState({
    jobTitle: "",
    experience: "0-2",
    shortDescription: "",
    remote: false,
    onSite: false,
    hybrid: true,
  });
  const componentSize = "default";

  const formSubmitHandler = async (e) => {
    try {
      let response = await axios.post("http://localhost:5000/admin/addJob", {
        ...formState,
      });
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
        <Select
          onChange={(value) =>
            setFormState({ ...formState, experience: value })
          }
          value={formState.experience}
        >
          <Select.Option value="0-2">0-2</Select.Option>
          <Select.Option value="2-5">2-5</Select.Option>
          <Select.Option value="5-10">5-10</Select.Option>
          <Select.Option value="10+">10+</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Short Description">
        <TextArea
          name="shortDescription"
          value={formState.shortDescription}
          maxLength={100}
          onChange={onChangeHandler}
        />
      </Form.Item>

      <Form.Item label="Job Type">
        <Select
          onChange={(value) => setFormState({ ...formState, jobType: value })}
        >
          <Select.Option value="Full-time">Full-time</Select.Option>
          <Select.Option value="Part-time">Part-time</Select.Option>
          <Select.Option value="Inter">Intern</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Description">
        <TextArea onChange={onChangeHandler} name="description" />
      </Form.Item>
      <Form.Item label="Skill">
        <Input
          name="skills"
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
      <Form.Item label="Location">
        <Checkbox
          name="remote"
          onChange={(e) =>
            onChangeHandler({
              target: { name: e.target.name, value: e.target.checked },
            })
          }
        >
          remote
        </Checkbox>
        <Checkbox
          name="onSite"
          onChange={(e) =>
            onChangeHandler({
              target: { name: e.target.name, value: e.target.checked },
            })
          }
        >
          on-site
        </Checkbox>
        <Checkbox
          name="hybrid"
          onChange={(e) =>
            onChangeHandler({
              target: { name: e.target.name, value: e.target.checked },
            })
          }
        >
          hybrid
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">Create</Button>
      </Form.Item>
    </Form>
  );
};

export default JobCreating;
