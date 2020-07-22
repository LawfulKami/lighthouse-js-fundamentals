var laugh = function(num) {
  let x = 0;
  let sound = '';
  while (x <= num) {
      sound = sound + 'ha';
      x ++
  };
  return sound;
}
  

console.log(laugh(10));
