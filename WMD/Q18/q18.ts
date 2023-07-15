let places: string[] = ["Pakistan", "China", "europe", "USA", "Sydney"];
console.log("Original order:");
console.log(places);
console.log("Alphabetical order:");
console.log(places.slice().sort());
console.log("Original order (unchanged):");
console.log(places);
console.log("Reverse alphabetical order:");
console.log(places.slice().sort().reverse());
console.log("Original order (unchanged):");
console.log(places);
places.reverse();
console.log("Reversed order:");
console.log(places);
places.reverse();
console.log("Original order (restored):");
console.log(places);
console.log("Alphabetical order:");
console.log(places.slice().sort());
console.log("Reverse alphabetical order:");
console.log(places.slice().sort().reverse());