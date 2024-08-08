function toggleSolution(id) {
    const solution = document.getElementById(id);
    if (solution.style.display === 'none' || solution.style.display === '') {
        solution.style.display = 'block';
    } else {
        solution.style.display = 'none';
    }
}
