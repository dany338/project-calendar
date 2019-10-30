export const monthsYear = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};

export const daysWeek = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};

export const searchInObject = (object, search) => {
  for(const name in object) {
    if(object[name] === search) {
      return parseInt(name);
    }
  }

  return -1;
}

export const dayInitialNextMonth = 1;

export const daysMonth = (month, year) => {
	return new Date(year, month, 0).getDate();
};

export const dayOfWeek = (day, month, year) => {
	return new Date(year, month, day).getDay();
};

export const monthYear = (day, month, year) => {
  return new Date(year, month, day).getMonth();
};

export const subtractDays = (day, month, year, days) => {
  let newDate = new Date(year, month, day);
  return newDate.setDate(newDate.getDate() - days);
};

export const addDays = (day, month, year, days) => {
  let newDate = new Date(year, month, day);
  return newDate.setDate(newDate.getDate() + days);
};

export const calculateDatesOfWeek = (start, end, month, year) => {
  let arrDaysWeek = [0, 0, 0, 0, 0, 0, 0]; // Defined array of long = 7 days
  for (let index = start; index <= end; index++) {
    const day = dayOfWeek(index, month, year);
    // console.log('day', start, end, index, month, year, day);
    arrDaysWeek[day] = {
      dayMonthWeek: index,
      monthWeek: month,
      yearMonthWeek: year,
      dateMonthWeek: new Date(year, month, index),
    };
  }

  /* Calculate the other dates in this month that not are the presente month */
  for (let index = 0; index < arrDaysWeek.length; index++) {
    const element = arrDaysWeek[index];
    if(element === 0) {
      let newDate = new Date();
      const dayStart = dayOfWeek(start, month, year);
      const dayEnd = dayOfWeek(end, month, year);

      if(index < dayStart) {
        console.log('index < dayStart', index, dayStart);
        const dateStart = arrDaysWeek[dayStart];
        const { dayMonthWeek, monthWeek, yearMonthWeek } = dateStart;
        const daysSubtract = dayStart - index;
        newDate = new Date(yearMonthWeek, monthWeek, dayMonthWeek);
        newDate.setDate(newDate.getDate() - daysSubtract);
        // console.log('newDate = index < arrDaysWeek', dayMonthWeek, monthWeek, yearMonthWeek, daysSubtract);
      } else if(index > dayEnd) {
        console.log('index > dayEnd', index, dayEnd);
        const dateEnd = arrDaysWeek[dayEnd];
        const { dayMonthWeek, monthWeek, yearMonthWeek } = dateEnd;
        const daysAdd = index - dayEnd;
        newDate = new Date(yearMonthWeek, monthWeek, dayMonthWeek);
        newDate.setDate(newDate.getDate() + daysAdd);
        // console.log('newDate = index > arrDaysWeek', dayMonthWeek, monthWeek, yearMonthWeek, daysAdd);
        console.log('index > dayEnd 2', dayStart, dayEnd, start, end, index, element, daysAdd, (new Date(yearMonthWeek, monthWeek, dayMonthWeek)).getDate());
      }
      // console.info('newDate', newDate);

      arrDaysWeek[index] = {
        dayMonthWeek: newDate.getDate(),
        monthWeek: newDate.getMonth(),
        yearMonthWeek: newDate.getFullYear(),
        dateMonthWeek: newDate,
      }
    }
  }

  console.log('calculateDatesOfWeek 2', arrDaysWeek);

  return arrDaysWeek;
};

export const getWeeksInMonth = (month, year) => {
  var weeks = [],
      firstDate = new Date(year, month, 1),
      lastDate  = new Date(year, month+1, 0),
      numDays   = lastDate.getDate();

  var start = 1;
  var end   = 7-firstDate.getDay();
  while(start <= numDays) {
    weeks.push({start:start,end:end});
    start = end + 1;
    end = end + 7;
    if(end>numDays)
      end=numDays;
  }

  console.log('getWeeksInMonth', weeks);
  return weeks;
};

export const searchReminder = (data, dateWeek) => {
  if(data.length > 0) {
    const { dayMonthWeek, monthWeek, yearMonthWeek, dateMonthWeek } = dateWeek;
    const result = data.filter(({ dateReminder }) => {
      return ((dateReminder.getDate() === dayMonthWeek) && (dateReminder.getMonth() === monthWeek) && (dateReminder.getFullYear() === yearMonthWeek));
    });
    return result;
  } else {
    return data;
  }
}

export const wait = (ms) => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, ms);
});

export const API_KEY_WEATHER = '74a6e84c51148b563b620e01f0f09794';

export const URL_API_WEATHER = '';
