function songs(input) {
    // Define a Song class with a constructor that takes in 3 parameters: type, name, and time
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songs = []; // Initialize an empty array to store the songs
    let numberOfSongs = input.shift(); // Remove the first element of the input array and store it in numberOfSongs
    let typeSong = input.pop(); // Remove the last element of the input array and store it in typeSong

    // Loop through the input array for the number of songs
    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = input[i].split('_'); // Split the current element of the input array by '_' and destructure it into type, name, and time
        let song = new Song(type, name, time); // Create a new instance of the Song class with the given type, name, and time
        songs.push(song); // Add the new song to the songs array       
    }

    // Check if typeSong is 'all'
    if (typeSong === 'all') {
        songs.forEach((i) => console.log(i.name)); // If it is, loop through the songs array and log each song's name to the console
    } else {
        let filtered = songs.filter((i) => i.type === typeSong); // If it's not 'all', filter the songs array to only include songs with a type that matches typeSong
        filtered.forEach((i) => console.log(i.name)); // Loop through the filtered array and log each song's name to the console
    }  
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    );