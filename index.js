// Nomor 1
console.log("-----Nomor 1-----");
const biodata = {
  name: "Muhammad Rifqi Ainul Yaqin",
  age: 23,
  hobbies: ["Sepakbola", "Bermain game", "Nonton film"],
  isMaried: false,
  schoolList: [
    {
      name: "SDN Purwodadi 01",
      yearIn: 2006,
      yearOut: 2012,
      major: null,
    },
    {
      name: "SMP Diponegoro Patimuan",
      yearIn: 2012,
      yearOut: 2015,
      major: null,
    },
    {
      name: "SMK Al-Muallim Kesugihan",
      yearIn: 2016,
      yearOut: 2019,
      major: "Teknik Kendaraan Ringan",
    },
  ],
  skills: [
    {
      skillName: "HTML",
      level: "Beginner",
    },
    {
      skillName: "CSS",
      level: "Beginner",
    },
    {
      skillName: "Javascript",
      level: "Beginner",
    },
    {
      skillName: "Repair Handpone",
      level: "Advance",
    },
  ],
  interestInCoding: true,
};

// // Nomor 2
console.log("-----Nomor 2-----");
let matematika = 70;
let bahasaIndonesia = 90;
let bahasaInggris = 90;
let ipa = 90;

const nilai = [matematika, bahasaIndonesia, bahasaInggris, ipa];
let i = 0;
if (i >= 0 && i < nilai.length) {
  if (nilai[i] == undefined) {
    console.log("input kurang");
    return false;
  } else {
    let total = 0;
    for (let i = 0; i < nilai.length; i++) {
      total += nilai[i];
    }
    let rataRata = total / nilai.length;
    let grade = "";
    if (rataRata >= 90 && rataRata <= 100) {
      grade = "A";
    }
    if (rataRata >= 80 && rataRata <= 89) {
      grade = "B";
    }
    if (rataRata >= 70 && rataRata <= 79) {
      grade = "C";
    }
    if (rataRata >= 60 && rataRata <= 69) {
      grade = "D";
    }
    if (rataRata >= 0 && rataRata <= 59) {
      grade = "E";
    }

    console.log(`Nilai rata - rata : ${rataRata}`);
    console.log(`Grade : ${grade}`);
  }
}

// Nomor 3
console.log("-----Nomor 3-----");
const printSegitiga = 6;
let hasil = "";
if (typeof printSegitiga == "number") {
  for (let i = printSegitiga; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      hasil += ` ${j}`;
    }
    hasil += "\n";
  }
} else {
  hasil += "Data harus number";
}
console.log(hasil);

// Nomor 4
console.log("-----Nomor 4-----");
let data = {
  id: 1,
  name: "Leaner Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulkas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-387",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

// a. ubah data menggunakan spread operator
console.log("a. ubah data-----");
const { hobbies } = biodata;

const updateData = {
  ...data,
  name: "Rifqi",
  email: "mrifqiay@gmail.com",
  hobi: hobbies,
};
console.log(updateData);

// b. mengambil data menggunakan destructuring
console.log("b. mengambil data-----");
const { street, city } = data.address;
console.log(street);
console.log(city);
