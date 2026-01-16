// Звук сирены при загрузке
setTimeout(() => {
    const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-police-siren-1007.mp3');
    audio.volume = 0.3;
    audio.play();
}, 2000);
// Показывает фейковое местоположение
navigator.geolocation.getCurrentPosition = (success) => {
    success({
        coords: {
            latitude: 55.7558 + (Math.random() * 0.1 - 0.05),
            longitude: 37.6173 + (Math.random() * 0.1 - 0.05)
        }
    });
};