export const profileFormFields = [
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
];
