import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import * as React from 'react';
import Button from 'material-ui/Button';
import Props from './signedOutView.props';
import Style from './signedOutView.style';
import State from './signedOutView.state';
import Input from 'material-ui/Input';
import SwipeableViews from 'react-swipeable-views';
import Paper from 'material-ui/Paper';

export default class extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			currentIndex: 0
		}
	}

	public render() {
		return (<SwipeableViews axis='x' index={ 0 }
			style={ Style.mainContainer(this.props.containerSize) }>
			<main style={ Object.assign({},
				Style.mainContainer(this.props.containerSize),
				Style.contentContainer)}>Please login</main>
		</SwipeableViews>);
	}
}