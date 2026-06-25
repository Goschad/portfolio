import mclovin from './../../../assets/img/mclovin.jpg'

import react from './../../../assets/icons/react_dark.svg'
import next from './../../../assets/icons/nextjs_icon_dark.svg'
import html from './../../../assets/icons/html5.svg'
import css from './../../../assets/icons/css.svg'
import tailwind from './../../../assets/icons/tailwindcss.svg'
import typescript from './../../../assets/icons/typescript.svg'
import javascript from './../../../assets/icons/javascript.svg'
import angular from './../../../assets/icons/angular.svg'
import nodejs from './../../../assets/icons/nodejs.svg'
import express from './../../../assets/icons/expressjs_dark.svg'
import sqlite from './../../../assets/icons/sqlite.svg'
import mongodb from './../../../assets/icons/mongodb-icon-dark.svg'
import mysql from './../../../assets/icons/mysql-icon-dark.svg'
import python from './../../../assets/icons/python.svg'
import c from './../../../assets/icons/c.svg'
import cpp from './../../../assets/icons/c-plusplus.svg'
import csharp from './../../../assets/icons/csharp.svg'
import fsharp from './../../../assets/icons/fsharp.svg'
import bash from './../../../assets/icons/bash_dark.svg'
import git from './../../../assets/icons/git.svg'
import docker from './../../../assets/icons/docker.svg'
import figma from './../../../assets/icons/figma.svg'
import photoshop from './../../../assets/icons/photoshop.svg'
import vegas from './../../../assets/icons/vegas_pro.svg'

export const portfolioData = {
    name: { first: 'Goschad', last: 'Marwen' },
    avatar: mclovin,
    avatar_alt: 'Photo de profil de Alex Dupont',
    avatarCaption: '/* me but not me, trust */',
    firstnameCaption: '/* pseudo, took me 3 minutes to come up with */',
    role: 'Student Developer',
    intro: 'Web & software dev. I build things that look good and work well.',
    availability: false,

    about: {
        text1: 'Software engineering student at 42 Mulhouse, 22 y/o based in France. I care about clean code, modern interfaces and attention to detail.',
        text2: 'I enjoy coding, solving problems and experimenting with new things. Always curious, always building.',
        stats: [
        { num: '42', label: 'School' },
        { num: '3+', label: 'Years coding' },
        { num: 'Hmm...', label: 'Did I mention I\'m looking for an apprenticeship ?' },
        { num: 'Languages', label: 'French / English' },
        ],
    },

    skillCategories: [
    {
        label: 'Frontend',
        skills: [
            { name: 'HTML', icon: html, level: 90 },
            { name: 'CSS', icon: css, level: 80 },
            { name: 'Tailwind', icon: tailwind, level: 80 },
            { name: 'React', icon: react, level: 75 },
            { name: 'TypeScript', icon: typescript, level: 70 },
            { name: 'JavaScript', icon: javascript, level: 70 },
            { name: 'Next.js', icon: next, level: 65 },
            { name: 'Angular', icon: angular, level: 60 },
        ],
    },
    {
        label: 'Backend',
        skills: [
            { name: 'Express', icon: express, level: 100 },
            { name: 'Node.js', icon: nodejs, level: 75 },
        ],
    },
    {
        label: 'Database',
        skills: [
            { name: 'SQLite', icon: sqlite, level: 80 },
            { name: 'MongoDB', icon: mongodb, level: 80 },
            { name: 'MySQL', icon: mysql, level: 60 },
        ],
    },
    {
        label: 'Languages',
        skills: [
        { name: 'C', icon: c, level: 80},
        { name: 'C++', icon: cpp, level: 80 },
        { name: 'Python', icon: python, level: 65 },
        { name: 'Bash', icon: bash, level: 65 },
        { name: 'C#', icon: csharp, level: 30 },
        { name: 'F#', icon: fsharp, level: 10 },
        ],
    },
    {
        label: 'Tools',
        skills: [
            { name: 'Git', icon: git, level: 50 },
            { name: 'Docker', icon: docker, level: 40 },
            { name: 'Vegas Pro', icon: vegas, level: 75 },
            { name: 'Figma', icon: figma, level: 50 },
            { name: 'Photoshop', icon: photoshop, level: 50 },
        ],
    },
    ],

    projects: [
    {
        num: '01',
        year: '2022 → today',
        title: '42 School Cursus',
        desc: 'Peer-to-peer coding school with no teachers. Projects range from low-level C (memory, processes, sockets) to C++ OOP, system administration, Docker, and full-stack web development. Everything is learned by doing and reviewing each other\'s code.',
        stack: ['C', 'C++', 'Web', 'Unix'],
        status: 'Mastery phase',
        github: null,
        demo: null,
        color: '#0d0d0d',
    },
    {
        num: '02',
        year: '2024 → 2025',
        title: 'AGE DIGITAL — Internship',
        desc: 'Built a full booking website autonomously with Next.js, React and Tailwind CSS. Integrated Stripe for payment processing, pixel-perfect UI/UX implementation, and custom back-end later migrated to a CMS.',
        stack: ['Next.js', 'TypeScript', 'React', 'Node.js', 'Stripe', 'Tailwind'],
        status: null,
        github: null,
        demo: null,
        color: '#111111',
    },
    {
        num: '03',
        year: '2024',
        title: 'Animal Shelter',
        desc: 'Full-stack web application for an animal shelter, featuring a Node.js back-end and React front-end with animal management and an admin interface for staff.',
        stack: ['React', 'Node.js', 'Express'],
        status: null,
        github: null,
        demo: null,
        color: '#1a1a1a',
    },
    {
        num: '04',
        year: '2026',
        title: 'Balatro Clone',
        desc: 'Partial recreation of the roguelike poker card game Balatro, built in Godot. Includes core card mechanics, hand scoring and basic deck management.',
        stack: ['Godot', 'GDScript'],
        status: 'In progress',
        github: null,
        demo: null,
        color: '#0a0a0a',
    },
    ],

    socials: [
        { label: 'GitHub', url: 'https://github.com/Goschad' },
    ],

    email: 'bouazamarwen.pro@gmail.com',
    footerYear: 2026,
}