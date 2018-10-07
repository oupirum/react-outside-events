import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class OutsideEvents extends React.Component {
	componentDidMount() {
		const events = Object.keys(this.props.on);
		events.forEach((eventName) => {
			document.addEventListener(eventName, this._handleEvent, false);
		});
	}

	componentWillUnmount() {
		const events = Object.keys(this.props.on);
		events.forEach((eventName) => {
			document.removeEventListener(eventName, this._handleEvent, false);
		});
	}

	render() {
		return this.props.children;
	}

	_handleEvent = (event) => {
		const element = ReactDOM.findDOMNode(this);
		if (
			this._isChild(event.target, document.body)
			&& event.target !== element
			&& !this._isChild(event.target, element)
		) {
			const handler = this.props.on[event.type];
			handler(event);
		}
	}

	_isChild(node, ancestor) {
		if (node.parentElement) {
			if (node.parentElement === ancestor) {
				return true;
			}
			return this._isChild(node.parentElement, ancestor);
		}
		return false;
	}
}
