const atob = require("atob");

const decodeBase64 = (b64String) => {
    try {
        const decoded = atob(b64String);
        const sizeKB = (b64String.length * (3 / 4)) / 1024;
        return {
            valid: true,
            mimeType: "application/octet-stream",
            sizeKB,
        };
    } catch (error) {
        return { valid: false, mimeType: null, sizeKB: null };
    }
};

module.exports = { decodeBase64 };