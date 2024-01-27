import SearchTab from "@/components/SearchTab";
import FeedbackPopup from "@/components/FeedbackPopup";

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row bg-slate-700 md:h-screen">
      <SearchTab/>
      <FeedbackPopup/>
    </div>
   );
}
 
export default Page;