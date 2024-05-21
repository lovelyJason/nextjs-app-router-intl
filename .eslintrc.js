// module.exports = {
//   env: {
//     node: true
//   },
//   extends: [
//     'molindo/typescript',
//     'molindo/react',
//     'molindo/tailwind',
//     'plugin:@next/next/recommended'
//   ],
//   overrides: [
//     {
//       files: ['*.spec.tsx'],
//       rules: {
//         'import/no-extraneous-dependencies': 'off'
//       }
//     }
//   ]
// };
const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
)

module.exports = {
  root: true,
  extends: ['next/core-web-vitals'],
  // plugins: ['prettier'],
  globals: {
    tk_Firebase_Config: 'readonly',
    cb_Firebase_config: 'readonly',
  },
  rules: {
    // 'prettier/prettier': ['error', prettierOptions],
    'no-extra-semi': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      // rules: { 'prettier/prettier': ['warn', prettierOptions] },
    },
  ],
}
