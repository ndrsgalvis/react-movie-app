import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import {Tabs} from "expo-router";
import {icons} from "@/constants/icons";

const Saved = () => {
    return (
        <View
            className="bg-primary flex-1 px-10"
                >
                <View className="flex justify-center items-center flex-1 flex-col gap-5">
                <Image source={icons.save} className="size-10" tintColor="#fff" />
                <Text className="text-gray-500">Saved</Text>
        </View>
        </View>
    );
}

export default Saved;
const styles = StyleSheet.create({})