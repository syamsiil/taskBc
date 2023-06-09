// Superclass
// class Testimonials {
//   #quote = "";
//   #image = "";

//   constructor(quote, image) {
//     this.#quote = quote;
//     this.#image = image;
//   }

//   get quote() {
//     return this.#quote;
//   }
//   get image() {
//     return this.#image;
//   }

//   //   this is an abstract method that subclasses will implement
//   get author() {
//     throw new Error("getAuthor() method must be implemented");
//   }

//   // this is a polymorphic method that can take any subclasses of Testimonials
//   get testimonialHTML() {
//     return `<div class="testimonial">
//                 <img
//                  src="${this.image}"class="profile-testimonial"/>
//                 <p class="quote">${this.quote}</p>
//                 <p class="author">- ${this.author}</p>
//                 </div>
//             `;
//   }
// }

// // sublass
// class AuthorTestimonials extends Testimonials {
//   #author = "";

//   constructor(author, quote, image) {
//     super(quote, image);
//     this.#author = author;
//   }

//   get author() {
//     return this.#author;
//   }
// }

// const testimonial1 = new AuthorTestimonials(
//   "Who are you?",
//   "Hello world",
//   "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
// );
// const testimonial2 = new AuthorTestimonials(
//   "Anonymous",
//   "Amazing",
//   "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
// );
// const testimonial3 = new AuthorTestimonials(
//   "Dora The Explorer",
//   "You see it?!",
//   "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
// );

// let testimonialData = [testimonial1, testimonial2, testimonial3];
// let testimonialHTML = "";
// for (let i = 0; i < testimonialData.length; i++) {
//   testimonialHTML += testimonialData[i].testimonialHTML;
// }

// document.getElementById("testimonials").innerHTML = testimonialHTML;

// RATING
const testimonialData = [
  {
    author: "Seeus",
    quote: "Stay Strong!!",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 5,
  },
  {
    author: "Seeme",
    quote: "Keep private!!",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4,
  },
  {
    author: "Enough",
    quote: "Move in silent!!",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4,
  },
  {
    author: "Enough",
    quote: "Move in silent!!",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 3,
  },
  {
    author: "Enough",
    quote: "Move in silent!!",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 2,
  },
  {
    author: "Enough",
    quote: "Move in silent!!",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 2,
  },
  {
    author: "Enough",
    quote: "Move in silent!!",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4,
  },
];

function allTestimonials() {
  let testimonialHTML = "";

  testimonialData.forEach(function (item) {
    testimonialHTML += `<div class="testimonial">
                     <img
                      src="${item.image}"class="profile-testimonial"/>
                     <p class="quote">${item.quote}</p>
                     <p class="author">- ${item.author}</p>
                     <p class="author"> ${item.rating} <i class='bx bxs-star'></i></p>
                     </div>
    `;
  });
  document.getElementById("testimonials").innerHTML = testimonialHTML;
}

allTestimonials();

function filterTestimonial(rating) {
  let testimonialHTML = "";

  const testimonialFiltered = testimonialData.filter(function (item) {
    return item.rating === rating;
  });

  // console.log(testimonialFiltered);

  if (testimonialFiltered.length === 0) {
    testimonialHTML += `<h1>Data not found! </h1>`;
  } else {
    testimonialFiltered.forEach(function (item) {
      testimonialHTML += `<div class="testimonial">
                            <img
                              src="${item.image}"class="profile-testimonial"/>
                            <p class="quote">${item.quote}</p>
                            <p class="author">- ${item.author}</p>
                            <p class="author"> ${item.rating} <i class='bx bxs-star'></i></                     p>
                          </div>
                        `;
    });
  }

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}
