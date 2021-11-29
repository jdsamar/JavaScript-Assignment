function RunCallback(a, b, cb) {
    let x = a + b;

    return cb(x);
    // Write you code here, you need to add a and b, pass the result into callback function cb as argument return the result
}

module.exports = RunCallback;
