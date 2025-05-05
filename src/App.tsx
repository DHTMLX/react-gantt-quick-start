import GanttChart from './components/Gantt/Gantt.tsx';
import { tasks, links } from './demoData';

export default function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <GanttChart tasks={tasks} links={links} />
    </div>
  );
}