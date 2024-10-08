// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import jest from "eslint-plugin-jest";
import prettierPlugin from "eslint-plugin-prettier/recommended";

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ["**/*.ts"],
        languageOptions: {
            parserOptions: {
                project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
                tsconfigRootDir: import.meta.dirname
            },
        },
        ignores: ["dist", "node_modules"],
        rules: {
            "no-console": "error",
            "semi": "error",
            "@typescript-eslint/explicit-function-return-type":
				"error",
                "@typescript-eslint/require-await": "error"
        }
    },
    {
        files: ["tests/**/*.test.ts"],
        ...jest.configs["flat/recommended"],
        rules: {
            ...jest.configs["flat/recommended"].rules,
            "jest/prefer-expect-assertions": "off"
        }
    },
    prettierPlugin
);