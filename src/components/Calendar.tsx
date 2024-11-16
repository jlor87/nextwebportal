import React, { useState } from 'react';
import Calendar, { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// Use CalendarProps to infer the correct value type
type CalendarValue = CalendarProps['value'];

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<CalendarValue>(new Date());

  const onDateChange: CalendarProps['onChange'] = (value) => {
    setSelectedDate(value);

    if (value instanceof Date) {
      console.log('Selected Date:', value);
    } else if (Array.isArray(value)) {
      console.log('Selected Date Range:', value); // Handle date range if enabled
    } else {
      console.log('No date selected');
    }
  };

  return (
    <div className="calendar-container">
      <h2 className="text-center text-xl font-bold mb-4">Select a Date</h2>
      <Calendar
        onChange={onDateChange}
        value={selectedDate}
        className="shadow-md rounded-lg"
      />
      <p className="mt-4 text-center">
        Selected Date:{' '}
        <strong>
          {selectedDate instanceof Date
            ? selectedDate.toDateString()
            : 'None'}
        </strong>
      </p>
    </div>
  );
};

export default MyCalendar;
