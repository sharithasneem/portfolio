import Hero from './component/hero/page'
import Skills from './component/skills/page'
import Timeline from './component/timeline/page'


export default function Home() {
 
  return (
    
    <div >
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <Hero />
      <Skills />
      <Timeline/>
    </div>
  );
}
