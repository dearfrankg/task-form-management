// import { useState } from "react";
// import { fields } from "../../data/components-form-data";
// import { RenderForm } from "..";
// import { useSelector, useDispatch } from "react-redux";
// import { updateForm, selectProfile } from "../../store/profileSlice";
// import { Form, Row, Col, Typography } from "antd";
// import moment from "moment";

// const { Text, Title } = Typography;

export const ProfileForm = () => {
  // const [form] = Form.useForm();
  // const initialState = { ...useSelector(selectProfile) };
  // const [data, setData] = useState(initialState);
  // const initialValues = {
  //   ...initialState,
  //   birthDate: moment(initialState.birthDate),
  //   birthTime: moment(initialState.birthTime),
  // };

  // const onFinish = (values) => {
  //   setData(values);
  //   updateForm(values);
  // };

  // const formConfig = {
  //   isEditMode: true,
  //   fields: fields.profileForm,
  //   form: {
  //     form,
  //     layout: "vertical",
  //     labelCol: { span: 24, offset: 0 },
  //     wrapperCol: { span: 24, offset: 0 },
  //     initialValues,
  //     onFinish,
  //   },
  // };

  // return <RenderForm formConfig={formConfig} />;
  return <p>ProfileForm</p>;
};
