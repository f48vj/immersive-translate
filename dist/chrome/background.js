(()=>{var Ga=Object.defineProperty;var Va=(e,t)=>{for(var r in t)Ga(e,r,{get:t[r],enumerable:!0})};var w={BUILD_TIME:"2023-06-27T14:40:33.000Z",VERSION:"0.6.20",PROD:"1",REDIRECT_URL:"https://dash.immersivetranslate.com/auth-done/",IMMERSIVE_TRANSLATE_INJECTED_CSS:`:root {
  --immersive-translate-theme-underline-borderColor: #72ece9;
  --immersive-translate-theme-nativeUnderline-borderColor: #72ece9;
  --immersive-translate-theme-nativeDashed-borderColor: #72ece9;
  --immersive-translate-theme-nativeDotted-borderColor: #72ece9;
  --immersive-translate-theme-highlight-backgroundColor: #ffff00;
  --immersive-translate-theme-dashed-borderColor: #59c1bd;
  --immersive-translate-theme-blockquote-borderColor: #cc3355;
  --immersive-translate-theme-thinDashed-borderColor: #ff374f;
  --immersive-translate-theme-dashedBorder-borderColor: #94a3b8;
  --immersive-translate-theme-dashedBorder-borderRadius: 0;
  --immersive-translate-theme-solidBorder-borderColor: #94a3b8;
  --immersive-translate-theme-solidBorder-borderRadius: 0;
  --immersive-translate-theme-dotted-borderColor: #94a3b8;
  --immersive-translate-theme-wavy-borderColor: #72ece9;
  --immersive-translate-theme-dividingLine-borderColor: #94a3b8;
  --immersive-translate-theme-grey-textColor: #2f4f4f;
  --immersive-translate-theme-marker-backgroundColor: #fbda41;
  --immersive-translate-theme-marker-backgroundColor-rgb: 251, 218, 65;
  --immersive-translate-theme-marker2-backgroundColor: #ffff00;
}

.immersive-translate-target-translation-pre-whitespace {
  white-space: pre-wrap !important;
}

.immersive-translate-pdf-target-container {
  position: absolute;
  background-color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    sans-serif;
  top: 0;
  width: 600px;
  height: 100%;
  z-index: 2;
  line-height: 1.3;
  font-size: 16px;
}

.immersive-translate-pdf-target-container .immersive-translate-target-wrapper {
  color: rgb(0, 0, 0);
  white-space: normal;
  position: absolute;
}

.immersive-translate-pdf-target-container .immersive-translate-target-wrapper font {
  color: inherit;
  white-space: inherit;
  position: unset;
}

.immersive-translate-state-dual>br {
  display: none;
}

.immersive-translate-target-translation-block-wrapper {
  margin: 8px 0 !important;
  display: inline-block;
}

.immersive-translate-target-translation-pdf-block-wrapper {
  margin: 0 !important;
  display: block;
}

.immersive-translate-target-translation-theme-grey-inner {
  color: var(--immersive-translate-theme-grey-textColor);
}

.immersive-translate-target-translation-inline-wrapper {}

.immersive-translate-target-translation-theme-underline-inner {
  border-bottom: 1px solid var(--immersive-translate-theme-underline-borderColor) !important;
}

.immersive-translate-target-translation-theme-nativeUnderline-inner {
  text-decoration: underline var(--immersive-translate-theme-nativeUnderline-borderColor) !important;
}

.immersive-translate-target-translation-block-wrapper-theme-dashedBorder {
  border: 1px dashed var(--immersive-translate-theme-dashedBorder-borderColor) !important;
  border-radius: var(--immersive-translate-theme-dashedBorder-borderRadius) !important;
  padding: 6px;
  margin-top: 2px;
  display: block;
}

.immersive-translate-target-translation-inline-wrapper-theme-dashedBorder {
  border: 1px dashed var(--immersive-translate-theme-dashedBorder-borderColor) !important;
  border-radius: var(--immersive-translate-theme-dashedBorder-borderRadius) !important;
  padding: 2px;
}

.immersive-translate-target-translation-block-wrapper-theme-solidBorder {
  border: 1px solid var(--immersive-translate-theme-solidBorder-borderColor) !important;
  border-radius: var(--immersive-translate-theme-solidBorder-borderRadius) !important;
  padding: 6px;
  margin-top: 2px;
  display: block;
}

.immersive-translate-target-translation-inline-wrapper-theme-solidBorder {
  border: 1px solid var(--immersive-translate-theme-solidBorder-borderColor) !important;
  border-radius: var(--immersive-translate-theme-solidBorder-borderRadius) !important;
  padding: 2px;
}

.immersive-translate-target-translation-theme-nativeDashed-inner {
  text-decoration: dashed underline var(--immersive-translate-theme-nativeDashed-borderColor) !important;
}

.immersive-translate-target-translation-theme-thinDashed-inner {
  border-bottom: 1px dashed var(--immersive-translate-theme-thinDashed-borderColor) !important;
}

.immersive-translate-target-translation-theme-dotted-inner {
  background-repeat: repeat-x;
  background-image: linear-gradient(to right,
      var(--immersive-translate-theme-dotted-borderColor) 30%,
      rgba(255, 255, 255, 0) 0%);
  background-position: bottom;
  background-size: 5px 1px;
  background-repeat: repeat-x;
  padding-bottom: 3px;
}

.immersive-translate-target-translation-theme-nativeDotted-inner {
  text-decoration: dotted underline var(--immersive-translate-theme-nativeDotted-borderColor) !important;
}

.immersive-translate-target-translation-theme-wavy-inner {
  text-decoration: wavy underline var(--immersive-translate-theme-wavy-borderColor) !important;
}

.immersive-translate-target-translation-theme-dashed-inner {
  background-repeat: repeat-x !important;
  background: linear-gradient(to right,
      var(--immersive-translate-theme-dashed-borderColor) 0%,
      var(--immersive-translate-theme-dashed-borderColor) 50%,
      transparent 50%,
      transparent 100%) repeat-x left bottom;
  background-size: 8px 2px;
  padding-bottom: 2px;
}

.immersive-translate-target-translation-block-wrapper-theme-dividingLine::before {
  content: "";
  display: block;
  max-width: 80px;
  width: 10%;
  border-top: 1px dashed var(--immersive-translate-theme-dividingLine-borderColor);
  padding-top: 8px;
}

.immersive-translate-target-translation-inline-wrapper-theme-dividingLine::before {
  content: "";
  border-left: 1px dashed var(--immersive-translate-theme-dividingLine-borderColor);
  max-height: 16px;
  height: 16px;
  padding-left: 8px;
}

.immersive-translate-target-translation-theme-highlight-inner {
  background: var(--immersive-translate-theme-highlight-backgroundColor);
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

.immersive-translate-target-translation-block-wrapper-theme-marker {
  line-height: 1.5em;
}

.immersive-translate-target-translation-theme-marker2-inner {
  font-weight: bold;
  text-shadow: 10px 0px 3px var(--immersive-translate-theme-marker2-backgroundColor),
    16px 3px 9px var(--immersive-translate-theme-marker2-backgroundColor),
    2px 0px 6px var(--immersive-translate-theme-marker2-backgroundColor),
    -12px 0px 12px var(--immersive-translate-theme-marker2-backgroundColor) !important;
}

.immersive-translate-target-translation-theme-marker-inner {
  /* TODO: add more texture */
  background: linear-gradient(to right,
      rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.1),
      rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.9) 3%,
      rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.9) 35%,
      rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.9) 70%,
      rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.8) 95%,
      rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.3));
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

.immersive-translate-target-translation-theme-weakening {
  opacity: 0.618 !important;
}

.immersive-translate-target-translation-theme-italic {
  font-style: italic !important;
}

.immersive-translate-target-translation-theme-bold {
  font-weight: bold !important;
}

.immersive-translate-target-translation-block-wrapper-theme-paper {
  margin: 8px 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 16px 32px;
  display: block;
}

.immersive-translate-target-translation-block-wrapper-theme-blockquote {
  border-left: 4px solid var(--immersive-translate-theme-blockquote-borderColor) !important;
  padding-left: 12px !important;
  margin-top: 4px;
  margin-bottom: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
  display: block;
}

.immersive-translate-target-translation-theme-mask-inner {
  filter: blur(5px) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}

[data-immersive-translate-root-translation-theme="none"] .immersive-translate-target-translation-theme-mask-inner {
  filter: none !important;
}

[data-immersive-translate-root-translation-theme="mask"] .immersive-translate-target-inner {
  filter: blur(5px) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}

.immersive-translate-target-translation-theme-mask-inner:hover {
  filter: none !important;
}

[data-immersive-translate-root-translation-theme="mask"] .immersive-translate-target-inner:hover {
  filter: none !important;
}

/* opacity theme start */

.immersive-translate-target-translation-theme-opacity-inner {
  filter: opacity(10%) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}

[data-immersive-translate-root-translation-theme="none"] .immersive-translate-target-translation-theme-opacity-inner {
  filter: none !important;
}

[data-immersive-translate-root-translation-theme="opacity"] .immersive-translate-target-inner {
  filter: opacity(10%) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}

.immersive-translate-target-translation-theme-opacity-inner:hover {
  filter: none !important;
}

[data-immersive-translate-root-translation-theme="opacity"] .immersive-translate-target-inner:hover {
  filter: none !important;
}

/* opacity theme end */

/* vertical css , please remain it in the last one. */
.immersive-translate-target-translation-vertical-block-wrapper {
  margin: 0px 8px !important;
}

.immersive-translate-text {
  font-size: 15px !important;
}

.immersive-translate-error-toast {
  position: fixed;
  top: 5%;
  z-index: 99999999;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 300px;
  padding: 16px;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media all and (min-width: 750px) {
  .immersive-translate-error-toast {
    max-width: 400px;
  }
}

.immersive-translate-error-toast>span {
  font-size: 16px;
  color: white;
  text-align: center;
  margin: 0 16px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.immersive-translate-error-toast :first-child {
  width: 32px;
  height: 32px;
  background: center / contain url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAxlBMVEUAAADpTInqTIjpSofnSIfqS4nfS4XqS4nqTIjsTYnrTInqTIroS4jvQIDqTIn////+/v7rSYjpTIn8/v7uaZzrTIr9/f3wfansWJL88/b85e73qc39+/v3xNnylrvrVI/98fb62Obva5/8+fr76vH4y9zpSIj74e353Oj1ocTzm77xhK/veKbtYpjsXJTqU47oTInxjrXyh7L99fj40eH2ttH1udD3sc31ssz1rMnykLXucqPtbqD85e/1xdn2u9DzqcXrUY6FaJb8AAAADnRSTlMA34BgIM8Q37/fz7+/EGOHcVQAAAGhSURBVDjLhZPncuowEEZFTW7bXVU7xsYYTO/p7bb3f6lICIOYJOT4h7/VnFmvrBFjrF3/CR/SajBHswafctG0Qg3O8O0Xa8BZ6uw7eLjqr30SofCDVSkemMinfL1ecy20r5ygR5zz3ArcAqJExPTPKhDENEmS30Q9+yo4lEQkqVTiIEAHCT10xWERRdH0Bq0aCOPZNDV3s0xaYce1lHEoDHU8wEh3qRJypNcTAeKUIjgKMeGLDoRCLVLTVf+Ownj8Kk6H9HM6QXPgYjQSB0F00EJEu10ILQrs/QeP77BSSr0MzLOyuJJQbnUoOOIUI/A8EeJk9E4YUHUWiRyTVKGgQUB8/3e/NpdGlfI+FMQyWsCBWyz4A/ZyHXyiiz0Ne5aGZssoxRmcChw8/EFKQ5JwwkUo3FRT5yXS7q+Y/rHDZmFktzpGMvO+5QofA4FPpEmGw+EWRCFvnaof7Zhe8NuYSLR0xErKLThUSs8gnODh87ssy6438yzbLzxl012HS19vfCf3CNhnbWOL1eEsDda+gDPUvri8tSZzNFrwIZf1NmNvqC1I/t8j7nYAAAAASUVORK5CYII=');
}

.immersive-translate-error-toast :last-child {
  background: #EA4C89;
  border-radius: 8px;
  padding: 6px 16px;
  color: white;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  height: fit-content;
}

.immersive-translate-error-toast :last-child > i {
  width: 18px;
  height: 18px;
  padding: 0;
  display: inline-block;
  margin-right: 4px;
  background: center / contain no-repeat url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNCIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTUuNzIyIDcuNmMuMjA2LjI4IDAgLjY3LS41MDcuNjdoLTEuNTM4YS40MTguNDE4IDAgMCAwLS40MjEuMzk3Yy0uMjM2IDIuNzc2LTIuNTg0IDQuOTE3LTUuNDEzIDQuOTMzYTUuMzE4IDUuMzE4IDAgMCAxLTEuMTY4LS4xMjdjMi4zMDQtLjUxNiA0LjAxMi0yLjQzIDQuMjM2LTQuNzQ3YS40Mi40MiAwIDAgMC0uMTE0LS4zMjEuNDMzLjQzMyAwIDAgMC0uMzE2LS4xMzZIOS40NjdhLjQ0LjQ0IDAgMCAxLS4zODEtLjIyOS40MjYuNDI2IDAgMCAxIC4wMi0uNDRsMi45NTYtNC4xN2EuNDMxLjQzMSAwIDAgMSAuNzEzIDBsMi45NDcgNC4xN1pNLjI1IDUuOTU4YS40My40MyAwIDAgMSAuMzc3LS4yMjZoMS43MThhLjQzNi40MzYgMCAwIDAgLjQ1NS0uMzk4QzMuMDI2IDIuNTczIDUuMzUuNDM1IDguMTYxLjRjLjM5My0uMDAxLjc4NS4wNDIgMS4xNjkuMTI3LTIuMzA4LjUxNy00LjAxNiAyLjQzNS00LjIzNiA0Ljc1NWEuNDEuNDEgMCAwIDAgLjExMy4zMTkuNDI0LjQyNCAwIDAgMCAuMzE3LjEzaDEuMDNhLjQyMi40MjIgMCAwIDEgLjM4LjIyNS40MS40MSAwIDAgMS0uMDM2LjQzNWwtMi45NjQgNC4xODhhLjQzMi40MzIgMCAwIDEtLjY5NiAwTC4yNzQgNi4zOTFhLjQxOC40MTggMCAwIDEtLjAyNC0uNDM0WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+);
}

.immersive-translate-error {}

.immersive-translate-clickable-button {
  cursor: pointer;
}

.immersive-translate-help-button {
  cursor: help;
}
.immersive-translate-loading-spinner {
  vertical-align: middle !important;
  width: 10px !important;
  height: 10px !important;
  display: inline-block !important;
  margin: 0 4px !important;
  border: 2px rgba(221, 244, 255, 0.6) solid !important;
  border-top: 2px rgba(0, 0, 0, 0.375) solid !important;
  border-left: 2px rgba(0, 0, 0, 0.375) solid !important;
  border-radius: 50% !important;
  padding: 0 !important;
  -webkit-animation: immersive-translate-loading-animation 0.6s infinite linear !important;
  animation: immersive-translate-loading-animation 0.6s infinite linear !important;
}

.immersive-translate-loading-text:before {
  content: "...";
}

.immersive-translate-loading-none {}

/* dark mode for loading */

@media only screen and (prefers-color-scheme: dark) {
  .immersive-translate-loading {
    border: 2px rgba(255, 255, 255, 0.25) solid !important;
    border-top: 2px rgba(255, 255, 255, 1) solid !important;
  }
}

.immersive-translate-error-wrapper {
  position: relative;
  display: inline-flex;
  padding: 6px;
  margin: 0 12px;
}

.immersive-translate-tooltip {
  position: relative;
  display: inline-flex;
  /* little indicater to indicate it's hoverable */
}

.immersive-translate-tooltip:hover .immersive-translate-tooltip-content {
  display: block;
}

.immersive-translate-tooltip:hover+.immersive-translate-tooltip-content {
  display: block;
}

.immersive-translate-tooltip-content-table {
  left: unset !important;
  bottom: unset !important;
  transform: translate(-10%, 50%) !important;
}

.immersive-translate-tooltip-content {
  /* here's the magic */
  position: absolute;
  z-index: 100000000000;

  left: 50%;
  bottom: 0;
  transform: translate(-50%, 110%);
  line-height: 1;
  /* and add a small left margin */

  /* basic styles */
  width: max-content;
  max-width: 250px;
  word-wrap: break-word;
  white-space: pre-line;
  padding: 10px;
  border-radius: 10px;
  background: #000C;
  color: #fff;
  text-align: center;
  font-size: 14px;
  display: none;
  /* hide by default */
}

.immersive-translate-tooltip:hover:before {
  display: block;
}

@-webkit-keyframes immersive-translate-loading-animation {
  from {
    -webkit-transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(359deg);
  }
}

@keyframes immersive-translate-loading-animation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}

.immersive-translate-modal {
  display: none;
  position: fixed;
  z-index: 1000000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}

.immersive-translate-modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
  font-family: system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu",
    "Cantarell", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}
.immersive-translate-modal-title {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 20px;
  color: hsl(205,20%,32%);
}
.immersive-translate-modal-body {
  color:  hsl(205,20%,32%)
}

.immersive-translate-close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.immersive-translate-close:hover,
.immersive-translate-close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.immersive-translate-modal-footer {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-top: 20px;
}


.immersive-translate-btn {
  color: #fff;
  background-color: #ea4c89;
  border: none;
  font-size: 14px;
  margin: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.immersive-translate-cancel-btn {
  /* gray color */
  background-color: rgb(89, 107, 120);
}

.immersive-translate-btn:hover {
  background-color: #f082ac;
}
.immersive-translate-cancel-btn:hover {
  background-color: hsl(205,20%,32%);
}


.immersive-translate-btn svg {
  margin-right: 5px;
}

`,IMMERSIVE_TRANSLATE_INPUT_INJECTED_CSS:`.immersive-translate-input {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 2147483647;
  display: flex;
  justify-content: center;
  align-items: center;
}

.immersive-translate-input-loading {
  --loading-color: #f78fb6;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: block;
  margin: 12px auto;
  position: relative;
  color: white;
  left: -100px;
  box-sizing: border-box;
  animation: immersiveTranslateShadowRolling 1.5s linear infinite;
}

@keyframes immersiveTranslateShadowRolling {
  0% {
    box-shadow: 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }

  12% {
    box-shadow: 100px 0 var(--loading-color), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }

  25% {
    box-shadow: 110px 0 var(--loading-color), 100px 0 var(--loading-color), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }

  36% {
    box-shadow: 120px 0 var(--loading-color), 110px 0 var(--loading-color), 100px 0 var(--loading-color), 0px 0 rgba(255, 255, 255, 0);
  }

  50% {
    box-shadow: 130px 0 var(--loading-color), 120px 0 var(--loading-color), 110px 0 var(--loading-color), 100px 0 var(--loading-color);
  }

  62% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 130px 0 var(--loading-color), 120px 0 var(--loading-color), 110px 0 var(--loading-color);
  }

  75% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 var(--loading-color), 120px 0 var(--loading-color);
  }

  87% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 var(--loading-color);
  }

  100% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0);
  }
}
`,IMMERSIVE_TRANSLATE_PICO_CSS:`@charset "UTF-8";
/*!
 * Pico.css v1.5.6 (https://picocss.com)
 * Copyright 2019-2022 - Licensed under MIT
 */
/**
 * Theme: default
 */
#mount {
  --font-family: system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu",
    "Cantarell", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  --line-height: 1.5;
  --font-weight: 400;
  --font-size: 16px;
  --border-radius: 0.25rem;
  --border-width: 1px;
  --outline-width: 3px;
  --spacing: 1rem;
  --typography-spacing-vertical: 1.5rem;
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
  --grid-spacing-vertical: 0;
  --grid-spacing-horizontal: var(--spacing);
  --form-element-spacing-vertical: 0.75rem;
  --form-element-spacing-horizontal: 1rem;
  --nav-element-spacing-vertical: 1rem;
  --nav-element-spacing-horizontal: 0.5rem;
  --nav-link-spacing-vertical: 0.5rem;
  --nav-link-spacing-horizontal: 0.5rem;
  --form-label-font-weight: var(--font-weight);
  --transition: 0.2s ease-in-out;
  --modal-overlay-backdrop-filter: blur(0.25rem);
}
@media (min-width: 576px) {
  #mount {
    --font-size: 17px;
  }
}
@media (min-width: 768px) {
  #mount {
    --font-size: 18px;
  }
}
@media (min-width: 992px) {
  #mount {
    --font-size: 19px;
  }
}
@media (min-width: 1200px) {
  #mount {
    --font-size: 20px;
  }
}

@media (min-width: 576px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 2.5);
  }
}
@media (min-width: 768px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 3);
  }
}
@media (min-width: 992px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 3.5);
  }
}
@media (min-width: 1200px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 4);
  }
}

@media (min-width: 576px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.25);
  }
}
@media (min-width: 768px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.5);
  }
}
@media (min-width: 992px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.75);
  }
}
@media (min-width: 1200px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 2);
  }
}

dialog > article {
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
}
@media (min-width: 576px) {
  dialog > article {
    --block-spacing-vertical: calc(var(--spacing) * 2.5);
    --block-spacing-horizontal: calc(var(--spacing) * 1.25);
  }
}
@media (min-width: 768px) {
  dialog > article {
    --block-spacing-vertical: calc(var(--spacing) * 3);
    --block-spacing-horizontal: calc(var(--spacing) * 1.5);
  }
}

a {
  --text-decoration: none;
}
a.secondary,
a.contrast {
  --text-decoration: underline;
}

small {
  --font-size: 0.875em;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  --font-weight: 700;
}

h1 {
  --font-size: 2rem;
  --typography-spacing-vertical: 3rem;
}

h2 {
  --font-size: 1.75rem;
  --typography-spacing-vertical: 2.625rem;
}

h3 {
  --font-size: 1.5rem;
  --typography-spacing-vertical: 2.25rem;
}

h4 {
  --font-size: 1.25rem;
  --typography-spacing-vertical: 1.874rem;
}

h5 {
  --font-size: 1.125rem;
  --typography-spacing-vertical: 1.6875rem;
}

[type="checkbox"],
[type="radio"] {
  --border-width: 2px;
}

[type="checkbox"][role="switch"] {
  --border-width: 3px;
}

thead th,
thead td,
tfoot th,
tfoot td {
  --border-width: 3px;
}

:not(thead, tfoot) > * > td {
  --font-size: 0.875em;
}

pre,
code,
kbd,
samp {
  --font-family: "Menlo", "Consolas", "Roboto Mono", "Ubuntu Monospace",
    "Noto Mono", "Oxygen Mono", "Liberation Mono", monospace,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

kbd {
  --font-weight: bolder;
}

[data-theme="light"],
#mount:not([data-theme="dark"]) {
  --background-color: #fff;
  --color: hsl(205deg, 20%, 32%);
  --h1-color: hsl(205deg, 30%, 15%);
  --h2-color: #24333e;
  --h3-color: hsl(205deg, 25%, 23%);
  --h4-color: #374956;
  --h5-color: hsl(205deg, 20%, 32%);
  --h6-color: #4d606d;
  --muted-color: hsl(205deg, 10%, 50%);
  --muted-border-color: hsl(205deg, 20%, 94%);
  --primary: hsl(195deg, 85%, 41%);
  --primary-hover: hsl(195deg, 90%, 32%);
  --primary-focus: rgba(16, 149, 193, 0.125);
  --primary-inverse: #fff;
  --secondary: hsl(205deg, 15%, 41%);
  --secondary-hover: hsl(205deg, 20%, 32%);
  --secondary-focus: rgba(89, 107, 120, 0.125);
  --secondary-inverse: #fff;
  --contrast: hsl(205deg, 30%, 15%);
  --contrast-hover: #000;
  --contrast-focus: rgba(89, 107, 120, 0.125);
  --contrast-inverse: #fff;
  --mark-background-color: #fff2ca;
  --mark-color: #543a26;
  --ins-color: #388e3c;
  --del-color: #c62828;
  --blockquote-border-color: var(--muted-border-color);
  --blockquote-footer-color: var(--muted-color);
  --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --form-element-background-color: transparent;
  --form-element-border-color: hsl(205deg, 14%, 68%);
  --form-element-color: var(--color);
  --form-element-placeholder-color: var(--muted-color);
  --form-element-active-background-color: transparent;
  --form-element-active-border-color: var(--primary);
  --form-element-focus-color: var(--primary-focus);
  --form-element-disabled-background-color: hsl(205deg, 18%, 86%);
  --form-element-disabled-border-color: hsl(205deg, 14%, 68%);
  --form-element-disabled-opacity: 0.5;
  --form-element-invalid-border-color: #c62828;
  --form-element-invalid-active-border-color: #d32f2f;
  --form-element-invalid-focus-color: rgba(211, 47, 47, 0.125);
  --form-element-valid-border-color: #388e3c;
  --form-element-valid-active-border-color: #43a047;
  --form-element-valid-focus-color: rgba(67, 160, 71, 0.125);
  --switch-background-color: hsl(205deg, 16%, 77%);
  --switch-color: var(--primary-inverse);
  --switch-checked-background-color: var(--primary);
  --range-border-color: hsl(205deg, 18%, 86%);
  --range-active-border-color: hsl(205deg, 16%, 77%);
  --range-thumb-border-color: var(--background-color);
  --range-thumb-color: var(--secondary);
  --range-thumb-hover-color: var(--secondary-hover);
  --range-thumb-active-color: var(--primary);
  --table-border-color: var(--muted-border-color);
  --table-row-stripped-background-color: #f6f8f9;
  --code-background-color: hsl(205deg, 20%, 94%);
  --code-color: var(--muted-color);
  --code-kbd-background-color: var(--contrast);
  --code-kbd-color: var(--contrast-inverse);
  --code-tag-color: hsl(330deg, 40%, 50%);
  --code-property-color: hsl(185deg, 40%, 40%);
  --code-value-color: hsl(40deg, 20%, 50%);
  --code-comment-color: hsl(205deg, 14%, 68%);
  --accordion-border-color: var(--muted-border-color);
  --accordion-close-summary-color: var(--color);
  --accordion-open-summary-color: var(--muted-color);
  --card-background-color: var(--background-color);
  --card-border-color: var(--muted-border-color);
  --card-box-shadow: 0.0145rem 0.029rem 0.174rem rgba(27, 40, 50, 0.01698),
    0.0335rem 0.067rem 0.402rem rgba(27, 40, 50, 0.024),
    0.0625rem 0.125rem 0.75rem rgba(27, 40, 50, 0.03),
    0.1125rem 0.225rem 1.35rem rgba(27, 40, 50, 0.036),
    0.2085rem 0.417rem 2.502rem rgba(27, 40, 50, 0.04302),
    0.5rem 1rem 6rem rgba(27, 40, 50, 0.06),
    0 0 0 0.0625rem rgba(27, 40, 50, 0.015);
  --card-sectionning-background-color: #fbfbfc;
  --dropdown-background-color: #fbfbfc;
  --dropdown-border-color: #e1e6eb;
  --dropdown-box-shadow: var(--card-box-shadow);
  --dropdown-color: var(--color);
  --dropdown-hover-background-color: hsl(205deg, 20%, 94%);
  --modal-overlay-background-color: rgba(213, 220, 226, 0.7);
  --progress-background-color: hsl(205deg, 18%, 86%);
  --progress-color: var(--primary);
  --loading-spinner-opacity: 0.5;
  --tooltip-background-color: var(--contrast);
  --tooltip-color: var(--contrast-inverse);
  --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button-inverse: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(115, 130, 140)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
  --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(198, 40, 40)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
  --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
  --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
  --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(56, 142, 60)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  color-scheme: light;
}

@media only screen and (prefers-color-scheme: dark) {
  #mount:not([data-theme="light"]) {
    --background-color: #11191f;
    --color: hsl(205deg, 16%, 77%);
    --h1-color: hsl(205deg, 20%, 94%);
    --h2-color: #e1e6eb;
    --h3-color: hsl(205deg, 18%, 86%);
    --h4-color: #c8d1d8;
    --h5-color: hsl(205deg, 16%, 77%);
    --h6-color: #afbbc4;
    --muted-color: hsl(205deg, 10%, 50%);
    --muted-border-color: #1f2d38;
    --primary: hsl(195deg, 85%, 41%);
    --primary-hover: hsl(195deg, 80%, 50%);
    --primary-focus: rgba(16, 149, 193, 0.25);
    --primary-inverse: #fff;
    --secondary: hsl(205deg, 15%, 41%);
    --secondary-hover: hsl(205deg, 10%, 50%);
    --secondary-focus: rgba(115, 130, 140, 0.25);
    --secondary-inverse: #fff;
    --contrast: hsl(205deg, 20%, 94%);
    --contrast-hover: #fff;
    --contrast-focus: rgba(115, 130, 140, 0.25);
    --contrast-inverse: #000;
    --mark-background-color: #d1c284;
    --mark-color: #11191f;
    --ins-color: #388e3c;
    --del-color: #c62828;
    --blockquote-border-color: var(--muted-border-color);
    --blockquote-footer-color: var(--muted-color);
    --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    --form-element-background-color: #11191f;
    --form-element-border-color: #374956;
    --form-element-color: var(--color);
    --form-element-placeholder-color: var(--muted-color);
    --form-element-active-background-color: var(
      --form-element-background-color
    );
    --form-element-active-border-color: var(--primary);
    --form-element-focus-color: var(--primary-focus);
    --form-element-disabled-background-color: hsl(205deg, 25%, 23%);
    --form-element-disabled-border-color: hsl(205deg, 20%, 32%);
    --form-element-disabled-opacity: 0.5;
    --form-element-invalid-border-color: #b71c1c;
    --form-element-invalid-active-border-color: #c62828;
    --form-element-invalid-focus-color: rgba(198, 40, 40, 0.25);
    --form-element-valid-border-color: #2e7d32;
    --form-element-valid-active-border-color: #388e3c;
    --form-element-valid-focus-color: rgba(56, 142, 60, 0.25);
    --switch-background-color: #374956;
    --switch-color: var(--primary-inverse);
    --switch-checked-background-color: var(--primary);
    --range-border-color: #24333e;
    --range-active-border-color: hsl(205deg, 25%, 23%);
    --range-thumb-border-color: var(--background-color);
    --range-thumb-color: var(--secondary);
    --range-thumb-hover-color: var(--secondary-hover);
    --range-thumb-active-color: var(--primary);
    --table-border-color: var(--muted-border-color);
    --table-row-stripped-background-color: rgba(115, 130, 140, 0.05);
    --code-background-color: #18232c;
    --code-color: var(--muted-color);
    --code-kbd-background-color: var(--contrast);
    --code-kbd-color: var(--contrast-inverse);
    --code-tag-color: hsl(330deg, 30%, 50%);
    --code-property-color: hsl(185deg, 30%, 50%);
    --code-value-color: hsl(40deg, 10%, 50%);
    --code-comment-color: #4d606d;
    --accordion-border-color: var(--muted-border-color);
    --accordion-active-summary-color: var(--primary);
    --accordion-close-summary-color: var(--color);
    --accordion-open-summary-color: var(--muted-color);
    --card-background-color: #141e26;
    --card-border-color: var(--card-background-color);
    --card-box-shadow: 0.0145rem 0.029rem 0.174rem rgba(0, 0, 0, 0.01698),
      0.0335rem 0.067rem 0.402rem rgba(0, 0, 0, 0.024),
      0.0625rem 0.125rem 0.75rem rgba(0, 0, 0, 0.03),
      0.1125rem 0.225rem 1.35rem rgba(0, 0, 0, 0.036),
      0.2085rem 0.417rem 2.502rem rgba(0, 0, 0, 0.04302),
      0.5rem 1rem 6rem rgba(0, 0, 0, 0.06), 0 0 0 0.0625rem rgba(0, 0, 0, 0.015);
    --card-sectionning-background-color: #18232c;
    --dropdown-background-color: hsl(205deg, 30%, 15%);
    --dropdown-border-color: #24333e;
    --dropdown-box-shadow: var(--card-box-shadow);
    --dropdown-color: var(--color);
    --dropdown-hover-background-color: rgba(36, 51, 62, 0.75);
    --modal-overlay-background-color: rgba(36, 51, 62, 0.8);
    --progress-background-color: #24333e;
    --progress-color: var(--primary);
    --loading-spinner-opacity: 0.5;
    --tooltip-background-color: var(--contrast);
    --tooltip-color: var(--contrast-inverse);
    --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron-button: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron-button-inverse: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(0, 0, 0)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(115, 130, 140)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
    --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
    --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(183, 28, 28)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
    --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
    --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
    --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(46, 125, 50)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
    color-scheme: dark;
  }
}
[data-theme="dark"] {
  --background-color: #11191f;
  --color: hsl(205deg, 16%, 77%);
  --h1-color: hsl(205deg, 20%, 94%);
  --h2-color: #e1e6eb;
  --h3-color: hsl(205deg, 18%, 86%);
  --h4-color: #c8d1d8;
  --h5-color: hsl(205deg, 16%, 77%);
  --h6-color: #afbbc4;
  --muted-color: hsl(205deg, 10%, 50%);
  --muted-border-color: #1f2d38;
  --primary: hsl(195deg, 85%, 41%);
  --primary-hover: hsl(195deg, 80%, 50%);
  --primary-focus: rgba(16, 149, 193, 0.25);
  --primary-inverse: #fff;
  --secondary: hsl(205deg, 15%, 41%);
  --secondary-hover: hsl(205deg, 10%, 50%);
  --secondary-focus: rgba(115, 130, 140, 0.25);
  --secondary-inverse: #fff;
  --contrast: hsl(205deg, 20%, 94%);
  --contrast-hover: #fff;
  --contrast-focus: rgba(115, 130, 140, 0.25);
  --contrast-inverse: #000;
  --mark-background-color: #d1c284;
  --mark-color: #11191f;
  --ins-color: #388e3c;
  --del-color: #c62828;
  --blockquote-border-color: var(--muted-border-color);
  --blockquote-footer-color: var(--muted-color);
  --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --form-element-background-color: #11191f;
  --form-element-border-color: #374956;
  --form-element-color: var(--color);
  --form-element-placeholder-color: var(--muted-color);
  --form-element-active-background-color: var(--form-element-background-color);
  --form-element-active-border-color: var(--primary);
  --form-element-focus-color: var(--primary-focus);
  --form-element-disabled-background-color: hsl(205deg, 25%, 23%);
  --form-element-disabled-border-color: hsl(205deg, 20%, 32%);
  --form-element-disabled-opacity: 0.5;
  --form-element-invalid-border-color: #b71c1c;
  --form-element-invalid-active-border-color: #c62828;
  --form-element-invalid-focus-color: rgba(198, 40, 40, 0.25);
  --form-element-valid-border-color: #2e7d32;
  --form-element-valid-active-border-color: #388e3c;
  --form-element-valid-focus-color: rgba(56, 142, 60, 0.25);
  --switch-background-color: #374956;
  --switch-color: var(--primary-inverse);
  --switch-checked-background-color: var(--primary);
  --range-border-color: #24333e;
  --range-active-border-color: hsl(205deg, 25%, 23%);
  --range-thumb-border-color: var(--background-color);
  --range-thumb-color: var(--secondary);
  --range-thumb-hover-color: var(--secondary-hover);
  --range-thumb-active-color: var(--primary);
  --table-border-color: var(--muted-border-color);
  --table-row-stripped-background-color: rgba(115, 130, 140, 0.05);
  --code-background-color: #18232c;
  --code-color: var(--muted-color);
  --code-kbd-background-color: var(--contrast);
  --code-kbd-color: var(--contrast-inverse);
  --code-tag-color: hsl(330deg, 30%, 50%);
  --code-property-color: hsl(185deg, 30%, 50%);
  --code-value-color: hsl(40deg, 10%, 50%);
  --code-comment-color: #4d606d;
  --accordion-border-color: var(--muted-border-color);
  --accordion-active-summary-color: var(--primary);
  --accordion-close-summary-color: var(--color);
  --accordion-open-summary-color: var(--muted-color);
  --card-background-color: #141e26;
  --card-border-color: var(--card-background-color);
  --card-box-shadow: 0.0145rem 0.029rem 0.174rem rgba(0, 0, 0, 0.01698),
    0.0335rem 0.067rem 0.402rem rgba(0, 0, 0, 0.024),
    0.0625rem 0.125rem 0.75rem rgba(0, 0, 0, 0.03),
    0.1125rem 0.225rem 1.35rem rgba(0, 0, 0, 0.036),
    0.2085rem 0.417rem 2.502rem rgba(0, 0, 0, 0.04302),
    0.5rem 1rem 6rem rgba(0, 0, 0, 0.06), 0 0 0 0.0625rem rgba(0, 0, 0, 0.015);
  --card-sectionning-background-color: #18232c;
  --dropdown-background-color: hsl(205deg, 30%, 15%);
  --dropdown-border-color: #24333e;
  --dropdown-box-shadow: var(--card-box-shadow);
  --dropdown-color: var(--color);
  --dropdown-hover-background-color: rgba(36, 51, 62, 0.75);
  --modal-overlay-background-color: rgba(36, 51, 62, 0.8);
  --progress-background-color: #24333e;
  --progress-color: var(--primary);
  --loading-spinner-opacity: 0.5;
  --tooltip-background-color: var(--contrast);
  --tooltip-color: var(--contrast-inverse);
  --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button-inverse: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(0, 0, 0)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(115, 130, 140)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
  --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(183, 28, 28)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
  --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
  --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
  --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(46, 125, 50)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  color-scheme: dark;
}

progress,
[type="checkbox"],
[type="radio"],
[type="range"] {
  accent-color: var(--primary);
}

/**
 * Document
 * Content-box & Responsive typography
 */
*,
*::before,
*::after {
  box-sizing: border-box;
  background-repeat: no-repeat;
}

::before,
::after {
  text-decoration: inherit;
  vertical-align: inherit;
}

:where(#mount) {
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  text-size-adjust: 100%;
  background-color: var(--background-color);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  line-height: var(--line-height);
  font-family: var(--font-family);
  text-rendering: optimizeLegibility;
  overflow-wrap: break-word;
  cursor: default;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
}

/**
 * Sectioning
 * Container and responsive spacings for header, main, footer
 */
main {
  display: block;
}

#mount {
  width: 100%;
  margin: 0;
}
#mount > header,
#mount > main,
#mount > footer {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);
}
@media (min-width: 576px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 510px;
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 768px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 700px;
  }
}
@media (min-width: 992px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 920px;
  }
}
@media (min-width: 1200px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 1130px;
  }
}

/**
* Container
*/
.container,
.container-fluid {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: var(--spacing);
  padding-left: var(--spacing);
}

@media (min-width: 576px) {
  .container {
    max-width: 510px;
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 700px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 920px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1130px;
  }
}

/**
 * Section
 * Responsive spacings for section
 */
section {
  margin-bottom: var(--block-spacing-vertical);
}

/**
* Grid
* Minimal grid system with auto-layout columns
*/
.grid {
  grid-column-gap: var(--grid-spacing-horizontal);
  grid-row-gap: var(--grid-spacing-vertical);
  display: grid;
  grid-template-columns: 1fr;
  margin: 0;
}
@media (min-width: 992px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(0%, 1fr));
  }
}
.grid > * {
  min-width: 0;
}

/**
 * Horizontal scroller (<figure>)
 */
figure {
  display: block;
  margin: 0;
  padding: 0;
  overflow-x: auto;
}
figure figcaption {
  padding: calc(var(--spacing) * 0.5) 0;
  color: var(--muted-color);
}

/**
 * Typography
 */
b,
strong {
  font-weight: bolder;
}

sub,
sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

address,
blockquote,
dl,
figure,
form,
ol,
p,
pre,
table,
ul {
  margin-top: 0;
  margin-bottom: var(--typography-spacing-vertical);
  color: var(--color);
  font-style: normal;
  font-weight: var(--font-weight);
  font-size: var(--font-size);
}

a,
[role="link"] {
  --color: var(--primary);
  --background-color: transparent;
  outline: none;
  background-color: var(--background-color);
  color: var(--color);
  -webkit-text-decoration: var(--text-decoration);
  text-decoration: var(--text-decoration);
  transition: background-color var(--transition), color var(--transition),
    box-shadow var(--transition), -webkit-text-decoration var(--transition);
  transition: background-color var(--transition), color var(--transition),
    text-decoration var(--transition), box-shadow var(--transition);
  transition: background-color var(--transition), color var(--transition),
    text-decoration var(--transition), box-shadow var(--transition),
    -webkit-text-decoration var(--transition);
}
a:is([aria-current], :hover, :active, :focus),
[role="link"]:is([aria-current], :hover, :active, :focus) {
  --color: var(--primary-hover);
  --text-decoration: underline;
}
a:focus,
[role="link"]:focus {
  --background-color: var(--primary-focus);
}
a.secondary,
[role="link"].secondary {
  --color: var(--secondary);
}
a.secondary:is([aria-current], :hover, :active, :focus),
[role="link"].secondary:is([aria-current], :hover, :active, :focus) {
  --color: var(--secondary-hover);
}
a.secondary:focus,
[role="link"].secondary:focus {
  --background-color: var(--secondary-focus);
}
a.contrast,
[role="link"].contrast {
  --color: var(--contrast);
}
a.contrast:is([aria-current], :hover, :active, :focus),
[role="link"].contrast:is([aria-current], :hover, :active, :focus) {
  --color: var(--contrast-hover);
}
a.contrast:focus,
[role="link"].contrast:focus {
  --background-color: var(--contrast-focus);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: var(--typography-spacing-vertical);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  font-family: var(--font-family);
}

h1 {
  --color: var(--h1-color);
}

h2 {
  --color: var(--h2-color);
}

h3 {
  --color: var(--h3-color);
}

h4 {
  --color: var(--h4-color);
}

h5 {
  --color: var(--h5-color);
}

h6 {
  --color: var(--h6-color);
}

:where(address, blockquote, dl, figure, form, ol, p, pre, table, ul)
  ~ :is(h1, h2, h3, h4, h5, h6) {
  margin-top: var(--typography-spacing-vertical);
}

hgroup,
.headings {
  margin-bottom: var(--typography-spacing-vertical);
}
hgroup > *,
.headings > * {
  margin-bottom: 0;
}
hgroup > *:last-child,
.headings > *:last-child {
  --color: var(--muted-color);
  --font-weight: unset;
  font-size: 1rem;
  font-family: unset;
}

p {
  margin-bottom: var(--typography-spacing-vertical);
}

small {
  font-size: var(--font-size);
}

:where(dl, ol, ul) {
  padding-right: 0;
  padding-left: var(--spacing);
  -webkit-padding-start: var(--spacing);
  padding-inline-start: var(--spacing);
  -webkit-padding-end: 0;
  padding-inline-end: 0;
}
:where(dl, ol, ul) li {
  margin-bottom: calc(var(--typography-spacing-vertical) * 0.25);
}

:where(dl, ol, ul) :is(dl, ol, ul) {
  margin: 0;
  margin-top: calc(var(--typography-spacing-vertical) * 0.25);
}

ul li {
  list-style: square;
}

mark {
  padding: 0.125rem 0.25rem;
  background-color: var(--mark-background-color);
  color: var(--mark-color);
  vertical-align: baseline;
}

blockquote {
  display: block;
  margin: var(--typography-spacing-vertical) 0;
  padding: var(--spacing);
  border-right: none;
  border-left: 0.25rem solid var(--blockquote-border-color);
  -webkit-border-start: 0.25rem solid var(--blockquote-border-color);
  border-inline-start: 0.25rem solid var(--blockquote-border-color);
  -webkit-border-end: none;
  border-inline-end: none;
}
blockquote footer {
  margin-top: calc(var(--typography-spacing-vertical) * 0.5);
  color: var(--blockquote-footer-color);
}

abbr[title] {
  border-bottom: 1px dotted;
  text-decoration: none;
  cursor: help;
}

ins {
  color: var(--ins-color);
  text-decoration: none;
}

del {
  color: var(--del-color);
}

::-moz-selection {
  background-color: var(--primary-focus);
}

::selection {
  background-color: var(--primary-focus);
}

/**
 * Embedded content
 */
:where(audio, canvas, iframe, img, svg, video) {
  vertical-align: middle;
}

audio,
video {
  display: inline-block;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

:where(iframe) {
  border-style: none;
}

img {
  max-width: 100%;
  height: auto;
  border-style: none;
}

:where(svg:not([fill])) {
  fill: currentColor;
}

svg:not(#mount) {
  overflow: hidden;
}

/**
 * Button
 */
button {
  margin: 0;
  overflow: visible;
  font-family: inherit;
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button {
  display: block;
  width: 100%;
  margin-bottom: var(--spacing);
}

[role="button"] {
  display: inline-block;
  text-decoration: none;
}

button,
input[type="submit"],
input[type="button"],
input[type="reset"],
[role="button"] {
  --background-color: var(--primary);
  --border-color: var(--primary);
  --color: var(--primary-inverse);
  --box-shadow: var(--button-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
button:is([aria-current], :hover, :active, :focus),
input[type="submit"]:is([aria-current], :hover, :active, :focus),
input[type="button"]:is([aria-current], :hover, :active, :focus),
input[type="reset"]:is([aria-current], :hover, :active, :focus),
[role="button"]:is([aria-current], :hover, :active, :focus) {
  --background-color: var(--primary-hover);
  --border-color: var(--primary-hover);
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  --color: var(--primary-inverse);
}
button:focus,
input[type="submit"]:focus,
input[type="button"]:focus,
input[type="reset"]:focus,
[role="button"]:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--primary-focus);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).secondary,
input[type="reset"] {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  cursor: pointer;
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).secondary:is([aria-current], :hover, :active, :focus),
input[type="reset"]:is([aria-current], :hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
  --color: var(--secondary-inverse);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).secondary:focus,
input[type="reset"]:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--secondary-focus);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).contrast {
  --background-color: var(--contrast);
  --border-color: var(--contrast);
  --color: var(--contrast-inverse);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).contrast:is([aria-current], :hover, :active, :focus) {
  --background-color: var(--contrast-hover);
  --border-color: var(--contrast-hover);
  --color: var(--contrast-inverse);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).contrast:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--contrast-focus);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline,
input[type="reset"].outline {
  --background-color: transparent;
  --color: var(--primary);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline:is([aria-current], :hover, :active, :focus),
input[type="reset"].outline:is([aria-current], :hover, :active, :focus) {
  --background-color: transparent;
  --color: var(--primary-hover);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.secondary,
input[type="reset"].outline {
  --color: var(--secondary);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.secondary:is([aria-current], :hover, :active, :focus),
input[type="reset"].outline:is([aria-current], :hover, :active, :focus) {
  --color: var(--secondary-hover);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.contrast {
  --color: var(--contrast);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.contrast:is([aria-current], :hover, :active, :focus) {
  --color: var(--contrast-hover);
}

:where(
    button,
    [type="submit"],
    [type="button"],
    [type="reset"],
    [role="button"]
  )[disabled],
:where(fieldset[disabled])
  :is(
    button,
    [type="submit"],
    [type="button"],
    [type="reset"],
    [role="button"]
  ),
a[role="button"]:not([href]) {
  opacity: 0.5;
  pointer-events: none;
}

/**
 * Form elements
 */
input,
optgroup,
select,
textarea {
  margin: 0;
  font-size: 1rem;
  line-height: var(--line-height);
  font-family: inherit;
  letter-spacing: inherit;
}

input {
  overflow: visible;
}

select {
  text-transform: none;
}

legend {
  max-width: 100%;
  padding: 0;
  color: inherit;
  white-space: normal;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  padding: 0;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

:-moz-focusring {
  outline: none;
}

:-moz-ui-invalid {
  box-shadow: none;
}

::-ms-expand {
  display: none;
}

[type="file"],
[type="range"] {
  padding: 0;
  border-width: 0;
}

input:not([type="checkbox"], [type="radio"], [type="range"]) {
  height: calc(
    1rem * var(--line-height) + var(--form-element-spacing-vertical) * 2 +
      var(--border-width) * 2
  );
}

fieldset {
  margin: 0;
  margin-bottom: var(--spacing);
  padding: 0;
  border: 0;
}

label,
fieldset legend {
  display: block;
  margin-bottom: calc(var(--spacing) * 0.25);
  font-weight: var(--form-label-font-weight, var(--font-weight));
}

input:not([type="checkbox"], [type="radio"]),
select,
textarea {
  width: 100%;
}

input:not([type="checkbox"], [type="radio"], [type="range"], [type="file"]),
select,
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
}

input,
select,
textarea {
  --background-color: var(--form-element-background-color);
  --border-color: var(--form-element-border-color);
  --color: var(--form-element-color);
  --box-shadow: none;
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}

input:not(
    [type="submit"],
    [type="button"],
    [type="reset"],
    [type="checkbox"],
    [type="radio"],
    [readonly]
  ):is(:active, :focus),
:where(select, textarea):is(:active, :focus) {
  --background-color: var(--form-element-active-background-color);
}

input:not(
    [type="submit"],
    [type="button"],
    [type="reset"],
    [role="switch"],
    [readonly]
  ):is(:active, :focus),
:where(select, textarea):is(:active, :focus) {
  --border-color: var(--form-element-active-border-color);
}

input:not(
    [type="submit"],
    [type="button"],
    [type="reset"],
    [type="range"],
    [type="file"],
    [readonly]
  ):focus,
select:focus,
textarea:focus {
  --box-shadow: 0 0 0 var(--outline-width) var(--form-element-focus-color);
}

input:not([type="submit"], [type="button"], [type="reset"])[disabled],
select[disabled],
textarea[disabled],
:where(fieldset[disabled])
  :is(
    input:not([type="submit"], [type="button"], [type="reset"]),
    select,
    textarea
  ) {
  --background-color: var(--form-element-disabled-background-color);
  --border-color: var(--form-element-disabled-border-color);
  opacity: var(--form-element-disabled-opacity);
  pointer-events: none;
}

:where(input, select, textarea):not(
    [type="checkbox"],
    [type="radio"],
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  )[aria-invalid] {
  padding-right: calc(
    var(--form-element-spacing-horizontal) + 1.5rem
  ) !important;
  padding-left: var(--form-element-spacing-horizontal);
  -webkit-padding-start: var(--form-element-spacing-horizontal) !important;
  padding-inline-start: var(--form-element-spacing-horizontal) !important;
  -webkit-padding-end: calc(
    var(--form-element-spacing-horizontal) + 1.5rem
  ) !important;
  padding-inline-end: calc(
    var(--form-element-spacing-horizontal) + 1.5rem
  ) !important;
  background-position: center right 0.75rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}
:where(input, select, textarea):not(
    [type="checkbox"],
    [type="radio"],
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  )[aria-invalid="false"] {
  background-image: var(--icon-valid);
}
:where(input, select, textarea):not(
    [type="checkbox"],
    [type="radio"],
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  )[aria-invalid="true"] {
  background-image: var(--icon-invalid);
}
:where(input, select, textarea)[aria-invalid="false"] {
  --border-color: var(--form-element-valid-border-color);
}
:where(input, select, textarea)[aria-invalid="false"]:is(:active, :focus) {
  --border-color: var(--form-element-valid-active-border-color) !important;
  --box-shadow: 0 0 0 var(--outline-width) var(--form-element-valid-focus-color) !important;
}
:where(input, select, textarea)[aria-invalid="true"] {
  --border-color: var(--form-element-invalid-border-color);
}
:where(input, select, textarea)[aria-invalid="true"]:is(:active, :focus) {
  --border-color: var(--form-element-invalid-active-border-color) !important;
  --box-shadow: 0 0 0 var(--outline-width)
    var(--form-element-invalid-focus-color) !important;
}

[dir="rtl"]
  :where(input, select, textarea):not([type="checkbox"], [type="radio"]):is(
    [aria-invalid],
    [aria-invalid="true"],
    [aria-invalid="false"]
  ) {
  background-position: center left 0.75rem;
}

input::placeholder,
input::-webkit-input-placeholder,
textarea::placeholder,
textarea::-webkit-input-placeholder,
select:invalid {
  color: var(--form-element-placeholder-color);
  opacity: 1;
}

input:not([type="checkbox"], [type="radio"]),
select,
textarea {
  margin-bottom: var(--spacing);
}

select::-ms-expand {
  border: 0;
  background-color: transparent;
}
select:not([multiple], [size]) {
  padding-right: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  padding-left: var(--form-element-spacing-horizontal);
  -webkit-padding-start: var(--form-element-spacing-horizontal);
  padding-inline-start: var(--form-element-spacing-horizontal);
  -webkit-padding-end: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  padding-inline-end: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  background-image: var(--icon-chevron);
  background-position: center right 0.75rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}

[dir="rtl"] select:not([multiple], [size]) {
  background-position: center left 0.75rem;
}

:where(input, select, textarea) + small {
  display: block;
  width: 100%;
  margin-top: calc(var(--spacing) * -0.75);
  margin-bottom: var(--spacing);
  color: var(--muted-color);
}

label > :where(input, select, textarea) {
  margin-top: calc(var(--spacing) * 0.25);
}

/**
 * Form elements
 * Checkboxes & Radios
 */
[type="checkbox"],
[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 1.25em;
  height: 1.25em;
  margin-top: -0.125em;
  margin-right: 0.375em;
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: 0.375em;
  margin-inline-end: 0.375em;
  border-width: var(--border-width);
  font-size: inherit;
  vertical-align: middle;
  cursor: pointer;
}
[type="checkbox"]::-ms-check,
[type="radio"]::-ms-check {
  display: none;
}
[type="checkbox"]:checked,
[type="checkbox"]:checked:active,
[type="checkbox"]:checked:focus,
[type="radio"]:checked,
[type="radio"]:checked:active,
[type="radio"]:checked:focus {
  --background-color: var(--primary);
  --border-color: var(--primary);
  background-image: var(--icon-checkbox);
  background-position: center;
  background-size: 0.75em auto;
  background-repeat: no-repeat;
}
[type="checkbox"] ~ label,
[type="radio"] ~ label {
  display: inline-block;
  margin-right: 0.375em;
  margin-bottom: 0;
  cursor: pointer;
}

[type="checkbox"]:indeterminate {
  --background-color: var(--primary);
  --border-color: var(--primary);
  background-image: var(--icon-minus);
  background-position: center;
  background-size: 0.75em auto;
  background-repeat: no-repeat;
}

[type="radio"] {
  border-radius: 50%;
}
[type="radio"]:checked,
[type="radio"]:checked:active,
[type="radio"]:checked:focus {
  --background-color: var(--primary-inverse);
  border-width: 0.35em;
  background-image: none;
}

[type="checkbox"][role="switch"] {
  --background-color: var(--switch-background-color);
  --border-color: var(--switch-background-color);
  --color: var(--switch-color);
  width: 2.25em;
  height: 1.25em;
  border: var(--border-width) solid var(--border-color);
  border-radius: 1.25em;
  background-color: var(--background-color);
  line-height: 1.25em;
}
[type="checkbox"][role="switch"]:focus {
  --background-color: var(--switch-background-color);
  --border-color: var(--switch-background-color);
}
[type="checkbox"][role="switch"]:checked {
  --background-color: var(--switch-checked-background-color);
  --border-color: var(--switch-checked-background-color);
}
[type="checkbox"][role="switch"]:before {
  display: block;
  width: calc(1.25em - (var(--border-width) * 2));
  height: 100%;
  border-radius: 50%;
  background-color: var(--color);
  content: "";
  transition: margin 0.1s ease-in-out;
}
[type="checkbox"][role="switch"]:checked {
  background-image: none;
}
[type="checkbox"][role="switch"]:checked::before {
  margin-left: calc(1.125em - var(--border-width));
  -webkit-margin-start: calc(1.125em - var(--border-width));
  margin-inline-start: calc(1.125em - var(--border-width));
}

[type="checkbox"][aria-invalid="false"],
[type="checkbox"]:checked[aria-invalid="false"],
[type="radio"][aria-invalid="false"],
[type="radio"]:checked[aria-invalid="false"],
[type="checkbox"][role="switch"][aria-invalid="false"],
[type="checkbox"][role="switch"]:checked[aria-invalid="false"] {
  --border-color: var(--form-element-valid-border-color);
}
[type="checkbox"][aria-invalid="true"],
[type="checkbox"]:checked[aria-invalid="true"],
[type="radio"][aria-invalid="true"],
[type="radio"]:checked[aria-invalid="true"],
[type="checkbox"][role="switch"][aria-invalid="true"],
[type="checkbox"][role="switch"]:checked[aria-invalid="true"] {
  --border-color: var(--form-element-invalid-border-color);
}

/**
 * Form elements
 * Alternatives input types (Not Checkboxes & Radios)
 */
[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}
[type="color"]::-moz-focus-inner {
  padding: 0;
}
[type="color"]::-webkit-color-swatch {
  border: 0;
  border-radius: calc(var(--border-radius) * 0.5);
}
[type="color"]::-moz-color-swatch {
  border: 0;
  border-radius: calc(var(--border-radius) * 0.5);
}

input:not([type="checkbox"], [type="radio"], [type="range"], [type="file"]):is(
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  ) {
  --icon-position: 0.75rem;
  --icon-width: 1rem;
  padding-right: calc(var(--icon-width) + var(--icon-position));
  background-image: var(--icon-date);
  background-position: center right var(--icon-position);
  background-size: var(--icon-width) auto;
  background-repeat: no-repeat;
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="time"] {
  background-image: var(--icon-time);
}

[type="date"]::-webkit-calendar-picker-indicator,
[type="datetime-local"]::-webkit-calendar-picker-indicator,
[type="month"]::-webkit-calendar-picker-indicator,
[type="time"]::-webkit-calendar-picker-indicator,
[type="week"]::-webkit-calendar-picker-indicator {
  width: var(--icon-width);
  margin-right: calc(var(--icon-width) * -1);
  margin-left: var(--icon-position);
  opacity: 0;
}

[dir="rtl"]
  :is(
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  ) {
  text-align: right;
}

[type="file"] {
  --color: var(--muted-color);
  padding: calc(var(--form-element-spacing-vertical) * 0.5) 0;
  border: 0;
  border-radius: 0;
  background: none;
}
[type="file"]::file-selector-button {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) / 2);
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    calc(var(--form-element-spacing-horizontal) * 0.5);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
[type="file"]::file-selector-button:is(:hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}
[type="file"]::-webkit-file-upload-button {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) / 2);
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    calc(var(--form-element-spacing-horizontal) * 0.5);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  -webkit-transition: background-color var(--transition),
    border-color var(--transition), color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
[type="file"]::-webkit-file-upload-button:is(:hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}
[type="file"]::-ms-browse {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  margin-inline-start: 0;
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    calc(var(--form-element-spacing-horizontal) * 0.5);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  -ms-transition: background-color var(--transition),
    border-color var(--transition), color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
[type="file"]::-ms-browse:is(:hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}

[type="range"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 1.25rem;
  background: none;
}
[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  -webkit-transition: background-color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), box-shadow var(--transition);
}
[type="range"]::-moz-range-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  -moz-transition: background-color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), box-shadow var(--transition);
}
[type="range"]::-ms-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  -ms-transition: background-color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), box-shadow var(--transition);
}
[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  -webkit-transition: background-color var(--transition),
    transform var(--transition);
  transition: background-color var(--transition), transform var(--transition);
}
[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  -moz-transition: background-color var(--transition),
    transform var(--transition);
  transition: background-color var(--transition), transform var(--transition);
}
[type="range"]::-ms-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  -ms-transition: background-color var(--transition),
    transform var(--transition);
  transition: background-color var(--transition), transform var(--transition);
}
[type="range"]:hover,
[type="range"]:focus {
  --range-border-color: var(--range-active-border-color);
  --range-thumb-color: var(--range-thumb-hover-color);
}
[type="range"]:active {
  --range-thumb-color: var(--range-thumb-active-color);
}
[type="range"]:active::-webkit-slider-thumb {
  transform: scale(1.25);
}
[type="range"]:active::-moz-range-thumb {
  transform: scale(1.25);
}
[type="range"]:active::-ms-thumb {
  transform: scale(1.25);
}

input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"] {
  -webkit-padding-start: calc(var(--form-element-spacing-horizontal) + 1.75rem);
  padding-inline-start: calc(var(--form-element-spacing-horizontal) + 1.75rem);
  border-radius: 5rem;
  background-image: var(--icon-search);
  background-position: center left 1.125rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid] {
  -webkit-padding-start: calc(
    var(--form-element-spacing-horizontal) + 1.75rem
  ) !important;
  padding-inline-start: calc(
    var(--form-element-spacing-horizontal) + 1.75rem
  ) !important;
  background-position: center left 1.125rem, center right 0.75rem;
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid="false"] {
  background-image: var(--icon-search), var(--icon-valid);
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid="true"] {
  background-image: var(--icon-search), var(--icon-invalid);
}

[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  display: none;
}

[dir="rtl"]
  :where(input):not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"] {
  background-position: center right 1.125rem;
}
[dir="rtl"]
  :where(input):not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid] {
  background-position: center right 1.125rem, center left 0.75rem;
}

/**
 * Table
 */
:where(table) {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  text-indent: 0;
}

th,
td {
  padding: calc(var(--spacing) / 2) var(--spacing);
  border-bottom: var(--border-width) solid var(--table-border-color);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  text-align: left;
  text-align: start;
}

tfoot th,
tfoot td {
  border-top: var(--border-width) solid var(--table-border-color);
  border-bottom: 0;
}

table[role="grid"] tbody tr:nth-child(odd) {
  background-color: var(--table-row-stripped-background-color);
}

/**
 * Code
 */
pre,
code,
kbd,
samp {
  font-size: 0.875em;
  font-family: var(--font-family);
}

pre {
  -ms-overflow-style: scrollbar;
  overflow: auto;
}

pre,
code,
kbd {
  border-radius: var(--border-radius);
  background: var(--code-background-color);
  color: var(--code-color);
  font-weight: var(--font-weight);
  line-height: initial;
}

code,
kbd {
  display: inline-block;
  padding: 0.375rem 0.5rem;
}

pre {
  display: block;
  margin-bottom: var(--spacing);
  overflow-x: auto;
}
pre > code {
  display: block;
  padding: var(--spacing);
  background: none;
  font-size: 14px;
  line-height: var(--line-height);
}

code b {
  color: var(--code-tag-color);
  font-weight: var(--font-weight);
}
code i {
  color: var(--code-property-color);
  font-style: normal;
}
code u {
  color: var(--code-value-color);
  text-decoration: none;
}
code em {
  color: var(--code-comment-color);
  font-style: normal;
}

kbd {
  background-color: var(--code-kbd-background-color);
  color: var(--code-kbd-color);
  vertical-align: baseline;
}

/**
 * Miscs
 */
hr {
  height: 0;
  border: 0;
  border-top: 1px solid var(--muted-border-color);
  color: inherit;
}

[hidden],
template {
  display: none !important;
}

canvas {
  display: inline-block;
}

/**
 * Accordion (<details>)
 */
details {
  display: block;
  margin-bottom: var(--spacing);
  padding-bottom: var(--spacing);
  border-bottom: var(--border-width) solid var(--accordion-border-color);
}
details summary {
  line-height: 1rem;
  list-style-type: none;
  cursor: pointer;
  transition: color var(--transition);
}
details summary:not([role]) {
  color: var(--accordion-close-summary-color);
}
details summary::-webkit-details-marker {
  display: none;
}
details summary::marker {
  display: none;
}
details summary::-moz-list-bullet {
  list-style-type: none;
}
details summary::after {
  display: block;
  width: 1rem;
  height: 1rem;
  -webkit-margin-start: calc(var(--spacing, 1rem) * 0.5);
  margin-inline-start: calc(var(--spacing, 1rem) * 0.5);
  float: right;
  transform: rotate(-90deg);
  background-image: var(--icon-chevron);
  background-position: right center;
  background-size: 1rem auto;
  background-repeat: no-repeat;
  content: "";
  transition: transform var(--transition);
}
details summary:focus {
  outline: none;
}
details summary:focus:not([role="button"]) {
  color: var(--accordion-active-summary-color);
}
details summary[role="button"] {
  width: 100%;
  text-align: left;
}
details summary[role="button"]::after {
  height: calc(1rem * var(--line-height, 1.5));
  background-image: var(--icon-chevron-button);
}
details summary[role="button"]:not(.outline).contrast::after {
  background-image: var(--icon-chevron-button-inverse);
}
details[open] > summary {
  margin-bottom: calc(var(--spacing));
}
details[open] > summary:not([role]):not(:focus) {
  color: var(--accordion-open-summary-color);
}
details[open] > summary::after {
  transform: rotate(0);
}

[dir="rtl"] details summary {
  text-align: right;
}
[dir="rtl"] details summary::after {
  float: left;
  background-position: left center;
}

/**
 * Card (<article>)
 */
article {
  margin: var(--block-spacing-vertical) 0;
  padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);
  border-radius: var(--border-radius);
  background: var(--card-background-color);
  box-shadow: var(--card-box-shadow);
}
article > header,
article > footer {
  margin-right: calc(var(--block-spacing-horizontal) * -1);
  margin-left: calc(var(--block-spacing-horizontal) * -1);
  padding: calc(var(--block-spacing-vertical) * 0.66)
    var(--block-spacing-horizontal);
  background-color: var(--card-sectionning-background-color);
}
article > header {
  margin-top: calc(var(--block-spacing-vertical) * -1);
  margin-bottom: var(--block-spacing-vertical);
  border-bottom: var(--border-width) solid var(--card-border-color);
  border-top-right-radius: var(--border-radius);
  border-top-left-radius: var(--border-radius);
}
article > footer {
  margin-top: var(--block-spacing-vertical);
  margin-bottom: calc(var(--block-spacing-vertical) * -1);
  border-top: var(--border-width) solid var(--card-border-color);
  border-bottom-right-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
}

/**
 * Modal (<dialog>)
 */
#mount {
  --scrollbar-width: 0px;
}

dialog {
  display: flex;
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: inherit;
  min-width: 100%;
  height: inherit;
  min-height: 100%;
  padding: var(--spacing);
  border: 0;
  -webkit-backdrop-filter: var(--modal-overlay-backdrop-filter);
  backdrop-filter: var(--modal-overlay-backdrop-filter);
  background-color: var(--modal-overlay-background-color);
  color: var(--color);
}
dialog article {
  max-height: calc(100vh - var(--spacing) * 2);
  overflow: auto;
}
@media (min-width: 576px) {
  dialog article {
    max-width: 510px;
  }
}
@media (min-width: 768px) {
  dialog article {
    max-width: 700px;
  }
}
dialog article > header,
dialog article > footer {
  padding: calc(var(--block-spacing-vertical) * 0.5)
    var(--block-spacing-horizontal);
}
dialog article > header .close {
  margin: 0;
  margin-left: var(--spacing);
  float: right;
}
dialog article > footer {
  text-align: right;
}
dialog article > footer [role="button"] {
  margin-bottom: 0;
}
dialog article > footer [role="button"]:not(:first-of-type) {
  margin-left: calc(var(--spacing) * 0.5);
}
dialog article p:last-of-type {
  margin: 0;
}
dialog article .close {
  display: block;
  width: 1rem;
  height: 1rem;
  margin-top: calc(var(--block-spacing-vertical) * -0.5);
  margin-bottom: var(--typography-spacing-vertical);
  margin-left: auto;
  background-image: var(--icon-close);
  background-position: center;
  background-size: auto 1rem;
  background-repeat: no-repeat;
  opacity: 0.5;
  transition: opacity var(--transition);
}
dialog article .close:is([aria-current], :hover, :active, :focus) {
  opacity: 1;
}
dialog:not([open]),
dialog[open="false"] {
  display: none;
}

.modal-is-open {
  padding-right: var(--scrollbar-width, 0px);
  overflow: hidden;
  pointer-events: none;
}
.modal-is-open dialog {
  pointer-events: auto;
}

:where(.modal-is-opening, .modal-is-closing) dialog,
:where(.modal-is-opening, .modal-is-closing) dialog > article {
  animation-duration: 0.2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
}
:where(.modal-is-opening, .modal-is-closing) dialog {
  animation-duration: 0.8s;
  animation-name: modal-overlay;
}
:where(.modal-is-opening, .modal-is-closing) dialog > article {
  animation-delay: 0.2s;
  animation-name: modal;
}

.modal-is-closing dialog,
.modal-is-closing dialog > article {
  animation-delay: 0s;
  animation-direction: reverse;
}

@keyframes modal-overlay {
  from {
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    background-color: transparent;
  }
}
@keyframes modal {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
}
/**
 * Nav
 */
:where(nav li)::before {
  float: left;
  content: "\u200B";
}

nav,
nav ul {
  display: flex;
}

nav {
  justify-content: space-between;
}
nav ol,
nav ul {
  align-items: center;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
}
nav ol:first-of-type,
nav ul:first-of-type {
  margin-left: calc(var(--nav-element-spacing-horizontal) * -1);
}
nav ol:last-of-type,
nav ul:last-of-type {
  margin-right: calc(var(--nav-element-spacing-horizontal) * -1);
}
nav li {
  display: inline-block;
  margin: 0;
  padding: var(--nav-element-spacing-vertical)
    var(--nav-element-spacing-horizontal);
}
nav li > * {
  --spacing: 0;
}
nav :where(a, [role="link"]) {
  display: inline-block;
  margin: calc(var(--nav-link-spacing-vertical) * -1)
    calc(var(--nav-link-spacing-horizontal) * -1);
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
  border-radius: var(--border-radius);
  text-decoration: none;
}
nav :where(a, [role="link"]):is([aria-current], :hover, :active, :focus) {
  text-decoration: none;
}
nav[aria-label="breadcrumb"] {
  align-items: center;
  justify-content: start;
}
nav[aria-label="breadcrumb"] ul li:not(:first-child) {
  -webkit-margin-start: var(--nav-link-spacing-horizontal);
  margin-inline-start: var(--nav-link-spacing-horizontal);
}
nav[aria-label="breadcrumb"] ul li:not(:last-child) ::after {
  position: absolute;
  width: calc(var(--nav-link-spacing-horizontal) * 2);
  -webkit-margin-start: calc(var(--nav-link-spacing-horizontal) / 2);
  margin-inline-start: calc(var(--nav-link-spacing-horizontal) / 2);
  content: "/";
  color: var(--muted-color);
  text-align: center;
}
nav[aria-label="breadcrumb"] a[aria-current] {
  background-color: transparent;
  color: inherit;
  text-decoration: none;
  pointer-events: none;
}
nav [role="button"] {
  margin-right: inherit;
  margin-left: inherit;
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
}

aside nav,
aside ol,
aside ul,
aside li {
  display: block;
}
aside li {
  padding: calc(var(--nav-element-spacing-vertical) * 0.5)
    var(--nav-element-spacing-horizontal);
}
aside li a {
  display: block;
}
aside li [role="button"] {
  margin: inherit;
}

[dir="rtl"] nav[aria-label="breadcrumb"] ul li:not(:last-child) ::after {
  content: "\\\\";
}

/**
 * Progress
 */
progress {
  display: inline-block;
  vertical-align: baseline;
}

progress {
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  appearance: none;
  width: 100%;
  height: 0.5rem;
  margin-bottom: calc(var(--spacing) * 0.5);
  overflow: hidden;
  border: 0;
  border-radius: var(--border-radius);
  background-color: var(--progress-background-color);
  color: var(--progress-color);
}
progress::-webkit-progress-bar {
  border-radius: var(--border-radius);
  background: none;
}
progress[value]::-webkit-progress-value {
  background-color: var(--progress-color);
}
progress::-moz-progress-bar {
  background-color: var(--progress-color);
}
@media (prefers-reduced-motion: no-preference) {
  progress:indeterminate {
    background: var(--progress-background-color)
      linear-gradient(
        to right,
        var(--progress-color) 30%,
        var(--progress-background-color) 30%
      )
      top left/150% 150% no-repeat;
    animation: progress-indeterminate 1s linear infinite;
  }
  progress:indeterminate[value]::-webkit-progress-value {
    background-color: transparent;
  }
  progress:indeterminate::-moz-progress-bar {
    background-color: transparent;
  }
}

@media (prefers-reduced-motion: no-preference) {
  [dir="rtl"] progress:indeterminate {
    animation-direction: reverse;
  }
}

@keyframes progress-indeterminate {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
/**
 * Dropdown ([role="list"])
 */
details[role="list"],
li[role="list"] {
  position: relative;
}

details[role="list"] summary + ul,
li[role="list"] > ul {
  display: flex;
  z-index: 99;
  position: absolute;
  top: auto;
  right: 0;
  left: 0;
  flex-direction: column;
  margin: 0;
  padding: 0;
  border: var(--border-width) solid var(--dropdown-border-color);
  border-radius: var(--border-radius);
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  background-color: var(--dropdown-background-color);
  box-shadow: var(--card-box-shadow);
  color: var(--dropdown-color);
  white-space: nowrap;
}
details[role="list"] summary + ul li,
li[role="list"] > ul li {
  width: 100%;
  margin-bottom: 0;
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    var(--form-element-spacing-horizontal);
  list-style: none;
}
details[role="list"] summary + ul li:first-of-type,
li[role="list"] > ul li:first-of-type {
  margin-top: calc(var(--form-element-spacing-vertical) * 0.5);
}
details[role="list"] summary + ul li:last-of-type,
li[role="list"] > ul li:last-of-type {
  margin-bottom: calc(var(--form-element-spacing-vertical) * 0.5);
}
details[role="list"] summary + ul li a,
li[role="list"] > ul li a {
  display: block;
  margin: calc(var(--form-element-spacing-vertical) * -0.5)
    calc(var(--form-element-spacing-horizontal) * -1);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    var(--form-element-spacing-horizontal);
  overflow: hidden;
  color: var(--dropdown-color);
  text-decoration: none;
  text-overflow: ellipsis;
}
details[role="list"] summary + ul li a:hover,
li[role="list"] > ul li a:hover {
  background-color: var(--dropdown-hover-background-color);
}

details[role="list"] summary::after,
li[role="list"] > a::after {
  display: block;
  width: 1rem;
  height: calc(1rem * var(--line-height, 1.5));
  -webkit-margin-start: 0.5rem;
  margin-inline-start: 0.5rem;
  float: right;
  transform: rotate(0deg);
  background-position: right center;
  background-size: 1rem auto;
  background-repeat: no-repeat;
  content: "";
}

details[role="list"] {
  padding: 0;
  border-bottom: none;
}
details[role="list"] summary {
  margin-bottom: 0;
}
details[role="list"] summary:not([role]) {
  height: calc(
    1rem * var(--line-height) + var(--form-element-spacing-vertical) * 2 +
      var(--border-width) * 2
  );
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--form-element-border-color);
  border-radius: var(--border-radius);
  background-color: var(--form-element-background-color);
  color: var(--form-element-placeholder-color);
  line-height: inherit;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
details[role="list"] summary:not([role]):active,
details[role="list"] summary:not([role]):focus {
  border-color: var(--form-element-active-border-color);
  background-color: var(--form-element-active-background-color);
}
details[role="list"] summary:not([role]):focus {
  box-shadow: 0 0 0 var(--outline-width) var(--form-element-focus-color);
}
details[role="list"][open] summary {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
details[role="list"][open] summary::before {
  display: block;
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: none;
  content: "";
  cursor: default;
}

nav details[role="list"] summary,
nav li[role="list"] a {
  display: flex;
  direction: ltr;
}

nav details[role="list"] summary + ul,
nav li[role="list"] > ul {
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: var(--border-radius);
}
nav details[role="list"] summary + ul li a,
nav li[role="list"] > ul li a {
  border-radius: 0;
}

nav details[role="list"] summary,
nav details[role="list"] summary:not([role]) {
  height: auto;
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
}
nav details[role="list"][open] summary {
  border-radius: var(--border-radius);
}
nav details[role="list"] summary + ul {
  margin-top: var(--outline-width);
  -webkit-margin-start: 0;
  margin-inline-start: 0;
}
nav details[role="list"] summary[role="link"] {
  margin-bottom: calc(var(--nav-link-spacing-vertical) * -1);
  line-height: var(--line-height);
}
nav details[role="list"] summary[role="link"] + ul {
  margin-top: calc(var(--nav-link-spacing-vertical) + var(--outline-width));
  -webkit-margin-start: calc(var(--nav-link-spacing-horizontal) * -1);
  margin-inline-start: calc(var(--nav-link-spacing-horizontal) * -1);
}

li[role="list"]:hover > ul,
li[role="list"] a:active ~ ul,
li[role="list"] a:focus ~ ul {
  display: flex;
}
li[role="list"] > ul {
  display: none;
  margin-top: calc(var(--nav-link-spacing-vertical) + var(--outline-width));
  -webkit-margin-start: calc(
    var(--nav-element-spacing-horizontal) - var(--nav-link-spacing-horizontal)
  );
  margin-inline-start: calc(
    var(--nav-element-spacing-horizontal) - var(--nav-link-spacing-horizontal)
  );
}
li[role="list"] > a::after {
  background-image: var(--icon-chevron);
}

/**
 * Loading ([aria-busy=true])
 */
[aria-busy="true"] {
  cursor: progress;
}

[aria-busy="true"]:not(input, select, textarea)::before {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 0.1875em solid currentColor;
  border-radius: 1em;
  border-right-color: transparent;
  content: "";
  vertical-align: text-bottom;
  vertical-align: -0.125em;
  animation: spinner 0.75s linear infinite;
  opacity: var(--loading-spinner-opacity);
}
[aria-busy="true"]:not(input, select, textarea):not(:empty)::before {
  margin-right: calc(var(--spacing) * 0.5);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) * 0.5);
  margin-inline-end: calc(var(--spacing) * 0.5);
}
[aria-busy="true"]:not(input, select, textarea):empty {
  text-align: center;
}

button[aria-busy="true"],
input[type="submit"][aria-busy="true"],
input[type="button"][aria-busy="true"],
input[type="reset"][aria-busy="true"],
a[aria-busy="true"] {
  pointer-events: none;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
/**
 * Tooltip ([data-tooltip])
 */
[data-tooltip] {
  position: relative;
}
[data-tooltip]:not(a, button, input) {
  border-bottom: 1px dotted;
  text-decoration: none;
  cursor: help;
}
[data-tooltip][data-placement="top"]::before,
[data-tooltip][data-placement="top"]::after,
[data-tooltip]::before,
[data-tooltip]::after {
  display: block;
  z-index: 99;
  position: absolute;
  bottom: 100%;
  left: 50%;
  padding: 0.25rem 0.5rem;
  overflow: hidden;
  transform: translate(-50%, -0.25rem);
  border-radius: var(--border-radius);
  background: var(--tooltip-background-color);
  content: attr(data-tooltip);
  color: var(--tooltip-color);
  font-style: normal;
  font-weight: var(--font-weight);
  font-size: 0.875rem;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
}
[data-tooltip][data-placement="top"]::after,
[data-tooltip]::after {
  padding: 0;
  transform: translate(-50%, 0rem);
  border-top: 0.3rem solid;
  border-right: 0.3rem solid transparent;
  border-left: 0.3rem solid transparent;
  border-radius: 0;
  background-color: transparent;
  content: "";
  color: var(--tooltip-background-color);
}
[data-tooltip][data-placement="bottom"]::before,
[data-tooltip][data-placement="bottom"]::after {
  top: 100%;
  bottom: auto;
  transform: translate(-50%, 0.25rem);
}
[data-tooltip][data-placement="bottom"]:after {
  transform: translate(-50%, -0.3rem);
  border: 0.3rem solid transparent;
  border-bottom: 0.3rem solid;
}
[data-tooltip][data-placement="left"]::before,
[data-tooltip][data-placement="left"]::after {
  top: 50%;
  right: 100%;
  bottom: auto;
  left: auto;
  transform: translate(-0.25rem, -50%);
}
[data-tooltip][data-placement="left"]:after {
  transform: translate(0.3rem, -50%);
  border: 0.3rem solid transparent;
  border-left: 0.3rem solid;
}
[data-tooltip][data-placement="right"]::before,
[data-tooltip][data-placement="right"]::after {
  top: 50%;
  right: auto;
  bottom: auto;
  left: 100%;
  transform: translate(0.25rem, -50%);
}
[data-tooltip][data-placement="right"]:after {
  transform: translate(-0.3rem, -50%);
  border: 0.3rem solid transparent;
  border-right: 0.3rem solid;
}
[data-tooltip]:focus::before,
[data-tooltip]:focus::after,
[data-tooltip]:hover::before,
[data-tooltip]:hover::after {
  opacity: 1;
}
@media (hover: hover) and (pointer: fine) {
  [data-tooltip][data-placement="bottom"]:focus::before,
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover [data-tooltip]:focus::before,
  [data-tooltip][data-placement="bottom"]:hover [data-tooltip]:focus::after,
  [data-tooltip]:hover::before,
  [data-tooltip]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-top;
  }
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover [data-tooltip]:focus::after,
  [data-tooltip]:hover::after {
    animation-name: tooltip-caret-slide-top;
  }
  [data-tooltip][data-placement="bottom"]:focus::before,
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover::before,
  [data-tooltip][data-placement="bottom"]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-bottom;
  }
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover::after {
    animation-name: tooltip-caret-slide-bottom;
  }
  [data-tooltip][data-placement="left"]:focus::before,
  [data-tooltip][data-placement="left"]:focus::after,
  [data-tooltip][data-placement="left"]:hover::before,
  [data-tooltip][data-placement="left"]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-left;
  }
  [data-tooltip][data-placement="left"]:focus::after,
  [data-tooltip][data-placement="left"]:hover::after {
    animation-name: tooltip-caret-slide-left;
  }
  [data-tooltip][data-placement="right"]:focus::before,
  [data-tooltip][data-placement="right"]:focus::after,
  [data-tooltip][data-placement="right"]:hover::before,
  [data-tooltip][data-placement="right"]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-right;
  }
  [data-tooltip][data-placement="right"]:focus::after,
  [data-tooltip][data-placement="right"]:hover::after {
    animation-name: tooltip-caret-slide-right;
  }
}
@keyframes tooltip-slide-top {
  from {
    transform: translate(-50%, 0.75rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -0.25rem);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-top {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -0.25rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0rem);
    opacity: 1;
  }
}
@keyframes tooltip-slide-bottom {
  from {
    transform: translate(-50%, -0.75rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0.25rem);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-bottom {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -0.5rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -0.3rem);
    opacity: 1;
  }
}
@keyframes tooltip-slide-left {
  from {
    transform: translate(0.75rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(-0.25rem, -50%);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-left {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(0.05rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(0.3rem, -50%);
    opacity: 1;
  }
}
@keyframes tooltip-slide-right {
  from {
    transform: translate(-0.75rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(0.25rem, -50%);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-right {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(-0.05rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(-0.3rem, -50%);
    opacity: 1;
  }
}

/**
 * Accessibility & User interaction
 */
[aria-controls] {
  cursor: pointer;
}

[aria-disabled="true"],
[disabled] {
  cursor: not-allowed;
}

[aria-hidden="false"][hidden] {
  display: initial;
}

[aria-hidden="false"][hidden]:not(:focus) {
  clip: rect(0, 0, 0, 0);
  position: absolute;
}

a,
area,
button,
input,
label,
select,
summary,
textarea,
[tabindex] {
  -ms-touch-action: manipulation;
}

[dir="rtl"] {
  direction: rtl;
}

/**
* Reduce Motion Features
*/
@media (prefers-reduced-motion: reduce) {
  *:not([aria-busy="true"]),
  :not([aria-busy="true"])::before,
  :not([aria-busy="true"])::after {
    background-attachment: initial !important;
    animation-duration: 1ms !important;
    animation-delay: -1ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-delay: 0s !important;
    transition-duration: 0s !important;
  }
}
`,IMMERSIVE_TRANSLATE_COMMON_CSS:`#mount#mount {
  /* --primary: rgb(227, 59, 126); */
  --primary: #ea4c89;
  --primary-hover: #f082ac;
}

li.select-link.select-link:hover > ul {
  display: none;
}
li.select-link.select-link > ul {
  display: none;
}
li.select-link.select-link a:focus ~ ul {
  display: none;
}

li.select-link.select-link a:active ~ ul {
  display: none;
}
li.select-link-active.select-link-active > ul {
  display: flex;
}
li.select-link-active.select-link-active:hover > ul {
  display: flex;
}

li.select-link-active.select-link-active a:focus ~ ul {
  display: flex;
}

li.select-link-active.select-link-active a:active ~ ul {
  display: flex;
}
ul.select-link-ul.select-link-ul {
  right: 0px;
  left: auto;
}

a.select-link-selected {
  background-color: var(--primary-focus);
}
.immersive-translate-no-select {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}

/* li[role="list"].no-arrow > a::after { */
/*   background-image: none; */
/*   width: 0; */
/*   color: var(--color); */
/* } */
li[role="list"].no-arrow {
  margin-left: 8px;
  padding-right: 0;
}
li[role="list"] > a::after {
  -webkit-margin-start: 0.2rem;
  margin-inline-start: 0.2rem;
}

li[role="list"].no-arrow > a,
li[role="list"].no-arrow > a:link,
li[role="list"].no-arrow > a:visited {
  color: var(--secondary);
}

select.min-select {
  --form-element-spacing-horizontal: 0;
  margin-bottom: 4px;
  max-width: 128px;
  overflow: hidden;
  color: var(--primary);
  font-size: 14px;
  border: none;
  padding: 0;
  padding-right: 20px;
  padding-left: 8px;

  background-position: center right 0;
  background-size: 16px auto;
  text-overflow: ellipsis;
  color: var(--color);

}
select.min-select-secondary {
  color: var(--color);
}
select.min-select:focus {
  outline: none;
  border: none;
  --box-shadow: none;
}
select.min-select-no-arrow {
  background-image: none;
  padding-right: 0;
}

select.min-select-left {
  padding-right: 0px;
  /* padding-left: 24px; */
  /* background-position: center left 0; */
  text-overflow: ellipsis;
  text-align: left;
}

.muted {
  color: var(--muted-color);
}

.select.button-select {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
  --color: var(--secondary-inverse);
  cursor: pointer;
  --box-shadow: var(--button-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 16px;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
  -webkit-appearance: button;
  margin: 0;
  margin-bottom: 0px;
  overflow: visible;
  font-family: inherit;
  text-transform: none;
}
`,IMMERSIVE_TRANSLATE_POPUP_CSS:`html {
  font-size: 17px;
  --font-size: 17px;
}

body {
  padding: 0;
  margin: 0 auto;
  min-width: 255px;
  border-radius: 10px;
}
.immersive-translate-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  touch-action: none;
}
.immersive-translate-popup-wrapper {
  background: var(--background-color);
  border-radius: 10px;
  border: 1px solid var(--muted-border-color);
}

#mount#mount {
  --font-family: system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu",
    "Cantarell", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  --line-height: 1.5;
  --font-weight: 400;
  --font-size: 16px;
  --border-radius: 4px;
  --border-width: 1px;
  --outline-width: 3px;
  --spacing: 16px;
  --typography-spacing-vertical: 24px;
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
  --grid-spacing-vertical: 0;
  --grid-spacing-horizontal: var(--spacing);
  --form-element-spacing-vertical: 12px;
  --form-element-spacing-horizontal: 16px;
  --nav-element-spacing-vertical: 16px;
  --nav-element-spacing-horizontal: 8px;
  --nav-link-spacing-vertical: 8px;
  --nav-link-spacing-horizontal: 8px;
  --form-label-font-weight: var(--font-weight);
  --transition: 0.2s ease-in-out;
  --modal-overlay-backdrop-filter: blur(4px);
}
#mount {
  min-width: 250px;
}
.main-button {
  font-size: 14px;
  vertical-align: middle;
}

.pt-4 {
  padding-top: 24px;
}
.p-2 {
  padding: 8px;
}
.pl-5 {
  padding-left: 48px;
}
.p-0 {
  padding: 0;
}
.pl-2 {
  padding-left: 8px;
}
.pl-4 {
  padding-left: 24px;
}
.pt-2 {
  padding-top: 8px;
}

.pb-2 {
  padding-bottom: 8px;
}

.pr-5 {
  padding-right: 48px;
}
.text-sm {
  font-size: 14px;
}
.w-full {
  width: 100%;
}

.flex {
  display: flex;
}
.flex-wrap {
  flex-wrap: wrap;
}
.flex-end {
  justify-content: flex-end;
}
.flex-grow {
  flex-grow: 1;
}
.justify-between {
  justify-content: space-between;
}

.mb-2 {
  margin-bottom: 8px;
}
.inline-block {
  display: inline-block;
}

.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}

.mt-2 {
  margin-top: 8px;
}
.mt-0 {
  margin-top: 0;
}

.mb-1 {
  margin-bottom: 4px;
}
.ml-4 {
  margin-left: 24px;
}
.ml-3 {
  margin-left: 16px;
}
.ml-2 {
  margin-left: 8px;
}
.mr-1 {
  margin-right: 4px;
}
.pl-3 {
  padding-left: 12px;
}
.pr-3 {
  padding-right: 12px;
}
.p-3 {
  padding: 12px;
}
.mt-4 {
  margin-top: 24px;
}
.py-0 {
  padding-top: 0;
  padding-bottom: 0;
}

.left-auto {
  left: auto !important;
}

.max-h-28 {
  max-height: 112px;
}
.max-h-30 {
  max-height: 120px;
}
.overflow-y-scroll {
  overflow-y: scroll;
}
.text-xs {
  font-size: 12px;
}

.flex-1 {
  flex: 1;
}
.flex-3 {
  flex: 3;
}
.flex-4 {
  flex: 4;
}
.flex-2 {
  flex: 2;
}
.mt-3 {
  margin-top: 16px;
}
.items-center {
  align-items: center;
}
.items-end {
  align-items: flex-end;
}
.items-baseline {
  align-items: baseline;
}

.my-5 {
  margin-top: 48px;
  margin-bottom: 48px;
}
.my-4 {
  margin-top: 24px;
  margin-bottom: 24px;
}
.my-3 {
  margin-top: 16px;
  margin-bottom: 16px;
}
.pt-3 {
  padding-top: 12px;
}
.px-3 {
  padding-left: 12px;
  padding-right: 12px;
}
.pt-2 {
  padding-top: 8px;
}
.px-2 {
  padding-left: 8px;
  padding-right: 8px;
}
.pt-1 {
  padding-top: 4px;
}
.px-1 {
  padding-left: 4px;
  padding-right: 4px;
}
.pb-2 {
  padding-bottom: 8px;
}
.justify-end {
  justify-content: flex-end;
}
.w-auto {
  width: auto;
}
`,IMMERSIVE_TRANSLATE_PAGE_POPUP_CSS:`html {
  font-size: 17px;
}
.immersive-translate-popup-container {
  position: fixed;
  padding: 0;
  z-index: 2147483647;
  right: 0;
  top: 335px;
  width: 36px;
}
.immersive-translate-popup-btn {
  display: inline-block;
  background-color: #ea4c89;
  font-size: 18px;
  opacity: 0.5;
  width: 36px;
  height: 36px;
  border-radius: 100%;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-transition: -webkit-transform ease-out 250ms;
  transition: -webkit-transform ease-out 250ms;
  transition: transform ease-out 250ms;
  transition: transform ease-out 250ms, -webkit-transform ease-out 250ms;
  border: none;
  padding: 0;
}
.immersive-translate-popup-btn > svg {
}
#mount#mount {
  position: absolute;
  display: none;
  min-width: 250px;
  height: auto;
  --font-size: 17px;
  font-size: 17px;
}
`,IMMERSIVE_TRANSLATE_POPUP_HTML:`<div
  id="immersive-translate-popup-container"
  class="immersive-translate-popup-container"
>
  <button
    id="immersive-translate-popup-btn"
    class="immersive-translate-popup-btn"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M5 15v2a2 2 0 0 0 1.85 1.995L7 19h3v2H7a4 4 0 0 1-4-4v-2h2zm13-5l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16 10h2zm-1 2.885L15.753 16h2.492L17 12.885zM8 2v2h4v7H8v3H6v-3H2V4h4V2h2zm9 1a4 4 0 0 1 4 4v2h-2V7a2 2 0 0 0-2-2h-3V3h3zM6 6H4v3h2V6zm4 0H8v3h2V6z"
        fill="rgba(255,255,255,1)"
      />
    </svg>
  </button>
  <div class="immersive-translate-popup-mount" id="mount"></div>
</div>
`,MOCK:"0",DEBUG:"0",INSTALL_FROM:"chrome_zip"};var Ya=Object.create,sr=Object.defineProperty,Ja=Object.getOwnPropertyDescriptor,sn=Object.getOwnPropertyNames,Xa=Object.getPrototypeOf,Za=Object.prototype.hasOwnProperty,Qa=(e,t)=>function(){return t||(0,e[sn(e)[0]])((t={exports:{}}).exports,t),t.exports},eo=(e,t)=>{for(var r in t)sr(e,r,{get:t[r],enumerable:!0})},or=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of sn(t))!Za.call(e,a)&&a!==r&&sr(e,a,{get:()=>t[a],enumerable:!(n=Ja(t,a))||n.enumerable});return e},to=(e,t,r)=>(or(e,t,"default"),r&&or(r,t,"default")),ln=(e,t,r)=>(r=e!=null?Ya(Xa(e)):{},or(t||!e||!e.__esModule?sr(r,"default",{value:e,enumerable:!0}):r,e)),cn=Qa({"../esmd/npm/webextension-polyfill@0.10.0/node_modules/webextension-polyfill/dist/browser-polyfill.js"(e,t){(function(r,n){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],n);else if(typeof e<"u")n(t);else{var a={exports:{}};n(a),r.browser=a.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:e,function(r){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let n="The message port closed before a response was received.",a=i=>{let c={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(c).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class o extends WeakMap{constructor(A,f=void 0){super(f),this.createItem=A}get(A){return this.has(A)||this.set(A,this.createItem(A)),super.get(A)}}let l=x=>x&&typeof x=="object"&&typeof x.then=="function",u=(x,A)=>(...f)=>{i.runtime.lastError?x.reject(new Error(i.runtime.lastError.message)):A.singleCallbackArg||f.length<=1&&A.singleCallbackArg!==!1?x.resolve(f[0]):x.resolve(f)},d=x=>x==1?"argument":"arguments",T=(x,A)=>function(k,...L){if(L.length<A.minArgs)throw new Error(`Expected at least ${A.minArgs} ${d(A.minArgs)} for ${x}(), got ${L.length}`);if(L.length>A.maxArgs)throw new Error(`Expected at most ${A.maxArgs} ${d(A.maxArgs)} for ${x}(), got ${L.length}`);return new Promise(($,W)=>{if(A.fallbackToNoCallback)try{k[x](...L,u({resolve:$,reject:W},A))}catch{k[x](...L),A.fallbackToNoCallback=!1,A.noCallback=!0,$()}else A.noCallback?(k[x](...L),$()):k[x](...L,u({resolve:$,reject:W},A))})},_=(x,A,f)=>new Proxy(A,{apply(k,L,$){return f.call(L,x,...$)}}),S=Function.call.bind(Object.prototype.hasOwnProperty),b=(x,A={},f={})=>{let k=Object.create(null),L={has(W,R){return R in x||R in k},get(W,R,X){if(R in k)return k[R];if(!(R in x))return;let F=x[R];if(typeof F=="function")if(typeof A[R]=="function")F=_(x,x[R],A[R]);else if(S(f,R)){let Te=T(R,f[R]);F=_(x,x[R],Te)}else F=F.bind(x);else if(typeof F=="object"&&F!==null&&(S(A,R)||S(f,R)))F=b(F,A[R],f[R]);else if(S(f,"*"))F=b(F,A[R],f["*"]);else return Object.defineProperty(k,R,{configurable:!0,enumerable:!0,get(){return x[R]},set(Te){x[R]=Te}}),F;return k[R]=F,F},set(W,R,X,F){return R in k?k[R]=X:x[R]=X,!0},defineProperty(W,R,X){return Reflect.defineProperty(k,R,X)},deleteProperty(W,R){return Reflect.deleteProperty(k,R)}},$=Object.create(x);return new Proxy($,L)},Z=x=>({addListener(A,f,...k){A.addListener(x.get(f),...k)},hasListener(A,f){return A.hasListener(x.get(f))},removeListener(A,f){A.removeListener(x.get(f))}}),te=new o(x=>typeof x!="function"?x:function(f){let k=b(f,{},{getContent:{minArgs:0,maxArgs:0}});x(k)}),m=new o(x=>typeof x!="function"?x:function(f,k,L){let $=!1,W,R=new Promise(ve=>{W=function(we){$=!0,ve(we)}}),X;try{X=x(f,k,W)}catch(ve){X=Promise.reject(ve)}let F=X!==!0&&l(X);if(X!==!0&&!F&&!$)return!1;let Te=ve=>{ve.then(we=>{L(we)},we=>{let Q;we&&(we instanceof Error||typeof we.message=="string")?Q=we.message:Q="An unexpected error occurred",L({__mozWebExtensionPolyfillReject__:!0,message:Q})}).catch(we=>{})};return Te(F?X:R),!0}),C=({reject:x,resolve:A},f)=>{i.runtime.lastError?i.runtime.lastError.message===n?A():x(new Error(i.runtime.lastError.message)):f&&f.__mozWebExtensionPolyfillReject__?x(new Error(f.message)):A(f)},G=(x,A,f,...k)=>{if(k.length<A.minArgs)throw new Error(`Expected at least ${A.minArgs} ${d(A.minArgs)} for ${x}(), got ${k.length}`);if(k.length>A.maxArgs)throw new Error(`Expected at most ${A.maxArgs} ${d(A.maxArgs)} for ${x}(), got ${k.length}`);return new Promise((L,$)=>{let W=C.bind(null,{resolve:L,reject:$});k.push(W),f.sendMessage(...k)})},Y={devtools:{network:{onRequestFinished:Z(te)}},runtime:{onMessage:Z(m),onMessageExternal:Z(m),sendMessage:G.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:G.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},me={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return c.privacy={network:{"*":me},services:{"*":me},websites:{"*":me}},b(i,Y,c)};r.exports=a(chrome)}else r.exports=globalThis.browser})}}),un={};eo(un,{default:()=>Dt});var ro=ln(cn());to(un,ln(cn()));var{default:on,...no}=ro,Dt=on!==void 0?on:no;globalThis.immersiveTranslateBrowserAPI=Dt;function yt(){let e,t="pending",r=new Promise((n,a)=>{e={async resolve(i){await i,t="fulfilled",n(i)},reject(i){t="rejected",a(i)}}});return Object.defineProperty(r,"state",{get:()=>t}),Object.assign(r,e)}function ir(e,t={}){let{signal:r,persistent:n}=t;return r?.aborted?Promise.reject(new DOMException("Delay was aborted.","AbortError")):new Promise((a,i)=>{let c=()=>{clearTimeout(l),i(new DOMException("Delay was aborted.","AbortError"))},l=setTimeout(()=>{r?.removeEventListener("abort",c),a()},e);if(r?.addEventListener("abort",c,{once:!0}),n===!1)try{Deno.unrefTimer(l)}catch(u){if(!(u instanceof ReferenceError))throw u}})}var dn=class{#e=0;#t=[];#r=[];#n=yt();add(t){++this.#e,this.#a(t[Symbol.asyncIterator]())}async#a(t){try{let{value:r,done:n}=await t.next();n?--this.#e:this.#t.push({iterator:t,value:r})}catch(r){this.#r.push(r)}this.#n.resolve()}async*iterate(){for(;this.#e>0;){await this.#n;for(let t=0;t<this.#t.length;t++){let{iterator:r,value:n}=this.#t[t];yield n,this.#a(r)}if(this.#r.length){for(let t of this.#r)throw t;this.#r.length=0}this.#t.length=0,this.#n=yt()}}[Symbol.asyncIterator](){return this.iterate()}};var je={};Va(je,{bgBlack:()=>Po,bgBlue:()=>Do,bgBrightBlack:()=>Fo,bgBrightBlue:()=>qo,bgBrightCyan:()=>zo,bgBrightGreen:()=>Wo,bgBrightMagenta:()=>Ko,bgBrightRed:()=>jo,bgBrightWhite:()=>Go,bgBrightYellow:()=>Ho,bgCyan:()=>Bo,bgGreen:()=>Io,bgMagenta:()=>No,bgRed:()=>Ro,bgRgb24:()=>Jo,bgRgb8:()=>$o,bgWhite:()=>Uo,bgYellow:()=>Oo,black:()=>ho,blue:()=>yo,bold:()=>io,brightBlack:()=>pn,brightBlue:()=>Eo,brightCyan:()=>_o,brightGreen:()=>ko,brightMagenta:()=>Mo,brightRed:()=>Ao,brightWhite:()=>Lo,brightYellow:()=>Co,cyan:()=>xo,dim:()=>lo,getColorEnabled:()=>oo,gray:()=>So,green:()=>bo,hidden:()=>go,inverse:()=>mo,italic:()=>co,magenta:()=>wo,red:()=>fo,reset:()=>so,rgb24:()=>Yo,rgb8:()=>Vo,setColorEnabled:()=>ao,strikethrough:()=>po,stripColor:()=>Zo,underline:()=>uo,white:()=>vo,yellow:()=>To});var{Deno:mn}=globalThis,gn=typeof mn?.noColor=="boolean"?mn.noColor:!0,lr=!gn;function ao(e){gn||(lr=e)}function oo(){return lr}function N(e,t){return{open:`\x1B[${e.join(";")}m`,close:`\x1B[${t}m`,regexp:new RegExp(`\\x1b\\[${t}m`,"g")}}function B(e,t){return lr?`${t.open}${e.replace(t.regexp,t.open)}${t.close}`:e}function so(e){return B(e,N([0],0))}function io(e){return B(e,N([1],22))}function lo(e){return B(e,N([2],22))}function co(e){return B(e,N([3],23))}function uo(e){return B(e,N([4],24))}function mo(e){return B(e,N([7],27))}function go(e){return B(e,N([8],28))}function po(e){return B(e,N([9],29))}function ho(e){return B(e,N([30],39))}function fo(e){return B(e,N([31],39))}function bo(e){return B(e,N([32],39))}function To(e){return B(e,N([33],39))}function yo(e){return B(e,N([34],39))}function wo(e){return B(e,N([35],39))}function xo(e){return B(e,N([36],39))}function vo(e){return B(e,N([37],39))}function So(e){return pn(e)}function pn(e){return B(e,N([90],39))}function Ao(e){return B(e,N([91],39))}function ko(e){return B(e,N([92],39))}function Co(e){return B(e,N([93],39))}function Eo(e){return B(e,N([94],39))}function Mo(e){return B(e,N([95],39))}function _o(e){return B(e,N([96],39))}function Lo(e){return B(e,N([97],39))}function Po(e){return B(e,N([40],49))}function Ro(e){return B(e,N([41],49))}function Io(e){return B(e,N([42],49))}function Oo(e){return B(e,N([43],49))}function Do(e){return B(e,N([44],49))}function No(e){return B(e,N([45],49))}function Bo(e){return B(e,N([46],49))}function Uo(e){return B(e,N([47],49))}function Fo(e){return B(e,N([100],49))}function jo(e){return B(e,N([101],49))}function Wo(e){return B(e,N([102],49))}function Ho(e){return B(e,N([103],49))}function qo(e){return B(e,N([104],49))}function Ko(e){return B(e,N([105],49))}function zo(e){return B(e,N([106],49))}function Go(e){return B(e,N([107],49))}function et(e,t=255,r=0){return Math.trunc(Math.max(Math.min(e,t),r))}function Vo(e,t){return B(e,N([38,5,et(t)],39))}function $o(e,t){return B(e,N([48,5,et(t)],49))}function Yo(e,t){return typeof t=="number"?B(e,N([38,2,t>>16&255,t>>8&255,t&255],39)):B(e,N([38,2,et(t.r),et(t.g),et(t.b)],39))}function Jo(e,t){return typeof t=="number"?B(e,N([48,2,t>>16&255,t>>8&255,t&255],49)):B(e,N([48,2,et(t.r),et(t.g),et(t.b)],49))}var Xo=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");function Zo(e){return e.replace(Xo,"")}var cr=class extends Error{constructor(t,r){super(`Exceeded max retry count (${r})`),this.name="RetryError",this.cause=t}},Qo={multiplier:2,maxTimeout:6e4,maxAttempts:5,minTimeout:1e3};async function ur(e,t){let r={...Qo,...t};if(r.maxTimeout>=0&&r.minTimeout>r.maxTimeout)throw new RangeError("minTimeout is greater than maxTimeout");let n=r.minTimeout,a;for(let i=0;i<r.maxAttempts;i++)try{return await e()}catch(c){await new Promise(o=>setTimeout(o,n)),n*=r.multiplier,n=Math.max(n,r.minTimeout),r.maxTimeout>=0&&(n=Math.min(n,r.maxTimeout)),a=c}throw new cr(a,r.maxAttempts)}var Ol=Number.isNaN||function(e){return typeof e=="number"&&e!==e};var Nt=globalThis||(typeof window<"u"?window:self),ts=Object.create,mr=Object.defineProperty,rs=Object.getOwnPropertyDescriptor,ns=Object.getOwnPropertyNames,as=Object.getPrototypeOf,os=Object.prototype.hasOwnProperty,ss=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),is=(e,t)=>{for(var r in t)mr(e,r,{get:t[r],enumerable:!0})},dr=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of ns(t))!os.call(e,a)&&a!==r&&mr(e,a,{get:()=>t[a],enumerable:!(n=rs(t,a))||n.enumerable});return e},ls=(e,t,r)=>(dr(e,t,"default"),r&&dr(r,t,"default")),fn=(e,t,r)=>(r=e!=null?ts(as(e)):{},dr(t||!e||!e.__esModule?mr(r,"default",{value:e,enumerable:!0}):r,e)),bn=ss((e,t)=>{var r="Expected a function",n=NaN,a="[object Symbol]",i=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt,d=typeof Nt=="object"&&Nt&&Nt.Object===Object&&Nt,T=typeof self=="object"&&self&&self.Object===Object&&self,_=d||T||Function("return this")(),S=Object.prototype,b=S.toString,Z=Math.max,te=Math.min,m=function(){return _.Date.now()};function C(f,k,L){var $,W,R,X,F,Te,ve=0,we=!1,Q=!1,Qe=!0;if(typeof f!="function")throw new TypeError(r);k=A(k)||0,Y(L)&&(we=!!L.leading,Q="maxWait"in L,R=Q?Z(A(L.maxWait)||0,k):R,Qe="trailing"in L?!!L.trailing:Qe);function oe(D){var U=$,q=W;return $=W=void 0,ve=D,X=f.apply(q,U),X}function g(D){return ve=D,F=setTimeout(V,k),we?oe(D):X}function v(D){var U=D-Te,q=D-ve,J=k-U;return Q?te(J,R-q):J}function E(D){var U=D-Te,q=D-ve;return Te===void 0||U>=k||U<0||Q&&q>=R}function V(){var D=m();if(E(D))return O(D);F=setTimeout(V,v(D))}function O(D){return F=void 0,Qe&&$?oe(D):($=W=void 0,X)}function se(){F!==void 0&&clearTimeout(F),ve=0,$=Te=W=F=void 0}function ge(){return F===void 0?X:O(m())}function ue(){var D=m(),U=E(D);if($=arguments,W=this,Te=D,U){if(F===void 0)return g(Te);if(Q)return F=setTimeout(V,k),oe(Te)}return F===void 0&&(F=setTimeout(V,k)),X}return ue.cancel=se,ue.flush=ge,ue}function G(f,k,L){var $=!0,W=!0;if(typeof f!="function")throw new TypeError(r);return Y(L)&&($="leading"in L?!!L.leading:$,W="trailing"in L?!!L.trailing:W),C(f,k,{leading:$,maxWait:k,trailing:W})}function Y(f){var k=typeof f;return!!f&&(k=="object"||k=="function")}function me(f){return!!f&&typeof f=="object"}function x(f){return typeof f=="symbol"||me(f)&&b.call(f)==a}function A(f){if(typeof f=="number")return f;if(x(f))return n;if(Y(f)){var k=typeof f.valueOf=="function"?f.valueOf():f;f=Y(k)?k+"":k}if(typeof f!="string")return f===0?f:+f;f=f.replace(i,"");var L=o.test(f);return L||l.test(f)?u(f.slice(2),L?2:8):c.test(f)?n:+f}t.exports=G}),Tn={};is(Tn,{default:()=>gr});var cs=fn(bn());ls(Tn,fn(bn()));var{default:hn,...us}=cs,gr=hn!==void 0?hn:us;var ds=Object.create,hr=Object.defineProperty,ms=Object.getOwnPropertyDescriptor,gs=Object.getOwnPropertyNames,ps=Object.getPrototypeOf,hs=Object.prototype.hasOwnProperty,fs=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),bs=(e,t)=>{for(var r in t)hr(e,r,{get:t[r],enumerable:!0})},pr=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of gs(t))!hs.call(e,a)&&a!==r&&hr(e,a,{get:()=>t[a],enumerable:!(n=ms(t,a))||n.enumerable});return e},Ts=(e,t,r)=>(pr(e,t,"default"),r&&pr(r,t,"default")),wn=(e,t,r)=>(r=e!=null?ds(ps(e)):{},pr(t||!e||!e.__esModule?hr(r,"default",{value:e,enumerable:!0}):r,e)),xn=fs((e,t)=>{(function(r,n){typeof e=="object"&&typeof t=="object"?t.exports=n():typeof define=="function"&&define.amd?define([],n):typeof e=="object"?e.notie=n():r.notie=n()})(e,function(){return function(r){function n(i){if(a[i])return a[i].exports;var c=a[i]={i,l:!1,exports:{}};return r[i].call(c.exports,c,c.exports,n),c.l=!0,c.exports}var a={};return n.m=r,n.c=a,n.i=function(i){return i},n.d=function(i,c,o){n.o(i,c)||Object.defineProperty(i,c,{configurable:!1,enumerable:!0,get:o})},n.n=function(i){var c=i&&i.__esModule?function(){return i.default}:function(){return i};return n.d(c,"a",c),c},n.o=function(i,c){return Object.prototype.hasOwnProperty.call(i,c)},n.p="",n(n.s=1)}([function(r,n){r.exports=function(a){return a.webpackPolyfill||(a.deprecate=function(){},a.paths=[],a.children||(a.children=[]),Object.defineProperty(a,"loaded",{enumerable:!0,get:function(){return a.l}}),Object.defineProperty(a,"id",{enumerable:!0,get:function(){return a.i}}),a.webpackPolyfill=1),a}},function(r,n,a){"use strict";(function(i){var c,o,l,u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d};(function(d,T){u(n)==="object"&&u(i)==="object"?i.exports=T():(o=[],c=T,l=typeof c=="function"?c.apply(n,o):c,l!==void 0&&(i.exports=l))})(void 0,function(){return function(d){function T(S){if(_[S])return _[S].exports;var b=_[S]={i:S,l:!1,exports:{}};return d[S].call(b.exports,b,b.exports,T),b.l=!0,b.exports}var _={};return T.m=d,T.c=_,T.i=function(S){return S},T.d=function(S,b,Z){T.o(S,b)||Object.defineProperty(S,b,{configurable:!1,enumerable:!0,get:Z})},T.n=function(S){var b=S&&S.__esModule?function(){return S.default}:function(){return S};return T.d(b,"a",b),b},T.o=function(S,b){return Object.prototype.hasOwnProperty.call(S,b)},T.p="",T(T.s=0)}([function(d,T,_){function S(g,v){var E={};for(var V in g)v.indexOf(V)>=0||Object.prototype.hasOwnProperty.call(g,V)&&(E[V]=g[V]);return E}Object.defineProperty(T,"__esModule",{value:!0});var b=typeof Symbol=="function"&&u(Symbol.iterator)==="symbol"?function(g){return typeof g>"u"?"undefined":u(g)}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g>"u"?"undefined":u(g)},Z=Object.assign||function(g){for(var v=1;v<arguments.length;v++){var E=arguments[v];for(var V in E)Object.prototype.hasOwnProperty.call(E,V)&&(g[V]=E[V])}return g},te={top:"top",bottom:"bottom"},m={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:te.top,force:te.top,confirm:te.top,input:te.top,select:te.bottom,date:te.top}},C=T.setOptions=function(g){m=Z({},m,g,{classes:Z({},m.classes,g.classes),ids:Z({},m.ids,g.ids),positions:Z({},m.positions,g.positions)})},G=function(){return new Promise(function(g){return setTimeout(g,0)})},Y=function(g){return new Promise(function(v){return setTimeout(v,1e3*g)})},me=function(){document.activeElement&&document.activeElement.blur()},x=function(){var g="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(v){var E=16*Math.random()|0,V=v==="x"?E:3&E|8;return V.toString(16)});return"notie-"+g},A={1:m.classes.backgroundSuccess,success:m.classes.backgroundSuccess,2:m.classes.backgroundWarning,warning:m.classes.backgroundWarning,3:m.classes.backgroundError,error:m.classes.backgroundError,4:m.classes.backgroundInfo,info:m.classes.backgroundInfo,5:m.classes.backgroundNeutral,neutral:m.classes.backgroundNeutral},f=function(){return m.transitionSelector+" "+m.transitionDuration+"s "+m.transitionCurve},k=function(g){return g.keyCode===13},L=function(g){return g.keyCode===27},$=function(g,v){g.classList.add(m.classes.container),g.style[v]="-10000px",document.body.appendChild(g),g.style[v]="-"+g.offsetHeight+"px",g.listener&&window.addEventListener("keydown",g.listener),G().then(function(){g.style.transition=f(),g.style[v]=0})},W=function(g,v){var E=document.getElementById(g);E&&(E.style[v]="-"+E.offsetHeight+"px",E.listener&&window.removeEventListener("keydown",E.listener),Y(m.transitionDuration).then(function(){E.parentNode&&E.parentNode.removeChild(E)}))},R=function(g,v){var E=document.createElement("div");E.id=m.ids.overlay,E.classList.add(m.classes.overlay),E.classList.add(m.classes.backgroundOverlay),E.style.opacity=0,g&&m.overlayClickDismiss&&(E.onclick=function(){W(g.id,v),X()}),document.body.appendChild(E),G().then(function(){E.style.transition=f(),E.style.opacity=m.overlayOpacity})},X=function(){var g=document.getElementById(m.ids.overlay);g.style.opacity=0,Y(m.transitionDuration).then(function(){g.parentNode&&g.parentNode.removeChild(g)})},F=T.hideAlerts=function(g){var v=document.getElementsByClassName(m.classes.alert);if(v.length){for(var E=0;E<v.length;E++){var V=v[E];W(V.id,V.position)}g&&Y(m.transitionDuration).then(function(){return g()})}},Te=T.alert=function(g){var v=g.type,E=v===void 0?4:v,V=g.text,O=g.time,se=O===void 0?m.alertTime:O,ge=g.stay,ue=ge!==void 0&&ge,D=g.position,U=D===void 0?m.positions.alert||U.top:D;me(),F();var q=document.createElement("div"),J=x();q.id=J,q.position=U,q.classList.add(m.classes.textbox),q.classList.add(A[E]),q.classList.add(m.classes.alert),q.innerHTML='<div class="'+m.classes.textboxInner+'">'+V+"</div>",q.onclick=function(){return W(J,U)},q.listener=function(M){(k(M)||L(M))&&F()},$(q,U),se&&se<1&&(se=1),!ue&&se&&Y(se).then(function(){return W(J,U)})},ve=T.force=function(g,v){var E=g.type,V=E===void 0?5:E,O=g.text,se=g.buttonText,ge=se===void 0?"OK":se,ue=g.callback,D=g.position,U=D===void 0?m.positions.force||U.top:D;me(),F();var q=document.createElement("div"),J=x();q.id=J;var M=document.createElement("div");M.classList.add(m.classes.textbox),M.classList.add(m.classes.backgroundInfo),M.innerHTML='<div class="'+m.classes.textboxInner+'">'+O+"</div>";var K=document.createElement("div");K.classList.add(m.classes.button),K.classList.add(A[V]),K.innerHTML=ge,K.onclick=function(){W(J,U),X(),ue?ue():v&&v()},q.appendChild(M),q.appendChild(K),q.listener=function(ie){k(ie)&&K.click()},$(q,U),R()},we=T.confirm=function(g,v,E){var V=g.text,O=g.submitText,se=O===void 0?"Yes":O,ge=g.cancelText,ue=ge===void 0?"Cancel":ge,D=g.submitCallback,U=g.cancelCallback,q=g.position,J=q===void 0?m.positions.confirm||J.top:q;me(),F();var M=document.createElement("div"),K=x();M.id=K;var ie=document.createElement("div");ie.classList.add(m.classes.textbox),ie.classList.add(m.classes.backgroundInfo),ie.innerHTML='<div class="'+m.classes.textboxInner+'">'+V+"</div>";var ne=document.createElement("div");ne.classList.add(m.classes.button),ne.classList.add(m.classes.elementHalf),ne.classList.add(m.classes.backgroundSuccess),ne.innerHTML=se,ne.onclick=function(){W(K,J),X(),D?D():v&&v()};var I=document.createElement("div");I.classList.add(m.classes.button),I.classList.add(m.classes.elementHalf),I.classList.add(m.classes.backgroundError),I.innerHTML=ue,I.onclick=function(){W(K,J),X(),U?U():E&&E()},M.appendChild(ie),M.appendChild(ne),M.appendChild(I),M.listener=function(fe){k(fe)?ne.click():L(fe)&&I.click()},$(M,J),R(M,J)},Q=function(g,v,E){var V=g.text,O=g.submitText,se=O===void 0?"Submit":O,ge=g.cancelText,ue=ge===void 0?"Cancel":ge,D=g.submitCallback,U=g.cancelCallback,q=g.position,J=q===void 0?m.positions.input||J.top:q,M=S(g,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);me(),F();var K=document.createElement("div"),ie=x();K.id=ie;var ne=document.createElement("div");ne.classList.add(m.classes.textbox),ne.classList.add(m.classes.backgroundInfo),ne.innerHTML='<div class="'+m.classes.textboxInner+'">'+V+"</div>";var I=document.createElement("input");I.classList.add(m.classes.inputField),I.setAttribute("autocapitalize",M.autocapitalize||"none"),I.setAttribute("autocomplete",M.autocomplete||"off"),I.setAttribute("autocorrect",M.autocorrect||"off"),I.setAttribute("autofocus",M.autofocus||"true"),I.setAttribute("inputmode",M.inputmode||"verbatim"),I.setAttribute("max",M.max||""),I.setAttribute("maxlength",M.maxlength||""),I.setAttribute("min",M.min||""),I.setAttribute("minlength",M.minlength||""),I.setAttribute("placeholder",M.placeholder||""),I.setAttribute("spellcheck",M.spellcheck||"default"),I.setAttribute("step",M.step||"any"),I.setAttribute("type",M.type||"text"),I.value=M.value||"",M.allowed&&(I.oninput=function(){var ce=void 0;if(Array.isArray(M.allowed)){for(var de="",Le=M.allowed,Fe=0;Fe<Le.length;Fe++)Le[Fe]==="an"?de+="0-9a-zA-Z":Le[Fe]==="a"?de+="a-zA-Z":Le[Fe]==="n"&&(de+="0-9"),Le[Fe]==="s"&&(de+=" ");ce=new RegExp("[^"+de+"]","g")}else b(M.allowed)==="object"&&(ce=M.allowed);I.value=I.value.replace(ce,"")});var fe=document.createElement("div");fe.classList.add(m.classes.button),fe.classList.add(m.classes.elementHalf),fe.classList.add(m.classes.backgroundSuccess),fe.innerHTML=se,fe.onclick=function(){W(ie,J),X(),D?D(I.value):v&&v(I.value)};var _e=document.createElement("div");_e.classList.add(m.classes.button),_e.classList.add(m.classes.elementHalf),_e.classList.add(m.classes.backgroundError),_e.innerHTML=ue,_e.onclick=function(){W(ie,J),X(),U?U(I.value):E&&E(I.value)},K.appendChild(ne),K.appendChild(I),K.appendChild(fe),K.appendChild(_e),K.listener=function(ce){k(ce)?fe.click():L(ce)&&_e.click()},$(K,J),I.focus(),R(K,J)};T.input=Q;var Qe=T.select=function(g,v){var E=g.text,V=g.cancelText,O=V===void 0?"Cancel":V,se=g.cancelCallback,ge=g.choices,ue=g.position,D=ue===void 0?m.positions.select||D.top:ue;me(),F();var U=document.createElement("div"),q=x();U.id=q;var J=document.createElement("div");J.classList.add(m.classes.textbox),J.classList.add(m.classes.backgroundInfo),J.innerHTML='<div class="'+m.classes.textboxInner+'">'+E+"</div>",U.appendChild(J),ge.forEach(function(K,ie){var ne=K.type,I=ne===void 0?1:ne,fe=K.text,_e=K.handler,ce=document.createElement("div");ce.classList.add(A[I]),ce.classList.add(m.classes.button),ce.classList.add(m.classes.selectChoice);var de=ge[ie+1];de&&!de.type&&(de.type=1),de&&de.type===I&&ce.classList.add(m.classes.selectChoiceRepeated),ce.innerHTML=fe,ce.onclick=function(){W(q,D),X(),_e()},U.appendChild(ce)});var M=document.createElement("div");M.classList.add(m.classes.backgroundNeutral),M.classList.add(m.classes.button),M.innerHTML=O,M.onclick=function(){W(q,D),X(),se?se():v&&v()},U.appendChild(M),U.listener=function(K){L(K)&&M.click()},$(U,D),R(U,D)},oe=T.date=function(g,v,E){var V=g.value,O=V===void 0?new Date:V,se=g.submitText,ge=se===void 0?"OK":se,ue=g.cancelText,D=ue===void 0?"Cancel":ue,U=g.submitCallback,q=g.cancelCallback,J=g.position,M=J===void 0?m.positions.date||M.top:J;me(),F();var K="&#9662",ie=document.createElement("div"),ne=document.createElement("div"),I=document.createElement("div"),fe=function(le){ie.innerHTML=m.dateMonths[le.getMonth()],ne.innerHTML=le.getDate(),I.innerHTML=le.getFullYear()},_e=function(le){var re=new Date(O.getFullYear(),O.getMonth()+1,0).getDate(),Be=le.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(Be)>re&&(Be=re.toString()),le.target.textContent=Be,Number(Be)<1&&(Be="1"),O.setDate(Number(Be))},ce=function(le){var re=le.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);le.target.textContent=re,O.setFullYear(Number(re))},de=function(le){fe(O)},Le=function(le){var re=new Date(O.getFullYear(),O.getMonth()+le+1,0).getDate();O.getDate()>re&&O.setDate(re),O.setMonth(O.getMonth()+le),fe(O)},Fe=function(le){O.setDate(O.getDate()+le),fe(O)},Tt=function(le){var re=O.getFullYear()+le;re<0?O.setFullYear(0):O.setFullYear(O.getFullYear()+le),fe(O)},Ge=document.createElement("div"),at=x();Ge.id=at;var ct=document.createElement("div");ct.classList.add(m.classes.backgroundInfo);var Se=document.createElement("div");Se.classList.add(m.classes.dateSelectorInner);var He=document.createElement("div");He.classList.add(m.classes.button),He.classList.add(m.classes.elementThird),He.classList.add(m.classes.dateSelectorUp),He.innerHTML=K;var Ae=document.createElement("div");Ae.classList.add(m.classes.button),Ae.classList.add(m.classes.elementThird),Ae.classList.add(m.classes.dateSelectorUp),Ae.innerHTML=K;var Ne=document.createElement("div");Ne.classList.add(m.classes.button),Ne.classList.add(m.classes.elementThird),Ne.classList.add(m.classes.dateSelectorUp),Ne.innerHTML=K,ie.classList.add(m.classes.element),ie.classList.add(m.classes.elementThird),ie.innerHTML=m.dateMonths[O.getMonth()],ne.classList.add(m.classes.element),ne.classList.add(m.classes.elementThird),ne.setAttribute("contentEditable",!0),ne.addEventListener("input",_e),ne.addEventListener("blur",de),ne.innerHTML=O.getDate(),I.classList.add(m.classes.element),I.classList.add(m.classes.elementThird),I.setAttribute("contentEditable",!0),I.addEventListener("input",ce),I.addEventListener("blur",de),I.innerHTML=O.getFullYear();var Ye=document.createElement("div");Ye.classList.add(m.classes.button),Ye.classList.add(m.classes.elementThird),Ye.innerHTML=K;var Je=document.createElement("div");Je.classList.add(m.classes.button),Je.classList.add(m.classes.elementThird),Je.innerHTML=K;var ot=document.createElement("div");ot.classList.add(m.classes.button),ot.classList.add(m.classes.elementThird),ot.innerHTML=K,He.onclick=function(){return Le(1)},Ae.onclick=function(){return Fe(1)},Ne.onclick=function(){return Tt(1)},Ye.onclick=function(){return Le(-1)},Je.onclick=function(){return Fe(-1)},ot.onclick=function(){return Tt(-1)};var Pe=document.createElement("div");Pe.classList.add(m.classes.button),Pe.classList.add(m.classes.elementHalf),Pe.classList.add(m.classes.backgroundSuccess),Pe.innerHTML=ge,Pe.onclick=function(){W(at,M),X(),U?U(O):v&&v(O)};var Xe=document.createElement("div");Xe.classList.add(m.classes.button),Xe.classList.add(m.classes.elementHalf),Xe.classList.add(m.classes.backgroundError),Xe.innerHTML=D,Xe.onclick=function(){W(at,M),X(),q?q(O):E&&E(O)},Se.appendChild(He),Se.appendChild(Ae),Se.appendChild(Ne),Se.appendChild(ie),Se.appendChild(ne),Se.appendChild(I),Se.appendChild(Ye),Se.appendChild(Je),Se.appendChild(ot),ct.appendChild(Se),Ge.appendChild(ct),Ge.appendChild(Pe),Ge.appendChild(Xe),Ge.listener=function(le){k(le)?Pe.click():L(le)&&Xe.click()},$(Ge,M),R(Ge,M)};T.default={alert:Te,force:ve,confirm:we,input:Q,select:Qe,date:oe,setOptions:C,hideAlerts:F}}])})}).call(n,a(0)(r))}])})}),vn={};bs(vn,{default:()=>Bt});var ys=wn(xn());Ts(vn,wn(xn()));var{default:yn,...ws}=ys,Bt=yn!==void 0?yn:ws;var fr=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function br(e,t,r,n){e.addEventListener?e.addEventListener(t,r,n):e.attachEvent&&e.attachEvent("on".concat(t),function(){r(window.event)})}function En(e,t){for(var r=t.slice(0,t.length-1),n=0;n<r.length;n++)r[n]=e[r[n].toLowerCase()];return r}function Mn(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");for(var t=e.split(","),r=t.lastIndexOf("");r>=0;)t[r-1]+=",",t.splice(r,1),r=t.lastIndexOf("");return t}function xs(e,t){for(var r=e.length>=t.length?e:t,n=e.length>=t.length?t:e,a=!0,i=0;i<r.length;i++)n.indexOf(r[i])===-1&&(a=!1);return a}var xt={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":fr?173:189,"=":fr?61:187,";":fr?59:186,"'":222,"[":219,"]":221,"\\":220},$e={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},wr={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},xe={16:!1,18:!1,17:!1,91:!1},pe={};for(wt=1;wt<20;wt++)xt["f".concat(wt)]=111+wt;var wt,ae=[],Sn=!1,_n="all",Ln=[],Ft=function(e){return xt[e.toLowerCase()]||$e[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},vs=function(e){return Object.keys(xt).find(function(t){return xt[t]===e})},Ss=function(e){return Object.keys($e).find(function(t){return $e[t]===e})};function Pn(e){_n=e||"all"}function vt(){return _n||"all"}function As(){return ae.slice(0)}function ks(){return ae.map(function(e){return vs(e)||Ss(e)||String.fromCharCode(e)})}function Cs(e){var t=e.target||e.srcElement,r=t.tagName,n=!0;return(t.isContentEditable||(r==="INPUT"||r==="TEXTAREA"||r==="SELECT")&&!t.readOnly)&&(n=!1),n}function Es(e){return typeof e=="string"&&(e=Ft(e)),ae.indexOf(e)!==-1}function Ms(e,t){var r,n;e||(e=vt());for(var a in pe)if(Object.prototype.hasOwnProperty.call(pe,a))for(r=pe[a],n=0;n<r.length;)r[n].scope===e?r.splice(n,1):n++;vt()===e&&Pn(t||"all")}function _s(e){var t=e.keyCode||e.which||e.charCode,r=ae.indexOf(t);if(r>=0&&ae.splice(r,1),e.key&&e.key.toLowerCase()==="meta"&&ae.splice(0,ae.length),(t===93||t===224)&&(t=91),t in xe){xe[t]=!1;for(var n in $e)$e[n]===t&&(Ve[n]=!1)}}function Ls(e){if(typeof e>"u")Object.keys(pe).forEach(function(c){return delete pe[c]});else if(Array.isArray(e))e.forEach(function(c){c.key&&Tr(c)});else if(typeof e=="object")e.key&&Tr(e);else if(typeof e=="string"){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a=r[0],i=r[1];typeof a=="function"&&(i=a,a=""),Tr({key:e,scope:a,method:i,splitKey:"+"})}}var Tr=function(e){var t=e.key,r=e.scope,n=e.method,a=e.splitKey,i=a===void 0?"+":a,c=Mn(t);c.forEach(function(o){var l=o.split(i),u=l.length,d=l[u-1],T=d==="*"?"*":Ft(d);if(pe[T]){r||(r=vt());var _=u>1?En($e,l):[];pe[T]=pe[T].filter(function(S){var b=n?S.method===n:!0;return!(b&&S.scope===r&&xs(S.mods,_))})}})};function An(e,t,r,n){if(t.element===n){var a;if(t.scope===r||t.scope==="all"){a=t.mods.length>0;for(var i in xe)Object.prototype.hasOwnProperty.call(xe,i)&&(!xe[i]&&t.mods.indexOf(+i)>-1||xe[i]&&t.mods.indexOf(+i)===-1)&&(a=!1);(t.mods.length===0&&!xe[16]&&!xe[18]&&!xe[17]&&!xe[91]||a||t.shortcut==="*")&&t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function kn(e,t){var r=pe["*"],n=e.keyCode||e.which||e.charCode;if(Ve.filter.call(this,e)){if((n===93||n===224)&&(n=91),ae.indexOf(n)===-1&&n!==229&&ae.push(n),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(b){var Z=wr[b];e[b]&&ae.indexOf(Z)===-1?ae.push(Z):!e[b]&&ae.indexOf(Z)>-1?ae.splice(ae.indexOf(Z),1):b==="metaKey"&&e[b]&&ae.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(ae=ae.slice(ae.indexOf(Z))))}),n in xe){xe[n]=!0;for(var a in $e)$e[a]===n&&(Ve[a]=!0);if(!r)return}for(var i in xe)Object.prototype.hasOwnProperty.call(xe,i)&&(xe[i]=e[wr[i]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(ae.indexOf(17)===-1&&ae.push(17),ae.indexOf(18)===-1&&ae.push(18),xe[17]=!0,xe[18]=!0);var c=vt();if(r)for(var o=0;o<r.length;o++)r[o].scope===c&&(e.type==="keydown"&&r[o].keydown||e.type==="keyup"&&r[o].keyup)&&An(e,r[o],c,t);if(n in pe){for(var l=0;l<pe[n].length;l++)if((e.type==="keydown"&&pe[n][l].keydown||e.type==="keyup"&&pe[n][l].keyup)&&pe[n][l].key){for(var u=pe[n][l],d=u.splitKey,T=u.key.split(d),_=[],S=0;S<T.length;S++)_.push(Ft(T[S]));_.sort().join("")===ae.sort().join("")&&An(e,u,c,t)}}}}function Ps(e){return Ln.indexOf(e)>-1}function Ve(e,t,r){ae=[];var n=Mn(e),a=[],i="all",c=document,o=0,l=!1,u=!0,d="+",T=!1;for(r===void 0&&typeof t=="function"&&(r=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(i=t.scope),t.element&&(c=t.element),t.keyup&&(l=t.keyup),t.keydown!==void 0&&(u=t.keydown),t.capture!==void 0&&(T=t.capture),typeof t.splitKey=="string"&&(d=t.splitKey)),typeof t=="string"&&(i=t);o<n.length;o++)e=n[o].split(d),a=[],e.length>1&&(a=En($e,e)),e=e[e.length-1],e=e==="*"?"*":Ft(e),e in pe||(pe[e]=[]),pe[e].push({keyup:l,keydown:u,scope:i,mods:a,shortcut:n[o],method:r,key:n[o],splitKey:d,element:c});typeof c<"u"&&!Ps(c)&&window&&(Ln.push(c),br(c,"keydown",function(_){kn(_,c)},T),Sn||(Sn=!0,br(window,"focus",function(){ae=[]},T)),br(c,"keyup",function(_){kn(_,c),_s(_)},T))}function Rs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(pe).forEach(function(r){var n=pe[r].filter(function(a){return a.scope===t&&a.shortcut===e});n.forEach(function(a){a&&a.method&&a.method()})})}var yr={getPressedKeyString:ks,setScope:Pn,getScope:vt,deleteScope:Ms,getPressedKeyCodes:As,isPressed:Es,filter:Cs,trigger:Rs,unbind:Ls,keyMap:xt,modifier:$e,modifierMap:wr};for(Ut in yr)Object.prototype.hasOwnProperty.call(yr,Ut)&&(Ve[Ut]=yr[Ut]);var Ut;typeof document<"u"&&(Cn=window.hotkeys,Ve.noConflict=function(e){return e&&window.hotkeys===Ve&&(window.hotkeys=Cn),Ve},window.hotkeys=Ve);var Cn;var Is=class{#e=performance.now();reset(){this.#e=performance.now()}stop(e){let t=performance.now(),r=Math.round(t-this.#e);this.#e=t}},Os=class{#e=1;get level(){return this.#e}setLevel(e){switch(e){case"debug":this.#e=0;break;case"info":this.#e=1;break;case"warn":this.#e=2;break;case"error":this.#e=3;break;case"fatal":this.#e=4;break}}debug(...e){this.#e<=0}v(...e){this.#e<=0}info(...e){this.#e<=1}l(...e){this.#e<=1}warn(...e){this.#e<=2}error(...e){this.#e<=3}fatal(...e){this.#e<=4}timing(){return this.level===0?new Is:{reset:()=>{},stop:()=>{}}}},oc=new Os,Ds="poegempjloogba",Ns="ension://";var Bs="rome-ext";var sc="ch"+Bs+Ns+"cofdb"+Ds+"gkncekinflcnj";var{entries:Fn,setPrototypeOf:Rn,isFrozen:Fs,getPrototypeOf:js,getOwnPropertyDescriptor:Ws}=Object,{freeze:Ie,seal:Ke,create:Hs}=Object,{apply:Cr,construct:Er}=typeof Reflect<"u"&&Reflect;Cr||(Cr=function(e,t,r){return e.apply(t,r)});Ie||(Ie=function(e){return e});Ke||(Ke=function(e){return e});Er||(Er=function(e,t){return new e(...t)});var qs=We(Array.prototype.forEach),In=We(Array.prototype.pop),St=We(Array.prototype.push),Ht=We(String.prototype.toLowerCase),xr=We(String.prototype.toString),Ks=We(String.prototype.match),qe=We(String.prototype.replace),zs=We(String.prototype.indexOf),Gs=We(String.prototype.trim),Ue=We(RegExp.prototype.test),At=Vs(TypeError);function We(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return Cr(e,t,n)}}function Vs(e){return function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return Er(e,r)}}function H(e,t,r){var n;r=(n=r)!==null&&n!==void 0?n:Ht,Rn&&Rn(e,null);let a=t.length;for(;a--;){let i=t[a];if(typeof i=="string"){let c=r(i);c!==i&&(Fs(t)||(t[a]=c),i=c)}e[i]=!0}return e}function mt(e){let t=Hs(null);for(let[r,n]of Fn(e))t[r]=n;return t}function jt(e,t){for(;e!==null;){let n=Ws(e,t);if(n){if(n.get)return We(n.get);if(typeof n.value=="function")return We(n.value)}e=js(e)}function r(n){return null}return r}var On=Ie(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),vr=Ie(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Sr=Ie(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),$s=Ie(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Ar=Ie(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Ys=Ie(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Dn=Ie(["#text"]),Nn=Ie(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),kr=Ie(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Bn=Ie(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Wt=Ie(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Js=Ke(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Xs=Ke(/<%[\w\W]*|[\w\W]*%>/gm),Zs=Ke(/\${[\w\W]*}/gm),Qs=Ke(/^data-[\-\w.\u00B7-\uFFFF]/),ei=Ke(/^aria-[\-\w]+$/),jn=Ke(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ti=Ke(/^(?:\w+script|data):/i),ri=Ke(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Wn=Ke(/^html$/i),Un=Object.freeze({__proto__:null,MUSTACHE_EXPR:Js,ERB_EXPR:Xs,TMPLIT_EXPR:Zs,DATA_ATTR:Qs,ARIA_ATTR:ei,IS_ALLOWED_URI:jn,IS_SCRIPT_OR_DATA:ti,ATTR_WHITESPACE:ri,DOCTYPE_NAME:Wn}),ni=()=>typeof window>"u"?null:window,ai=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null,n="data-tt-policy-suffix";t&&t.hasAttribute(n)&&(r=t.getAttribute(n));let a="dompurify"+(r?"#"+r:"");try{return e.createPolicy(a,{createHTML(i){return i},createScriptURL(i){return i}})}catch{return null}};function Hn(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ni(),t=s=>Hn(s);if(t.version="3.0.3",t.removed=[],!e||!e.document||e.document.nodeType!==9)return t.isSupported=!1,t;let r=e.document,n=r.currentScript,{document:a}=e,{DocumentFragment:i,HTMLTemplateElement:c,Node:o,Element:l,NodeFilter:u,NamedNodeMap:d=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:T,DOMParser:_,trustedTypes:S}=e,b=l.prototype,Z=jt(b,"cloneNode"),te=jt(b,"nextSibling"),m=jt(b,"childNodes"),C=jt(b,"parentNode");if(typeof c=="function"){let s=a.createElement("template");s.content&&s.content.ownerDocument&&(a=s.content.ownerDocument)}let G,Y="",{implementation:me,createNodeIterator:x,createDocumentFragment:A,getElementsByTagName:f}=a,{importNode:k}=r,L={};t.isSupported=typeof Fn=="function"&&typeof C=="function"&&me&&me.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:$,ERB_EXPR:W,TMPLIT_EXPR:R,DATA_ATTR:X,ARIA_ATTR:F,IS_SCRIPT_OR_DATA:Te,ATTR_WHITESPACE:ve}=Un,{IS_ALLOWED_URI:we}=Un,Q=null,Qe=H({},[...On,...vr,...Sr,...Ar,...Dn]),oe=null,g=H({},[...Nn,...kr,...Bn,...Wt]),v=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),E=null,V=null,O=!0,se=!0,ge=!1,ue=!0,D=!1,U=!1,q=!1,J=!1,M=!1,K=!1,ie=!1,ne=!0,I=!1,fe="user-content-",_e=!0,ce=!1,de={},Le=null,Fe=H({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Tt=null,Ge=H({},["audio","video","img","source","image","track"]),at=null,ct=H({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Se="http://www.w3.org/1998/Math/MathML",He="http://www.w3.org/2000/svg",Ae="http://www.w3.org/1999/xhtml",Ne=Ae,Ye=!1,Je=null,ot=H({},[Se,He,Ae],xr),Pe,Xe=["application/xhtml+xml","text/html"],le="text/html",re,Be=null,Wa=a.createElement("form"),Yr=function(s){return s instanceof RegExp||s instanceof Function},rr=function(s){if(!(Be&&Be===s)){if((!s||typeof s!="object")&&(s={}),s=mt(s),Pe=Xe.indexOf(s.PARSER_MEDIA_TYPE)===-1?Pe=le:Pe=s.PARSER_MEDIA_TYPE,re=Pe==="application/xhtml+xml"?xr:Ht,Q="ALLOWED_TAGS"in s?H({},s.ALLOWED_TAGS,re):Qe,oe="ALLOWED_ATTR"in s?H({},s.ALLOWED_ATTR,re):g,Je="ALLOWED_NAMESPACES"in s?H({},s.ALLOWED_NAMESPACES,xr):ot,at="ADD_URI_SAFE_ATTR"in s?H(mt(ct),s.ADD_URI_SAFE_ATTR,re):ct,Tt="ADD_DATA_URI_TAGS"in s?H(mt(Ge),s.ADD_DATA_URI_TAGS,re):Ge,Le="FORBID_CONTENTS"in s?H({},s.FORBID_CONTENTS,re):Fe,E="FORBID_TAGS"in s?H({},s.FORBID_TAGS,re):{},V="FORBID_ATTR"in s?H({},s.FORBID_ATTR,re):{},de="USE_PROFILES"in s?s.USE_PROFILES:!1,O=s.ALLOW_ARIA_ATTR!==!1,se=s.ALLOW_DATA_ATTR!==!1,ge=s.ALLOW_UNKNOWN_PROTOCOLS||!1,ue=s.ALLOW_SELF_CLOSE_IN_ATTR!==!1,D=s.SAFE_FOR_TEMPLATES||!1,U=s.WHOLE_DOCUMENT||!1,M=s.RETURN_DOM||!1,K=s.RETURN_DOM_FRAGMENT||!1,ie=s.RETURN_TRUSTED_TYPE||!1,J=s.FORCE_BODY||!1,ne=s.SANITIZE_DOM!==!1,I=s.SANITIZE_NAMED_PROPS||!1,_e=s.KEEP_CONTENT!==!1,ce=s.IN_PLACE||!1,we=s.ALLOWED_URI_REGEXP||jn,Ne=s.NAMESPACE||Ae,v=s.CUSTOM_ELEMENT_HANDLING||{},s.CUSTOM_ELEMENT_HANDLING&&Yr(s.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(v.tagNameCheck=s.CUSTOM_ELEMENT_HANDLING.tagNameCheck),s.CUSTOM_ELEMENT_HANDLING&&Yr(s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(v.attributeNameCheck=s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),s.CUSTOM_ELEMENT_HANDLING&&typeof s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(v.allowCustomizedBuiltInElements=s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),D&&(se=!1),K&&(M=!0),de&&(Q=H({},[...Dn]),oe=[],de.html===!0&&(H(Q,On),H(oe,Nn)),de.svg===!0&&(H(Q,vr),H(oe,kr),H(oe,Wt)),de.svgFilters===!0&&(H(Q,Sr),H(oe,kr),H(oe,Wt)),de.mathMl===!0&&(H(Q,Ar),H(oe,Bn),H(oe,Wt))),s.ADD_TAGS&&(Q===Qe&&(Q=mt(Q)),H(Q,s.ADD_TAGS,re)),s.ADD_ATTR&&(oe===g&&(oe=mt(oe)),H(oe,s.ADD_ATTR,re)),s.ADD_URI_SAFE_ATTR&&H(at,s.ADD_URI_SAFE_ATTR,re),s.FORBID_CONTENTS&&(Le===Fe&&(Le=mt(Le)),H(Le,s.FORBID_CONTENTS,re)),_e&&(Q["#text"]=!0),U&&H(Q,["html","head","body"]),Q.table&&(H(Q,["tbody"]),delete E.tbody),s.TRUSTED_TYPES_POLICY){if(typeof s.TRUSTED_TYPES_POLICY.createHTML!="function")throw At('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof s.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw At('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');G=s.TRUSTED_TYPES_POLICY,Y=G.createHTML("")}else G===void 0&&(G=ai(S,n)),G!==null&&typeof Y=="string"&&(Y=G.createHTML(""));Ie&&Ie(s),Be=s}},Jr=H({},["mi","mo","mn","ms","mtext"]),Xr=H({},["foreignobject","desc","title","annotation-xml"]),Ha=H({},["title","style","font","a","script"]),It=H({},vr);H(It,Sr),H(It,$s);let nr=H({},Ar);H(nr,Ys);let qa=function(s){let y=C(s);(!y||!y.tagName)&&(y={namespaceURI:Ne,tagName:"template"});let h=Ht(s.tagName),ee=Ht(y.tagName);return Je[s.namespaceURI]?s.namespaceURI===He?y.namespaceURI===Ae?h==="svg":y.namespaceURI===Se?h==="svg"&&(ee==="annotation-xml"||Jr[ee]):!!It[h]:s.namespaceURI===Se?y.namespaceURI===Ae?h==="math":y.namespaceURI===He?h==="math"&&Xr[ee]:!!nr[h]:s.namespaceURI===Ae?y.namespaceURI===He&&!Xr[ee]||y.namespaceURI===Se&&!Jr[ee]?!1:!nr[h]&&(Ha[h]||!It[h]):!!(Pe==="application/xhtml+xml"&&Je[s.namespaceURI]):!1},ut=function(s){St(t.removed,{element:s});try{s.parentNode.removeChild(s)}catch{s.remove()}},ar=function(s,y){try{St(t.removed,{attribute:y.getAttributeNode(s),from:y})}catch{St(t.removed,{attribute:null,from:y})}if(y.removeAttribute(s),s==="is"&&!oe[s])if(M||K)try{ut(y)}catch{}else try{y.setAttribute(s,"")}catch{}},Zr=function(s){let y,h;if(J)s="<remove></remove>"+s;else{let Re=Ks(s,/^[\r\n\t ]+/);h=Re&&Re[0]}Pe==="application/xhtml+xml"&&Ne===Ae&&(s='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+s+"</body></html>");let ee=G?G.createHTML(s):s;if(Ne===Ae)try{y=new _().parseFromString(ee,Pe)}catch{}if(!y||!y.documentElement){y=me.createDocument(Ne,"template",null);try{y.documentElement.innerHTML=Ye?Y:ee}catch{}}let be=y.body||y.documentElement;return s&&h&&be.insertBefore(a.createTextNode(h),be.childNodes[0]||null),Ne===Ae?f.call(y,U?"html":"body")[0]:U?y.documentElement:be},Qr=function(s){return x.call(s.ownerDocument||s,s,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,null,!1)},Ka=function(s){return s instanceof T&&(typeof s.nodeName!="string"||typeof s.textContent!="string"||typeof s.removeChild!="function"||!(s.attributes instanceof d)||typeof s.removeAttribute!="function"||typeof s.setAttribute!="function"||typeof s.namespaceURI!="string"||typeof s.insertBefore!="function"||typeof s.hasChildNodes!="function")},Ot=function(s){return typeof o=="object"?s instanceof o:s&&typeof s=="object"&&typeof s.nodeType=="number"&&typeof s.nodeName=="string"},Ze=function(s,y,h){L[s]&&qs(L[s],ee=>{ee.call(t,y,h,Be)})},en=function(s){let y;if(Ze("beforeSanitizeElements",s,null),Ka(s))return ut(s),!0;let h=re(s.nodeName);if(Ze("uponSanitizeElement",s,{tagName:h,allowedTags:Q}),s.hasChildNodes()&&!Ot(s.firstElementChild)&&(!Ot(s.content)||!Ot(s.content.firstElementChild))&&Ue(/<[/\w]/g,s.innerHTML)&&Ue(/<[/\w]/g,s.textContent))return ut(s),!0;if(!Q[h]||E[h]){if(!E[h]&&rn(h)&&(v.tagNameCheck instanceof RegExp&&Ue(v.tagNameCheck,h)||v.tagNameCheck instanceof Function&&v.tagNameCheck(h)))return!1;if(_e&&!Le[h]){let ee=C(s)||s.parentNode,be=m(s)||s.childNodes;if(be&&ee){let Re=be.length;for(let Oe=Re-1;Oe>=0;--Oe)ee.insertBefore(Z(be[Oe],!0),te(s))}}return ut(s),!0}return s instanceof l&&!qa(s)||(h==="noscript"||h==="noembed")&&Ue(/<\/no(script|embed)/i,s.innerHTML)?(ut(s),!0):(D&&s.nodeType===3&&(y=s.textContent,y=qe(y,$," "),y=qe(y,W," "),y=qe(y,R," "),s.textContent!==y&&(St(t.removed,{element:s.cloneNode()}),s.textContent=y)),Ze("afterSanitizeElements",s,null),!1)},tn=function(s,y,h){if(ne&&(y==="id"||y==="name")&&(h in a||h in Wa))return!1;if(!(se&&!V[y]&&Ue(X,y))&&!(O&&Ue(F,y))){if(!oe[y]||V[y]){if(!(rn(s)&&(v.tagNameCheck instanceof RegExp&&Ue(v.tagNameCheck,s)||v.tagNameCheck instanceof Function&&v.tagNameCheck(s))&&(v.attributeNameCheck instanceof RegExp&&Ue(v.attributeNameCheck,y)||v.attributeNameCheck instanceof Function&&v.attributeNameCheck(y))||y==="is"&&v.allowCustomizedBuiltInElements&&(v.tagNameCheck instanceof RegExp&&Ue(v.tagNameCheck,h)||v.tagNameCheck instanceof Function&&v.tagNameCheck(h))))return!1}else if(!at[y]&&!Ue(we,qe(h,ve,""))&&!((y==="src"||y==="xlink:href"||y==="href")&&s!=="script"&&zs(h,"data:")===0&&Tt[s])&&!(ge&&!Ue(Te,qe(h,ve,"")))&&h)return!1}return!0},rn=function(s){return s.indexOf("-")>0},nn=function(s){let y,h,ee,be;Ze("beforeSanitizeAttributes",s,null);let{attributes:Re}=s;if(!Re)return;let Oe={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:oe};for(be=Re.length;be--;){y=Re[be];let{name:ye,namespaceURI:dt}=y;if(h=ye==="value"?y.value:Gs(y.value),ee=re(ye),Oe.attrName=ee,Oe.attrValue=h,Oe.keepAttr=!0,Oe.forceKeepAttr=void 0,Ze("uponSanitizeAttribute",s,Oe),h=Oe.attrValue,Oe.forceKeepAttr||(ar(ye,s),!Oe.keepAttr))continue;if(!ue&&Ue(/\/>/i,h)){ar(ye,s);continue}D&&(h=qe(h,$," "),h=qe(h,W," "),h=qe(h,R," "));let an=re(s.nodeName);if(tn(an,ee,h)){if(I&&(ee==="id"||ee==="name")&&(ar(ye,s),h=fe+h),G&&typeof S=="object"&&typeof S.getAttributeType=="function"&&!dt)switch(S.getAttributeType(an,ee)){case"TrustedHTML":{h=G.createHTML(h);break}case"TrustedScriptURL":{h=G.createScriptURL(h);break}}try{dt?s.setAttributeNS(dt,ye,h):s.setAttribute(ye,h),In(t.removed)}catch{}}}Ze("afterSanitizeAttributes",s,null)},za=function s(y){let h,ee=Qr(y);for(Ze("beforeSanitizeShadowDOM",y,null);h=ee.nextNode();)Ze("uponSanitizeShadowNode",h,null),!en(h)&&(h.content instanceof i&&s(h.content),nn(h));Ze("afterSanitizeShadowDOM",y,null)};return t.sanitize=function(s){let y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h,ee,be,Re;if(Ye=!s,Ye&&(s="<!-->"),typeof s!="string"&&!Ot(s))if(typeof s.toString=="function"){if(s=s.toString(),typeof s!="string")throw At("dirty is not a string, aborting")}else throw At("toString is not a function");if(!t.isSupported)return s;if(q||rr(y),t.removed=[],typeof s=="string"&&(ce=!1),ce){if(s.nodeName){let dt=re(s.nodeName);if(!Q[dt]||E[dt])throw At("root node is forbidden and cannot be sanitized in-place")}}else if(s instanceof o)h=Zr("<!---->"),ee=h.ownerDocument.importNode(s,!0),ee.nodeType===1&&ee.nodeName==="BODY"||ee.nodeName==="HTML"?h=ee:h.appendChild(ee);else{if(!M&&!D&&!U&&s.indexOf("<")===-1)return G&&ie?G.createHTML(s):s;if(h=Zr(s),!h)return M?null:ie?Y:""}h&&J&&ut(h.firstChild);let Oe=Qr(ce?s:h);for(;be=Oe.nextNode();)en(be)||(be.content instanceof i&&za(be.content),nn(be));if(ce)return s;if(M){if(K)for(Re=A.call(h.ownerDocument);h.firstChild;)Re.appendChild(h.firstChild);else Re=h;return(oe.shadowroot||oe.shadowrootmod)&&(Re=k.call(r,Re,!0)),Re}let ye=U?h.outerHTML:h.innerHTML;return U&&Q["!doctype"]&&h.ownerDocument&&h.ownerDocument.doctype&&h.ownerDocument.doctype.name&&Ue(Wn,h.ownerDocument.doctype.name)&&(ye="<!DOCTYPE "+h.ownerDocument.doctype.name+`>
`+ye),D&&(ye=qe(ye,$," "),ye=qe(ye,W," "),ye=qe(ye,R," ")),G&&ie?G.createHTML(ye):ye},t.setConfig=function(s){rr(s),q=!0},t.clearConfig=function(){Be=null,q=!1},t.isValidAttribute=function(s,y,h){Be||rr({});let ee=re(s),be=re(y);return tn(ee,be,h)},t.addHook=function(s,y){typeof y=="function"&&(L[s]=L[s]||[],St(L[s],y))},t.removeHook=function(s){if(L[s])return In(L[s])},t.removeHooks=function(s){L[s]&&(L[s]=[])},t.removeAllHooks=function(){L={}},t}var qn=Hn();var Lc=Bt.alert;var Kn={lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF","translate-pdf":"\u70B9\u51FB\u7FFB\u8BD1 PDF","noSupportTranslate-pdf":"\u811A\u672C\u4E0D\u652F\u6301\u8BF7\u4F7F\u7528\u63D2\u4EF6","translate-firefox-local-pdf":"\u70B9\u51FB\u53BB\u4E0A\u4F20PDF",enableLineBreak:"\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",help:"\u5E2E\u52A9",browserShortcutsNoteForFirefox:"Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",browserShortcutsNoteForChrome:"\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",browserShortcutsSucks:"\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E\u683C\u5F0F\u4E3A\uFF1A",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u514D\u8D39\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u6709\u9053/\u817E\u8BAF\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u811A\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.toggleOnlyTransation":"\u7FFB\u8BD1\u5E76\u9690\u85CF\u539F\u6587/\u663E\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u5F00\u8BBE\u7F6E\u9875","browser.toggleTranslationMask":"\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C","browser.translateLocalPdfFile":"\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6","browser.openEbookViewer":"\u9605\u8BFB\u672C\u5730\u7535\u5B50\u4E66","browser.openEbookBuilder":"\u5236\u4F5C\u53CC\u8BED Epub \u7535\u5B50\u4E66","browser.translateLocalHtmlFile":"\u7FFB\u8BD1 HTML/txt \u6587\u4EF6","browser.donateContext":"\u4E86\u89E3\u8D5E\u52A9\u798F\u5229","browser.translateLocalSubtitleFile":"\u7FFB\u8BD1\u672C\u5730\u5B57\u5E55\u6587\u4EF6",confirmResetConfig:"\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",translationLineBreakSettingTitle:"\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",smartLineBreak:"\u667A\u80FD\u6362\u884C",alwaysLineBreak:"\u603B\u662F\u6362\u884C",isShowContextMenu:"\u5C06\u7FFB\u8BD1\u7F51\u9875\u52A0\u5165\u53F3\u952E\u83DC\u5355\u9879",toggleBeta:"\u5F00\u542F Beta \u6D4B\u8BD5\u7279\u6027",betaDescription:"\u542F\u7528\u4ECD\u5728\u5B9E\u9A8C\u6027\u7684\u529F\u80FD\uFF0C\u4EE5\u53CA\u6D4B\u8BD5\u4E2D\u7684\u7FFB\u8BD1\u670D\u52A1\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7EC4</1>\u4E86\u89E3\u66F4\u591A\u3002",translationLineBreakSettingDescription:"\u603B\u662F\u6362\u884C\u9002\u7528\u4E8E\u8F83\u5C11\u5185\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F50\u3002\uFF08\u5728\u5185\u5BB9\u8F83\u591A\u7684\u957F\u6BB5\u843D(\u8D85\u8FC7{count}\u4E2A\u5B57\u7B26) \u4F7F\u7528\u667A\u80FD\u6362\u884C\uFF0C\u66F4\u7701\u7A7A\u95F4\uFF09",tempTranslateDomainTitle:"\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",tempTranslateDomainDescription:"\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1\uFF0C\u53EF\u8BBE\u7F6E\u4E34\u65F6\u65F6\u957F",xMinutes:"{count} \u5206\u949F",disabled:"\u7981\u7528",changelog:"\u66F4\u65B0\u65E5\u5FD7",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",toggleTranslationMaskWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5219\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875(\u4EC5\u8BD1\u6587)/\u663E\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8BBE\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",mouseHoldKey:"+ {key} \u7FFB\u8BD1\u8BE5\u6BB5",mouseHoldKeyAuto:"\u76F4\u63A5\u7FFB\u8BD1\u8BE5\u6BB5",mouseHoldKeyOff:"\u4E0D\u505A\u4EFB\u4F55\u4E8B\u60C5",mouseHoldKeyOther:"\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E(\u6253\u5F00\u8BBE\u7F6E)",mouseHoldKeyCustomKey:"{key} \u7FFB\u8BD1\u8BE5\u6BB5",mouseHoverHoldKey:"\u9F20\u6807\u60AC\u505C\u540C\u65F6\u6309\u4E0B\u5FEB\u6377\u952E\u7FFB\u8BD1\u6BB5\u843D","mouse-translate":"\u5F53\u9F20\u6807\u60AC\u505C",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",resetThisSuccess:"\u91CD\u7F6E\u6210\u529F",saved:"\u4FDD\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u5BFC\u5165\u914D\u7F6E",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",goAdvancedInterfaceSettings:"\u53BB\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u9875\u9762",advanced:"\u8FDB\u9636\u8BBE\u7F6E",advancedDescription:"\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\u3002\u4EC5\u5BF9\u4E8E\u66F4\u4E13\u4E1A\u7684\u7528\u6237\uFF0C\u63D0\u4F9B\u66F4\u4E2A\u6027\u5316\u7684\u8BBE\u7F6E\u9879\u3002",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"\u4EF7\u683C","translate to the bottom of the page":"\u8FDB\u5165\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u8FDB\u5165\u7F51\u9875\u5C06\u7ACB\u5373\u7FFB\u8BD1\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\u3002\u5173\u95ED\u5219\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u6240\u6709\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\u3002\u5173\u95ED\u5219\u4F7F\u7528\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\uFF0C\u4EC5\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u76F4\u63A5\u7FFB\u8BD1\u9875\u9762\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\uFF0C\u800C\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF","interface language":"\u754C\u9762\u8BED\u8A00","display both the original text and the translation":"\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587","keyboard shortcuts":"\u952E\u76D8\u5FEB\u6377\u952E",modify:"\u4FEE\u6539\u5FEB\u6377\u952E",reset:"\u91CD\u7F6E",close:"\u5173\u95ED",homepage:"\u4E3B\u9875",more:"\u66F4\u591A",moreOptions:"\u5C55\u5F00\u66F4\u591A\u81EA\u5B9A\u4E49\u9009\u9879",translateTheWholePage:"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u6240\u6709\u533A\u57DF",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",changeToOnlyTranslationMode:"\u5207\u6362\u4E3A\u4EC5\u663E\u793A\u8BD1\u6587",changeToDualTranslationMode:"\u5207\u6362\u4E3A\u53CC\u8BED\u7FFB\u8BD1",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8",translateTheMainPage:"\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",badUserscriptBrowser:"\u5F53\u524D\u6D4F\u89C8\u5668\u6CA1\u6709\u6B63\u786E\u5B9E\u73B0\u6CB9\u7334\u6269\u5C55\u7684\u63A5\u53E3\uFF08\u6BD4\u5982\u83B7\u53D6\u6CB9\u7334\u811A\u672C\u81EA\u8EAB\u7684\u7248\u672C\u53F7\u4FE1\u606F\uFF09\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6<1>\u652F\u6301\u6CB9\u7334\u6269\u5C55</1>\u7684\u6D4F\u89C8\u5668\u5982 Firefox",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u8BBE\u7F6E",about:"\u5173\u4E8E",service:"\u7FFB\u8BD1\u670D\u52A1",needAction:"(\u53BB\u8BBE\u7F6E)",goSettings:"\u53BB\u8BBE\u7F6E",needActionForOptions:"(\u9700\u8BBE\u7F6E)",translationEngine:"\u5F15\u64CE\u9009\u9879",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6807\u8BED\u8A00",popupSourceLanguage:"\u539F\u6587\u8BED\u8A00",popupTarget:"\u76EE\u6807\u8BED\u8A00",popupService:"\u7FFB\u8BD1\u670D\u52A1",forThisSite:"\u9488\u5BF9\u8BE5\u7F51\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u603B\u662F\u7FFB\u8BD1 {language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8BD1 {language}",alwaysTranslateSomeSite:"\u603B\u662F\u7FFB\u8BD1 {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",add:"\u6DFB\u52A0",default:"\u9ED8\u8BA4",forThisLanguage:"\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A","add url":"\u8F93\u5165URL",edit:"\u7F16\u8F91","translate other languages into specific language":"\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00","select translation service":"\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",language:"\u8BED\u8A00","show-original":"\u663E\u793A\u539F\u6587",translate:"\u7FFB\u8BD1",Translated:"\u5DF2\u7FFB\u8BD1",Translating:"\u7FFB\u8BD1\u4E2D",Error:"\u9519\u8BEF",allowCacheTranslations:"\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09","translation display":"\u8BD1\u6587\u663E\u793A\u6837\u5F0F","select diplay style":"\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8BBE\u7F6E",import_export:"\u5BFC\u5165/\u5BFC\u51FA",import_export_title:"\u5BFC\u5165/\u5BFC\u51FA\u914D\u7F6E",syncToGoogleDrive:"\u7ACB\u5373\u4E0E Google Drive \u540C\u6B65",previewAllThemes:"\u9884\u89C8\u5168\u90E8\u6837\u5F0F","translationTheme.none":"\u65E0","translationTheme.grey":"\u9ED1\u7070\u8272","translationTheme.dashed":"\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.dotted":"\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.dashedBorder":"\u865A\u7EBF\u8FB9\u6846","translationTheme.solidBorder":"\u5B9E\u7EBF\u8FB9\u6846","translationTheme.underline":"\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C\uFF08\u5B66\u4E60\u6A21\u5F0F\uFF09","translationTheme.opacity":"\u900F\u660E\u6548\u679C","translationTheme.paper":"\u767D\u7EB8\u9634\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7EBF","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u9A6C\u514B\u7B14","translationTheme.marker2":"\u9A6C\u514B\u7B142","translationTheme.blockquote":"\u5F15\u7528\u6837\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u4F53","translationTheme.bold":"\u52A0\u7C97","translationTheme.thinDashed":"\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDashed":"\u7CFB\u7EDF\u81EA\u5E26\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDotted":"\u7CFB\u7EDF\u81EA\u5E26\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.nativeUnderline":"\u7CFB\u7EDF\u81EA\u5E26\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.wavy":"\u6CE2\u6D6A\u7EBF","translationServices.tencent":"\u817E\u8BAF\u7FFB\u8BD1\u541B","translationServices.tenAlpha":"\u817E\u8BAF\u7FFB\u8BD1\u541B(Alpha)","translationServices.google":"\u8C37\u6B4C\u7FFB\u8BD1","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8BD1","translationServices.aliyun":"\u963F\u91CC\u4E91\u7FFB\u8BD1","translationServices.volc":"\u706B\u5C71\u7FFB\u8BD1","translationServices.deeplx":"DeeplX(Beta)","translationServices.bing":"\u5FAE\u8F6F\u7FFB\u8BD1","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8BD1","translationServices.azure":"Azure \u7FFB\u8BD1","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9A\u9A6C\u900A\u7FFB\u8BD1","translationServices.mock":"\u6A21\u62DF\u7FFB\u8BD1","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u4E91\u5C0F\u8BD1","translationServices.cai":"\u5F69\u4E91\u5C0F\u8BD1 (Alpha)","translationServices.volcAlpha":"\u706B\u5C71 (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8BD1","translationServices.you":"\u6709\u9053\u7FFB\u8BD1 (Alpha)","translationServices.transmart":"\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1","translationServices.niu":"\u5C0F\u725B\u7FFB\u8BD1","translationServices.papago":"Papago \u7FFB\u8BD1","translationServices.d":"D (Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"\u7FFB\u8BD1\u9875\u9762\u6807\u9898","always languages":"\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u5C06\u8DF3\u8FC7\u7FFB\u8BD1",enableUserscriptPagePopup:"\u5728\u9875\u9762\u4E0A\u663E\u793A\u60AC\u6D6E\u7403",enableUserscriptPagePopupDescription:"\u5173\u95ED\u60AC\u6D6E\u7403\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u60AC\u6D6E\u7403\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","always sites":"\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740","always translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740","never translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u603B\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8BD1\u6587\u6837\u5F0F",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",delete:"\u5220\u9664","languages.auto":"\u81EA\u52A8\u68C0\u6D4B",syncToCloud:"\u540C\u6B65\u5230\u4E91\u7AEF",syncToCloudDescription:"\u4E0A\u4F20\u5230\u4E91\u7AEF\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u6D4F\u89C8\u5668/\u6CB9\u7334\u811A\u672C\u4E4B\u95F4\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",authFail:"\u6388\u6743\u5931\u8D25",syncTitle:"\u624B\u52A8\u5907\u4EFD\u7BA1\u7406",import_hint:"\u5BFC\u5165",upload:"\u4E0A\u4F20",revokeAuth:"\u64A4\u9500\u6388\u6743",uploadFail:"\u4E0A\u4F20\u5931\u8D25",download:"\u4E0B\u8F7D",importSuccess:"\u5BFC\u5165\u6210\u529F",importFail:"\u5BFC\u5165\u5931\u8D25",deleteFail:"\u5220\u9664\u5931\u8D25",backupToCloud:"\u624B\u52A8\u7BA1\u7406\u5907\u4EFD\u6587\u4EF6",create_new_backup:"\u65B0\u589E\u5907\u4EFD\u8282\u70B9",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5907\u4EFD{count}\u4E2A\u4E0D\u540C\u7684\u8282\u70B9, \u8BF7\u5220\u9664\u4E0D\u9700\u8981\u7684\u8282\u70B9",backupToCloudDescription:"\u624B\u52A8\u4E0A\u4F20\u6216\u6062\u590D\u5907\u4EFD\u6587\u4EF6\uFF0C\u6700\u591A\u5141\u8BB83\u4E2A\u4E0D\u540C\u7684\u5907\u4EFD",successSyncConfig:"\u6210\u529F\u4E0E\u4E91\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u8D25",updatedAt:"\u66F4\u65B0\u4E8E {date}",lastSyncedAt:"\u4E0A\u6B21\u68C0\u67E5\u4E8E {date}",downloadFail:"\u4E0B\u8F7D\u5931\u8D25",clickToDownload:"\u70B9\u51FB\u4E0B\u8F7D",aboutLabel:"\u5173\u4E8E - \u53CD\u9988","browser.openAboutPage":"\u5173\u4E8E/\u53CD\u9988",aboutLabelWithoutSponsor:"\u5173\u4E8E - \u53CD\u9988",aboutIntro:"\u8BE5\u6269\u5C55\u514D\u8D39\u4F7F\u7528\uFF0C\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F <br/><br/>\u4F60\u53EF\u4EE5\u5173\u6CE8\u6211\u4EEC\u7684<3>\u63A8\u7279</3>\uFF0C<4>Telegram \u9891\u9053</4>\uFF0C\u5FAE\u4FE1\u516C\u4F17\u53F7\uFF0C\u5FAE\u4FE1\u4EA4\u6D41\u7FA4\uFF0C\u6216\u8005\u4E0B\u65B9\u7684<5>\u90AE\u4EF6\u8BA2\u9605</5>\u8FFD\u8E2A\u66F4\u65B0\u3002",aboutIntroWithoutSponsor:"\u8BE5\u6269\u5C55\u514D\u8D39\u4F7F\u7528\uFF0C\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F ",projectHomepage:"\u9879\u76EE\u4E3B\u9875",joinTelegramGroup:"\u52A0\u5165\u7528\u6237\u4EA4\u6D41\u7FA4\u53C2\u4E0E\u529F\u80FD\u8BA8\u8BBA",wechatPublicAccount:"\u5FAE\u4FE1\u516C\u4F17\u53F7",wechatCommunities:"\u5FAE\u4FE1\u4EA4\u6D41\u7FA4",qqCommunities:"QQ \u4EA4\u6D41\u9891\u9053",joinTelegramChannel:"\u5173\u6CE8 Telegram \u9891\u9053\u83B7\u53D6\u6700\u65B0\u66F4\u65B0",feedbackAndJoin:"\u95EE\u9898\u53CD\u9988/\u52A0\u7FA4",autoSync:"\u81EA\u52A8\u5B9A\u65F6\u540C\u6B65",loadingThemeTitle:"Loading \u6837\u5F0F",loadingThemeDescription:"\u8BBE\u7F6E\u7B49\u5F85\u8BD1\u6587\u52A0\u8F7D\u65F6\u7684\u6837\u5F0F","loadingTheme.spinner":"\u8F6C\u5708\u52A8\u753B","loadingTheme.text":"\u9759\u6001\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u663E\u793A",developerDescription:"\u53EF\u4EE5\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u76F8\u5173\u7684\u6587\u6863","edit border color":"\u4FEE\u6539\u8FB9\u6846\u989C\u8272",successSyncButNoChange:"\u5F53\u524D\u914D\u7F6E\u4E0E\u4E91\u7AEF\u4E00\u81F4",customTheme:"\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u5927\u5C0F","customThemeLabel.borderColor":"\u8FB9\u6846\u989C\u8272","customThemeLabel.borderRadius":"\u8FB9\u6846\u5706\u89D2","customThemeLabel.textColor":"\u6587\u5B57\u989C\u8272","customThemeLabel.backgroundColor":"\u80CC\u666F\u989C\u8272","customThemeLabel.zoom":"\u5B57\u4F53\u7F29\u653E\u6BD4\u4F8B (%)",resetToDefaultColor:"\u6062\u590D\u4E3A\u9ED8\u8BA4\u989C\u8272",resetToDefaultSettings:"\u6062\u590D\u4E3A\u9ED8\u8BA4\u8BBE\u7F6E",isTranslateTitle:"\u5F00\u542F\u7FFB\u8BD1\u7F51\u9875\u6807\u9898",isTranslateTitleDescription:"\u5F00\u542F\u540E\uFF0C\u7F51\u9875\u6807\u9898\u4F1A\u88AB\u7FFB\u8BD1",verifyService:"\u70B9\u6B64\u6D4B\u8BD5\u670D\u52A1",verified:"\u9A8C\u8BC1\u6210\u529F","field.model":"\u6A21\u578B","field.translationEngine":"\u7FFB\u8BD1\u5F15\u64CE","field.limitPerMinute":"\u6BCF\u5206\u949F\u6700\u5927\u8BF7\u6C42\u6570","field.limitPerSecond":"\u6BCF\u79D2\u6700\u5927\u8BF7\u6C42\u6570","field.maxTextLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6587\u672C\u957F\u5EA6","field.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6BB5\u843D\u6570","field.apiUrl":"\u81EA\u5B9A\u4E49 API \u63A5\u53E3\u5730\u5740","description.limitPerMinute":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u5206\u949F\u5F00\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.limitPerSecond":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u949F\u5F00\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.prompt":"\u4EE5\u7528\u6237\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00,\u53EF\u4EE5\u7701\u7565 {{text}} \uFF08\u63A8\u8350\uFF09, \u5C06\u4F1A\u5728\u5355\u72EC\u4F5C\u4E3A\u4E00\u6BB5\u53D1\u9001\u7ED9 OpenAI","description.maxTextLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u5B57\u7B26\u6570\uFF0C\u592A\u5927\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5C1D\u8BD5\u8C03\u6574\u8BE5\u9009\u9879\u6765\u4F18\u5316\u901F\u5EA6","description.systemPrompt":"\u4EE5\u7CFB\u7EDF\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00","description.model":"OpenAI \u7684\u6A21\u578B\uFF0C\u53EF\u4EE5\u4E3A gpt-3.5-turbo, gpt-4 \u7B49","description.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u53D1\u9001\u7ED9 OpenAI \u7684\u6BB5\u843D\u6570\u91CF\uFF0C\u5982\u679C\u6BB5\u843D\u6570\u91CF\u8FC7\u591A\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162\uFF0C\u8BBE\u7F6E\u4E3A 1 \u4E2A\u6BB5\u843D\u65F6\uFF0C\u4F53\u9A8C\u6700\u597D","description.apiUrl":"\u8BF7\u6DFB\u52A0\u5177\u4F53\u5E26\u6709\u8DEF\u5F84\u7684\u7F51\u5740",enabledExtension:"\u542F\u7528\u6269\u5C55",clickToDisableExtension:"\u70B9\u51FB\u7981\u7528\u6269\u5C55",clickToEnableExtension:"\u70B9\u51FB\u542F\u7528\u6269\u5C55",hasBeenDisabled:"\u5DF2\u7981\u7528","show password":"\u663E\u793A\u5BC6\u7801",customContent:"\u8F93\u5165\u81EA\u5B9A\u4E49\u6A21\u578B\u540D\u79F0",inputOptions:"\u8F93\u5165\u6846\u589E\u5F3A",enableInputTranslation:"\u662F\u5426\u542F\u7528\u8F93\u5165\u6846\u589E\u5F3A",enableInputTranslationDescription:"\u542F\u7528\u540E\uFF0C\u5728\u8F93\u5165\u6846\u76F4\u63A5\u8F93\u5165 {startingKey}{startingKey} \u4F60\u597D\uFF0C\u7136\u540E\u5FEB\u901F\u8FDE\u51FB{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8BD1\u4E3A\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",enableInputTranslationDescriptionForNoneKey:"\u542F\u7528\u540E\uFF0C\u5728\u8F93\u5165\u6846\u76F4\u63A5\u8F93\u5165\uFF1A\u4F60\u597D\u4E16\u754C\uFF0C\u7136\u540E\u5FEB\u901F\u8FDE\u51FB{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8BD1\u4E3A\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTargetLanguage:"\u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTargetLanguageDescription:"\u8F93\u5165\u6846\u7FFB\u8BD1\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00\uFF0C\u4E5F\u5C31\u662F {startingKey}{startingKey} \u4F5C\u4E3A\u89E6\u53D1\u8BCD\u7684\u9ED8\u8BA4\u8BED\u8A00",inputTargetLanguageDescriptionForNoneKey:"\u8F93\u5165\u6846\u7FFB\u8BD1\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputStartingTriggerKeyTitle:"\u9009\u62E9\u4E00\u4E2A\u8F93\u5165\u5F00\u59CB\u7684\u89E6\u53D1\u5B57\u7B26",inputStartingTriggerKeyDescription:"{startingKey}en \u8868\u793A\u7FFB\u8BD1\u4E3A\u82F1\u6587\uFF0C{startingKey}ja \u8868\u793A\u7FFB\u8BD1\u4E3A\u65E5\u6587\uFF0C {startingKey}{startingKey} \u8868\u793A\u7FFB\u8BD1\u4E3A\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputStartingTriggerKeyDescriptionForNoneKey:"\u5F53\u524D\u8BBE\u7F6E\u4E3A\u65E0\u9700\u524D\u7F00\uFF0C\u76F4\u63A5\u7FFB\u8BD1\uFF0C\u5F53\u5FEB\u901F\u8FDE\u51FB3\u6B21\u7ED3\u675F\u5B57\u7B26\u65F6\uFF0C\u5C06\u76F4\u63A5\u7FFB\u8BD1\u6574\u4E2A\u6587\u672C\u6846\u7684\u5185\u5BB9\u4E3A\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTrailingTriggerKeyTitle:"\u9009\u62E9\u4E00\u4E2A\u8F93\u5165\u7ED3\u675F\u7684\u89E6\u53D1\u5B57\u7B26",inputTrailingTriggerKeyDescription:"\u5FEB\u901F\u8FDE\u51FB3\u6B21{trailingKey} \u5C06\u4F1A\u5F00\u59CB\u7FFB\u8BD1",spaceKey:"<\u7A7A\u683C\u952E>",noneKey:"\u65E0\u9700\u524D\u7F00\uFF0C\u76F4\u63A5\u7FFB\u8BD1\u6574\u4E2A\u6587\u672C\u6846",inputTranslationBlockUrlsTitle:"\u5207\u52FF\u5728\u4EE5\u4E0B\u7F51\u5740\u4E2D\u542F\u7528\u8F93\u5165\u6846\u589E\u5F3A",inputTranslationBlockUrlsDescription:"\u5728\u4EE5\u4E0B\u7F51\u5740\u4E2D\uFF0C\u8F93\u5165\u6846\u589E\u5F3A\u5C06\u4E0D\u4F1A\u751F\u6548",clickToSeeQuickDemo:"\u70B9\u51FB\u5C55\u5F00 30 \u79D2\u5FEB\u901F\u6559\u5B66\u89C6\u9891",inputHelperInfo:"\u8BF4\u660E\uFF1A\u6211\u4EEC\u7279\u522B\u9488\u5BF9\u5728\u4E2D\u6587\u8F93\u5165\u6CD5\u4E0B\u90E8\u5206\u89E6\u53D1\u5B57\u7B26\u4F1A\u53D8\u6210\u4E2D\u6587\u6807\u70B9\u7B26\u53F7\u8FD9\u4EF6\u4E8B\u505A\u4E86\u4F18\u5316\uFF0C\u6BD4\u5982\u641C\u72D7\u8F93\u5165\u6CD5\u4E0B / \u4F1A\u53D8\u6210\u987F\u53F7 \u3001\uFF0C\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u652F\u6301\u6240\u6709\u89E6\u53D1\u7B26\u5BF9\u5E94\u7684\u4E2D\u6587\u7B26\u53F7\uFF0C\u4E5F\u5C31\u662F\u8BF4 // \u3001\u3001 \u90FD\u4F1A\u88AB\u8BC6\u522B\u4E3A\u89E6\u53D1\u5B57\u7B26\u3002<br/><br/>\u540C\u65F6\u6211\u4EEC\u4E5F\u652F\u6301\u8BED\u8A00\u4EE3\u7801\u7684\u4E2D\u6587\u522B\u540D\u4F5C\u4E3A\u547D\u4EE4\uFF0C\u6BD4\u5982 /\u65E5\u6587 \u4F60\u597D\u4E16\u754C \u4F1A\u88AB\u7FFB\u8BD1\u4E3A\u65E5\u6587\uFF0C<1>\u70B9\u6B64\u67E5\u770B\u6240\u6709\u652F\u6301\u7684\u8BED\u8A00\u4EE3\u7801</1>\u3002",reloadCurrentPage:"\u8BF7\u5148\u5237\u65B0\u5F53\u524D\u9875\u9762\uFF0C\u518D\u5F00\u59CB\u7FFB\u8BD1",noLocalFilePermissionForPDF:"\u6682\u65E0\u6743\u9650\u8BFB\u53D6\u672C\u5730\u6587\u4EF6\uFF0C\u8BF7\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\uFF0C\u7136\u540E\u4E0A\u4F20\u672C\u5730\u6587\u4EF6",noPermissionForThisPage:"\u26A0\uFE0F \u6682\u65E0\u6743\u9650\u7FFB\u8BD1\u5F53\u524D\u9875\u9762",retryAllParagraphs:"\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D",retryAllButton:"\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D",errorTooltipTitle:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u539F\u56E0",errorModalTitle:"\u7FFB\u8BD1\u670D\u52A1\u6216\u7F51\u7EDC\u4F3C\u4E4E\u51FA\u4E86\u70B9\u95EE\u9898..."};var zn={lineBreakMaxTextCount:"\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u5143\u6578\u91CF","translate-pdf":"\u9EDE\u9078\u7FFB\u8B6F PDF","translate-firefox-local-pdf":"\u9EDE\u9078\u4E0A\u50B3 PDF",enableLineBreak:"\u958B\u555F\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",sponsorLabel:"$1 \u8D77\u8D0A\u52A9\u958B\u767C\u8005 (\u6708\u4ED8\u6216\u50C5\u8D0A\u52A9\u4E00\u6B21\u5747\u53EF)",help:"\u8AAA\u660E",browserShortcutsNoteForFirefox:"Firefox \u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u9644\u52A0\u5143\u4EF6\u7BA1\u7406\u9801\u9762 \u300Cabout:addons\u300D\uFF0C\u7136\u5F8C\u9EDE\u9078\u300C\u8A2D\u5B9A\u5716\u793A\u300D\uFF0C\u518D\u9EDE\u9078\u300C\u7BA1\u7406\u64F4\u5145\u5957\u4EF6\u5FEB\u901F\u9375\u300D\u5373\u53EF\u8A2D\u5B9A",browserShortcutsNoteForChrome:"Chromium \u6838\u5FC3\u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u64F4\u5145\u529F\u80FD\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u300C\u9375\u76E4\u5FEB\u901F\u9375\u300D\u9801\u9762(chrome://extensions/shortcuts)\u8A2D\u5B9A\uFF0C\u9EDE\u9078\u4E0B\u65B9\u6309\u9215\u524D\u5F80\u5FEB\u901F\u9375\u7BA1\u7406\u9801\u9762\u3002",browserShortcutsSucks:"\u81EA\u5B9A\u4E49\u5FEB\u901F\u9375\u683C\u5F0F\u70BA\uFF1A",enableLineBreakDescription:"\u555F\u7528\u5F8C\uFF0C\u5C07\u6703\u5728\u9577\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u5B57\u5143\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u5957\u4EF6\uFF0C\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u652F\u63F4 Deepl/Google/\u9A30\u8A0A/\u706B\u5C71\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u652F\u63F4 Firefox/Chrome/\u6CB9\u7334\u8173\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.toggleOnlyTransation":"\u7FFB\u8B6F\u4E26\u96B1\u85CF\u539F\u6587/\u986F\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.openOptionsPage":"\u958B\u555F\u8A2D\u5B9A\u9801\u9762","browser.toggleTranslationMask":"\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C","browser.translateLocalPdfFile":"\u7FFB\u8B6F\u672C\u6A5F PDF \u6A94\u6848","browser.openEbookViewer":"\u95B1\u8B80\u672C\u6A5F\u96FB\u5B50\u66F8","browser.openEbookBuilder":"\u88FD\u4F5C\u96D9\u8A9E Epub \u96FB\u5B50\u66F8","browser.translateLocalHtmlFile":"\u7FFB\u8B6F HTML/txt \u6A94\u6848","browser.translateLocalSubtitleFile":"\u7FFB\u8B6F\u5B57\u5E55\u6A94\u6848","browser.donateContext":"\u4E86\u89E3\u8D0A\u52A9\u798F\u5229",confirmResetConfig:"\u4F60\u78BA\u5B9A\u8981\u91CD\u8A2D\u8A2D\u5B9A\u55CE\uFF1F",translationLineBreakSettingTitle:"\u8B6F\u6587\u63DB\u884C\u8A2D\u5B9A",smartLineBreak:"\u667A\u6167\u63DB\u884C",alwaysLineBreak:"\u7E3D\u662F\u63DB\u884C",isShowContextMenu:"\u5C07\u7DB2\u9801\u7FFB\u8B6F\u529F\u80FD\u52A0\u5165\u53F3\u9375\u9078\u55AE",toggleBeta:"\u958B\u555F Beta \u6E2C\u8A66\u529F\u80FD",betaDescription:"\u555F\u7528\u4ECD\u5728\u5BE6\u9A57\u7684\u529F\u80FD\u4EE5\u53CA\u6E2C\u8A66\u4E2D\u7684\u7FFB\u8B6F\u670D\u52D9\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7D44</1>\u4E86\u89E3\u66F4\u591A\u3002",translationLineBreakSettingDescription:"\u7E3D\u662F\u63DB\u884C\u9069\u7528\u65BC\u8F03\u5C11\u5167\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F4A\u3002(\u5728\u5167\u5BB9\u8F03\u591A\u7684\u9577\u6BB5\u843D(\u8D85\u904E {count} \u500B\u5B57\u5143) \u4F7F\u7528\u667A\u6167\u63DB\u884C\u6703\u66F4\u7701\u7A7A\u9593)",tempTranslateDomainTitle:"\u81E8\u6642\u958B\u555F\u7DB2\u7AD9\u7FFB\u8B6F\u7684\u6642\u9577",tempTranslateDomainDescription:"\u7576\u624B\u52D5\u7FFB\u8B6F\u67D0\u500B\u7DB2\u9801\u7684\u6642\u5019\uFF0C\u81E8\u6642\u958B\u555F\u8A72\u7DB2\u7AD9\u70BA\u81EA\u52D5\u7FFB\u8B6F",xMinutes:"{count} \u5206\u9418",disabled:"\u505C\u7528",changelog:"\u66F4\u65B0\u8A18\u9304",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u6642\u89F8\u6478\u87A2\u5E55\u5247\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",toggleTranslationMaskWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u6642\u89F8\u6478\u5247\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C",addUrlDescription:"\u53EF\u4EE5\u70BA\u7DB2\u57DF\u540D\u7A31\uFF0C\u540C\u6642\u652F\u63F4\u842C\u7528\u5B57\u5143\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8A2D\u5B9A",clickToExpandConfig:"\u5C55\u958B\u76EE\u524D\u8A2D\u5B9A",import:"\u5F9E\u6A94\u6848\u532F\u5165",export:"\u532F\u51FA\u70BA\u6A94\u6848",toggleDebug:"\u5728\u4E3B\u63A7\u53F0\u986F\u793A\u5075\u932F\u8A18\u9304","fingers.0":"\u95DC\u9589","fingers.2":"\u96D9\u6307\u89F8\u6478","fingers.3":"\u4E09\u6307\u89F8\u6478","fingers.4":"\u56DB\u6307\u89F8\u6478","fingers.5":"\u4E94\u6307\u89F8\u6478",document:"\u8AAA\u660E\u6587\u4EF6",resetSuccess:"\u91CD\u8A2D\u6240\u6709\u8A2D\u5B9A\u6210\u529F",resetThisSuccess:"\u91CD\u8A2D\u6210\u529F",saved:"\u5132\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u532F\u5165\u8A2D\u5B9A",goAdvancedSettings:"\u524D\u5F80\u9032\u968E\u8A2D\u5B9A\u9801\u9762",goAdvancedInterfaceSettings:"\u524D\u5F80\u81EA\u8A02\u8A2D\u5B9A\u9801\u9762",advanced:"\u9032\u968E\u8A2D\u5B9A",advancedDescription:"\u6B63\u5E38\u60C5\u6CC1\u7121\u9700\u8A2D\u5B9A\uFF0C\u4FDD\u6301\u9810\u8A2D\u5373\u53EF\u3002\u50C5\u91DD\u5C0D\u66F4\u5C08\u696D\u7684\u4F7F\u7528\u8005\uFF0C\u63D0\u4F9B\u66F4\u500B\u4EBA\u5316\u7684\u8A2D\u5B9A\u9805\u76EE\u3002",developer:"\u958B\u767C\u8005\u8A2D\u5B9A",donateCafe:"\u50F9\u683C","translate to the bottom of the page":"\u9032\u5165\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",feedback:"\u554F\u984C\u56DE\u5831",toggleTranslatePage:"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","mouse-translate":"\u7576\u9F20\u6A19\u6ED1\u904E",mouseHoldKey:"+ {key} \u7FFB\u8B6F\u8A72\u6BB5",mouseHoldKeyAuto:"\u76F4\u63A5\u7FFB\u8B6F\u8A72\u6BB5",mouseHoldKeyOff:"\u4E0D\u505A\u4EFB\u4F55\u4E8B\u60C5",mouseHoldKeyOther:"\u81EA\u5B9A\u7FA9\u5FEB\u6377\u9375(\u6253\u958B\u8A2D\u7F6E)",mouseHoldKeyCustomKey:"{key} \u7FFB\u8B6F\u8A72\u6BB5",mouseHoverHoldKey:"\u9F20\u6A19\u6ED1\u904E\u540C\u6642\u6309\u4E0B X \u9375\u7FFB\u8B6F\u6BB5\u843D",translateToThePageEndImmediatelyDescription:"\u555F\u7528\u5F8C\uFF0C\u9032\u5165\u7DB2\u9801\u5C07\u7ACB\u5373\u7FFB\u8B6F\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\u3002\u95DC\u9589\u5247\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u555F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",translationAreaDescription:"\u555F\u7528\u5F8C\uFF0C\u7DB2\u9801\u7684\u6240\u6709\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\u3002\u95DC\u9589\u5247\u4F7F\u7528\u9810\u8A2D\u7684\u667A\u6167\u8FA8\u8B58\uFF0C\u50C5\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\u3002(\u4E0D\u63A8\u85A6\u958B\u555F)","the number of characters to be translated first":"\u76F4\u63A5\u7FFB\u8B6F\u9801\u9762\u524D\u591A\u5C11\u500B\u5B57\u5143\uFF0C\u800C\u7121\u9700\u7B49\u5F85\u6372\u52D5\u81F3\u53EF\u898B\u5340\u57DF","interface language":"\u4ECB\u9762\u8A9E\u8A00","display both the original text and the translation":"\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587","keyboard shortcuts":"\u9375\u76E4\u5FEB\u901F\u9375",modify:"\u8B8A\u66F4\u5FEB\u901F\u9375",reset:"\u91CD\u8A2D",close:"\u95DC\u9589",homepage:"\u9996\u9801",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u63DB\u70BA\u7FFB\u8B6F\u6240\u6709\u5340\u57DF",changeToTranslateTheMainPage:"\u5207\u63DB\u70BA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF",changeToOnlyTranslationMode:"\u5207\u63DB\u70BA\u50C5\u986F\u793A\u8B6F\u6587",changeToDualTranslationMode:"\u5207\u63DB\u70BA\u96D9\u8A9E\u7FFB\u8B6F",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",translateTheMainPage:"\u667A\u6167\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF","The local rules are up to date":"\u672C\u6A5F\u898F\u5247\u5DF2\u70BA\u6700\u65B0\uFF1A","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u898F\u5247\uFF1A","Checking for updates":"\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u5B98\u65B9\u898F\u5247",localVersionIsTooOld:"\u672C\u6A5F\u5957\u4EF6\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u5957\u4EF6\u81F3 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5617\u8A66\u540C\u6B65",badUserscriptBrowser:"\u76EE\u524D\u700F\u89BD\u5668\u7121\u6CD5\u6B63\u78BA\u5BE6\u73FE\u6CB9\u7334\u5957\u4EF6\u7684\u4ECB\u9762\uFF0C\u8ACB\u4F7F\u7528\u5176\u4ED6<1>\u652F\u63F4\u6CB9\u7334\u5957\u4EF6</1>\u7684\u700F\u89BD\u5668\u5982(Firefox Nightly \u7248\u672C)",foundNewVersion:"\u6709\u65B0\u7248\u672C\u53EF\u7528",theLocalExtensionIsUpToUpdate:"\u76EE\u524D\u5957\u4EF6\u5DF2\u662F\u6700\u65B0\u7248\u672C",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u898F\u5247\u5931\u6557",retry:"\u9EDE\u6B64\u91CD\u8A66",failedReason:"\u5931\u6557\u539F\u56E0",currentRuleVersion:"\u76EE\u524D\u898F\u5247\u7248\u672C",calculating:"\u6B63\u5728\u8A08\u7B97",unknownError:"\u672A\u77E5\u7684\u932F\u8AA4",canNotFetchRemoteRule:"\u7121\u6CD5\u53D6\u5F97\u9060\u7AEF\u898F\u5247",enableAlphaSuccess:"\u5DF2\u555F\u7528 Alpha \u529F\u80FD",disableAlphaSuccess:"\u5DF2\u505C\u7528 Alpha \u529F\u80FD",cacheSize:"\u5FEB\u53D6\u5927\u5C0F\uFF1A",cleaning:"\u6B63\u5728\u6E05\u7406",cleanCache:"\u6E05\u9664\u5FEB\u53D6",options:"\u9078\u9805",about:"\u95DC\u65BC",service:"\u7FFB\u8B6F\u670D\u52D9",needAction:"(\u524D\u5F80\u8A2D\u5B9A)",goSettings:"\u524D\u5F80\u8A2D\u5B9A",needActionForOptions:"(\u9700\u8A2D\u5B9A)",translationEngine:"\u5F15\u64CE\u9078\u9805",sourceLanguage:"\u539F\u6587\u8A9E\u8A00",target:"\u76EE\u6A19\u8A9E\u8A00",popupSourceLanguage:"\u539F\u6587\u8A9E\u8A00",popupTarget:"\u76EE\u6A19\u8A9E\u8A00",popupService:"\u7FFB\u8B6F\u670D\u52D9",forThisSite:"\u91DD\u5C0D\u8A72\u7DB2\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u7E3D\u662F\u7FFB\u8B6F {language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8B6F {language}",alwaysTranslateSomeSite:"\u7E3D\u662F\u7FFB\u8B6F {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8B6F {hostname}",add:"\u65B0\u589E",default:"\u9810\u8A2D",forThisLanguage:"\u91DD\u5C0D\u8A72\u8A9E\u8A00\uFF1A","add url":"\u8F38\u5165 URL",edit:"\u7DE8\u8F2F","translate other languages into specific language":"\u5C07\u5176\u5B83\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u5B9A\u7684\u8A9E\u8A00","select translation service":"\u9078\u64C7\u4F60\u60F3\u7528\u7684\u7FFB\u8B6F\u670D\u52D9",language:"\u8A9E\u8A00","show-original":"\u986F\u793A\u539F\u6587",translate:"\u7FFB\u8B6F",Translated:"\u5DF2\u7FFB\u8B6F",Translating:"\u6B63\u5728\u7FFB\u8B6F",Error:"\u932F\u8AA4",allowCacheTranslations:"\u555F\u7528\u672C\u6A5F\u7FFB\u8B6F\u5FEB\u53D6\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8981\u6C42\uFF09","translation display":"\u8B6F\u6587\u986F\u793A\u6A23\u5F0F","select diplay style":"\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u7BC4\u4F8B",interface:"\u4ECB\u9762\u8A2D\u5B9A",import_export:"\u532F\u5165/\u532F\u51FA",import_export_title:"\u532F\u5165/\u532F\u51FA\u8A2D\u5B9A",syncToGoogleDrive:"\u7ACB\u5373\u8207 Google Drive \u540C\u6B65",previewAllThemes:"\u9810\u89BD\u5168\u90E8\u6A23\u5F0F","translationTheme.none":"\u7121","translationTheme.grey":"\u9ED1\u7070\u8272","translationTheme.dashed":"\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.dotted":"\u9EDE\u72C0\u5E95\u7DDA","translationTheme.dashedBorder":"\u865B\u7DDA\u6846\u7DDA","translationTheme.solidBorder":"\u5BE6\u7DDA\u6846\u7DDA","translationTheme.underline":"\u76F4\u7DDA\u5E95\u7DDA","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C\uFF08\u5B78\u7FD2\u6A21\u5F0F\uFF09","translationTheme.opacity":"\u900F\u660E\u6548\u679C","translationTheme.paper":"\u767D\u7D19\u9670\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u9694\u7DDA","translationTheme.highlight":"\u9192\u76EE\u63D0\u793A","translationTheme.marker":"\u99AC\u514B\u7B46","translationTheme.marker2":"\u99AC\u514B\u7B462","translationTheme.blockquote":"\u5F15\u7528\u6A23\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u9AD4","translationTheme.bold":"\u7C97\u9AD4","translationTheme.thinDashed":"\u7D30\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.nativeDashed":"\u7CFB\u7D71\u5167\u5EFA\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.nativeDotted":"\u7CFB\u7D71\u5167\u5EFA\u9EDE\u72C0\u5E95\u7DDA","translationTheme.nativeUnderline":"\u7CFB\u7D71\u5167\u5EFA\u76F4\u7DDA\u5E95\u7DDA","translationTheme.wavy":"\u6CE2\u5F62\u66F2\u7DDA","translationServices.tencent":"\u9A30\u8A0A\u7FFB\u8B6F\u541B","translationServices.tenAlpha":"\u9A30\u8A0A\u7FFB\u8B6F\u541B(Alpha)","translationServices.google":"Google \u7FFB\u8B6F","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8B6F","translationServices.aliyun":"\u963F\u91CC\u96F2\u7FFB\u8B6F","translationServices.volc":"\u706B\u5C71\u7FFB\u8B6F","translationServices.deeplx":"DeeplX(Beta)","translationServices.bing":"\u5FAE\u8F6F\u7FFB\u8B6F","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8B6F","translationServices.azure":"Azure \u7FFB\u8B6F","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9E\u99AC\u905C\u7FFB\u8B6F","translationServices.mock":"\u6A21\u64EC\u7FFB\u8B6F","translationServices.mock2":"\u6A21\u64EC\u7FFB\u8B6F2","translationServices.caiyun":"\u5F69\u96F2\u5C0F\u8B6F","translationServices.cai":"\u5F69\u96F2\u5C0F\u8B6F (Alpha)","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8B6F(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8B6F","translationServices.you":"\u6709\u9053\u7FFB\u8B6F (Alpha)","translationServices.transmart":"\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F","translationServices.niu":"\u5C0F\u725B\u7FFB\u8B6F","translationServices.papago":"Papago \u7FFB\u8B6F","translationServices.d":"Deepl(Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"\u7FFB\u8B6F\u9801\u9762\u6A19\u984C","always languages":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u8A9E\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u7576\u9801\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u5C07\u8DF3\u904E\u7FFB\u8B6F",enableUserscriptPagePopup:"\u5728\u9801\u9762\u4E0A\u986F\u793A\u61F8\u6D6E\u7403",enableUserscriptPagePopupDescription:"\u95DC\u9589\u61F8\u6D6E\u7403\u5F8C\uFF0C\u53EF\u4EE5\u7528\u5FEB\u901F\u9375/{touch}\u518D\u6B21\u986F\u793A\u3002\u70BA\u9632\u6B62\u4E0D\u614E\u95DC\u9589\u8A72\u9078\u9805\u5F8C\u627E\u4E0D\u5230\u61F8\u6D6E\u7403\uFF0C\u5EFA\u8B70\u5C07\u672C\u8A2D\u5B9A\u9801\u9762\u52A0\u5165\u81F3\u6211\u7684\u6700\u611B","always translate the following languages":"\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","always sites":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740","always translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740","never translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F","please refer to":"\u9700\u8981\u586B\u5BEB\u91D1\u9470\u5F8C\u624D\u53EF\u4F7F\u7528\uFF0C\u8A73\u7D30\u8CC7\u8A0A\u8ACB\u53C3\u8003",KeyAndConfigurationTutorial:"\u300A\u91D1\u9470\u7533\u8ACB\u548C\u8A2D\u5B9A\u6559\u5B78\u300B",useAboveStyleForTheseSites:"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u7E3D\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8B6F\u6587\u6A23\u5F0F",currentUrl:"\u76EE\u524D\u7DB2\u5740",confirm:"\u5132\u5B58",cancel:"\u53D6\u6D88",delete:"\u522A\u9664","languages.auto":"\u81EA\u52D5\u5075\u6E2C",syncToCloud:"\u540C\u6B65\u81F3\u96F2\u7AEF",syncToCloudDescription:"\u4E0A\u50B3\u81F3\u96F2\u7AEF\u5F8C\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u700F\u89BD\u5668/\u6CB9\u7334\u8173\u672C\u4E4B\u9593\u540C\u6B65\u8A2D\u5B9A\uFF0C\u4EE5\u6700\u5F8C\u8B8A\u66F4\u6642\u9593\u70BA\u6E96\u3002",authFail:"\u6388\u6B0A\u5931\u6557",syncTitle:"\u624B\u52D5\u5099\u4EFD\u7BA1\u7406",import_hint:"\u532F\u5165",upload:"\u4E0A\u50B3",revokeAuth:"\u64A4\u92B7\u6388\u6B0A",uploadFail:"\u4E0A\u50B3\u5931\u6557",download:"\u4E0B\u8F09",importSuccess:"\u532F\u5165\u6210\u529F",importFail:"\u532F\u5165\u5931\u6557",deleteFail:"\u522A\u9664\u5931\u6557",backupToCloud:"\u624B\u52D5\u7BA1\u7406\u5099\u4EFD\u6A94\u6848",create_new_backup:"\u65B0\u589E\u5099\u4EFD\u7BC0\u9EDE",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5099\u4EFD{count}\u500B\u4E0D\u540C\u7684\u7BC0\u9EDE\uFF0C\u8ACB\u522A\u9664\u4E0D\u9700\u8981\u7684\u7BC0\u9EDE",backupToCloudDescription:"\u624B\u52D5\u4E0A\u50B3\u6216\u9084\u539F\u5099\u4EFD\u6A94\u6848\uFF0C\u6700\u591A\u5141\u8A31 3 \u500B\u4E0D\u540C\u7684\u5099\u4EFD",successSyncConfig:"\u6210\u529F\u8207\u96F2\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u6557",updatedAt:"\u66F4\u65B0\u65BC {date}",lastSyncedAt:"\u4E0A\u6B21\u6AA2\u67E5\u65BC {date}",downloadFail:"\u4E0B\u8F09\u5931\u6557",clickToDownload:"\u9EDE\u9078\u4E0B\u8F09",aboutLabel:"\u95DC\u65BC - \u554F\u984C\u56DE\u5831",aboutLabelWithoutSponsor:"\u95DC\u65BC - \u554F\u984C\u56DE\u5831","browser.openAboutPage":"\u95DC\u65BC/\u554F\u984C\u56DE\u5831/\u8D0A\u52A9",aboutIntro:"\u672C\u5957\u4EF6\u70BA\u514D\u8CBB\u5957\u4EF6\uFF0C\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F \u4F60\u53EF\u4EE5\u95DC\u6CE8\u6211\u4EEC\u7684<3>Twitter</3>\uFF0C<4>Telegram \u983B\u9053</4>\u4EE5\u53CA\u4E0B\u65B9\u7684<5>\u90F5\u4EF6\u8A02\u95B1</5>\u8FFD\u8E64\u66F4\u65B0\u3002",aboutIntroWithoutSponsor:"\u672C\u5957\u4EF6\u70BA\u514D\u8CBB\u5957\u4EF6\uFF0C\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F ",projectHomepage:"\u5C08\u6848\u9996\u9801",wechatPublicAccount:"\u5FAE\u4FE1\u516C\u4F17\u53F7",wechatCommunities:"\u5FAE\u4FE1\u4EA4\u6D41\u7FA4",qqCommunities:"QQ \u4EA4\u6D41\u9891\u9053",joinTelegramGroup:"\u52A0\u5165\u7528\u6237\u4EA4\u6D41\u7FA4\u7D44\u53C3\u8207\u529F\u80FD\u8A0E\u8AD6",joinTelegramChannel:"\u95DC\u6CE8 Telegram \u983B\u9053\u77AD\u89E3\u66F4\u65B0\u8CC7\u8A0A",feedbackAndJoin:"\u554F\u984C\u56DE\u5831/\u52A0\u5165\u7FA4\u7D44",autoSync:"\u81EA\u52D5\u5B9A\u6642\u540C\u6B65",loadingThemeTitle:"Loading \u6A23\u5F0F",loadingThemeDescription:"\u8A2D\u5B9A\u7B49\u5F85\u8B6F\u6587\u8F09\u5165\u6642\u7684\u6A23\u5F0F","loadingTheme.spinner":"\u8F49\u5708\u52D5\u756B","loadingTheme.text":"\u975C\u614B\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u986F\u793A",developerDescription:"\u53EF\u4EE5\u9EDE\u9078<1>\u6B64\u8655</1>\u6AA2\u8996\u9032\u968E\u81EA\u8A02\u529F\u80FD\u76F8\u95DC\u7684\u8AAA\u660E\u6587\u4EF6","edit border color":"\u8B8A\u66F4\u908A\u6846\u8272\u5F69",successSyncButNoChange:"\u76EE\u524D\u8A2D\u5B9A\u8207\u96F2\u7AEF\u4E00\u81F4",customTheme:"\u81EA\u8A02\u8272\u5F69\u548C\u5927\u5C0F","customThemeLabel.borderColor":"\u908A\u6846\u8272\u5F69","customThemeLabel.borderRadius":"\u908A\u6846\u5713\u89D2","customThemeLabel.textColor":"\u6587\u5B57\u8272\u5F69","customThemeLabel.backgroundColor":"\u80CC\u666F\u8272\u5F69","customThemeLabel.zoom":"\u5B57\u578B\u7E2E\u653E\u6BD4\u4F8B (%)",resetToDefaultColor:"\u9084\u539F\u70BA\u9810\u8A2D\u8272\u5F69",isTranslateTitle:"\u555F\u7528\u7DB2\u9801\u6A19\u984C\u7FFB\u8B6F",isTranslateTitleDescription:"\u555F\u7528\u5F8C\uFF0C\u7DB2\u9801\u7684\u6A19\u984C\u6703\u88AB\u7FFB\u8B6F",verifyService:"\u9EDE\u6B64\u6E2C\u8A66\u670D\u52D9",verified:"\u9A57\u8B49\u6210\u529F","field.model":"\u6A21\u578B","field.translationEngine":"\u7FFB\u8B6F\u5F15\u64CE","field.limitPerMinute":"\u6BCF\u5206\u9418\u6700\u5927\u8981\u6C42\u6578","field.limitPerSecond":"\u6BCF\u79D2\u6700\u5927\u8981\u6C42\u6578","field.maxTextLengthPerRequest":"\u6BCF\u6B21\u8981\u6C42\u7684\u6700\u5927\u6587\u5B57\u9577\u5EA6","field.apiUrl":"\u81EA\u8A02 API \u4F4D\u5740","description.limitPerMinute":"\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u5206\u9418\u958B\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.limitPerSecond":"\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u79D2\u9418\u958B\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.prompt":"\u4EE5\u7528\u6237\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00,\u53EF\u4EE5\u7701\u7565 {{text}} \uFF08\u63A8\u8350\uFF09, \u5C06\u4F1A\u5728\u5355\u72EC\u4F5C\u4E3A\u4E00\u6BB5\u53D1\u9001\u7ED9 OpenAI","description.maxTextLengthPerRequest":"\u9810\u8A2D\u6703\u5408\u4F75\u591A\u500B\u6BB5\u843D\uFF0C\u4EE5\u6E1B\u5C11\u8ACB\u8981\u6C42\u6578\uFF0C\u4F46\u662F\u5982\u679C\u6BB5\u843D\u7E3D\u9577\u5EA6\u904E\u9577\uFF0C\u4E5F\u53EF\u80FD\u6703\u5C0E\u81F4 API \u7684\u56DE\u61C9\u6642\u9593\u589E\u52A0\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5617\u8A66\u8ABF\u6574\u8A72\u9078\u9805\u4F86\u63D0\u5347\u901F\u5EA6",enabledExtension:"\u555F\u7528\u5957\u4EF6",clickToDisableExtension:"\u9EDE\u9078\u505C\u7528\u5957\u4EF6",clickToEnableExtension:"\u9EDE\u9078\u555F\u7528\u5957\u4EF6",hasBeenDisabled:"\u5DF2\u505C\u7528","show password":"\u986F\u793A\u5BC6\u78BC",customContent:"\u8F38\u5165\u81EA\u5B9A\u7FA9\u6A21\u578B",inputOptions:"\u8F38\u5165\u6846\u589E\u5F37",retryAllParagraphs:"\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D",errorTooltipTitle:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u539F\u56E0"};var Gn={lineBreakMaxTextCount:"Maximum number of characters allowed per sentence after line break","translate-pdf":"Click to translate PDF","translate-firefox-local-pdf":"Click to upload Pdf",enableLineBreak:"Whether to turn on automatic line wrapping for long paragraphs",sponsorLabel:"Sponsoring developers from $1 (monthly or one-time)",help:"Help",browserShortcutsNoteForFirefox:`To modify the shortcut key in Firefox browser, you need to open the extension management page 'about: addons', then click "Settings", and then click "Management shortcut key" to set it`,browserShortcutsNoteForChrome:"To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",browserShortcutsSucks:"Please enter the shortcut key manually in the format:",enableLineBreakDescription:"After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading","browser.brandName":"Immersive Translate","browser.brandDescription":"Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc.","browser.toggleTranslatePage":"Toggle Translate Page ","browser.toggleTranslateTheWholePage":"Toggle Translate the Whole Page","browser.toggleOnlyTransation":"Toggle Translate and Hide Original Text","browser.toggleTranslateToThePageEndImmediately":"Toggle Translate to the Bottom of the Page Immediately","browser.toggleTranslateTheMainPage":"Toggle Translate the Main Page","browser.openOptionsPage":"Open Settings Page","browser.toggleTranslationMask":"Toggle translation mask style","browser.translateLocalPdfFile":"Translate local PDF File","browser.openEbookViewer":"Read local e-book","browser.openEbookBuilder":"Make Dual Epub ebook","browser.translateLocalHtmlFile":"Translate HTML/txt File","browser.donateContext":"Sponsor Benefits","browser.translateLocalSubtitleFile":"Translate Subtitle File",confirmResetConfig:"Are you sure you want to reset the settings?",translationLineBreakSettingTitle:"Line break setting",smartLineBreak:"Smart Wrap",alwaysLineBreak:"Always Wrap",isShowContextMenu:"Create right button menu",toggleBeta:"Enable Beta experimental features",betaDescription:"Enable features that are still experimental, and translation services that are in testing. Join the <1>Telegram group</1> to learn more.",translationLineBreakSettingDescription:"The always line break feature is suitable for layouts with less content, making the layout more neat and tidy. (Use smart line breaks for long paragraphs with more content (more than {count} characters) for saving space)",tempTranslateDomainTitle:"Open the translation time temporarily",tempTranslateDomainDescription:"When a page is translated manually, turn it temporarily on as automatic translation",xMinutes:"{count} minutes",disabled:"Disable",changelog:"Change Log",toggleTranslatePageWhenThreeFingersOnTheScreen:"Multi-finger touch to show/hide translation display",toggleTranslationMaskWhenThreeFingersOnTheScreen:"Multi-finger touch to show/hide the blur effect of the translation",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"Multi-finger touch to show/hide only translation display",addUrlDescription:"The domain name is available and wildcard is supported e.g.: *.google.com, google.com/mail/*, https://www.google.com/*",general:"General",clickToExpandConfig:"Expand current configuration",import:"Import configuration from file",export:"Export to file",toggleDebug:"Print debug logs on the console","fingers.0":"Close","fingers.2":"Two-finger touch","fingers.3":"Three-finger touch","fingers.4":"Four-finger touch","fingers.5":"Five-finger touch",document:"Document",resetSuccess:"All settings reset successful",resetThisSuccess:"Reset successful",saved:"Saved successfully",successImportConfig:"Configuration imported successfully",goAdvancedSettings:"Go to Advanced Settings Page",goAdvancedInterfaceSettings:"Go to Advanced Custom Settings Page",advanced:"Advanced",advancedDescription:"Normally no settings are needed, keep the default. More personalized settings are provided for professional users only.",developer:"Developer settings",donateCafe:"Pricing","translate to the bottom of the page":"Translate to the bottom of the page immediately after opening the page?",feedback:"Feedback",toggleTranslatePage:"Toggle Translate","mouse-translate":"Mouse Hover",mouseHoldKey:"+ {key} translate this paragraph",mouseHoldKeyAuto:"Translate the paragraph directly",mouseHoldKeyOff:"Do nothing",mouseHoldKeyOther:"Custom shortcut key (open settings)",mouseHoldKeyCustomKey:"{key} translate this paragraph",mouseHoverHoldKey:"Mouse over and press X key to translate paragraph",translateToThePageEndImmediatelyDescription:"Enabled will translate from the top to the bottom of the page immediately after opening. Disable will translate while reading. (Not recommended to enable)","translate all areas of the page":"Whether to translate all areas of the web page",translationAreaDescription:"When enabled, all areas of the entire web page will be translated. Disabled will use the default smart recognition and translate only the main areas. (Not recommended to enable)","the number of characters to be translated first":"Directly translate the number of characters in front of the page without waiting to scroll to the visible area","interface language":"Interface language","display both the original text and the translation":"Display both the original text and the translation","keyboard shortcuts":"Keyboard shortcuts",modify:"Edit",reset:"Reset",close:"Close",homepage:"Home Page",more:"More",moreOptions:"Expand more custom settings",translateTheWholePage:"Translate the whole page area (different from only the main area)",changeToTranslateTheWholePage:"Translate the Whole Page",changeToTranslateTheMainPage:"Translate the Main Content",changeToOnlyTranslationMode:"Show Translation only",changeToDualTranslationMode:"Show Dual Translation",translateToThePageEndImmediately:"Immediately translate to the bottom (different from translating the current visible area)",translateTheMainPage:"Main areas of intelligent translation","The local rules are up to date":"Local  rules are up to date:","Successfully synchronized with the latest official rules:":"Successfully synced latest official rules:","Checking for updates":"Checking for update","Rules are being synchronized":"Syncing official rules",localVersionIsTooOld:"The local extension version is too old, please upgrade the extension to {minVersion} or a newer version and try to sync again.",badUserscriptBrowser:"The current browser does not correctly implement the interface of the Greasemonkey extension, please use another browser that <1>supports the Greasemonkey extension</1> such as (Firefox Nightly version)",foundNewVersion:"New version available",theLocalExtensionIsUpToUpdate:"The current extension version is up to date.",failToSyncRules:"Failed to sync latest adaptive rules",retry:"Retry",failedReason:"Failure reason",currentRuleVersion:"Current Rule Version",calculating:"Calculating",unknownError:"Unknown Error",canNotFetchRemoteRule:"Unable to fetch remote rule",enableAlphaSuccess:"Alpha enabled successfully",disableAlphaSuccess:"Alpha has been disabled",cacheSize:"Cache size:",cleaning:"Cleaning",cleanCache:"Clear cache",options:"Options",about:"About",service:"Translation Service",needAction:"(to set up)",goSettings:"to set up",needActionForOptions:"(need to set)",translationEngine:"Engine Options",sourceLanguage:"Original language",target:"Target Language",popupSourceLanguage:"Source",popupTarget:"Target",popupService:"Service",forThisSite:"For This Site:",alwaysTranslateSomeLanguage:"Always translate {language}",neverTranslateSomeLanguage:"Never translate {language}",alwaysTranslateSomeSite:"Always translate {hostname}",neverTranslateSomeSite:"Never translate {hostname}",add:"Add",default:"Default",forThisLanguage:"For This Language:","add url":"Add URL",edit:"Edit","translate other languages into specific language":"Translate other languages into the language you set","select translation service":"Select a translation service",language:"Language","show-original":"Show Original",translate:"Translate",Translated:"Translated",Translating:"Translating",Error:"Error",allowCacheTranslations:"Enable local translation caching (reduce translation requests for duplicate paragraphs)","translation display":"Translation display style","select diplay style":"Please refer to the following examples",interface:"Interface Settings",import_export:"Import/Export",import_export_title:"Import/Export Configuration",syncToGoogleDrive:"Sync Now with Google Drive",previewAllThemes:"Preview all themes","translationTheme.none":"None","translationTheme.grey":"Black Gray","translationTheme.dashed":"Dashed underline","translationTheme.dotted":"Dotted Underline","translationTheme.dashedBorder":"Dashed Border","translationTheme.solidBorder":"Dashed Border","translationTheme.underline":"Straight underline","translationTheme.mask":"Blur effect","translationTheme.opacity":"Opacity effect","translationTheme.paper":"White paper shadow effect","translationTheme.dividingLine":"Dividing line","translationTheme.highlight":"Highlight","translationTheme.marker":"Marker","translationTheme.marker2":"Maker2","translationTheme.blockquote":"quote style","translationTheme.weakening":"Weakening","translationTheme.italic":"Italic","translationTheme.bold":"Bold","translationTheme.thinDashed":"Thin dashed underline","translationTheme.nativeDashed":"System Dash Underline","translationTheme.nativeDotted":"System Dotted Underline","translationTheme.nativeUnderline":"System Straight Line Underline","translationTheme.wavy":"Squiggle","translationServices.tencent":"Tencent Translator","translationServices.tenAlpha":"Tencent Translator (Alpha)","translationServices.google":"Google Translate","translationServices.bai":"Baidu (Alpha)","translationServices.baidu":"Baidu translation","translationServices.aliyun":"Aliyun Translator","translationServices.volc":"Volcano Translation","translationServices.deeplx":"DeeplX (Alpha)","translationServices.bing":"Microsoft Translator","translationServices.deepl":"DeepL","translationServices.wechat":"Wechat translation","translationServices.azure":"Azure Translator","translationServices.ibm":"IBM Watson","translationServices.aws":"Amazon Translate","translationServices.mock":"Mock translation","translationServices.mock2":"Mock Translation2","translationServices.caiyun":"Caiyun Translation","translationServices.cai":"Caiyun Translation (Alpha)","translationServices.volcAlpha":"Volcano Translation (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"Youdao Translation","translationServices.you":"Youdao Translation (Alpha)","translationServices.transmart":"Tencent Smart Translation","translationServices.niu":"Niu Translation","translationServices.papago":"Papago Translation","translationServices.d":"DeeplX (Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"Translate page title","always languages":"Always translate the following languages",neverTranslateLanguagesLabel:"Never Translated Languages",neverTranslateTheFollowingLanguagesDescription:"When a paragraph on a page is in one of the following languages, the translation will be skipped",enableUserscriptPagePopup:"Always show Popup windows on the page",enableUserscriptPagePopupDescription:"Three-finger touch to show the Popup.","always translate the following languages":"The following languages will always be translated","always sites":"Always translate the following sites","always translate the following sites":"The following sites will always be translated","never sites":"Never translate the following sites","never translate the following sites":"The following sites will never be translated","please refer to":"It can only be used after filling in the key. For details, please refer to",KeyAndConfigurationTutorial:"Key Application and Configuration Tutorial",useAboveStyleForTheseSites:"Sites that always use the {theme} translation style",currentUrl:"Current URL",confirm:"Save",cancel:"Cancel",delete:"Delete","languages.auto":"Detect Language",syncToCloud:"Sync to cloud",syncToCloudDescription:"Upload the configuration to the cloud server, and you can synchronize the configuration between different browsers or Tampermonkey scripts, based on the last modification time.",authFail:"Authorization Failed",syncTitle:"Please select a file operation",import_hint:"Import",upload:"Upload",revokeAuth:"Revoke Authorization",uploadFail:"Upload Failed",download:"Download",importSuccess:"Upload Success",importFail:"Import Failed",deleteFail:"Delete Failed",backupToCloud:"Manage backup files manually",create_new_backup:"Add backup node",maxBackupFiles:"Up to{count}different nodes can be backed up. Please delete unneeded nodes",backupToCloudDescription:"Upload or restore backup files manually, up to 3 different backups",successSyncConfig:"Successfully synced with cloud",syncFail:"Synchronization failed",updatedAt:"Updated at {date}",lastSyncedAt:"Last checked at {date}",downloadFail:"Download failed",clickToDownload:"Click to download",aboutLabel:"About - Feedback ",aboutLabelWithoutSponsor:"About - Feedback","browser.openAboutPage":"About / Feedback",aboutIntro:"The extension is completely free and we hope that users will all have more accessible and more enjoyable access to the enormous amount of foreign language information available on the Internet \u2764\uFE0F. <br/><br/> You can also follow out <3>Twitter</3>, <4>Telegram Channel</4>, and <5>Email Subscription</5> below to track updates.",aboutIntroWithoutSponsor:"The extension is completely free and we hope that users will all have more accessible and more enjoyable access to the enormous amount of foreign language information available on the Internet \u2764\uFE0F. ",projectHomepage:"Project Homepage",joinTelegramGroup:"Join our communities for feature discussion",joinTelegramChannel:"Subscribe to our Telegram channel to get the latest updates",feedbackAndJoin:"Issue feedback/group",wechatPublicAccount:"Wechat Official Account",wechatCommunities:"Wechat Group",qqCommunities:"QQ Channel",autoSync:"Auto-Time Sync",loadingThemeTitle:"Loading Style",loadingThemeDescription:"Set the style of waiting for the translation to load","loadingTheme.spinner":"Spinning icon","loadingTheme.text":"Static Text... ","loadingTheme.none":"Disabled",developerDescription:"You can click <1>here</1> to see the documentation related to advanced customization","edit border color":"Edit border color",successSyncButNoChange:"The current configuration is consistent with that in the cloud server",customTheme:"Customize colors and sizes","customThemeLabel.borderColor":"Border color","customThemeLabel.borderRadius":"Border Round Corner","customThemeLabel.textColor":"Text color","customThemeLabel.backgroundColor":"Background color","customThemeLabel.zoom":"Font scale (%)",resetToDefaultColor:"Reset to default colors",isTranslateTitle:"Enable translate page title",isTranslateTitleDescription:"When enabled, the page title will be translated",verifyService:"Click on this test service",verified:"Successful","field.model":"Model","field.translationEngine":"Translation engine","field.limitPerMinute":"Max requests per minute","field.limitPerSecond":"Max requests per second","field.maxTextLengthPerRequest":"Maximum text length per request","field.apiUrl":"Custom API interface address","description.limitPerMinute":"When the number of requests exceeds this limit, it will be temporarily suspended until the beginning of the next minute. Due to various limitations of OpenAI's current services, please click <1>here</1> to view the latest suggested values","description.limitPerSecond":"When the number of requests exceeds this limit, it will be temporarily suspended until the beginning of the next second. Due to various limitations of OpenAI's current services, please click <1>here</1> to view the latest suggested values","description.prompt":"Send as a user to OpenAI conversation, where {{text}} indicates the text of the paragraph,{{from}} indicates the language of the paragraph,{{to}} indicates the target language, you can omit {{text}}, if so, it'll be sent as a separated message","description.maxTextLengthPerRequest":"By default multiple paragraphs will be merged to reduce the number of requests, but if the total length of the paragraphs is too long, it may also cause the interface to respond slowly, so you can try to adjust this option to optimize speed",enabledExtension:"Enable extensions",clickToDisableExtension:"Click to disable extension",clickToEnableExtension:"Click to enable the extension",hasBeenDisabled:"Disabled","show password":"Show password",resetToDefaultSettings:"Reset to default settings",customContent:"Enter customization content",inputOptions:"Writing",retryAllParagraphs:"Retry all paragraphs",errorTooltipTitle:"Click to get the error details",retryAllButton:"Retry All",errorModalTitle:"Noops, something went wrong"};var li=[{code:"zh-CN",messages:Kn},{code:"zh-TW",messages:zn},{code:"en",messages:Gn}];var st={};for(let e of li)st[e.code]=e.messages;var it="Immersive Translate",he="immersive-translate",qt="pdf/index.html";var $n="subtitle/index.html",Yn="ebook/index.html",Jn="ebook/make/index.html",z="immersiveTranslate",Kt="759003177173-mfm15s5nd77vfmo6e7lanof1emnanf0e.apps.googleusercontent.com",gt=z+"GoogleAccessToken",Xn=z+"AuthFlow",zt="immersive-translate-config-latest.json",Jc=z+"AuthState",Xc=z+"IframeMessage",Zc=z+"WaitForRateLimit",Qc=z+"DocumentMessageAsk",eu=z+"DocumentMessageTellThirdParty",tu=z+"DocumentMessageThirdPartyTell",ru=z+"DocumentMessageHandler",nu=`${z}Container`,au=`${z}SpecifiedContainer`,Gt="buildinConfig",kt="localConfig",Mr="openOptionsPage";var _r="translateLocalPdfFile",Zn="donateContext",Lr="openEbookViewer",Pr="openEbookBuilder",Qn="openSubtitleBuilder",ou=`${z}PageTranslatedStatus`,su=`${z}PageUrlChanged`,iu=`${z}ReceiveCommand`,lu=`${z}PopupReceiveMessage`,ci="immersivetranslate.com",ui="config.immersivetranslate.com",cu=`https://${ci}/`,uu=`https://${ui}/default_config.json`,du=`${z}Mark`;var mu=`${z}Root`,gu=`data-${he}-effect`,pu=`data-${he}-translation-element-mark`,hu=`${z}TranslationElementMark`,fu=`${z}TranslatedMark`,bu=`${z}ParagraphId`,Tu=`${z}LoadingId`,yu=`data-${he}-loading-id`,wu=`${z}ErrorId`,xu=`data-${he}-error-id`,vu=`${z}AtomicBlockMark`,Su=`${z}ExcludeMark`,Au=`data-${he}-exclude-mark`,ku=`${z}StayOriginalMark`,Cu=`${z}PreWhitespaceMark`,Eu=`${z}InlineMark`,Mu=`${z}BlockMark`,_u=`${z}Left`,Lu=`${z}Right`,Pu=`${z}Width`,Ru=`${z}Height`,Iu=`${z}Top`,Ou=`${z}FontSize`;var Du=`${z}GlobalStyleMark`;var Nu=`${he}-target-wrapper`,Bu=`${he}-pdf-target-container`,Uu=`${he}-target-inner`,Fu=`${he}-source-wrapper`,ju=`${he}-target-translation-block-wrapper`,Wu=`${he}-root-translation-theme`,Hu=`${z}RootTranslationTheme`,qu=`${he}-target-translation-vertical-block-wrapper`,Ku=`${he}-target-translation-pdf-block-wrapper`,zu=`${he}-target-translation-pre-whitespace`,Gu=`${he}-target-translation-inline-wrapper`;var Ct=["auto","zh-CN","zh-TW","en","ja","ko","es","de","fr","pt","ru","ar","it","ms","id","vi","af","th","ur","yue","bo","wyw","am","az","be","bg","bn","bs","ca","ceb","co","cs","cy","da","el","eo","et","eu","fa","fi","fil","fj","fy","ga","gd","gl","gu","ha","haw","he","hi","hmn","hr","ht","hu","hy","ig","is","jw","ka","kk","km","kn","ku","ky","la","lb","lo","lt","lv","mg","mi","mk","ml","mn","mr","mt","mww","my","ne","nl","no","ny","otq","pa","pl","ps","ro","sa","sd","si","sk","sl","sm","sn","so","sq","sr","sr-Cyrl","sr-Latn","st","su","sv","sw","ta","te","tg","tlh","tlh-Qaak","to","tr","ty","ug","uk","uz","xh","yi","yo","yua","zu"];var Vt="zh-CN";var Vn=[{type:"select",name:"codename",labelKey:"field.translationEngine",default:"youdao",required:!1,options:[{label:"translationServices.google",value:"google"},{label:"translationServices.deepl",value:"deepl"},{label:"translationServices.youdao",value:"youdao"},{label:"translationServices.tencent",value:"tencent"},{label:"translationServices.aliyun",value:"aliyun"},{label:"translationServices.baidu",value:"baidu"},{label:"translationServices.caiyun",value:"caiyun"},{label:"translationServices.wechat",value:"wechat"},{label:"translationServices.ibm",value:"ibm"},{label:"translationServices.azure",value:"azure"},{label:"translationServices.aws",value:"aws"}]}],di={bing:{name:"\u5FAE\u8F6F\u7FFB\u8BD1",homepage:"https://www.bing.com/translator"},google:{name:"Google",homepage:"https://translate.google.com/"},deepl:{name:"DeepL",homepage:"https://www.deepl.com/translator",docUrl:"https://immersivetranslate.com/docs/services/deepL/",allProps:[{name:"authKey",label:"Auth Key",required:!0,type:"password"}]},transmart:{name:"Transmart",homepage:"https://transmart.qq.com/"},openai:{name:"Open AI",homepage:"https://openai.com/api/",docUrl:"https://immersivetranslate.com/docs/services/openai/",allProps:[{name:"APIKEY",required:!0,type:"password"},{name:"model",labelKey:"field.model",descriptionKey:"description.model",required:!1,type:"select",default:"gpt-3.5-turbo-0613",options:[{label:"gpt-3.5-turbo",value:"gpt-3.5-turbo"},{label:"gpt-3.5-turbo-0613",value:"gpt-3.5-turbo-0613"},{label:"gpt-4",value:"gpt-4"}]},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.limitPerSecond",descriptionLink1:"https://immersivetranslate.com/docs/services/openai/",type:"number",default:10},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0},{name:"apiUrl",labelKey:"field.apiUrl",required:!1,type:"text",default:"https://api.openai.com/v1/chat/completions",descriptionKey:"description.apiUrl",optional:!0},{name:"systemPrompt",label:"System Prompt",required:!1,descriptionKey:"description.systemPrompt",type:"text",optional:!0,default:"You are a translation engine, you can only translate text and cannot interpret it, and do not explain."},{name:"prompt",label:"Prompt",required:!1,descriptionKey:"description.prompt",type:"textarea",default:`Translate the text below to {{to}}:

{{text}}`,optional:!0}]},chatgpt:{name:"ChatGPT Web(3.5 mobile)",homepage:"https://chat.openai.com",beta:!0},youdao:{name:"Youdao",homepage:"https://youdao.com/",docUrl:"https://immersivetranslate.com/docs/services/youdao/",allProps:[{name:"appId",required:!0,type:"text"},{name:"appSecret",required:!0,type:"password"}]},tencent:{name:"Tencent",homepage:"https://fanyi.qq.com/",docUrl:"https://immersivetranslate.com/docs/services/tencent/",allProps:[{name:"secretId",required:!0,type:"text"},{name:"secretKey",required:!0,type:"password"}]},azure:{name:"azure",homepage:"https://learn.microsoft.com/en-us/azure/cognitive-services/translator/text-translation-overview",docUrl:"https://immersivetranslate.com/docs/services/azure/",allProps:[{name:"region",required:!0,default:"eastasia",type:"text"},{name:"APIKEY",required:!0,type:"password"}]},papago:{name:"Papago",homepage:"https://translate.google.com/",canary:!0},baidu:{name:"Baidu",homepage:"https://fanyi.baidu.com/",docUrl:"https://immersivetranslate.com/docs/services/baidu/",allProps:[{name:"appid",required:!0,type:"text"},{name:"key",required:!0,type:"password"}]},volc:{name:"Volc",homepage:"https://www.volcengine.com/",docUrl:"https://immersivetranslate.com/docs/services/volcano/",allProps:[{name:"accessKeyId",required:!0,type:"text"},{name:"secretAccessKey",required:!0,type:"password"}]},caiyun:{name:"Caiyun",homepage:"https://fanyi.caiyunapp.com/",docUrl:"https://immersivetranslate.com/docs/services/caiyun/",allProps:[{name:"token",required:!0,type:"password"}]},cai:{name:"Cai",homepage:"https://fanyi.caiyunapp.com/",alpha:!0},mock:{name:"Mock",homepage:"https://www.google.com"},mock2:{name:"Mock2",homepage:"https://www.google.com"},tenAlpha:{name:"TenAlpha",homepage:"https://fanyi.qq.com/",alpha:!0},you:{name:"You",alpha:!0,homepage:"https://youdao.com/"},openl:{name:"Openl",homepage:"https://openl.club/",docUrl:"https://immersivetranslate.com/docs/services/openL/",allProps:[...Vn,{type:"password",name:"apikey",required:!0}],props:Vn},volcAlpha:{name:"Volc Alpha",alpha:!0,homepage:"https://www.volcengine.com/"},d:{name:"D () ",alpha:!0,homepage:"https://www.deepl.com/translator"},dpro:{name:"DPro (Canary) ",canary:!0,homepage:"https://www.deepl.com/translator"},deeplx:{name:"DeepLX (Beta)",beta:!0,homepage:"https://www.deepl.com/translator",allProps:[{name:"url",label:"API URL",required:!0,type:"text"}]},niu:{name:"niutrans",homepage:"https://niutrans.com/",docUrl:"https://immersivetranslate.com/docs/services/niu",allProps:[{name:"APIKEY",required:!0,type:"password"}]}},Vu={type:z+"ChildFrameToRootFrameIdentifier"};var pt=console,Rr=class{#e=performance.now();reset(){this.#e=performance.now()}stop(t){let r=performance.now(),n=Math.round(r-this.#e),a=je.green;n>1e4?a=je.red:n>1e3&&(a=je.yellow),pt.debug(je.dim(it+" TIMING:"),t,"in",a(n+"ms")),this.#e=r}},Et=class{#e=1;get level(){return this.#e}setLevel(t){switch(t){case"debug":this.#e=0;break;case"info":this.#e=1;break;case"warn":this.#e=2;break;case"error":this.#e=3;break;case"fatal":this.#e=4;break}}debug(...t){this.#e<=0&&pt.log(je.dim(it+" DEBUG:"),...t)}v(...t){this.#e<=0}info(...t){this.#e<=1&&pt.log(je.green(it+" INFO:"),...t)}l(...t){this.#e<=1}warn(...t){this.#e<=2&&pt.warn(je.yellow(it+" WARN:"),...t)}error(...t){this.#e<=3&&pt.error(je.red(it+" ERROR:"),...t)}fatal(...t){this.#e<=4&&pt.error(je.red(it+" FATAL:"),...t)}timing(){return this.level===0?new Rr:{reset:()=>{},stop:()=>{}}}},P=new Et;function ht(e){if(typeof e!="string")return"auto";let t=e.toLowerCase();if(t==="zh"||t==="zh-hans")return"zh-CN";if(t==="zh-hant"||t==="zh-hk")return"zh-TW";if(t==="iw")return"he";if(t==="jv")return"jw";let r=Ct.map(a=>a.toLowerCase()),n=r.indexOf(t);if(n===-1)if(t.indexOf("-")>=0){t=t.split("-")[0];let a=r.indexOf(t);return a===-1?"auto":Ct[a]}else return"auto";else return Ct[n]}function De(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():w}var j=De();function Ir(){return j.IMMERSIVE_TRANSLATE_USERSCRIPT==="1"}function ze(){if(j.IMMERSIVE_TRANSLATE_SAFARI==="1")return!0;if(typeof globalThis.immersiveTranslateBrowserAPI<"u"&&globalThis.immersiveTranslateBrowserAPI.runtime&&globalThis.immersiveTranslateBrowserAPI.runtime.getManifest){let t=globalThis.immersiveTranslateBrowserAPI.runtime.getManifest();return!!(t&&t._isSafari)}else return!1}var sd=De().PROD==="1",id=De().PROD!=="1";function Or(){if(typeof globalThis.immersiveTranslateBrowserAPI<"u"&&globalThis.immersiveTranslateBrowserAPI.runtime&&globalThis.immersiveTranslateBrowserAPI.runtime.getManifest){let e=globalThis.immersiveTranslateBrowserAPI.runtime.getManifest();return!!(e&&(e._isUserscript||e._isSafari))}else return!1}var Dr={immediateTranslationTextCount:5e3,interval:36e5,beta:!1,cache:!0,translationMode:"dual",enabled:!0,minVersion:"0.6.2",donateUrl:"https://immersivetranslate.com/docs/donate/",uninstallUrl:"https://wj.qq.com/s2/12328372/04e0/",feedbackUrl:"https://github.com/immersive-translate/immersive-translate/issues",isShowContextMenu:!0,enableInputTranslation:!0,inputTranslationUrlPattern:{matches:[],excludeMatches:[]},inputTranslationBlockUrls:["www.feishu.cn","www.notion.so","www.figma.com/file/*"],inputStyleBlockUrls:[],inputTargetLanguage:"en",inputStartingTriggerKey:"/",inputTrailingTriggerKey:"space",inputTrailingTriggerKeyRepeatTimes:3,inputTrailingTriggerKeyTimeout:500,mutationBlockUrls:["www.feishu.cn"],inputLanguageCodeAlias:{en:["\u82F1\u6587","\u82F1\u8BED"],"zh-CN":["zh","zh-Hant","\u4E2D\u6587"],"zh-TW":["zht","zh-Hant","\u7E41\u4E2D"],ja:["\u65E5\u8BED","\u65E5\u6587"],ko:["\u97E9\u8BED","\u97E9\u6587"],fr:["\u6CD5\u8BED","\u53D1\u6587"],es:["\u897F\u73ED\u7259\u8BED","\u897F\u8BED"],ru:["\u4FC4\u8BED","\u4FC4\u6587"],bo:["\u85CF\u8BED"]},inputStartingTriggerKeyAlias:{"/":["\u3001"],".":["\u3002"],",":["\uFF0C"],space:[" "],";":["\uFF1B"],":":["\uFF1A"]},blockUrls:["https://dash.immersivetranslate.com/*","https://immersive-translate.owenyoung.com/options/","https://immersive-translate.owenyoung.com/auth-done/","https://dash.immersivetranslate.com/","https://dash.immersivetranslate.com/auth-done/","http://localhost:8000/dist/userscript/options/","http://localhost:8000/auth-done/","http://192.168.50.9:8000/dist/userscript/options/","https://www.deepl.com/translator","translate.google.com","http://localhost:8000/options/","http://192.168.50.9:8000/options/","googleads.g.doubleclick.net","s1.hdslb.com","oapi.dingtalk.com","login.dingtalk.com","imasdk.googleapis.com","acdn.adnxs.com","pos.baidu.com","js-sec.indexww.com","g.alicdn.com","ads.pubmatic.com","challenges.cloudflare.com","accounts.google.com","images-na.ssl-images-amazon.com","tpc.googlesyndication.com","js.stripe.com","acdn.adnxs-simple.com","s.union.360.cn","s.amazon-adsystem.com","www.recaptcha.net","s7.addthis.com","z.moatads.com","https://www.marketwatch.com/static_html/daa-min.html","tr.snapchat.com","ct.pinterest.com","*.moatads.com","secure-us.imrworldwide.com","static.noeyeon.click","widgets.outbrain.com","www.dianomi.com/smartads.epl","secure-assets.rubiconproject.com","eus.rubiconproject.com","eus.rubiconproject.com","i.liadm.com","eb2.3lift.com"],telemetry:!0,loadingTheme:"spinner",canary:!1,translationThemePatterns:{},translationServices:{volcAlpha:{placeholderDelimiters:["{","}","b"]},volc:{placeholderDelimiters:["{","}","b"]},tencent:{placeholderDelimiters:["{","}","b"]},google:{placeholderDelimiters:["\u{1F6A0}","\u{1F6A0}","b"]},transmart:{placeholderDelimiters:["#","#","b"]},baidu:{placeholderDelimiters:["#","#"]},caiyun:{placeholderDelimiters:["{","}"]},youdao:{placeholderDelimiters:["\u{1F6A0}","\u{1F6A0}"]},deepl:{immediateTranslationTextCountForImmersiveDeepl:5e4,placeholderDelimiters:["{{","}}","b"],limit:25},bing:{maxTextLengthPerRequest:1800,placeholderDelimiters:["<code>","</code>","b"]},deeplx:{limit:3},d:{immediateTranslationTextCount:0},papago:{placeholderDelimiters:["{","}"]},dpro:{apiUrl:"https://api.deepl.com/jsonrpc"},openai:{placeholderDelimiters:["{{","}}","b"],immediateTranslationTextCount:3e3,translationDebounce:300,interval:1350,prompt:`Translate the text to {{to}}:

{{text}}`,maxTextGroupLengthPerRequest:1,newlinePlaceholderDelimiters:[`

-|`,`|-

`,`
?
?-\\|\\d+\\|-
?
?`]},chatgpt:{placeholderDelimiters:["{{","}}","b"],immediateTranslationTextCount:2e3,maxTextGroupLengthPerRequest:1,maxTextLengthPerRequest:2e3,prompt:`Translate the text to {{to}}:

{{text}}`,newlinePlaceholderDelimiters:[`

-|`,`|-

`,`
?
?-\\|\\d+\\|-
?
?`]}},shortcuts:{toggleTranslatePage:"Alt+A",toggleTranslateTheWholePage:"Alt+W",toggleOnlyTransation:"",toggleTranslateToThePageEndImmediately:"",toggleTranslationMask:""},tempTranslateDomainMinutes:0,immediateTranslationPattern:{matches:["www.tumblr.com","twitter.com","*.twitter.com","medium.com","*.medium.com","www.facebook.com","www.youtube.com","m.youtube.com","mail.google.com","discord.com","google.com","facebook.com","*.facebook.com","web.telegram.org","github.com","*.instagram.com","instagram.com","*.slack.com","https://old.reddit.com/","https://www.reddit.com/r/popular/","https://www.reddit.com/","https://www.reddit.com/hot/","https://www.reddit.com/new/","https://www.reddit.com/top/","https://www.reddit.com/.compact"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},translationParagraphLanguagePattern:{matches:["www.reddit.com","old.reddit.com","twitter.com","www.tumblr.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","read.readwise.io","www.inoreader.com","mail.google.com","google.com","discord.com","*.instagram.com","instagram.com","web.telegram.org","*.slack.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},sourceLanguageUrlPattern:{},generalRule:{_comment:"",normalizeBody:"",useIframePostMessage:!0,injectedCss:[],isEbook:!1,isEbookBuilder:!1,ignoreZhCNandZhTW:!1,showSponsorOnSafari:!1,noTranslateRegexp:["^\\d+.+ago$","^\\d+\\s+MIN\\s+READ$"],waitForSelectors:[],isInjectOptionsUrl:!1,isInjectVersion:!1,waitForSelectorsTimeout:3e3,pairs:{},aiRule:{},isSubtitleBuilder:!1,minZIndex:0,initTranslationServiceAsSoonAsPossible:!0,targetWrapperTag:"font",additionalInjectedCss:[],isTranslateTitle:!0,languageDetectMinTextCount:50,wrapperPrefix:"smart",wrapperSuffix:"smart",isPdf:!1,isTransformPreTagNewLine:!1,urlChangeDelay:50,mutationChangeDelay:10,mainFrameMinTextCount:50,mainFrameMinWordCount:5,visibleDelay:0,additionalStayOriginalSelectors:["span.katex","span.notranslate",".MathJax_Preview",".MathJax",".mwe-math-element","span[translate=no]","em[translate=no]","code[translate=no]","span.math.inline","span.math.display",".ltx_Math",".mathjax-block",".MathJax_CHTML"],translationBlockStyle:"",isShowUserscriptPagePopup:!0,observeUrlChange:!1,paragraphMinTextCount:4,paragraphMinWordCount:2,shadowRootSelectors:[],blockMinTextCount:24,blockMinWordCount:4,asideMaxTextCount:1e3,asideMaxWordCount:200,asideMaxTextCountPerParagraph:67,asideMaxWordCountPerParagraph:12,lineBreakMaxTextCount:0,globalAttributes:{},globalMeta:{},globalStyles:{".sr-only":"display:none"},initialGlobalAttributes:{},initialSelectorGlobalAttributes:{header:{translate:"no"},"footer:last-of-type":{translate:"no"},"nav:last-of-type":{translate:"no"},nav:{translate:"no"}},selectors:[],preWhitespaceDetectedTags:["DIV","SPAN"],stayOriginalSelectors:[],additionalSelectors:["h1","section h2","section h3","section h4","main h2","main h3","main h4",".article-title",".article-subtitle",".article_title",".article_subtitle",".article__title",".articleTitle",".Article__content",".titleLink",".summary",".headline",".page-content","aside.note","aside.article-comments","aside.onebox"],atomicBlockTags:[],excludeSelectors:[],additionalExcludeSelectors:[".social-share",".breadcrumbs",".post__footer",".btn",".reference-citations",".share-nav",".o-share","[data-toolbar=share]","rp","rt",".prism-code","[role=code]","#omni-extension",".omni-item","div[data-paste-markdown-skip]","table.highlight","div[class^=codeBlockContent]","div[class^=codeBlockLines]","div[class^=token-line]","#liuchan-window > .liuchan-container > *",".material-icons","i.fa","i[class^=fa-]",".notranslate","[translate=no]",".navmenu-container"],translationClasses:[],atomicBlockSelectors:[],excludeTags:["TITLE","LINK","SCRIPT","STYLE","TEXTAREA","SVG","svg","G","NOSCRIPT","INPUT","BUTTON","BASE","SELECT","OPTION","HR","PRE","KBD","WBR","RT","RP","META","MATH","TTS-SENTENCE","AIO-CODE"],bodyTranslateTags:["FOOTER","ASIDE","BUTTON","NAV"],forceTranslateTags:[],metaTags:["META","SCRIPT","STYLE","NOSCRIPT"],additionalExcludeTags:[],stayOriginalTags:["CODE","TT","IMG","SUP","SUB"],additionalStayOriginalTags:[],inlineTags:["A","ABBR","FONT","ACRONYM","B","INS","DEL","RUBY","RP","RB","BDO","MARK","BIG","RT","NOBR","CITE","DFN","EM","I","LABEL","Q","S","SMALL","SPAN","STRONG","SUB","SUP","U","KBD","TT","VAR","IMG","CODE","SCRIPT","STYLE","LINK","TIME","META","WBR","RELIN-HC","RELIN-HIGHLIGHT","RELIN-ORIGIN","RELIN-TARGET","XQDD_HIGHLIGHT_NEW_WORD","NOBR"],additionalInlineTags:[],extraInlineSelectors:[],additionalInlineSelectors:[".MathJax_Preview",".MathJax"],extraBlockSelectors:["turbo-frame","readme-toc","#hs_cos_wrapper_post_body","#hs_cos_wrapper_post_body"],allBlockTags:["BODY","HGROUP","CONTENT","ADDRESS","ARTICLE","ASIDE","DETAILS","BLOCKQUOTE","CANVAS","DD","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","HEADER","FORM","HR","MAIN","SUMMARY","NAV","NOSCRIPT","PRE","SECTION","TABLE","TFOOT","UL","VIDEO","P","DIV","H1","H2","H3","H4","H5","H6","UL","LI","OL","BR","PICTURE","TBODY","TR","TD","TH","SOURCE","C-WIZ","BUTTON","TURBO-FRAME","README-TOC"],mutationObserverContainerSelectors:[],pdfNewParagraphLineHeight:2.4,pdfNewParagraphIndent:1.2,pdfNewParagraphIndentRightIndentPx:130,fingerCountToToggleTranslagePageWhenTouching:4,fingerCountToToggleTranslationMaskWhenTouching:0,fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:0,mouseHoverHoldKey:"Off"},rules:[{selectorMatches:"div.simpread-read-root.simpread-read-root-show > sr-read",mainFrameSelector:"div.simpread-read-root.simpread-read-root-show > sr-read"},{matches:["moz-extension://*/pdf/index.html*"],isPdf:!0,isTranslateTitle:!1,wrapperPrefix:"",wrapperSuffix:"",urlChangeDelay:0,selectors:[".textLayer"],excludeSelectors:[".annotationLayer"],globalStyles:{"div.page":"width: 98%;",".textLayer":"overflow:visible;opacity: 1;"}},{matches:["*://*/*.txt","file://*/*.txt"],selectorMatches:["body > pre"],isTransformPreTagNewLine:!0,excludeTags:["TITLE","LINK","SCRIPT","STYLE","TEXTAREA","SVG","svg","G","TEXT","NOSCRIPT","INPUT","BUTTON","BASE","SELECT","OPTION","IMG","SUB","SUP","HR","CODE","KBD","WBR","TT","RT","RP","META","ASIDE","FOOTER","MATH","TTS-SENTENCE"]},{matches:["arad.hange.jp","arad.nexon.co.jp","oapi.dingtalk.com","login.dingtalk.com"],useIframePostMessage:!1},{matches:["googleads.g.doubleclick.net","https://www.google.com/recaptcha/*","ad.doubanio.com"],useIframePostMessage:!1,selectors:"#notexistforimmersivetranslate"},{matches:["mail.jabber.org","antirez.com"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.wikipedia.org",paragraphMinWordCount:2,paragraphMinTextCount:4,excludeSelectors:[".mw-editsection",".mw-cite-backlink","#p-lang-btn","#right-navigation","#p-associated-pages",".vector-header"],stayOriginalSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"],extraInlineSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"]},{matches:["twitter.com","mobile.twitter.com","tweetdeck.twitter.com","https://platform.twitter.com/embed*"],ignoreZhCNandZhTW:!0,isTranslateTitle:!1,selectors:['[data-testid="tweetText"]',".tweet-text",".js-quoted-tweet-text","[data-testid='card.layoutSmall.detail'] > div:nth-child(2)","[data-testid='developerBuiltCardContainer'] > div:nth-child(2)","[data-testid='card.layoutLarge.detail'] > div:nth-child(2)","[data-testid='cellInnerDiv'] div[data-testid='UserCell'] > div> div:nth-child(2)","[data-testid='UserDescription']","[data-testid='HoverCard'] div[dir=auto]"],excludeSelectors:["[aria-describedby][role=button]","header"],paragraphMinTextCount:4,paragraphMinWordCount:2,additionalStayOriginalSelectors:['[data-testid="tweetText"] a'],observeUrlChange:!1,extraBlockSelectors:['[data-testid="tweetText"] div.r-6koalj'],extraInlineSelectors:['[data-testid="tweetText"] div.r-xoduu5','[data-testid="tweetText"] span','[data-testid="UserDescription"] div',"[data-testid='HoverCard'] div[dir=auto] div"]},{matches:["stackoverflow.com","*.stackexchange.com","superuser.com","askubuntu.com","serverfault.com"],extraBlockSelectors:["span.comment-copy"],excludeSelectors:["a.comment-user","span.comment-date","div.s-prose.js-post-body + div",".bottom-notice","div[data-campaign-name=stk]"],paragraphMinTextCount:4,paragraphMinWordCount:2},{matches:"developer.apple.com/documentation/*",selectors:[".container","h3.title","div.content"]},{matches:"news.ycombinator.com",selectors:[".titleline > a",".comment > .commtext",".toptext","a.hn-item-title",".hn-comment-text",".hn-story-title"],excludeSelectors:[".reply"]},{matches:["*.quora.com","quora.com"],additionalSelectors:[".puppeteer_test_question_title","p.q-text"],globalStyles:{".qu-truncateLines--3":"-webkit-line-clamp: unset;"}},{matches:["old.reddit.com/*/.compact","old.reddit.com/.compact","www.reddit.com/*/.compact","www.reddit.com/.compact"],selectors:[".title > a",".usertext-body"],detectParagraphLanguage:!0},{matches:"old.reddit.com",selectors:["p.title > a","[role=main] .md-container"],detectParagraphLanguage:!0},{matches:["https://www.reddit.com/r/*/comments/*/*","https://www.reddit.com/","https://www.reddit.com/hot/","https://www.reddit.com/new/","https://www.reddit.com/top/"],excludeMatches:["https://www.reddit.com/r/*/wiki/*"],observeUrlChange:!0,selectors:["h1",".PostHeader__post-title-line","[data-click-id=body] h3","[data-click-id=background] h3","[data-testid=comment]","[data-adclicklocation='title'] h3","[data-adclicklocation=media]",".PostContent",".post-content",".Comment__body","faceplate-batch .md",".RichTextJSON-root","div[slot=title]","div[slot=text-body]","p.title > a","[role=main] .md-container"],detectParagraphLanguage:!0,globalStyles:{"div.XPromoBottomBar":"display:none"},waitForSelectors:["[data-testid=post_author_link]"]},{matches:"www.reddit.com",selectors:["h1",".PostHeader__post-title-line","[data-click-id=body] h3","[data-click-id=background] h3","[data-testid=comment]","[data-adclicklocation='title'] h3","[data-adclicklocation=media]",".PostContent",".post-content",".Comment__body","faceplate-batch .md","div[slot=title]","div[slot=text-body]","p.title > a","[role=main] .md-container"],paragraphMinTextCount:5,paragraphMinWordCount:2,excludeMatches:["https://www.reddit.com/r/*/wiki/*","https://www.reddit.com/settings/*"],detectParagraphLanguage:!0,globalStyles:{"div.XPromoBottomBar":"display:none"}},{matches:"www.reuters.com",excludeSelectors:["[promotext]","[data-testid=Leaderboard]"]},{matches:"https://www.npmjs.com/package/*",selectors:["#tabpanel-readme > div:first-child"]},{matches:"github.com",observeUrlChange:!0,excludeMatches:["https://github.com/*/*/settings","https://github.com/settings/*","https://github.com/sponsors/*","https://github.com/readme/*","https://github.com/readme/"],selectors:["h1","[aria-label=Issues] .markdown-title","[aria-labelledby=discussions-list] .markdown-title",".markdown-body",".Layout-sidebar p","div > span.search-match","li.repo-list-item p","#responsive-meta-container p","article p","div.repo-description p","[itemprop=description]"],atomicBlockSelectors:["[itemprop=description]"],excludeSelectors:[".css-truncate","[data-test-selector='commit-tease-commit-message']","[data-test-selector='create-branch.developmentForm']","div.Box-header.position-relative","div.blob-wrapper-embedded","div.Box.Box--condensed.my-2","div.jp-CodeCell",'[aria-label="Account"] .markdown-title',".js-repos-container .markdown-title","[data-view-component=true] .markdown-title","a.anchor","div.file-navigation + div.Box"],extraBlockSelectors:[],extraInlineSelectors:["g-emoji","a.anchor"],stayOriginalTags:["CODE","TT","G-EMOJI","IMG","SUP","SUB"],detectParagraphLanguage:!0},{matches:"notebooks.githubusercontent.com",excludeSelectors:["div.jp-CodeCell"]},{matches:"www.facebook.com",excludeMatches:"https://www.facebook.com/business/*",selectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],atomicBlockSelectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],insertPosition:"afterend",preWhitespaceDetectedTags:["DIV","SPAN"],extraBlockSelectors:["span.x1vvkbs"],excludeSelectors:["[role=button]"],translationClasses:["immersive-translate-text"],detectParagraphLanguage:!0},{matches:"m.youtube.com",selectors:[".comment-text",".media-item-headline",".slim-video-information-title",".caption-window",".caption-visual-line"],wrapperPrefix:"",wrapperSuffix:"",observeUrlChange:!0,atomicBlockSelectors:[".comment-text"],globalStyles:{".comment-text":"max-height:unset;",".media-item-headline":"max-height:unset;-webkit-line-clamp:unset;"},injectedCss:[".immersive-translate-target-wrapper img { width: 16px; height: 16px }"],extraBlockSelectors:[".caption-visual-line"]},{matches:"www.youtube.com",observeUrlChange:!0,selectors:["yt-formatted-string[slot=content].ytd-comment-renderer","yt-formatted-string.ytd-video-renderer","yt-formatted-string#content-text","h1","yt-formatted-string#video-title","span#video-title","a#video-title","yt-formatted-string.ytd-transcript-segment-renderer","#description-inline-expander > yt-attributed-string > span","ytd-notification-renderer .message",".caption-window",".caption-visual-line"],wrapperPrefix:"<br/>",wrapperSuffix:"",globalStyles:{"ytd-expander.ytd-comment-renderer":"--ytd-expander-max-lines: 1000;","h1.ytd-watch-metadata":"-webkit-line-clamp: unset;max-height: unset;","yt-formatted-string#video-title":"-webkit-line-clamp: unset;max-height: unset;","#video-title":"-webkit-line-clamp: unset;max-height: unset;"},urlChangeDelay:2e3,atomicBlockSelectors:["yt-formatted-string[slot=content].ytd-comment-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title","#description-inline-expander > yt-attributed-string > span"],excludeSelectors:["[class^='lln-']"],extraBlockSelectors:["yt-formatted-string.ytd-transcript-segment-renderer",".caption-visual-line"],detectParagraphLanguage:!0,injectedCss:[".immersive-translate-target-wrapper img { width: 16px; height: 16px }",".metadata-snippet-container {max-height: unset !important;}"]},{matches:"https://www.instagram.com/p/*",selectors:["h1","h3 + div"],wrapperPrefix:"<br/>",paragraphMinTextCount:2,blockMinTextCount:2},{matches:"https://www.instagram.com/*",wrapperPrefix:"",wrapperSuffix:"",selectors:["h1"],paragraphMinTextCount:2,blockMinTextCount:2},{matches:"1paragraph.app",selectors:"#book"},{matches:"https://poeditor.com/projects/*",selectors:[".comment-body",".reference_language .source-string"]},{matches:["*.substack.com","newsletter.rootsofprogress.org"],selectorMatches:["link[href^='https://substackcdn.com/bundle/'][rel=preload]"],excludeSelectors:["[style^=top]",".publication-footer",".subscribe-footer",".main-menu",".navbar-title-link","[data-testid='navbar']",".navbar-title",".captioned-button-wrap",".subscription-widget-wrap",".tweet-header",".tweet-link-bottom",".expanded-link",".meta-subheader"],globalStyles:{".reader2-clamp-lines":"max-height: unset; -webkit-line-clamp: unset;"},extraBlockSelectors:[".reader2-post-title",".tweet-link-top",".tweet-link-bottom",".expanded-link"]},{matches:["seekingalpha.com/article/*","seekingalpha.com/news/*"],selectors:["[data-test-id=card-container]","[data-test-id=comments-section]"],excludeSelectors:["[data-test-id=post-page-meta]","header > div:first-child"]},{matches:"hn.algolia.com",selectors:[".Story_title > a:first-child",".Story_comment > span"]},{matches:"read.readwise.io",selectors:["div[class^='_titleRow_']","div[class^='_description_']","#document-text-content"],detectParagraphLanguage:!0},{matches:["www.inoreader.com","*.inoreader.com"],selectors:[".article_header_title",".article_title_link",".article_content",".article_magazine_title_link"],excludeMatches:["https://www.inoreader.com/features/"],observeUrlChange:!1,globalStyles:{".article_title_link":"-webkit-line-clamp: unset;max-height: unset;"}},{matches:"*.ideas.aha.io",excludeSelectors:[".comment-header",".vote-status",".idea-meta",".filters-title",".ideas-showing-count",".my-ideas-filters-wrapper",".statuses-filters-wrapper",".categories-filters-wrapper","[class^='attachment']","span[class^='attachment-name']"]},{matches:["scholar.google.*/*","scholar.google.com.*/*","scholar.google.co.*/*"],wrapperPrefix:`
`,selectors:["h3 a[data-clk]","div.gs_rs","td a.gsc_a_at","td div.gs_gray:last-of-type","div.gsc_oci_value"],extraInlineSelectors:["br"],atomicBlockSelectors:["h3 a[data-clk]"]},{matches:"mail.google.com",detectParagraphLanguage:!0,selectors:["h2[data-thread-perm-id]","span[data-thread-id]","div[data-message-id] div[class='']"]},{matches:"outlook.live.com",excludeSelectors:[".jHAG3.XG5Jd",".OZZZK",".lDdSm"],selectors:["[role=region]"]},{matches:"www.producthunt.com",excludeMatches:"https://www.producthunt.com/stories/*",selectors:["h2","div[class^='styles_htmlText__']","[class^='styles_tagline']","a[href^='/discussions/'].fontWeight-600","button[class^='styles_textButton'] > div > span","h5 + p","div[data-test=product-item-name] + div"],globalStyles:{"h5 + p":"height:unset;"},excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.gitbook.io",additionalSelectors:["main"],_comment:"https://midjourney.gitbook.io/docs/user-manual"},{matches:"https://codeforces.com/*",stayOriginalTags:["[class^='MathJax']"]},{matches:"arxiv.org",additionalSelectors:["h1","blockquote.abstract"]},{matches:"*.labs.arxiv.org/*",stayOriginalTags:["math","semantics","mrow","mo","mfrac","msup","mi","mn","msqrt"],atomicBlockSelectors:[".ltx_abstract",".ltx_note_content",".ltx_p",".ltx_title"]},{matches:"https://discord.com/channels/*",isTranslateTitle:!1,selectors:["li[id^=chat-messages] div[id^=message-content]","div[class^=headerText]","section[aria-label='Search Results'] div[id^=message-content]"],extraBlockSelectors:["[class^='embedFieldValue']","li[class^='card'] div[class^='message']","[data-list-item-id^='forum-channel-list'] div[class^='headerText']"],globalStyles:{"div[class^=headerText]":"max-height: unset;","div[class^=message]":"max-height: unset;","div[class^=text]":"max-height: unset;","h3[data-text-variant='heading-lg/semibold']":"-webkit-line-clamp: none;"},detectParagraphLanguage:!0,wrapperPrefix:"<br />",wrapperSuffix:"",paragraphMinTextCount:4,paragraphMinWordCount:2},{matches:["web.telegram.org/z/*","web.telegram.org/a/*"],isTranslateTitle:!1,selectors:[".text-content",".message",".reply-markup-button-text",".bot-commands-list-element-description"],detectParagraphLanguage:!0},{matches:["web.telegram.org/k/*","web.telegram.org/k/"],selectors:[".message",".reply-markup-button-text",".bot-commands-list-element-description"],detectParagraphLanguage:!0},{matches:"gist.github.com",selectors:[".markdown-body",".readme"],detectParagraphLanguage:!0},{matches:"lobste.rs",excludeMatches:["https://lobste.rs/about","https://lobste.rs/chat"],selectors:[".u-repost-of",".comment_text"]},{matches:"*.slack.com",selectors:[".p-rich_text_block",".p-message_pane__foreword",".c-alert__message","[data-qa=message_attachment_text]"],additionalStayOriginalSelectors:["[data-qa=emoji]"],detectParagraphLanguage:!0},{matches:"1paragraph.app",additionalSelectors:["#book"]},{matches:"www.artstation.com/artwork/*",excludeSelectors:".project-description a",selectors:[".project-description","div.project-comment-text"],atomicBlockSelectors:"div.project-comment-text",detectParagraphLanguage:!0},{matches:"www.artstation.com/learning/courses/*",additionalSelectors:["footer.learning-course-description.ng-star-inserted > span"],excludeSelectors:".learning-card-meta"},{matches:["https://www.artstation.com/blogs","https://www.artstation.com/blogs/*"],detectParagraphLanguage:!0,additionalSelectors:[".comment-item-body"],atomicBlockSelectors:[".author-headline",".author-location"],excludeSelectors:["blog-card-thumbnail","blog-card-header",".blog-card-author",".blog-card-meta",".blog-view-header",".blog-grid-title",".post-meta-header"]},{matches:"www.figma.com/community/*",normalizeBody:"div.ql-editor[contenteditable='false']",excludeSelectors:["div[class*='metadataRight']","div[class*='commentMetaAndOptions']"],globalStyles:{"div[class*='mini_cardBottomRowSizing']":"height: 3em;"},additionalSelectors:"div[class*='mini_cardBottomRow_Metadata']",atomicBlockSelectors:"div[class*='mini_cardBottomRow_Metadata']",stayOriginalSelectors:"[data-tooltip='tooltip-user-info']"},{matches:"www.google.*/search*",detectParagraphLanguage:!0,excludeSelectors:["a h3 + div","div#sfooter","a[role=presentation] > div > div:first-child",".b5ZQcf",".CEMjEf",".MgUUmf.NUnG9d","#result-stats","[role=navigation]","div.sCuL3","div.eFM0qc.BCF2pd","div.WZ8Tjf","div.adDDi"],wrapperSuffix:"",globalStyles:{"div[data-content-feature='1'] > div":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:2']":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:3']":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:4']":"-webkit-line-clamp: unset;max-height: unset;",".V82bz":"-webkit-line-clamp: unset;max-height: unset;margin-bottom:30px",".uAKcGb":"-webkit-line-clamp: unset;max-height: unset;margin-bottom:30px",".Pw4Ldf.RsCEN":"height:unset;"},extraBlockSelectors:[".MUFPAc"]},{matches:"lowendtalk.com",selectors:["[role=heading]","h1",".userContent"]},{matches:"www.linkedin.com/jobs/*",selectors:["#job-details > span"]},{matches:"https://linkedin.com/feed/*",selectors:["h1",".feed-shared-update-v2__description-wrapper"]},{matches:"www.linkedin.com",additionalSelectors:["span.break-words > span > span[dir=ltr]"]},{matches:"www.indiehackers.com",selectors:[".content","h1","h3.story__title",".feed-item__title-link"]},{matches:"libreddit.de",selectors:["h2.post_title",".comment_body > .md"]},{matches:["notion.site","*.notion.site"],normalizeBody:"body",selectors:["div[data-block-id]"]},{matches:"www.newyorker.com",additionalSelectors:["h1","[data-testid=SummaryItemHed]"],excludeSelectors:["[data-testid=PersistentTop]","[data-testid=StackedNavigationHeader]"],urlChangeDelay:2e3},{matches:"start.me",selectors:[".rss-article__title",".rss-articles-list__article-link",".rss-showcase__title",".rss-showcase__text"]},{matches:"www.scmp.com",additionalSelectors:[".info__subHeadline",".section-content h2"],globalStyles:{".topic__article-list":"height: unset;",".adverisers__adveriser":"height: unset;",".advertiser__content":"height: unset;",".content-title__link":"display:unset;overflow:unset;-webkit-line-clamp:unset;",".title__text":"max-height:unset; -webkit-line-clamp:unset;",".news-list-item__news-title":"max-height:unset; -webkit-line-clamp:unset;","a[class*='link'] > .link__headline":"max-height:unset; -webkit-line-clamp:unset;"}},{matches:"www.lesswrong.com",extraBlockSelectors:["span.commentOnSelection"]},{matches:["mastodon.social","mastodon.online","kolektiva.social","indieweb.social","mastodon.world","infosec.exchange"],isTranslateTitle:!1,selectorMatches:["div#mastodon"],selectors:["div.status__content__text",".about__section__body",".content",".form-container",".account__header__extra"],globalAttributes:{"[class='notranslate app-holder']":{class:"app-holder"}},detectLanguage:!0},{matches:"www.cnbc.com",additionalSelectors:["div.RenderKeyPoints-list"],urlChangeDelay:1e3,globalStyles:{"div.Card-titleContainer > div":"-webkit-line-clamp: unset;max-height: unset;"}},{matches:"app.daily.dev",selectors:["h1",".typo-body","article h3","[class^=markdown_markdown]"],globalStyles:{".line-clamp-3":"-webkit-line-clamp: unset"}},{matches:"www.aljazeera.com",additionalSelectors:["h1",".article__subhead"]},{matches:["*.pornhub.com","pornhub.com"],excludeMatches:["*.pornhub.com/insights/*","pornhub.com/insights/*"],extraBlockSelectors:[".trendingNow",".searchItem",".tagcloud > a"],detectParagraphLanguage:!0,wrapperPrefix:"<br/>",wrapperSuffix:`
`,globalStyles:{"span.title":"height:unset; max-height:unset;",".detailedInfo":"max-height:unset;",".pcVideoListItem":"max-height:unset;",".wrap":"height:unset;",".entry-header":"height:unset;",".entry-title > a":"height:unset;-webkit-line-clamp:unset;"}},{matches:"https://www.youporn.com/*",extraBlockSelectors:[".button"],globalStyles:{".video-box":"max-height:unset;",".video-box-title":"white-space:unset;"}},{matches:"https://www.modelhub.com/*",globalStyles:{".videoTitle":"height:unset;",a:"height:unset;"}},{matches:"https://www.xvideos.com/*",globalStyles:{".title":"-webkit-line-clamp:unset;max-height:unset;",".mozaique":"display:flex; flex-wrap:wrap;"},excludeSelectors:[".video-hd-mark"]},{matches:"https://missav.com/*",globalStyles:{".truncate":"white-space:unset;",".overflow-y-hidden":"max-height:unset;overflow-y:unset;"}},{matches:"https://www.javbus.com/*",globalStyles:{"#waterfall[class='masonry']":"height: unset;","#waterfall[class='masonry'] > div":"display: flex;flex-direction: row;flex-wrap: wrap;","#waterfall[class='masonry'] > div > div":"position:relative;",".photo-info":"height:unset;"},excludeSelectors:[".item-tag","date"]},{matches:"https://spankbang.com/*",globalStyles:{".video-item > a":"white-space:unset;"},excludeSelectors:[".stats",".thumb"],extraBlockSelectors:[".searches > a",".tag > a",".extra > a",".positions > li"]},{matches:"https://javdb*.com/*",globalStyles:{".video-title":"white-space:unset;"},excludeSelectors:[".video-number",".score",".has-addons"]},{matches:"https://jable.tv/*",globalStyles:{".title":"white-space:unset;max-height:unset;",".img-box > a":"position:relative;"}},{matches:"https://netflav*.com/*",globalStyles:{".grid_title":"max-height:unset;"},extraBlockSelectors:[".genre_filter_item","button"]},{matches:["weibo.com"],selectors:["div[class^='detail_wbtext']"]},{matches:["medium.com","*.medium.com"],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],urlChangeDelay:20,additionalExcludeSelectors:[".social-share",".breadcrumbs",".post__footer",".btn",".reference-citations",".share-nav",".o-share","[data-toolbar=share]","rp","rt",".prism-code","[role=code]","#omni-extension",".omni-item","div[data-paste-markdown-skip]","table.highlight","div[class^=codeBlockContent]","div[class^=codeBlockLines]","div[class^=token-line]","#liuchan-window > .liuchan-container > *",".material-icons",".notranslate","[translate=no]"],selectors:["h1","h2","article section","[aria-hidden='false'] pre","article p"],excludeSelectors:["[aria-label='Post Preview Reading Time']"],globalStyles:{h2:"-webkit-line-clamp: unset;max-height:unset;","article p":"-webkit-line-clamp: unset;max-height:unset;"}},{selectorMatches:["meta[property='og:site_name'][content='Nitter']"],selectors:[".tweet-content",".quote-text"]},{matches:"*.fandom.com",additionalSelectors:[".mcf-card-article__title"]},{matches:["www.washingtonpost.com"],additionalSelectors:["[data-qa='article-body']"]},{matches:"www.economist.com",extraInlineSelectors:"span[data-caps='initial']"},{matches:"www.healthline.com",excludeSelectors:".icon-hl-trusted-source-after"},{matches:"www.ebay.com",excludeSelectors:["headers","[itemprop=offers]",".dne-itemtile-original-price"],paragraphMinTextCount:4,paragraphMinWordCount:2,globalStyles:{"[itemprop=name]":"-webkit-line-clamp: unset;max-height: unset;",".merch-item-title":"-webkit-line-clamp: unset;max-height: unset;"}},{matches:"www.skinstore.com",excludeSelectors:[".responsiveFlyoutMenu_levelOneLink"],paragraphMinTextCount:4,paragraphMinWordCount:2},{matches:"www.tripadvisor.com",paragraphMinTextCount:4,paragraphMinWordCount:2},{matches:"www.amazon.com",paragraphMinTextCount:4,paragraphMinWordCount:2,extraBlockSelectors:[".a-size-small.a-link-normal.page-banner-link.a-nowrap"],globalStyles:{".a-carousel-viewport":"height:unset;",".s-line-clamp-2":"-webkit-line-clamp: unset;max-height: unset;",".s-line-clamp-4":"-webkit-line-clamp: unset;max-height: unset;","[data-rows]":"max-height: unset;-webkit-line-clamp: unset;","[data-a-expander-name='review_text_read_more']":" max-height: unset;"},excludeSelectors:["#navFooter","#navbar-main",".s-price-instructions-style","[class*='star']","[data-hook='acr-average-stars-rating-text']",".a-color-price"]},{matches:"marketplace.visualstudio.com",additionalExcludeSelectors:[".core-info-second-row",".core-info-third-row",".meta-data-list",".item-title",".breadcrumb",".itemDetails-right",".ux-user-name",".ux-updated-date",".ux-item-second-row-wrapper",".stats-and-offer",".header-container"],atomicBlockSelectors:[".core-info-cell > div.name"],globalStyles:{".item-details-control-root.ux-item-shortdesc":"height: unset; overflow: visible; max-height:unset;"}},{matches:"www.bloomberg.com",urlChangeDelay:2e3,excludeSelectors:[".ticker-bar","nav","[aria-label=Banner]","aside"]},{matches:"xueshu.baidu.com",globalStyles:{".abstract_wr":"height: unset; overflow: visible; max-height:unset;"}},{matches:"www.sciencedirect.com",urlChangeDelay:2e3,stayOriginalSelectors:["span.display"],extraBlockSelectors:["span.captions","span[id^=cap]"]},{matches:"www.thehighestofthemountains.com",extraBlockSelectors:"div"},{matches:"te.legra.ph",normalizeBody:"div.ql-editor[contenteditable='false']",urlChangeDelay:500},{matches:["telegra.ph"],normalizeBody:"div.ql-editor[contenteditable='false']",wrapperPrefix:`
`},{matches:["*.annas-archive.org","annas-archive.org"],selectors:[],globalStyles:{"div[id^='link-index-']":"height: unset; max-height: unset;","main > div > div[class*='h-[125]']":"height:auto"},normalizeBody:"body",extraBlockSelectors:["a.custom-a"]},{matches:["explainshell.com"],selectors:["[class='help-box']"]},{matches:["apnews.com"],urlChangeDelay:2e3},{matches:"play.google.com",additionalSelectors:["header[data-review-id] + div"],excludeSelectors:[".vlGucd",".ubGTjb"],globalStyles:{".Epkrse":"-webkit-line-clamp:unset;"}},{matches:["www.tumblr.com"],selectors:["article h1","article > header + div","[data-testid=notes-root] p","div.k31gt","p","article ul","article h2","article h3","article h4","article h5","article h6","article blockquote","article ol"],excludeSelectors:["div.fAAi8","div.wvu3V"],preWhitespaceDetectedTags:["DIV","SPAN","P"]},{matches:["mail.qq.com/cgi-bin/frame_html"],selectors:["#thisiddoesnotexists"]},{matches:"https://www.tinytask.net",globalStyles:{"table > tbody > tr > td > center > table > tbody > tr > td > ul > li":"height: 100%"}},{matches:"www.foxnews.com",shadowRootSelectors:["[data-spot-im-module-default-area='conversation'] > div"],excludeTags:["TITLE","LINK","SCRIPT","STYLE","TEXTAREA","SVG","svg","G","TEXT","NOSCRIPT","INPUT","BUTTON","BASE","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","RT","RP","META","ASIDE","MATH","TTS-SENTENCE","AIO-CODE"],excludeSelectors:[".site-footer",".components-MessageDetails-index__message-details-wrapper","div[class^=SlideDown__container]",".components-MessageActions-index__messageActionsWrapper","span[data-openweb-allow-amp]","div.spcv_typing-users"]},{matches:"www.afreecatv.com",globalStyles:{"a.title":"max-height:unset;-webkit-line-clamp:unset;"}},{matches:"opennet.ru",excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","NOSCRIPT","INPUT","BUTTON","BASE","LABEL","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","RT","RP","META"]},{matches:["www.construct.net"],excludeMatches:["preview.construct.net","editor.construct.net"],additionalSelectors:["aside","div.manualContent"],atomicBlockSelectors:[],stayOriginalSelectors:["a.usernameReference"],additionalInlineSelectors:["a.forumLink"],additionalExcludeSelectors:["div.topNav","div.usernameLink","ul.authorDetails","ul.tagViewer","ul.breadCrumbNav","ul.subForumForums","ul.postTools","li.comment ul.controls","div.forumTopNavWrap","div.downloadWrap","div.articleLeftMenu","div.usernameTextWrap","div.favouriteWrap","div.bannerWrapper","div.viewAddonRightMenu","div.extendedMenu.addonsSubMenu","#BottomLinks.bottomLinks","div#LeftSide.leftSide","div#BottomWrap.bottomWrap","div.courseListWrap div.overview","div.conversationControls","div.contentWrapper h1","div.conversationControls","td.location a#LocationLink","#TopLevelComments .topBar","#TopLevelComments .controls",".tagViewWrap",".changeCount",".otherStats",".FilterMenu",".mobileTopicStats",".forumControlsWrapper",".forumsBottomNavWrap",".breadCrumbNav",".favouriteWrap",".usernameLink",".followWrapper",".blogPostStats",".manualContent dl dt"],globalStyles:{"td.location a#LocationLink":"padding-top: 4px;","div.articleMain .tutCourseWrap":"align-items: flex-start;"}},{matches:"getpocket.com",selectors:["h2","div.excerpt p","article","h1"],globalStyles:{"h2.title":"max-height:unset;-webkit-line-clamp:unset;","div.excerpt p":"max-height:unset;-webkit-line-clamp:unset;"}},{matches:"*.fandom.com",urlChangeDelay:800,normalizeBody:"#mw-content-text",globalStyles:{"#mw-content-text > div > div:nth-child(1)":"height:100%;"},additionalExcludeSelectors:["header.fandom-community-header","div.ph-registration-buttons"]},{matches:"huggingface.co",globalStyles:{".line-clamp-2":"-webkit-line-clamp:unset;max-height:unset;"}},{matches:"www.statista.com",globalStyles:{".itemContent__text":"height:unset;max-height:unset;",".itemContent__subline":"height:unset;max-height:unset;"}},{matches:"epub-reader.online",globalStyles:{"span.slide-contents-item-label":"overflow:visible;max-height:unset;white-space:normal;"},atomicBlockSelectors:"div.slide-contents-item"},{matches:"https://you.com/search",globalStyles:{h3:"max-height:unset;-webkit-line-clamp:unset;",".caKYaC":"max-height:unset;-webkit-line-clamp:unset;",".dDwDsu":"max-height:unset;-webkit-line-clamp:unset;"},excludeSelectors:"div.hpIWZO"},{matches:"auth0.openai.com",excludeSelectors:["form","header > h1"]},{matches:"chat.openai.com",excludeSelectors:["div.absolute.bottom-0.left-0.w-full","h1","div#headlessui-portal-root","nav","div[data-radix-popper-content-wrapper]","ul[aria-multiselectable]",".markdown *","div[class='flex flex-col items-start']","div[class='flex items-center justify-center gap-1 border-b border-black/10 bg-gray-50 p-3 text-gray-500 dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-300']"],isTranslateTitle:!1,wrapperPrefix:"",aiRule:{streamingSelector:".result-streaming.markdown",messageWrapperSelector:".markdown",streamingChange:!0}},{matches:["chat.newstop.asia","chat.waixingyun.cn"],excludeSelectors:[".markdown-body *"],aiRule:{streamingSelector:".n-button.n-button--warning-type.n-button--medium-type",messageWrapperSelector:".markdown-body",streamingChange:!1}},{matches:["askgpt.cn","chatcat.zhaoyoung.me"],excludeSelectors:[".markdown-body *"],aiRule:{streamingSelector:".home_chat-message-status__EsVNi",messageWrapperSelector:".markdown-body",streamingChange:!0}},{matches:"glasp.co",excludeSelectors:[".home_overview_list_content_wrapper"]},{matches:"developer.chrome.com",excludeSelectors:["web-tabs","ul.code-sections--summary"]},{matches:["developer.android.google.cn","developer.android.com"],observeUrlChange:!0,additionalSelectors:["aside","google-codelab-step"]},{matches:"www.ft.com",excludeSelectors:["headers","[aria-labelledby=cookie-banner-aria-label]","footer"]},{matches:"https://apps.microsoft.com/store/detail/*",additionalSelectors:["pre"],globalStyles:{".line-clamp":"-webkit-line-clamp:unset;max-height:unset;"},isTransformPreTagNewLine:!0},{matches:"gitlab.com",excludeSelectors:[".tree-content-holder","nav",".home-panel-metadata","div[data-testid=project_topic_list]",".commit"]},{matches:"www.newthingsunderthesun.com",additionalSelectors:["[translate=no]"]},{matches:"https://www.tiktok.com/*/video/*",selectors:["[data-e2e^=comment-level]","[data-e2e=browse-video-desc] > span"]},{matches:"www.rfc-editor.org",isTransformPreTagNewLine:!0,excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","NOSCRIPT","INPUT","BUTTON","BASE","SELECT","OPTION","IMG","SUB","SUP","HR","CODE","KBD","WBR","TT","RT","RP","META","ASIDE","FOOTER","MATH"]},{matches:"https://steamcommunity.com/app/*",globalStyles:{".forum_topic":"height:auto;",".forum_topic_name":"white-space:normal;"},excludeSelectors:[".forum_paging",".forum_topic_reply_count",".forum_topic_lastpost",".forum_topic_award_count",".discussion_search_pagingcontrols"],observeUrlChange:!0},{matches:"store.steampowered.com/app/*",selectors:[".game_description_snippet",".game_area_description","#earlyAccessHeader","[id^='ReviewContent'] .content"],excludeSelectors:["#global_actions","#store_controls","#foryou_tab","[class*=persona]","[class*=game_title_area]","a.btn_medium",".persona_name",".hours.ellipsis",".checkcol",".postedDate",".dev_row .summary",".already_in_library",".game_header_image_ctn .grid_content",".ds_flag.ds_wishlist_flag",".early_access_review.tooltip",".communitylink_achievement_images",".user_reviews_summary_row.summary",".review_award_ctn",".add_to_wishlist_area",".next_in_queue_content",".glance_tags.popular_tags",".game_purchase_action",".vote_button_ctn","#VoteUpDownBtnCtn","#footer","#ViewAllReviewssummary"],atomicBlockSelectors:[".game_area_sys_req_leftCol",".game_area_sys_req_rightCol"],extraInlineSelectors:[".pulldown"],additionalSelectors:[".game_page_autocollapse_ctn iframe"],globalStyles:{".game_description_snippet":"max-height:unset; overflow: scroll;",".game_purchase_area_friends_want":"height: auto; padding-bottom: 6px;",".div.early_access_banner":"height: 84px",".franchise_notice > *":"height: 84px"},detectParagraphLanguage:!0},{matches:"https://www.nature.com/articles/*",excludeSelectors:[".c-header",".c-recommendations-header",".c-recommendations-list-container",".c-article-references__links",".c-article-identifiers",".c-article-author-list",".c-article-metrics-bar__wrapper",".c-article__pill-button","#author-information-content","#article-info-section"]},{matches:"https://www.webofscience.com/*",globalStyles:{".abstract":"height:auto !important;",".show-more-lines":"height:unset !important;"},excludeSelectors:[".summary-left-panel",".authors","app-full-record-keywords mark"],mutationObserverContainerSelectors:["[data-ta='summary-record-title-link']","#FullRTa-fullRecordtitle-0"],extraBlockSelectors:["app-summary-authors + div","app-full-record-keywords span span"],observeUrlChange:!0,urlChangeDelay:600,mutationChangeDelay:600},{matches:["appleinsider.com"],excludeSelectors:["#topic-nav"]},{matches:"https://www.jetbrains.com/help/*",extraBlockSelectors:["[data-test=prompt]"]},{matches:["https://crates.io/search*"],selectors:["div[class^=_description-box] div[class^=_description]"]},{matches:"www.theverge.com",shadowRootSelectors:["div#coral_thread > div"]},{matches:"https://beta.simp.red/trans*",mainFrameSelector:".simpread-read-root"},{matches:"https://www.lookintobitcoin.com/charts/*",excludeSelectors:["svg"]},{matches:"https://platform.openai.com/account/api-keys*",urlChangeDelay:1500},{matches:"https://pkg.go.dev/std",selectors:["td.UnitDirectories-desktopSynopsis"]},{matches:"https://pkg.go.dev/*",selectors:["div.UnitDetails p"]},{isEbook:!0,isTranslateTitle:!1,urlChangeDelay:200,selectorMatches:["meta[name='immersive-translate-ebook-viewer'][content='true']"],excludeSelectors:["#drop-target","#drop-target h1","#side-bar","h1#side-bar-title"],extraInlineSelectors:["span.dropcaps"],paragraphMinTextCount:4,paragraphMinWordCount:2,blockMinTextCount:1,blockMinWordCount:1,containerMinTextCount:1,wrapperPrefix:"<br />",targetWrapperTag:"span"},{isEbookBuilder:!0,isTranslateTitle:!1,targetWrapperTag:"span",selectorMatches:["meta[name='immersive-translate-ebook-builder'][content='true']"],globalMeta:{},excludeSelectors:["h1.notranslate","#drop-target","#drop-target h1","#side-bar","h1#side-bar-title","#tool",".Code"],paragraphMinTextCount:4,paragraphMinWordCount:2,blockMinTextCount:1,blockMinWordCount:1,containerMinTextCount:1,wrapperPrefix:"<br />"},{matches:["https://www.explainpaper.com/reader*"],isTranslateTitle:!1,selectors:[".leading-relaxed",".chat-messages p",".text-sm"]},{matches:"https://colab.research.google.com/*",excludeSelectors:["code","view-line"]},{matches:"www.gatesnotes.com",minZIndex:-1},{matches:"page.kakao.com",shadowRootSelectors:["div[style^='visibility: visible'"]},{matches:"coinmarketcap.com",extraBlockSelectors:["div[class='sc-3502f6cd-0 JxHqg']"]},{matches:"wandb.ai",additionalSelectors:[".report-page-top"],additionalStayOriginalSelectors:["span[data-slate-inline=true]"],extraInlineSelectors:[]},{matches:"paulgraham.com",additionalSelectors:["font[face=verdana]"],extraBlockSelectors:"font[face=verdana]"},{matches:"https://*.zendesk.com/agent/*",selectors:["[data-test-id*=subject]",".zd-comment",".title"]},{matches:"webmail.migadu.com",selectors:[".bodyText"]},{matches:"thehackernews.com",excludeSelectors:["span#blog-pager-older-link","span.h-datetime"],additionalSelectors:[".pop-title"]},{isSubtitleBuilder:!0,selectorMatches:["meta[name='immersive-translate-subtitle-builder'][content='true']"],pairs:{".source-text":".target-text"},paragraphMinTextCount:4,paragraphMinWordCount:2,isTranslateTitle:!1,wrapperPrefix:"",wrapperSuffix:""},{matches:"cs.brown.edu",excludeSelectors:[".SCodeFlow"]},{matches:"tass.ru",globalStyles:{"#__next":"font-size: 19px;line-height:28px;"}},{matches:"chat.google.com",selectors:["[jsname=bgckF]"]},{matches:"https://www.fiverr.com/inbox/*",selectors:[".message-body"]},{matches:["jira.*.com/browse/*","jira.*.com/projects/*"],selectors:["[id=descriptionmodule]","[id=summary-val]","div.action-body","td.stsummary"]},{matches:["*.aha.io"],selectors:["[tabindex='0']","div.user-content","div.comments__body","span.name"]},{matches:"thehill.com",injectedCss:[".most-popular-item { max-height: unset !important; }",".most-popular-item__link { -webkit-line-clamp: unset !important; }"],excludeSelectors:["div.featured-cards__byline","div.list-item__meta",".tags__item","div.extended-scroll__header",".submitted-by",".site-header--has-alert-banner",".homepage__container__opinion__item__byline",".homepage__container__header",".archive__item__meta"]},{matches:"manpages.ubuntu.com",selectors:["pre"],atomicBlockTags:["pre"]},{matches:"www.spiedigitallibrary.org",excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","G","NOSCRIPT","INPUT","BUTTON","BASE","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","RT","RP","META","ASIDE","FOOTER","MATH","TTS-SENTENCE","AIO-CODE"]},{matches:"www.promptingguide.ai",selectors:["article","li"]},{matches:"ground.news",globalStyles:{".line-clamp-3":"-webkit-line-clamp: unset !important;"}},{matches:"*.ietf.org/doc/html/*",additionalSelectors:["pre"],isTransformPreTagNewLine:!0,preWhitespaceDetectedTags:["DIV","SPAN","PRE"]},{matches:"https://www.newsminimalist.com/",extraBlockSelectors:[".inline-flex"],excludeTags:["TITLE","LINK","SCRIPT","STYLE","TEXTAREA","SVG","svg","G","NOSCRIPT","INPUT","BASE","SELECT","OPTION","HR","PRE","KBD","WBR","RT","RP","META","MATH","TTS-SENTENCE","AIO-CODE"]},{matches:"https://player.vimeo.com/video/*",extraBlockSelectors:["span.vp-captions-line","span[class^=CaptionsRenderer_]"]},{matches:"https://yandex.com/",selectors:[".tabs__item-text"]},{matches:"https://yandex.com/search/*",excludeSelectors:[".KeyValue-Row",".EntityFeedbackFooter",".Organic-Subtitle",".SerpFooter-Content",".serp-user",".Pager"],globalStyles:{".ExtendedText-Toggle":"white-space:normal;"}},{matches:"https://yandex.com/video/*",selectors:[".serp-item__title",".serp-item__text",".Keypoints-ItemTitle",".bes-epmjnzm-idtktyj",".OrganicTitle-LinkText","h1.VideoTitle"],globalStyles:{".serp-item__title":"-webkit-line-clamp: unset;max-height:unset;",".serp-item__text":"-webkit-line-clamp: unset;max-height:unset;",".OrganicTitle-LinkText":"-webkit-line-clamp: unset;max-height:unset;","h1.VideoTitle":"-webkit-line-clamp: unset;max-height:unset;",".link .serp-item__keypoints":"bottom:2px;",".OrganicTitle":"max-height:unset;"}},{matches:"https://www.perplexity.ai/search/*",extraBlockSelectors:[".prose > span"],additionalStayOriginalSelectors:["a.citation"],insertPosition:"afterend"},{matches:"https://www.perplexity.ai",globalStyles:{".line-clamp-1":"-webkit-line-clamp: unset !important;",".line-clamp-2":"-webkit-line-clamp: unset !important;"}},{matches:"https://allmyfaves.com/",selectors:["p"],paragraphMinTextCount:2,paragraphMinWordCount:1},{matches:"man7.org",isTransformPreTagNewLine:!0,globalStyles:{pre:"white-space: inherit;"}},{matches:"https://www.kadaza.com/",selectors:[".header span.title",".custom-content-footer"],containerMinTextCount:2,containerMinWordCount:1,paragraphMinTextCount:2,paragraphMinWordCount:1},{matches:["https://babelnovel.com/books/*","https://www.webnovel.com/book/*"],urlChangeDelay:0},{matches:"blog.genuine.com",excludeSelectors:["div.enlighter"]},{matches:"www.chinadaily.com.cn",injectedCss:["a { height: unset !important; }","li { height: unset !important; }","div { height: unset !important; }",".immersive-translate-target-inner {color:black;}"]},{matches:"www.braynzarsoft.net",selectors:["div#view-question-desc"]},{selectorMatches:["meta[name=immersiveTranslateIosOnBoarding]"],initialGlobalAttributes:{"input#immersiveTranslateDetectedSlot":{value:"true"}},isInjectOptionsUrl:!0,isInjectVersion:!0},{globalAttributes:{"#stimulus":{translate:"off",class:"stimulus"},"#stem":{translate:"off",class:"stem"}},matches:"https://lawhub.lsac.org/question/*"},{matches:"https://www.yuque.com/*",excludeSelectors:[".lark-virtual-tree"]},{matches:"https://bearblog.dev/discover/*",excludeTags:["small"]},{matches:"www.researchgate.net",excludeSelectors:[".nova-legacy-v-publication-item__meta-data",".nova-legacy-v-publication-item__person-list",".js-authors-list"]},{matches:["www.theatlantic.com","https://mashable.com/*"],initialSelectorGlobalAttributes:{"footer:last-of-type":{translate:"no"},"nav:last-of-type":{translate:"no"},nav:{translate:"no"}}},{matches:"youtrack.jetbrains.com/articles/*",selectors:["[role=presentation]","[data-test=article-content]"],excludeSelectors:[".toolbar__ee8"]},{matches:"www.bbc.com",excludeSelectors:["section.module--languages",".drop-capped"]},{matches:"www.dw.com",initialSelectorGlobalAttributes:{"footer:last-of-type":{translate:"no"},"nav:last-of-type":{translate:"no"},nav:{translate:"no"}},excludeSelectors:[".focus-menu-shown"]},{matches:"docs.sentry.io",initialSelectorGlobalAttributes:{"footer:last-of-type":{translate:"no"},".navbar":{translate:"no"}}},{matches:"https://platform.openai.com/docs/*",urlChangeDelay:0},{selectorMatches:["meta[name='generator'][content^='Discourse']"],urlChangeDelay:0,_comment:"\u89E3\u51B3url\u53D8\u5316\u4F46\u662F\u9875\u9762\u4E0D\u53D8\u7684\u95EE\u9898"},{matches:"feedly.com",globalStyles:{".TitleOnlyLayout":"height:unset !important;",".EntrySummary--u4":"-webkit-line-clamp: unset;max-height:unset;",".EntrySummary--u5":"-webkit-line-clamp: unset;max-height:unset;"},excludeSelectors:[".Leftnav"]},{matches:"bard.google.com",excludeSelectors:["mat-sidenav","div.capabilities-disclaimer"],isTranslateTitle:!1,excludeTags:["TITLE","LINK","SCRIPT","STYLE","TEXTAREA","SVG","svg","G","NOSCRIPT","INPUT","BASE","SELECT","OPTION","HR","PRE","KBD","WBR","RT","RP","META","MATH","TTS-SENTENCE","AIO-CODE"]},{matches:"web.whatsapp.com",selectors:[".copyable-text"],wrapperPrefix:`
`,wrapperSuffix:"<br/>"},{matches:"https://cn.bing.com/search*",extraInlineSelectors:["a","i"]},{matches:"news.yahoo.com",excludeSelectors:["#ybar-inner-wrap"]},{matches:"*.yahoo.com",excludeSelectors:["._ys_jiqava"],globalAttributes:{"#atomic .Mt\\(20px\\)":{style:"margin-top: 100px;"},"[class*='LineClamp']":{style:"-webkit-line-clamp:unset;max-height:unset;"},"a[class*='js-content-viewer']> div[class*='Td\\(n\\)']":{style:"overflow: scroll;"},"[class*='_ys_24482e']":{style:"-webkit-line-clamp:unset;"}}},{matches:"www.wsj.com",excludeSelectors:["header","footer","nav","[aria-label='Markets summary']"]},{matches:"www.businessinsider.com",excludeSelectors:["header","nav","section.live-updates-module "]},{matches:"www.goodreads.com",excludeSelectors:[".badgeYear",".gr-mediaBox__desc",".bookVotedRow",".minirating","div[itemprop='aggregateRating']",".wtrButtonContainer",".RatingsHistogram__labelTitle",".FollowButton",".siteHeader__topLevelLink","#books > thead","td[class*='rating']","td[class*='shelves']","td[class*='date_read']","td[class*='date_added']","td[class*='actions']"]},{matches:"https://feeder.co/*",globalStyles:{".item-summary":"-webkit-line-clamp:unset;"}},{matches:"https://www.elektrotechnik.rwth-aachen.de/*",globalAttributes:{"[class='notranslate']":{class:""}}}]};var Nr="DENO",$t="CHROME",Yt="FIREFOX";function ea(e){let t=$t;try{let r=navigator?.userAgent||"";/firefox/i.test(r)||typeof InstallTrigger<"u"?t=Yt:/deno/i.test(r)&&(t=Nr)}catch{}return e===$t&&t===$t||e===Yt&&t===Yt||e===Nr&&t===Nr}function ta(){return ea($t)}function ra(){return typeof Deno<"u"}function na(){return ea(Yt)}var aa={addListener:()=>{},removeListener:()=>{},hasListener:()=>{}},oa={permissions:{contains:()=>{},request:()=>{}},runtime:{onMessage:aa,openOptionsPage:()=>{},lastError:{message:""}},storage:{sync:{get:()=>{},set:()=>{}}},tabs:{onUpdated:aa,query:()=>{},sendMessage:()=>{}}};var p;ra()?p=oa:p=globalThis.immersiveTranslateBrowserAPI;function Br(e){return Array.isArray(e)?e:e?[e]:[]}function sa(e,t){let r=[],n=Object.keys(e);for(let c of n){let o=e[c];Array.isArray(o)&&r.push(c)}let a={...e};return Object.keys(t).forEach(c=>{let o=t[c];if(o!==void 0)if(!r.includes(c))a[c]=o;else if(c.startsWith("additional")){let l=Br(o);a[c]=Array.from(new Set([...a[c],...l]))}else a[c]=Br(o)}),a}function gi(){if(j.PROD==="1")return{};let e={};if(j.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID&&j.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY){let t={secretId:j.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID,secretKey:j.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY};e.translationServices={},e.translationServices.tencent=t}if(j.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID&&j.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY){let t={appid:j.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID,key:j.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY};e.translationServices||(e.translationServices={}),e.translationServices.baidu=t}if(j.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN){let t={token:j.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN};e.translationServices||(e.translationServices={}),e.translationServices.caiyun=t}if(j.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY){let t={apikey:j.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY};e.translationServices||(e.translationServices={}),e.translationServices.openl=t}if(j.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID&&j.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET){let t={appId:j.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID,appSecret:j.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET};e.translationServices||(e.translationServices={}),e.translationServices.youdao=t}if(j.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID&&j.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY){let t={accessKeyId:j.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID,secretAccessKey:j.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY};e.translationServices||(e.translationServices={}),e.translationServices.volc=t}if(j.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY){let t={authKey:j.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY};e.translationServices||(e.translationServices={}),e.translationServices.deepl=t}if(j.DEEPL_PROXY_ENDPOINT&&(e.translationServices||(e.translationServices={}),e.translationServices.deepl||(e.translationServices.deepl={}),e.translationServices.deepl.immersiveTranslateApiUrl=j.DEEPL_PROXY_ENDPOINT),j.IMMERSIVE_TRANSLATE_DEEPL_ENDPOINT&&(e.translationServices||(e.translationServices={}),e.translationServices.deepl||(e.translationServices.deepl={}),e.translationServices.deepl.immersiveTranslateDeeplTokenUrl=j.IMMERSIVE_TRANSLATE_DEEPL_ENDPOINT),j.IMMERSIVE_TRANSLATE_SECRET_OPENAI_API_KEY){let t={APIKEY:j.IMMERSIVE_TRANSLATE_SECRET_OPENAI_API_KEY};e.translationServices||(e.translationServices={}),e.translationServices.openai=t}return j.DEBUG==="1"&&(e.debug=!0,e.cache=!1,e.alpha=!0),j.MOCK==="1"&&(e.translationService="mock"),j.IMMERSIVE_TRANSLATE_SERVICE&&(e.translationService=j.IMMERSIVE_TRANSLATE_SERVICE),e}async function Mt(){let e=await p.storage.local.get(kt);if(e[kt]){let t=e[kt],r=t.tempTranslationUrlMatches||[],n=r.filter(c=>c.expiredAt>Date.now()),a=!1;n.length!==r.length&&(r=n,a=!0);let i={...t,tempTranslationUrlMatches:[...r]};return a&&await ft(i),i}else return{}}async function ft(e){await p.storage.local.set({[kt]:e})}async function tt(){let e=await p.storage.local.get(Gt),t={...Dr,buildinConfigUpdatedAt:j.BUILD_TIME};if(e[Gt]){let m=e[Gt];if(m&&m.buildinConfigUpdatedAt){let C=new Date(m.buildinConfigUpdatedAt),G=new Date(t.buildinConfigUpdatedAt);C>G&&(t=m)}}let r={};if(!Ir()&&p.commands&&p.commands.getAll){let m=await p.commands.getAll();for(let C of m)C.name&&C.shortcut&&(r[C.name]=C.shortcut)}let n=hi(),a=gi(),i=await Ur(),c=globalThis.IMMERSIVE_TRANSLATE_CONFIG||{},o=await Mt(),l=new Date;if(o&&o.tempTranslationUrlMatches&&o.tempTranslationUrlMatches.length>0){let m=o.tempTranslationUrlMatches.filter(C=>new Date(C.expiredAt)>l);if(m.length>0){let C=i.translationUrlPattern?i.translationUrlPattern?.matches||[]:[],G=Array.isArray(C)?C:[C],Y=Array.from(new Set(G.concat(m.map(me=>me.match))));i.translationUrlPattern={...i.translationUrlPattern,matches:Y}}}let u=Object.assign({},c,a,i);if(!u.interfaceLanguage){let m=await pi();u.interfaceLanguage=m}let d=u.interfaceLanguage==="en",T=u.targetLanguage==="en",_=t&&t.translationLanguagePattern&&t.translationLanguagePattern.matches&&t.translationLanguagePattern.matches.length===0,S=["bing","google","transmart","mock"].includes(u.translationService)||!u.translationService;!d&&!T&&!_&&S?t.translationLanguagePattern||(t.translationLanguagePattern={matches:["en"],excludeMatches:[]}):t.translationLanguagePattern={matches:[],excludeMatches:[]};let b=Object.assign(n,t),Z=Object.keys(b),te=["translationUrlPattern","translationLanguagePattern","immediateTranslationPattern","translationBodyAreaPattern","translationParagraphLanguagePattern","translationThemePatterns","translationGeneralConfig","shortcuts","inputTranslationUrlPattern","inputLanguageCodeAlias"];for(let m of Z){let C=m;if(C==="generalRule")typeof u[C]=="object"&&(b[C]=sa(n[C],u[C]));else if(C==="translationServices"){let G=u[C]||{},Y=t[C]||{},me=Object.keys(Y),x=Object.keys(G),A=[...new Set([...me,...x])],f={};for(let k of A)f[k]={...Y[k],...G[k]};b[C]=f}else if(typeof u[C]!="string"&&typeof u[C]!="boolean"&&typeof u[C]!="number"&&te.includes(C))u[C]&&(b[C]=Object.assign(b[C],u[C])),C==="shortcuts"&&(Ir()||ze()?b[C]={...b[C],...r}:b[C]={...r});else if(C==="rules"){if(Array.isArray(u[C])&&(b[C]=[...u[C],...b[C]]),j.PROD==="0"&&j.DEV_RULES){let G=JSON.parse(j.DEV_RULES);b[C]=[...G,...b[C]]}}else u[C]!==void 0&&(b[C]=u[C])}return b.donateUrl=t.donateUrl,b.minVersion=t.minVersion,b.feedbackUrl=t.feedbackUrl,b}async function Ur(){return(await p.storage.sync.get("userConfig")||{}).userConfig||{}}async function Jt(e){await p.storage.sync.set({userConfig:e})}var pi=async()=>{let e=["zh-CN"];try{e=await p.i18n.getAcceptLanguages()}catch(n){P.warn("get browser language error:",n)}let r=e.map(n=>ht(n)).find(n=>st[n]);return r||"en"},hi=()=>{let e={...Dr,buildinConfigUpdatedAt:j.BUILD_TIME};return{...e,targetLanguage:Vt,interfaceLanguage:"en",translationMode:"dual",debug:!1,alpha:!1,translationUrlPattern:{matches:[],excludeMatches:[]},translationLanguagePattern:{matches:[],excludeMatches:[]},translationThemePatterns:{},translationParagraphLanguagePattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationBodyAreaPattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationTheme:"none",translationService:"bing",translationArea:"main",translationStartMode:"dynamic",translationServices:{},generalRule:{...e.generalRule},translationGeneralConfig:{engine:"bing"},rules:[]}};function ia(e){let t=p.runtime.getURL(qt),r=new URL(t);return(e.startsWith("http")||!na())&&r.searchParams.set("file",e),r.href}function la(e){return new URL(e)?.pathname.toLowerCase().endsWith(".pdf")}var lt=class extends Error{constructor(r,n,a){super(n);this.name=r,a&&(this.details=a)}};async function ua(e){let t;if(e&&e.retry&&e.retry>0)try{t=await ur(ca.bind(null,e),{multiplier:2,maxAttempts:e.retry})}catch(r){throw r&&r.name==="RetryError"&&r.cause?r.cause:r}else t=await ca(e);return t}async function ca(e){e.body;let{url:t,responseType:r,...n}=e;r||(r="json"),n={mode:"cors",...n};let a=!0;e.fetchPolyfill&&(a=!1);let i=e.fetchPolyfill||fetch,c=12e4;if(e.timeout&&(c=e.timeout),a){let l=new AbortController,u=l.signal;setTimeout(()=>{l.abort()},c),n.signal=u}let o;try{o=await i(t,n)}catch(l){P.error("fetch error",l);let u=l.message||"";throw l.message="\u7F51\u7EDC\u95EE\u9898\uFF0C\u65E0\u6CD5\u8FDE\u63A5\u5230\u670D\u52A1\uFF0C\u8BF7\u68C0\u67E5\u4F60\u7684\u4EE3\u7406\u6216\u672C\u5730\u7F51\u7EDC\u8FDE\u63A5\u540E\u91CD\u8BD5\u3002 "+u,l}if(o.ok&&o.status>=200&&o.status<400){if(r==="json")return await o.json();if(r==="text")return await o.text();if(r==="raw"){let l=await o.text(),u=Object.fromEntries([...o.headers.entries()]),d=o.url;return d||(o.headers.get("X-Final-URL")?d=o.headers.get("X-Final-URL"):d=t),{body:l,headers:u,status:o.status,statusText:o.statusText,url:d}}else if(r==="stream"){let l="",u;if(o.body&&o.body instanceof ReadableStream)for await(let d of fi(o.body)){let T=new TextDecoder().decode(d);l+=T;let _;for(;(_=l.indexOf(`
`))>=0;){let S=l.slice(0,_).trim();if(l=l.slice(_+1),S.startsWith("event:")||S==="")continue;let b="";if(S.startsWith("data:")&&(b=S.slice(5).trim()),b==="[DONE]")break;let Z;try{Z=JSON.parse(b??"")}catch(te){P.debug("json error",te);continue}u=Z}}return u}}else{let l;try{l=await o.text()}catch(T){P.error("parse response failed",T)}l&&P.error("fail response",l);let u="";l&&(u=l.slice(0,280));let d="\u670D\u52A1\u8FD4\u56DE\u9519\u8BEF\uFF0C\u4EE3\u7801:"+o.status+": "+(o.statusText||"")+u;throw o.status===429?d=`\u670D\u52A1\u8FD4\u56DE\u9519\u8BEF\uFF1A429\uFF0C\u8BF4\u660E\u8BF7\u6C42\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002 ${u}`:o.status===403?d=`\u670D\u52A1\u8FD4\u56DE\u9519\u8BEF\uFF1A403\uFF0C \u8BF4\u660E\u6682\u65F6\u6CA1\u6709\u6743\u9650\u8BBF\u95EE\u8BE5\u670D\u52A1\u3002 ${u}`:o.status===400?d=`\u670D\u52A1\u8FD4\u56DE\u9519\u8BEF\uFF1A400\uFF0C \u8BF4\u660E\u8BF7\u6C42\u53C2\u6570\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\u76F8\u5E94\u914D\u7F6E\u3002 ${u}`:o.status===502&&(d=`\u670D\u52A1\u8FD4\u56DE\u9519\u8BEF\uFF1A502\uFF0C \u8BF4\u660E\u670D\u52A1\u8D85\u65F6\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002 ${u}`),new lt("fetchError",d,l)}}async function*fi(e){let t=e.getReader();try{for(;;){let{done:r,value:n}=await t.read();if(r)return;yield n}}finally{t.releaseLock()}}var da=["*://*/*","*","*://*"],ga="immersive-translate-wildcard-placeholder.com";function bi(e,t){let r=[];if(!t||(t&&!Array.isArray(t)?r=[t]:r=t,r.length===0))return null;if(r.some(c=>da.includes(c)))return e;let n=new URL(e);n.hash="",n.search="";let a=n.href,i=n.hostname;if(r&&r.length>0){let c=r.find(o=>{let l=o;if(o===i)return!0;if(da.includes(o))return!0;if(!o.includes("*")&&o.includes("://")){try{let u=new URL(o);return u.pathname==="/"&&!o.endsWith("/")?u.hostname===i:yi(a,o)}catch{}return!1}else{let u,d=o;if(o.includes("://")){let te=o.split("://");u=te[0],u==="*"&&te.length>1&&(u="*",o="https://"+te[1])}else u="*",o="https://"+o;let T=o.replace(/\*/g,ga),_;try{_=new URL(T)}catch{return P.debug("invalid match pattern",T,"raw match value:",d),!1}let S=_.hostname,b=_.pathname;b==="/"&&(d.replace("://","").includes("/")||(b="/*"));let Z=Ti(u+":",ma(S),ma(b));if(Z){let te=new URL(a);return te.port="",Z.test(te.href)}else return!1}});if(c)return c}return null}function ma(e){return e.replaceAll(ga,"*")}function Ti(e,t,r){let n="^";return e==="*:"?n+="(http:|https:|file:)":n+=e,n+="//",t&&(e==="file:"||(t==="*"?n+="[^/]+?":(t.match(/^\*\./)&&(n+="[^/]*?",t=t.substring(2)),n+=t.replace(/\./g,"\\.").replace(/\*/g,"[^/]*")))),r?r==="*"||r==="/*"?n+="(/.*)?":r.includes("*")?(n+=r.replace(/\*/g,".*?"),n+="/?"):n+=r.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):n+="/?",n+="$",new RegExp(n)}function pa(e,t){return bi(e,t)!==null}function yi(e,t){let r=new URL(e),n=new URL(t);return r.hostname===n.hostname&&r.pathname===n.pathname&&r.protocol===n.protocol&&r.port===n.port}var Xt=class{constructor(t){this.accessToken=t}async listAll(){let t=[],r="";do{let{nextPageToken:n,files:a}=await this.list(r).catch(i=>{throw i});t.push(...a),r=n||""}while(r);return t}async getConfig(t){try{return await(await fetch(`https://www.googleapis.com/drive/v3/files/${t}?alt=media`,{headers:{Authorization:`Bearer ${this.accessToken}`}})).json()}catch(r){return P.error("get config error, use default",r),{}}}async delete(t){await fetch(`https://www.googleapis.com/drive/v3/files/${t}`,{method:"DELETE",headers:{Authorization:`Bearer ${this.accessToken}`}})}findByName(t){return this.list(void 0,`name = '${t}'`)}uploadConfig(t,r=zt){let n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"});return this.upload({name:r,parents:["appDataFolder"],mimeType:"application/json"},n)}updateConfig(t,r){let n=new Blob([JSON.stringify(r,null,2)],{type:"application/json"});return this.updateContent(t,n)}async upload(t,r){let n=new FormData;n.append("metadata",new Blob([JSON.stringify(t)],{type:"application/json; charset=UTF-8"})),n.append("file",r);let a=await fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",{method:"POST",headers:{Authorization:`Bearer ${this.accessToken}`},body:n});return a.ok?await a.json():Promise.reject(a.text())}async list(t,r){let n=new URL("https://www.googleapis.com/drive/v3/files");t&&n.searchParams.append("pageToken",t),r&&n.searchParams.append("q",r),n.searchParams.append("spaces","appDataFolder"),n.searchParams.append("fields","files(id,name,createdTime,modifiedTime,size)"),n.searchParams.append("pageSize","100"),n.searchParams.append("orderBy","createdTime desc");try{return P.debug("list api:",n.toString(),this.accessToken),await(await fetch(n.toString(),{headers:{Authorization:`Bearer ${this.accessToken}`}})).json()}catch(a){throw P.error("fetch google ip error",a),a}}async updateContent(t,r){return await(await fetch(`https://www.googleapis.com/upload/drive/v3/files/${t}?uploadType=media`,{method:"PATCH",headers:{Authorization:`Bearer ${this.accessToken}`},body:r})).text()}};function ha(e,t){let r=["https://www.googleapis.com/auth/drive.appdata"];return`https://accounts.google.com/o/oauth2/v2/auth?client_id=${Kt}&response_type=token&redirect_uri=${encodeURIComponent(t)}&scope=${encodeURIComponent(r.join(" "))}&state=${encodeURIComponent(JSON.stringify(e))}`}function fa(e){let t=e.match(/[#?](.*)/);return!t||t.length<1?null:{access_token:new URLSearchParams(t[1].split("#")[0]).get("access_token")}}async function ba(e,t,r,n,a,i,c){P.debug(`autoSyncStrategy accessToken: ${e}`);let o=new Xt(e);try{let l=(await o.findByName(zt)).files;P.debug("files",l);let u=l[0]?.id,d=null;if(u&&(d=await o.getConfig(u).then(T=>({fileId:u,config:T}))),d){let{config:T,fileId:_}=d,S=T.updatedAt?new Date(T.updatedAt):new Date(0),b=t.updatedAt?new Date(t.updatedAt):new Date(0);if(P.debug("remoteUpdatedAt",S,"localUpdatedAt",b),S>b)P.debug("remote is newer, update local config",T),r(T),i&&i(!0);else if(S.getTime()===b.getTime())P.debug("remote and local are the same, do nothing"),i&&i(!1);else if(S<b)P.debug("local is newer, update remote config",t),await o.updateConfig(_,t),i&&i(!0);else{c&&c(": unknown error");return}n(new Date().toISOString())}else if(d===null)if(t){if(!t.updatedAt){let T=new Date().toISOString();a(T),t.updatedAt=T}await o.uploadConfig(t),n(new Date().toISOString()),i&&i(!0)}else c&&c(": Local Config is empty");else c&&c(": latestConfig is "+d)}catch(l){P.error("syncLatestWithDrive error",l),c&&c(": "+l.message)}}var wi="https://oauth2.googleapis.com/revoke",rt=class{constructor(t,r){this.CLASSNAME="GoogleAuth";this._state=t,this._redirectUrl=r}static revoke(t){let r=`${wi}?token=${t}`;return fetch(r,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(async n=>(await rt.removeAuthInfo(),Or()&&globalThis.location.reload(),n))}static async getAuthInfo(){let t=await p.storage.local.get(gt);if(t[gt])return t[gt]}static async removeAuthInfo(){return await p.storage.local.remove(gt)}static setAuthInfo(t){return p.storage.local.set({[gt]:t})}async auth(t=!1){let r=await rt.getAuthInfo();if(P.debug(this.CLASSNAME,"token from cache:",r),r&&r.access_token&&await Ta(r.access_token).then(i=>!0).catch(i=>!1))return Promise.resolve(r);let n=ha(this._state,this._redirectUrl);return P.debug(this.CLASSNAME,"auth url: "+n),Or()?this.userscriptAuthWorkflow(n,t):this.extensionAuthWorkflow(n).then(a=>(rt.setAuthInfo(a),a))}async userscriptAuthWorkflow(t,r){return r&&await p.storage.local.set({[Xn]:!0}),globalThis.open(t,"_self"),Promise.resolve({})}extensionAuthWorkflow(t){let r,n=!1;return new Promise((a,i)=>{let c=()=>{p.tabs.onUpdated.removeListener(o),p.tabs.onRemoved.removeListener(l)},o=(_,S,b)=>{if(P.debug(this.CLASSNAME,"create tab onUpdated: "+b.url),r===_){let Z=new URL(b.url||""),te=fa(b.url);Z.pathname.startsWith("/auth-done")&&te?.access_token&&(P.debug(this.CLASSNAME,"auth done: "+b.url),a({access_token:te.access_token}),n=!0,p.tabs.remove(_),c())}},l=(_,S)=>{P.debug(this.CLASSNAME,"create tab onRemoved: "+_),(_===r||!n)&&(c(),i(new Error("auth failed")))},u=Math.min(500,screen.availWidth),d=Math.min(650,screen.availHeight),T;p.windows===void 0?T=p.tabs.create({url:t}).then(_=>{r=_.id}):T=p.windows.create({url:t,type:"popup",width:u,height:d,left:Math.round((screen.width-u)/2),top:Math.round((screen.height-d)/2)}).then(_=>{r=_.tabs[0].id}),T.then(()=>{p.tabs.onUpdated.addListener(o),p.tabs.onRemoved.addListener(l)}).catch(_=>{P.debug(this.CLASSNAME,"create tab failed: "+_),i(_)})})}};var xi="https://www.googleapis.com/oauth2/v3/tokeninfo",vi=Kt,Si=De().REDIRECT_URL;function Ta(e){if(!e)throw"Authorization failure";let t=`${xi}?access_token=${e}`,r=new Request(t,{method:"GET"});function n(a){return new Promise((i,c)=>{a.status!=200&&c("Token validation error"),a.json().then(o=>{o.aud&&o.aud===vi?i(e):c("Token validation error")})})}return fetch(r).then(n)}function ya(e,t=!1){let r=Si;if(typeof window<"u"&&window.location.protocol.startsWith("http")){let a=window.location.hostname,i=window.location.port;r=`${window.location.protocol}//${a}${i?`:${i}`:""}/auth-done/`}return new rt(e,r).auth(t)}async function wa(){}function xa(e,t){let r=new Map;for(let i of t)r.set(i.header.toLowerCase(),i);let n=[],a=e.filter(i=>{let c=r.get(i.name.toLowerCase());if(c){if(c.operation==="remove")return!1;if(c.operation==="set")return!1}return!0});for(let i of t)i.operation==="set"&&n.push({name:i.header,value:i.value||""});return a.concat(n)}var Zt=[{id:1,priority:1,action:{type:"modifyHeaders",requestHeaders:[{header:"Referer",operation:"set",value:"https://httpstat.us/429"},{header:"origin",operation:"set",value:"https://httpstat.us/429"},{header:"DNT",operation:"set",value:"1"}]},condition:{urlFilter:"https://httpstat.us/429",resourceTypes:["xmlhttprequest"],domainType:"thirdParty",initiatorDomains:["cfhamdkdjgoelclgllcoikbckcfpaklj","bpoadfkcbjbfhfodiogcnhhhpibjhbnh"]}},{id:2,priority:1,action:{type:"modifyHeaders",requestHeaders:[{header:"Referer",operation:"set",value:"https://www.deepl.com/"},{header:"origin",operation:"set",value:"https://www.deepl.com"},{header:"DNT",operation:"set",value:"1"},{header:"cookie",operation:"remove"}]},condition:{urlFilter:"https://www2.deepl.com/jsonrpc*",resourceTypes:["xmlhttprequest"],domainType:"thirdParty",initiatorDomains:["cfhamdkdjgoelclgllcoikbckcfpaklj","bpoadfkcbjbfhfodiogcnhhhpibjhbnh"]}},{id:200,priority:1,action:{type:"modifyHeaders",requestHeaders:[{header:"Referer",operation:"set",value:"https://www.deepl.com/"},{header:"origin",operation:"set",value:"chrome-extension://cofdbpoegempjloogbagkncekinflcnj"},{header:"DNT",operation:"set",value:"1"}]},condition:{urlFilter:"https://api.deepl.com/jsonrpc*",resourceTypes:["xmlhttprequest"],domainType:"thirdParty",initiatorDomains:["cfhamdkdjgoelclgllcoikbckcfpaklj","bpoadfkcbjbfhfodiogcnhhhpibjhbnh"]}},{id:201,priority:1,action:{type:"modifyHeaders",requestHeaders:[{header:"Referer",operation:"set",value:"https://www.deepl.com/"},{header:"origin",operation:"set",value:"chrome-extension://cofdbpoegempjloogbagkncekinflcnj"}]},condition:{urlFilter:"https://w.deepl.com/oidc/token",resourceTypes:["xmlhttprequest"],domainType:"thirdParty",initiatorDomains:["cfhamdkdjgoelclgllcoikbckcfpaklj","bpoadfkcbjbfhfodiogcnhhhpibjhbnh"]}},{id:3,priority:1,action:{type:"modifyHeaders",requestHeaders:[{header:"origin",operation:"set",value:"chrome-extension://lkjkfecdnfjopaeaibboihfkmhdjmanm"}]},condition:{urlFilter:"https://transmart.qq.com/api/imt",resourceTypes:["xmlhttprequest"],domainType:"thirdParty",initiatorDomains:["cfhamdkdjgoelclgllcoikbckcfpaklj","bpoadfkcbjbfhfodiogcnhhhpibjhbnh"]}},{id:4,priority:1,action:{type:"modifyHeaders",requestHeaders:[{header:"origin",operation:"set",value:"chrome-extension://lkjkfecdnfjopaeaibboihfkmhdjmanm"}]},condition:{urlFilter:"https://translate.volcengine.com/crx/translate/v1/",resourceTypes:["xmlhttprequest"],domainType:"thirdParty",initiatorDomains:["cfhamdkdjgoelclgllcoikbckcfpaklj","bpoadfkcbjbfhfodiogcnhhhpibjhbnh"]}}];var _t=new Map,Lt=class{constructor(t,r=!1){this.logger=new Et,r&&this.logger.setLevel("debug"),this.fromType=t,_t.has(t)||(_t.set(t,new Map),p.runtime.onMessage.addListener((n,a,i)=>{let c=n.from,o=n.to,l,u,d;a.tab&&a.tab.id&&(l=a.tab.id,c=`${c}:${l}`,u=a.tab.url,d=a.tab.active),this.logger.debug(`${n.to} received message [${n.payload.method}] from ${n.from}`,n.payload.data?n.payload.data:" ");let T=jr(o),{type:_,name:S}=T;if(_!==t)return!1;let b=jr(c),te=_t.get(_).get(S);if(!te)return this.logger.debug(`no message handler for ${_}:${o}, but it's ok`),!1;let{messageHandler:m,sync:C}=te,G={type:t,name:b.name,id:l,url:u,active:d};if(C){try{let Y=m(n.payload,G);i({ok:!0,data:Y})}catch(Y){i({ok:!1,errorName:Y.name,errorMessage:Y.message,errorDetails:Y.details})}return!1}else return m(n.payload,G).then(Y=>{i({ok:!0,data:Y})}).catch(Y=>{i({ok:!1,errorName:Y.name,errorMessage:Y.message,errorDetails:Y.details})}),!0}))}getConnection(t,r,n){let a=!1;n&&n.sync&&(a=!0);let i=this.fromType,c=_t.get(i);if(c.has(t))return c.get(t).connectionInstance;{let o=new Fr(`${i}:${t}`,this.logger);return _t.get(i).set(t,{messageHandler:r,sync:a,connectionInstance:o}),o}}},Fr=class{constructor(t,r){this.from=t,this.logger=r}async sendMessage(t,r){let n=jr(t),{type:a,id:i}=n;if(a!=="content_script"){let c={to:t,from:this.from,payload:r};this.logger.debug(`${c.from} send message [${c.payload.method}] to ${c.to}`,c.payload.data?c.payload.data:" ");try{let o=await p.runtime.sendMessage(c);return va(c,o,this.logger)}catch(o){if(a==="popup"){let l=`popup ${t} is not active, so the message does not send, ignore this error, ${JSON.stringify(r)}`;return this.logger.debug(l,r,t,o),Promise.resolve({message:l})}else throw o}}else{let c={from:this.from,to:t,payload:r};this.logger.debug(`${c.from} send message [${c.payload.method}] to ${c.to}`,c.payload.data?c.payload.data:" ");let o=await p.tabs.sendMessage(i,c);return va(c,o,this.logger)}}};function va(e,t,r){if(t){if(t.ok)return r.debug(`${e.from} received response from ${e.to}:`,t.data?t.data:" "),t.data;throw new lt(t.errorName||"UnknownError",t.errorMessage||"Unknown error",t.errorDetails)}else throw new lt("noResponse","Unknown error")}function jr(e){let t=e.split(":");if(t.length<2)throw new Error("not a valid to string");let r={type:t[0],name:t[1]};if(t[0]==="content_script"){let n=parseInt(t[2]);if(!isNaN(n))r.id=n;else throw new Error("tab id not a valid number")}return r}function nt(e,t){var r=(e&65535)+(t&65535),n=(e>>16)+(t>>16)+(r>>16);return n<<16|r&65535}function ki(e,t){return e<<t|e>>>32-t}function er(e,t,r,n,a,i){return nt(ki(nt(nt(t,e),nt(n,i)),a),r)}function ke(e,t,r,n,a,i,c){return er(t&r|~t&n,e,t,a,i,c)}function Ce(e,t,r,n,a,i,c){return er(t&n|r&~n,e,t,a,i,c)}function Ee(e,t,r,n,a,i,c){return er(t^r^n,e,t,a,i,c)}function Me(e,t,r,n,a,i,c){return er(r^(t|~n),e,t,a,i,c)}function Qt(e,t){e[t>>5]|=128<<t%32,e[(t+64>>>9<<4)+14]=t;var r,n,a,i,c,o=1732584193,l=-271733879,u=-1732584194,d=271733878;for(r=0;r<e.length;r+=16)n=o,a=l,i=u,c=d,o=ke(o,l,u,d,e[r],7,-680876936),d=ke(d,o,l,u,e[r+1],12,-389564586),u=ke(u,d,o,l,e[r+2],17,606105819),l=ke(l,u,d,o,e[r+3],22,-1044525330),o=ke(o,l,u,d,e[r+4],7,-176418897),d=ke(d,o,l,u,e[r+5],12,1200080426),u=ke(u,d,o,l,e[r+6],17,-1473231341),l=ke(l,u,d,o,e[r+7],22,-45705983),o=ke(o,l,u,d,e[r+8],7,1770035416),d=ke(d,o,l,u,e[r+9],12,-1958414417),u=ke(u,d,o,l,e[r+10],17,-42063),l=ke(l,u,d,o,e[r+11],22,-1990404162),o=ke(o,l,u,d,e[r+12],7,1804603682),d=ke(d,o,l,u,e[r+13],12,-40341101),u=ke(u,d,o,l,e[r+14],17,-1502002290),l=ke(l,u,d,o,e[r+15],22,1236535329),o=Ce(o,l,u,d,e[r+1],5,-165796510),d=Ce(d,o,l,u,e[r+6],9,-1069501632),u=Ce(u,d,o,l,e[r+11],14,643717713),l=Ce(l,u,d,o,e[r],20,-373897302),o=Ce(o,l,u,d,e[r+5],5,-701558691),d=Ce(d,o,l,u,e[r+10],9,38016083),u=Ce(u,d,o,l,e[r+15],14,-660478335),l=Ce(l,u,d,o,e[r+4],20,-405537848),o=Ce(o,l,u,d,e[r+9],5,568446438),d=Ce(d,o,l,u,e[r+14],9,-1019803690),u=Ce(u,d,o,l,e[r+3],14,-187363961),l=Ce(l,u,d,o,e[r+8],20,1163531501),o=Ce(o,l,u,d,e[r+13],5,-1444681467),d=Ce(d,o,l,u,e[r+2],9,-51403784),u=Ce(u,d,o,l,e[r+7],14,1735328473),l=Ce(l,u,d,o,e[r+12],20,-1926607734),o=Ee(o,l,u,d,e[r+5],4,-378558),d=Ee(d,o,l,u,e[r+8],11,-2022574463),u=Ee(u,d,o,l,e[r+11],16,1839030562),l=Ee(l,u,d,o,e[r+14],23,-35309556),o=Ee(o,l,u,d,e[r+1],4,-1530992060),d=Ee(d,o,l,u,e[r+4],11,1272893353),u=Ee(u,d,o,l,e[r+7],16,-155497632),l=Ee(l,u,d,o,e[r+10],23,-1094730640),o=Ee(o,l,u,d,e[r+13],4,681279174),d=Ee(d,o,l,u,e[r],11,-358537222),u=Ee(u,d,o,l,e[r+3],16,-722521979),l=Ee(l,u,d,o,e[r+6],23,76029189),o=Ee(o,l,u,d,e[r+9],4,-640364487),d=Ee(d,o,l,u,e[r+12],11,-421815835),u=Ee(u,d,o,l,e[r+15],16,530742520),l=Ee(l,u,d,o,e[r+2],23,-995338651),o=Me(o,l,u,d,e[r],6,-198630844),d=Me(d,o,l,u,e[r+7],10,1126891415),u=Me(u,d,o,l,e[r+14],15,-1416354905),l=Me(l,u,d,o,e[r+5],21,-57434055),o=Me(o,l,u,d,e[r+12],6,1700485571),d=Me(d,o,l,u,e[r+3],10,-1894986606),u=Me(u,d,o,l,e[r+10],15,-1051523),l=Me(l,u,d,o,e[r+1],21,-2054922799),o=Me(o,l,u,d,e[r+8],6,1873313359),d=Me(d,o,l,u,e[r+15],10,-30611744),u=Me(u,d,o,l,e[r+6],15,-1560198380),l=Me(l,u,d,o,e[r+13],21,1309151649),o=Me(o,l,u,d,e[r+4],6,-145523070),d=Me(d,o,l,u,e[r+11],10,-1120210379),u=Me(u,d,o,l,e[r+2],15,718787259),l=Me(l,u,d,o,e[r+9],21,-343485551),o=nt(o,n),l=nt(l,a),u=nt(u,i),d=nt(d,c);return[o,l,u,d]}function Sa(e){var t,r="",n=e.length*32;for(t=0;t<n;t+=8)r+=String.fromCharCode(e[t>>5]>>>t%32&255);return r}function Wr(e){var t,r=[];for(r[(e.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var n=e.length*8;for(t=0;t<n;t+=8)r[t>>5]|=(e.charCodeAt(t/8)&255)<<t%32;return r}function Ci(e){return Sa(Qt(Wr(e),e.length*8))}function Ei(e,t){var r,n=Wr(e),a=[],i=[],c;for(a[15]=i[15]=void 0,n.length>16&&(n=Qt(n,e.length*8)),r=0;r<16;r+=1)a[r]=n[r]^909522486,i[r]=n[r]^1549556828;return c=Qt(a.concat(Wr(t)),512+t.length*8),Sa(Qt(i.concat(c),512+128))}function Aa(e){var t="0123456789abcdef",r="",n,a;for(a=0;a<e.length;a+=1)n=e.charCodeAt(a),r+=t.charAt(n>>>4&15)+t.charAt(n&15);return r}function Hr(e){return unescape(encodeURIComponent(e))}function ka(e){return Ci(Hr(e))}function Mi(e){return Aa(ka(e))}function Ca(e,t){return Ei(Hr(e),Hr(t))}function _i(e,t){return Aa(Ca(e,t))}function Ea(e,t,r){return t?r?Ca(t,e):_i(t,e):r?ka(e):Mi(e)}function qr(e){if(Math.abs(e)<1024)return e+" Byte";let r=["KB","MB","GB","TB","PB","EB","ZB","YB"],n=-1;do e/=1024,++n;while(Math.abs(e)>=1024&&n<r.length-1);return e.toFixed(1)+" "+r[n]}var bt=[];async function Pt(e,t){return await new Promise((r,n)=>{let a=e,i=1,c=indexedDB.open(a,i);c.onsuccess=o=>{r(c.result)},c.onerror=o=>{n()},c.onupgradeneeded=o=>{let l=c.result,u=t||"cache";l.createObjectStore(u,{keyPath:"key"})}})}async function Ma(e){let t=`${he}-${e.service}@${e.from}->${e.to}`;return await Pi(t,e)}async function _a(e){let t=Ea(e.originalText),r=`${he}-${e.service}@${e.from}->${e.to}`;return await Li(r,t)}async function Li(e,t){let r=await Pt(e);return await new Promise((n,a)=>{if(!r)return a();let i="cache",o=r.transaction([i],"readonly").objectStore(i).get(t);o.onsuccess=l=>{r.close();let u=o.result;n(u)},o.onerror=l=>{r.close(),a()}})}async function Pi(e,t){let r=await Pt(e);return(await La()).includes(e)||await Ri(e),await new Promise(a=>{if(!r)return a(!1);let i="cache",o=r.transaction([i],"readwrite").objectStore(i).put(t);o.onsuccess=l=>{r.close(),a(!0)},o.onerror=l=>{r.close(),a(!1)}})}async function Ri(e){let t="cache_list",r=await Pt(he+"-cacheList",t),a=r.transaction([t],"readwrite").objectStore(t).put({key:e});a.onsuccess=i=>{r.close(),bt.push(e)},a.onerror=i=>{r.close()}}async function La(){if(bt&&bt.length>0)return bt;let e=await Pt(he+"-cacheList","cache_list");return bt=await new Promise(t=>{let r="cache_list",a=e.transaction([r],"readonly").objectStore(r).getAllKeys();a.onsuccess=i=>{e.close(),t(a.result)},a.onerror=i=>{e.close(),t([])}}),bt}async function Pa(){try{let e=[];(await La()).forEach(n=>{e.push(Ii(n))});let r=await Promise.all(e);return qr(r.reduce((n,a)=>n+a,0))}catch{return qr(0)}}async function Ii(e){let t=await Pt(e),n=[...t.objectStoreNames].reduce((c,o)=>{let l=Oi(t,o);return c.push(l),c},[]),a=await Promise.all(n);return t.close(),a.reduce((c,o)=>c+o,0)}async function Oi(e,t){return await new Promise((r,n)=>{if(e==null)return n();let a=0,i=e.transaction([t]).objectStore(t).openCursor();i.onsuccess=c=>{let o=i.result;if(o){let l=o.value,u=JSON.stringify(l);a+=u.length,o.continue()}else r(a)},i.onerror=c=>n("error in "+t+": "+c)})}var tr,Di=async function(e,t){let{method:r,data:n}=e;if(P.debug("background received message",r,n||" "),r==="mock")await ir(150);else{if(r==="queryParagraphCache")return _a(n);if(r==="setParagraphCache")return Ma(n);if(r==="calculateSize")return Pa();if(r==="fetch")return ua(n);if(r==="getConfig")return tt();if(r==="getLocalConfig")return Mt();if(r==="openOptionsPage")if(ze()){let i=De().OPTIONS_URL;p.tabs.create({url:i})}else{let a=p.runtime.getURL("options.html"),i=n&&n.pageRoute?n.pageRoute:"";i=i||"",p.tabs.create({url:a+i})}else if(r==="openAboutPage")if(ze()){let i=De().OPTIONS_URL;p.tabs.create({url:i+"#about"})}else p.tabs.create({url:p.runtime.getURL("options.html#about")});else if(r==="openEbookViewerPage")p.tabs.create({url:p.runtime.getURL("ebook/index.html")});else if(r==="openSubtitleBuilderPage"){let a=p.runtime.getURL("ebook/subtitle/index.html");ze()&&(a=De().SUBTITLE_BUILDER_URL),p.tabs.create({url:a})}else if(r==="openEbookBuilderPage"){let a=p.runtime.getURL("ebook/make/index.html");ze()&&(a=De().EBOOK_BUILDER_URL),p.tabs.create({url:a})}else if(r==="openHtmlViewerPage"){let a=p.runtime.getURL("html/index.html");p.tabs.create({url:a})}else if(r==="openPdfViewerPage"){let a=p.runtime.getURL("pdf/index.html");p.tabs.create({url:a})}else{if(r==="setLocalConfig")return ft(n);if(r==="detectLanguage"){let{text:a,minLength:i}=n;if(!i&&i!==0&&(i=50),a.length<=i)return"auto";if(p.i18n&&p.i18n.detectLanguage)try{let c=await p.i18n.detectLanguage(a);return c.languages.length>0?ht(c.languages[0].language):"auto"}catch(c){return P.debug("detect language error",c),"auto"}else return"auto"}else if(r==="detectTabLanguage")try{let a=await p.tabs.detectLanguage(t.id);return ht(a)}catch(a){return P.debug("detect tab language error, use auto ",a),"auto"}else if(r==="autoSyncLatestConfig"){try{await wa()}catch(a){P.debug("auto sync latest config error",a)}return""}}}};function Ra(){Kr();let e=p.runtime.getManifest();if(e.manifest_version>2,e.manifest_version===2&&p.webRequest&&p.webRequest.onBeforeSendHeaders){let t=Zt.map(n=>n.condition.urlFilter),r=Zt.reduce((n,a)=>(a.condition.resourceTypes.forEach(i=>{n.includes(i)||n.push(i)}),n),[]);p.webRequest.onBeforeSendHeaders.addListener(function(n){if(!(n.originUrl&&n.originUrl.startsWith("http"))&&n.originUrl&&n.requestHeaders)for(let a=0;a<t.length;a++){let i=Zt[a];if(i.condition.urlFilter&&pa(n.url,i.condition.urlFilter))return{requestHeaders:xa(n.requestHeaders,i.action.requestHeaders)}}},{urls:t,types:r},["blocking","requestHeaders"])}}function Kr(){return tr||(tr=new Lt("background",!1).getConnection("main",Di),tr)}function Ia(){typeof p.commands<"u"&&p.commands.onCommand.addListener(async e=>{if(P.debug(`received command: ${e}`),["toggleTranslatePage"].includes(e)){let t=await p.tabs.query({active:!0,currentWindow:!0});if(t.length===0||typeof t[0].id>"u")return;let n=t[0].url;if(la(n)){p.tabs.create({url:ia(n)});return}}await zr({method:e})})}async function zr(e){let r=(await p.tabs.query({currentWindow:!0,active:!0}))[0].id;Kr().sendMessage(`content_script:main:${r}`,e).catch(a=>{P.error("send content message request failed",e,a)})}function Ni(e,t){let r=e;return t&&Object.keys(t).forEach(n=>{let a=t[n],i=Bi(n);if(typeof a=="object"||i){let c=a;i&&typeof c=="string"&&(c={tag:"a",href:c,target:"_blank"});let o=`<${n}>`,l=r.indexOf(o);if(l!==-1){let u=c.tag||"a",d=r.indexOf(`</${n}>`);if(d!==-1){let T=r.substring(l+o.length,d),_=Object.keys(c).filter(S=>S!=="tag").map(S=>`${S}="${c[S]}"`).join(" ");r=r.replace(`${o}${T}</${n}>`,`<${u} ${_}>${T}</${u}>`)}}}else{let c=new RegExp("{"+n+"}","gm");r=r.replace(c,a.toString())}}),r}function Oa(e,t,r){let n=e[t];if(!n)return r;let a=r.split("."),i="";do{i+=a.shift();let c=n[i];c!==void 0&&(typeof c=="object"||!a.length)?(n=c,i=""):a.length?i+=".":n=r}while(a.length);return n}function Da(e,t,r,n,a){if(!e.hasOwnProperty(r))return t;let i=Oa(e,r,t);return i===t&&r!==n&&(i=Oa(e,n,t)),Ni(i,a)}function Bi(e){if(typeof e=="number")return!0;if(e){let t=parseInt(e);return!isNaN(t)}else return!1}var Na={"zh-CN":{"languages.en":"\u82F1\u8BED","languages.ja":"\u65E5\u8BED","languages.ko":"\u97E9\u8BED","languages.es":"\u897F\u73ED\u7259\u8BED","languages.fr":"\u6CD5\u8BED","languages.de":"\u5FB7\u8BED","languages.it":"\u610F\u5927\u5229\u8BED","languages.pt":"\u8461\u8404\u7259\u8BED","languages.ru":"\u4FC4\u8BED","languages.wyw":"\u6587\u8A00\u6587","languages.<all>":"\u5168\u90E8"},"zh-TW":{"languages.en":"\u82F1\u8A9E","languages.ja":"\u65E5\u8A9E","languages.ko":"\u97D3\u8A9E","languages.es":"\u897F\u73ED\u7259\u8A9E","languages.fr":"\u6CD5\u8A9E","languages.de":"\u5FB7\u8A9E","languages.it":"\u610F\u5927\u5229\u8A9E","languages.pt":"\u8461\u8404\u7259\u8A9E","languages.ru":"\u4FC4\u8A9E","languages.wyw":"\u6587\u8A00\u6587","languages.<all>":"\u5168\u90E8"}},Ui={...st,"zh-CN":{...Na["zh-CN"],...st["zh-CN"]},"zh-TW":{...Na["zh-TW"],...st["zh-TW"]}};function Ba(e,t,r){return Da(Ui,e,t,Vt,r)}var Rt=ta()?["action"]:["browser_action","page_action"],Ua=[{id:"toggleTranslatePage",contexts:["page","frame","selection",...Rt]},{id:Mr,contexts:Rt},{id:Lr,contexts:Rt},{id:Pr,contexts:Rt},{id:_r,contexts:Rt}];async function Gr(e){P.debug("createContextMenu",Ua);for(let t of Ua){let r=!0;e.isShowContextMenu===!1&&t.id==="toggleTranslatePage"&&(r=!1);try{p.contextMenus.create({id:t.id,title:Ba(`browser.${t.id}`,e.interfaceLanguage),contexts:t.contexts,visible:r},()=>p.runtime.lastError)}catch(n){P.debug("create context menu error, it's ok!!",n,`menu id: ${t.id}`)}}}function Fa(){p.contextMenus.onClicked.addListener(e=>{if(e.menuItemId===Mr)if(ze()){let r=De().OPTIONS_URL;p.tabs.create({url:r})}else p.runtime.openOptionsPage();else if(e.menuItemId===_r){let t=p.runtime.getURL(qt);p.tabs.create({url:t})}else if(e.menuItemId===Pr){let t=p.runtime.getURL(Jn);ze()&&(t=De().EBOOK_BUILDER_URL),p.tabs.create({url:t})}else if(e.menuItemId===Lr)p.tabs.create({url:p.runtime.getURL(Yn)});else if(e.menuItemId===Qn){let t=p.runtime.getURL($n);ze()&&(t=De().SUBTITLE_BUILDER_URL),p.tabs.create({url:t})}else e.menuItemId===Zn?p.tabs.create({url:"https://immersivetranslate.com/docs/donate/"}):zr({method:e.menuItemId})})}function Vr(){tt().then(e=>{e.uninstallUrl&&p.runtime.setUninstallURL&&p.runtime.setUninstallURL(e.uninstallUrl),$r(e)}).catch(e=>{P.error("create menu error",e)})}function $r(e){e?Gr(e):tt().then(t=>{Gr(t)}).catch(t=>{P.error("create menu error",t)})}function ja(){p.runtime.onInstalled.addListener(e=>{P.debug(`onInstalled reason: ${e.reason}`),P.debug(e),e.reason=="install"?(async()=>{let t="https://onboarding.immersivetranslate.com/",n=p.runtime.getURL("").startsWith("safari"),a=!1,i=!1;try{let c=await p.runtime.getPlatformInfo();n?c.os==="mac"?a=!0:c.os==="ios"&&(i=!0):c.os==="android"&&(t="https://onboarding.immersivetranslate.com/mobile/")}catch{}a?t="https://onboarding.immersivetranslate.com/mac-safari/":i&&(t="https://onboarding.immersivetranslate.com/ios/step-2/"),p.tabs.create({url:t}),Vr()})():(e.reason=="update"&&p.runtime.getManifest().version!=e.previousVersion,Vr())})}Ra();ja();Ia();p.contextMenus&&Fa();async function Fi(){p.contextMenus&&$r(),(await tt()).debug&&P.setLevel("debug")}Fi().catch(e=>{});})();
/*! Bundled license information:

bowser/src/bowser.js:
  (*!
   * Bowser - a browser detector
   * https://github.com/lancedikson/bowser
   * MIT License | (c) Dustin Diaz 2012-2015
   * MIT License | (c) Denis Demchenko 2015-2019
   *)
*/
/*! Bundled license information:

dompurify/dist/purify.es.js:
  (*! @license DOMPurify 3.0.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.3/LICENSE *)
*/
