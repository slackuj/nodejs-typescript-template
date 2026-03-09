"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// never use magic numbers in your port
const PORT = 4000;
app.get("/", (req, res) => {
    res.send("Welcome to the server");
});
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map