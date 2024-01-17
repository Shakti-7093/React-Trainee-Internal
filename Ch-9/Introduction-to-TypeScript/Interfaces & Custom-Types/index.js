var userProfile = {
    userId: 1,
    username: "Shakti",
    email: "webkit7093@gmail.com",
    firstName: "Shaktisingh",
    lastName: "Chundawat",
    address: "Ahmedabad",
    createdAt: Date(),
    phoneNumber: 8866467093,
    smoking: false,
    drinking: false,
    driving: true,
    hobbies: [
        {
            name: "Cricket",
            isInterested: true
        },
        {
            name: "Football",
            isInterested: true
        },
        {
            name: "Marsal Arts",
            isInterested: true
        }
    ],
    education: "12th pass",
    occupation: "",
    company: "Tuvoc",
    dob: '04/05/2004'
};
var mobile = {
    productId: 1,
    productName: "Samsung Galaxy M31",
    price: 14999,
    description: "Samsung Galaxy M31 (Space Black, 6GB RAM, 128GB Storage)",
    stock: 10,
    category: "Mobile",
    brand: "Samsung",
    model: "Galaxy M31"
};
console.table(userProfile);
console.table(mobile);
