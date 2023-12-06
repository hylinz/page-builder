import { Page } from "@/app/lib/types";
import PageDesignerUI from "../../components/Pages/page-designer/PageDesignerUI";
import "../../ui/admin.css";
import { Suspense } from "react";
import Loading from "@/app/hcms/admin/create-page/loading";
export default async function Page() {
  // const pages = await getAllPages();
  // const { data } = pages
  // const pageData = JSON.stringify(data)

  return (
    <div className="bg-gradient-to-r from-white-gradient-start via-white-gradient-middle to-white-gradient-end w-full h-screen flex relative overflow-x-hidden">
      <Suspense fallback={<Loading />}>
        <PageDesignerUI />
      </Suspense>
    </div>
  );
}