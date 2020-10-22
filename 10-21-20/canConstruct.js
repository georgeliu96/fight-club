const canConstruct = (target, subs) => {
  if (target === '') {
    return true;
  }

  for (const prefix of subs) {
    if (target.indexOf(prefix) === 0) {
      if (canConstruct(target.slice(prefix.length), subs) === true) {
        return true;
      }
    }
  }

  return false;
};

console.log('should be true:', canConstruct('abcd', ['a', 'b', 'ab', 'cd']));
console.log('should be true:', canConstruct('soccer', ['er', 'so', 'c']));
console.log('should be true:', canConstruct('bootcamp', ['vv', 'boo', 'boot', 'camp']));
console.log('should be false:', canConstruct('bootcamp', ['boo', 'boots', 'camp']));
console.log('should be true:', canConstruct('', ['a', 'b']));
