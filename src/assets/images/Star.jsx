// import * as React from "react"

import { memo } from "react"

const Star = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    xmlSpace="preserve"
    {...props}
  >
    <switch>
      <g>
        <linearGradient
          id="a"
          gradientUnits="userSpaceOnUse"
          x1={8}
          y1={11.9}
          x2={56}
          y2={52.1}
        >
          <stop offset={0} stopColor="#FFF" />
          <stop offset={0.1} stopColor="#E7E8E6" />
          <stop offset={0.1} stopColor="#CDD0D0" />
          <stop offset={0.2} stopColor="#B5BBBD" />
          <stop offset={0.2} stopColor="#A5ACAF" />
          <stop offset={0.3} stopColor="#9BA3A7" />
          <stop offset={0.3} stopColor="#98A0A4" />
          <stop offset={0.4} stopColor="#828A8F" />
          <stop offset={0.5} stopColor="#667075" />
          <stop offset={0.6} stopColor="#535C63" />
          <stop offset={0.7} stopColor="#475158" />
          <stop offset={0.8} stopColor="#434D54" />
          <stop offset={1} stopColor="#475157" />
        </linearGradient>
        <path
          fill="url(#a)"
          d="M63.3 32c0 17.3-14 31.3-31.3 31.3S.7 49.3.7 32 14.7.7 32 .7s31.3 14 31.3 31.3zM32 2.6C15.7 2.6 2.6 15.7 2.6 32c0 16.3 13.2 29.4 29.4 29.4 16.3 0 29.4-13.2 29.4-29.4C61.4 15.7 48.3 2.6 32 2.6z"
        />
        <linearGradient
          id="b"
          gradientUnits="userSpaceOnUse"
          x1={9.5}
          y1={13.1}
          x2={54.5}
          y2={50.9}
        >
          <stop offset={0} stopColor="#0B1F2A" />
          <stop offset={0.2} stopColor="#333F47" />
          <stop offset={0.5} stopColor="#777F84" />
          <stop offset={0.5} stopColor="#81898D" />
          <stop offset={0.7} stopColor="#B3B8B8" />
          <stop offset={0.8} stopColor="#D2D5D3" />
          <stop offset={0.8} stopColor="#DEE0DD" />
          <stop offset={1} stopColor="#FBFBFB" />
        </linearGradient>
        <path
          fill="url(#b)"
          d="M32 2.6C15.7 2.6 2.6 15.7 2.6 32c0 16.3 13.2 29.4 29.4 29.4 16.3 0 29.4-13.2 29.4-29.4C61.4 15.7 48.3 2.6 32 2.6zm0 56.9C16.8 59.5 4.5 47.2 4.5 32S16.8 4.5 32 4.5 59.5 16.8 59.5 32 47.2 59.5 32 59.5z"
        />
        <linearGradient
          id="c"
          gradientUnits="userSpaceOnUse"
          x1={2374.7}
          y1={772.9}
          x2={2396.6}
          y2={833.1}
          gradientTransform="rotate(180 1208.836 417.504)"
        >
          <stop offset={0} stopColor="#E1E3E1" />
          <stop
            offset={0.1}
            style={{
              stopColor: "#c1c5c4",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={0.3}
            style={{
              stopColor: "#9ba1a2",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={0.5}
            style={{
              stopColor: "#7d8487",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={0.7}
            style={{
              stopColor: "#687074",
              stopOpacity: 0,
            }}
          />
          <stop
            offset={0.8}
            style={{
              stopColor: "#5b6469",
              stopOpacity: 0,
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: "#576065",
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <path
          opacity={0.4}
          fill="url(#c)"
          d="M32 63.3c17.3 0 31.3-14 31.3-31.3S49.3.7 32 .7.7 14.7.7 32s14 31.3 31.3 31.3zM32 0c17.6 0 32 14.4 32 32S49.6 64 32 64 0 49.6 0 32 14.4 0 32 0z"
        />
        <path
          fill="#FFF"
          d="M2.2 32.1C2.2 15.7 15.5 2.2 32 2.2s29.8 13.4 29.8 29.9c0 16.4-13.3 29.7-29.8 29.7S2.2 48.5 2.2 32.1zm9.3-20.6c-5.3 5.3-8.6 12.6-8.6 20.6 0 8 3.3 15.3 8.5 20.5 5.3 5.2 12.6 8.5 20.6 8.5 8 0 15.3-3.2 20.5-8.5 5.3-5.2 8.5-12.5 8.5-20.5s-3.3-15.3-8.5-20.6C47.3 6.2 40 2.9 32 2.9s-15.3 3.3-20.5 8.6z"
        />
        <linearGradient
          id="d"
          gradientUnits="userSpaceOnUse"
          x1={18.2}
          y1={8.1}
          x2={45.8}
          y2={55.9}
        >
          <stop offset={0} stopColor="#E1E3E1" />
          <stop
            offset={0.1}
            style={{
              stopColor: "#c1c5c4",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={0.3}
            style={{
              stopColor: "#9ba1a2",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={0.5}
            style={{
              stopColor: "#7d8487",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={0.7}
            style={{
              stopColor: "#687074",
              stopOpacity: 0,
            }}
          />
          <stop
            offset={0.8}
            style={{
              stopColor: "#5b6469",
              stopOpacity: 0,
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: "#576065",
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <path
          opacity={0.4}
          fill="url(#d)"
          d="M32 59.6c-7.4 0-14.3-2.9-19.5-8.1C7.3 46.3 4.4 39.4 4.4 32s2.9-14.3 8.1-19.5C17.7 7.3 24.6 4.4 32 4.4s14.3 2.9 19.5 8.1c5.2 5.2 8.1 12.1 8.1 19.5s-2.9 14.3-8.1 19.5c-5.2 5.2-12.1 8.1-19.5 8.1zm0-.8c7.1 0 13.9-2.8 18.9-7.8 5.1-5.1 7.8-11.8 7.8-18.9 0-7.1-2.8-13.9-7.8-18.9C45.8 8.1 39.1 5.4 32 5.4c-7.1 0-13.9 2.8-18.9 7.8C8 18.1 5.2 24.9 5.2 32c0 7.1 2.8 13.9 7.8 18.9 5.1 5.1 11.9 7.9 19 7.9z"
        />
        <path
          fill="#FFF"
          d="M56.3 45c-.5-.4-19.8-15.7-19.8-15.7L32 3.6c-.3.1-.7.4-.9.8l-3.2 25L8 44.7s-.4.5-.6.8c-.1.2-.1.5-.1.8l24.6-10.1 24.6 10.1c.2-.5 0-1-.2-1.3z"
        />
        <path
          fill="#565F64"
          d="m32.2 32.8-.2 4.6 22.6 9.1c.8.4 1.4.2 2-.2L32.5 32.7c-.1-.1-.3 0-.3.1z"
        />
        <linearGradient
          id="e"
          gradientUnits="userSpaceOnUse"
          x1={44.5}
          y1={39.4}
          x2={42.8}
          y2={42.2}
        >
          <stop offset={0} stopColor="#27343C" />
          <stop
            offset={1}
            style={{
              stopColor: "#00111e",
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <path
          fill="url(#e)"
          d="M32.2 32.8s1.3 2.3 2.8 3.9c2.1 2.3 4.9 3.9 4.9 3.9l14.7 5.9c.8.4 1.4.2 2-.2L32.5 32.7c-.1-.1-.3 0-.3.1z"
        />
        <path
          fill="#A4AAAE"
          fillOpacity={0.6}
          d="M56.5 45.4c0-.1-.1-.2-.2-.4L35.7 29.9l-2.8 1.8s.2.1.3 0c.3-.1.9-.2 1.5 0 .5.2 21.8 13.8 21.8 13.8v-.1z"
        />
        <path
          fill="#333E46"
          d="M55.8 44.5 36.6 29.3l-.9.6 20.6 15.2c-.1-.2-.3-.4-.5-.6z"
        />
        <path
          fill="#565F64"
          d="m32.5 31.3-.1.1s0 .2.2.1c.1-.1 3-1.6 4-2.2l-3.5-24c-.1-.9-.5-1.3-1.2-1.6l.4 27.8.2-.2z"
        />
        <path
          fill="#A4AAAE"
          fillOpacity={0.6}
          d="M30.8 5.3v1.3l-2.2 22.1c0 .3.1.6.4.8l1.3 1 .9-24.4.1-1.9c-.3.2-.4.6-.5 1.1zM29.6 30.9l-1.2-1L8.1 44.6s-.6.4-.7.8l.7-.4 21.3-13.4c.4-.2.5-.4.2-.7z"
        />
        <path
          fill="#565F64"
          d="M31.7 32.8c0-.1-.1-.2-.2-.1L7.3 46.4c.6.4 1.2.5 2 .2l22.6-9.1-.2-4.7z"
        />
        <linearGradient
          id="f"
          gradientUnits="userSpaceOnUse"
          x1={39.6}
          y1={29.1}
          x2={36.8}
          y2={24.6}
        >
          <stop
            offset={0.1}
            style={{
              stopColor: "#02131f",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={0.9}
            style={{
              stopColor: "#02131f",
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <path
          fill="url(#f)"
          d="m32.4 31.4.1-.1-.1.1s0 .1.1.1h.1c.1-.1 3-1.6 4-2.2l-.4-2.9-3.1-21.1c0-.4-.1-.7-.3-.9 0 0 1.5 20.2 1.5 22.4 0 2.9-1.9 4.6-1.9 4.6z"
        />
        <linearGradient
          id="g"
          gradientUnits="userSpaceOnUse"
          x1={32}
          y1={36.4}
          x2={27.8}
          y2={37.6}
        >
          <stop
            offset={0.2}
            style={{
              stopColor: "#02131f",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={0.9}
            style={{
              stopColor: "#02131f",
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <path
          fill="url(#g)"
          fillOpacity={0.8}
          d="M31.7 32.8c0-.1-.1-.2-.2-.1L7.3 46.4c.6.4 1.2.5 2 .2l22.6-9.1-.2-4.7z"
        />
        <linearGradient
          id="h"
          gradientUnits="userSpaceOnUse"
          x1={20.8}
          y1={41.9}
          x2={20.2}
          y2={40.4}
        >
          <stop
            offset={0}
            style={{
              stopColor: "#02131f",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={0.1}
            style={{
              stopColor: "#02131f",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: "#02131f",
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <path
          opacity={0.8}
          fill="url(#h)"
          d="m9.3 46.5 22.6-9.1-.2-4.4c-.4 1.2-1.1 2.5-3 3.5-1.4.8-14.8 7.4-19.6 9.7-.3.2-.7.3-.9.4.4.2.7.1 1.1-.1z"
        />
        <linearGradient
          id="i"
          gradientUnits="userSpaceOnUse"
          x1={35.6}
          y1={17.2}
          x2={32.2}
          y2={17.6}
        >
          <stop
            offset={0.3}
            style={{
              stopColor: "#02131f",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={0.3}
            style={{
              stopColor: "#02131f",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={0.8}
            style={{
              stopColor: "#02131f",
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <path
          fill="url(#i)"
          d="m32.5 31.3-.1.1s0 .2.2.1c.1-.1 3-1.6 4-2.2l-3.5-24c-.1-.9-.5-1.3-1.2-1.6l.4 27.8.2-.2z"
        />
        <linearGradient
          id="j"
          gradientUnits="userSpaceOnUse"
          x1={35.7}
          y1={17.1}
          x2={33.4}
          y2={17.4}
        >
          <stop offset={0.4} stopColor="#27343C" />
          <stop
            offset={1}
            style={{
              stopColor: "#3b474e",
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <path
          fill="url(#j)"
          d="m32.5 31.3-.1.1s0 .2.2.1c.1-.1 3-1.6 4-2.2l-3.5-24c-.1-.9-.5-1.3-1.2-1.6l.4 27.8.2-.2z"
        />
        <linearGradient
          id="k"
          gradientUnits="userSpaceOnUse"
          x1={-0.4}
          y1={32.9}
          x2={27.5}
          y2={49}
        >
          <stop
            offset={0}
            style={{
              stopColor: "#24303a",
              stopOpacity: 0,
            }}
          />
          <stop
            offset={0}
            style={{
              stopColor: "#25323b",
              stopOpacity: 0,
            }}
          />
          <stop offset={0.1} stopColor="#27343C" />
        </linearGradient>
        <path
          fill="url(#k)"
          d="M5.1 44.4C4.4 42.8.4 35 4.8 20H3.1c-.9 3-1.6 4.8-2 7.5 0 0-.2 1-.3 2.1C.7 30.7.7 31.3.7 32c0 6 1.5 9.5 1.5 9.5 1.6 5 4.4 9.5 8.2 12.9 3.3 2.9 8.4 5.1 12.6 5.9-.7-.1-12.7-5.2-17.9-15.9z"
        />
        <linearGradient
          id="l"
          gradientUnits="userSpaceOnUse"
          x1={32}
          y1={37.4}
          x2={32}
          y2={32.6}
        >
          <stop offset={0.3} stopColor="#A5ABAF" />
          <stop
            offset={1}
            style={{
              stopColor: "#a5abaf",
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <path
          fill="url(#l)"
          d="M32.4 32.6h-.9c.1 0 .2 0 .2.1l.2 4.6h.1l.2-4.6c0-.1.1-.2.2-.1z"
        />
        <linearGradient
          id="m"
          gradientUnits="userSpaceOnUse"
          x1={47.7}
          y1={2.3}
          x2={47.7}
          y2={63.3}
        >
          <stop offset={0} stopColor="#DEE0DD" />
          <stop offset={0} stopColor="#C5C9C7" />
          <stop offset={0} stopColor="#9EA4A5" />
          <stop offset={0} stopColor="#82898C" />
          <stop offset={0} stopColor="#71797D" />
          <stop offset={0} stopColor="#6B7378" />
          <stop offset={0.2} stopColor="#333F47" />
          <stop offset={0.5} stopColor="#27343C" />
          <stop offset={0.8} stopColor="#333F47" />
          <stop offset={1} stopColor="#434D54" />
        </linearGradient>
        <path
          fill="url(#m)"
          d="M42 2.3c10.5 4 20.4 15 20.4 28.9C62.4 48 49 61.7 32 61.7v1.6c17 0 31.3-14 31.3-31.3 0-13.8-8.8-25.4-21.3-29.7z"
        />
        <linearGradient
          id="n"
          gradientUnits="userSpaceOnUse"
          x1={32.1}
          y1={0.7}
          x2={32.1}
          y2={0.7}
        >
          <stop offset={0} stopColor="#DEE0DD" />
          <stop offset={0} stopColor="#C5C9C7" />
          <stop offset={0} stopColor="#9EA4A5" />
          <stop offset={0} stopColor="#82898C" />
          <stop offset={0} stopColor="#71797D" />
          <stop offset={0} stopColor="#6B7378" />
          <stop offset={0.2} stopColor="#333F47" />
          <stop offset={0.5} stopColor="#27343C" />
          <stop offset={0.8} stopColor="#333F47" />
          <stop offset={1} stopColor="#434D54" />
        </linearGradient>
        <path fill="url(#n)" d="M32.3.7H32h.3z" />
        <linearGradient
          id="o"
          gradientUnits="userSpaceOnUse"
          x1={57.3}
          y1={8.1}
          x2={43.8}
          y2={27.9}
        >
          <stop offset={0.7} stopColor="#27343C" />
          <stop
            offset={0.7}
            style={{
              stopColor: "#2b373f",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={0.7}
            style={{
              stopColor: "#36424a",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={0.7}
            style={{
              stopColor: "#49545b",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={0.8}
            style={{
              stopColor: "#646d73",
              stopOpacity: 0,
            }}
          />
          <stop
            offset={0.8}
            style={{
              stopColor: "#868d92",
              stopOpacity: 0,
            }}
          />
          <stop
            offset={0.8}
            style={{
              stopColor: "#b0b5b8",
              stopOpacity: 0,
            }}
          />
          <stop
            offset={0.8}
            style={{
              stopColor: "#e1e3e4",
              stopOpacity: 0,
            }}
          />
          <stop
            offset={0.8}
            style={{
              stopColor: "#fff",
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <path
          fill="url(#o)"
          d="M58.8 20.2C51.8 4.1 36 3.2 35.1 3.1H35c12.1 2.2 19.8 10.1 22.5 18.4v.1c1.2 3.2 1.8 6.6 1.9 10.3.1 3.5-.7 7.4-2.2 11-.1.5-.2 1.1-.3 1.1h1.6c4.8-9 2.7-18.1.3-23.8z"
        />
        <path
          fill="#FBFBFB"
          d="M2.2 32.1C2.2 15.7 15.5 2.2 32 2.2s29.8 13.4 29.8 29.9c0 16.4-13.3 29.7-29.8 29.7S2.2 48.5 2.2 32.1zm9.3-20.6c-5.3 5.3-8.6 12.6-8.6 20.6 0 8 3.3 15.3 8.5 20.5 5.3 5.2 12.6 8.5 20.6 8.5 8 0 15.3-3.2 20.5-8.5 5.3-5.2 8.5-12.5 8.5-20.5s-3.3-15.3-8.5-20.6C47.3 6.2 40 2.9 32 2.9s-15.3 3.3-20.5 8.6z"
        />
        <path
          fill="#333F47"
          d="m7.9 44.8 20.4-14.7c1.1.6 2.9 1.4 3.1 1.4.2.1.2-.1.2-.1l-2.5-2.1c-.3-.2-.4-.5-.4-.8l2.4-24.1c-.1.1-.1.3-.2.4-.1.2-.1.3-.1.5l-3.5 24.1L8.1 44.5c-.1.1-.2.2-.2.3z"
        />
      </g>
    </switch>
  </svg>
)

export default memo(Star)
