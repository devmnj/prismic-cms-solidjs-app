import { For } from "solid-js";
import Heading1 from "components/slices/Heading1";
import Code from "components/slices/Code";
import Paragraph from "components/slices/Paragraph";
import { Dynamic } from "solid-js/web";
import { GridSkelton, Skelton } from "components/Skelton";

const Slices = {
  heading_slice: Heading1,
  code_slice: Code,
  paragraph_slice: Paragraph
};

export default function Post(props) {
  console.log(JSON.stringify(props));
  return (
    <>
    
        <div className="   dark:bg-gray-800 max-w-6xl px-6 py-16 mx-auto space-y-12">
          <article className="  flex-col space-y-8 dark:bg-gray-800 dark:text-gray-50">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
                {props.post?.title[0].text || "Post title"}
              </h1>
              <div>
                <summary>{props.post?.post_excerpt[0].text}</summary>
              </div>
              <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
                <div className="flex items-center md:space-x-2">
                  <img
                    src="https://source.unsplash.com/random/?face&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                  />
                  <p className="text-sm">"Leroy Jenkins" • July 19th, 2021</p>
                </div>
                <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                  4 min read • 1,570 views
                </p>
              </div>
            </div>
            <div class="">
              <img
                class="rounded object-fill "
                src={props.post?.featured_img_link.url}
              />
            </div>
            <div className="dark:text-gray-100">
              {/* Slice Zone  */}
              <For each={props.post?.body} fallback={() => <Skelton />}>
                {(post) => (
                  <Dynamic
                    component={Slices[post.type]}
                    content={post.primary}
                  ></Dynamic>
                )}
              </For>
              <p></p>
            </div>
          </article>
          <div>
            <div className="flex flex-wrap py-6 space-x-2 border-t border-dashed dark:border-gray-400">
              {/* <Show when={props.post.tag}>{<Tag name={props.post.tag} />}</Show> */}
            </div>
            <div className="space-y-2 text-white">
              <h4 className="text-lg  font-semibold">Comments</h4>

              {/* <PostComment comment={props.post.userComments[0].body} /> */}
            </div>
            <div className="space-y-2 mt-3 text-white">
              <h4 className="text-lg  font-semibold">Related posts</h4>
              {/* <RelatedPosts tag={props.post.tag} /> */}
            </div>
          </div>
        </div>
      {/* </Show> */}
    </>
  );
}
