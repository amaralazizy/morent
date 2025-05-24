const generateCars = (count: number) => {
  const carTypes = ["Sport", "Sedan", "Hatchback", "SUV"];
  const transmissions = ["Manual", "Automatic"];
  const carNames = [
    "Koenigsegg",
    "Nissan GT-R",
    "Rolls-Royce",
    "MG ZX Exclusive",
    "MG ZS",
    "MG Hector",
    "BMW M3",
    "Mercedes Benz",
    "Porsche Cayenne",
    "Toyota Fortuner",
    "Honda Accord",
    "Hyundai Creta",
  ];
  const carImages = [
    "koenigsegg.jpg",
    "nissan-gtr.jpg",
    "rolls-royce.jpg",
    "mg-zx-exclusive.jpg",
    "mg-zs.jpg",
    "mg-hector.jpg",
    "bmw-m3.jpg",
    "mercedes-benz.jpg",
    "porsche-cayenne.jpg",
    "toyota-fortuner.jpg",
    "honda-accord.jpg",
    "hyundai-creta.jpg",
  ];

  const cars = [];
  for (let i = 1; i <= count; i++) {
    const randomName = carNames[Math.floor(Math.random() * carNames.length)];
    const randomType = carTypes[Math.floor(Math.random() * carTypes.length)];
    const randomTransmission =
      transmissions[Math.floor(Math.random() * transmissions.length)];
    const randomCapacity = Math.floor(Math.random() * 6) + 2; // Capacity between 2 and 7
    const randomFuelTank = Math.floor(Math.random() * 50) + 40; // Fuel tank between 40 and 90
    const randomPrice = parseFloat((Math.random() * 50 + 50).toFixed(2)); // Price between 50.0 and 100.0
    const randomDiscount =
      Math.random() > 0.5
        ? parseFloat((randomPrice - Math.random() * 10).toFixed(2))
        : null;
    const randomImage = carImages[carNames.indexOf(randomName)];

    cars.push({
      id: i,
      name: randomName,
      type: randomType,
      capacity: randomCapacity,
      fuelTank: randomFuelTank,
      transmission: randomTransmission,
      price: randomPrice,
      discount: randomDiscount,
      image: randomImage,
    });
  }


  return cars;
};

export const popularCars = generateCars(150);
console.log(popularCars);

export const egyptianCities = [
  { id: "cairo", name: "Cairo" },
  { id: "alex", name: "Alexandria" },
  { id: "giza", name: "Giza" },
  { id: "dakahlia", name: "Dakahlia" },
  { id: "sharqia", name: "Sharqia" },
  { id: "qalyubia", name: "Qalyubia" },
  { id: "kafr-elsheikh", name: "Kafr El Sheikh" },
  { id: "gharbia", name: "Gharbia" },
  { id: "monufia", name: "Monufia" },
  { id: "beheira", name: "Beheira" },
  { id: "ismailia", name: "Ismailia" },
  { id: "port-said", name: "Port Said" },
  { id: "suez", name: "Suez" },
  { id: "damietta", name: "Damietta" },
  { id: "damanhur", name: "Damanhur" },
  { id: "fayoum", name: "Fayoum" },
  { id: "bani-suef", name: "Bani Suef" },
  { id: "minya", name: "Minya" },
  { id: "assiut", name: "Assiut" },
  { id: "sohag", name: "Sohag" },
  { id: "qena", name: "Qena" },
  { id: "aswan", name: "Aswan" },
  { id: "luxor", name: "Luxor" },
  { id: "redsea", name: "Red Sea" },
  { id: "new-valley", name: "New Valley" },
  { id: "matrouh", name: "Matrouh" },
  { id: "north-sinai", name: "North Sinai" },
  { id: "south-sinai", name: "South Sinai" },
];
