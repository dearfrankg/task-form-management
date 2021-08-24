import { useState } from "react";
import { fields } from "./form-fields";
import { RenderForm } from "..";
import { useSelector, useDispatch } from "react-redux";
import { updateForm, selectProfile } from "../../store/profileSlice";
import { Form, Row, Col, Typography } from "antd";
import moment from "moment";

const { Text, Title } = Typography;

export function ProfileForm() {
  const [form] = Form.useForm();
  const initialState = { ...useSelector(selectProfile) };
  const [data, setData] = useState(initialState);
  const initialValues = {
    ...initialState,
    birthDate: moment(initialState.birthDate),
    birthTime: moment(initialState.birthTime),
  };

  const onFinish = (values) => {
    setData(values);
    updateForm(values);
  };

  const formConfig = {
    isEditMode: true,
    fields: fields.profileForm,
    form: {
      form,
      layout: "vertical",
      labelCol: { span: 24, offset: 0 },
      wrapperCol: { span: 24, offset: 0 },
      initialValues,
      onFinish,
    },
  };

  return (
    <>
      <h1>RenderForm</h1>

      <Row style={{ width: "100%" }}>
        <Col span={7} style={{ padding: 20 }}>
          <Title level={4}>Form JSON</Title>
          <pre style={{ fontSize: "0.7rem" }}>{JSON.stringify(fields, null, 2)}</pre>
        </Col>
        <Col span={10} style={{ padding: 20, minWidth: 480 }}>
          <Title level={4}>Profile Form</Title>
          <RenderForm formConfig={formConfig} />
        </Col>
        <Col span={7} style={{ padding: 20 }}>
          <Title level={4}>Form Data</Title>
          <pre style={{ fontSize: "0.7rem" }}>{JSON.stringify(data, null, 2)}</pre>
        </Col>
      </Row>
    </>
  );
}
