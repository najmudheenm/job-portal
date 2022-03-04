import { useState } from "react";
import axios from 'axios'

//antd
import { Upload, message, Form, Input, Button,notification } from "antd";
import {
  LoadingOutlined,
  PlusOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";

//import components

function beforeUpload(file) {
  const fileType = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "image/jpeg",
  ];
  const fileTypeValid = fileType.includes(file.type);
  if (!fileTypeValid) {
    message.error("You can only upload pdf/doc/docx file!");
  }
  const isLt5M = file.size / 1024 / 1024 < 5;
  if (!isLt5M) {
    message.error("Image must smaller than 2MB!");
  }
  console.log(file.name);
  return fileTypeValid && isLt5M;
}
const Avatar = ({jobId,...props}) => {
  const [loading, setLoading] = useState(false);
  const [resume, setResume] = useState("");

  const handleChange = (info) => {

    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      // Get url from response in real world.
      setLoading(false);
      setResume(info.file.size + info.file.name);
    }
  };

  const handleFinish=async(e)=>{
    const data= {
      email:e.email,
      fileName:resume,
      jobId:jobId,
    }
    try{
      const response = await axios.post (`${process.env.REACT_APP_BASE_URL}applyjob`, {...data} ) 
      notification.open({
        message: 'success full',
       
      });
    }catch(err){
      notification.open({
        message: 'try again'
      });
    }
    
   
    
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const fileDoneButton = (
    <div>
      <FileDoneOutlined style={{ color: "green" }} />
      <div style={{ marginTop: 8 }}>Done</div>
    </div>
  );
  return (
    <>
      <Upload
        accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        name="uploadFile"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action={`${process.env.REACT_APP_BASE_URL}resume`}
        withCredentials
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {resume ? fileDoneButton : uploadButton}
      </Upload>
      <Form onFinish={handleFinish}>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Enter a valid email address!",
            },
            { type: "email" },
          ]}
          hasFeedback
        >
          <Input className="form-control" type="text" placeholder="Email" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            loading={loading}
            onClick={props.onClick}
            htmlType="submit"
          >
            Apply
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Avatar;
