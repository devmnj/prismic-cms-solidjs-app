import Nav from "./Nav";

export default function Layout(props) {
    return (
        <>
            <div class="bg-gray-800">
                <Nav/>
                <div class=" dark:text-white dark:bg-gray-800 items-center overflow-auto h-screen">
                    {props.children}
                </div>
            </div>
        </>
    );
}
