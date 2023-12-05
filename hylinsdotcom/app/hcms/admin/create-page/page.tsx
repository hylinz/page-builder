import { Page } from "@/app/lib/types";
import PageDesignerUI from "../../components/Pages/PageDesignerUI";
export default async function Page() {

    // const pages = await getAllPages();
    // const { data } = pages
    // const pageData = JSON.stringify(data)

    
    return (
        <div className="bg-gradient-to-r from-white-gradient-start via-white-gradient-middle to-white-gradient-end w-full h-screen flex">
  
            <PageDesignerUI />
        </div>
  );
}


