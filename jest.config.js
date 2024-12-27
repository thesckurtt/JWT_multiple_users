/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset: "ts-jest",
  testMatch: ["**/tests/**/*.test.ts"], // Localização dos testes
  moduleFileExtensions: ["js", "ts"], // Extensões dos arquivos
  rootDir: ".", // Raiz do projeto
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};