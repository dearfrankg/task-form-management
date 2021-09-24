import { useState } from "react";
import { Form, Layout, Menu, Button, Typography, Input, Switch } from "antd";
import { data } from "./helper";
import { RenderForm } from "..";

const { Title } = Typography;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search } = Input;

const getSubMenus = (menu) => {
  return menu.map((subMenu, subMenuIndex) => (
    <Menu.ItemGroup key={subMenuIndex} title={subMenu.title}>
      {subMenu.menuItems.map((menuItem, menuItemIndex) => (
        <Menu.Item key={menuItem}>{menuItem}</Menu.Item>
      ))}
    </Menu.ItemGroup>
  ));
};

export const Home = () => {
  const [form] = Form.useForm();
  const [page, setPage] = useState("arrayOfObjects");
  const [isEditMode, setIsEditMode] = useState(true);

  const onValuesChange = () => {};
  const onFinish = () => {};

  const initValues = data.initialValues[page] || {};

  const formConfig = {
    fields: data.pages[page].fields,
    aux: data.aux[page],
    isEditMode,
    form: {
      form,
      layout: "vertical",
      labelCol: { offset: 4, span: 16 },
      wrapperCol: { offset: 4, span: 16 },
      initialValues: initValues,
      onFinish,
      autoComplete: "off",
    },
  };

  const onMenuClick = (e) => {
    const pageName = e.key;
    form.resetFields();
    setPage(pageName);
  };

  return (
    <Layout>
      <Header style={{ position: "fixed", width: "100%", zIndex: 10 }}>
        <Title level={2} style={{ color: "#ddd", margin: 10 }}>
          RenderForm
        </Title>
      </Header>
      <Layout style={{ position: "absolute", top: 64 }}>
        <Sider
          width={250}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
        >
          <Menu
            onClick={onMenuClick}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >
            {getSubMenus(data.menu)}
          </Menu>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </Sider>
        <Layout style={{}}>
          <Content
            style={{
              position: "absolute",
              left: 250,
              padding: 24,
              margin: 0,
              minHeight: 280,
              width: "calc(100vw - 400px)",
            }}
          >
            <Form.Item label="Edit Mode">
              <Switch
                checkedChildren="on"
                unCheckedChildren="off"
                defaultChecked
                onClick={() => setIsEditMode(!isEditMode)}
              />
            </Form.Item>
            <RenderForm formConfig={formConfig} />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
