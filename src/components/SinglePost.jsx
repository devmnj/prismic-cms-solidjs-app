import { useRouteData } from "solid-app-router"


export default function SinglePost() {
    const data=useRouteData();
    return (<>
      <div>Single Post</div>
      <div>{JSON.stringify(data)}</div>
      </>
    )
  }
  