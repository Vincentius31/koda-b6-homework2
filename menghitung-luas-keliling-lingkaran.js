const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Masukan jari-jari: ", (input) => {
  const r = Number(input);
  let phi;
  
  if(r % 7 === 0){ //Kondisi untuk penggunaan phi
    phi = 22/7
  }
  else{
    phi = 3.14
  }

  const luasLingkaran = phi * r * r;
  const kelilingLingkaran = phi * 2 * r;

  console.log(`Luas Lingkaran: ${luasLingkaran}`)
  console.log(`Keliling Lingkaran: ${kelilingLingkaran}`)
  rl.close()
});