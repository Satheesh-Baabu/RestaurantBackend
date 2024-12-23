const AddQrModel = require('../models/AddQrModel');

exports.addQr = async (req, res) => {
    try {
        const { qrname } = req.body;

        if (!qrname || qrname.trim() === "") {
            return res.status(400).json({ message: "QR name is required" });
        }

        if (!req.file) {
            return res.status(400).json({ message: "File upload is required" });
        }

        const filename = req.file.filename;

        const newQr = new AddQrModel({
            qrname: qrname.trim(),
            filename,
        });

        await newQr.save();
        res.status(201).json({ message: "QR added successfully", Qr: newQr });
    } catch (error) {
        console.error("Error saving QR code:", error);
        res.status(500).json({ error: "Failed to add QR" });
    }
};

exports.getQrList = async (req, res) => {
    try {
        const qrs = await AddQrModel.find();
        res.json(qrs);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch results" });
    }
};

exports.updateQr = async (req, res) => {
    try {
        const { id } = req.params;
        const { active } = req.body;

        const updatedQr = await AddQrModel.findByIdAndUpdate(
            id, { active }, { new: true }
        );

        if (!updatedQr) {
            return res.status(404).json({ message: "QR not found" });
        }

        res.json({ message: "QR updated successfully", qr: updatedQr });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to update QR" });
    }
};
