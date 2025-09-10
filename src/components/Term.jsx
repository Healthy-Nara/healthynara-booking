import React, { useState } from "react";
import logo from "./../assets/image/Vector.png";
import { useNavigate } from "react-router-dom";

const Term = () => {
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      id: 1,
      title: "1. Service အသုံးပြုသူ၏ တာဝန်ဝတ္တရားများ",
      content: (
        <>
          <ul className="space-y-4 list-disc list-inside">
            <li className="text-white text-[14px]">
              စောင့်ရှောက်မှု Service သုံးစွဲလိုသူသည် ကြိုတင် Booking မှာယူသည့် ဝန်ဆောင်မှုရယူရန်
              မိမိ၏ ကိုယ်ရေးအချက်အလက်များဖြင့် စာရင်းသွင်းရမည်ဖြစ်သည်။
            </li>
            <li className="text-white text-[14px]">
              မိမိတို့အကောင့်လုံခြုံရေးအတွက် တာဝန်ရှိပြီး အကောင့်လုံခြုံရေး ချိုးဖျက်ခံရပါက
              ပလက်ဖောင်းသို့ ချက်ချင်းအကြောင်းကြားရမည်။
            </li>
            <li className="text-white text-[14px]">
              ရည်ညွှန်းထားသည့် Caregiver ဝန်ဆောင်မှုပေးသူသည် ယခင်က တာဝန်ပေးခဲ့ဖူးခြင်း (သို့မဟုတ်)
              အခြားနည်းဖြင့် ဆက်သွယ်ခြင်းများရှိပါက ပလက်ဖောင်းအား ချက်ချင်း အသိပေးရန်။
            </li>
            <li className="text-white text-[14px]">
              ပလက်ဖောင်းသည် Caregiver ဝန်ဆောင်မှုပေးသူ၏ စောင့်ရှောက်ခြင်းဆိုင်ရာ
              လုပ်ငန်းတာဝန်များအား ချုပ်ကိုင်လမ်းညွှန်ခြင်းမရှိပါ။ Service အသုံးပြုသူတွင်သာ
              Caregiver ဝန်ဆောင်မှုပေးသူများအား လိုအပ်ချက်များနှင့်အညီ စီမံခန့်ခွဲရန်
              တာဝန်အပြည့်ရှိပါသည်။
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 2,
      title: "2. ငွေပေးချေမှုနှုန်းထား",
      content: (
        <>
          <ul className="space-y-4 list-disc list-inside">
            <li className="text-white text-[14px]">
              နေ့စဉ်၊ အပတ်စဉ်၊ လစဉ် လုပ်ငန်းတာဝန်များအတွက် ငွေတောင်းခံလွှာများ ထုတ်ပေးမည်ဖြစ်ပြီး
              ငွေပေးချေမှုကို ပလက်ဖောင်း၏ ငွေပေးချေမှုစနစ်မှတစ်ဆင့် ပေးချေရမည်ဖြစ်ပါသည်။
            </li>
            <li className="text-white text-[14px]">
              ငွေပေးချေမှုကို Caregiver ဝန်ဆောင်မှုပေးသူများထံ တိုက်ရိုက်ပေးချေခြင်းပြုလုပ်၍မရပါ။
              ထိုသို့ တိုက်ရိုက်ပေးချေခြင်းပြုလုပ်ပါက ဝန်ဆောင်မှုအတွက် မလိုလားအပ်သည့်
              အနှောင့်အယှက်များ ဖြစ်ပေါ်လာနိုင်ပါသည်။
            </li>
            <li className="text-white text-[14px]">
              ငွေပေးချေမှုပြုလုပ်ရာတွင် Caregiver Service Fees ၏ <br /> Daily Package - 10% <br />{" "}
              Weekly Package - 7% <br /> Monthly Package -5% <br /> နှုန်းထားများဖြင့် Platform Fees
              ကို Service အသုံးပြုသူများထံမှ ကောက်ခံသွားမည်ဖြစ်ပါသည်။
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 3,
      title: " 3. Caregiver ဝန်ဆောင်မှုပေးသူအား စစ်ဆေးခြင်းနှင့် အရည်အချင်း",
      content: (
        <>
          <ul className="space-y-4 list-disc list-inside">
            <li className="text-white text-[14px]">
              ပလက်ဖောင်းသည် Caregiver ဝန်ဆောင်မှုပေးသူများ၏ နောက်ကြောင်း ရာဇဝင်နှင့် အ‌ရည်အချင်းများ
              အမှန်တကယ် ရှိ/မရှိကို တင်းကြပ်စွာ စစ်ဆေးပါသည်။
            </li>
            <li className="text-white text-[14px]">
              ပလက်ဖောင်းမှ မှန်ကန်သောအချက်အလက်များကိုသာ ဖော်ပြပေးမည်ဖြစ်သော်လည်း Caregiver
              ဝန်ဆောင်မှုပေးသူ၏ အချက်အလက်သည် ထိုသူ၏အကြောင်းအရာ အလုံးစုံ ဖြစ်ကြောင်း အာမ မခံနိုင်ပါ။
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 4,
      title: "4. Service Booking ပယ်ဖျက်ခြင်းနှင့်ပြန်အမ်း‌ငွေ မူဝါဒ",
      content: (
        <>
          <ul className="space-y-2 list-disc list-inside">
            <li className="text-white text-[14px]">
              Service အသုံးပြုသူများအား ကောင်းမွန်သည့်ဝန်ဆောင်မှုပေးစွမ်းနိုင်ရန်အတွက် Service
              အသုံးပြုသည် ကြိုတင် Booking မှာကြားခြင်း မပြုလုပ်မီ မိမိတို့လိုအပ်ချက်နှင့်ကိုက်ညီသည့်
              Caregiver ဝန်ဆောင်မှုပေးသူအား သေချာစွာ ရွေးချယ်ထားရှိရန်။
            </li>
            <ul className="space-y-2 list-disc list-inside">
              <p className="text-white font-bold text-[14px] my-5">ပယ်ဖျက်ခြင်း မူဝါဒ</p>
              <li className="text-white text-[14px]">
                နေ့ပိုင်း duty နှင့် Live-in (client နေအိမ်တွင်နေထိုင်ရမည့်) booking များအတွက် :
                Service ပေးရမည့်နေ့မတိုင်မီ ညနေ (၆း၀၀) နာရီအချိန်အထိ ပယ်ဖျက်ခွင့်ရှိပါသည်။
              </li>
              <li className="text-white text-[14px]">
                ညပိုင်း duty များအတွက် : Service ပေးရမည့်ညမတိုင်မီ မွန်းလွဲ (၁း၀၀) နာရီအချိန်အထိ
                ပယ်ဖျက်ခွင့်ရှိပါသည်။
              </li>
            </ul>
            <ul className="space-y-2 list-disc list-inside">
              <p className="text-white text-[14px] font-bold my-5">ဖျက်သိမ်းခွင့်</p>
              <li className="text-white text-[14px]">
                ဖျက်သိမ်းခွင့်ရှိသည့်အချိန်အတိုင်းအတာအတွင်း ဖျက်သိမ်းခအဖြစ် တစ်ခါဖျက်သိမ်းလျှင်
                ၅,၀၀၀ ကျပ်သတ်မှတ်ထားပါသည်။ ယင်းသို့ အခကြေးငွေ သတ်မှတ်ခြင်းသည် အချိန်နီးကပ်မှ
                ဖျက်သိမ်းခြင်းများ မရှိစေရန်နှင့် Caregiver ဝန်ဆောင်မှု ပေးသူနှင့် service
                အသုံးပြုသူတို့အကြား အခက်အခဲပြဿနာမရှိ ကောင်းမွန်မျှတသော ဆက်ဆံရေးဖြစ်စေလို၍
                သတ်မှတ်ထားခြင်းဖြစ်ပါသည်။
              </li>
            </ul>
            <li className="text-white text-[14px]">
              အချိန်နီးကပ်မှဖျက်သိမ်းခြင်းကြောင့် ဖြစ်ပေါ်လာသော အခက်အခဲများနှင့်ပတ်သက်၍ : Caregiver
              ဝန်ဆောင်မှုပေးသူနှင့် service အသုံးပြုသူတို့အကြား အခက်အခဲပြဿနာ ဖြစ်စေနိုင်သဖြင့်
              ဖျက်သိမ်းခွင့်ရှိသည့်အချိန်အတိုင်းအတာပြင်ပမှ ဖျက်သိမ်းခြင်းတို့အတွက် ငွေပြန်အမ်းမည်
              မဟုတ်ပါ။
            </li>
            <li className="text-white text-[14px]">
              ပြန်အမ်းငွေပြန်လည်ပေးအပ်ခြင်း : ငွေပြန်အမ်းရန် ရုံးဖွင့်ရက်အတွင်း အချိန် (၂) ရက်ကြာ
              မြင့်မည်ဖြစ်ပါသည်။
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 5,
      title: "5. Caregivers ဝန်ဆောင်မှုပေးသူများအား တိုက်ရိုက်တာဝန်ပေးခန့်အပ်ခြင်း",
      content: (
        <>
          <ul className="space-y-4 list-disc list-inside">
            <li className="text-white text-[14px]">
              Service သုံးစွဲသူမှ ပလက်ဖောင်းမှတစ်ဆင့်မဟုတ်ဘဲ Caregiver ဝန်ဆောင်မှု ပေးသူများအား
              တိုက်ရိုက်တာဝန်ပေးခန့်အပ်ပါက ၎င်းတို့၏ အရည်အသွေးများ၊ နောက်ကြောင်း ရာဇဝင်များအား
              ကိုယ်တိုင်စစ်ဆေးရမည်ဖြစ်ပါသည်။
            </li>
            <li className="text-white text-[14px]">
              ယင်းကဲ့သို့ တိုက်ရိုက်တာဝန်ပေးခန့်အပ်ခြင်းကြောင့် ဖြစ်ပေါ်လာနိုင်သည့် နောက်ဆက်တွဲ
              ပြဿနာများအတွက် ပလက်ဖောင်းတွင် တာဝန်မရှိပါ။
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div>
      <div className="p-4 max-w-2xl mx-auto bg-[#019177]">
        <div className="flex items-center justify-between">
          <img src={logo} alt="" className="rounded-2xl" />

          <h1 className="font-bold text-right leading-[40px] text-white text-[20px]">
            စည်းမျဉ်းနှင့် <br />
            သဘောတူညီချက်များ
          </h1>
        </div>

        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="mt-[50px] overflow-y-auto h-[500px]"
        >
          {sections.map((section, index) => (
            <React.Fragment key={section.id}>
              <h2 id={`accordion-collapse-heading-${section.id}`}>
                <button
                  type="button"
                  className={`flex items-center border-b  justify-between w-full p-5 font-medium rtl:text-right text-white gap-3 `}
                  data-accordion-target={`#accordion-collapse-body-${section.id}`}
                  aria-expanded={openSection === section.id}
                  aria-controls={`accordion-collapse-body-${section.id}`}
                  onClick={() => toggleSection(section.id)}
                >
                  <span className="font-bold text-start text-[16px] leading-[2]">
                    {section.title}
                  </span>
                  <svg
                    data-accordion-icon
                    className={` shrink-0 transition-transform duration-200`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    height="14px"
                    viewBox="0 -960 960 960"
                    width="14px"
                    fill="white"
                  >
                    <path d="M824-80 716-188q-22 13-46 20.5t-50 7.5q-75 0-127.5-52.5T440-340q0-75 52.5-127.5T620-520q75 0 127.5 52.5T800-340q0 26-7.5 50T772-244l108 108-56 56ZM620-240q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm220-320h-80v-200h-80v120H280v-120h-80v560h200v80H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v200ZM480-760q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z" />
                  </svg>
                </button>
              </h2>
              <div
                id={`accordion-collapse-body-${section.id}`}
                className={`${openSection === section.id ? "" : "hidden"}`}
                aria-labelledby={`accordion-collapse-heading-${section.id}`}
              >
                <div
                  className={`p-5  border border-gray-200 dark:border-gray-700 leading-8 ${
                    index > 0 ? "border-t-0" : "border-t-0 border-b-0"
                  } ${index === sections.length - 1 ? "" : "border-b-0"}`}
                >
                  {section.content}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="sticky bottom-0 bg-white h-[100px]  flex items-center gap-5 px-5">
        <button className="p-5 border-2 border-gra w-full text-primary font-bold rounded-xl active:bg-gray-200">
          မတူပါ
        </button>
        <button
          onClick={() => navigate("/form-one")}
          className="bg-primary p-5 w-full text-white font-bold rounded-xl active:bg-secondary"
        >
          သဘောတူပါတယ်
        </button>
      </div>
    </div>
  );
};

export default Term;
