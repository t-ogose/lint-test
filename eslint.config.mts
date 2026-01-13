import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import react, { ReactFlatConfig } from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";
import prettier from 'eslint-config-prettier';
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,
    ...(pluginReact.configs.flat.recommended || []) as ReactFlatConfig[],
  prettier,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser } /* nodeで使用する場合は globals.node */
  },
  {
    plugins: {
      react,
      "react-hooks": reactHooks as unknown as import("eslint").ESLint.Plugin,
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "react/react-in-jsx-scope": "off", /* React の明示的な import（React 17~） */
      "react/prop-types": "off" /* コンポーネントでの propsType 定義 */
    }
  },
  {
    rules: {
      // "no-console": ["warn", {"allow": ["warn", "error"]}],
      "eqeqeq": ["error", "always"], /* 等価式の禁止（厳密等価） */
      "no-var": "error", /* var 禁止 */
      "prefer-const": "error", /* const 推奨時の let 禁止 */
      "curly": ["error", "all"], /* {} 省略不可 */
      "no-implicit-coercion": "error", /* 暗黙の型変換禁止 */
      "@typescript-eslint/no-unused-vars": ["warn", {
        "argsIgnorePattern": "^_"
      }], /* 未使用の変数警告 */
      "react/jsx-key": "error", /* key 未設定時エラー */
      "react/self-closing-comp": "error", /* 小要素のないコンポーネントの省略 */
    }
  }
]);
