// _name is case sensitive & directly correlated to the page designers expected input

const themeColors = [
    { value: "", label: "Select one ..." },
    { value: "primary", label: "Primary" },
    { value: "secondary", label: "Secondary" },
    { value: "accent", label: "Accent" },
    { value: "neutral", label: "Neutral" },
    { value: "base-100", label: "Base-100" },
    { value: "info", label: "Info" },
    { value: "success", label: "Success" },
    { value: "warning", label: "Warning" },
    { value: "error", label: "Error" },
  ];

const componentList = {
    headers: [
        {
            _name: 'heroText',
            _displayName: 'Hero Text',
            _settings: [
                {
                    name: "contentPosition",
                    label: "Content position",
                    disabled: false,
                    toolTip: "Where should the content be positioned inside the component?",
                    type: "dropDown",
                    value: "",
                    options: [
                        {
                            value: "",
                            label: "Select one ...",
                        },
                        {
                            value: "middle-center",
                            label: "Dead Center",
                        },
                        {
                            value: "left-top",
                            label: "Left Top",
                        },
                        {
                            value: "center-top",
                            label: "Center Top",
                        },
                        {
                            value: "right-top",
                            label: "Right Top",
                        },
                        {
                            value: "left-middle",
                            label: "Left Middle",
                        },
                        {
                            value: "center-middle",
                            label: "Center Middle",
                        },
                        {
                            value: "right-middle",
                            label: "Right Middle",
                        },
                        {
                            value: "left-bottom",
                            label: "Left Bottom",
                        },
                        {
                            value: "center-bottom",
                            label: "Center Bottom",
                        },
                        {
                            value: "right-bottom",
                            label: "Right Bottom",
                        },
                    ]
                },
                {
                    name: "headerTitle",
                    label: "Header title",
                    toolTip: "The title of the component",
                    type: "input",
                    value: "",
                },
                {
                    name: "titleContent",
                    label: "Title Content",
                    toolTip: "The text that is shown beneath the title",
                    type: "textarea",
                    value: "",
                },
                {
                    name: "button",
                    label: "Button enabled?",
                    toolTip: "Controls the display of the button on the component",
                    type: "bool",
                    value: true,
                },
                {
                    name: "buttonText",
                    label: "Button text",
                    toolTip: "The text that goes inside the button",
                    type: "input",
                    value: "",
                },
                {
                    name: "link",
                    label: "Link",
                    toolTip: "The link associated with the component",
                    type: "input",
                    value: "",
                },
                {
                    name: "textColor",
                    label: "Text color",
                    toolTip: "The color of the text",
                    type: "dropDown",
                    value: "",
                    options: themeColors
                },
                {
                    name: "buttonColor",
                    label: "Button color",
                    toolTip: "The color of the button",
                    type: "dropDown",
                    value: "",
                    options: themeColors
                },
                {
                    name: "backgroundColor",
                    label: "Background color",
                    toolTip: "The background color of the component",
                    type: "dropDown",
                    value: "",
                    options: themeColors
                },
            ]
            
        },
        {
            _name: 'heroOverlay',
            _displayName: 'Hero Overlay',
            _settings: [
                {
                    name: "opacity",
                    label: "Opacity",
                    toolTip: "The opacity of the element",
                    type: "input",
                    value: "",
                },
                {
                    name: "image",
                    label: "Image",
                    toolTip: "The image associated with the element",
                    type: "input",
                    value: "",
                },
                {
                    name: "headerTitle",
                    label: "Header title",
                    toolTip: "The title of the element",
                    type: "input",
                    value: "",
                },
                {
                    name: "titleContent",
                    label: "Title Content",
                    toolTip: "The text shown beneath the title",
                    type: "input",
                    value: "",
                },
                {
                    name: "buttonText",
                    label: "Button text",
                    toolTip: "The text that goes inside the button",
                    type: "input",
                    value: "",
                },
                {
                    name: "link",
                    label: "Link",
                    toolTip: "The link associated with the element",
                    type: "input",
                    value: "",
                },
                {
                    name: "textColor",
                    label: "Text color",
                    toolTip: "The color of the text",
                    type: "input",
                    value: "",
                },
                {
                    name: "buttonColor",
                    label: "Button color",
                    toolTip: "The color of the button",
                    type: "input",
                    value: "",
                },
                {
                    name: "backgroundColor",
                    label: "Background color",
                    toolTip: "The background color of the element",
                    type: "input",
                    value: "",
                },
            ]            
        },

    ],
    content: [    
        {
        _name: 'sectionText',
        _displayName: 'Text section',
        _settings: [
            {
                name: "contentPosition",
                label: "Content position",
                toolTip: "Where should the content be positioned?",
                type: "input",
                value: "",
            },
            {
                name: "preview",
                label: "Preview",
                toolTip: "The preview of the content",
                type: "input",
                value: "",
            },
            {
                name: "headerTitle",
                label: "Header title",
                toolTip: "The title of the header",
                type: "input",
                value: "",
            },
            {
                name: "titleContent",
                label: "Title Content",
                toolTip: "The content shown beneath the title",
                type: "input",
                value: "",
            },
            {
                name: "enableButton",
                label: "Enable button?",
                toolTip: "Controls the display of the button",
                type: "bool",
                value: false,
            },
            {
                name: "buttonText",
                label: "Button text",
                toolTip: "The text inside the button",
                type: "input",
                value: "",
            },
            {
                name: "link",
                label: "Link",
                toolTip: "The link associated",
                type: "input",
                value: "",
            },
            {
                name: "textColor",
                label: "Text color",
                toolTip: "The color of the text",
                type: "input",
                value: "",
            },
            {
                name: "buttonColor",
                label: "Button color",
                toolTip: "The color of the button",
                type: "input",
                value: "",
            },
            {
                name: "backgroundColor",
                label: "Background color",
                toolTip: "The background color",
                type: "input",
                value: "",
            },
        ]
        
    },
],
}


export default componentList