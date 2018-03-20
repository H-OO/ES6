var data = {
  id: '1'
};
var err = 'error...';
var state = 201;
var promise = new Promise(function (resolve, reject) {
  if (state === 200) {
    resolve(data);
  } else {
    reject(err);
  }
});
promise.then(function (success) {
  console.log(success);
  return success;
}, function (error) {
  console.log(error);
  return error;
}).catch(function (success) {
  console.log('===');
  console.log(success);
}, function(error) {
  console.log(error);
})