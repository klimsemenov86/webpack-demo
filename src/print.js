export default function printMe() {
    console.log('I get called from print.js!');

    [1, 2, 3].map((n) => n + 1);

    if (process.env.NODE_ENV !== 'production') {
        console.log('Looks like we are in development mode!');
    }
}