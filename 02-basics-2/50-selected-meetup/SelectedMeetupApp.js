import { defineComponent, ref, onMounted } from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    const selectedMeetupId = ref(1);
    const meetup = ref(null);

    const fetchMeetup = async (id) => {
      meetup.value = await getMeetup(id);
    };

    onMounted(() => {
      fetchMeetup(selectedMeetupId.value);
    });

    const selectPrevious = () => {
      if (selectedMeetupId.value > 1) {
        selectedMeetupId.value--;
        fetchMeetup(selectedMeetupId.value);
      }
    };

    const selectNext = () => {
      if (selectedMeetupId.value < 5) {
        selectedMeetupId.value++;
        fetchMeetup(selectedMeetupId.value);
      }
    };

    return {
      fetchMeetup,
      selectedMeetupId,
      meetup,
      selectPrevious,
      selectNext,
    };
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button
          class="button button--secondary"
          type="button"
          @click="selectPrevious"
          :disabled="selectedMeetupId === 1"
        >
          Предыдущий
        </button>

        <div class="radio-group" role="radiogroup">
          <div v-for="id in 5" :key="id" class="radio-group__button">
            <input
              :id="'meetup-id-' + id"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="id"
              v-model="selectedMeetupId"
              @change="fetchMeetup(id)"
            />
            <label :for="'meetup-id-' + id" class="radio-group__label">{{ id }}</label>
          </div>
        </div>

        <button
          class="button button--secondary"
          type="button"
          @click="selectNext"
          :disabled="selectedMeetupId === 5"
        >
          Следующий
        </button>
      </div>

      <div v-if="meetup" class="meetup-selector__cover">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title">{{ meetup.title }}</h1>
        </div>
      </div>
    </div>
  `,
});
