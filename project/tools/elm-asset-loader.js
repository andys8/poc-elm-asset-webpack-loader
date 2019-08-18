module.exports = function(source, map, meta) {
  const rootDir = this.rootContext || "..";
  return source.replace(/'require:([^']+)'/g, `require('${rootDir}/$1')`);
};
