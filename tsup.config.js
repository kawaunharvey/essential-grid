"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsup_1 = require("tsup");
exports.default = (0, tsup_1.defineConfig)({
    entry: ["./src/index.ts"],
    outDir: "./dist",
    format: ["cjs", "esm"],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
});
//# sourceMappingURL=tsup.config.js.map