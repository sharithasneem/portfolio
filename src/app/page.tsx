import { Albert_Sans } from 'next/font/google'
import Hero from './component/hero/page'
import Skills from './component/skills/page'
import Timeline from './component/timeline/page'
const albertSans= Albert_Sans({
  weight: '300',
  subsets: ['latin']
})

export default function Home() {
 
  return (
    <div >
      <Hero />
      <Skills />
      <Timeline/>
    </div>
  );
}
