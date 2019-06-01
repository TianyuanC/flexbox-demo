import React from "react";
import { View } from "react-native";

export default class App extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1
                }}
            >
                <View
                    style={{
                        flex: 2,
                        flexDirection: "row",
                        borderColor: "black",
                        borderWidth: "5px"
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            borderColor: "black",
                            borderWidth: "5px"
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                borderColor: "black",
                                borderWidth: "5px"
                            }}
                        />
                        <View
                            style={{
                                flex: 1,
                                borderColor: "black",
                                borderWidth: "5px"
                            }}
                        />
                    </View>
                    <View
                        style={{
                            flex: 3,
                            backgroundColor: "red",
                            borderColor: "black",
                            borderWidth: "5px"
                        }}
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        borderColor: "black",
                        borderWidth: "5px"
                    }}
                >
                    <View
                        style={{
                            flex: 2,
                            backgroundColor: "blue",
                            borderColor: "black",
                            borderWidth: "5px"
                        }}
                    />
                    <View
                        style={{
                            flex: 5,
                            borderColor: "black",
                            borderWidth: "5px"
                        }}
                    />
                    <View
                        style={{
                            flex: 1,
                            borderColor: "black",
                            borderWidth: "5px"
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                borderColor: "black",
                                borderWidth: "5px"
                            }}
                        />
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: "yellow",
                                borderColor: "black",
                                borderWidth: "5px"
                            }}
                        />
                    </View>
                </View>
            </View>
        );
    }
}
