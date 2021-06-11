import React from 'react'
// Components import
import { EventCard } from '../../components';
// Calendar imports
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

const CalendarComponent = ({ eventData }) => {

  const handleEventClick = (eventInfo) => {
    window.location.href=eventInfo.event.extendedProps.slug;
  }

  const handleNavClick = (info) => {
    alert(info)
  }

  const renderEventContent = (eventContent) => {
    return (
      <EventCard
      id={eventContent.event._def.defId}
      title={eventContent.event.title}
      klant={eventContent.event.extendedProps.klant}/>
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
        events={eventData}
        eventClick={handleEventClick}
        eventContent={renderEventContent}
      />
    </div>
  )
}

export default CalendarComponent;