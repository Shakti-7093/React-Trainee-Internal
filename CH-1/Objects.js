const book = {
  name: "Ramayana",
  author: "Valmiki",
  data: "2000BC",
  summary: function () {
    return `${this.name} was written by ${this.author} in ${this.data}`;
  },
};

const a = book.summary();
console.log(a);
