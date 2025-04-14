import { defineComponent } from 'vue';
import WeatherCard from './WeatherCard.js';

export default defineComponent({
  name: 'WeatherCardList',

  components: {
    WeatherCard,
  },

  props: {
    weatherData: {
      type: Array,
      required: true,
    },
  },

  setup() {
    function isDayTime(dt, sunrise, sunset) {
      function timeToMinutes(time) {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
      }

      const dtMinutes = timeToMinutes(dt);
      const sunriseMinutes = timeToMinutes(sunrise);
      const sunsetMinutes = timeToMinutes(sunset);

      return dtMinutes >= sunriseMinutes && dtMinutes <= sunsetMinutes;
    }

    return {
      isDayTime
    }
  },

  template: `
    <ul class="weather-list unstyled-list">
      <li v-for="weather in weatherData" :key="weather.geographic_name" :class="['weather-card', isDayTime(weather.current.dt, weather.current.sunrise, weather.current.sunset) ? '' : 'weather-card--night']">
        <WeatherCard :weather="weather" />
      </li>
    </ul>
  `,
});
