{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const btn = document.querySelector(".navToggle");\
const nav = document.querySelector("#siteNav");\
const year = document.querySelector("#year");\
\
year.textContent = new Date().getFullYear();\
\
btn.addEventListener("click", () => \{\
  const open = nav.classList.toggle("isOpen");\
  btn.setAttribute("aria-expanded", String(open));\
\});\
\
// Close drawer when a nav link is clicked (mobile)\
nav.addEventListener("click", (e) => \{\
  const a = e.target.closest("a");\
  if (!a) return;\
  if (window.matchMedia("(max-width: 860px)").matches) \{\
    nav.classList.remove("isOpen");\
    btn.setAttribute("aria-expanded", "false");\
  \}\
\});\
}