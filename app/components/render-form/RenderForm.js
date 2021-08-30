/* eslint-disable */
import React, { Fragment } from "react";
import {
  Form,
  Space,
  Input,
  Select,
  Radio,
  Checkbox,
  Switch,
  DatePicker,
  TimePicker,
  Button,
  Divider,
  Card,
  Row,
  Col,
  Collapse,
  Tabs,
  Typography,
  PageHeader,
  Image,
} from "antd";
import { get } from "lodash";
// import { ComponentsForm } from "..";

/*

  SOME GOTCHAS

    -- Fields can return undefined if they have no definite state from redux
    -- example: checkbox is not check will return 'undefined' unless there is false value in redux

*/

const { Panel } = Collapse;
const { TabPane } = Tabs;
const { Search } = Input;
const { Text, Title } = Typography;

const antdFields = {
  verticalSpace: ({ item, isEditMode }) => {
    return <div direction="vertical" style={{ height: item.height }}></div>;
  },

  divider: ({ item, isEditMode }) => {
    return <Divider {...item.config}>{item.label}</Divider>;
  },

  card: ({ item, isEditMode }) => {
    return (
      <Card {...item.config} bordered={false}>
        {item.children.map((item, i) => {
          return <RenderField key={i} item={item} />;
        })}
      </Card>
    );
  },

  collapse: ({ item, isEditMode }) => {
    // the div is there because collapse will not accept data-test-id attribute
    return (
      <div data-test-id={item.config["data-test-id"]}>
        <Collapse {...item.config}>
          {item.children.map((child, i) => {
            const childDataId = `${item.name}-panel${i}-${child.content.type}`;
            if (!child.content.config) child.content.config = {};
            child.content.name = childDataId;
            child.content.config["data-test-id"] = childDataId;

            return (
              <Panel key={`${item.name}-panel${i}`} header={child.header}>
                <RenderField key={i} item={child.content} />
              </Panel>
            );
          })}
        </Collapse>
      </div>
    );
  },

  tabs: ({ item, isEditMode }) => {
    return (
      <Tabs {...item.config} style={item.style}>
        {item.children.map((child, childIndex) => {
          const tabPaneKey = `${item.name}-tabPane-${childIndex}`;
          return (
            <TabPane key={tabPaneKey} tab={child.header}>
              <RenderField item={child.content} />
            </TabPane>
          );
        })}
      </Tabs>
    );
  },

  verticalTabs: ({ item, isEditMode }) => {
    return (
      <Tabs tabPosition="left" {...item.config} style={item.style}>
        {item.children.map((child, i) => {
          return (
            <TabPane tab={child.header} key={i}>
              <RenderField item={child.content} />
            </TabPane>
          );
        })}
      </Tabs>
    );
  },

  inlineGroup: ({ item, isEditMode }) => {
    return (
      <Space {...item.config} size="large">
        {item.children.map((item, i) => {
          const style = { display: "inline-block", margin: 0 };
          return <RenderField key={`${item.name}-group-${i}`} item={{ ...item, style }} />;
        })}
      </Space>
    );
  },

  inlineGroupRight: ({ item, isEditMode }) => {
    return (
      <div style={{ textAlign: "right" }}>
        <Space {...item.config} size="large">
          {item.children.map((item, i) => {
            const style = { display: "inline-block", margin: 0 };
            return <RenderField key={`${item.name}-group-${i}`} item={{ ...item, style }} />;
          })}
        </Space>
      </div>
    );
  },

  button: ({ item, isEditMode }) => {
    return (
      <Button {...item.config} disabled={!isEditMode}>
        {item.label}
      </Button>
    );
  },

  radioButtonGroup: ({ item, isEditMode }) => {
    return (
      <Form.Item name={item.name} label={item.label} rules={item.rules}>
        <Radio.Group {...item.config}>
          {item.options.map((option, i) => {
            return (
              <Radio.Button
                key={`${item.name}-radioButtonGroup-${i}`}
                value={option.value || option.label}
              >
                {option.label}
              </Radio.Button>
            );
          })}
        </Radio.Group>
      </Form.Item>
    );
  },

  radioGroup: ({ item, isEditMode }) => {
    return (
      <Form.Item name={item.name} label={item.label} rules={item.rules}>
        <Radio.Group {...item.config}>
          {item.options.map((option, i) => {
            return (
              <Radio
                key={`${item.name}-radioButtonGroup-${i}`}
                value={option.value || option.label}
              >
                {option.label}
              </Radio>
            );
          })}
        </Radio.Group>
      </Form.Item>
    );
  },

  yesNoRadioGroup: ({ item, isEditMode }) => {
    return (
      <Form.Item name={item.name} label={item.label} rules={item.rules}>
        <Radio.Group {...item.config} disabled={!isEditMode}>
          <Radio value={"yes"}>Yes</Radio>
          <Radio value={"no"}>No</Radio>
        </Radio.Group>
      </Form.Item>
    );
  },

  switch: ({ item, isEditMode }) => {
    return (
      <Form.Item valuePropName="checked" name={item.name} label={item.label} rules={item.rules}>
        <Switch
          {...item.config}
          disabled={!isEditMode}
          checkedChildren="on"
          unCheckedChildren="off"
        />
      </Form.Item>
    );
  },

  checkbox: ({ item, isEditMode }) => {
    return (
      <Form.Item
        name={item.name}
        indeterminate={false}
        valuePropName="checked"
        indeterminate="false"
        rules={item.rules}
        style={{ marginBottom: 0 }}
      >
        <Checkbox {...item.config} disabled={!isEditMode}>
          {item.label}
        </Checkbox>
      </Form.Item>
    );
  },

  checkboxGroup: ({ item, isEditMode }) => {
    return (
      <Form.Item
        name={item.name}
        indeterminate={false}
        valuePropName="checked"
        indeterminate="false"
        rules={item.rules}
        style={{ marginBottom: 0 }}
      >
        <Checkbox.Group {...item.config} options={item.options} disabled={!isEditMode} />
      </Form.Item>
    );
  },

  input: ({ item, isEditMode }) => {
    return (
      <Form.Item
        name={item.name}
        label={item.label}
        rules={item.rules}
        style={{ width: item.width }}
      >
        <Input {...item.config} disabled={!isEditMode} />
      </Form.Item>
    );
  },

  search: ({ item, isEditMode }) => {
    return (
      <Form.Item
        name={item.name}
        label={item.label}
        rules={item.rules}
        style={{ width: item.width }}
      >
        <Search {...item.config} allowClear disabled={!isEditMode} />
      </Form.Item>
    );
  },

  select: ({ item, isEditMode }) => {
    return (
      <Form.Item
        name={item.name}
        label={item.label}
        rules={item.rules}
        style={{ width: item.width }}
      >
        <Select {...item.config} disabled={!isEditMode}>
          {item.options.map((option, i) => {
            const value = option.value || option.label || "";
            return (
              <Select.Option key={`${item.name}-select-${i}`} value={value}>
                {option.label}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
    );
  },

  multiSelect: ({ item, isEditMode }) => {
    return (
      <Form.Item
        name={item.name}
        label={item.label}
        rules={item.rules}
        style={{ width: item.width }}
      >
        <Select {...item.config} mode="multiple" allowClear={true} disabled={!isEditMode}>
          {item.options.map((option, i) => {
            const value = option.value || option.label || "";
            return (
              <Select.Option key={`${item.name}-multiSelect-${i}`} value={value}>
                {option.label}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
    );
  },

  textarea: ({ item, isEditMode }) => {
    return (
      <Form.Item
        name={item.name}
        label={item.label}
        rules={item.rules}
        style={{ width: item.width }}
      >
        <Input.TextArea {...item.config} disabled={!isEditMode} />
      </Form.Item>
    );
  },

  date: ({ item, isEditMode }) => {
    const dateFormatList = ["MM/DD/YYYY", "MM/DD/YY"];
    return (
      <Form.Item name={item.name} label={item.label}>
        <DatePicker {...item.config} disabled={!isEditMode} format={dateFormatList} />
      </Form.Item>
    );
  },

  time: ({ item, isEditMode }) => {
    return (
      <Form.Item name={item.name} label={item.label}>
        <TimePicker
          {...item.config}
          use12Hours
          minuteStep={15}
          format="h:mm a"
          disabled={!isEditMode}
        />
      </Form.Item>
    );
  },

  grid: ({ item, isEditMode }) => {
    return (
      <div style={{ width: item.config.width }}>
        <Row {...item.config}>
          {item.children.map((child, childIndex) => {
            const col = childIndex % item.config.cols;
            const span = item.config.spans[col];
            const cellDataId = `${item.name}-cell${childIndex}`;
            const childDataId = `${cellDataId}-${child.type}`;
            if (!child.config) child.config = {};
            child.name = childDataId;
            child.config["data-test-id"] = childDataId;

            return (
              <Col data-test-id={cellDataId} key={cellDataId} span={span}>
                <RenderField item={child} />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  },

  title: ({ item, isEditMode }) => {
    return <Title {...item.config}>{item.label}</Title>;
  },

  text: ({ item, isEditMode }) => {
    return <Text {...item.config}>{item.label}</Text>;
  },

  pageHeader: ({ item, isEditMode }) => {
    return <PageHeader {...item.config} />;
  },

  image: ({ item, isEditMode }) => {
    if (item.config.placeholderUrl) {
      item.config.placeholder = (
        <Image preview={false} src={item.config.placeholderUrl} width={item.config.width} />
      );
      delete item.config.placeholderUrl;
    }

    return <Image {...item.config} />;
  },

  imageGroup: ({ item, isEditMode }) => {
    return (
      <Image.PreviewGroup>
        <Space size="large" {...item.config}>
          {item.children.map((child, i) => {
            return <RenderField key={`${item.name}-image-${i}`} item={child} />;
          })}
        </Space>
      </Image.PreviewGroup>
    );
  },

  component: ({ item, isEditMode }) => {
    const RenderComponent = item.component;
    return <RenderComponent />;
  },

  componentsFrom: ({ item, isEditMode }) => {
    return <ComponentsForm />;
  },

  default: ({ item, isEditMode }) => {
    return (
      <Space size="small">
        <Text>{item.type}</Text>
        <Text>{item.label}</Text>
      </Space>
    );
  },
};

const samsFields = {};

const fields = { ...antdFields, ...samsFields };

const RenderField = ({ isEditMode = true, item = {} }) => {
  if (!item.name) {
    console.log("Warning: you're missing the name attribute: ", item);
    // throw new Error("Field is missing name attribute");
  }
  if (!item.config) item.config = {};
  item.config["data-test-id"] = item.config["data-test-id"] || item.name;

  const Field = fields[item.type] || fields["default"];

  return <Field item={item} isEditMode={isEditMode} />;
};

export const RenderForm = ({ formConfig }) => {
  const isEditMode = formConfig?.isEditMode;

  return (
    <Form {...formConfig.form}>
      <Space direction="vertical" size="small" style={{ width: "100%" }}>
        {formConfig.fields.map((item, i) => {
          return <RenderField key={`form-${i}`} item={item} isEditMode={isEditMode} />;
        })}
      </Space>
    </Form>
  );
};
