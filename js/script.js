function countdown() {
    var count = 10;
    var countdownElement = document.getElementById('countdown');
    var wordElement = document.getElementById('word');

    function updateCountdown() {
        countdownElement.textContent = count;
        count--;
        if (count >= 0) {
            setTimeout(updateCountdown, 1000);
        } else {
            countdownElement.textContent = "Happy Independence!";
        }
    }

    updateCountdown();
}
countdown();