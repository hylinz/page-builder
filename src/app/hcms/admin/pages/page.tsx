import PagesUI from "@/app/hcms/components/Pages/PagesUI";
import { getAllPages } from "@/app/actions/page-actions";
import { Page } from "@/app/lib/types";
export default async function Page() {

    const pages = await getAllPages();
    const { data } = pages
    const pageData = JSON.stringify(data)

    
    return (
        <div className="bg-gradient-to-r from-white-gradient-start via-white-gradient-middle to-white-gradient-end w-full h-screen p-8 text-black">
            <PagesUI data={pageData} /> 
            
        </div>
  );
}


