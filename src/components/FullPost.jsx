import { createResource, Show } from "solid-js";
import { client } from "@/lib/client";
import { GridSkelton } from "./Skelton";
import Post from "components/Post";
export default function FullPost(props) {
  const query = `query {
    post_type(uid: "${props.id}", lang: "en-us") {
    title
    post_excerpt
    featured_img_link {
      ... on _ExternalLink {
        url
      }
    }
    body {
      ... on Post_typeBodyParagraph_slice {
        label
        type
        primary {
          paragraph_rich_text_field
        }
      }
      ... on Post_typeBodyHeading_slice {
        type
        primary {
          header_rich_text_field
        }
      }
      ... on Post_typeBodyImage_slice {
        type
        primary {
          picture_field
        }
      }
      ... on Post_typeBodyCode_slice {
        type
        primary {
          cod_text_field
        }
      }
      ... on Post_typeBodyList_slice {
        type
        primary {
          list_ritch_text_field
        }
      }
      ... on Post_typeBodyQuotable {
        type
        primary {
          code_text_field
          quotes
        }
      }
    }
    }
  }  `;

  const [post, { refetch }] = createResource(() =>
    client
      .request(query)
      .then((data) => {
        return data;
      })
      .catch((e) => {
        console.log("Refetch may fix the error!!");
        console.log(e);
        refetch(); 
      })
  );
  return (
    <>
      <div>{JSON.stringify(post())} </div>
      <Show when={post} fallback={() => {
        <div>Loading data</div>
      }}>
        

        <Post post={post()?.post_type}/>

      </Show>
    </>
  );
}
