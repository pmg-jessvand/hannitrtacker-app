import React from 'react'
// Components import
import { EventCard } from '../../components';
// Calendar imports
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

const CalendarComponent = () => {

  const handleEventClick = (eventInfo) => {
    // console.log(eventInfo.event.extendedProps);
  }

  const handleNavClick = (info) => {
    alert(info)
  }

  const renderEventContent = (eventContent) => {
    return (
      <EventCard id={eventContent.event._def.defId} title={eventContent.event.title} />
    );
  }

  return (
    <div className="calendar">
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridWeek"
        weekends={false}
        buttonText={{
          today: 'Vandaag',
        }}
        locale="be"
        navLinks={true}
        navLinkDayClick={handleNavClick}
        events={[
          { title: 'event 1', date: '2021-06-03', allDay: true, slug: 'event-1', backgroundColor: 'red' },
          { title: 'event 1', date: '2021-06-03', allDay: true, slug: 'event-3', backgroundColor: 'red' },
        ]}
        eventClick={handleEventClick}
        eventContent={renderEventContent}
      />
    </div>
  )
}

export default CalendarComponent;