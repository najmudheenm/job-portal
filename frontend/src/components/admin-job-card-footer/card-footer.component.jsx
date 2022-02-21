import "./admin-job-card-footer.style.scss";

import CustomButton from "../custom-button/custom-button.component";

const adminJobCardFooter = ({ childern, ...otherProps }) => {
  const { buttonOnClick, buttonTitle, experience, buttonClasses } = otherProps;
  return (
    <div className="admin-job-card-footer">
      <span className="experience">{experience}</span>
      <CustomButton className={buttonClasses} onClick={buttonOnClick}>
        {buttonTitle}
      </CustomButton>
      {childern}
    </div>
  );
};

export default adminJobCardFooter;
