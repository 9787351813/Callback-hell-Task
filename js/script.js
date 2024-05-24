function countdown() {
    var count = 10;
    var countdownElement = document.getElementById('countdown');
    var wordElement = document.getElementById('word');

    countdownElement.textContent = count;

    setTimeout(function() {
        countdownElement.textContent = --count;
        setTimeout(function() {
            countdownElement.textContent = --count;
            setTimeout(function() {
                countdownElement.textContent = --count;
                setTimeout(function() {
                    countdownElement.textContent = --count;
                    setTimeout(function() {
                        countdownElement.textContent = --count;
                        setTimeout(function() {
                            countdownElement.textContent = --count;
                            setTimeout(function() {
                                countdownElement.textContent = --count;
                                setTimeout(function() {
                                    countdownElement.textContent = --count;
                                    setTimeout(function() {
                                        countdownElement.textContent = --count;
                                        setTimeout(function() {
                                            countdownElement.textContent = --count;
                                            countdownElement.textContent = "Happy Independence!";
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}
countdown();
