const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    }
});

const maxSize = 2 * 1000 * 1000;

const upload = multer({
    storage: storage,
    limits: { fileSize: maxSize }
});

module.exports = upload;
