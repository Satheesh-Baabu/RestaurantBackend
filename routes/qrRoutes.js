const express = require('express');
const { addQr, getQrList, updateQr } = require('../controllers/qrController');
const multer = require('../middleware/multer');

const router = express.Router();

router.post('/qrgenerator', multer.single('file'), addQr);
router.get('/qrlist', getQrList);
router.put('/qrlist/:id', updateQr);

module.exports = router;
