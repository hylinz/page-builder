import { Page } from "@/app/lib/types";
import PageDesignerUI from "../../components/Pages/page-designer/PageDesignerUI";
import "../../ui/admin.css";
import { Suspense } from "react";

export default function Page() {


  return (
    <div className="bg-gradient-to-r from-white-gradient-start via-white-gradient-middle to-white-gradient-end w-full h-screen flex relative overflow-x-hidden">
      <Suspense fallback={<div>Loading...</div>}>
        <PageDesignerUI />
      </Suspense>
    </div>
  );
}