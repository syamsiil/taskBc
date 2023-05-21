// let namaSiswa1 = "muhammad";
// let namaSiswa2 = "ali";
// let namaSiswa3 = "syamsi";

// console.log(namaSiswa1);
// console.log(namaSiswa2);
// console.log(namaSiswa3);

// // Array
// let namaSiswa = ["muhammad", "ali", "syamsi"];
// console.log(namaSiswa);
// console.log(namaSiswa[2]); //array dimulai dari 0 1 2 dst

// Object
// let nama = "ali";
// let alamat = "kuningan";
// let umur = 24;

// console.log(nama);
// console.log(alamat);
// console.log(umur);

// let dataPersonal1 = {
//   nama: "syamsi",
//   alamat: "kuningan",
//   umur: 24,
// };

// let dataPersonal2 = {
//   nama: "ali",
//   alamat: "kuningan",
//   umur: 23,
// };

// let dataPersonal3 = {
//   nama: "yuhu",
//   alamat: "kuningan",
//   umur: 25,
// };

// let dataPersonal4 = {
//   nama: "yuhu",
//   alamat: "kuningan",
//   umur: 25,
// };

// console.log(dataPersonal1);
// console.log(dataPersonal2);
// console.log(dataPersonal3);
// console.log(dataPersonal4);

// console.log(dataPersonal2.nama); //hanya mengambil nama

// ARRAY OF OBJECT
// let dataCaleg = [
//   { nama: "jokowi", alamat: "solo" },
//   { nama: "puan", alamat: "jakarta" },
//   { nama: "prabowo", alamat: "semarang" },
// ];

// console.log(dataCaleg);
// console.log(dataCaleg[1].nama); //untuk mengambil nama

let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image").files;

  // untuk memebuta url gambar, agar tampil
  image = URL.createObjectURL(image[0]);

  // nampung datanya di dalam object
  let blog = {
    title,
    content,
    image,
    postAt: "19 may 2023",
    author: "Syams",
  };

  dataBlog.push(blog);
  console.log(dataBlog);

  renderblog();
}

function renderblog() {
  document.getElementById("contents").innerHTML = ""; //string kosong -> menghilangkan div

  for (let index = 0; index < dataBlog.length; index++) {
    document.getElementById("contents").innerHTML += `
    <div class="blog-list-item">
      <div class="blog-image">
        <img src="${dataBlog[index].image}" alt="image" />
      </div>
      <div class="blog-content">
       <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-delete">Delete Post</button>
        </div>
        <h1>
            <a href="blog-detail.html" target="_blank">${dataBlog[index].title}</a></h1>
        <div class="detail-blog-content">
            ${dataBlog[index].postAt} | ${dataBlog[index].author}
        </div>
        <p>
            ${dataBlog[index].content}
      </p>
     </div>
  </div> `;
  }
}
