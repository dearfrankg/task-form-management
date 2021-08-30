export const profileFormFields = [
  {
    type: "inlineGroup",
    name: "firstLastGroup",
    children: [
      {
        type: "input",
        label: "First",
        name: "first",
        size: 200,
        rules: [
          {
            required: true,
            message: "Please input your first name!",
          },
        ],
      },
      {
        type: "input",
        label: "Last",
        name: "last",
        size: 200,
        rules: [
          {
            required: true,
            message: "Please input your last name!",
          },
        ],
      },
    ],
  },

  { type: "input", label: "Address", name: "address", size: 420 },

  {
    type: "inlineGroup",
    name: "cityStateGroup",
    children: [
      { type: "input", label: "City", name: "city", size: 200 },
      {
        type: "select",
        label: "State",
        name: "state",
        size: 200,
        options: [{ label: "California" }, { label: "New York" }, { label: "Chicago" }],
      },
    ],
  },

  {
    type: "grid",
    name: "checkboxGrid",
    config: { cols: 3, spans: [8, 8, 8], gutter: [10, 10] },
    children: [
      { type: "checkbox", name: "one", label: "one" },
      { type: "checkbox", name: "two", label: "two" },
      { type: "checkbox", name: "three", label: "three" },
      { type: "checkbox", name: "four", label: "four" },
      { type: "checkbox", name: "five", label: "five" },
      { type: "checkbox", name: "six", label: "six" },
    ],
  },

  {
    type: "inlineGroup",
    name: "toggleGroup",
    children: [
      { type: "checkbox", label: "Single checkbox", name: "single" },
      {
        type: "switch",
        label: "Switch",
        name: "switch",
        checkedLabel: "on",
        uncheckedLabel: "off",
      },
      { type: "yesNoRadioGroup", label: "Have you voted", name: "voted" },
    ],
  },

  {
    type: "radioGroup",
    name: "choices",
    label: "Choices",
    options: [{ label: "Prop A" }, { label: "Prop B" }, { label: "Prop C" }],
  },

  {
    type: "inlineGroup",
    name: "birthGroup",
    children: [
      { type: "date", label: "Birth date", name: "birthDate" },
      { type: "time", label: "Birth time", name: "birthTime" },
    ],
  },

  { type: "textarea", label: "Comment", name: "comment", size: 420 },

  {
    type: "inlineGroupRight",
    name: "buttonGroup",
    size: 420,
    children: [
      { type: "button", name: "revertButton", label: "Revert changes" },
      {
        type: "button",
        name: "saveButton",
        label: "Save changes",
        config: { type: "primary", htmlType: "submit" },
      },
    ],
  },

  { type: "verticalSpace", name: "verticalSpace", size: 200 },
];
