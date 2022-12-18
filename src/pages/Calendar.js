import React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from '../data/dummy';
import Header from '../components/Header';

function Calendar() {
  return (
    <div className='bg-white m-2 md:m-10 p-2 md:p-10 mt-24 rounded-3xl dark:bg-secondary-dark-bg'>
      <Header category={'app'} title={'calendar'} />
      <ScheduleComponent
        height={'650px'}
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={ new Date( 2021, 0, 10)}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar