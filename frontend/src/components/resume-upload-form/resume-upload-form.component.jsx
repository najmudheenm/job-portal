import "./resume-upload-form.style.scss";
import { useState } from "react";

//components
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../Form-input/Form-input";

const ResumeUploadform = () => {
  const [formState, setFormState] = useState({
    email: "",
    file: "",
    fileErr: "",
    emailErr: "",
  });
  const onSubmitHandler = (e) => {
    e.preventDefault();
    //
  };

  //form validation
  const inputChangeHandler = (e) => {
    let response;
    switch (e.target.name) {
      case "file": {
        const fileType = ["pdf", "doc", "docx"];
        response = fileValidation(e.target.files, fileType, formState);
        break;
      }
      case "email": {
        response = emailValidation(e.target.value, formState);
        break;
      }
      default:
    }
    setFormState(response);
  };
  return (
    <form className="resume-upload-form" onSubmit={onSubmitHandler}>
      <div className="email-container">
        {formState.emailErr.length ? (
          <span className="err-message">{formState.emailErr}</span>
        ) : (
          ""
        )}

        <FormInput
          type="email"
          name="email"
          label="email"
          value={formState.email}
          onBlur={inputChangeHandler}
        />
      </div>
      <div className="file-container">
        {formState.fileErr.length ? (
          <span className="err-message">{formState.fileErr}</span>
        ) : (
          ""
        )}
        <FormInput
          type="file"
          name="file"
          label="file upload"
          className="file-uploader"
          value={formState.file}
          onChange={inputChangeHandler}
        />
      </div>
      <div className="submit">
        <CustomButton type="submit">Apply</CustomButton>
      </div>
    </form>
  );
};
export default ResumeUploadform;

//email validator
const emailValidation = (email, formState) => {
  let result;
  if (email.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i)) {
    result = { ...formState, email, emailErr: "" };
  } else {
    result = { ...formState, emailErr: "email not valid" };
  }
  return result;
};
//file validation
const fileValidation = (data, fileType, formState) => {
  console.log(data);
  let fileExtention = data[0].name.split(".");
  console.log(fileExtention);
  let fileSize = data[0].size;
  const file = data.result;
  let result;
  if (fileType.includes(fileExtention[fileExtention.length - 1])) {
    if (fileSize < 5000001) {
      result = { ...formState, file, fileErr: "" };
    } else {
      result = {
        ...formState,
        fileErr: "File too large file only accept under 5 MB",
      };
    }
  } else {
    result = { ...formState, fileErr: ".pdf,.doc,.docx files only" };
  }
  return result;
};
