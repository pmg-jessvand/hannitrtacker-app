  
export default function useGetEventInfo(data) {

  
  if(data) {
    const { entities: tasks } = data.nodeQuery;
    let eventData = [];

    tasks.map(task => {

      if(task.fieldTaskKlant != null) {
        let taskOpbject = {
          title: task.title,
          date: task.fieldTaskStartDate.value,
          slug: `/opdrachten/${task.uuid}`,
          klant: task.fieldTaskKlant.entity.title,
        }
        return eventData.push(taskOpbject);

      } else {
        let taskOpbject = {
          title: task.title,
          date: task.fieldTaskStartDate.value,
          slug: `/opdrachten/${task.uuid}`,
        }
        return eventData.push(taskOpbject);
      }


    })

    return eventData;

  } else return null

  
}