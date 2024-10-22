"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Particles as Particless } from "~/components/ui/particles";


export const Particles = () => {
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");
    
    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#000000");
    }, [theme]);

    return (
        <Particless className="absolute inset-0" quantity={1000} ease={80} color={color} refresh />
    )
}