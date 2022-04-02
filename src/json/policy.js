import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import CheckIcon from "@mui/icons-material/Check";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
const policy = [
  {
    name: "Đảm bảo độ chân thật",
    description: "Đảm bảo về tính chân thật của trọ",
    icon: <ThumbUpOffAltIcon className="icon" />,
  },
  {
    name: "Book lịch hẹn",
    description: "Hỗ trợ tính năng book lịch để coi trọ",
    icon: <EventAvailableIcon className="icon" />,
  },
  {
    name: "Tính chính xác",
    description: "Bảo đảm kết quả về tính chính xác lên tới 90%",
    icon: <CheckIcon className="icon" />,
  },
  {
    name: "Hỗ trợ khách hàng",
    description: "Dịch vụ hỗ trợ khách hàng tận tâm ",
    icon: <ContactSupportIcon className="icon" />,
  },
];

export default policy;
