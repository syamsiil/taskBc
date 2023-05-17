// console.log("hello world");
// alert("hello");
// document.write("batch 47");

// Variable
// Variable = untuk menampung data yang akan digunakan
// VAR =penggunakan variabel secara global
// LET
// CONST

// bisa di deklarasikan ulang dan bisa diubah value//data nya;replace
// var gelas = "Air Putih";
// var gelas = "Kopi";
// console.log(gelas);

// // tidak bisa di deklarasikan ulang tapi bisa diubah valuenya
// let pemerintah = "PDIP";
// pemerintah = "Nasdem";
// console.log(pemerintah);

// // const tidak bisa di deklarasikan ulang maupun diubah valuenya
// const rog = "asus";
// console.log(rog);

// DATA TYPE
// let nama = "syamsi"; //String
// let umur = 15; //Number
// let isMarried = false; //Boolean

// // nama saya Syamsi umur saya 15 tahun
// console.log("nama saya", nama, "umur saya", umur, "tahun");
// console.log(`nama saya ${nama} umur saya ${umur} tahun `);
// console.log("nama saya syamsi umur saya 15 tahun");
// console.log("nama saya " + nama + " umur saya " + umur + " tahun");

// OPERATOR
// let x = 48;
// let y = 4;

// let result = x + y;
// console.log(result);

// Condition
// jika nilai >= 75, maka lulu
// let nilai = 85;

// if (nilai >= 75) {
//   console.log("kamu lulus!");
// } else {
//   console.log("kamu gagal");
// }

// Function
// function Hello() {
//   let x = 5;
//   let y = 10;

//   let result = x * y;
//   console.log(result);
// }

// Hello(); //untuk memanggil fungsinya

// function Hello2(x, y) {
//   console.log(x);
//   console.log(y);

//   let result = x * y;
//   console.log(result);
// }

// Hello2(5, 10);

// // camelcase = namaSayaSyamsi //kalo ada 2 kata atau lebih
// function namaSaya(name) {
//   console.log(name);
// }
// namaSaya("syamsi");

// Submission
function submitData() {
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let number = document.getElementById("input-number").value;
  let subject = document.getElementById("input-subject").value;
  let message = document.getElementById("input-message").value;

  if (name == "") {
    return alert("Nama harus di isi");
  } else if (email == "") {
    return alert("email harus di isi");
  } else if (number == "") {
    return alert("number harus di isi");
  } else if (subject == "") {
    return alert("subject harus di isi");
  } else if (message == "") {
    return alert("message harus di isi");
  }

  //   mail to
  let emailReceiver = "muhammadalisyamsi@gmail.com";

  //<a a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo, nama saya ${name}, ${message}. silahkan kontak saya di nomor ${number}, terima kasih` /a>

  let a = document.createElement("a");
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello, I am ${name}, ${message}. Let's connect with me to number ${number}, Thank you.`;

  a.click();

  console.log(name);
  console.log(email);
  console.log(number);
  console.log(subject);
  console.log(message);

  let emailer = {
    name,
    email,
    number,
    subject,
    message,
  };

  console.log(emailer);
}
