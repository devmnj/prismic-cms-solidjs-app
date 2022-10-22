import {client} from '@/lib/client'
import { createResource, Show } from 'solid-js';
import {GridSkelton} from 'components/Skelton'
export default function About() {
  const query = `
          query{
              heropage(uid:"about",lang:"en-us"){
                 title
                 body
              }
            }
            `;
  
    const fetch = async () => await client.request(query);
    const [page] = createResource(fetch);
  return (
    <div class="p-3">
      <Show when={page() } fallback={()=>{
        <GridSkelton/>
      }}>
       
           <h1 className='text-4xl'>{ page().heropage.title[0].text }</h1>
           <p>{ page().heropage.body[0].text }</p>
      </Show>
      
    </div>
  )
}
