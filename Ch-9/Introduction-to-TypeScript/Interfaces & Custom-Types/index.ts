interface UserProfile {
    userId: number;
    username: string;
    email: string;
    firstName?: string;
    lastName?: string;
    address?: string;
    createdAt?: string;
    fatherName?: string;
    motherName?: string;
    phoneNumber?: number;
    smoking?: boolean;
    drinking?: boolean;
    driving?: boolean;
    hobbies?: any[];
    education?: string;
    occupation?: string;
    company?: string;
    designation?: string;
    salary?: number;
    bloodGroup?: string;
    height?: number;
    weight?: number;
    dob?: string;
}

interface Electronics {
    productId: number;
    productName: string;
    price: number;
    description: string;
    stock: number;
    category: string;
    brand: string;
    model: string;
}

let userProfile: UserProfile = {
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
}

let mobile: Electronics = {
    productId: 1,
    productName: "Samsung Galaxy M31",
    price: 14999,
    description: "Samsung Galaxy M31 (Space Black, 6GB RAM, 128GB Storage)",
    stock: 10,
    category: "Mobile",
    brand: "Samsung",
    model: "Galaxy M31"
}

console.table(userProfile);
console.table(mobile);