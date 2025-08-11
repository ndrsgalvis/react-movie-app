import {Image, ScrollView, Text, TextInput, View} from "react-native";
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";

interface Props {
    onPress?: () => void;
    onChangeText?: (text:string) => void;
    placeholder: string;
    value?: string;
}

export default function SearchBar({onPress, placeholder, value, onChangeText}:Props) {
    return (
        <View
            className="flex-row items-center bg-dark-200 rounded-full px-5 py-4"
        >
            <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#ab8bff" />
            <TextInput
                onPress={onPress}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor="#a8b5db"
                className="flex-1 ml-2 text-white"
            />
        </View>
    );
}
