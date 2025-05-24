let myPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("Data loaded!");
    console.log("hi");
  }, 2000);
});

myPromise.then(function(data) {
  console.log(data);  // Outputs "Data loaded!" after 2 seconds
});

