const beaches = [
  {
    pos: 1,
    country: 'usa',
    district: 'hawaii',
    beach: 'hanalei beach',
    id: 'hanalei-beach',
    coordinates: { lat: 22.209078, lng: -159.506758 },
    weather: { wave: '2.3', water: '24', wind: '12 SE' },
  },
  {
    pos: 2,
    country: 'usa',
    district: 'california',
    beach: 'malibu beach',
    id: 'malibu-beach',
    coordinates: { lat: 34.031246, lng: -118.788193 },
    weather: { wave: '3.1', water: '19', wind: '9 SW' },
  },
  {
    pos: 3,
    country: 'usa',
    district: 'florida',
    beach: 'cocoa beach',
    id: 'cocoa-beach',
    coordinates: { lat: 28.320007, lng: -80.607552 },
    weather: { wave: '1.8', water: '26', wind: '11 E' },
  },
  {
    pos: 4,
    country: 'brazil',
    district: 'rio de janeiro',
    beach: 'copacabana beach',
    id: 'copacabana-beach',
    coordinates: { lat: -22.970722, lng: -43.182365 },
    weather: { wave: '2.7', water: '25', wind: '14 SE' },
  },
  {
    pos: 5,
    country: 'france',
    district: 'hossegor',
    beach: 'vieux boucau',
    id: 'vieux-boucau',
    coordinates: { lat: 43.785811, lng: -1.400962 },
    weather: { wave: '2.9', water: '18', wind: '16 W' },
  },
  {
    pos: 6,
    country: 'south africa',
    district: 'sarah baartman',
    beach: 'jeffreys bay beach',
    id: 'jeffreys-bay-beach',
    coordinates: { lat: -34.033333, lng: 24.916668 },
    weather: { wave: '3.4', water: '21', wind: '13 SW' },
  },
  {
    pos: 7,
    country: 'sri lanka',
    district: 'galle',
    beach: 'hikkaduwa beach',
    id: 'hikkaduwa-beach',
    coordinates: { lat: 6.139468, lng: 80.106285 },
    weather: { wave: '1.9', water: '28', wind: '10 S' },
  },
  {
    pos: 8,
    country: 'australia',
    district: 'queensland',
    beach: 'airlie beach',
    id: 'airlie-beach',
    coordinates: { lat: -20.2675, lng: 148.716949 },
    weather: { wave: '2.1', water: '23', wind: '8 E' },
  },
];

new Swiper('.mySwiper', {
  spaceBetween: 4,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

new Swiper('.mySwiper2', {
  effect: 'fade',
  fadeEffect: { crossFade: true },
  loop: true,
  spaceBetween: 4,
  navigation: {
    nextEl: '.swiper-arrow-next',
    prevEl: '.swiper-arrow-prev',
  },
  thumbs: { swiper: document.querySelector('.mySwiper')?.swiper },
});

new Swiper('.mySwiper-surf', {
  slidesPerView: 1.2,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.swiper-arrow-next',
    prevEl: '.swiper-arrow-prev',
  },
  breakpoints: {
    280: { slidesPerView: 1.2, spaceBetween: 10 },
    555: { slidesPerView: 1.6, spaceBetween: 10 },
    820: { slidesPerView: 2.3, spaceBetween: 10 },
    1024: { slidesPerView: 3.3, spaceBetween: 10 },
    1260: { slidesPerView: 4.3, spaceBetween: 10 },
  },
});

new Swiper('.mySwiper-travel', {
  effect: 'fade',
  fadeEffect: { crossFade: true },
  loop: true,
  spaceBetween: 4,
  navigation: {
    nextEl: '.swiper-arrow-next',
    prevEl: '.swiper-arrow-prev',
  },
});

new Swiper('.mySwiper-sleep', {
  effect: 'fade',
  fadeEffect: { crossFade: true },
  loop: true,
  spaceBetween: 4,
  navigation: {
    nextEl: '.swiper-arrow-next',
    prevEl: '.swiper-arrow-prev',
  },
});

const burger = document.querySelector('#burger');
const popup = document.querySelector('#popup');

if (burger && popup) {
  burger.addEventListener('click', () => {
    popup.classList.toggle('open');
    burger.classList.toggle('active');
    burger.parentElement?.classList.toggle('active');
  });

  popup.addEventListener('click', (event) => {
    if (event.target.closest('.nav-bar__item')) {
      popup.classList.remove('open');
      burger.classList.remove('active');
      burger.parentElement?.classList.remove('active');
    }
  });
}

const worldMap = document.querySelector('.world-map-wrapper');
const dotsBeach = document.querySelectorAll('span.dots-beach');
const mobileWave = document.querySelector('.dots-beach-mobile-info__weather-wave');
const mobileWater = document.querySelector('.dots-beach-mobile-info__weather-water');
const mobileWind = document.querySelector('.dots-beach-mobile-info__weather-wind');
const surfTitleDistrict = document.getElementById('surf-title-district');
const surfTitleCountry = document.getElementById('surf-title-country');
const mobileLocationName = document.querySelector('.dots-beach-mobile-info__location-name');
const mobileLocationCity = document.querySelector('.dots-beach-mobile-info__location-city');
const coordinatesBeachLat = document.getElementById('coordinates-beach-lat');
const coordinatesBeachLng = document.getElementById('coordinates-beach-lng');

function formatLatitude(value) {
  return `${Math.abs(value)}&deg${value >= 0 ? 'N' : 'S'}`;
}

function formatLongitude(value) {
  return `${Math.abs(value)}&deg${value >= 0 ? 'E' : 'W'}`;
}

function clearBeachCards() {
  dotsBeach.forEach((dot) => {
    dot.classList.remove('active');
    dot.innerHTML = '';
  });
}

function renderBeachInfo(dotElement, beachData) {
  dotElement.innerHTML = '<div class="dots-beach-wrapper" id="dots-beach-wrapper"></div>';

  const wrapper = dotElement.querySelector('#dots-beach-wrapper');
  if (!wrapper) return;

  wrapper.innerHTML = `
    <div class="dots-beach-info__wrapper">
      <a class="dots-beach-info__location-name" href="#">${beachData.beach}</a>
      <p class="dots-beach-info__location-city">${beachData.district}</p>
      <div class="dots-beach-info__weather">
        <p class="dots-beach-info__weather-wave">${beachData.weather.wave}</p>
        <p class="dots-beach-info__weather-water">${beachData.weather.water}</p>
        <p class="dots-beach-info__weather-wind">${beachData.weather.wind}</p>
      </div>
    </div>
  `;

  if (mobileWave) mobileWave.textContent = beachData.weather.wave;
  if (mobileWater) mobileWater.textContent = beachData.weather.water;
  if (mobileWind) mobileWind.textContent = beachData.weather.wind;
  if (surfTitleDistrict) surfTitleDistrict.textContent = beachData.district;
  if (surfTitleCountry) surfTitleCountry.textContent = beachData.country;
  if (mobileLocationName) mobileLocationName.textContent = beachData.beach;
  if (mobileLocationCity) mobileLocationCity.textContent = beachData.district;
  if (coordinatesBeachLat) coordinatesBeachLat.innerHTML = formatLatitude(beachData.coordinates.lat);
  if (coordinatesBeachLng) coordinatesBeachLng.innerHTML = formatLongitude(beachData.coordinates.lng);
}

dotsBeach.forEach((dot) => {
  dot.addEventListener('click', (event) => {
    const beachData = beaches.find((item) => item.id === event.currentTarget.id);
    if (!beachData) return;

    clearBeachCards();
    event.currentTarget.classList.add('active');
    renderBeachInfo(event.currentTarget, beachData);
  });
});

if (worldMap) {
  worldMap.addEventListener('click', (event) => {
    if (!event.target.closest('span.dots-beach')) {
      clearBeachCards();
    }
  });
}

const defaultBeach = document.getElementById('malibu-beach') || dotsBeach[0];
if (defaultBeach) {
  defaultBeach.click();
}

const shopDots = document.querySelectorAll('span.shop__dots');
shopDots.forEach((dot) => {
  dot.addEventListener('click', (event) => {
    event.currentTarget.parentElement?.classList.toggle('active');
  });
});

const sliderCalculatorNights = document.getElementById('slider-calculator-nights');
const sliderCalculatorGuests = document.getElementById('slider-calculator-guests');
const sliderNights = document.getElementById('slider-nights');
const sliderGuests = document.getElementById('slider-guests');
const resultSleep = document.getElementById('result-sleep');

function calculatorSleep() {
  if (!sliderNights || !sliderGuests || !resultSleep) return;

  const nights = Math.max(Number(sliderNights.min || 1), Math.min(Number(sliderNights.max || 14), Number(sliderNights.value)));
  const guests = Math.max(Number(sliderGuests.min || 1), Math.min(Number(sliderGuests.max || 9), Number(sliderGuests.value)));

  sliderNights.value = nights;
  sliderGuests.value = guests;

  const result = nights * Number(resultSleep.dataset.night) + guests * Number(resultSleep.dataset.guest);
  resultSleep.textContent = `${result}`;
}

function attachCounter(container, input, direction) {
  if (!container || !input) return;

  container.addEventListener('click', (event) => {
    if (event.target.matches('span.slider-calculator__plus')) {
      input.value = Number(input.value) + 1;
    }

    if (event.target.matches('span.slider-calculator__minus')) {
      input.value = Number(input.value) - 1;
    }

    calculatorSleep();
  });

  input.addEventListener('input', calculatorSleep);
}

attachCounter(sliderCalculatorNights, sliderNights, 'nights');
attachCounter(sliderCalculatorGuests, sliderGuests, 'guests');
calculatorSleep();
