/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var sum=0;
  for (var i=0, length=preferences.length; i<length; i++) {
    const condition1=preferences[preferences[preferences[i]-1]-1]===i+1;
    const condition2=i+1!==preferences[i];
    if (condition1&&condition2) {
      sum++;
    }
  }
  return sum/3;
};
