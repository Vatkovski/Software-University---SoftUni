function extensibleObject() {
    let obj = {
        extend: function(template) {
            for (let prop in template) {
                if (typeof template[prop] === 'function') {
                    Object.getPrototypeOf(obj)[prop] = template[prop];
                } else {
                    obj[prop] = template[prop];
                }
            }
        }
    };
    return obj;
}

const myObj = extensibleObject();
const template = {
    extensionMethod: function () {},
    extensionProperty: 'someString'
};
myObj.extend(template);
