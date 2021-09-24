/* eslint-disable */
import styles from "./styles.module.css";
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
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { forEach } from "lodash";

const { Panel } = Collapse;
const { TabPane } = Tabs;
const { Search } = Input;
const { Text, Title } = Typography;

let myFormConfig;

const antdFields = {
  inline: ({ item }) => {
    return (
      <Space style={{ display: "flex", marginBottom: 8 }} align="baseline">
        {item.children.map((child, childIndex) => {
          return <RenderField key={childIndex + 2} item={child} />;
        })}
      </Space>
    );
  },

  conditional: ({ item }) => {
    const { aux } = myFormConfig;

    if (typeof aux !== "object") {
      return <p>Missing aux object</p>;
    }

    if (typeof aux[condition] === "function") {
      return <p>Missing condition function</p>;
    }

    const { shouldUpdate, condition } = item;

    const shouldUpdateFn = typeof aux[shouldUpdate] === "function" ? aux[shouldUpdate] : true;

    const conditionFn = aux[condition];

    return (
      <Form.Item shouldUpdate={shouldUpdateFn}>
        {() => {
          const conditionMet = conditionFn(item.form);
          if (conditionMet) {
            return item.children.map((child, i) => {
              child.config = {
                ...child.config,
                disabled: item.config.disabled,
              };
              child.form = item.form;

              return <RenderField key={i} item={child} />;
            });
          } else {
            return null;
          }
        }}
      </Form.Item>
    );
  },

  arrayOfValues: ({ item }) => {
    return (
      <Form.List name={item.name}>
        {(fields, { add, remove }, { errors }) => (
          <Fragment>
            {fields.map((field, index) => (
              <Form.Item
                key={field.key}
                label={index === 0 && item.label}
                style={{ marginBottom: 0 }}
              >
                <Form.Item {...field} style={{ display: "inline-block" }}>
                  <Input {...item.config} />
                </Form.Item>

                {fields.length > 1 && (
                  <MinusCircleOutlined
                    disabled={item.config.disabled}
                    className={styles.dynamicDeleteButton}
                    onClick={() => {
                      !item.config.disabled && remove(field.name);
                    }}
                  />
                )}
              </Form.Item>
            ))}
            <Form.Item>
              <Button
                disabled={item.config.disabled}
                type="dashed"
                onClick={() => add()}
                style={{ width: item.config.style.width }}
                icon={<PlusOutlined />}
              >
                Add
              </Button>
            </Form.Item>
          </Fragment>
        )}
      </Form.List>
    );
  },

  arrayOfObjects: ({ item }) => {
    const removeIcon = ({ field, item, remove }) => {
      return (
        <MinusCircleOutlined
          disabled={item.config.disabled}
          className={styles.dynamicDeleteButton}
          style={{ top: 0 }}
          onClick={(event) => {
            event.stopPropagation();
            !item.config.disabled && remove(field.name);
          }}
        />
      );
    };

    const superCharge = (item, child, field) => {
      return {
        ...child,
        ...field,
        name: [field.name, child.name],
        fieldKey: [field.fieldKey, child.name],
        form: item.form,
        config: {
          ...child.config,
          disabled: item.config.disabled,
        },
      };
    };

    return (
      <Form.List name={item.name}>
        {(fields, { add, remove }, { errors }) => (
          <Fragment>
            <Form.Item shouldUpdate={true}>
              {() => (
                <Collapse {...item.config}>
                  {fields.map((field) => {
                    const header = item.form.getFieldValue([item.name, field.name, "name"]);

                    return (
                      <Panel
                        key={field.key}
                        header={header}
                        extra={removeIcon({ field, item, remove })}
                      >
                        {item.children.map((child, childIndex) => {
                          if (child.type === "inline") {
                            child.children.forEach((grandChild) => {
                              grandChild = superCharge(item, grandChild, field);
                              // console.log("grandChild: ", grandChild);
                            });
                          }
                          child = superCharge(item, child, field);

                          return <RenderField key={childIndex} item={child} />;
                        })}
                      </Panel>
                    );
                  })}
                </Collapse>
              )}
            </Form.Item>

            <Form.Item>
              <Button
                {...item.config}
                style={{ width: "100%" }}
                type="dashed"
                onClick={() => add()}
                icon={<PlusOutlined />}
              >
                Add
              </Button>
            </Form.Item>
          </Fragment>
        )}
      </Form.List>
    );
  },

  showFields: ({ item }) => {
    return (
      <Form.Item shouldUpdate label={item.label}>
        {() => <pre>{JSON.stringify(item.form.getFieldsValue(), null, 2)}</pre>}
      </Form.Item>
    );
  },

  pre: ({ item }) => {
    return <pre {...item.config}>{item.label}</pre>;
  },

  json: ({ item }) => {
    const hasConfig = item.data.config && Object.keys(item.data.config).length === 0;
    if (hasConfig) delete item.data.config;
    const json = JSON.stringify(item.data, null, 2);
    return (
      <Form.Item>
        <pre style={{ fontSize: "0.7rem" }}>{json}</pre>
      </Form.Item>
    );
  },

  verticalSpace: ({ item }) => {
    return <div direction="vertical" style={{ height: item.height }}></div>;
  },

  divider: ({ item }) => {
    return <Divider {...item.config}>{item.label}</Divider>;
  },

  card: ({ item }) => {
    return (
      <Card {...item.config} bordered={false}>
        {item.children.map((child, childIndex) => {
          return <RenderField key={childIndex} item={child} />;
        })}
      </Card>
    );
  },

  collapse: ({ item }) => {
    const setChildContent = (child, childIndex) => {
      if (!child.content.config) child.content.config = {};
      const childDataId = `${item.name}-panel${childIndex}-${child.content.type}`;
      child.content.config["data-test-id"] = childDataId;
      child.content.name = childDataId;
    };

    return (
      <Form.Item shouldUpdate={true} data-test-id={item.config["data-test-id"]}>
        {() => {
          return (
            <Collapse {...item.config}>
              {item.children.map((child, childIndex) => {
                const header = item.form.getFieldValue(["events", childIndex, child.header]) || "";
                setChildContent(child, childIndex);

                return (
                  <Panel key={`${item.name}-panel${childIndex}`} forceRender header={header}>
                    {child.content.map((content, contentIndex) => {
                      // expecting name to be an array?
                      content.name[1] = childIndex;

                      return <RenderField key={contentIndex} item={content} />;
                    })}
                  </Panel>
                );
              })}
            </Collapse>
          );
        }}
      </Form.Item>
    );
  },

  tabs: ({ item }) => {
    return (
      <Tabs {...item.config} style={item.style}>
        {item.children.map((child, childIndex) => {
          const tabPaneKey = `${item.name}-tabPane-${childIndex}`;
          return (
            <TabPane key={tabPaneKey} tab={child.header}>
              {child.content.map((content, contentIndex) => {
                return <RenderField key={contentIndex} item={content} />;
              })}
            </TabPane>
          );
        })}
      </Tabs>
    );
  },

  verticalTabs: ({ item }) => {
    return (
      <Tabs tabPosition="left" {...item.config} style={item.style}>
        {item.children.map((child, i) => {
          return (
            <TabPane tab={child.header} key={i}>
              {child.content.map((content, contentIndex) => {
                return <RenderField key={contentIndex} item={content} />;
              })}
            </TabPane>
          );
        })}
      </Tabs>
    );
  },

  inlineGroup: ({ item }) => {
    return (
      <Space {...item.config} size="large">
        {item.children.map((child, childIndex) => {
          const style = { display: "inline-block", margin: 0 };
          return (
            <RenderField key={`${item.name}-group-${childIndex}`} item={{ ...child, style }} />
          );
        })}
      </Space>
    );
  },

  inlineGroupRight: ({ item }) => {
    return (
      <div style={{ textAlign: "right" }}>
        <Space {...item.config} size="large">
          {item.children.map((child, childIndex) => {
            const style = { display: "inline-block", margin: 0 };
            return (
              <RenderField key={`${item.name}-group-${childIndex}`} item={{ ...child, style }} />
            );
          })}
        </Space>
      </div>
    );
  },

  button: ({ item }) => {
    return <Button {...item.config}>{item.label}</Button>;
  },

  radioButtonGroup: ({ item }) => {
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

  radioGroup: ({ item }) => {
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

  yesNoRadioGroup: ({ item }) => {
    return (
      <Form.Item name={item.name} label={item.label} rules={item.rules}>
        <Radio.Group {...item.config}>
          <Radio value={"yes"}>Yes</Radio>
          <Radio value={"no"}>No</Radio>
        </Radio.Group>
      </Form.Item>
    );
  },

  switch: ({ item }) => {
    return (
      <Form.Item valuePropName="checked" name={item.name} label={item.label} rules={item.rules}>
        <Switch {...item.config} checkedChildren="on" unCheckedChildren="off" />
      </Form.Item>
    );
  },

  checkbox: ({ item }) => {
    return (
      <Form.Item
        name={item.name}
        indeterminate={false}
        valuePropName="checked"
        indeterminate="false"
        rules={item.rules}
        style={{ marginBottom: 0 }}
      >
        <Checkbox {...item.config}>{item.label}</Checkbox>
      </Form.Item>
    );
  },

  checkboxGroup: ({ item }) => {
    return (
      <Form.Item
        name={item.name}
        indeterminate={false}
        valuePropName="checked"
        indeterminate="false"
        rules={item.rules}
        style={{ marginBottom: 0 }}
      >
        <Checkbox.Group {...item.config} options={item.options} />
      </Form.Item>
    );
  },

  input: ({ item }) => {
    return (
      <Form.Item
        name={item.name}
        label={item.label}
        rules={item.rules}
        style={{ width: item.width }}
      >
        <Input {...item.config} />
      </Form.Item>
    );
  },

  search: ({ item }) => {
    return (
      <Form.Item
        name={item.name}
        label={item.label}
        rules={item.rules}
        style={{ width: item.width }}
      >
        <Search {...item.config} allowClear />
      </Form.Item>
    );
  },

  select: ({ item }) => {
    return (
      <Form.Item
        name={item.name}
        label={item.label}
        rules={item.rules}
        style={{ width: item.width }}
      >
        <Select {...item.config}>
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

  multiSelect: ({ item }) => {
    return (
      <Form.Item
        name={item.name}
        label={item.label}
        rules={item.rules}
        style={{ width: item.width }}
      >
        <Select {...item.config} mode="multiple" allowClear={true}>
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

  textArea: ({ item }) => {
    return (
      <Form.Item
        name={item.name}
        label={item.label}
        rules={item.rules}
        style={{ width: item.width }}
      >
        <Input.TextArea {...item.config} />
      </Form.Item>
    );
  },

  date: ({ item }) => {
    const dateFormatList = ["MM/DD/YYYY", "MM/DD/YY"];
    return (
      <Form.Item name={item.name} label={item.label}>
        <DatePicker {...item.config} format={dateFormatList} />
      </Form.Item>
    );
  },

  time: ({ item }) => {
    return (
      <Form.Item name={item.name} label={item.label}>
        <TimePicker {...item.config} use12Hours minuteStep={15} format="h:mm a" />
      </Form.Item>
    );
  },

  grid: ({ item }) => {
    return (
      <Form.Item style={{ margin: 0 }}>
        <Row {...item.config}>
          {item.children.map((child, childIndex) => {
            const col = childIndex % item.config.cols;
            const span = item.config.spans[col];
            const cellDataId = `${item.name}-cell${childIndex}`;
            const childDataId = `${cellDataId}-${child.type}`;
            child.name = child.name || childDataId;
            child.form = item.form;
            if (!child.config) child.config = {};
            child.config = {
              ...child.config,
              ["data-test-id"]: child.name || childDataId,
              disabled: item.config.disabled,
            };

            return (
              <Col data-test-id={cellDataId} key={cellDataId} span={span}>
                <RenderField item={child} />
              </Col>
            );
          })}
        </Row>
      </Form.Item>
    );
  },

  title: ({ item }) => {
    return <Title {...item.config}>{item.label}</Title>;
  },

  text: ({ item }) => {
    return <Text {...item.config}>{item.label}</Text>;
  },

  pageHeader: ({ item }) => {
    return <PageHeader {...item.config} />;
  },

  image: ({ item }) => {
    if (item.config.placeholderUrl) {
      item.config.placeholder = (
        <Image preview={false} src={item.config.placeholderUrl} width={item.config.width} />
      );
      delete item.config.placeholderUrl;
    }

    return <Image {...item.config} />;
  },

  imageGroup: ({ item }) => {
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

  default: ({ item }) => {
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

const setFieldConfig = (item) => {
  if (!item.config) item.config = {};

  // set data-test-id
  item.config["data-test-id"] = item.config["data-test-id"]
    ? item.config["data-test-id"]
    : typeof item.name === "string"
    ? item.name
    : Array.isArray(item.name)
    ? item.name.join("-")
    : "error";

  // set disabled
  item.config.disabled = !myFormConfig.isEditMode;
};

const RenderField = ({ item = {} }) => {
  setFieldConfig(item);
  const Field = fields[item.type] || fields["default"];

  return <Field item={item} />;
};

export const RenderForm = ({ formConfig }) => {
  myFormConfig = formConfig;

  return (
    <Form {...formConfig.form}>
      <Space direction="vertical" size="small" style={{ width: "100%" }}>
        {formConfig.fields.map((item, i) => {
          item.form = formConfig.form.form;
          return <RenderField key={`form-${i}`} item={item} />;
        })}
      </Space>
    </Form>
  );
};
