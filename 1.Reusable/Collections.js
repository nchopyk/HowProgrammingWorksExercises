const contacts = [
    {name: 'Mark', phone: '+380445557777'},
    {name: 'Tomas', phone: '+38044555888'},
];

const findPhoneByName = (name) => {
    for (const contact of contacts) {
        if (contact.name === name) return contact.phone;
    }
}
console.log(findPhoneByName("Mark"))


const contactsWithHash = {
    Mark: '+380445557777',
    Tomas: '+38044555888',
}
const findPhoneByNameWithHash = name => contactsWithHash[name];
console.log(findPhoneByNameWithHash("Mark"))
