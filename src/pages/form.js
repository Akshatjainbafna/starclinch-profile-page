import React from "react";
import FooterComponent from "../components/footer";
import FormComponent from "../components/form";
import NavbarComponent from "../components/navbar";
import TestimonialsComponent from "../components/testimonials";


export default function FormPage(){
    return (
        <>
        <NavbarComponent />
        <FormComponent />
        <TestimonialsComponent />
        <FooterComponent />
        </>
    )
}