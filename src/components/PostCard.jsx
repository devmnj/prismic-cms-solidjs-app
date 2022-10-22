
export default function PostCard(props) {   
  return (
    <div style={{width: '400px',height:'350px'}} class="bg-slate-500">
      <a
        href={`/posts/${props.post.node._meta.uid}`}
        rel="noopener noreferrer"
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src= {props.post.node.featured_img_link.url }

        />
        <div className="flex justify-between ">
          <span class="mt-3 mx-3 text-grey-600">{
          props.post.node._meta.firstPublicationDate
          } </span>
          <span class="mt-3 mx-3 text-gray-600">
            {" "}
            {props.post.tag || "Reactjs"}
          </span>
        </div>

        <div className="px-6 py-2 space-y-2 ">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {props.post.node.title[0].text || "In usu laoreet repudiare legendos"}
          </h3>
          <p class="align-baseline">{props.post.node.post_excerpt[0].text}</p>
        </div>
      </a>
    </div>
  );
}
