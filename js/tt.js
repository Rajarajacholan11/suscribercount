document.addEventListener('DOMContentLoaded', () => {
    const percentageElement = document.querySelector('.percentage');
    const circleElement = document.querySelector('.circle');
    let percentage = 0;
    const targetPercentage = 78;

    const interval = setInterval(() => {
        if (percentage < targetPercentage) {
            percentage++;
            percentageElement.textContent = `${percentage}%`;
            circleElement.style.background = `conic-gradient(#0a0131 ${percentage * 3.6}deg, #080202 ${percentage * 3.6}deg)`;
        } else {
            clearInterval(interval);
        }
    }, 30);

    const percentageElement1 = document.querySelector('.percentage1');
    const circleElement1 = document.querySelector('.circle1');
    let percentage1 = 0;
    const targetPercentage1 = 80;

    const interval1 = setInterval(() => {
        if (percentage1 < targetPercentage1) {
            percentage1++;
            percentageElement1.textContent = `${percentage1}%`;
            circleElement1.style.background = `conic-gradient(#0a0131 ${percentage1 * 3.6}deg, #080202 ${percentage1 * 3.6}deg)`;
        } else {
            clearInterval(interval1);
        }
    }, 30);

    const percentageElement2 = document.querySelector('.percentage2');
    const circleElement2 = document.querySelector('.circle2');
    let percentage2 = 0;
    const targetPercentage2 = 70;

    const interval2 = setInterval(() => {
        if (percentage2 < targetPercentage2) {
            percentage2++;
            percentageElement2.textContent = `${percentage2}%`;
            circleElement2.style.background = `conic-gradient(#0a0131 ${percentage2 * 3.6}deg, #080202 ${percentage2 * 3.6}deg)`;
        } else {
            clearInterval(interval2);
        }
    }, 30);

    
});