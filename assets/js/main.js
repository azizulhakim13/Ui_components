function findEvenOddNumbers() {
    let evenNumbers = [];
    let oddNumbers = [];

    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        } else {
            oddNumbers.push(i);
        }
    }

    console.log("Even Numbers: " + evenNumbers.join(', '));
    console.log("Odd Numbers: " + oddNumbers.join(', '));
}

findEvenOddNumbers();