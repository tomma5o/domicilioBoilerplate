// Components
import { D_Contacts } from "./dialog_contacts";
import { D_Services } from "./dialog_services";
import { D_Payments } from "./dialog_payments";
import { D_Notes } from "./dialog_notes";

export const Dialog = ({
   isOpen,
   closePopup,
   name,
   tel,
   fb,
   mail,
   site,
   satispay,
   services,
   note,
}) => {
   return (
      <dialog
         class="fixed inset-0 backdrop w-screen h-screen"
         style={{ display: isOpen ? "initial" : "none" }}
         onClick={closePopup}
      >
         <div
            class="absolute w-5/6 max-h-screen max-w-screen-md bg-white rounded-lg p-6 shadow-lg border border-gray-700 overflow-y-auto"
            style={{
               top: "50%",
               left: "50%",
               transform: "translate(-50%, -50%)",
            }}
         >
            <button
               class="bg-red-300 rounded-full text-center cursor-pointer float-right"
               style={{ width: "30px", height: "30px", lineHeight: "30px" }}
               onClick={closePopup}
            >
               ✖️
            </button>
            <h1 class="text-3xl mb-5 font-bold flex-1 text-gray-700">{name}</h1>
            {note && <D_Notes {...{ note }} />}
            <D_Contacts {...{ tel, mail, site, fb }} />
            {satispay && <D_Payments {...{ satispay }} />}
            {services && <D_Services {...{ services }} />}
         </div>
      </dialog>
   );
};
