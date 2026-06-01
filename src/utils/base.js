export function sleep(t) {
  return new Promise(r=>setTimeout(r, t))
}

export function contains(parent, child) {
  try{
    return parent.contains(child)
  }catch(e) {
    for(let i=0, e=child || {}; i<10; i++) {
      if(e===parent) return true
      e=e.parentNode
      if(!e) break
    }
  }
}
