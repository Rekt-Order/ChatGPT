document.addEventListener('DOMContentLoaded', (event) => {
    let today = new Date();
    let date = today.getFullYear()+'年'+(today.getMonth()+1)+'月'+today.getDate()+'日';
    document.getElementById('text1').textContent = date;
});
