import { type FC } from 'react'
import { Badge } from "react-bootstrap";

import { useRetoolState } from '@tryretool/custom-component-collections'

// Models
import { JobData } from './models/PhaseData';
import './css/board.css'

interface jobListProps {
  job: JobData;
}

const EQUIP_BO = 40834364
const PART_BO = 75871087
const URGENT = 3080922

const ListItem: FC<jobListProps> = ({ job }) => {

  const hasEquipBo = job.otherTags.includes(EQUIP_BO)
  const hasPartBo = job.otherTags.includes(PART_BO)
  const hasUrgent = job.otherTags.includes(URGENT)
  // const [name, setName] = useRetoolState('name', '')


  const isHold = job.jobStatus === "Hold";
  const statusColor = isHold ? "orange" : "grey";
  const jobPageUrl = `https://go.servicetitan.com/#/Job/Index/${job.id}`;

  const days_old_string = job.days_old === 0 ? "Today" : `${job.days_old} Days`;
  const next_apt = job.next_apt_str ?? "";
  const backgroundColorType = (job.businessUnitId === 386 ? "#cfd4a1" : "white");
  const acsentTextColorRes = job.businessUnitId === 386 ? "#4c4d4c" : "lightgrey";



  return (
    <tr style={{ backgroundColor: backgroundColorType }}>
      <td>
        <a href={jobPageUrl} style={anchorStyle} target="_blank" rel="noopener noreferrer">
          {job.number} <span style={{ color: statusColor, fontSize: "0.6em" }}>{job.jobStatus}</span>
        </a>
        {job.jobStatus == "Completed"
          ?
          <span style={{ fontSize: "0.85", float: "right", color: acsentTextColorRes }}>{days_old_string} {next_apt}</span>
          :
          <span style={{ fontSize: "0.85", float: "right", color: acsentTextColorRes }}>{next_apt}</span>
        }
        {hasEquipBo && <Badge bg="danger">EQUIP BO</Badge>}
        {hasPartBo && <Badge bg="danger">PART BO</Badge>}
        {hasUrgent && <Badge bg="warning">URGENT</Badge>}
      </td>
    </tr>
  )
}

const anchorStyle = {
  color: "inherit",
  textDecoration: "none",
  cursor: "pointer",
};

export {ListItem}