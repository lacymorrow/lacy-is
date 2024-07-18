import baseConfig, { restrictEnvAccess } from "@lacy/eslint-config/base";
import nextjsConfig from "@lacy/eslint-config/nextjs";
import reactConfig from "@lacy/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
