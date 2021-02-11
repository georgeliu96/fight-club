// const events = [
//   { label: 'a', delay: 1000 },
//   { label: 'b', delay: 500 },
//   { label: 'c', delay: 3000 },
//   { label: 'd', delay: 1000 },
// ];

// const playEvents = (events) => {
//   let totalDelay = 0;
//   for (let event of events) {
//     totalDelay += event.delay
//     setTimeout(() => {
//       console.log(event.label);
//     }, totalDelay);
//   }
// };

const events = [
    { label: 'a', delay: 1000 },
    { label: 'b', delay: 500 },
    { label: 'c', delay: 3000 },
    { label: 'd', delay: 1000 },
  ];
  
  
  // const playEvents = (events, i = 0) => {
  //   if (events.length <= i) 
  //     return;
  
  //   const currentEvent = events[i];
  //   setTimeout(() => {
  //     console.log('potato');
  //     console.log(currentEvent.label);
  //     playEvents(events, i + 1);
  //   }, currentEvent.delay);
  // };
  
  // produce a promise with new Promise
  // consume a promise with promise.then
  //     or await promise
  
  const playEvents = async (events) => {
    for (let event of events) {
      await eventToPromise(event);
    }
  };
  
  
  
  const eventToPromise = (event) => new Promise((resolve) => {
    setTimeout(() => {
      console.log(event.label);
      resolve();
    }, event.delay);
  });
  
  
  
  playEvents(events);
  
  // To print out each label after the specified delay, in a staggered timing
  