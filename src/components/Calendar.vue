<template>
  <div class="container">
    <div class="left">
      <div class="calendar">
        <div class="month">
          <i class="fas fa-angle-left prev" @click="prevMonth"></i>
          <div class="date">{{ months[month] }} {{ year }}</div>
          <i class="fas fa-angle-right next" @click="nextMonth"></i>
        </div>
        <div class="weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div class="days" v-html="daysHTML"></div>
        <div class="goto-today">
          <div class="goto">
            <input
              type="text"
              placeholder="mm/yyyy"
              class="date-input"
              v-model="dateInput"
              @input="formatDateInput"
            />
            <button class="goto-btn" @click="gotoDate">Go</button>
          </div>
          <button class="today-btn" @click="resetToToday">Today</button>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="today-date">
        <div class="event-day">{{ activeDayName }}</div>
        <div class="event-date">{{ activeDate }}</div>
      </div>
      <div class="events" v-html="eventsHTML"></div>
      <div class="add-event-wrapper" :class="{ active: isAddingEvent }">
        <div class="add-event-header">
          <div class="title">Add Event</div>
          <i class="fas fa-times close" @click="closeEventWrapper"></i>
        </div>
        <div class="add-event-body">
          <div class="add-event-input">
            <input
              type="text"
              placeholder="Event Name"
              class="event-name"
              v-model="newEvent.title"
              maxlength="60"
            />
          </div>
          <div class="add-event-input">
            <input
              type="text"
              placeholder="Event Time From"
              class="event-time-from"
              v-model="newEvent.timeFrom"
              @input="formatTime('timeFrom')"
            />
          </div>
          <div class="add-event-input">
            <input
              type="text"
              placeholder="Event Time To"
              class="event-time-to"
              v-model="newEvent.timeTo"
              @input="formatTime('timeTo')"
            />
          </div>
        </div>
        <div class="add-event-footer">
          <button class="add-event-btn" @click="addEvent">Add Event</button>
        </div>
      </div>
    </div>
    <button class="add-event" @click="openEventWrapper">
      <i class="fas fa-plus"></i>
    </button>
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted } from "vue";

export default {
  setup() {
    const today = new Date();
    const activeDay = ref(today.getDate());
    const month = ref(today.getMonth());
    const year = ref(today.getFullYear());
    const dateInput = ref("");
    const isAddingEvent = ref(false);
    const newEvent = reactive({ title: "", timeFrom: "", timeTo: "" });
    const eventsArr = ref([]);

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Computed values
    const daysHTML = computed(() => generateCalendarDays());
    const activeDayName = computed(() =>
      new Date(year.value, month.value, activeDay.value).toLocaleDateString(
        "en-US",
        { weekday: "short" }
      )
    );
    const activeDate = computed(
      () => `${activeDay.value} ${months[month.value]} ${year.value}`
    );
    const eventsHTML = computed(() => {
      const currentEvents = eventsArr.value.find(
        (event) =>
          event.day === activeDay.value &&
          event.month === month.value + 1 &&
          event.year === year.value
      );

      if (!currentEvents || !currentEvents.events.length) {
        return `<div class="no-event"><h3>No Events</h3></div>`;
      }

      return currentEvents.events
        .map(
          (event) =>
            `<div class="event">
               <div class="title"><h3>${event.title}</h3></div>
               <div class="time"><span>${event.time}</span></div>
             </div>`
        )
        .join("");
    });

    // Calendar logic here (functions like `generateCalendarDays`, `prevMonth`, `nextMonth`, `gotoDate`, etc.)

    return {
      months,
      month,
      year,
      daysHTML,
      activeDay,
      activeDayName,
      activeDate,
      dateInput,
      eventsHTML,
      isAddingEvent,
      newEvent,
      // Functions to bind in template
      prevMonth,
      nextMonth,
      gotoDate,
      resetToToday,
      openEventWrapper,
      closeEventWrapper,
      addEvent,
      formatDateInput,
      formatTime,
    };
  },
};
</script>

<style scoped>
/* Add the relevant CSS here */
</style>
