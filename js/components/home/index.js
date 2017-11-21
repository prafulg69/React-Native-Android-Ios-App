const FBSDK = require('react-native-fbsdk');

import React, {Component} from 'react';
import { Image, View, StatusBar } from "react-native";
import { Container, Button, H3, Header, Title, Body, Left, Right } from "native-base";
import styles from "./styles";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';
const launchscreenBg = require("../../../img/launchscreen-bg.png");
const {LoginButton, ShareDialog} = FBSDK;

class Home extends Component {
  constructor(props) {
    super(props);
    const shareLinkContent = {
      contentType: 'link',
      contentUrl: 'https://www.facebook.com/',
    };

    this.state = {
      shareLinkContent: shareLinkContent,
    };
  }

  shareLinkWithShareDialog() {
    var tmp = this;
    ShareDialog.canShow(this.state.shareLinkContent)
      .then(function(canShow) {
        if (canShow) {
          return ShareDialog.show(tmp.state.shareLinkContent);
        }
      })
      .then(
        function(result) {
          if (result.isCancelled) {
            alert('Share cancelled');
          } else {
            alert('Share success');
          }
        },
        function(error) {
          alert('Share fail with error: ' + error);
        },
      );
  }

  render() {
    return (
    <Container>
				<StatusBar barStyle="light-content" />
				<Image source={launchscreenBg} style={styles.imageContainer}>
					
					<View
						style={{
							alignItems: "center",
							marginBottom: 50,
							backgroundColor: "transparent",
						}}
					>
						
					</View>
					<View style={{ marginBottom: 500 }}>
						<Button
							style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
							onPress={() => this.props.navigation.navigate("DrawerOpen")}
						>
							<Text>Enter</Text>
						</Button>
					</View>
					<View style={styles.container}>
                     <LoginButton />
                      <TouchableHighlight
                       style={styles.share}
                         onPress={this.shareLinkWithShareDialog.bind(this)}>
                          <Text style={styles.shareText}>Share link with ShareDialog</Text>
                          </TouchableHighlight>
                       </View>
                  </Image>
			</Container>
      
    );
  }
}


export default Home;