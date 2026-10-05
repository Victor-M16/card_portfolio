import type { ImageMetadata } from "astro";
import html from "@/assets/tech/html.png";
import docker from "@/assets/tech/docker.png";
import django from "@/assets/tech/django.png";
import python from "@/assets/tech/python.png";
import typescript from "@/assets/tech/typescript.png";
import reactjs from "@/assets/tech/reactjs.png";
import tailwind from "@/assets/tech/tailwind.png";
import git from "@/assets/tech/git.png";
import postgresql from "@/assets/tech/postgresql.png";
import csharp from "@/assets/tech/csharp.png";
import nextjs from "@/assets/tech/nextjs.png";

export interface Technology {
  name: string;
  icon: ImageMetadata;
}

export const technologies: Technology[] = [
  { name: "HTML 5", icon: html },
  { name: "Docker", icon: docker },
  { name: "Django", icon: django },
  { name: "Python", icon: python },
  { name: "TypeScript", icon: typescript },
  { name: "React", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Git", icon: git },
  { name: "PostgreSQL", icon: postgresql },
  { name: "C#", icon: csharp },
  { name: "Next.js", icon: nextjs },
];
