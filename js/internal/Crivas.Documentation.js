
CS.documentation = {

    options: [
		{
			key: 'closeElement',
			defaultValue: 'null',
			type: 'String',
			description: 'N/A',
			required: false
		},
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
		    defaultValue: 'true',
		    type: 'String',
		    description: 'Whether to close the modal window by clicking outside the modal window.',
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
		    key: 'revealWhenClicked',
		    defaultValue: '[]',
		    type: 'String',
		    description: 'N/A',
		    required: false
	    },
	    {
		    key: 'hideWhenClicked',
		    defaultValue: '[]',
		    type: 'String',
		    description: 'N/A',
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