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
  Typography,
  PageHeader,
} from "antd";

/*

  SOME GOTCHAS

    -- Fields can return undefined if they have no definite state from redux
    -- example: checkbox is not check will return 'undefined' unless there is false value in redux

*/

const { Search } = Input;
const { Text } = Typography;

let groupNumber = 0;

const antdFields = {
  header: ({ item, isEditMode }) => {
    return (
      <Form.Item style={{ marginBottom: 0 }}>
        <PageHeader title={item.label} style={{ marginLeft: -24 }} />
      </Form.Item>
    );
  },

  verticalSpace: ({ item, isEditMode }) => {
    return <div direction="vertical" style={{ height: item.size }}></div>;
  },

  divider: ({ item, isEditMode }) => {
    return <Divider style={{ margin: 0 }} />;
  },

  card: ({ item, isEditMode }) => {
    return (
      <Card bordered={false}>
        {item.children.map((item, i) => {
          return <RenderField key={i} item={item} />;
        })}
      </Card>
    );
  },

  inlineGroup: ({ item, isEditMode }) => {
    groupNumber++;
    return (
      <Form.Item style={{ marginBottom: 0 }}>
        <Space size="large">
          {item.children.map((item, i) => {
            const style = { display: "inline-block", margin: 0 };
            return <RenderField key={`group-${groupNumber}-${i}`} item={{ ...item, style }} />;
          })}
        </Space>
      </Form.Item>
    );
  },

  inlineGroupRight: ({ item, isEditMode }) => {
    groupNumber++;
    return (
      <Form.Item style={{ marginBottom: 0, textAlign: "right", width: item.size }}>
        <Space size="large" className="control-buttons" style={item.style}>
          {item.children.map((item, i) => {
            const style = { display: "inline-block", margin: 0 };
            return <RenderField key={`group-${groupNumber}-${i}`} item={{ ...item, style }} />;
          })}
        </Space>
      </Form.Item>
    );
  },

  button: ({ item, isEditMode }) => {
    return (
      <Button {...item.buttonAttrs} disabled={!isEditMode}>
        {item.label}
      </Button>
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
        <Checkbox disabled={!isEditMode}>{item.label}</Checkbox>
      </Form.Item>
    );
  },

  checkbox2Column: ({ item, isEditMode }) => {
    groupNumber++;
    const gridConfig = {
      type: "grid",
      size: item.size,
      config: { width: 24, cols: 2, hGutter: 24, vGutter: 0 },
      data: item.children.map((child, i) => {
        return <RenderField key={`checkbox2Column-${groupNumber}-${i}`} item={{ ...child }} />;
      }),
    };
    return RenderField({ item: gridConfig });
  },

  input: ({ item, isEditMode }) => {
    return (
      <Form.Item name={item.name} label={item.label} rules={item.rules}>
        <Input
          data-input-id={44}
          placeholder={item.placeholder}
          style={{ width: item.size }}
          disabled={!isEditMode}
        />
      </Form.Item>
    );
  },

  select: ({ item, isEditMode }) => {
    groupNumber++;
    return (
      <Form.Item name={item.name} label={item.label} rules={item.rules}>
        <Select style={{ width: item.size }} disabled={!isEditMode}>
          {item.options.map((option, i) => {
            const value = option.value || option.label || "";
            return (
              <Select.Option key={`select-${groupNumber}-${i}`} value={value}>
                {option.label}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
    );
  },

  search: ({ item, isEditMode }) => {
    return (
      <Form.Item name={item.name} label={item.label} rules={item.rules} style={item.style}>
        <Search
          placeholder={item.placeholder}
          style={{ width: item.size }}
          allowClear
          disabled={!isEditMode}
        />
      </Form.Item>
    );
  },

  textarea: ({ item, isEditMode }) => {
    return (
      <Form.Item name={item.name} label={item.label} rules={item.rules}>
        <Input.TextArea
          placeholder={item.placeholder}
          style={{ width: item.size }}
          disabled={!isEditMode}
        />
      </Form.Item>
    );
  },

  radioGroup: ({ item, isEditMode }) => {
    groupNumber++;
    return (
      <Form.Item name={item.name} label={item.label} rules={item.rules}>
        <Radio.Group>
          {item.options.map((option, i) => {
            return (
              <Radio.Button
                key={`radioGroup-${groupNumber}-${i}`}
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

  yesNoRadioGroup: ({ item, isEditMode }) => {
    return (
      <Form.Item name={item.name} label={item.label} rules={item.rules}>
        <Radio.Group disabled={!isEditMode}>
          <Radio value={"yes"}>Yes</Radio>
          <Radio value={"no"}>No</Radio>
        </Radio.Group>
      </Form.Item>
    );
  },

  switch: ({ item, isEditMode }) => {
    return (
      <Form.Item valuePropName="checked" name={item.name} label={item.label} rules={item.rules}>
        <Switch disabled={!isEditMode} checkedChildren="on" unCheckedChildren="off" />
      </Form.Item>
    );
  },

  date: ({ item, isEditMode }) => {
    const dateFormatList = ["MM/DD/YYYY", "MM/DD/YY"];
    return (
      <Form.Item name={item.name} label={item.label}>
        <DatePicker disabled={!isEditMode} format={dateFormatList} />
      </Form.Item>
    );
  },

  time: ({ item, isEditMode }) => {
    return (
      <Form.Item name={item.name} label={item.label}>
        <TimePicker use12Hours minuteStep={15} format="h:mm a" disabled={!isEditMode} />
      </Form.Item>
    );
  },

  grid: ({ item, isEditMode }) => {
    groupNumber++;
    return (
      <Form.Item style={{ width: item.size }}>
        <Row gutter={[item.config.hGutter, item.config.vGutter]}>
          {item.data.map((data, i) => (
            <Col key={`grid-${groupNumber}-${i}`} span={24 / item.config.cols}>
              {data}
            </Col>
          ))}
        </Row>
      </Form.Item>
    );
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
