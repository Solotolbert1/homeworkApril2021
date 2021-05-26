function randomFinish(label){
  const randomTime = Math.random()

  serTimeout(() => console.log(label + "is done!"))
}
randomFinish(1);
randomFinish(2);
randomFinish(3);
