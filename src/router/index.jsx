import { Route, Router, Routes,useParams } from "solid-app-router";
import { Home, About } from "@/pages";
import PNF from "components/PNF";
import { client } from "@/lib/client";
  import FullPost from "components/FullPost";
import { createResource } from "solid-js";
// import SinglePost from "components/SinglePost";

// function  getPost  ({ params}) {
//   const query = `query   {
//     allPost_types{
//       edges{
//         node{
//           title
//           post_excerpt
//           featured_img_link {
//              _linkType
//              ...on  _ExternalLink{
//               url
//             }
//           }
//           _meta{
//             firstPublicationDate
//            id
//            uid
//            tags
//          }
//         }
//       }
//     }
// }`;

//   const [post] = createResource(() =>
//     client.request(query).then((data) => {      
     
//       return data;
//     })
//   );
//   return post;
// }

export default function Routers() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={Home}></Route>
          <Route path="/about" element={About}></Route>
          <Route
            path="/posts/:id"
            element={() => {
              const route = useParams();
              return <FullPost id={route.id} />
            }}/>
           
          {/* <Route path="/posts/:id" data={getPost} element={<SinglePost />} /> */}
          <Route path="*" element={PNF}></Route>
        </Routes>
      </Router>
    </>
  );
}
