"use client"

import { IconCloud } from "~/components/ui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "postgresql",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "sonarqube",
    "sentry",
    "expo"
  ];

export default function Cloud() {
    return (
        <IconCloud iconSlugs={slugs}/>
    )
}