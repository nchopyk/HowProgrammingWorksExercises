function generateKey(length, characters) {
    let key = '';
    const maxIndex = characters.length
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * maxIndex);
        key += characters[index];
    }
    return key
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key);