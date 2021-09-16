import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import { Form, Tabs, Row, Col, Typography } from "antd";
import { profileFormFields, componentsFormFields, componentsFormFieldsCopy } from "../../data";
import { RenderForm } from "..";
import { useSelector, useDispatch } from "react-redux";
import { updateForm, selectProfile } from "../../store/profileSlice";
import moment from "moment";

const { Title } = Typography;
const { TabPane } = Tabs;

const Demo = () => {
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
    fields: profileFormFields,
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
    <Row style={{ width: "100%" }}>
      <Col span={7} style={{ padding: 20 }}>
        <Title level={4}>Form JSON</Title>
        <pre style={{ fontSize: "0.7rem" }}>{JSON.stringify(profileFormFields, null, 2)}</pre>
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
  );
};

const Components = () => {
  const [form] = Form.useForm();

  const formConfig = {
    isEditMode: true,
    fields: componentsFormFields,
    form: {
      form,
      layout: "vertical",
      labelCol: { span: 24, offset: 0 },
      wrapperCol: { span: 24, offset: 0 },
      initialValues: {},
    },
  };

  return <RenderForm formConfig={formConfig} />;
};

const JsonText = () => {
  const json = JSON.stringify(componentsFormFieldsCopy, null, 2);
  return <pre>{json}</pre>;
};

const tabPanes = {
  1: () => <Demo />,
  2: () => <Components />,
  3: () => <JsonText />,
};

export const Home = () => {
  const [tab, setTab] = useState("1");

  const PaneContent = ({ number }) => (number === tab ? tabPanes[tab]() : null);

  function callback(key) {
    setTab(key);
  }

  return (
    <main style={{ padding: 30 }}>
      <Head>
        <title>RenderForm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <img src="/logo.svg" className={styles.logo} alt="logo" />
        <h1>RenderForm</h1>
      </header>

      <Tabs defaultActiveKey="1" centered onChange={callback}>
        <TabPane tab="Demo" key="1">
          <PaneContent number="1" />
        </TabPane>
        <TabPane tab="Components" key="2">
          <PaneContent number="2" />
        </TabPane>
        <TabPane tab="Components JSON" key="3">
          <PaneContent number="3" />
        </TabPane>
      </Tabs>
    </main>
  );
};
