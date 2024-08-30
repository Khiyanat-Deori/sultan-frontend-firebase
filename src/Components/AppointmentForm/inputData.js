import { MdOutlinePersonOutline, MdOutlineDateRange } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import { IoMdTime } from "react-icons/io";
const inputData = [
  {
    icon: <MdOutlinePersonOutline/>,
    label: "Your Full Name",
    type: "text",
    id: "fullName",
  },
  {
    icon: <TbPhoneCall />,
    label: "Your Phone Number",
    type: "tel",
    id: "phoneNumber",
  },
  {
    icon: <MdOutlineDateRange />,
    label: "Select Date",
    type: "date",
    id: "appointmentDate",
    isDate: true,
  },
  {
    icon: <IoMdTime />,
    label: "Appointment Time",
    type: "select",
    id: "appointmentTime",
    options: [
      { value: "10:00-11:00", label: "10:00 - 11:00" },
      { value: "11:00-12:00", label: "11:00 - 12:00" },
      { value: "12:00-13:00", label: "12:00 - 13:00" },
      { value: "13:00-14:00", label: "13:00 - 14:00" },
      { value: "14:00-15:00", label: "14:00 - 15:00" },
      { value: "15:00-16:00", label: "15:00 - 16:00" },
    ],
  },
];
export default inputData;
