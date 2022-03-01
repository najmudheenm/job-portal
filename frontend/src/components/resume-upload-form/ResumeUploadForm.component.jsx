import {useState} from "react";

//antd
import { Upload, message, Form, Input, Button } from "antd";
import { LoadingOutlined, PlusOutlined,FileDoneOutlined } from "@ant-design/icons";

//import components

const getBase64=(img, callback)=> {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
file.name="najmu"
  console.log(file.type);
  const fileType = ["application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document","image/jpeg"
  ];
  const fileTypeValid = fileType.includes(file.type);
  if (!fileTypeValid) {
    message.error("You can only upload pdf/doc/docx file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 5;
  if (!isLt2M) {
    message.error("Image must smaller than 5MB!");
  }
  return fileTypeValid && isLt2M;
}
const Avatar =(props)=> {

  
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

 const  handleChange = (info) => {
   console.log(info);
  getBase64(info.file.originFileObj, (imageUrl) =>{
    setLoading( false )
    setImageUrl(imageUrl)
  })
    if (info.file.status === "uploading") {
      setLoading( true );
      return;
    }
    if (info.file.status === "done") {
      // Get url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) =>{
        setLoading( false )
        setImageUrl(imageUrl)
      })
    }
  }
  

  
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>)
      const fileDoneButton = (
        <div>
        <FileDoneOutlined />
        <div style={{ marginTop: 8 }}>Done</div>
      </div>
      )
    return (<>
     <Upload
        name="uploadFile"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="http://www.csm-testcenter.org/test"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          fileDoneButton
        ) : (
          uploadButton
        )}
      </Upload>
      <Form>
        <Form.Item name='email' label='Email' rules={[
              {
                required:true,
                message: "Enter a valid email address!",
              },
              {type: "email"}
            ]} hasFeedback>
        
         
            <Input className="form-control" type="text" placeholder="Email" />
    
        </Form.Item>
        <Form.Item>
          <Button  type="primary" loading={loading} onClick={props.onClick} htmlType="submit">Apply</Button>
        </Form.Item>
      
      </Form>
       
      </>
    );
  }


export default Avatar;
