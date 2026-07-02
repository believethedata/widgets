let dataset = [];

// Load data once when page opens
fetch('data/names.json')
    .then(res => res.json())
    .then(data => {
        dataset = data;
    });

// Handle typing
document.getElementById('nameInput').addEventListener('input', function (e) {

    const query = e.target.value.trim().toLowerCase();

    const resultBox = document.getElementById('result');

    if (!query) {
        resultBox.textContent = '';
        return;
    }

    const match = dataset.find(
        d => d.name.toLowerCase() === query
    );

    if (!match) {
        resultBox.textContent = 'No data found for that name.';
        return;
    }

    resultBox.textContent =
        `${match.name} was ranked ${match.rank} most popular, with ${match.births} babies.`;

});
