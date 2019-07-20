module.exports = function(source) {
    return source.replace(/'require:(.*?)'/g, "require('$1')");
}

