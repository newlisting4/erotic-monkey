import Home from "@/app/components/Home";
import { site, API_URL } from "./config/index";
import { headers } from 'next/headers'
import { CloudLightning } from "lucide-react";

export default async function Page() {
  const headersList = headers()
  let content;
  const userAgent = headersList.get("user-agent")
  
  const isMobileView = userAgent.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  );

  const isTabletView = userAgent.match(
    /Tablet|iPad|Playbook|Silk|Kindle|(Android(?!.*Mobile))/i
  );

  const device = isMobileView ? "phone" : isTabletView ? "ipad" : "desktop";

  const url = `${API_URL}/${site}/${device}`;

  const res = await fetch(url);
  console.log(res)
  const data = await res.json();
  console.log(data)
  
  if (data?.success !== "exists") {
      content = <div className="col-span-12 text-center text-xl mt-10">No Page found!!</div>
  }
  if (data?.success == "exists") {
      content = <Home />
  }
  
  return (
    <div>
     {content}
    </div>
  )
}
