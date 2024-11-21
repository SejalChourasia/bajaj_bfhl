const { decodeBase64 } = require("../utils/file-handler");
const { isPrime } = require("../utils/prime-utils");
const { buildResponse } = require("../utils/response-builder");

const USER_ID = "garima_jain_08092003";
const EMAIL = "garimajain0809@gmail.com";
const ROLL_NUMBER = "0827CS211081";

const handleGetRequest = (req, res) => {
    return res.status(200).json({ operation_code: 1 });
};

const handlePostRequest = (req, res) => {
    try {
        const { data = [], file_b64 } = req.body;
        if (!Array.isArray(data)) return res.status(400).json({ is_success: false });

        const numbers = data.filter((item) => !isNaN(item));
        const alphabets = data.filter((item) => isNaN(item));
        const lowercaseAlphabets = alphabets.filter((char) => /^[a-z]$/.test(char));
        const highestLowercaseAlphabet = lowercaseAlphabets.sort().pop() || null;
        const primeFound = numbers.some((num) => isPrime(parseInt(num, 10)));

        let fileValid = false, fileMimeType = null, fileSizeKB = null;
        if (file_b64) {
            const fileData = decodeBase64(file_b64);
            fileValid = fileData.valid;
            fileMimeType = fileData.mimeType;
            fileSizeKB = fileData.sizeKB;
        }

        const response = buildResponse(
            true,
            USER_ID,
            EMAIL,
            ROLL_NUMBER,
            numbers,
            alphabets,
            highestLowercaseAlphabet,
            primeFound,
            fileValid,
            fileMimeType,
            fileSizeKB
        );

        return res.status(200).json(response);
    } catch {
        return res.status(500).json({ is_success: false });
    }
};

module.exports = { handleGetRequest, handlePostRequest };