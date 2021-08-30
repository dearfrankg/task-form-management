import * as obj from "../../data2";
import { checkDataCount } from "../../utils";
checkDataCount(obj, "components.demo-form");

// import { Form } from "antd";
// import { RenderForm, ComponentsForm } from "..";

export const DemoForm = () => {
  const [form] = Form.useForm();

  // const formConfig = {
  //   isEditMode: true,
  //   fields: demoFormFields.slice(0),
  //   form: {
  //     form,
  //     layout: "vertical",
  //     labelCol: { span: 24, offset: 0 },
  //     wrapperCol: { span: 24, offset: 0 },
  //     initialValues: {},
  //   },
  // };

  return <p>Demo Form</p>;
  // return <RenderForm formConfig={formConfig} />;
  // return (
  //   <>
  //     <ProfileForm />
  //     <ComponentsForm />
  //   </>
  // );
};
