// _name is case sensitive & directly correlated to the page designers expected input

const componentList = {
    headers: [
        {
            _name: 'heroText',
            _displayName: 'Hero Text',
            _settings: {
                contentPosition: {
                    type: "string",
                    value: "",
                },
                headerTitle: "",
                titleContent: "",
                buttonText: "",
                link: "",
                textColor: "",
                buttonColor: "",
                backgroundColor: "",
            }
        },
        {
            _name: 'heroOverlay',
            _displayName: 'Hero Overlay',
            _settings: {
                preview: "",
                opacity: "",
                image: "",
                headerTitle: "",
                titleContent: "",
                buttonText: "",
                link: "",
                textColor: "",
                buttonColor: "",
                backgroundColor: "",
            }
        },

    ],
    content: [    
        {
        _name: 'sectionText',
        _displayName: 'Text section',
        _settings: {
            contentPosition: "",
            preview: "",
            headerTitle: "",
            titleContent: "",
            enableButton: false,
            buttonText: "",
            link: "",
            textColor: "",
            buttonColor: "",
            backgroundColor: ""
        }
    },
],
}


export default componentList