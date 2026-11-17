function hobiListToString(hobi) {
  let result = "";
  for (let i = 0; i < hobi.length; i++) {
    if (i > 0) {
      result += i === hobi.length - 1 ? ", dan " : ", ";
    }
    result += hobi[i];
  }
  return result;
}

function perkenalan(data) {
  const { nama, umur, hobi } = data;
  console.log(`Nama: ${nama}`);
  console.log(`Umur: ${umur}`);
  console.log(`Hobi: ${hobiListToString(hobi)}`);
}

perkenalan({
  nama: "Your Name", // your name
  umur: 25, // your age
  hobi: ["Membaca", "Menulis", "Bersepeda"], // your hobbies
});
