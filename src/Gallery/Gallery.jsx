import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";

export function Gallery() {
    return (
        <div id="gallery" className="w-screen h-auto overflow-x-hidden">
            <HeroParallax products={products} />;
        </div>
    )
}
export const products = [
    {
        title: "Moonbeam",
        link: "https://gomoonbeam.com",
        thumbnail:
            "https://photos.google.com/share/AF1QipONobALKl5PL_uQ6Fh0mD9bz5WVZCvvAheuu6itzBkX91MlvZYJCMNfk0SBdrcfqQ/photo/AF1QipMo_GnaT9MXrO_YezQ4dvtF7wSYmtoiJHezlMlK?key=QW1ENl9Ua2pmS19DdFRHVC1MUlF2VzJvTXF1S0RR",
    },
    {
        title: "Cursor",
        link: "https://cursor.so",
        thumbnail:
            "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "Rogue",
        link: "https://userogue.com",
        thumbnail:
            "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        title: "Editorially",
        link: "https://editorially.org",
        thumbnail:
            "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "Editrix AI",
        link: "https://editrix.ai",
        thumbnail:
            "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "Pixel Perfect",
        link: "https://app.pixelperfect.quest",
        thumbnail:
            "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        title: "Algochurn",
        link: "https://algochurn.com",
        thumbnail:
            "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "Aceternity UI",
        link: "https://ui.aceternity.com",
        thumbnail:
            "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "Tailwind Master Kit",
        link: "https://tailwindmasterkit.com",
        thumbnail:
            "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "SmartBridge",
        link: "https://smartbridgetech.com",
        thumbnail:
            "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "Renderwork Studio",
        link: "https://renderwork.studio",
        thumbnail:
            "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        title: "Creme Digital",
        link: "https://cremedigital.com",
        thumbnail:
            "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "Golden Bells Academy",
        link: "https://goldenbellsacademy.com",
        thumbnail:
            "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "Invoker Labs",
        link: "https://invoker.lol",
        thumbnail:
            "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "E Free Invoice",
        link: "https://efreeinvoice.com",
        thumbnail:
            "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
];
