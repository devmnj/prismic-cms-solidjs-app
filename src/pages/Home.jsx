import { client } from "@/lib/client";
import { createResource,createEffect, Show, createSignal } from "solid-js";
import PostGrid from "components/PostGrid";
import { GridSkelton } from "components/Skelton";
import { search } from "../stores";
const allPosts = `query    {
    allPost_types{
      edges{
        node{
          title
          post_excerpt
          featured_img_link {
             _linkType
             ...on  _ExternalLink{
              url
            }
          }
          _meta{
            firstPublicationDate
           id
           uid
           tags
         }
        }
      }
    }
  }`;

export default function Home() {
  const [posts] = createResource(() =>
    client.request(allPosts).then((data) => {
      return data.allPost_types.edges;
    })
  );
  
  const [bPosts,setPosts] = createSignal([{}]);

  createEffect(() => {
  console.log(`Searched for ... ${search.keyWord}.`);
  if(search.keyWord){
       const fp = posts()?.filter((p)=>p.node.title[0].text.toUpperCase().includes(search.keyWord.toUpperCase()));
    setPosts(fp);
  }
  else{
    setPosts(posts);
  }
 
  });
  
  return (
    <div>
           {/* <div>{JSON.stringify(posts())} </div> */}
      <Show
        when={ !posts.loading}
        fallback={() => {
          <GridSkelton />;
        }}
      >
        <div>
          {" "}
          <PostGrid data={bPosts()} />
        </div>
      </Show>
    </div>
  );
}
