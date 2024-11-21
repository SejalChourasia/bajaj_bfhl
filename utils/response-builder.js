const buildResponse = (
    isSuccess,
    userId,
    email,
    rollNumber,
    numbers,
    alphabets,
    highestLowercaseAlphabet,
    isPrimeFound,
    fileValid,
    fileMimeType,
    fileSizeKB
) => ({
    is_success: isSuccess,
    user_id: userId,
    email: email,
    roll_number: rollNumber,
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : [],
    is_prime_found: isPrimeFound,
    file_valid: fileValid,
    file_mime_type: fileMimeType,
    file_size_kb: fileSizeKB,
});

module.exports = { buildResponse };  