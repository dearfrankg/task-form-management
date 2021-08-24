export const fields = {
  profileForm: [
    {
      type: "inlineGroup",
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
      type: "checkbox2Column",
      size: 420,
      children: [
        { type: "checkbox", label: "Funny", name: "funny" },
        { type: "checkbox", label: "Lazy", name: "lazy" },
        { type: "checkbox", label: "Chubby", name: "chubby" },
        { type: "checkbox", label: "Kind", name: "kind" },
      ],
    },

    {
      type: "inlineGroup",
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
      label: "Choices",
      name: "choices",
      options: [{ label: "Prop A" }, { label: "Prop B" }, { label: "Prop C" }],
    },

    {
      type: "inlineGroup",
      children: [
        { type: "date", label: "Birth date", name: "birthDate" },
        { type: "time", label: "Birth time", name: "birthTime" },
      ],
    },

    { type: "textarea", label: "Comment", name: "comment", size: 420 },

    {
      type: "inlineGroupRight",
      size: 420,
      children: [
        { type: "button", label: "Revert changes" },
        {
          type: "button",
          label: "Save changes",
          buttonAttrs: { type: "primary", htmlType: "submit" },
        },
      ],
    },

    { type: "verticalSpace", size: 200 },
  ],
};
