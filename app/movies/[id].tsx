import React from 'react';
import {StyleSheet, Text, View, Button, ScrollView, Image, TouchableOpacity} from 'react-native';
import {useLocalSearchParams, router} from "expo-router";
import useFetch from "@/services/useFetch";
import {fetchMovieDetails} from "@/services/api";
import {icons} from "@/constants/icons";

interface movieInfoProps{
    label: string;
    value?: string | number | null;
}

const MovieInfo = ({label, value}: movieInfoProps) => (
    <View className="flex-col items-start justify-center mx-5">
        <Text className="text-light-200 font-bold text-sm mt-4">{label}</Text>
        <Text className="text-white font-normal text-sm mt-2">{value || 'N/A'}</Text>
    </View>
)


const MovieDetails = () => {
        const {id} = useLocalSearchParams();
        const {data: movie, loading } = useFetch(()=> fetchMovieDetails(id as string));

        return (
            <View className="bg-primary flex-1">
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                    paddingBottom: 80
                    }}
                >
                    <View className="flex-col items-start">
                        <Image
                            className="w-full h-[550px]"
                            resizeMode="stretch"
                            source={{uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`}}/>

                        <View className="flex-col items-start justify-center mt-5 px-5">
                            <Text className="text-white font-bold text-xl">{movie?.title}</Text>
                            <View className="flex-row items-center gap-x-1 mt-2">
                                <Text className="text-light-200 text-sm">{movie?.release_date.split('-')[0]}</Text>
                                <Text className="text-light-200 text-sm">{movie?.runtime}m</Text>
                            </View>
                        </View>


                        <View className="flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2 ml-4">
                            <Image source={icons.star}/>
                            <Text className="text-white font-bold text-sm"> {Math.round(movie?.vote_average ?? 0)}/10 </Text>
                            <Text className="text-light-200 font-bold text-sm">( {movie?.vote_count} votes )</Text>
                        </View>

                        <MovieInfo label="Overview" value={movie?.overview}/>
                        <MovieInfo label="Genres" value={movie?.genres.map((g) => g.name).join(' - ') || 'N/A'} />

                        <View className="flex flex-row justify-between w-1/2">
                            <MovieInfo label="Budget" value={`$${(movie?.budget || 0) / 1_000_000} million`}/>
                            <MovieInfo label="Revenue" value={`$${(movie?.revenue || 0) / 1_000_000}`}/>
                        </View>

                        <MovieInfo label="Production Companies" value={movie?.production_companies.map((c)=>c.name).join(' - ') || 'N/A'} />
                    </View>
                </ScrollView>

                <TouchableOpacity
                    onPress={router.back}
                    className="absolute bottom-5 left-0 right-0 mx-5 bg-accent rounded-lg py-3.5 flex flex-row items-center justify-center z-50">
                    <Image source={icons.arrow} className="size-5 mr-1 mt-0.5 rotate-180" tintColor="#fff"/>
                    <Text className="text-white font-bold text-base">Go back</Text>
                </TouchableOpacity>


            </View>
        );
}

export default MovieDetails;
const styles = StyleSheet.create({})