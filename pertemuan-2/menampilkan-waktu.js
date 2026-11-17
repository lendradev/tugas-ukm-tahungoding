const TIMES_PARAMETER = {
  pagi: {
    min: 6,
    max: 10,
  },
  siang: {
    min: 11,
    max: 14,
  },
  sore: {
    min: 15,
    max: 18,
  },
  malam: {
    min: 19,
    max: 23,
  },
  diniHari: {
    min: 0,
    max: 5,
  },
};

function getHoursToday() {
  return new Date().getHours();
}

function getTimeOfDay(hours) {
  if (hours >= TIMES_PARAMETER.pagi.min && hours <= TIMES_PARAMETER.pagi.max) {
    return "pagi";
  } else if (hours >= TIMES_PARAMETER.siang.min && hours <= TIMES_PARAMETER.siang.max) {
    return "siang";
  } else if (hours >= TIMES_PARAMETER.sore.min && hours <= TIMES_PARAMETER.sore.max) {
    return "sore";
  } else if (hours >= TIMES_PARAMETER.malam.min && hours <= TIMES_PARAMETER.malam.max) {
    return "malam";
  } else {
    return "dini hari";
  }
}

function displayTime(hours) {
  if (hours > 24) {
    return "Jam tidak valid";
  }

  const timeOfDay = getTimeOfDay(hours);
  return `Sekarang jam ${hours}, adalah ${timeOfDay}!`;
}

// Automatic based on the current time
console.log(displayTime(getHoursToday()));
console.log("Below is wrong format of time, it should return 'Jam tidak valid'");
// Manual input of time
console.log(displayTime(25));
