import { BodyType } from "../types";

export default async function Article(props: any) {
    const { data } = props;
    return (
        <div>
        <header className="w-full bg-black px-20 py-16 flex justify-center">
            <h1 className="text-white text-4xl">
            {data?.title ? data.title : ''}
            </h1>
        </header>
        <section className="h-screen bg-blue-500 p-16 flex flex-col items-center">
        {data?.body ? data.body.map(
            (element: BodyType, i: number) => (
                <span key={i}>
                    {element.text}
                </span>
            )) : ''}
            <span>
              
            </span>
        </section>
        </div>
  );
}


