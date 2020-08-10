import romanizer from "romanize"

const transform = (num) => {
    return romanizer(num);
};

export {
    transform
};