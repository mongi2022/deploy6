"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editFileName = void 0;
const path_1 = require("path");
const editFileName = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = (0, path_1.extname)(file.originalname);
    const randomName = 'small';
    callback(null, `${name}-${randomName}${fileExtName}`);
};
exports.editFileName = editFileName;
//# sourceMappingURL=editFileName.js.map