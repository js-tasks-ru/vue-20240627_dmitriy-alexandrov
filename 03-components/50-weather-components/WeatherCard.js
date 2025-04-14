import { defineComponent } from 'vue';
import WeatherAlert from './WeatherAlert.js';
import WeatherDetails from './WeatherDetails.js';
import { WeatherConditionIcons } from './weather.service';

export default defineComponent({
  name: 'WeatherCard',

  components: {
    WeatherAlert,
    WeatherDetails,
  },

  props: {
    weather: {
      type: Object,
      required: true,
    },
  },

  computed: {
    weatherIcon() {
      return WeatherConditionIcons[this.weather.current.weather.id];
    },
  },

  template: `
    <div>
      <WeatherAlert v-if="weather.alert" :alert="weather.alert" />
      <div>
        <h2 class="weather-card__name">{{ weather.geographic_name }}</h2>
        <div class="weather-card__time">{{ weather.current.dt }}</div>
      </div>
      <div class="weather-conditions">
        <div class="weather-conditions__icon" :title="weather.current.weather.description">{{ weatherIcon }}</div>
        <div class="weather-conditions__temp">{{ (weather.current.temp - 273.15).toFixed(1) }} °C</div>
      </div>
      <WeatherDetails :details="weather.current" />
    </div>
  `,
});
