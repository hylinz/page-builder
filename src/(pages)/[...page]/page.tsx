import { getPageData } from "@/app/actions/page-actions";
import Article from "@/app/lib/templates/Article";
import Default from "@/app/lib/templates/Default";
import { ActionResponse } from "@/app/lib/types";
import { redirect } from "next/navigation";
import React from "react";

export default async function Page(props: any) {
    // const { page } = props.params;
    // const response: ActionResponse = await getPageData(page);

    // if (!response.success) {
    //   redirect('/not-found')
    // }

    // const { data } = response

    return (
    <main className="flex min-h-screen w-full flex-col">
      {/* {data?.template && data?.template === 'article' ? <Article data={data} /> : ''}
      {data?.template && data?.template === 'default' ? <Default data={data} /> : ''} */}
      Hello
    </main>
  );
}


