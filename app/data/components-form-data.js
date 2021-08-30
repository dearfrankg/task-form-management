import { constants } from "./constants";

export const componentsFormFields = [
  {
    type: "card",
    name: "tabPane2-card",
    children: [
      {
        type: "grid",
        name: "componentGrid",
        config: { cols: 3, spans: [8, 8, 8], gutter: [20, 20] },
        children: [
          {
            type: "card",
            config: { style: { padding: 20 } },
            children: [
              {
                type: "title",
                name: "typography",
                label: "Typeography",
                config: { level: 3, style: { color: "indigo" } },
              },

              {
                type: "divider",
                name: "titleDivider",
                label: "Title",
                config: { orientation: "left", style: { margin: "30px 0" } },
              },
              { type: "title", name: "title1", label: "Title" },
              { type: "title", name: "title2", label: "Level 2", config: { level: 2 } },
              { type: "title", name: "title3", label: "Level 3", config: { level: 3 } },
              { type: "title", name: "title4", label: "Level 4", config: { level: 4 } },

              {
                type: "divider",
                name: "textDivider",
                label: "Text",
                config: { orientation: "left", style: { margin: "30px 0" } },
              },
              {
                type: "inlineGroup",
                name: "inlineGroup",
                children: [
                  {
                    type: "text",
                    name: "text1",
                    label: "default",
                    config: {},
                  },
                  {
                    type: "text",
                    name: "text2",
                    label: "strong",
                    config: { strong: true },
                  },
                  {
                    type: "text",
                    name: "text3",
                    label: "italic",
                    config: { italic: true },
                  },
                  {
                    type: "text",
                    name: "text4",
                    label: "underline",
                    config: { underline: true },
                  },
                  {
                    type: "text",
                    name: "text5",
                    label: "delete",
                    config: { delete: true },
                  },
                ],
              },

              {
                type: "divider",
                name: "pageHeaderDivider",
                label: "PageHeader",
                config: { orientation: "left", style: { margin: "30px 0" } },
              },
              {
                type: "pageHeader",
                name: "pageHeader",
                config: { title: "Page Header", subTitle: "This is the subtitle" },
              },
            ],
          },

          {
            type: "card",
            config: { style: { padding: 20 } },
            children: [
              {
                type: "title",
                name: "basicDataEntry",
                label: "Basic Data Entry",
                config: { level: 3, style: { color: "indigo" } },
              },

              {
                type: "divider",
                name: "inputTypeDivider",
                label: "Input Types",
                config: { orientation: "left", style: { margin: "30px 0" } },
              },

              { type: "input", name: "input", label: "Input" },
              { type: "search", name: "search", label: "Search" },
              {
                type: "select",
                name: "select",
                label: "Select",
                options: [{ label: "one" }, { label: "two" }, { label: "three" }],
              },
              {
                type: "multiSelect",
                name: "multiSelect",
                label: "Multi Select",
                options: [{ label: "one" }, { label: "two" }, { label: "three" }],
              },
              {
                type: "date",
                name: "date",
                label: "Date",
              },
              {
                type: "time",
                name: "time",
                label: "Time",
              },
              {
                type: "textarea",
                name: "textarea",
                label: "Textarea",
              },
            ],
          },

          {
            type: "card",
            config: { style: { padding: 20 } },
            children: [
              {
                type: "title",
                name: "buttons",
                label: "Buttons",
                config: { level: 3, style: { color: "indigo" } },
              },

              {
                type: "divider",
                name: "buttonDivider",
                label: "Button Types",
                config: { orientation: "left", style: { margin: "30px 0" } },
              },
              {
                type: "grid",
                name: "componentGrid",
                config: { cols: 3, spans: [8, 8, 8], gutter: [20, 20] },
                children: [
                  {
                    type: "button",
                    label: "Primary Button",
                    config: { type: "primary" },
                  },
                  { type: "button", label: "Default Button", config: {} },
                  {
                    type: "button",
                    label: "Dashed Button",
                    config: { type: "dashed" },
                  },
                  { type: "button", label: "Text Button", config: { type: "text" } },
                  { type: "button", label: "Link Button", config: { type: "link" } },
                  {
                    type: "button",
                    label: "Danger Button",
                    config: { type: "primary", danger: true },
                  },
                  {
                    type: "button",
                    label: "Ghost Button",
                    config: { type: "primary", ghost: true },
                  },
                ],
              },

              {
                type: "divider",
                name: "radioButtonGroupDivider",
                label: "Radio Button Group",
                config: { orientation: "left", style: { margin: "30px 0" } },
              },
              {
                type: "radioButtonGroup",
                name: "radioButtonGroup",
                label: "Scoops of sugar (radioButtonGroup)",
                options: [{ label: "one" }, { label: "two" }, { label: "three" }],
              },

              {
                type: "divider",
                name: "radioGroupDivider",
                label: "Radio Group",
                config: { orientation: "left", style: { margin: "30px 0" } },
              },
              {
                type: "radioGroup",
                name: "RadioGroup",
                label: "Scoops of sugar (radioGroup)",
                options: [{ label: "one" }, { label: "two" }, { label: "three" }],
              },
              {
                type: "yesNoRadioGroup",
                name: "yesNoRadioGroup",
                label: "Have you voted? (yesNoRadioGroup)",
              },

              {
                type: "divider",
                name: "switchDivider",
                label: "Switch",
                config: { orientation: "left", style: { margin: "30px 0" } },
              },
              {
                type: "switch",
                name: "switch",
                label: "Enable refund program (switch)",
              },
            ],
          },

          {
            type: "card",
            config: { style: { padding: 20 } },
            children: [
              {
                type: "title",
                name: "checkboxes",
                label: "Checkboxes",
                config: { level: 3, style: { color: "indigo" } },
              },

              {
                type: "divider",
                name: "basicCheckboxDivider",
                label: "Basic Checkbox",
                config: { orientation: "left", style: { margin: "30px 0" } },
              },
              { type: "checkbox", name: "basicCheckbox", label: "Fudge topping" },

              {
                type: "divider",
                name: "checkboxGroupDivider",
                label: "Checkbox Group",
                config: { orientation: "left", style: { margin: "30px 0" } },
              },
              {
                type: "checkboxGroup",
                name: "checkboxGroup",
                options: ["one", "two", "three"],
              },

              {
                type: "divider",
                name: "checkAllDivider",
                label: "Check All",
                config: { orientation: "left", style: { margin: "30px 0" } },
              },

              { type: "checkbox", name: "checkAll", label: "Check All" },
              { type: "divider", name: "nakedDivider" },
              {
                type: "checkboxGroup",
                name: "checkAllGroup",
                options: ["one", "two", "three"],
              },

              {
                type: "divider",
                name: "checkboxWithGridDivider",
                label: "Use Checkbox with Grid",
                config: { orientation: "left", style: { margin: "30px 0" } },
              },
              {
                type: "grid",
                name: "checkboxGrid",
                config: { cols: 3, spans: [8, 8, 8], gutter: [10, 10] },
                children: [
                  { type: "checkbox", label: "one" },
                  { type: "checkbox", label: "two" },
                  { type: "checkbox", label: "three" },
                  { type: "checkbox", label: "four" },
                  { type: "checkbox", label: "five" },
                  { type: "checkbox", label: "six" },
                ],
              },
            ],
          },

          {
            type: "card",
            config: { style: { padding: 20 } },
            children: [
              {
                type: "title",
                name: "layout",
                label: "Layout",
                config: { level: 3, style: { color: "indigo" } },
              },

              {
                type: "divider",
                name: "verticalSpaceDivider",
                label: "Vertical Space",
                config: { orientation: "left", style: { margin: "30px 0" } },
              },
              { type: "verticalSpace", name: "verticalSpace", height: 30 },

              {
                type: "divider",
                name: "dividerDivider",
                label: "Divider (this is one)",
                config: { orientation: "left", style: { margin: "30px 0" } },
              },
              {
                type: "divider",
                name: "divider",
                label: "",
                config: { orientation: "left", style: { margin: "30px 0" } },
              },

              {
                type: "divider",
                name: "cardDivider",
                label: "Card",
                config: { orientation: "left", style: { margin: "30px 0" } },
              },
              {
                type: "card",
                name: "card",
                config: { style: { background: "wheat", padding: 20 } },
                children: [{ type: "input", name: "inputName", label: "Name" }],
              },

              {
                type: "divider",
                name: "inlineGroupDivider",
                label: "Inline Group",
                config: { orientation: "left", style: { margin: "30px 0" } },
              },
              {
                type: "inlineGroup",
                name: "inlineGroup",
                children: [
                  { type: "input", name: "input1", label: "First" },
                  { type: "input", name: "input2", label: "Last" },
                ],
              },

              {
                type: "divider",
                name: "inlineGroupRightDivider",
                label: "Inline Group Right",
                config: { orientation: "left", style: { margin: "30px 0" } },
              },
              {
                type: "inlineGroupRight",
                name: "inlineGroupRight",
                children: [
                  {
                    type: "button",
                    name: "revertButton",
                    name: "revertChangesButton",
                    config: {},
                    label: "Revert changes",
                  },
                  {
                    type: "button",
                    name: "saveButton",
                    name: "saveChangesButton",
                    config: { type: "primary" },
                    label: "Save changes",
                  },
                ],
              },

              {
                type: "divider",
                name: "gridDivider",
                label: "Grid",
                config: { orientation: "left", style: { margin: "30px 0" } },
              },

              {
                type: "grid",
                name: "grid",
                config: { cols: 3, spans: [8, 8, 8], gutter: [20, 20] },
                children: [
                  {
                    type: "card",
                    config: {
                      style: { background: "skyblue", padding: 20, borderRadius: 15 },
                    },
                    children: [],
                  },
                  {
                    type: "card",
                    config: {
                      style: { background: "skyblue", padding: 20, borderRadius: 15 },
                    },
                    children: [],
                  },
                  {
                    type: "card",
                    config: {
                      style: { background: "skyblue", padding: 20, borderRadius: 15 },
                    },
                    children: [],
                  },
                  {
                    type: "card",
                    config: {
                      style: { background: "skyblue", padding: 20, borderRadius: 15 },
                    },
                    children: [],
                  },
                  {
                    type: "card",
                    config: {
                      style: { background: "skyblue", padding: 20, borderRadius: 15 },
                    },
                    children: [],
                  },
                  {
                    type: "card",
                    config: {
                      style: { background: "skyblue", padding: 20, borderRadius: 15 },
                    },
                    children: [],
                  },
                ],
              },
            ],
          },

          {
            type: "card",
            config: { style: { padding: 20 } },
            children: [
              {
                type: "title",
                name: "moreLayout",
                label: "More Layout",
                config: { level: 3, style: { color: "indigo" } },
              },

              {
                type: "divider",
                name: "collapseDivider",
                label: "Collapse",
                config: { orientation: "left", style: { margin: "30px 0" } },
              },
              {
                type: "collapse",
                name: "collapse",
                config: { accordion: true },
                children: [
                  {
                    header: "Panel 1",
                    content: {
                      type: "card",
                      children: [{ type: "text", name: "panel1", label: "panel 1" }],
                    },
                  },
                  {
                    header: "Panel 2",
                    content: {
                      type: "card",
                      children: [{ type: "text", name: "panel2", label: "panel 2" }],
                    },
                  },
                  {
                    header: "Panel 3",
                    content: {
                      type: "card",
                      children: [{ type: "text", name: "panel3", label: "panel 3" }],
                    },
                  },
                ],
              },

              {
                type: "divider",
                name: "tabsDivider",
                label: "Tabs",
                config: { orientation: "left", style: { margin: "30px 0" } },
              },
              {
                type: "tabs",
                name: "tabsDemo",
                children: [
                  {
                    header: "Panel 1",
                    content: {
                      type: "card",
                      name: "tabsDemo-card1",
                      children: [{ type: "text", name: "tabsDemo-panel1", label: "panel 1" }],
                    },
                  },
                  {
                    header: "Panel 2",
                    content: {
                      type: "card",
                      name: "tabsDemo-card2",
                      children: [{ type: "text", name: "tabsDemo-panel2", label: "panel 2" }],
                    },
                  },
                  {
                    header: "Panel 3",
                    content: {
                      type: "card",
                      name: "tabsDemo-card3",
                      children: [{ type: "text", name: "tabsDemo-panel3", label: "panel 3" }],
                    },
                  },
                ],
              },

              {
                type: "divider",
                name: "verticalTabsDivider",
                label: "Vertical Tabs",
                config: { orientation: "left", style: { margin: "30px 0" } },
              },
              {
                type: "verticalTabs",
                name: "verticalTabs",
                children: [
                  {
                    header: "Panel 1",
                    content: {
                      type: "card",
                      name: "verticalTabs-card1",
                      children: [{ type: "text", name: "verticalTabs-panel1", label: "panel 1" }],
                    },
                  },
                  {
                    header: "Panel 2",
                    content: {
                      type: "card",
                      name: "verticalTabs-card2",
                      children: [{ type: "text", name: "verticalTabs-panel2", label: "panel 2" }],
                    },
                  },
                  {
                    header: "Panel 3",
                    content: {
                      type: "card",
                      name: "verticalTabs-card3",
                      children: [{ type: "text", name: "verticalTabs-panel3", label: "panel 3" }],
                    },
                  },
                ],
              },
            ],
          },

          {
            type: "card",
            style: { padding: 20 },
            children: [
              {
                type: "title",
                name: "titleImages",
                label: "Images",
                config: { level: 3, style: { color: "indigo" } },
              },

              {
                type: "divider",
                name: "imageDefaultDivider",
                label: "Image (default)",
                config: { orientation: "left", style: { margin: "30px 0" } },
              },
              {
                type: "image",
                name: "imageDefault",
                config: {
                  width: 100,
                  src: constants.imageUrl,
                },
              },

              {
                type: "divider",
                name: "imageFallbackDivider",
                label: "Image (configured fault tolerant)",
                config: { orientation: "left", style: { margin: "30px 0" } },
              },
              {
                type: "image",
                name: "imageFallback",
                config: {
                  width: 100,
                  src: "error",
                  fallback: constants.fallbackImage,
                },
              },

              {
                type: "divider",
                name: "imageProgressiveDivider",
                label: "Image (configured progressive loading)",
                config: { orientation: "left", style: { margin: "30px 0" } },
              },
              {
                type: "image",
                name: "imageProgressive",
                config: {
                  width: 100,
                  src: constants.progressiveImageUrl,
                  placeholderUrl: constants.previewImageUrl,
                },
              },

              {
                type: "divider",
                name: "imagePreviewDivider",
                label: "Image (configured preview image)",
                config: { orientation: "left", style: { margin: "30px 0" } },
              },
              {
                type: "image",
                name: "imagePreview",
                config: {
                  width: 100,
                  src: constants.previewImageUrl,
                  preview: { src: constants.imageUrl },
                },
              },

              {
                type: "divider",
                name: "imageGroupDivider",
                label: "Image Group (preview by default)",
                config: { orientation: "left", style: { margin: "30px 0" } },
              },
              {
                type: "imageGroup",
                name: "imageGroup",
                children: [
                  {
                    type: "image",
                    name: "image1",
                    config: { width: 100, src: constants.image1 },
                  },
                  {
                    type: "image",
                    name: "image2",
                    config: { width: 100, src: constants.image2 },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
