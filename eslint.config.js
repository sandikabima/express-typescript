// Mengimpor konfigurasi recommended dari ESLint untuk JavaScript
const js = require('@eslint/js');
// Mengimpor plugin ESLint khusus TypeScript
const typescript = require('@typescript-eslint/eslint-plugin');
// Mengimpor parser untuk TypeScript agar ESLint bisa membaca file .ts
const typescriptParser = require('@typescript-eslint/parser');

module.exports = [
  // Menggunakan konfigurasi recommended dari ESLint untuk JavaScript
  js.configs.recommended,
  {
    // Aturan ini berlaku untuk semua file TypeScript
    files: ['**/*.ts'],
    languageOptions: {
      // Mengatur parser agar ESLint bisa membaca TypeScript
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020, // Mendukung fitur ECMAScript 2020
        sourceType: 'module', // Menggunakan module system (import/export)
        project: './tsconfig.json', // Mengacu pada konfigurasi TypeScript utama
      },
      // Menambahkan variabel global agar tidak dianggap error oleh ESLint
      globals: {
        process: 'readonly', // Agar 'process' dikenali sebagai global
        console: 'readonly', // Agar 'console' dikenali sebagai global
      },
    },
    // Mengaktifkan plugin TypeScript untuk ESLint
    plugins: {
      '@typescript-eslint': typescript,
    },
    // Aturan-aturan khusus yang digunakan dalam project ini
    rules: {
      ...typescript.configs.recommended.rules, // Mengambil aturan recommended dari plugin TypeScript
      '@typescript-eslint/no-unused-vars': 'error', // Error jika ada variabel yang tidak terpakai
      '@typescript-eslint/no-explicit-any': 'warn', // Warning jika menggunakan tipe 'any'
      '@typescript-eslint/explicit-function-return-type': 'off', // Tidak wajib menuliskan tipe return function
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Tidak wajib menuliskan tipe pada boundary module
      '@typescript-eslint/no-inferrable-types': 'off', // Tidak error jika ada tipe yang bisa di-infer
      'no-console': 'warn', // Warning jika ada console.log
      'prefer-const': 'error', // Error jika seharusnya menggunakan const
      'no-var': 'error', // Error jika menggunakan var
    },
    // Mengatur environment agar ESLint tahu ini project Node.js dan ES2020
    env: {
      node: true,
      es2020: true,
    },
  },
  {
    // Mengabaikan folder dan file tertentu dari proses linting
    ignores: ['dist/', 'node_modules/', '*.js'],
  },
];
