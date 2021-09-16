import { constants } from "../../data/constants";

const get = {
  json: (data) => ({ type: "json", data: { ...data, config: { ...data.config } } }),

  text: (label, type = "") => {
    return typeof type === "object"
      ? { type: "text", label, config: { ...type } }
      : { type: "text", label, config: { type } };
  },

  title: (label, level = 3) => ({ type: "title", label, config: { level } }),

  pageHeader: (label) => ({ type: "pageHeader", config: { title: label } }),

  button: (label, type = "") => ({ type: "button", label, config: { type } }),

  demoGrid: (spans, obj) => {
    return get.grid(spans, [0, 0], [obj, get.json(obj)]);
  },

  radioButtonGroup: (label, options) => ({
    type: "radioButtonGroup",
    label,
    config: {},
    options,
  }),

  radioGroup: (label, options) => ({
    type: "radioGroup",
    label,
    config: {},
    options,
  }),

  yesNoRadioGroup: (label) => ({
    type: "yesNoRadioGroup",
    label,
  }),

  switch: (label) => ({
    type: "switch",
    label,
  }),

  checkbox: (label) => ({
    type: "checkbox",
    label,
  }),

  checkboxGroup: (label, options) => ({
    type: "checkboxGroup",
    label,
    options,
  }),

  input: (label, config) => ({
    type: "input",
    label,
    config,
  }),

  search: (label) => ({
    type: "search",
    label,
  }),

  select: (label, options) => ({
    type: "select",
    label,
    options,
  }),

  multiSelect: (label, options) => ({
    type: "multiSelect",
    label,
    options,
  }),

  textArea: (label) => ({
    type: "textArea",
    label,
  }),

  date: (label) => ({
    type: "date",
    label,
  }),

  time: (label) => ({
    type: "time",
    label,
  }),

  divider: () => ({
    type: "divider",
  }),

  verticalSpace: (height) => ({
    type: "verticalSpace",
    height,
  }),

  card: (config, children) => ({
    type: "card",
    config,
    children,
  }),

  collapse: (config, children) => ({
    type: "collapse",
    config,
    children,
  }),

  tabs: (children) => ({
    type: "tabs",
    children,
  }),

  verticalTabs: (children) => ({
    type: "verticalTabs",
    children,
  }),

  inlineGroup: (children) => ({
    type: "inlineGroup",
    children,
  }),

  inlineGroupRight: (children) => ({
    type: "inlineGroupRight",
    children,
  }),

  grid: (spans, gutter, children) => ({
    type: "grid",
    config: { cols: spans.length, spans, gutter },
    children,
  }),

  image: (config) => ({
    type: "image",
    config,
  }),

  imageGroup: (children) => ({
    type: "imageGroup",
    children,
  }),
};

export const data = {
  menu: [
    {
      title: "Data Components",
      menuItems: [
        "text",
        "title",
        "pageHeader",
        "button",
        "radioButtonGroup",
        "radioGroup",
        "yesNoRadioGroup",
        "switch",
        "checkbox",
        "checkboxGroup",
        "input",
        "search",
        "select",
        "multiSelect",
        "textArea",
        "date",
        "time",
        "arrayOfValues",
        "arrayOfObjects",
      ],
    },
    {
      title: "Layout Components",
      menuItems: [
        "divider",
        "verticalSpace",
        "card",
        "collapse",
        "tabs",
        "verticalTabs",
        "inlineGroup",
        "inlineGroupRight",
        "grid",
        "image",
        "imageGroup",
      ],
    },
    {
      title: "Complete Examples",
      menuItems: ["example1", "example2", "example3", "example4"],
    },
  ],
  pages: {
    text: {
      fields: [
        get.title("Text"),
        get.demoGrid([4, 20], get.text("default", "")),
        get.demoGrid([4, 20], get.text("secondary", "secondary")),
        get.demoGrid([4, 20], get.text("success", "success")),
        get.demoGrid([4, 20], get.text("warning", "warning")),
        get.demoGrid([4, 20], get.text("danger", "danger")),
        get.demoGrid([4, 20], get.text("disabled", { disabled: true })),
        get.demoGrid([4, 20], get.text("mark", { mark: true })),
        get.demoGrid([4, 20], get.text("code", { code: true })),
        get.demoGrid([4, 20], get.text("keyboard", { keyboard: true })),
        get.demoGrid([4, 20], get.text("underline", { underline: true })),
        get.demoGrid([4, 20], get.text("delete", { delete: true })),
        get.demoGrid([4, 20], get.text("strong", { strong: true })),
        get.demoGrid([4, 20], get.text("italic", { italic: true })),
      ],
    },

    title: {
      fields: [
        get.title("Title", 1),
        get.demoGrid([8, 16], get.title("Level1", 1)),
        get.demoGrid([8, 16], get.title("Level2", 2)),
        get.demoGrid([8, 16], get.title("Level3", 3)),
        get.demoGrid([8, 16], get.title("Level4", 4)),
        get.demoGrid([8, 16], get.title("Level5", 5)),
      ],
    },

    pageHeader: {
      fields: [
        get.title("Page Header"),
        get.demoGrid([12, 12], get.pageHeader("Account Management")),
      ],
    },

    button: {
      fields: [
        get.title("Button"),
        get.demoGrid([4, 20], get.button("Primary", "primary")),
        get.demoGrid([4, 20], get.button("Default")),
        get.demoGrid([4, 20], get.button("Dashed", "dashed")),
        get.demoGrid([4, 20], get.button("Text", "text")),
        get.demoGrid([4, 20], get.button("Link", "link")),
      ],
    },

    radioButtonGroup: {
      fields: [
        get.title("Radio Button Group"),
        get.radioButtonGroup("Project", [
          { label: "alpha" },
          { label: "bravo" },
          { label: "charlie" },
        ]),
        get.json(
          get.radioButtonGroup("Project", [
            { label: "alpha" },
            { label: "bravo" },
            { label: "charlie" },
          ])
        ),
      ],
    },

    radioGroup: {
      fields: [
        get.title("Radio Group"),
        get.radioGroup("Project", [{ label: "alpha" }, { label: "bravo" }, { label: "charlie" }]),
        get.json(
          get.radioGroup("Project", [{ label: "alpha" }, { label: "bravo" }, { label: "charlie" }])
        ),
      ],
    },

    yesNoRadioGroup: {
      fields: [
        get.title("Yes No Radio Group"),
        get.yesNoRadioGroup("Project"),
        get.json(get.yesNoRadioGroup("Project")),
      ],
    },

    switch: {
      fields: [get.title("Switch"), get.switch("Project"), get.json(get.switch("Project"))],
    },

    checkbox: {
      fields: [
        get.title("Checkbox"),
        get.checkbox("Use email to communicate"),
        get.json(get.checkbox("Use email to communicate")),
      ],
    },

    checkboxGroup: {
      fields: [
        get.title("Checkbox Group"),
        get.checkboxGroup("Colors", ["red", "white", "blue"]),
        get.json(get.checkboxGroup("Colors", ["red", "white", "blue"])),
      ],
    },

    input: {
      fields: [
        get.title("Input"),
        get.input("Text Field", { type: "text" }),
        get.json(get.input("Text Field", { type: "text" })),
        get.input("Number Field", { type: "number" }),
        get.json(get.input("Number Field", { type: "number" })),
      ],
    },

    search: {
      fields: [get.title("Search"), get.search("Search"), get.json(get.search("Search"))],
    },

    select: {
      fields: [
        get.title("Select"),
        get.select("Select President", [{ label: "Biden" }, { label: "Trump" }]),
        get.json(get.select("Select President", [{ label: "Biden" }, { label: "Trump" }])),
      ],
    },

    multiSelect: {
      fields: [
        get.title("Multi Select"),
        get.multiSelect("Select President", [{ label: "Biden" }, { label: "Trump" }]),
        get.json(get.multiSelect("Select President", [{ label: "Biden" }, { label: "Trump" }])),
      ],
    },

    textArea: {
      fields: [get.title("Text Area"), get.textArea("Comment"), get.json(get.textArea("Comment"))],
    },

    date: {
      fields: [get.title("Date"), get.date("Start Date"), get.json(get.date("Start Date"))],
    },

    time: {
      fields: [get.title("Time"), get.time("Start Time"), get.json(get.time("Start Time"))],
    },

    arrayOfValues: { fields: [get.title("Array of Values")] },

    arrayOfObjects: { fields: [get.title("Array of Objects")] },

    divider: {
      fields: [get.title("Divider"), get.divider(), get.json(get.divider())],
    },

    verticalSpace: {
      fields: [
        get.title("Vertical Space"),
        get.divider(),
        get.verticalSpace(50),
        get.divider(),
        get.json(get.verticalSpace(50)),
      ],
    },

    card: {
      fields: [
        get.title("Card"),
        get.card({ style: { background: "pink", padding: 20, paddingBottom: 0 } }, [
          get.input("First name"),
          get.input("Last name"),
        ]),
        get.json(
          get.card({ style: { background: "pink", padding: 20, paddingBottom: 0 } }, [
            get.input("First name"),
            get.input("Last name"),
          ])
        ),
      ],
    },

    collapse: {
      fields: [
        get.title("Collapse"),
        get.collapse({ accordion: true }, [
          { header: "One", content: get.input("First name") },
          { header: "Two", content: get.input("First name") },
        ]),
        get.json(
          get.collapse({ accordion: true }, [
            { header: "One", content: get.input("First name") },
            { header: "Two", content: get.input("First name") },
          ])
        ),
      ],
    },

    tabs: {
      fields: [
        get.title("Tabs"),
        get.tabs([
          { header: "One", content: get.text("One") },
          { header: "Two", content: get.text("Two") },
        ]),
        get.json(
          get.tabs([
            { header: "One", content: get.text("One") },
            { header: "Two", content: get.text("Two") },
          ])
        ),
      ],
    },

    verticalTabs: {
      fields: [
        get.title("Vertical Tabs"),
        get.verticalTabs([
          { header: "One", content: get.text("One") },
          { header: "Two", content: get.text("Two") },
        ]),
        get.json(
          get.verticalTabs([
            { header: "One", content: get.text("One") },
            { header: "Two", content: get.text("Two") },
          ])
        ),
      ],
    },

    inlineGroup: {
      fields: [
        get.title("Inline Group"),
        get.inlineGroup([get.button("One"), get.button("Two")]),
        get.json(get.inlineGroup([get.button("One"), get.button("Two")])),
      ],
    },

    inlineGroupRight: {
      fields: [
        get.title("Inline Group Right"),
        get.inlineGroupRight([get.button("One"), get.button("Two")]),
        get.json(get.inlineGroupRight([get.button("One"), get.button("Two")])),
      ],
    },

    grid: {
      fields: [
        get.title("Grid"),
        get.grid(
          [8, 8, 8],
          [20, 20],
          [
            get.card({ style: { background: "skyblue", height: 40, borderRadius: 20 } }, []),
            get.card({ style: { background: "skyblue", height: 40, borderRadius: 20 } }, []),
            get.card({ style: { background: "skyblue", height: 40, borderRadius: 20 } }, []),
            get.card({ style: { background: "skyblue", height: 40, borderRadius: 20 } }, []),
            get.card({ style: { background: "skyblue", height: 40, borderRadius: 20 } }, []),
            get.card({ style: { background: "skyblue", height: 40, borderRadius: 20 } }, []),
            get.card({ style: { background: "skyblue", height: 40, borderRadius: 20 } }, []),
            get.card({ style: { background: "skyblue", height: 40, borderRadius: 20 } }, []),
            get.card({ style: { background: "skyblue", height: 40, borderRadius: 20 } }, []),
          ]
        ),
        get.json(
          get.grid(
            [8, 8, 8],
            [20, 20],
            [
              get.card({ style: { background: "skyblue", height: 40, borderRadius: 20 } }, []),
              get.card({ style: { background: "skyblue", height: 40, borderRadius: 20 } }, []),
              get.card({ style: { background: "skyblue", height: 40, borderRadius: 20 } }, []),
              get.card({ style: { background: "skyblue", height: 40, borderRadius: 20 } }, []),
              get.card({ style: { background: "skyblue", height: 40, borderRadius: 20 } }, []),
              get.card({ style: { background: "skyblue", height: 40, borderRadius: 20 } }, []),
              get.card({ style: { background: "skyblue", height: 40, borderRadius: 20 } }, []),
              get.card({ style: { background: "skyblue", height: 40, borderRadius: 20 } }, []),
              get.card({ style: { background: "skyblue", height: 40, borderRadius: 20 } }, []),
            ]
          )
        ),
      ],
    },

    image: {
      fields: [
        get.title("Image"),
        get.title("Image default", 5),
        get.demoGrid([8, 16], get.image({ width: 100, src: constants.imageUrl })),
        get.title("Image fallback", 5),
        get.demoGrid(
          [8, 16],
          get.image({ width: 100, src: "error", fallback: constants.fallbackImage })
        ),
        get.title("Image progressive", 5),
        get.demoGrid(
          [8, 16],
          get.image({
            width: 100,
            src: constants.progressiveImageUrl,
            placeholderUrl: constants.previewImageUrl,
          })
        ),
        get.title("Image preview", 5),
        get.demoGrid(
          [8, 16],
          get.image({
            width: 100,
            src: constants.previewImageUrl,
            preview: { src: constants.imageUrl },
          })
        ),
      ],
    },

    imageGroup: {
      fields: [
        get.title("Image Group"),

        get.demoGrid(
          [8, 16],
          get.imageGroup([
            get.image({ width: 100, src: constants.image1 }),
            get.image({ width: 100, src: constants.image2 }),
          ])
        ),
      ],
    },

    example1: { fields: [get.title("Example1")] },
    example2: { fields: [get.title("Example2")] },
    example3: { fields: [get.title("Example3")] },
    example4: { fields: [get.title("Example4")] },
  },
};
