import { defineComponent } from 'vue';
import { getWeatherData } from './weather.service';
import WeatherCardList from './WeatherCardList.js';
import './WeatherApp.css';

export default defineComponent({
  name: 'WeatherApp',

  components: {
    WeatherCardList,
  },

  setup() {
    const weatherData = getWeatherData();

    return {
      weatherData,
    };
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>
      <WeatherCardList :weatherData="weatherData" />
    </div>
  `,
});
