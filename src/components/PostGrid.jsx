import PostCard from "components/PostCard";
import { Show } from "solid-js";
import {GridSkelton} from "components/skelton";
export default function PostGrid(props) {
  return (
    <>
      <section className=" dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <Show
            when={props.data}
            fallback={() => {
              <div>
                <GridSkelton />
              </div>;
            }}
          >
            <div className="grid justify-center grid-cols-2 gap-4 sm:grid-cols-1 lg:grid-cols-2">
              {" "}
              <For each={props.data}>{(post) => <PostCard post={post} />}</For>
            </div>{" "}
          </Show>
          <div className="flex justify-center">

          </div>
        </div>
      </section>
    </>
  );
}
