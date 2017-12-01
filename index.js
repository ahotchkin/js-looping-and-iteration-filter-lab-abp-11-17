// Code your solution in this file
function findMatching (collection, cb) {
  const drivers = [];
    for (const driver of collection) {
        if (cb(driver)) {
            newCollection.push(driver);
          }
        }
}
