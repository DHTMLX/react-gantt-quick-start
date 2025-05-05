import { useRef } from 'react';
import Gantt, { ReactGanttRef, Task, Link, GanttConfig } from '@dhx/trial-react-gantt';
import "@dhx/trial-react-gantt/dist/react-gantt.css";

export interface GanttProps {
  tasks: Task[];
  links: Link[];
}

export default function GanttChart({ tasks, links }: GanttProps) {
  const ganttRef = useRef<ReactGanttRef>(null);

  const config: GanttConfig = {
    grid_width: 500,
    scale_height: 90,
    scales: [
        { unit: 'year', step: 1, date: '%Y' },
        { unit: 'month', step: 1, date: '%M' },
        { unit: 'day', step: 1, date: '%d %M' }
    ]
  };

  return (
    <Gantt
      ref={ganttRef}
      tasks={tasks}
      links={links}
      config={config}
      data={{ 
        save: (entity: string, action: string, data: any, id: string|number) => {
            console.log(`${entity} - ${action} - ${id}`, data);
        }
      }}
    />
  );
}