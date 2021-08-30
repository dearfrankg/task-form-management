// import { componentsFormFields } from "./components-form-data";
// const json = JSON.stringify(componentsFormFields, null, 2);

const componentsFormFields = [];
const json = { one: 1 };

export const demoFormFields = [
  {
    type: "card",
    name: "pageCard",
    config: { style: { padding: 30 } },
    children: [
      {
        type: "title",
        name: "pageTitle",
        label: "RenderForm",
        config: { style: { textAlign: "center" } },
      },

      {
        type: "tabs",
        name: "pageTabs",
        config: {},
        children: [
          {
            header: "Demo",
            content: {
              type: "card",
              name: "tabPane1-card",
              children: [
                //
                { type: "profileForm", name: "profileForm" },
              ],
            },
          },

          {
            header: "Components",
            content: {
              type: "card",
              name: "tabPane2-card",
              children: [
                //
                { type: "component", name: "componentsForm", component: <p>hello</p> },
              ],
            },
          },

          {
            header: "Components JSON",
            content: {
              type: "card",
              name: "tabPane3-card",
              children: [
                {
                  type: "text",
                  name: "cardContent3",
                  label: <pre>{json}</pre>,
                },
              ],
            },
          },
        ],
      },
    ],
  },
];
