import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text,
		 View, 
		 StyleSheet,
		 Button,
		 TextInput,
		 Image,
		 Dimensions,
		 ListView} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import MatIcon from 'react-native-vector-icons/MaterialIcons';

export default class CreateAccount extends Component {


  constructor(props) {
    super(props);
    this.state = { 
    	fname: "First",
    	lname: "Last",
    	email: "@email.com",
    	password: "Password",
    	confirm: "Confirm Password",
    	hidePass: false,
    	textColor: "gray",
		screenwidth: Dimensions.get('window').width};


  	}	

	static navigationOptions = {
		title: 'Sign Up',
	};

	_setPassword(password){
		this.state.textColor="black";
		this.setState({password});
		this.state.hidePass = true;
	}

	_showPassword(){
		this.state.hidePass = false;
		this.setState(this.state);
	}

	_hidePassword(){
		this.state.hidePass = true;
		this.setState(this.state);
	}	

	render() {
		const {navigate} = this.props.navigation;
		return (
			<View style={styles.container}>
			 <Image  style={{
        		  flex: 1,
        		  position: "absolute"
        		}}source={require('../pictures/hiking.jpg')}> 	
				
			</Image>



				<View style={styles.container}>
					<Text>Create an Account</Text>

					<View style={{flexDirection:"row",}}>
					<Icon style={styles.searchIcon} name="user" size={30} color="white" />
						<View style={{flex:1,}}>
							<TextInput
					        	style={{
									  justifyContent: 'flex-start', backgroundColor: "white", textAlign: "left", paddingLeft: 20, margin: 20,
									}}
					        	onChangeText={(fname) => this.setState({fname})}
					        	value={this.state.fname}
					        	selectTextOnFocus={true}
					      	/>
				      	</View>
				      	<View style={{flex:1}}>
							<TextInput
					        	style={{justifyContent: 'flex-end', backgroundColor: "white", textAlign: "left", paddingLeft: 20, margin: 20,
					        }}
					        	onChangeText={(lname) => this.setState({lname})}
					        	value={this.state.lname}
					        	selectTextOnFocus={true}
					      	/>
				      	</View>
			      	</View>

			    <View style={{flexDirection:"row",}}>
			    	<Icon style={styles.searchIcon} name="envelope" size={23} color="white" />
			      	<View style={{flex:1}}>
						<TextInput
				        	style={styles.textbox}
				        	onChangeText={(email) => this.setState({email})}
				        	value={this.state.email}
				        	selectTextOnFocus={true}
				      	/>
			      	</View>
		      	</View>

		      	<View style={{flexDirection:"row",}}>
		      		<Icon style={styles.searchIcon} name="lock" size={35} color="white" />
			      	<View style={{flex:1}}>
					<TextInput
			        	style={styles.textboxpass}
			        	onChangeText={(password) => {this._setPassword(password);}}
			        	value={this.state.password}
			        	selectTextOnFocus={true}
			        	secureTextEntry = {this.state.hidePass}
			      	/>
			      	</View>
		      	</View>

		      	<View style={{flexDirection:"row",}}>
		      		<Icon style={styles.searchIcon} name="lock" size={35} color="white" />
			      	<View style={{flex:1}}>
					<TextInput
			        	style={styles.textboxpass}
			        	onChangeText={(confirm) => this.setState({confirm})}
			        	value={this.state.confirm}
			        	selectTextOnFocus={true}
			        	secureTextEntry = {this.state.hidePass}
			      	/>
			      	</View>		
		      	</View>

		      	<View style={{margin: 20}}>
					<Icon.Button name="eye"  disabled={!this.state.hidePass} backgroundColor="#3b5998" onPressIn={() => {this._showPassword()}} onPressOut={() => {this._hidePassword()}}>
						Show Password
					</Icon.Button> 
				</View>

				<View style={{margin: 20}}>
				<Icon.Button name="user-plus" backgroundColor="#00ff66" onPress={() => navigate('Locations')}>
					Create
				</Icon.Button> 
				</View>

		      	</View>

			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },	

  textbox:{
  	height: 30,
  	backgroundColor: "white",
  	textAlign: "right",
  	paddingRight: 20,
  	margin: 20,
  	color: "gray"
  },

  textboxpass:{
  	height: 30,
  	backgroundColor: "white",
  	textAlign: "left",
  	paddingLeft: 20,
  	margin: 20, 
  	color: "gray"
  },  

searchIcon: {
    padding: 10,
    marginTop: 10,
},
});