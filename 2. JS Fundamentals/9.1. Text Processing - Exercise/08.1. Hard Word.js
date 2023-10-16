function hardWord(input) {
    let [text, words] = input;
    let blanks = text.split(' ').map(word => {
        if (word.includes('_')) {
            let length = word.replace(/[^_]/g, '').length;
            let replacement = words.find(w => w.length === length);
            word = word.replace(/_+/g, replacement);
            words.splice(words.indexOf(replacement), 1);
        }
        return word;
    });
    return blanks.join(' ');
}


console.log(hardWord(['Hi, grandma! I\'\m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]));