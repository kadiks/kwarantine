function randinc(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function pick(xs){
  return xs[randinc(0, xs.length-1)]
}

module.exports =  {
  randinc,
  pick
}
