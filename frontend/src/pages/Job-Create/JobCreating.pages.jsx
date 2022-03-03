  import React, { useState } from "react";
  import "./JobCreating.style.scss";
  import axios from "axios";
  import { Form, Input, Button, Checkbox, Select, DatePicker,message,Alert } from "antd";
  const { TextArea } = Input;

  const JobCreating = () => {
    const [formState, setFormState] = useState({
      jobTitle:"",
      description: "",
      skillExp: "",
      remote: false,
      onSite: false,
      hybrid: false,
    });
    const [form]=Form.useForm()
    const [descript, setDescript] = useState("");
    const [skillExp, setSkillExp] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const formSubmitHandler = async (e) => {
      const remote =formState.hybrid ? "Hybrid":formState.remote? "remote":"";
      
      const location=e.workLocation || remote
      const date=new  Date
      const jobPost={
        jobTitle:e.jobTitle,
        postedDate:`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
        workLocation:location,
        expire:formState.expire,
        salary:e.salary,
        type:e.jobType,
        shortDescription:e.shortDescription,
        category:e.category,
        experience:e.experience,
        skill:e.skill,
        jobDescription:[...descript,formState.description !="\n" ? formState.description :""],
        skillExp:[...skillExp,formState.skillExp !="\n" ? formState.skillExp :""]

      }
      
      setIsLoading(true);
      try {
        let response = await axios.post(
          `${process.env.REACT_APP_JOB_CREATE_URL}`,
          {
            ...jobPost
          },
          { withCredentials:true}
        );
        console.log(response);
        if (response.status==201) {
        
          setFormState({
            jobTitle: "",
            experience: "0-2",
            description: "",
            skillExp: "",
            remote: false,
            onSite: false,
            hybrid: true,
          });
          form.resetFields()  
          setIsLoading(false);
        }
        else if(response.status!=201){
          throw new Error(message="something Error try again")
        }
      } catch (err) {
        console.log("hi");
        message.error(err.message ||"Something error try again")
        setIsLoading(false);
      }
    };
    const onKeypressHandler = (e) => {
      if (e.key=="Enter") {
    
          if (e.target.name === "description") {
            setDescript((state) => [e.target.value, ...state]);
            setFormState((state) => ({ ...state, description: "" }));
            
          } else if (e.target.name === "skillExp") {
            setSkillExp((state) => [e.target.value, ...state]);
            setFormState((state) => ({ ...state, skillExp: "" }));
          }
        }
      
    };

    const onChangeHandler = (e) => {
      console.log(formState);
      setFormState({ ...formState, [e.target.name]: e.target.value });
    };
    const expireChangeHandler = (date, dateSting) => {
      console.log(date, dateSting);
    };
    const buttonItemLayout = {
      wrapperCol: {
        span: 12,
        offset: 4,
      },
    };

    return (
      <Form
      form={form}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 12,
        }}
        layout="horizontal"
        size="large"
        onFinish={formSubmitHandler}
        resetFields
      >
        <Form.Item></Form.Item>

        <Form.Item
          label="Job Title"
        name="jobTitle"
        
          rules={[
            {
              required: true,
              message: "Enter Job Title",
            },
            { min: 4 },
          
          ]}
          hasFeedback
        
        >
          <Input />
        </Form.Item>
        <Form.Item label="Experience" name="experience">
          <Select name="experience">
            <Select.Option value="0-2">0-2</Select.Option>
            <Select.Option value="2-5">2-5</Select.Option>
            <Select.Option value="5-10">5-10</Select.Option>
            <Select.Option value="10+">10+</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="expire"  label="expire">
          <DatePicker picker="date" onChange={(e,date)=> setFormState((state)=>({...state,expire:date}))} placeholder="Chose a date to expire" />
        </Form.Item>
        <Form.Item label="Salary" name="salary">
          <Select
            name="salary"
            onChange={(value) => setFormState({ ...formState, salary: value })}
            salary={formState.experience}
          >
            <Select.Option value="Not reveeled">Not reveeled</Select.Option>
            <Select.Option value="10000-20000">10000-20000</Select.Option>
            <Select.Option value="20000-30000">20000-30000</Select.Option>
            <Select.Option value="30000-50000">30000-50000</Select.Option>
            <Select.Option value="50000+">50000+</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Short Description" name ="shortDescription">
          <TextArea name="shortDescription"minLength={50} maxLength={200} />
        </Form.Item>

        <Form.Item label="Job Type" name="jobType">
          <Select>
            <Select.Option value="Full-time">Full-time</Select.Option>
            <Select.Option value="Part-time">Part-time</Select.Option>
            <Select.Option value="Inter">Intern</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Job Category" name="category">
          <Select>
            <Select.Option value="Web Developer">Web Developer</Select.Option>
            <Select.Option value="Mobile Developer">Mobile Developer</Select.Option>
            <Select.Option value="Account">Account</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Job Description" >
          <TextArea
            value={formState.description}
            onChange={onChangeHandler}
            onKeyPress={onKeypressHandler}
            name="description"
          />
        </Form.Item>
        {descript && (
          <Form.Item label="Job Description">
            <ul>
              {descript.length &&
                descript.map((data, ind) => <li key={ind}>{data}</li>)}
            </ul>
          </Form.Item>
        )}

        <Form.Item label="Skills and Experience">
          <TextArea
            value={formState.skillExp}
            onChange={onChangeHandler}
            onKeyPress={onKeypressHandler}
            name="skillExp"
          />
        </Form.Item>
        {skillExp && (
          <Form.Item label="Skill and Exprience">
            <ul>
              {skillExp.length &&
                skillExp.map((data, ind) => <li key={ind}>{data}</li>)}
            </ul>
          </Form.Item>
        )}
        <Form.Item label="Skill" name="skill">
          <Input placeholder="Required skill set" />
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
        {formState.onSite && (
          <Form.Item label="Work Place" name="workLocation">
            <Select
              name="workLocation"
              onChange={(value) => setFormState({ ...formState, jobType: value })}
            >
              <Select.Option value="place">place 1</Select.Option>
              <Select.Option value="palce 2">place 2</Select.Option>
              <Select.Option value="....">.....</Select.Option>
            </Select>
          </Form.Item>
        )}
        <Form.Item {...buttonItemLayout}>
          <Button loading={isLoading} type="primary" block htmlType="submit">
            create
          </Button>
        </Form.Item>
      </Form>
    );
  };

  export default JobCreating;
