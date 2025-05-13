// script.js

// Event Handling
document.getElementById('myButton').addEventListener('click', function() {
    this.textContent = 'Clicked!';
    this.style.backgroundColor = 'lightblue';
});

const hoverElement = document.getElementById('hoverElement');
hoverElement.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
});
hoverElement.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});

document.addEventListener('keypress', function(event) {
    console.log(`Key pressed: ${event.key}`);
});

let timer;
const longPressElement = document.getElementById('longPressElement');

longPressElement.addEventListener('mousedown', function() {
    timer = setTimeout(() => {
        alert('Long Press Detected!');
    }, 500);
});

longPressElement.addEventListener('mouseup', function() {
    clearTimeout(timer);
});

longPressElement.addEventListener('dblclick', function() {
    alert('Double Click Detected!');
});

// Interactive Elements
document.getElementById('changeTextButton').addEventListener('click', function() {
    this.textContent = 'Text Changed!';
    this.style.color = 'red';
});

const images = [
    'https://picsum.photos/id/1015/300/180',
    'https://picsum.photos/id/1016/300/180',
    'https://picsum.photos/id/1018/300/180'
];
let currentIndex = 0;

document.getElementById('nextImage').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('galleryImage').src = images[currentIndex];
});

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        const contentId = this.getAttribute('data-content');
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('show');
        });
        document.getElementById(content
            