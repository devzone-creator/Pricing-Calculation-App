document.getElementById('calculatePrice').addEventListener('click', (e) => {
    //function(), const funct = () =>
    e.preventDefault();

    const items = parseFloat(document.getElementById('items').value);
    const numberOfItems = parseInt(document.getElementById('numberOfItems').value)
    const result = items * numberOfItems;

    if(!isNaN(result)){
        document.getElementById('result').innerHTML = `
            <p>
                The Total Cost for the items is : GHS ${result.toFixed(2)}
            </p>
        `
    } else{
        document.getElementById('result').innerHTML = `
            <p>
                Please enter a valid input !
            </p>
        `
    }
});