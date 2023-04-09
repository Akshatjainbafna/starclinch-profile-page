import React from "react";
import FooterComponent from "../components/footer";
import NavbarComponent from "../components/navbar";
import ProfileComponent from "../components/profile";
import RecommendationComponent from "../components/recommendation";


export default function ProfilePage(){
    return (
        <>
        <NavbarComponent />
        <ProfileComponent />
        <RecommendationComponent />
        <FooterComponent />
        </>
    )
}