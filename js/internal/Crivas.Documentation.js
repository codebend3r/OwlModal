
CS.documentation = {

    options: [
	    {
		    key: 'modalWidth',
		    defaultValue: 600,
		    type: 'Number',
		    description: 'The width of the modal window element.',
		    required: false
	    },
	    {
		    key: 'modalHeight',
		    defaultValue: 500,
		    type: 'Number',
		    description: 'The height of the modal window element.',
		    required: false
	    },
	    {
		    key: 'lightBoxOn',
		    defaultValue: 'true',
		    type: 'String',
		    description: 'Whether to show the lightbox when modal window is opened.',
		    required: false
	    },
	    {
		    key: 'clickAnywhereToClose',
		    defaultValue: 'false',
		    type: 'String',
		    description: 'Whether to close the modal window by clicking anywhere on screen.',
		    required: false
	    },
	    {
		    key: 'animationSpeed',
		    defaultValue: .6,
		    type: 'String',
		    description: 'The animation speed when opening and closing.',
		    required: false
	    },
        {
            key: 'showCloseButton',
            defaultValue: 'true',
            type: 'Boolean',
            description: 'Whether to show the x icon in the top right corner',
            required: false
        },
	    {
		    key: 'revealElements',
		    defaultValue: '[]',
		    type: 'String',
		    description: 'An array of JQuery selectors that will trigger the reveal event.',
		    required: false
	    },
	    {
		    key: 'hideElements',
		    defaultValue: '[]',
		    type: 'String',
            description: 'An array of JQuery selectors that will trigger the hide event.',
		    required: false
	    }


    ],
	
	events: [
		{
			eventName: 'Owl.event.OPENMODALCLICKED',
            constant: 'openmodalclicked',
			description: 'Triggered when the modal is opened.',
			eventParams: []
		},
		{
			eventName: 'Owl.event.CLOSEMODALCLICKED',
            constant: 'closemodalclicked',
			description: 'Triggered when the modal is closed.',
			eventParams: []
		},
		{
			eventName: 'Owl.event.OPENMODALSTARTED',
            constant: 'openmodalstarted',
			description: 'Triggered when the modal open animation has started.',
			eventParams: []
		},
		{
			eventName: 'Owl.event.OPENMODALCOMPLETE',
            constant: 'openmodalcomplete',
			description: 'Triggered when the modal open animation has completed.',
			eventParams: []
		},
		{
			eventName: 'Owl.event.CLOSEMODALSTARTED',
            constant: 'closemodalstarted',
			description: 'Triggered when the modal close animation has started.',
			eventParams: []
		},
		{
			eventName: 'Owl.event.CLOSEMODALCOMPLETE',
            constant: 'closemodalcomplete',
			description: 'Triggered when the modal close animation has completed.',
			eventParams: []
		}
	]

};