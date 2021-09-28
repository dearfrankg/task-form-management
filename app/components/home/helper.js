import { constants } from "../../data/constants";

const get = {
  json: data => ({
    type: "json",
    data: { ...data, config: { ...data.config } }
  }),

  grid: (name, spans, gutter, children) => ({
    type: "grid",
    name,
    config: { cols: spans.length, spans, gutter },
    children
  }),

  title: (label, level = 3) => ({ type: "title", label, config: { level } }),

  pre: (label, config) => ({ type: "pre", label, config }),

  demoComponent: obj => {
    return get.grid("demo", [12, 12], [0, 0], [obj, get.json(obj)]);
  },

  demoFormComponent: obj => {
    return get.grid(
      "demo",
      [24],
      [0, 0],
      [obj, get.json(obj), get.showFields("fields")]
    );
  },

  showFields: label => ({
    type: "showFields",
    label
  }),

  text: (name, label, type = "") => {
    // when object populate config object with text type
    return typeof type === "object"
      ? { type: "text", name, label, config: { ...type } }
      : { type: "text", name, label, config: { type } };
  },

  pageHeader: (name, label) => ({
    type: "pageHeader",
    name,
    config: { title: label }
  }),

  button: (name, label, type = "") => ({
    type: "button",
    name,
    label,
    config: { type }
  }),

  radioButtonGroup: (name, label, options) => ({
    type: "radioButtonGroup",
    name,
    label,
    config: {},
    options
  }),

  radioGroup: (name, label, options) => ({
    type: "radioGroup",
    name,
    label,
    config: {},
    options
  }),

  yesNoRadioGroup: (name, label) => ({
    type: "yesNoRadioGroup",
    name,
    label
  }),

  switch: (name, label) => ({
    type: "switch",
    name,
    label
  }),

  checkbox: (name, label) => ({
    type: "checkbox",
    name,
    label
  }),

  checkboxGroup: (name, label, options) => ({
    type: "checkboxGroup",
    name,
    label,
    options
  }),

  input: (name, label, config) => ({
    type: "input",
    name,
    label,
    config
  }),

  search: (name, label) => ({
    type: "search",
    name,
    label
  }),

  select: (name, label, options, config = {}) => ({
    type: "select",
    name,
    label,
    options,
    config
  }),

  multiSelect: (name, label, options) => ({
    type: "multiSelect",
    name,
    label,
    options
  }),

  textArea: (name, label) => ({
    type: "textArea",
    name,
    label
  }),

  date: (name, label) => ({
    type: "date",
    name,
    label
  }),

  time: (name, label) => ({
    type: "time",
    name,
    label
  }),

  divider: () => ({
    type: "divider"
  }),

  verticalSpace: height => ({
    type: "verticalSpace",
    height
  }),

  card: (config, children) => ({
    type: "card",
    config,
    children
  }),

  collapse: (config, children) => ({
    type: "collapse",
    config,
    children
  }),

  tabs: children => ({
    type: "tabs",
    children
  }),

  verticalTabs: children => ({
    type: "verticalTabs",
    children
  }),

  inline: children => ({
    type: "inline",
    children
  }),

  inlineGroup: children => ({
    type: "inlineGroup",
    children
  }),

  inlineGroupRight: children => ({
    type: "inlineGroupRight",
    children
  }),

  image: (name, config) => ({
    type: "image",
    name,
    config
  }),

  imageGroup: (name, children) => ({
    type: "imageGroup",
    name,
    children
  }),

  arrayOfValues: (name, label, config) => ({
    type: "arrayOfValues",
    name,
    label,
    config
  }),

  arrayOfObjects: (name, config, children) => ({
    type: "arrayOfObjects",
    name,
    config,
    children
  }),

  conditional: (
    name,
    shouldUpdate,
    condition,
    children,
    whenCondition = ""
  ) => ({
    type: "conditional",
    name,
    shouldUpdate,
    condition,
    children,
    whenCondition
  }),

  arrayOfObjectExperimental: (name, config, children) => ({
    type: "arrayOfObjects",
    name,
    config,
    children
  })
};

export const data = {
  menu: [
    {
      title: "Basic data entry",
      menuItems: [
        "title",
        "text",
        "pageHeader",
        "button",
        "radioButtonGroup",
        "radioGroup",
        "yesNoRadioGroup",
        "switch",
        "checkbox",
        "checkboxGroup",
        "inputText",
        "inputNumber",
        "search",
        "select",
        "multiSelect",
        "textArea",
        "date",
        "time"
      ]
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
        "grid"
      ]
    },
    {
      title: "Special components",
      menuItems: [
        "showFields",
        "image",
        "imageGroup",
        "arrayOfValues",
        "arrayOfObjects",
        "conditional"
      ]
    },
    {
      title: "Complete Examples",
      menuItems: ["example1", "example2"]
    }
  ],
  pages: {
    title: {
      fields: [
        get.title("Title", 1),
        get.demoComponent(get.title("Level1", 1)),
        get.demoComponent(get.title("Level2", 2)),
        get.demoComponent(get.title("Level3", 3)),
        get.demoComponent(get.title("Level4", 4)),
        get.demoComponent(get.title("Level5", 5))
      ]
    },

    text: {
      fields: [
        get.title("Text"),
        get.demoComponent(get.text("text", "default", "")),
        get.demoComponent(get.text("text", "secondary", "secondary")),
        get.demoComponent(get.text("text", "success", "success")),
        get.demoComponent(get.text("text", "warning", "warning")),
        get.demoComponent(get.text("text", "danger", "danger")),
        get.demoComponent(get.text("text", "disabled", { disabled: true })),
        get.demoComponent(get.text("text", "mark", { mark: true })),
        get.demoComponent(get.text("text", "code", { code: true })),
        get.demoComponent(get.text("text", "keyboard", { keyboard: true })),
        get.demoComponent(get.text("text", "underline", { underline: true })),
        get.demoComponent(get.text("text", "delete", { delete: true })),
        get.demoComponent(get.text("text", "strong", { strong: true })),
        get.demoComponent(get.text("text", "italic", { italic: true }))
      ]
    },

    pageHeader: {
      fields: [
        get.title("Page Header"),
        get.demoComponent(get.pageHeader("pageHeader", "Account Management"))
      ]
    },

    button: {
      fields: [
        get.title("Button"),
        get.demoComponent(get.button("button1", "Primary", "primary")),
        get.demoComponent(get.button("button2", "Default")),
        get.demoComponent(get.button("button3", "Dashed", "dashed")),
        get.demoComponent(get.button("button4", "Text", "text")),
        get.demoComponent(get.button("button5", "Link", "link"))
      ]
    },

    radioButtonGroup: {
      fields: [
        get.title("Radio Button Group"),
        get.demoFormComponent(
          get.radioButtonGroup("projectButtonGroup", "Project", [
            { label: "alpha" },
            { label: "bravo" },
            { label: "charlie" }
          ])
        )
      ]
    },

    radioGroup: {
      fields: [
        get.title("Radio Group"),
        get.demoFormComponent(
          get.radioGroup("projectRadioGroup", "Project", [
            { label: "alpha" },
            { label: "bravo" },
            { label: "charlie" }
          ])
        )
      ]
    },

    yesNoRadioGroup: {
      fields: [
        get.title("Yes No Radio Group"),
        get.demoFormComponent(
          get.yesNoRadioGroup("projectYesNoRadioGroup", "Project")
        )
      ]
    },

    switch: {
      fields: [
        get.title("Switch"),
        get.demoFormComponent(get.switch("projectSwitch", "Project"))
      ]
    },

    checkbox: {
      fields: [
        get.title("Checkbox"),
        get.demoFormComponent(
          get.checkbox("checkbox", "Use email to communicate")
        )
      ]
    },

    checkboxGroup: {
      fields: [
        get.title("Checkbox Group"),
        get.demoFormComponent(
          get.checkboxGroup("colorsCheckboxGroup", "Colors", [
            "red",
            "white",
            "blue"
          ])
        )
      ]
    },

    inputText: {
      fields: [
        get.title("Input (text)"),
        get.demoFormComponent(
          get.input("inputText", "Text Field", { type: "text" })
        )
      ]
    },

    inputNumber: {
      fields: [
        get.title("Input (number)"),
        get.demoFormComponent(
          get.input("inputNumber", "Number Field", { type: "number" })
        )
      ]
    },

    search: {
      fields: [
        get.title("Search"),
        get.demoFormComponent(get.search("search", "Search"))
      ]
    },

    select: {
      fields: [
        get.title("Select"),
        get.demoFormComponent(
          get.select(
            "president",
            "Select President",
            [{ label: "Biden" }, { label: "Trump" }],
            { allowClear: true }
          )
        )
      ]
    },

    multiSelect: {
      fields: [
        get.title("Multi Select"),
        get.demoFormComponent(
          get.multiSelect("president", "Select President", [
            { label: "Biden" },
            { label: "Trump" }
          ])
        )
      ]
    },

    textArea: {
      fields: [
        get.title("Text Area"),
        get.demoFormComponent(get.textArea("comment", "Comment"))
      ]
    },

    date: {
      fields: [
        get.title("Date"),
        get.demoFormComponent(get.date("startDate", "Start Date"))
      ]
    },

    time: {
      fields: [
        get.title("Time"),
        get.demoFormComponent(get.time("startTime", "Start Time"))
      ]
    },

    divider: {
      fields: [get.title("Divider"), get.divider(), get.json(get.divider())]
    },

    verticalSpace: {
      fields: [
        get.title("Vertical Space"),
        get.divider(),
        get.verticalSpace(50),
        get.divider(),
        get.json(get.verticalSpace(50))
      ]
    },

    card: (() => {
      const content = [
        get.input("one", "One"),
        get.input("two", "Two"),
        get.input("three", "Three")
      ];
      const card = get.card(
        { style: { background: "pink", padding: 20, paddingBottom: 0 } },
        content
      );

      return {
        fields: [get.title("Card"), get.demoFormComponent(card)]
      };
    })(),

    collapse: (() => {
      const content = [0, 1].map(num => {
        return [
          get.input(["events", num, "one"], "One"),
          get.input(["events", num, "two"], "Two"),
          get.input(["events", num, "three"], "Three")
        ];
      });
      const collapse = get.collapse({ accordion: true }, [
        { header: "one", content: content[0] },
        { header: "one", content: content[1] }
      ]);

      return {
        fields: [get.title("Collapse"), get.demoFormComponent(collapse)]
      };
    })(),

    tabs: (() => {
      const content1 = [
        get.input("one", "One"),
        get.input("two", "Two"),
        get.input("three", "Three")
      ];
      const content2 = [
        get.input("four", "Four"),
        get.input("five", "Five"),
        get.input("six", "Six")
      ];
      const tabs = get.tabs([
        { header: "One", content: content1 },
        { header: "Two", content: content2 }
      ]);

      return {
        fields: [get.title("Collapse"), get.demoFormComponent(tabs)]
      };
    })(),

    verticalTabs: (() => {
      const content1 = [
        get.input("one", "One"),
        get.input("two", "Two"),
        get.input("three", "Three")
      ];
      const content2 = [
        get.input("four", "Four"),
        get.input("five", "Five"),
        get.input("six", "Six")
      ];
      const tabs = get.verticalTabs([
        { header: "One", content: content1 },
        { header: "Two", content: content2 }
      ]);

      return {
        fields: [get.title("Collapse"), get.demoFormComponent(tabs)]
      };
    })(),

    inlineGroup: (() => {
      const buttons = get.inlineGroup([
        get.button("one", "One"),
        get.button("two", "Two")
      ]);
      return {
        fields: [get.title("Inline Group"), buttons, get.json(buttons)]
      };
    })(),

    inlineGroupRight: (() => {
      const buttons = get.inlineGroupRight([
        get.button("one", "One"),
        get.button("two", "Two")
      ]);

      return {
        fields: [get.title("Inline Group Right"), buttons, get.json(buttons)]
      };
    })(),

    grid: (() => {
      const cell = get.card(
        {
          style: {
            background: "skyblue",
            height: 40,
            borderRadius: 20
          }
        },
        []
      );
      const grid = get.grid(
        "grid",
        [8, 8, 8],
        [20, 20],
        [cell, cell, cell, cell, cell, cell, cell, cell, cell]
      );

      return {
        fields: [get.title("Grid"), get.demoFormComponent(grid)]
      };
    })(),

    showFields: {
      fields: [get.title("Show Fields"), get.showFields("Fields")]
    },

    image: {
      fields: [
        get.title("Image"),
        get.title("Image default", 5),
        get.demoComponent(
          get.image("image1", { width: 100, src: constants.imageUrl })
        ),
        get.title("Image fallback", 5),
        get.demoComponent(
          get.image("image1", {
            width: 100,
            src: "error",
            fallback: constants.fallbackImage
          })
        ),
        get.title("Image progressive", 5),
        get.demoComponent(
          get.image("image1", {
            width: 100,
            src: constants.progressiveImageUrl,
            placeholderUrl: constants.previewImageUrl
          })
        ),
        get.title("Image preview", 5),
        get.demoComponent(
          get.image("image1", {
            width: 100,
            src: constants.previewImageUrl,
            preview: { src: constants.imageUrl }
          })
        )
      ]
    },

    imageGroup: {
      fields: [
        get.title("Image Group"),
        get.demoComponent(
          get.imageGroup("group1", [
            get.image("image1", { width: 100, src: constants.image1 }),
            get.image("image2", { width: 100, src: constants.image2 })
          ])
        )
      ]
    },

    arrayOfValues: {
      fields: [
        get.title("Array of Values"),
        get.demoFormComponent(
          get.arrayOfValues("zipCodes", "Regular delivery catchment zipcodes", {
            style: { width: 200 }
          })
        )
      ]
    },

    arrayOfObjects: {
      fields: [
        get.title("Array of Objects"),
        get.demoFormComponent(
          get.arrayOfObjects("events", { accordion: "true" }, [
            get.input("name", "Name"),
            get.input("address", "Address"),
            get.inline([get.input("one", "One"), get.input("two", "Two")])
          ])
        )
      ]
    },

    conditional: (() => {
      const conditional = get.conditional(
        "conditional",
        "myUpdateFn",
        "myConditionFn",
        [
          get.input("addressLine2", "Address line 2"),
          get.input("addressLine3", "Address line 3")
        ]
      );

      const instructions = `

NOTE:

- You do not need to include config or form properties

- The shouldUpdate property is optional

DESCRIPTION

A requirement for the feature was that it use JSON format.
Since it requires functions we will pass a 'aux' object to RenderForm
and reference the functions by name.

here the aux object being added to formConfig:

  const formConfig = {
    fields: data.pages[page].fields,
    aux: data.aux[page],
    ...

which gets passed to RenderForm:

  <RenderForm formConfig={formConfig} />

In this case our aux object contains:

    {
      myUpdateFn: (prevValues, curValues) =>
        prevValues.addressLine1 !== curValues.addressLine1,

      myConditionFn: ({ getFieldValue }) =>
        getFieldValue("addressLine1") === "more"
    }

Note in this case for the myConditionFn function 'getFieldValue'
gets extracted from form.  form contains many functions that you can extract.
See antd form api docs.

      `;

      return {
        fields: [
          get.title("Conditional"),
          get.input("addressLine1", "Address line 1 (type the word more)"),
          get.demoFormComponent(conditional),
          get.pre(instructions, { style: { fontSize: "0.7rem" } })
        ]
      };
    })(),

    example1: (() => {
      const select = get.select(
        "services",
        "Services",
        [{ label: "Bakery" }, { label: "Tires" }],
        { allowClear: true }
      );
      const conditional = get.conditional(
        "conditional",
        "myUpdateFn",
        "myConditionFn",
        [
          get.inlineGroup([
            get.date("startdate", "Start date"),
            get.time("startTime", "Start time")
          ])
        ]
      );

      return {
        fields: [
          get.title("Conditional with select"),
          select,
          conditional,
          get.grid(
            "grid1",
            [12, 12],
            [0, 0],
            [
              get.showFields(),
              get.grid(
                "grid2",
                [24],
                [0, 0],
                [get.json(select), get.json(conditional)]
              )
            ]
          )
        ]
      };
    })(),

    example2: (() => {
      /*
         GAME PLAN 

            1. multi-select 
              - controls add/remove of services
            2. condition 
                - shouldUpdate
                  - when services multi-select changes
                - condition
                  - when services array is not empty
                - whenCondition 
                  - populate services collection with only name
                  - this does not overwrite existing data 
                  - render arrayOfObjects without add/remove buttons

      */

      const comment = `
    {
      myUpdateFn: (prevValues, curValues) =>
        prevValues.services !== curValues.services,

      myConditionFn: ({ getFieldValue }) => !!getFieldValue("services"),

      myWhenConditionFn: ({ getFieldValue }, RenderField) => {
        const services = getFieldValue("services");
        console.log("services: ", services);

        return services.map((serviceName, serviceIndex) => {
          const child = get.grid(
            "serviceGrid",
            [6, 6, 6, 6],
            [0, 0],
            [
              { type: "text", label: serviceName },
              { type: "date", name: '{serviceName}-startDate' },
              { type: "time", name: '{serviceName}-endDate' }
            ]
          );

          return <RenderField key={serviceIndex} item={child} />;
        });
      }
    }
    `;

      const select = get.multiSelect(
        "services",
        "Services",
        [
          { label: "Optometrist" },
          { label: "Hearing Aids" },
          { label: "Bakery" },
          { label: "Tires" },
          { label: "Pharmacy" }
        ],
        { allowClear: true }
      );

      const conditional = get.conditional(
        "conditional",
        "myUpdateFn",
        "myConditionFn",
        [
          get.inlineGroup([
            get.date("startdate", "Start date"),
            get.time("startTime", "Start time")
          ])
        ],
        "myWhenConditionFn"
      );

      const aux = {
        type: "pre",
        label: comment,
        config: { style: { fontSize: "0.7rem" } }
      };

      return {
        fields: [
          get.title("Array of possibilities"),
          select,
          conditional,
          get.showFields(),
          aux,

          get.grid(
            "grid1",
            [12, 12],
            [0, 0],
            [
              get.grid(
                "grid2",
                [24],
                [0, 0],
                [get.json(select), get.json(conditional)]
              )
            ]
          )
        ]
      };
    })()
  },
  aux: {
    conditional: {
      myUpdateFn: (prevValues, curValues) =>
        prevValues.addressLine1 !== curValues.addressLine1,

      myConditionFn: ({ getFieldValue }) =>
        getFieldValue("addressLine1") === "more"
    },
    example1: {
      myUpdateFn: (prevValues, curValues) =>
        prevValues.services !== curValues.services,

      myConditionFn: ({ getFieldValue }) => !!getFieldValue("services")
    },
    example2: {
      myUpdateFn: (prevValues, curValues) =>
        prevValues.services !== curValues.services,

      myConditionFn: ({ getFieldValue }) => !!getFieldValue("services"),

      myWhenConditionFn: ({ getFieldValue }, RenderField) => {
        const services = getFieldValue("services");
        console.log("services: ", services);

        return services.map((serviceName, serviceIndex) => {
          const child = get.grid(
            "serviceGrid",
            [6, 6, 6, 6],
            [0, 0],
            [
              { type: "text", label: serviceName },
              { type: "date", name: `${serviceName}-startDate` },
              { type: "time", name: `${serviceName}-endDate` }
            ]
          );

          return <RenderField key={serviceIndex} item={child} />;
        });
      }
    }
  },
  initialValues: {
    showFields: {
      events: [{ name: "Jazz Festival" }, { name: "Cherry blossom Festival" }]
    },
    radioButtonGroup: {
      projectButtonGroup: "alpha"
    },
    arrayOfValues: ["95123", "95138"],
    arrayOfObjects: {
      events: [{ name: "Jazz Festival" }, { name: "Cherry blossom Festival" }]
    }
  }
};
