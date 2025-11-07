function poleProstokąta() {
  var b1 = Number(prompt("Dawaj bok 1"))
  var b2 = Number(prompt("Dawaj bok 2"))
  var p = b1 * b2
  if (b1 == b2) {
    alert("To jest kwadrat")
    alert("Pole kwadratu to:" `p`)
  }
  else {
    alert("Pole prostokąta to:" `p`)
  }
}
poleProstokąta()
