const setPromiseTimeout = (cb, ms) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        cb();
        resolve();
      }, ms);
    });
  };
  
  setPromiseTimeout(() => {
    console.log('boom');
  }, 2000).then(() => {
    console.log('end');
  });