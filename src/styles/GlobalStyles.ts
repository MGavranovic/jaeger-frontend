import { createGlobalStyle } from "styled-components";
const styled = { createGlobalStyle };
const GlobalStyles = styled.createGlobalStyle`
  :root {
    --color-zinc-50: #fafafa;
    --color-zinc-100: #f4f4f5;
    --color-zinc-200: #e4e4e7;
    --color-zinc-300: #d4d4d8;
    --color-zinc-400: #a1a1aa;
    --color-zinc-500: #71717a;
    --color-zinc-600: #52525b;
    --color-zinc-700: #3f3f46;
    --color-zinc-800: #27272a;
    --color-zinc-900: #18181b;
    --color-zinc-950: #09090b;

    --color-amber-50: #fffbeb;
    --color-amber-100: #fef3c7;
    --color-amber-200: #fde68a;
    --color-amber-300: #fcd34d;
    --color-amber-400: #fbbf24;
    --color-amber-500: #f59e0b;
    --color-amber-600: #d97706;
    --color-amber-700: #b45309;
    --color-amber-800: #92400e;
    --color-amber-900: #78350f;
    --color-amber-950: #451a03;

    --color-lime-50: #f7fee7;
    --color-lime-100: #ecfccb;
    --color-lime-200: #d9f99d;
    --color-lime-300: #bef264;
    --color-lime-400: #a3e635;
    --color-lime-500: #84cc16;
    --color-lime-600: #65a30d;
    --color-lime-700: #4d7c0f;
    --color-lime-800: #166534;
    --color-lime-900: #14532d;
    --color-lime-950: #052e16;

    --color-green-100: #dcfce7;
    --color-green-700: #15803d;
    --color-red-100: #fee2e2;
    --color-red-600: #dc2626;
    --color-red-700: #b91c1c;

    --color-cyan-100: #cffafe;
    --color-cyan-700: #0e7490;

    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;

    --applied: #f59e0b;
    --got-response: #71717a;
    --interview: #06b6d4;
    --offer: #d946ef;
    --rejected: #ef4444;
    --accepted: #84cc16;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 63%;
  }

  body {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    color: var(--color-zinc-900);
    /* text-transform: uppercase; */

    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  input,
  textarea,
  select {
    font-weight: 300;
    border: 1px solid var(--color-lime-600);
    border-radius: var(--border-radius-sm);
    padding: 0.5rem 1rem;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  input:focus,
  button:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid var(--color-lime-600);
    outline-offset: -1px;
  }
`;

export default GlobalStyles;
