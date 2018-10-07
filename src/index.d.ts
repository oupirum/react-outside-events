import * as React from 'react';

export interface OutsideEventsProps {
	on: {
		[eventName: string]: (event: any) => void;
	};
}

declare class OutsideEvents extends React.Component<OutsideEventsProps> {}

export {OutsideEvents};
