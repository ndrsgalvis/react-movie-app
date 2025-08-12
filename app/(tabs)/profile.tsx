import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import {Tabs} from "expo-router";
import {icons} from "@/constants/icons";

const Profile = () => {
    return (
        <View
            className="bg-primary flex-1 px-10"
        >
            <View className="flex justify-center items-center flex-1 flex-col gap-5">
                <Image source={icons.person} className="size-10" tintColor="#fff" />
                <Text className="text-gray-500">Profile</Text>
            </View>
        </View>
    );
}

export default Profile;
const styles = StyleSheet.create({})