var soall = prompt("3, 5 x 16 : ")
var poin = 0

if (soall ==75) {
  poin +=1
  alert(`jawaban anda benar poin anda sekarang ${poin}`)
  var soal2 = prompt("2. indonesia terletak di benua?")
  if (soal2 == "asia"){
    poin += 1
    alert(`jawaban anda benar poin anda sekarang ${poin}`)
    

   
  }else{
    poin += 0
    alert(`jawaban salah, poin anda adalah: ${poin}`)
  }
} else{
  poin += 0
    alert(`jawaban salah, poin anda adalah: ${poin}`)
}
